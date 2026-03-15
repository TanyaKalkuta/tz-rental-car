'use client';
import { useEffect, useState, useCallback } from 'react';
import { getCars, CarsQueryParams } from '@/lib/api/api-cars';
import CarList from '@/components/CarList/CarList';
import CarFilters from '@/components/CarFilters/CarFilters';
import Loader from '@/components/Loader/Loader';
import { Car } from '@/types/car';

export default function CatalogPage() {
  const [cars, setCars] = useState<Car[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [currentFilters, setCurrentFilters] = useState<CarsQueryParams>({});

  const fetchCars = useCallback(
    async (nextPage: number, filters: CarsQueryParams = {}) => {
      setLoading(true);
      try {
        const data = await getCars({
          page: String(nextPage),
          limit: '12',
          ...filters, // Додаємо фільтри до запиту
        });

        if (nextPage === 1) {
          setCars(data.cars);
        } else {
          setCars(prev => [...prev, ...data.cars]);
        }

        setHasMore(data.cars.length === 12);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    },
    []
  );

  useEffect(() => {
    fetchCars(1);
  }, [fetchCars]);

  const handleLoadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchCars(nextPage, currentFilters);
  };

  // ОБРОБНИК ФІЛЬТРАЦІЇ
  const handleFilter = (filters: CarsQueryParams) => {
    // 1. Зберігаємо нові фільтри
    setCurrentFilters(filters);
    // 2. Скидаємо сторінку в 1
    setPage(1);
    // 3. Скидаємо список машин
    setCars([]);
    // 4. Робимо новий запит з фільтрами
    fetchCars(1, filters);
  };

  return (
    <section className="catalog">
      <div className="container">
        <CarFilters onFilter={handleFilter} />

        {cars?.length > 0 && <CarList cars={cars} />}
        {cars?.length === 0 && !loading && (
          <p
            style={{ textAlign: 'center', fontSize: '18px', marginTop: '40px' }}
          >
            No cars found matching your criteria.
          </p>
        )}
        {loading && <Loader />}

        {hasMore && !loading && cars.length > 0 && (
          <button onClick={handleLoadMore} className="load-more-btn">
            Load More
          </button>
        )}
      </div>
    </section>
  );
}
