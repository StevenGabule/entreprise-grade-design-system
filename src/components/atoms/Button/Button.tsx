import React from 'react';
import styled from 'styled-components'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode
	variant?: 'primary' | 'secondary';
}

export const Button = styled.button<ButtonProps>`
  padding: ${({ theme }) => theme.spacing.medium};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: ${({ variant, theme }) => variant === 'secondary' ? theme.colors.secondary : theme.colors.primary};
  color: #fff;
  transition: opacity 0.2s ease-in-out;

  &:hover {
    opacity: 0.8;
  }
`
