import { getSingleCar } from '@/lib/api/api-cars';
import CarDetails from '@/components/CarDetails/CarDetails';

type Props = {
  params: Promise<{ id: string }>;
};

const CarDetailsPage = async ({ params }: Props) => {
  const { id } = await params;

  const car = await getSingleCar(id);

  return (
    <div>
      <CarDetails car={car} />
    </div>
  );
};

export default CarDetailsPage;
