import type { ToolsType } from '@/types';
import { motion } from 'motion/react';

type ToolTypeProps = {
  tool: ToolsType;
};
const ToolsCard = ({ tool }: ToolTypeProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className='group flex flex-col items-center justify-center gap-3 p-6 rounded-2xl border border-neutral-800 bg-neutral-900/40 hover:border-neutral-600 transition-all duration-300'
    >
      <img
        src={tool.imgSrc}
        alt={tool.label}
        className='w-12 h-12 object-contain transition-transform duration-300 group-hover:scale-110'
      />

      <p className='text-sm text-neutral-300 group-hover:text-white transition-colors'>
        {tool.label}
      </p>
    </motion.div>
  );
};

export default ToolsCard;
