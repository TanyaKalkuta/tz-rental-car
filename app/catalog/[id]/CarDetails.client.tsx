'use client';

import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import { getSingleCar } from '@/lib/api/api-cars';
import Loader from '@/components/Loader/Loader';
import CarDetails from '@/components/CarDetails/CarDetails';

export default function CarDetailsClient() {
  const { id } = useParams();

  const {
    data: car,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['car', id],
    queryFn: () => getSingleCar(id as string),
  });
  if (isLoading) return <Loader />;
  if (error || !car) {
    return (
      <div style={{ textAlign: 'center', padding: '50px' }}>
        <p>Oops! Something went wrong or car not found.</p>
      </div>
    );
  }
  return (
    <div>
      <CarDetails car={car} />
    </div>
  );
}
