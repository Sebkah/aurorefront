import React from 'react';

import {
  sanityStaticProps,
  imageUrlBuilder,
  useSanityQuery,
  PortableText,
} from '../lib/sanity';
import { groq } from 'next-sanity';
import { motion } from 'framer-motion';

const about = (props) => {
  const { about } = props;
  console.log(about);
  return (
    <motion.div
      className="about-container"
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 300, opacity: 0 }}
      transition={{
        type: 'spring',
        stiffness: 260,
        damping: 20,
      }}
    >
      <div className="about">{about}</div>
    </motion.div>
  );
};

export default about;

export const getStaticProps = async (context) => {
  const aboutQuery = groq`*[_type=='config']{about}`;
  let dataAbout = await sanityStaticProps({ context, query: aboutQuery });
  const about = dataAbout.data[0].about;

  return { props: { about } };
};
