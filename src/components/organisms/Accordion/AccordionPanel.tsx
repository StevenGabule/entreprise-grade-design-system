import React from 'react';
import { AccordionContext } from './Accordion';
import styled from 'styled-components';

const PanelWrapper = styled.div`
	overflow: hidden;
	transition: max-height 0.35s ease;
	background: ${({theme}) => theme.colors.background};
`;

const PanelContent = styled.div`
	padding: ${({theme}) => theme.spacing.medium};
	border-top: 1px solid ${({theme}) => theme.colors.secondary};
`;

interface AccordionPanelProps {
	children: React.ReactNode;
	itemId?: string;
}

export const AccordionPanel: React.FC<AccordionPanelProps> = ({children, itemId = ''}) => {
	const context = React.useContext(AccordionContext)
	if(!context) {
		throw new Error('Accordion Panel must be used within an accordion')
	}

	const {activeItems} = context;
	const isOpen = activeItems.includes(itemId)

	const contentRef = React.useRef<HTMLDivElement>(null)
	const [maxHeight, setMaxHeight] = React.useState('0px')

	React.useEffect(() => {
		if(contentRef.current) {
			setMaxHeight(isOpen ? `${contentRef.current.scrollHeight}px` : '0px')
		}
	}, [isOpen, children])

	return (
		<PanelWrapper style={{maxHeight}}>
			<PanelContent ref={contentRef}>{children}</PanelContent>
		</PanelWrapper>
	)
}