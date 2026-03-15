'use client';
import { useEffect, useState } from 'react';
import { getCars } from '@/lib/api/api-cars';
import CarList from '@/components/CarList/CarList';
import Loader from '@/components/Loader/Loader';
import { Car } from '@/types/car';

export default function CatalogPage() {
  const [cars, setCars] = useState<Car[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const fetchCars = async (nextPage: number) => {
    setLoading(true);
    try {
      // Тут має бути виклик API з параметрами page та limit (наприклад, 12)
      const data = await getCars({
        page: String(nextPage),
        limit: '12',
      });

      if (nextPage === 1) {
        setCars(data.cars);
      } else {
        setCars(prev => [...prev, ...data.cars]);
      }

      // Перевірка, чи є ще дані (залежить від того, що повертає твій бекенд)
      if (data.cars.length < 12) setHasMore(false);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCars(1);
  }, []);

  const handleLoadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchCars(nextPage);
  };

  return (
    <section>
      <div className="container">
        {/* Тут згодом додамо Filters */}
        {cars?.length > 0 && <CarList cars={cars} />}
        {loading && <Loader />}

        {hasMore && !loading && (
          <button
            onClick={handleLoadMore}
            className="button load-more-btn"
            style={{ display: 'block', margin: '40px auto', cursor: 'pointer' }}
          >
            Load More
          </button>
        )}
      </div>
    </section>
  );
}
// const CatalogPage = async () => {
//   const { cars } = await getCars();

//   return (
//     <section>
//       <div className="container">
//         {cars?.length > 0 && <CarList cars={cars} />}
//       </div>
//     </section>
//   );
// };
// export default CatalogPage;
