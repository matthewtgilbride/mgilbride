import React, { FC } from 'react';
import { CSSObject } from '@emotion/core';
import { GetStaticProps } from 'next';
import { RichTextBlock } from 'prismic-reactjs';
import { Layout } from '../../components/layout/Layout';
import { makeSize, makeSpace, responsiveBreakpoints } from '../../utils/design';
import { client, PrismicContent } from '../../prismic';
import { ImgBlur } from '../../components/ImgBlur';

const styleContainer: CSSObject = {
  margin: 'auto',
  maxWidth: responsiveBreakpoints.tabletPortrait,
  img: {
    maxWidth: '40vh',
    padding: `${makeSpace('lg')} 0`,
    display: 'block',
    margin: '0 auto',
  },
  h2: {
    fontStyle: 'italic',
    fontWeight: 'bold',
    fontSize: makeSize('h2'),
    margin: `${makeSpace('xl')} 0`,
    textAlign: 'center',
  },
  h4: {
    fontWeight: 'bold',
    fontSize: makeSize('h4'),
    paddingTop: makeSpace('lg'),
    textAlign: 'center',
  },
  p: {
    margin: `${makeSpace('sm')} 0`,
  },
};

const About: FC<{ data: any }> = ({ data }) => (
  <Layout>
    <div css={styleContainer}>
      {data.body.map((item: Slice) => renderSlice(item))}
    </div>
  </Layout>
);

type Slice =
  | {
      slice_type: 'text';
      primary: {
        text: RichTextBlock[];
      };
    }
  | {
      slice_type: 'image';
      primary: {
        image: {
          url: string;
          alt: string;
        };
      };
    };

function renderSlice(slice: Slice) {
  if (slice.slice_type === 'text') {
    return <PrismicContent richText={slice.primary.text} />;
  }
  return (
    <ImgBlur url={slice.primary.image.url} alt={slice.primary.image.alt} />
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const doc = await client.getSingle('about', {});
  return {
    props: {
      data: doc.data,
    },
  };
};

export default About;
