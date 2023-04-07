import '@/styles/globals.scss';
import Layout from '@/components/Layout';
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import { Context } from '../context/context';
import React from 'react';

export default function App({ Component, pageProps, router }) {
  return (
    <Context>
      <Layout>
        <AnimatePresence mode="popLayout" initial={false}>
          <Component {...pageProps} key={router.asPath} />
        </AnimatePresence>
      </Layout>
    </Context>
  );
}
