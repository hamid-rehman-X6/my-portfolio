import { MenuIcon } from 'lucide-react';
import { Button } from '../ui/button';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '../ui/sheet';
import { navLinks, socialLinks } from '@/constants';
import { useState } from 'react';
import { cn } from '@/lib/utils';

const Sidebar = () => {
  const [active, setActive] = useState('#hero');

  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <Button
            size='icon'
            variant='ghost'
            className='fixed m-4 top-4 right-4 z-50 border-2 bg-neutral-800 hover:border-primary hover:text-primary w-12 h-12 rounded-full cursor-pointer'
          >
            <MenuIcon size={20} />
          </Button>
        </SheetTrigger>

        <SheetContent
          side='right'
          className='w-84 bg-neutral-900 text-white py-6 pl-10'
        >
          <SheetTitle className='text-lg font-semibold font-syne'>
            Menu
          </SheetTitle>

          <nav className='flex flex-col gap-4'>
            {navLinks?.map((link) => {
              const Icon = link.icon;

              return (
                <a
                  href={link.link}
                  key={link.label}
                  onClick={() => setActive(link.link)}
                  className={cn(
                    'flex items-center gap-2 text-neutral-300 hover:text-primary transition-colors duration-200 text-base',
                    active === link.link && 'text-primary',
                  )}
                >
                  <Icon class='size-4' /> {link.label}
                </a>
              );
            })}
          </nav>

          <div className='mt-30'>
            <p className='pb-2'>Socials</p>

            <div className='flex gap-3 text-neutral-500'>
              {socialLinks?.map((social, i) => {
                const Icon = social.icon;
                return (
                  <a
                    key={i}
                    href={social.link}
                    className='hover:text-primary border-2 border-neutral-500 p-2 rounded-full hover:border-primary transition-colors duration-200'
                  >
                    <Icon class='size-4' />
                  </a>
                );
              })}
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default Sidebar;
