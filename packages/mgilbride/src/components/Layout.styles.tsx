import { CSSObject } from '@emotion/core';
import {
  makeColor,
  makeSpace,
  makeResponsiveObject,
  responsiveBreakpoints,
} from '../utils/design';
import {
  easeAfterPageLoad,
  fadeAccentToDark,
  fadeDarkToAccent,
  fadeDarkToWhite,
  fadeIn,
  fadeWhiteToDark,
} from './Layout.animations';

const white = makeColor('light');
const accent = makeColor('accent');
const darkGray = makeColor('gray', -3);

export const documentReset = {
  body: {
    margin: 0,
    padding: 0,
    height: '100%',
    width: '100%',
    backgroundColor: darkGray,
    color: white,
    // plagiarized from sarah drasner
    fontFamily:
      'Gotham XNarrow A,Gotham XNarrow B,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;',
  },
  html: {
    height: '100%',
    width: '100%',
  },
};

export const styleContainer = (
  open: boolean,
  firstRender: boolean,
): CSSObject => ({
  // resets
  position: 'absolute',
  overflow: 'hidden',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  margin: 'auto',
  '*': {
    boxSizing: 'border-box',
    position: 'relative',
  },
  // grid
  display: 'grid',
  gridTemplateColumns: 'auto auto',
  gridTemplateRows: 'min-content auto',
  gridTemplateAreas: `
    'menu home'   
    'main main'
  `,
  // defaults
  maxWidth: responsiveBreakpoints.desktop,
  backgroundColor: open ? accent : darkGray,
  animation: open
    ? easeAfterPageLoad(fadeDarkToAccent, firstRender)
    : easeAfterPageLoad(fadeAccentToDark, firstRender),
  a: {
    textDecoration: 'none',
    color: white,
    fontWeight: 500,
  },
  // home link
  '> a': {
    gridArea: 'home',
    justifySelf: 'flex-end',
    alignSelf: 'flex-start',
    textTransform: 'uppercase',
    color: open ? darkGray : white,
    animation: open
      ? easeAfterPageLoad(fadeWhiteToDark, firstRender)
      : easeAfterPageLoad(fadeDarkToWhite, firstRender),
    padding: makeSpace('xs'),
  },
  // menu
  '> button': {
    gridArea: 'menu',
    justifySelf: 'flex-start',
    alignSelf: 'flex-start',
    padding: `${makeSpace('xs')} 0`,
    svg: {
      height: makeSpace('sm'),
      animation: easeAfterPageLoad(fadeIn, firstRender, 2),
      line: {
        stroke: open ? darkGray : white,
      },
      rect: {
        fill: open ? darkGray : white,
      },
    },
  },
  // main nav
  '> nav': {
    gridArea: 'main',
    display: open ? 'block' : 'none',
    animation: easeAfterPageLoad(fadeIn, firstRender),
    ul: {
      margin: 0,
      listStyle: 'none',
      paddingInlineStart: 0,
      li: {
        paddingTop: makeSpace('xs'),
        a: {
          textTransform: 'uppercase',
          color: open ? darkGray : white,
          padding: makeSpace('xs'),
        },
      },
    },
  },
  // content
  '> div': {
    gridArea: 'main',
    zIndex: open ? -1 : 'inherit',
    // fade in the immediate child, even on initial load
    '> *': {
      animation: open ? 'inherit' : easeAfterPageLoad(fadeIn, false),
    },
    alignSelf: 'center',
    display: 'grid',
    height: '100%',
    overflowY: 'auto',
  },
  ...styleContainerTablet(),
});

function styleContainerTablet(): CSSObject {
  return makeResponsiveObject({
    beginAt: 'tabletPortrait',
    style: {
      color: 'inherit',
      // home link
      '> a': {
        gridArea: 'menu',
        justifySelf: 'flex-start',
        alignSelf: 'flex-start',
        color: white,
        animation: 'initial',
      },
      // hamburger menu
      '> button': {
        display: 'none',
      },
      // main nav
      '> nav': {
        gridArea: 'home',
        display: 'block',
        justifySelf: 'flex-end',
        backgroundColor: 'inherit',
        animation: 'initial',
        padding: makeSpace('xs'),
        ul: {
          display: 'flex',
          li: {
            paddingTop: 'inherit',
            a: {
              color: white,
              animation: 'initial',
            },
          },
        },
      },
      // content
      '> div': {
        zIndex: 'inherit',
      },
    },
  });
}