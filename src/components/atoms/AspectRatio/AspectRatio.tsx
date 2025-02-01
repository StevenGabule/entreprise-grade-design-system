import React from 'react';
import { styled } from 'styled-components';

export interface AspectRatioProps extends React.HTMLAttributes<HTMLDivElement> {
	 /**
   * The aspect ratio defined as width divided by height.
   * For a 16:9 aspect ratio, pass 16/9 (or approximately 1.7778).
   */
	ratio: number;
	children: React.ReactNode;
}

/**
 * Container that uses a padding-bottom hack to enforce a fixed aspect ratio.
 */
const AspectRatioContainer = styled.div<{ paddingBottom: string }>`
  position: relative;
  width: 100%;
  padding-bottom: ${({ paddingBottom }) => paddingBottom};
  overflow: hidden;
`;

/**
 * Content is absolutely positioned to fill the container.
 */
const AspectRatioContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const AspectRatio: React.FC<AspectRatioProps> = ({ratio, children, ...rest}) => {
	const paddingBottom = `${100 / ratio}%`;
	return (
		<AspectRatioContainer paddingBottom={paddingBottom} {...rest}>
			<AspectRatioContent>{children}</AspectRatioContent>
		</AspectRatioContainer>
	)
}

export const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;