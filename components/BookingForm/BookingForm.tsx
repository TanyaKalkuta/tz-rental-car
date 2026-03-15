'use client';

import { useForm } from 'react-hook-form';
import css from './BookingForm.module.css';
import toast from 'react-hot-toast';

type FormData = {
  name: string;
  email: string;
  bookingDate: string;
  comment: string;
};
export default function BookingForm() {
  const { register, handleSubmit, reset } = useForm<FormData>();
  const onSubmit = (data: FormData) => {
    console.log('Form Submitted:', data);

    toast.success('Booking successful! We will contact you soon.', {
      duration: 4000,
      style: {
        borderRadius: '12px',
        background: '#333',
        color: '#75d9d6',
      },
    });
    reset();
  };

  return (
    <div className={css.bookingForm}>
      <h2 className={css.title}>Book your car now</h2>
      <p className={css.subtitle}>
        Stay connected! We are always ready to help you.
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className={css.form}>
        <div className={css.fieldWrapper}>
          <input
            {...register('name', { required: true })}
            placeholder="Name*"
            className={css.input}
          />
        </div>
        <div className={css.fieldWrapper}>
          <input
            {...register('email', { required: true })}
            placeholder="Email*"
            className={css.input}
          />
        </div>
        <div className={css.fieldWrapper}>
          <input
            {...register('bookingDate')}
            type="text"
            onFocus={e => (e.target.type = 'date')}
            placeholder="Booking date"
            className={css.input}
          />
        </div>
        <div className={css.fieldWrapper}>
          <textarea
            {...register('comment')}
            placeholder="Comment"
            className={css.textarea}
          />
        </div>
        <button type="submit" className={css.button}>
          Send
        </button>
      </form>
    </div>
  );
}
