import React from 'react';
import styled from 'styled-components';

const AccordionWrapper = styled.div`
	border: 1px solid ${({ theme }) => theme.colors.secondary};
	border-radius: 4px;
	overflow: hidden;
`;

export interface AccordionContextProps {
	activeItems: string[]
	toggleItem: (id: string) => void;
	allowMultiple?: boolean;
}

interface AccordionProps {
	children: React.ReactNode;
	allowMultiple?: boolean
}

export const AccordionContext = React.createContext<AccordionContextProps | undefined>(undefined)

export const Accordion: React.FC<AccordionProps> = ({ children, allowMultiple = false }) => {
	const [activeItems, setActiveItems] = React.useState<string[]>([]);
	const toggleItem = (id: string) => {
		setActiveItems((prev) => {
			if (prev.includes(id)) {
				return prev.filter(item => item !== id)
			} else {
				return allowMultiple ? [...prev, id] : [id];
			}
		})
	}
	return (
		<AccordionContext.Provider value={{ activeItems, toggleItem, allowMultiple }}>
			<AccordionWrapper>{children}</AccordionWrapper>
		</AccordionContext.Provider>
	)
}
