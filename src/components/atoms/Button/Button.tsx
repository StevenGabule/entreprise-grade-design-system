import React from 'react';
import './Button.css';
interface ButtonProps {
	children: React.ReactNode
	variant?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', ...props }) => {
	return (
		<button className={`btn btn-${variant}`} {...props} />
	)
}

export default Button;