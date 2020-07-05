import React, { FC } from 'react';
import { CSSObject } from '@emotion/core';
import Doc from '../../assets/svg/doc.svg';
import Pdf from '../../assets/svg/pdf.svg';
import {
  makeColor,
  makeSize,
  makeSpace,
  responsiveBreakpoints,
} from '../../utils/design';
import { darkGray } from '../layout/Layout.styles';

const lightGray = makeColor('gray', -1);

const styleFooter: CSSObject = {
  position: 'sticky',
  bottom: 0,
  display: 'flex',
  alignSelf: 'flex-end',
  justifyContent: 'center',
  background: `radial-gradient(at 50% 100%, ${lightGray} 0%, ${darkGray} 50%, ${darkGray} 100%)`,
  '> div': {
    display: 'flex',
    width: '100%',
    maxWidth: responsiveBreakpoints.tabletPortrait,
    justifyContent: 'space-between',
    margin: makeSpace('xxs'),
    '> div': {
      display: 'flex',
      alignSelf: 'center',
      height: 'fit-content',
      '> p': {
        margin: 0,
      },
    },
  },
};

const styleButton: CSSObject = {
  backgroundColor: makeColor('primary', -1),
  cursor: 'pointer',
  borderColor: makeColor('accent', -1),
  borderStyle: 'solid',
  borderRadius: 4,
  width: 80,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: makeSpace('xxs'),
  marginLeft: makeSpace('xxs'),
  color: makeColor('light'),
  ':hover,:focus': {
    boxShadow: 'none',
    outline: 'none',
    backgroundColor: makeColor('primary'),
  },
  '> p': {
    margin: 0,
    padding: `0 ${makeSpace('xxs')}`,
  },
  '> img': {
    height: makeSize('xs'),
  },
};

export const Footer: FC = () => (
  <div css={styleFooter}>
    <div>
      <div>
        <p>Need a copy?</p>
      </div>
      <div>
        <a href="/Gilbride_Matthew Resume_2020_07.docx">
          <button css={styleButton}>
            <img src={Doc} alt="doc" />
            <p>.docx</p>
          </button>
        </a>
        <a href="/Gilbride_Matthew Resume_2020_07.pdf">
          <button css={styleButton}>
            <img src={Pdf} alt="pdf" />
            <p>.pdf</p>
          </button>
        </a>
      </div>
    </div>
  </div>
);
