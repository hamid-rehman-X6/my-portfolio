import { navLinks } from '@/constants';
import { cn } from '@/lib/utils';
import { useState } from 'react';

const Floatingmenu = () => {
  const [active, setActive] = useState('#hero');
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);

  return (
    <>
      <div className='fixed right-10 top-1/2 -translate-y-1/2 border border-neutral-600 bg-black pt-4 rounded-full z-10 hidden lg:block'>
        <nav>
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isHovered = hoveredIcon === link.label;

            return (
              <a
                href={link.link}
                key={link.label}
                onClick={() => setActive(link.link)}
                onMouseEnter={() => setHoveredIcon(link.label)}
                onMouseLeave={() => setHoveredIcon(null)}
                className={cn(
                  'mb-6 px-4 flex items-center gap-2 text-neutral-400 hover:text-primary transition-colors duration-200',
                  active === link.link && 'text-primary',
                )}
              >
                <div
                  className='transition-transform duration-300 ease-out'
                  style={{
                    transform: isHovered ? 'scale(1.5)' : 'scale(1)',
                  }}
                >
                  <Icon class='size-5' />
                </div>
              </a>
            );
          })}
        </nav>
      </div>
    </>
  );
};

export default Floatingmenu;
