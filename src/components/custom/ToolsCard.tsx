import { fadeUp } from '@/lib/animations';
import type { ToolsType } from '@/types';
import { motion } from 'motion/react';

type ToolTypeProps = {
  tool: ToolsType;
};
const ToolsCard = ({ tool }: ToolTypeProps) => {
  return (
    <motion.div
      variants={fadeUp}
      className='flex items-center justify-center flex-col py-4 border border-neutral-700 rounded-lg'
    >
      <img
        src={tool.imgSrc}
        alt={tool.label}
      />
      <p>{tool.label}</p>
    </motion.div>
  );
};

export default ToolsCard;
