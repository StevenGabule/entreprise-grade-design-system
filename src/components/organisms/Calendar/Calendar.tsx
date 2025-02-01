import 'react-day-picker/dist/style.css';
import React from 'react'
import styled from 'styled-components'
import { DayPicker } from 'react-day-picker'

const CalendarWrapper = styled.div`
	.rdp {
    font-family: ${({ theme }) => theme.typography.fonts.primary};
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    border: 1px solid ${({ theme }) => theme.colors.secondary};
    border-radius: 8px;
    padding: ${({ theme }) => theme.spacing.medium};
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
  .rdp-nav {
    display: flex;
    justify-content: space-between;
    margin-bottom: ${({ theme }) => theme.spacing.medium};
    
    button {
      background-color: ${({ theme }) => theme.colors.primary};
      color: #fff;
      border: none;
      padding: 4px 8px;
      border-radius: 4px;
      cursor: pointer;
      transition: background-color 0.2s ease;
      
      &:hover {
        background-color: ${({ theme }) => theme.colors.primary}CC;
      }
    }
  }
	 .rdp-day {
    border-radius: 4px;
    padding: 0.5rem;
    transition: background-color 0.2s ease;
    
    &:hover {
      background-color: ${({ theme }) => theme.colors.primary}20;
    }
    
    &.rdp-day_selected {
      background-color: ${({ theme }) => theme.colors.primary};
      color: #fff;
    }
    
    &.rdp-day_today {
      border: 1px solid ${({ theme }) => theme.colors.primary};
    }
  }
  
  .rdp-months {
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.medium};
  }
`;

export interface CalendarProps {}

export const Calendar: React.FC<CalendarProps> = (props) => (
	<CalendarWrapper>
		<DayPicker {...props} />
	</CalendarWrapper>
)

export  const CalendarContainer = styled.div`
  padding: ${({ theme }) => theme.spacing.large};
  background-color: ${({ theme }) => theme.colors.backgroundAlt || '#f7f7f7'};
`;
