import React from 'react';
import styled from 'styled-components';
import {ResponsiveContainer,LineChart,Line,BarChart,Bar,AreaChart,Area,CartesianGrid,XAxis,YAxis,Tooltip,Legend,PieChart,Pie,Cell} from 'recharts';

// A container that controls the overall height of the chart
const ChartWrapper = styled.div`
  width: 100%;
  height: 400px;
`;

// Define the supported chart types and component props
export interface ChartProps {
  /** Chart type: 'line', 'bar', 'area', or 'pie' */
  type?: 'line' | 'bar' | 'area' | 'pie';
  /** Data array to be charted */
  data: any[];
  /**
   * The key to use for the X‑axis (or name for pie chart).
   * For pie charts, this is the name.
   */
  xKey: string;
  /**
   * One or more keys representing the values for each data series.
   * For pie charts, use a single key representing the value.
   */
  yKeys?: string[];
  /**
   * Optional array of colors for each series or slice.
   * Defaults will be used if not provided.
   */
  colors?: string[];
}

export const Chart: React.FC<ChartProps> = ({
  type = 'line', data, xKey,yKeys = [],colors = [],}) => {
  const renderLineChart = () => (
    <LineChart data={data}>
      <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
      <XAxis dataKey={xKey} />
      <YAxis />
      <Tooltip />
      <Legend />
      {yKeys.map((key, index) => (
        <Line
          key={key}
          type="monotone"
          dataKey={key}
          stroke={colors[index] || '#8884d8'}
        />
      ))}
    </LineChart>
  );

  // Render a Bar Chart
  const renderBarChart = () => (
    <BarChart data={data}>
      <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
      <XAxis dataKey={xKey} />
      <YAxis />
      <Tooltip />
      <Legend />
      {yKeys.map((key, index) => (
        <Bar
          key={key}
          dataKey={key}
          fill={colors[index] || '#8884d8'}
        />
      ))}
    </BarChart>
  );

  // Render an Area Chart
  const renderAreaChart = () => (
    <AreaChart data={data}>
      <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
      <XAxis dataKey={xKey} />
      <YAxis />
      <Tooltip />
      <Legend />
      {yKeys.map((key, index) => (
        <Area
          key={key}
          type="monotone"
          dataKey={key}
          stroke={colors[index] || '#8884d8'}
          fill={colors[index] || '#8884d8'}
        />
      ))}
    </AreaChart>
  );

  // Render a Pie Chart  
  // For pie charts, assume:
  //   - xKey is used as the slice label.
  //   - yKeys[0] is the value.
  const renderPieChart = () => {
    const valueKey = yKeys[0];
    return (
      <PieChart>
        <Tooltip />
        <Legend />
        <Pie
          data={data}
          dataKey={valueKey}
          nameKey={xKey}
          cx="50%"
          cy="50%"
          outerRadius={80}
          label
        >
          {data.map((_, index) => (
            <Cell key={`cell-${index}`} fill={colors[index] || '#8884d8'} />
          ))}
        </Pie>
      </PieChart>
    );
  };

  // Choose which chart to render based on the "type" prop
  const renderChart = () => {
    switch (type) {
      case 'bar':
        return renderBarChart();
      case 'area':
        return renderAreaChart();
      case 'pie':
        return renderPieChart();
      case 'line':
      default:
        return renderLineChart();
    }
  };

  return (
    <ChartWrapper>
      <ResponsiveContainer width="100%" height="100%">
        {renderChart()}
      </ResponsiveContainer>
    </ChartWrapper>
  );
};

export const sampleData = [
  { date: '2023-01-01', sales: 400, profit: 240 },
  { date: '2023-01-02', sales: 300, profit: 139 },
  { date: '2023-01-03', sales: 200, profit: 980 },
  { date: '2023-01-04', sales: 278, profit: 390 },
  { date: '2023-01-05', sales: 189, profit: 480 },
];

export const ChartContainerWrapper = styled.div`
  padding: ${({ theme }) => theme.spacing.large};
`;
