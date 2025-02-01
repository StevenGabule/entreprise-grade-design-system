import React, { useContext } from 'react';
import { AccordionContext } from './Accordion';
import styled, { css } from 'styled-components';

const Header = styled.div`
  padding: ${({ theme }) => theme.spacing.medium};
  background: ${({ theme }) => theme.colors.primary};
  color: #fff;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Arrow = styled.span<{ isOpen: boolean }>`
  transition: transform 0.3s ease;
  ${({ isOpen }) =>
    isOpen &&
    css`
      transform: rotate(180deg);
    `}
`;

interface AccordionHeaderProps {
	children?: React.ReactNode
	itemId?: string;
}

export const AccordionHeader: React.FC<AccordionHeaderProps> = ({children, itemId = ''}) => {
	const context = useContext(AccordionContext);
	if(!context) {
		throw new Error('AccordionHeader must be used within an Accordion')
	}
	const {activeItems, toggleItem} = context;
	const isOpen = activeItems.includes(itemId);

	return (
		<Header 
			onClick={() => toggleItem(itemId)}
			role='button'
			tabIndex={0}
			onKeyDown={(e) => {
				if(e.key === 'Enter' || e.key === ' ') {
					toggleItem(itemId)
				}
			}}>
				{children}
				<Arrow isOpen={isOpen}>▼</Arrow>
			</Header>
	)
}