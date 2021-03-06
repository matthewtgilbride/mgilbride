import React, { FC, useCallback, useEffect, useRef } from 'react';
import { CSSObject } from '@emotion/core';
import { animated, useSpring } from 'react-spring';
import { Palette } from '@mattgilbride/design-system/lib/utils/color/palette';
import { makeSize, makeSpace } from '../../utils/design';
import { ChevronDown } from '../svg/ChevronDown';
import { usePalette } from '../../utils/usePalette';

const styleHeader = (palette: Palette): CSSObject => ({
  display: 'flex',
  justifyContent: 'space-between',
  margin: `${makeSpace('md')} 0`,
  padding: `${makeSpace('sm')} 0`,
  fontSize: makeSize('h2'),
  '> button': {
    backgroundColor: palette.gray(-50),
    cursor: 'pointer',
    border: '1px solid',
    borderColor: palette.accent(),
    borderRadius: '50%',
    boxShadow: `inset 0 0 2px 1px ${palette.accent()}`,
    width: 38,
    height: 38,
    ':active,:hover': {
      backgroundColor: palette.gray(-75),
    },
    '> svg': {
      height: 16,
      width: 16,
      marginTop: 4,
    },
  },
});

export interface SectionHeaderProps {
  pathname: Location['pathname'];
  hash: Location['hash'];
  hashTarget: string;
  onClick: () => void;
  open: boolean;
  text: string;
}

export const SectionHeader: FC<SectionHeaderProps> = ({
  hash,
  pathname,
  hashTarget,
  onClick,
  open,
  text,
}) => {
  const springProps = useSpring({
    from: {
      transform: open ? 'rotate(90deg)' : 'rotate(0deg)',
    },
    transform: open ? 'rotate(0deg)' : 'rotate(90deg)',
  });

  const el = useRef<HTMLHeadingElement>(null);

  const scrollToElement = useCallback(
    () =>
      setTimeout(() => {
        if (el.current) {
          el.current.scrollIntoView({ behavior: 'smooth' });
        }
      }, 500),
    [el],
  );

  useEffect(() => {
    if (hash === hashTarget) {
      scrollToElement();
    }
  }, [hash, hashTarget, scrollToElement]);

  const { palette } = usePalette();

  return (
    <h2 css={styleHeader(palette)} ref={el}>
      <a href={`${pathname}${hashTarget}`}>{text}</a>
      <animated.button style={springProps} onClick={onClick}>
        <ChevronDown color={palette.accent()} />
      </animated.button>
    </h2>
  );
};
