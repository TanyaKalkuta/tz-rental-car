import Link from 'next/link';
import css from './page.module.css';
import Image from 'next/image';

export default function Home() {
  return (
    <main className={css.hero}>
      <Image
        src="/car-2.webp"
        alt="Rental Car"
        fill
        priority
        className={css.bgImage}
      />
      <div className="container">
        <div className={css.content}>
          <h1 className={css.title}>Find your perfect rental car</h1>
          <p className={css.description}>
            Reliable and budget-friendly rentals for any journey
          </p>
          <Link className={css.btn} href="/catalog">
            View Catalog
          </Link>
        </div>
      </div>
    </main>
  );
}
