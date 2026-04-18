import type { ServiceType } from '@/types';

type ServiceCardProps = {
  service: ServiceType;
};
const ServiceCard = ({ service }: ServiceCardProps) => {
  return (
    <div className='flex items-start justify-between border border-neutrl-700 hover:border-primary p-8 rounded-xl hover:bg-zinc-900 transition-all duration-300 relative'>
      <div>
        <h1 className='text-lg font-medium text-white mb-1'>{service.title}</h1>
        <p className='mb-3 text-neutral-300'>{service.desc}</p>
        <span className='text-sm uppercase text-neutral-400 tracking-wide font-medium lining-nums'>
          {service.projects}
        </span>
      </div>
      <div className='flex shrink-0'>{service.icon}</div>
    </div>
  );
};

export default ServiceCard;
