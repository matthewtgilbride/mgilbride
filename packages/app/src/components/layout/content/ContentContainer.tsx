import React, { FC, ReactNode } from 'react';
import { CSSObject } from '@emotion/core';
import { Palette } from '@mattgilbride/design-system/lib/utils/color/palette';
import { headerHeight } from '../header/Header';
import { makeSpace } from '../../../utils/design';
import { usePalette } from '../../../utils/usePalette';

const styleContainer = (palette: Palette): CSSObject => ({
  position: 'absolute',
  top: headerHeight,
  bottom: 0,
  left: 0,
  right: 0,
  margin: makeSpace('sm'),
  marginTop: makeSpace('xxs'),
  borderRadius: makeSpace('xxs'),
  boxShadow: `0 0 2px 1px ${palette.text(-50)}`,
});

const styleContent = (hasFooter: boolean): CSSObject => ({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: hasFooter ? headerHeight : 0,
  padding: makeSpace('sm'),
  overflowY: 'auto',
});

const styleFooter = (palette: Palette): CSSObject => ({
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  height: headerHeight,
  borderTop: `1px solid ${palette.text(-50)}`,
  overflow: 'hidden',
});

export const ContentContainer: FC<{ footer?: ReactNode }> = ({
  children,
  footer,
}) => {
  const { palette } = usePalette();
  return (
    <div css={styleContainer(palette)}>
      <div role="main" css={styleContent(!!footer)}>
        {children}
      </div>
      {footer && <footer css={styleFooter(palette)}>{footer}</footer>}
    </div>
  );
};
