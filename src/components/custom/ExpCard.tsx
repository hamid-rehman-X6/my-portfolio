import type { ExperienceType } from '@/types';

type ExpCardProps = {
  item: ExperienceType;
};

const ExpCard = ({ item }: ExpCardProps) => {
  return (
    <div className='relative group'>
      <div className='absolute -left-7.5 top-2 size-3 rounded-full bg-muted-foreground group-hover:bg-primary transition duration-300' />
      <span className='text-neutral-400 lining-nums group-hover:text-primary transition duration-300'>
        {item.year}
      </span>
      <h3 className='text-lg font-semibold mt-1'>{item.title}</h3>
      <p className='text-sm text-neutral-400 mb-1'>
        Course by{' '}
        <span className='text-foreground font-medium'>{item.institute}</span>
      </p>
      <p className='text-sm text-neutral-400'>{item.desc}</p>
    </div>
  );
};

export default ExpCard;
