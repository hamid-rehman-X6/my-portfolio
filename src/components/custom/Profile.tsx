import { socialLinks } from '@/constants';
import { Button } from '../ui/button';

const Profile = () => {
  return (
    <aside className='max-w-3xl m-6 border bg-neutral-900 border-neutral-600 p-6 text-white rounded-lg lg:sticky lg:left-0 lg:top-6 lg:w-96'>
      <div className='flex flex-col gap-4'>
        <div className='flex items-center justify-between gap-x-10'>
          <h1 className='text-3xl font-bold'>Hamid</h1>
          <p className='text-sm'>Full Stack Software Engineer</p>
        </div>

        <img
          src={true ? '/mhr.jpeg' : '/avatar.jpg'}
          alt='Hamid'
          className='lg:w-96 rounded-2xl object-cover'
        />

        <div className='mt-6'>
          <p className='text-sm text-neutral-300'>Specialization:</p>
          <p className='text-lg capitalize'>Full Stack AI Software Engineer</p>
        </div>
        <div>
          <p className='text-sm text-neutral-300'>Based in:</p>
          <p className='text-lg capitalize'>Based in Lahore, Pk</p>
        </div>

        <div className='flex gap-3 pt-2 text-neutral-500'>
          {socialLinks.map((social, i) => {
            const Icon = social.icon;
            return (
              <a
                key={i}
                href={social.link}
                className='border border-neutral-500 p-2 hover:text-primary rounded-full hover:border-primary transition duration-200'
              >
                <Icon class={'size-4'} />
              </a>
            );
          })}
        </div>

        <Button
          className='mt-2'
          size='lg'
        >
          Let's Work!
        </Button>
      </div>
    </aside>
  );
};

export default Profile;
