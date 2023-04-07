import React from 'react';
import {
  sanityClient,
  sanityStaticProps,
  imageUrlBuilder,
  useSanityQuery,
  PortableText,
} from '../../lib/sanity';
import { groq } from 'next-sanity';
import { motion } from 'framer-motion';

const Album = ({ project }) => {
  const { color } = project;
  return (
    <div className="album-container">
      {/* {props.params.slug} */}
      <motion.div
        initial={{ x: '100%' }}
        exit={{ x: '-100%' }}
        animate={{ x: 0 }}
        transition={{ type: 'linear' }}
        className="album-background"
        style={{ backgroundColor: color.hex }}
      ></motion.div>
    </div>
  );
};

export default Album;

export const getStaticProps = async (context) => {
  const projectQuery = groq`*[_type=='project' && slug.current=="${context.params.slug}"]`;
  let { data } = await sanityStaticProps({ context, query: projectQuery });

  return { props: { project: data[0] } };
};

export async function getStaticPaths() {
  const paths = await getAlbumSlugs();
  return {
    paths,
    fallback: false,
  };
}

export async function getAlbumSlugs() {
  const slugQuery = groq`*[_type=='project']{
    title,
    slug
  }`;
  const client = sanityClient('authenticated');
  const data = await client.fetch(slugQuery);
  const slugs = data.map(({ slug }) => {
    return {
      params: {
        slug: slug.current,
      },
    };
  });
  return slugs;
}
