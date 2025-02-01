import React from 'react';
import { styled } from 'styled-components';

type TStatusType = 'online' | 'offline' | 'busy' | 'away'
type TSize = 'small' | 'medium' | 'large'
type TVariant = 'circle' | 'square'

export interface AvatarPros extends React.HTMLAttributes<HTMLDivElement>{
	src?: string;
	alt?: string;
	size?: TSize | number;
	variant?: TVariant;
	fallback?: string;
	showStatus?: boolean;
	status?: TStatusType;
}

const sizeMapping: Record<TSize, string> = {
	small: '32px',
	medium: '48px',
	large: '64px',
}

const AvatarContainer = styled.div<{size: string;variant: TVariant}>`
	position: relative;
	width: ${({size}) => size};
	height: ${({size}) => size};
	border-radius: ${({variant}) => (variant === 'circle' ? '50%' : '8px')};
	overflow: hidden;
	background-color: ${({theme}) => theme.colors.background};
	display: flex;
	align-items: center;
	justify-content: center;
`;

const AvatarImage = styled.img<{variant: TVariant}>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: ${({ variant }) => (variant === 'circle' ? '50%' : '8px')};
`;

const AvatarFallback = styled.span<{ variant: TVariant }>`
  font-family: ${({ theme }) => theme.typography.fonts.primary};
  font-weight: ${({ theme }) => theme.typography.fontWeights.bold};
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};
`;

const StatusBadge = styled.div<{status: TStatusType}>`
	position: absolute;
	bottom: 0;
	right: 0;
	width: 12px;
	height: 12px;
	border: 2px solid ${({theme}) => theme.colors.background};
	border-radius: 50%;
	background-color: ${({status, theme}) => {
		switch (status) {
			case 'online':
				return theme.colors.success || '#3c763d';
			case 'offline':
				return theme.colors.error || '#a94442';
			case 'busy':
				return theme.colors.warning || '#8a6d3b';
			case 'away':
			default:
				return theme.colors.info || '#31708f';
		}
	}};
`;

export const Avatar: React.FC<AvatarPros> = ({src, alt='Avatar', size='medium', variant='circle', fallback, showStatus=false,status='online',...rest}) => {
	const [imgError, setImgError] = React.useState(false)
	const computedSize = typeof size === 'number' ? `${size}px` : sizeMapping[size] || sizeMapping.medium;
	const renderContent = () => {
		if(src && !imgError) {
			return <AvatarImage src={src} alt={alt} variant={variant} onError={() => setImgError(true)} />
		}
		const fallbackText = fallback || (alt ? alt.charAt(0).toUpperCase() : '?');
		return <AvatarFallback variant={variant}>{fallbackText}</AvatarFallback>
	}
	
	return (
		<AvatarContainer size={computedSize} variant={variant} {...rest}>
			{renderContent()}
			{showStatus && <StatusBadge status={status} />}
		</AvatarContainer>
	)
}

export const AvatarContainerDiv = styled.div`
  display: flex;
  gap: 20px;
  padding: 20px;
`;

