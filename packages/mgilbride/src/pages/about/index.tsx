import React, { FC } from 'react';
import { CSSObject } from '@emotion/core';
import Link from 'next/link';
import { Layout } from '../../components/layout/Layout';
import {
  makeSpace,
  palette,
  responsiveBreakpoints,
  makeSize,
} from '../../utils/design';
import { ImgTrace } from '../../components/ImgTrace';

const styleContainer: CSSObject = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  margin: 'auto',
  maxWidth: responsiveBreakpoints.tabletPortrait,
  img: {
    maxWidth: '40vh',
    padding: makeSpace('lg'),
  },
  h2: {
    fontStyle: 'italic',
    fontWeight: 'bold',
    fontSize: makeSize('h2'),
    margin: `${makeSpace('xl')} 0`,
  },
  h4: {
    fontWeight: 'bold',
    fontSize: makeSize('h4'),
    paddingTop: makeSpace('lg'),
  },
  p: {
    margin: `${makeSpace('sm')} 0`,
  },
};

const About: FC = () => (
  <Layout>
    <div css={styleContainer}>
      <h2>tl;dr</h2>
      <h4>{`I'm a software engineer`}</h4>
      <h4>from Philly</h4>
      <ImgTrace path="philly-globe.png" alt="Philly" />
      <h4>this is my wife</h4>
      <ImgTrace path="jamie.png" alt="Jamie" />
      <h4>and this is our dog</h4>
      <ImgTrace path="emmy.png" alt="Emmy" />
      <h2>the long version</h2>
      <div>
        <p>
          I&apos;m a &quot;full stack&quot; engineer by trade. You can check out
          my&nbsp;<Link href="/resume">resume</Link> for more about that.
        </p>
        <p>
          This site serves as a place for people to find out more about me, and
          a place for <Link href="/blog">me to write down my thoughts</Link>.
          Most of those thoughts will be about programming for now, so I&apos;ll
          keep this particular page focused on everything else.
        </p>
        <p>
          I&apos;m a happily married man to my wife Jamie of (almost) four
          years. We have zero kids and one dog named Emmy (for now).
        </p>
        <p>
          I was born and raised here in Philly, though my mom&apos;s family is
          from Barcelona. Many moons ago I was fluent in Spanish. I do my best
          to maintain my skills in that language as well. I prefer travelling to
          Spanish speaking countries not only because I love the culture, but
          also because I love the practice. That&apos;s right, we&apos;re
          talkin&apos; &apos;bout practice.
        </p>
        <p>
          Speaking of practice, I&apos;m a big F.C. Barcelona fan, and an even
          bigger fan of the Philadelphia 76ers. I follow all Philly sports
          closely, but I&apos;d say the passion level goes Sixers, Eagles,
          Flyers, Phillies, in that order. #trusttheprocess
        </p>
        <p>
          I also enjoy playing tennis, hiking, biking, running, skiing, and
          snowboarding, amongst other things. I&apos;m not much of a cook, but
          like most I&apos;m dangerous with a handful of recipes. On the music
          front, my bag is mostly blues and rock but I&apos;ve got a pretty
          eclectic taste.
        </p>
        <p>
          Oh...and my top 3 movies of all time are Forrest Gump, The Shawshank
          Redemption, and The Big Lebowski.
        </p>
        <p>
          That&apos;s all for now. If you are interested in connecting for any
          reason, please don&apos;t hesitate to&nbsp;
          <Link href="/contact">reach out</Link>!
        </p>
      </div>
    </div>
  </Layout>
);

export default About; // eslint-disable-line import/no-default-export
