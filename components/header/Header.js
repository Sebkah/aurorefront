import React from 'react';
import { motion } from 'framer-motion';

import { useState } from 'react';
import Link from 'next/link';
import HeaderLink from './HeaderLink';

import { useAppContext } from '@/context/context';

const Header = ({ slugs }) => {
  const { headerRef } = useAppContext();
  console.log(headerRef);
  return (
    <header ref={headerRef}>
      {/* <HeaderLink title="Aurore Legentil" slug="" isAlbum={false}></HeaderLink> */}
      <Link href="/" className="title">
        {' '}
        AURORE LEGENTIL
      </Link>

      {slugs && (
        <div className="albums">
          <div className="album-t">albums : </div>
          {slugs.map(({ title, slug }) => {
            return (
              <>
                <HeaderLink key={title} title={title} slug={slug}></HeaderLink>
                {/*  <div className="inter">,</div> */}
              </>
            );
          })}
          {/* <HeaderLink
            title="contact"
            slug={{ current: 'contact' }}
            isAlbum={false}
          ></HeaderLink> */}
        </div>
      )}
    </header>
  );
};

export default Header;
