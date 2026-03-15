import css from './CarDetails.module.css';
import { Car } from '@/types/car';
import Image from 'next/image';
import BookingForm from '../BookingForm/BookingForm';

interface CarDetailsProps {
  car: Car;
}
export default function CarDetails({ car }: CarDetailsProps) {
  const shortId = String(car.id).slice(-4);
  const addressParts = car.address.split(',');
  const city = addressParts[addressParts.length - 2].trim();
  const country = addressParts[addressParts.length - 1].trim();

  return (
    <section className={css.section}>
      <div className={css.container}>
        <div className={css.mainWrapper}>
          {/* ЛІВА ЧАСТИНА */}
          <div className={css.leftColumn}>
            <div className={css.imageWrapper}>
              <Image
                src={car.img}
                alt={`${car.brand} ${car.model}`}
                fill
                className={css.image}
              />
            </div>

            <BookingForm />
          </div>

          <div className={css.infoColumn}>
            <div className={css.header}>
              <h1 className={css.title}>
                {car.brand} {car.model}, {car.year}
              </h1>
              <span className={css.id}>Id: {shortId}</span>
            </div>

            <p className={css.locationInfo}>
              <svg className={css.metaIcon}>
                <use href="/sprite.svg#icon-Location" />
              </svg>
              {city}, {country}
              <span className={css.mileage}>
                Mileage:
                {car.mileage.toLocaleString('uk-UA').replace(/\u00A0/g, ' ')} km
              </span>
            </p>

            <p className={css.price}>${car.rentalPrice}</p>
            <p className={css.description}>{car.description}</p>

            <div className={css.blockBox}>
              {/* Rental Conditions */}
              <div className={css.block}>
                <h3 className={css.blockTitle}>Rental Conditions:</h3>
                <ul className={css.conditionsList}>
                  {car.rentalConditions.map((item, index) => (
                    <li key={index} className={css.conditionItem}>
                      <svg className={css.icon}>
                        <use href="/sprite.svg#icon-check-circle" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Car Specifications (те, що пропустили) */}
              <div className={css.block}>
                <h3 className={css.blockTitle}>Car Specifications:</h3>
                <ul className={css.list}>
                  <li className={css.listItem}>
                    <svg className={css.icon}>
                      <use href="/sprite.svg#icon-calendar" />
                    </svg>
                    Year: {car.year}
                  </li>
                  <li className={css.listItem}>
                    <svg className={css.icon}>
                      <use href="/sprite.svg#icon-car" />
                    </svg>
                    Type: {car.type}
                  </li>
                  <li className={css.listItem}>
                    <svg className={css.icon}>
                      <use href="/sprite.svg#icon-fuel-pump" />
                    </svg>
                    Fuel Consumption: {car.fuelConsumption}
                  </li>
                  <li className={css.listItem}>
                    <svg className={css.icon}>
                      <use href="/sprite.svg#icon-gear" />
                    </svg>
                    Engine Size: {car.engineSize}
                  </li>
                </ul>
              </div>
              {/* Accessories */}
              <div className={css.block}>
                <h3 className={css.blockTitle}>
                  Accessories and functionalities:
                </h3>
                <ul className={css.accessoriesList}>
                  {car.accessories.map((item, index) => (
                    <li key={index} className={css.accessoryItem}>
                      <svg className={css.icon}>
                        <use href="/sprite.svg#icon-check-circle" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
