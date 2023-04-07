import Head from 'next/head';
import { Inter } from 'next/font/google';

import {
  sanityStaticProps,
  imageUrlBuilder,
  useSanityQuery,
  PortableText,
} from '../lib/sanity';
import { groq } from 'next-sanity';

import { useAppContext } from '@/context/context';

import { motion } from 'framer-motion';

import { useEffect } from 'react';
import React from 'react';
import ProjectEntry from '@/components/projects/ProjectEntry';

function urlFor(source) {
  return imageUrlBuilder.image(source).width(720);
}

const inter = Inter({ subsets: ['latin'] });

export default function Home({ projects }) {
  /*   console.log(projects); */
  return (
    <motion.div
      initial={{ /*  x: -400, */ opacity: 0 }}
      animate={{ /*  x: 0,  */ opacity: 1 }}
      exit={{ /* x: 400, */ opacity: 0 }}
    >
      <Head>
        <title>Aurore Legentil - Photographie</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {projects.map((project, index) => {
        return (
          <ProjectEntry project={project} index={index} key={project.title} />
        );
      })}
    </motion.div>
  );
}

export const getStaticProps = async (context) => {
  const projectQuery = groq`*[_type=='project']`;
  const projects = await sanityStaticProps({ context, query: projectQuery });
  return { props: { projects: projects.data } };
};
