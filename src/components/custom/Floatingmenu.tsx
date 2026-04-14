import { navLinks } from '@/constants';
import { cn } from '@/lib/utils';
import { useState } from 'react';

const Floatingmenu = () => {
  const [active, setActive] = useState('#hero');
  return (
    <>
      <div className='fixed right-10 top-1/2 -translate-y-1/2 border border-neutral-600 bg-black pt-4 rounded-full z-10 lg:block'>
        <nav>
          {navLinks.map((link) => {
            const Icon = link.icon;

            return (
              <a
                href={link.link}
                key={link.label}
                onClick={() => setActive(link.link)}
                className={cn(
                  'mb-6 px-4 flex items-center gap-2 text-neutral-400 hover:text-primary transition-colors duration-20',
                  active === link.link && 'text-primary',
                )}
              >
                <Icon class='size-5' />
              </a>
            );
          })}
        </nav>
      </div>
    </>
  );
};

export default Floatingmenu;
