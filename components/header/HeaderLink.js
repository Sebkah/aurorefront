import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

const HeaderLink = ({ slug, title, isAlbum = true }) => {
  const TITLE = title.toLowerCase();
  const router = useRouter();
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    if (router.route === slug.current) {
      console.log(slug.current);
      setIsSelected(true);
    } else {
      setIsSelected(
        router.asPath.includes(slug.current) && router.route != '/'
      );
    }
    /*     console.log(router.route); */
  }, [router.asPath, slug]);
  const album = isAlbum ? '/albums/' : '/';
  return (
    <Link href={`${album}${slug.current}`}>
      {isSelected && (
        <motion.div layoutId="selector" className="selector"></motion.div>
      )}
      <div className="white-bg"></div>
      <div className="text">{TITLE}</div>
    </Link>
  );
};

export default HeaderLink;
