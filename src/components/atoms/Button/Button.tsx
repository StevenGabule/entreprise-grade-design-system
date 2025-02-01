import React from 'react';
import styled, { css } from 'styled-components'

const primaryStyles = css`
	background-color: ${({ theme }) => theme.colors.primary};
	color: #fff;
	border: none;
`;

const secondaryStyles = css`
	background-color: ${({ theme }) => theme.colors.secondary};
	color: #fff;
	border: none;
`;

const outlineStyles = css`
	background-color: transparent;
	border: 2px solid ${({ theme }) => theme.colors.primary};
	color: ${({ theme }) => theme.colors.primary};
`;

const ghostStyles = css`
	background-color: transparent;
	border: none;
	color: ${({ theme }) => theme.colors.primary};
`;

const smallSizeStyles = css`
  padding: 6px 12px;
  font-size: ${({ theme }) => theme.typography.fontSizes.small};
`;

const mediumSizeStyles = css`
  padding: 8px 16px;
  font-size: ${({ theme }) => theme.typography.fontSizes.medium};
`;

const largeSizeStyles = css`
  padding: 12px 24px;
  font-size: ${({ theme }) => theme.typography.fontSizes.large};
`;

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode
	variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
	size?: 'small' | 'medium' | 'large'
}

export const Button = styled.button<ButtonProps>`
  border-radius: 4px;
  cursor: pointer;
  transition: opacity 0.2s ease-in-out;
  font-family: ${({ theme }) => theme.typography.fonts.primary};

	/* Variant Styles */
	${({ variant = 'primary' }) => {
		switch (variant) {
			case 'secondary':
				return secondaryStyles;
			case 'outline':
				return outlineStyles;
			case 'ghost':
				return ghostStyles;
			case 'primary':
			default:
				return primaryStyles
		}
	}}

	/* Size Styles */
	${({ size = 'medium' }) => {
		switch (size) {
			case 'small':
				return smallSizeStyles;
			case 'large':
				return largeSizeStyles
			case 'medium':
			default:
				return mediumSizeStyles
		}
	}}

  &:hover {
    opacity: 0.8;
  }
`
