import React from 'react';
import styled, { css } from 'styled-components';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
	children: React.ReactNode;
	variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error';
	size?: 'small' | 'medium' | 'large';
	pill?: boolean;
}

const BadgeContainer = styled.span<{ variant: BadgeProps['variant'], size: BadgeProps['size'], pill?: boolean }>`
	display: inline-block;
	text-align: center;
	white-space: nowrap;
	font-weight: ${({ theme }) => theme.typography.fontWeights.bold};

  /* Padding and font-size based on size prop */
	padding: ${({ size }) => {
		switch (size) {
			case 'small':
				return '2px 6px'
			case 'large':
				return '6px 12px'
			case 'medium':
			default:
				return '4px 8px'
		}
	}};

	font-size: ${({ size }) => {
		switch (size) {
			case 'small':
				return '0.75rem';
			case 'large':
				return '1rem';
			case 'medium':
			default:
				return '0.875rem';
		}
	}};
	border-radius: ${({ pill }) => (pill ? '9999px' : '4px')};
	${({ variant, theme }) => {
		switch (variant) {
			case 'primary':
				return css`
					background-color: ${theme.colors.primary};
					color: #fff;
				`
			case 'secondary':
				return css`
          background-color: ${theme.colors.secondary};
          color: #fff;
        `;
			case 'success':
				return css`
          background-color: ${theme.colors.success || '#dff0d8'};
          color: ${theme.colors.successText || '#3c763d'};
        `;
			case 'warning':
				return css`
          background-color: ${theme.colors.warning || '#fcf8e3'};
          color: ${theme.colors.warningText || '#8a6d3b'};
        `;
			case 'error':
				return css`
          background-color: ${theme.colors.error || '#f2dede'};
          color: ${theme.colors.errorText || '#a94442'};
        `;
			case 'default':
			default:
				return css`
          background-color: ${theme.colors.backgroundAlt || '#eee'};
          color: ${theme.colors.text};
        `;
		}
	}}
`;

export const Badge: React.FC<BadgeProps> = ({ children, variant = 'default', size = 'medium', pill = false, ...rest }) => (
	<BadgeContainer variant={variant} size={size} pill={pill} {...rest}>
		{children}
	</BadgeContainer>
)

export const BadgeContainerDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  padding: 20px;
`;
