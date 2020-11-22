import React, { FC } from 'react';
import { CSSObject } from '@emotion/react';
import Link from 'next/link';
import { Layout } from '../../components/layout/Layout';
import { makeSpace, responsiveBreakpoints } from '../../utils/design';

const styleContainer: CSSObject = {
  display: 'grid',
  justifySelf: 'center',
  justifyItems: 'center',
  padding: makeSpace('md'),
  maxWidth: responsiveBreakpoints.tabletPortrait,
  '> div': {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  h1: {
    fontStyle: 'italic',
    textAlign: 'center',
  },
  a: {
    textDecoration: 'underline',
    textAlign: 'center',
  },
};

const Blog: FC = () => (
  <Layout>
    <div css={styleContainer}>
      <div>
        <h1>2020</h1>
        <Link href="/blog/shoemaker">giving the shoemaker shoes</Link>
        <a href="https://chariotsolutions.com/blog/post/using-the-aws-cdk-in-real-life/">
          using the AWS CDK in real life
        </a>
        <a href="https://chariotsolutions.com/blog/post/vue-3-0-might-be-a-big-deal/">
          Vue 3.0 might be a big deal
        </a>
        <a href="https://chariotsolutions.com/blog/post/using-the-aws-cdk-irl-part-2/">
          using the AWS CDK in real life - part two
        </a>
      </div>
      <div css={{ margin: 'auto' }}>...more coming soon...</div>
    </div>
  </Layout>
);

export default Blog; // eslint-disable-line import/no-default-export
