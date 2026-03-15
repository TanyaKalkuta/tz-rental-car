'use client';
import { usePathname } from 'next/navigation';
import css from './Header.module.css';
import Link from 'next/link';

export default function Header() {
  const pathname = usePathname();

  return (
    <header className={css.header}>
      <div className="container">
        <div className={css.wrapper}>
          <Link href="/" className={css.logo} aria-label="Home">
            Rental<span>Car</span>
          </Link>

          <nav>
            <ul className={css.navigation}>
              <li>
                <Link
                  href="/"
                  className={`${css.link} ${pathname === '/' ? css.active : ''}`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/catalog"
                  className={`${css.link} ${pathname === '/catalog' ? css.active : ''}`}
                >
                  Catalog
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
