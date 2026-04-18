import { testimonials } from '@/constants';
import { fadeUp } from '@/lib/animations';
import { SparkleIcon, StarIcon } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';

const Testimonials = () => {
  const [curSlide, setCurSlide] = useState(0);

  return (
    <motion.section
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.8 }}
      variants={fadeUp}
      className='mt-20 scroll-mt-10'
      id='testimonials'
    >
      <p className='flex justify-center items-center border border-neutral-700 rounded-sm py-2 w-32 gap-2'>
        <SparkleIcon size={15} /> Reviews
      </p>
      <h1 className='text-4xl mt-2 font-bold capitalize md:text-3xl'>
        What client says about me
      </h1>

      <div className='mt-10 relative w-full'>
        <AnimatePresence mode='wait'>
          <motion.div
            key={curSlide}
            initial={{}}
            animate={{}}
            exit={{}}
            transition={{}}
            layout
            className='flex flex-col md:flex-row items-start gap-6 border border-neutral-800 rounded-3xl p-8 bg-neutral-900/10'
          >
            <img
              src={testimonials[curSlide].image}
              alt={testimonials[curSlide].name}
              className='size-20 rounded-full object-cover'
            />

            <div className='flex-1 space-y-4'>
              <div>
                <h3 className='text-lg font-semibold text-white'>
                  {testimonials[curSlide].name}
                </h3>
                <p className='text-sm text-neutral-400'>
                  {testimonials[curSlide].role}
                </p>

                <div className='flex gap-1 mt-3 text-yellow-400'>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon
                      key={i}
                      size={16}
                      fill='currentColor'
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.section>
  );
};

export default Testimonials;
