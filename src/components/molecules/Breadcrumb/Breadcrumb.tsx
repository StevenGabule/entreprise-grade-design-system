import React from 'react';
import styled from 'styled-components';

export interface BreadcrumbProps {
	children: React.ReactNode;
	separator?: React.ReactNode;
}

export interface BreadcrumbItemsProps {
	children: React.ReactNode;
	href?: string;
	isCurrentPage?: boolean;
}

const BreadcrumbNav = styled.nav`
  font-size: ${({ theme }) => theme.typography.fontSizes.medium};
`;

const BreadcrumbList = styled.ol`
	list-style: none;
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
`;

const BreadcrumbListItem = styled.li`
	display: flex;
	align-items: center;
`;

const DefaultSeparator = styled.span`
  margin: 0 ${({ theme }) => theme.spacing.small};
  color: ${({ theme }) => theme.colors.textSecondary || '#6c757d'};
`;

export const Breadcrumb: React.FC<BreadcrumbProps> & {
	Item: React.FC<BreadcrumbItemsProps>
} = ({ children, separator=<DefaultSeparator>/</DefaultSeparator>}) => {
	const items = React.Children.toArray(children);
	const itemsWithSeparators = items.flatMap((child, index) => index < items.length - 1 ? [child, React.cloneElement(separator as React.ReactElement, {key: `separator-${index}`})] : [child])
	return (
		<BreadcrumbNav aria-label='breadcrumb'>
			<BreadcrumbList>
				{itemsWithSeparators.map((child, index) => (
					<BreadcrumbListItem key={index}>{child}</BreadcrumbListItem>
				))}
			</BreadcrumbList>
		</BreadcrumbNav>
	)
}

export const BreadcrumbItem: React.FC<BreadcrumbItemsProps>  = ({children, href, isCurrentPage = false}) => {
	return href && !isCurrentPage ? (
		<a href={href}>{children}</a>
	) : <span aria-current='page'>{children}</span>
}

Breadcrumb.Item = BreadcrumbItem;

export const BreadCrumbContainer = styled.div`
  padding: ${({ theme }) => theme.spacing.large};
`;