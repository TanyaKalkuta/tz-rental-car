'use client';

import { useFavoriteStore } from '@/lib/store/useCarStore';
import css from './CarCard.module.css';
import { Car } from '@/types/car';
import Link from 'next/link';
import Image from 'next/image';

interface CarCardProps {
  car: Car;
}

export default function CarCard({ car }: CarCardProps) {
  const { favorites, toggleFavorite } = useFavoriteStore();
  const isFavorite = favorites.includes(car.id);
  // Розбиваємо адресу, щоб отримати місто та країну
  const addressParts = car.address.split(',');
  const city = addressParts[addressParts.length - 2].trim();
  const country = addressParts[addressParts.length - 1].trim();

  return (
    <div className={css.card}>
      <div className={css.imageWrapper}>
        <Image
          src={car.img}
          alt={`${car.brand} ${car.model}`}
          fill
          sizes="268px"
          className={css.image}
          priority
        />
        <button
          className={css.favoriteBtn}
          onClick={() => toggleFavorite(car.id)}
          type="button"
          aria-label="Toggle favorite"
        >
          <svg width="18" height="18">
            <use
              xlinkHref={
                isFavorite ? '/sprite.svg#heart-active' : '/sprite.svg#heart'
              }
            />
          </svg>
        </button>
      </div>

      <div className={css.content}>
        <div className={css.mainInfo}>
          <h2 className={css.title}>
            {car.brand} <span className={css.accent}>{car.model}</span>,{' '}
            {car.year}
          </h2>
          <p className={css.price}>${car.rentalPrice}</p>
        </div>

        <div className={css.detailsWrapper}>
          <p className={css.details}>
            {city} | {country} | {car.rentalCompany} |
          </p>
          <p className={css.details}>
            {car.type} | {car.mileage} km
          </p>
        </div>
      </div>

      <Link href={`/catalog/${car.id}`} className="button">
        Read more
      </Link>
    </div>
  );
}
