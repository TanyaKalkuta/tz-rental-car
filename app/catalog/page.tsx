// 'use client';
export const dynamic = 'force-dynamic';
import { getCars } from '@/lib/api/api-cars';
import CarList from '@/components/CarList/CarList';

const CatalogPage = async () => {
  const { cars } = await getCars();

  return (
    <section>
      <div className="container">
        {cars?.length > 0 && <CarList cars={cars} />}
      </div>
    </section>
  );
};
export default CatalogPage;
// import { useEffect, useState } from 'react';
// import { useCarStore } from '@/lib/store/useCarStore';
// import { fetchCars } from '@/lib/api/api-cars';
// import CarCard from '@/components/CarCard/CarCard';

// export default function CatalogPage() {
//   const { cars, setCars, addCars } = useCarStore();
//   const [page, setPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);
//   const [isLoading, setIsLoading] = useState(false);

//   // Перше завантаження
//   useEffect(() => {
//     const loadInitial = async () => {
//       setIsLoading(true);
//       try {
//         const data = await fetchCars(1);
//         setCars(data.cars);
//         setTotalPages(data.totalPages);
//       } catch (error) {
//         console.error(error);
//       } finally {
//         setIsLoading(false);
//       }
//     };
//     loadInitial();
//   }, [setCars]);

//   // Функція для Load More
//   const handleLoadMore = async () => {
//     const nextPage = page + 1;
//     setIsLoading(true);
//     try {
//       const data = await fetchCars(nextPage);
//       addCars(data.cars); // Додаємо нові авто до існуючих у сторі
//       setPage(nextPage);
//     } catch (error) {
//       console.error(error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <main
//       className="container"
//       style={{ paddingBlock: '40px', textAlign: 'center' }}
//     >
//       <div
//         style={{
//           display: 'grid',
//           gridTemplateColumns: 'repeat(auto-fill, minmax(274px, 1fr))',
//           gap: '29px',
//           textAlign: 'left',
//           marginBottom: '64px',
//         }}
//       >
//         {cars.map(car => (
//           <CarCard key={car.id} car={car} />
//         ))}
//       </div>

//       {/* Кнопка Load More показується, тільки якщо є наступні сторінки */}
//       {page < totalPages && (
//         <button
//           onClick={handleLoadMore}
//           disabled={isLoading}
//           style={{
//             background: 'none',
//             border: 'none',
//             color: '#3470FF',
//             textDecoration: 'underline',
//             fontSize: '16px',
//             fontWeight: '500',
//             cursor: 'pointer',
//           }}
//         >
//           {isLoading ? 'Loading...' : 'Load more'}
//         </button>
//       )}
//     </main>
//   );
// }
