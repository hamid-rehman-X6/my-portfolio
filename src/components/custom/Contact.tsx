import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { motion } from 'motion/react';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import SectionHeaders from './SectionHeaders';
import type { ContactFormValues } from '@/types';
import { fadeUp } from '@/lib/animations';
import { FORMSPREE_ENDPOINT } from '@/lib/formspree';

const Contact = () => {
  const form = useForm<ContactFormValues>({
    mode: 'onChange',
    defaultValues: {
      name: '',
      company: '',
      email: '',
      phone: '',
      message: '',
    },
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const onSubmit = async (values: ContactFormValues) => {
    try {
      setSubmitError(null);
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        form.reset();
        setSubmitted(true);
      } else {
        let errMsg = 'Failed to send message. Please try again later.';
        try {
          const data = await response.json();
          if (data?.error) errMsg = String(data.error);
        } catch (_) {}
        setSubmitError(errMsg);
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitError(
        'An error occurred while sending the message. Please try again later.',
      );
    }
  };

  return (
    <motion.section
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.8 }}
      variants={fadeUp}
      className='mt-30 scroll-mt-10'
      id='contact'
    >
      <SectionHeaders
        title={`Let's make something awesome together!`}
        subtitle='Contancts'
      />

      <Form {...form}>
        {submitted ? (
          <div className='w-full mx-auto mt-10 flex flex-col items-center justify-center space-y-4'>
            <div className='rounded-full bg-green-800/20 p-4'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                className='h-8 w-8 text-green-400'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M5 13l4 4L19 7'
                />
              </svg>
            </div>
            <h3 className='text-xl font-semibold text-white'>
              Response submitted
            </h3>
            <p className='text-neutral-300 text-center max-w-xl'>
              Thank you — your message was submitted successfully. I'll get back
              to you as soon as possible.
            </p>
            {submitError ? (
              <p className='text-sm text-red-500'>{submitError}</p>
            ) : null}

            <div className='flex gap-3'>
              <Button
                className='cursor-pointer'
                size='lg'
                onClick={() => {
                  setSubmitted(false);
                  setSubmitError(null);
                  form.reset();
                }}
              >
                Send another response
              </Button>
              <Button
                size='lg'
                variant='outline'
                asChild
              >
                <a
                  href='#contact'
                  onClick={() => {
                    setSubmitted(false);
                    setSubmitError(null);
                    form.reset();
                  }}
                >
                  Back to section
                </a>
              </Button>
            </div>
          </div>
        ) : (
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className='w-full mx-auto space-y-4 mt-10'
          >
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              {/* Name Field */}
              <FormField
                control={form.control}
                name='name'
                rules={{ required: 'Name is required' }}
                render={({ field, fieldState }) => (
                  <FormItem className='w-full'>
                    <FormControl>
                      <Input
                        placeholder='Your name'
                        className='border-0'
                        aria-invalid={!!fieldState.error}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage>{fieldState.error?.message}</FormMessage>
                  </FormItem>
                )}
              />

              {/* Company Field */}
              <FormField
                control={form.control}
                name='company'
                render={({ field, fieldState }) => (
                  <FormItem className='w-full'>
                    <FormControl>
                      <Input
                        placeholder='Company name'
                        className='border-0'
                        aria-invalid={!!fieldState.error}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage>{fieldState.error?.message}</FormMessage>
                  </FormItem>
                )}
              />

              {/* Email Field */}
              <FormField
                control={form.control}
                name='email'
                rules={{
                  required: 'Email is required',
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: 'Invalid email address',
                  },
                }}
                render={({ field, fieldState }) => (
                  <FormItem className='w-full'>
                    <FormControl>
                      <Input
                        type='email'
                        placeholder='name@example.com'
                        className='border-0'
                        aria-invalid={!!fieldState.error}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage>{fieldState.error?.message}</FormMessage>
                  </FormItem>
                )}
              />

              {/* Phone Field */}
              <FormField
                control={form.control}
                name='phone'
                render={({ field, fieldState }) => (
                  <FormItem className='w-full'>
                    <FormControl>
                      <Input
                        type='tel'
                        placeholder='(123) 456-7890'
                        className='border-0'
                        aria-invalid={!!fieldState.error}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage>{fieldState.error?.message}</FormMessage>
                  </FormItem>
                )}
              />
            </div>

            {/* Message Field */}
            <FormField
              control={form.control}
              name='message'
              rules={{ required: 'Message is required' }}
              render={({ field, fieldState }) => (
                <FormItem className='w-full'>
                  <FormControl>
                    <Textarea
                      placeholder='Write your message ...'
                      className='border-0 h-32'
                      aria-invalid={!!fieldState.error}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage>{fieldState.error?.message}</FormMessage>
                </FormItem>
              )}
            />

            <Button
              className='cursor-pointer'
              type='submit'
              size='lg'
              disabled={form.formState.isSubmitting}
              aria-busy={form.formState.isSubmitting}
            >
              {form.formState.isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
          </form>
        )}
      </Form>
    </motion.section>
  );
};

export default Contact;
