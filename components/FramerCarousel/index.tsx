// @ts-nocheck
'use client';

import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion';
import Image from 'next/image';

const items = [
  {
    id:0,
    src: "/Lutong-Bahay/MainMenu.png"
  },
  {
    id:1,
    src: "/Lutong-Bahay/Recipes.png"
  },
  {
    id:2,
    src: "/Lutong-Bahay/Sharing.png"
  },
  {
    id:3,
    src: "/Lutong-Bahay/Shoppinglist.png"
  },
]
type Item = {
  id: string;
  imgSrc: string;
  title: string;
  description: string;
};

function FramerCarousel() {
  const [activeItem, setActiveItem] = useState(items[0]);
  const [width, setWidth] = useState(0);
  const carousel = useRef(null);
  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, [carousel]);

  return (
    <>
      <motion.div
        layoutId={'activeItems'}
        className='rounded-md w-fit pb-4 gap-2 items-center mx-auto cursor-auto '
        onClick={(e) => e.stopPropagation()}
      >
        <>
          {items.map((tab: any, index) => (
            <section
            key={tab.id}
            >
              <AnimatePresence mode='popLayout' initial={false}>
                {tab.id === activeItem.id && (
                  <motion.figure
                    key={tab?.id}
                    className='bg-[#3A3F2D]  border  rounded-md p-4 backdrop-blur-sm'
                  >
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: 1,
                        transition: {
                          type: 'ease',
                          ease: 'easeInOut',
                          duration: 0.3,
                          delay: 0.2,
                        },
                      }}
                      exit={{
                        opacity: 0,
                        transition: {
                          type: 'ease',
                          ease: 'easeInOut',
                          duration: 0.2,
                        },
                      }}
                    >
                      <Image
                        src={activeItem.src}
                        width={1000}
                        height={1000}
                        alt='preview_img'
                        className=' object-contain h-96  mx-auto rounded-md'
                      />
                    </motion.div>
                  </motion.figure>
                )}
              </AnimatePresence>
            </section>
          ))}
        </>
        <motion.div className='w-[550px] mt-4 mx-auto overflow-hidden  bg-[#3A3F2D]  border rounded-md'>
          <motion.div
          key={items.id}
            ref={carousel}
            drag='x'
            dragElastic={0.2}
            dragConstraints={{ right: 0, left: -width }}
            dragTransition={{ bounceDamping: 30 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className='flex  '
          >
            {items.slice(0, 8)?.map((itemData, index) => {
              return (
                <motion.div
                  className={`relative p-2 flex-shrink-0`}
                  onClick={() => setActiveItem(itemData)}
                >
                  <Image
                    src={itemData?.src}
                    width={400}
                    height={400}
                    alt='img'
                    className='w-28 h-16 object-cover cursor-pointer relative z-[2] rounded-md pointer-events-none'
                  />
                  {itemData?.id === activeItem?.id && (
                    <motion.div
                      layoutId='slider'
                      transition={{
                        layout: {
                          duration: 0.2,
                          ease: 'easeOut',
                        },
                      }}
                      className='absolute top-0 left-0 h-full w-full dark:bg-gray-100 bg-gray-800 rounded-md'
                    ></motion.div>
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
}

export default FramerCarousel;
