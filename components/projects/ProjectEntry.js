// @ts-nocheck
import React from 'react';
import { imageUrlBuilder } from '@/lib/sanity';
import { motion } from 'framer-motion';

import { useAppContext } from '@/context/context';
import { useRouter } from 'next/router';

const ProjectEntry = ({ project, index }) => {
  const { headerRef, setHeaderColor } = useAppContext();
  const router = useRouter();

  console.log(headerRef, 'from project entry');

  const { title, mainImage, periode, images, description, year, color, slug } =
    project;
  const imageSrc = imageUrlBuilder.image(mainImage);
  const leftOrRight = index % 2;

  const imageMotion = {
    hover: {
      x: leftOrRight ? 100 : -100,
      transition: { type: 'linear' },
    },
  };

  const ratio = 0.4;

  const arrow = !leftOrRight ? '<' : '>';
  const bigArrowClass = leftOrRight ? 'big-arrow left' : 'big-arrow';
  /*   console.log(imageSrc);
  console.log(mainImage); */
  return (
    <motion.div
      onClick={() => {
        router.push(`/albums/${slug.current}`);
      }}
      className="project-entry"
      whileHover="hover"
      style={{
        backgroundColor: color.hex,
        gridTemplateColumns: leftOrRight ? `${ratio}fr 1fr` : `1fr ${ratio}fr`,
      }}
    >
      <div
        className="project-info"
        style={{
          order: leftOrRight ? 0 : 1,
          marginRight: leftOrRight ? '5vw' : '0',
          marginLeft: leftOrRight ? '0' : '5vw',
          justifySelf: !leftOrRight ? 'start' : 'end',
        }}
      >
        <div className="project-title">{title}</div>
        <div className="project-periode" style={{ color: color.hex }}>
          {periode}
        </div>
      </div>
      <motion.div
        /*    variants={imageMotion} */
        className="project-image"
        transition={{ type: 'linear' }}
      >
        <motion.div
          className={bigArrowClass}
          style={{
            color: color.hex,
            right: leftOrRight ? '100%' : null,
            left: leftOrRight ? null : '100%',
          }}
        >
          {arrow}
        </motion.div>
        <img src={imageSrc} alt="sds" />
      </motion.div>
    </motion.div>
  );
};

export default ProjectEntry;
