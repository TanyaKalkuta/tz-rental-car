'use client';

import { useState, useEffect } from 'react';
import { getBrands, CarsQueryParams } from '@/lib/api/api-cars';
import css from './CarFilters.module.css';

interface CarFiltersProps {
  onFilter: (filters: CarsQueryParams) => void;
}

export default function CarFilters({ onFilter }: CarFiltersProps) {
  const [brands, setBrands] = useState<string[]>([]); // Стан для брендів з API
  const [brand, setBrand] = useState('');
  const [price, setPrice] = useState('');
  const [minMileage, setMinMileage] = useState('');
  const [maxMileage, setMaxMileage] = useState('');

  // Завантажуємо бренди один раз при монтуванні
  useEffect(() => {
    getBrands().then(setBrands).catch(console.error);
  }, []);

  const PRICES = [30, 40, 50, 60, 70, 80];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const filters: CarsQueryParams = {};
    if (brand) filters.brand = brand;
    if (price) filters.rentalPrice = price;
    if (minMileage) filters.minMileage = minMileage;
    if (maxMileage) filters.maxMileage = maxMileage;

    onFilter(filters);
  };

  return (
    <form className={css.filterForm} onSubmit={handleSubmit}>
      <div className={css.fieldWrapper}>
        <label className={css.label}>Car brand</label>
        <select
          value={brand}
          onChange={e => setBrand(e.target.value)}
          className={`${css.input} ${css.select}`}
        >
          <option value="">Choose a brand</option>
          {brands.map(b => (
            <option key={b} value={b}>
              {b}
            </option>
          ))}
        </select>
      </div>

      <div className={css.fieldWrapper}>
        <label className={css.label}>Price/ 1 hour</label>
        <select
          value={price}
          onChange={e => setPrice(e.target.value)}
          className={`${css.input} ${css.select} ${css.priceSelect}`}
        >
          <option value="">Choose a price</option>
          {PRICES.map(p => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </select>
      </div>

      <div className={css.fieldWrapper}>
        <label className={css.label}>Car mileage / km</label>
        <div className={css.mileageGroup}>
          <input
            type="text"
            placeholder="From"
            value={minMileage}
            onChange={e => setMinMileage(e.target.value)}
            className={`${css.input} ${css.mileageInput}`}
          />
          <input
            type="text"
            placeholder="To"
            value={maxMileage}
            onChange={e => setMaxMileage(e.target.value)}
            className={`${css.input} ${css.mileageInput}`}
          />
        </div>
      </div>

      <button type="submit" className={css.searchBtn}>
        Search
      </button>
    </form>
  );
}
