import React, { useCallback } from 'react'
import styled from 'styled-components'
import useEmblaCarousel from 'embla-carousel-react';

export interface CarouselProps {
	children: React.ReactNode
	loop?: boolean;
}

const CarouselContainer = styled.div`
  overflow: hidden;
  width: 100%;
  position: relative;
`;

const CarouselViewport = styled.div`
  display: flex;
`;

const CarouselSlide = styled.div`
  position: relative;
  flex: 0 0 100%;
  user-select: none;
  padding: ${({ theme }) => theme.spacing.medium};
`;


const NavButton = styled.button<{ position: 'left' | 'right'; disabled?: boolean }>`
  position: absolute;
  top: 50%;
  ${({ position }) => (position === 'left' ? 'left: 1rem;' : 'right: 1rem;')}
  transform: translateY(-50%);
  background-color: ${({ theme }) => theme.colors.primary};
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  opacity: ${({ disabled }) => (disabled ? 0.3 : 1)};
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${({ theme, disabled }) => disabled ? theme.colors.primary : `${theme.colors.primary}CC`};
  }
`;

export const Carousel: React.FC<CarouselProps> = ({children, loop=false}) => {
	const [emblaRef, emblaApi] = useEmblaCarousel({loop})
	const [prevBtnDisabled, setPrevBtnDisabled] = React.useState(true)
	const [nextBtnDisabled, setNextBtnDisabled] = React.useState(true)

	const scrollPrev = React.useCallback(() => {
		if(emblaApi) emblaApi.scrollPrev();
	}, [emblaApi])

	const scrollNext = React.useCallback(() => {
		if(emblaApi) emblaApi.scrollNext();
	}, [emblaApi])

	const onSelect = useCallback(() => {
		if(!emblaApi) return;
		setPrevBtnDisabled(!emblaApi.canScrollPrev())
		setNextBtnDisabled(!emblaApi.canScrollNext())
	}, [emblaApi])

	React.useEffect(() => {
		if(!emblaApi) return;
		emblaApi.on('select', onSelect);
		onSelect();
	}, [emblaApi, onSelect])

	return (
		<CarouselContainer>
			<div ref={emblaRef}>
				<CarouselViewport>
					{React.Children.map(children, (child, index) => (
						<CarouselSlide key={index}>{child}</CarouselSlide>
					))}
				</CarouselViewport>
			</div>
			<NavButton onClick={scrollPrev} disabled={prevBtnDisabled} position='left'>
				Prev
			</NavButton>
			<NavButton onClick={scrollNext} disabled={nextBtnDisabled} position='right'>
				Next
			</NavButton>
		</CarouselContainer>
	)
}

export const SlideContent = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundAlt || '#f7f7f7'};
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 8px;
  padding: ${({ theme }) => theme.spacing.large};
  text-align: center;
  font-size: 1.2rem;
`;