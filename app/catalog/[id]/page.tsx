import {
  QueryClient,
  HydrationBoundary,
  dehydrate,
} from '@tanstack/react-query';

import { getSingleCar } from '@/lib/api/api-cars';
import CarDetailsClient from './CarDetails.client';

type Props = {
  params: Promise<{ id: string }>;
};

const CarDetails = async ({ params }: Props) => {
  const { id } = await params;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['car', id],
    queryFn: () => getSingleCar(id),
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <CarDetailsClient />
    </HydrationBoundary>
  );
};
export default CarDetails;
// const CarDetailsPage = async ({ params }: Props) => {
//   const { id } = await params;

//   const car = await getSingleCar(id);

//   return (
//     <div>
//       <CarDetails car={car} />
//     </div>
//   );
// };

// export default CarDetailsPage;
