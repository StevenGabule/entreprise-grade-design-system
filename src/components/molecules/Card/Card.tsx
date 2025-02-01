import React from 'react'
import styled from 'styled-components'

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
	children: React.ReactNode
}

export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
	children: React.ReactNode
}

export interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
	children: React.ReactNode
}
export interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
	children: React.ReactNode
}

const CardHeaderContainer = styled.div`
  padding: ${({ theme }) => theme.spacing.medium};
  background-color: ${({ theme }) => theme.colors.primary};
  color: #fff;
  font-size: ${({ theme }) => theme.typography.fontSizes.large};
  font-weight: ${({ theme }) => theme.typography.fontWeights.bold};
`;

const CardContentContainer = styled.div`
	padding: ${({ theme }) => theme.spacing.medium};
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
`;

const CardFooterContainer = styled.div`
  padding: ${({ theme }) => theme.spacing.medium};
  background-color: ${({ theme }) => theme.colors.backgroundAlt || '#f8f9fa'};
  border-top: 1px solid ${({ theme }) => theme.colors.secondary};
  text-align: right;
`;

const CardContainer = styled.div`
	background-color: ${({ theme }) => theme.colors.background};
	border: 1px solid ${({ theme }) => theme.colors.secondary};
	border-radius: 8px;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	overflow: hidden;
	display: flex;
	flex-direction: column;
	transition: box-shadow 0.3s ease;
  
  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`

export const CardHeader: React.FC<CardHeaderProps> = ({ children, ...rest }) => <CardHeaderContainer {...rest}>{children}</CardHeaderContainer>
export const CardContent: React.FC<CardContentProps> = ({ children, ...rest }) => <CardContentContainer {...rest}>{children}</CardContentContainer>
export const CardFooter: React.FC<CardFooterProps> = ({ children, ...rest }) => <CardFooterContainer {...rest}>{children}</CardFooterContainer>
export const Card: React.FC<CardProps> & {
	Header: React.FC<CardHeaderProps>;
	Content: React.FC<CardContentProps>;
	Footer: React.FC<CardFooterProps>;
} = ({ children, ...rest }) => <CardContainer {...rest}>{children}</CardContainer>;

Card.Header = CardHeader;
Card.Content = CardContent;
Card.Footer = CardFooter;

export const CardContainerWrapper = styled.div`
  padding: ${({ theme }) => theme.spacing.large};
  display: grid;
  gap: ${({ theme }) => theme.spacing.large};
`;