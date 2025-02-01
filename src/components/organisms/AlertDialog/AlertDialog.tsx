import React from 'react';
import ReactDOM from 'react-dom';
import styled, { keyframes, css } from 'styled-components';

export interface AlertDialogProps {
	open: boolean;
	title: string;
	message: string;
	onClose: () => void;
	actions?: React.ReactNode
}

const fadeIn = keyframes`
	from { opacity: 0; }
	to { opacity: 1;}
`;

const fadeOut = keyframes`
	from {opacity: 1;}
	to {opacity: 0;}
`

const Overlay = styled.div<{ closing?: boolean }>`
	position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  animation: ${fadeIn} 0.3s ease-out forwards;
  ${({ closing }) =>
		closing &&
		css`
      animation: ${fadeOut} 0.3s ease-out forwards;
    `}
  z-index: 999;
`;

const DialogContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  border-radius: 8px;
  max-width: 500px;
  width: 90%;
  padding: ${({ theme }) => theme.spacing.large};
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  animation: ${fadeIn} 0.3s ease-out forwards;
  z-index: 1000;
  position: relative;
`;

const Title = styled.h2`
  margin-top: 0;
  font-family: ${({ theme }) => theme.typography.fonts.primary};
  font-size: 1.5rem;
  margin-bottom: ${({ theme }) => theme.spacing.medium};
`;

const Message = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSizes.medium};
  margin-bottom: ${({ theme }) => theme.spacing.medium};
`;

const ActionsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: ${({ theme }) => theme.spacing.medium};
`;

const CloseButton = styled.button`
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.5rem;
  position: absolute;
  top: ${({ theme }) => theme.spacing.medium};
  right: ${({ theme }) => theme.spacing.medium};
  cursor: pointer;
`;

export const AlertDialog: React.FC<AlertDialogProps> = ({ open, title, message, onClose, actions }) => {
	const [closing, setClosing] = React.useState(false)

	React.useEffect(() => {
		if (!open) return;
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				triggerClose();
			}
		};
		document.addEventListener('keydown', handleKeyDown);
		return () => document.removeEventListener('keydown', handleKeyDown)
	});

	const triggerClose = () => {
		setClosing(true)
		setTimeout(() => {
			setClosing(false)
			onClose();
		}, 300)
	}

	const handleDialogClick = (e: React.MouseEvent) => {
		e.stopPropagation()
	};

	if (!open && !closing) return null;

	return ReactDOM.createPortal(
		<Overlay closing={closing} onClick={triggerClose}>
			<DialogContainer
				role='alertdialog'
				aria-modal='true'
				aria-labelledby='alert-dialog-title'
				aria-describedby='alert-dialog-description'
				onClick={handleDialogClick}
			>
				<CloseButton aria-label='Close Dialog' onClick={triggerClose}>
					&times;
				</CloseButton>
				<Title id="alert-dialog-title">{title}</Title>
				<Message id="alert-dialog-message">{message}</Message>
				{actions && <ActionsContainer>{actions}</ActionsContainer>}
			</DialogContainer>
		</Overlay>,
		document.body
	);
}





