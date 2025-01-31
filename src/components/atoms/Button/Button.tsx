import React from 'react';
import styled from 'styled-components'

const StyledButton = styled.button<{primary?: boolean}>`
	background-color: ${(props) => (props.primary) ? '#007bff' : '#6c757d'};
	color: white;
	border: none;
	padding: 10px 20px;
	border-radius: 5px;
	cursor: pointer;
	font-size: 16px;

	&:hover {
		opacity: 0.9;
	}
`

interface ButtonProps {
	children: React.ReactNode;
	primary?: boolean;
	onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({children, ...props}) => {
	return (
		<StyledButton {...props}>
			{children}
		</StyledButton>
	)
}

export default Button;