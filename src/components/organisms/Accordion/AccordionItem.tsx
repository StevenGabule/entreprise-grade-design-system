import React from 'react';

interface AccordionItemProps {
	children: React.ReactNode;
	id: string;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({children, id}) => {
	return (
		<div>
			{React.Children.map(children, (child) => {
				if(React.isValidElement(child)) {
					// @ts-ignore
					return React.cloneElement(child, {itemId: id})
				}
				return child;
			})}
		</div>
	)
}