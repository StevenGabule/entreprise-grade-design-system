import React from 'react';
import styled, { css, keyframes } from 'styled-components';

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
	variant: 'info' | 'warning' | 'error' | 'success';
	title?: string;
	message: string;
	dismissible?: boolean;
	onClose?: () => void;
	autoDismiss?: number;
}

const fadeOut = keyframes`
	from {
		opacity: 1;
		transform: translateX(0);
	}
	to {
		opacity: 0;
		transform: translateY(-20px);
	}
`;

const variantStyles = {
	info: css`
		background-color: ${({theme}) => theme.colors.info || '#d9edf7'};
		color: ${({theme}) => theme.colors.infoText || '#31708f'};
	`,
	warning: css`
		background-color: ${({theme}) => theme.colors.warning || '#fcf8e3'};
		color: ${({theme}) => theme.colors.warningText || '#8a6d3b'};
	`,
	error: css`
		background-color: ${({theme}) => theme.colors.error || '#f2dede'};
		color: ${({theme}) => theme.colors.errorText || '#a94442'};
	`,
	success: css`
		background-color: ${({theme}) => theme.colors.success || '#dff0d8'};
		color: ${({theme}) => theme.colors.successText || '#3c763d'};
	`
}

const AlertContainer = styled.div<{variant: 'info' | 'warning' | 'error' | 'success'; isClosing: boolean}>`
	display: flex;
	align-items: center;
	padding: ${({theme}) => theme.spacing.medium};
	border-radius: 4px;
	margin-bottom: ${({theme}) => theme.spacing.medium};
	position: relative;
	transition: all 0.3s ease;
	${({variant}) => variantStyles[variant]};

	${({isClosing}) => isClosing && css`
		animation: ${fadeOut} 0.5s forwards;
	`}
`;

const ContentWrapper = styled.div`
	flex: 1;
`;

const Title = styled.div`
  font-weight: ${({ theme }) => theme.typography.fontWeights.bold};
  margin-bottom: 4px;
`;

const Message = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSizes.medium};
`;

const CloseButton = styled.button`
  background: transparent;
  border: none;
  color: inherit;
  cursor: pointer;
  padding: 0;
  margin-left: ${({ theme }) => theme.spacing.medium};
  font-size: 1.2rem;
  line-height: 1;
`

export const Alert: React.FC<AlertProps> = ({
	variant = 'info',
	title,
	message,
	dismissible = false,
	onClose,
	autoDismiss,
	...rest
}) => {
	const [isVisible, setIsVisible] = React.useState(true);
	const [isClosing, setIsClosing] = React.useState(false);

	const handleClose = () => {
		setIsClosing(true)
		setTimeout(() => {
			setIsVisible(false)
			if(onClose) onClose();
		}, 500)
	}

	React.useEffect(() => {
		let timer: NodeJS.Timeout;
		if(autoDismiss && autoDismiss > 0) {
			timer = setTimeout(() => {
				handleClose();;
			}, autoDismiss)
		}
		return () => {
			if(timer) clearTimeout(timer)
		}
	}, [autoDismiss])

	if(!isVisible) return null;

	return (
		<AlertContainer
			variant={variant}
			isClosing={isClosing}
			role='alert'
			{...rest}
		>
			<ContentWrapper>
				{title && <Title>{title}</Title>}
				<Message>{message}</Message>
			</ContentWrapper>
			{dismissible && (
				<CloseButton aria-label='Close alert' onClick={handleClose}>
					&times;
				</CloseButton>
			)}
		</AlertContainer>
	)

}