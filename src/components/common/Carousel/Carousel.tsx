import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import { useTheme } from '@mui/material';
import { Children, useEffect, useRef, useState } from 'react';
import { PropsWithChildren } from '@common/types';
import { Flex } from '@components/containers';
import { sizes } from '@root/theme';
import { ScrollContainer } from './styled';

interface ICarousel {
  onActiveItemChanged?: (activeItemIndex: number) => void;
}

export const Carousel = ({
  children,
  onActiveItemChanged
}: PropsWithChildren<ICarousel>) => {
  const [activeChild, setActiveChild] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const { palette } = useTheme();

  const childrenArray = Children.toArray(children);

  useEffect(() => {
    onActiveItemChanged && onActiveItemChanged(activeChild);
  }, [onActiveItemChanged, activeChild]);

  const handleNext = () => {
    if (childrenArray && activeChild < childrenArray.length - 1) {
      const nextChild = activeChild + 1;
      setActiveChild(nextChild);

      const activeChildElement = scrollRef.current!.children[nextChild];
      activeChildElement?.scrollIntoView({
        inline: 'center',
        behavior: 'smooth'
      });
    }
  };

  const handlePrev = () => {
    if (activeChild) {
      const previousChild = activeChild - 1;
      setActiveChild(previousChild);

      const activeChildElement = scrollRef.current!.children[previousChild];
      activeChildElement?.scrollIntoView({
        inline: 'center',
        behavior: 'smooth'
      });
    }
  };

  return (
    <Flex sx={{ alignItems: 'center' }}>
      {childrenArray.length > 1 && (
        <ChevronLeft
          sx={{ cursor: 'pointer' }}
          data-testid="carousel--previous-item-button"
          onClick={handlePrev}
        />
      )}
      <ScrollContainer
        ref={scrollRef}
        sx={{
          [`&>*:nth-of-type(${activeChild + 1})`]: {
            position: 'relative'
          },
          [`&>*:nth-of-type(${activeChild + 1})::before`]: {
            content: '" "',
            position: 'absolute',
            width: '100%',
            height: '100%',
            borderBottom: `${sizes[4].px} solid ${palette.primary.main}`,
            borderRadius: 'inherit'
          }
        }}
      >
        {children}
      </ScrollContainer>
      {childrenArray.length > 1 && (
        <ChevronRight
          sx={{ cursor: 'pointer' }}
          data-testid="carousel--next-item-button"
          onClick={handleNext}
        />
      )}
    </Flex>
  );
};
