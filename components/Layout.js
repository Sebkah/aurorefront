import React, { useEffect, useState } from 'react';
import Header from './header/Header';
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import {
  sanityClient,
  sanityStaticProps,
  imageUrlBuilder,
  useSanityQuery,
  PortableText,
} from '../lib/sanity';
import { groq } from 'next-sanity';
import { useAppContext } from '@/context/context';

const Layout = (props) => {
  const [headerData, setHeaderData] = useState(null);

  const fetchData = async () => {
    const client = sanityClient('anonymous');
    const slugQuery = groq`*[_type=='config']{projectOrder[]->{slug, title}}`;
    const headerRes = await client.fetch(slugQuery);
    setHeaderData(headerRes[0].projectOrder);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <main>
        <Header slugs={headerData}></Header>
        <div className="page-container">{props.children}</div>
      </main>
    </>
  );
};

export default Layout;
