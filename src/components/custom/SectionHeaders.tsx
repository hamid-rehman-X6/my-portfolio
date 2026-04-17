import { fadeUp } from '@/lib/animations';
import { SparkleIcon } from 'lucide-react';
import { motion } from 'motion/react';

const SectionHeaders = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => {
  return (
    <>
      <motion.p
        variants={fadeUp}
        className='flex justify-center items-center border border-neutral-700 rounded-sm py-2 w-32 gap-2'
      >
        <SparkleIcon size={15} /> {subtitle}
      </motion.p>
      <motion.h1
        variants={fadeUp}
        className='text-4xl mt-2 font-bold capitalize md:text-3xl'
      >
        {title}
      </motion.h1>
    </>
  );
};

export default SectionHeaders;
