import axios from 'axios';
import { Car, CarsListResponse } from '../../types/car';

const api = axios.create({
  baseURL: 'https://car-rental-api.goit.global',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const getCars = async () => {
  await delay(2000);
  const res = await api.get<CarsListResponse>('/cars');
  return res.data;
};
// export const fetchCars = async (
//   page: number,
//   limit: number = 12,
//   filters: CarFilters = {}
// ) => {
//   const { data } = await instance.get('/cars', {
//     params: {
//       page,
//       limit,
//       ...filters,
//     },
//   });
//   return data; // Очікуємо масив авто та загальну кількість
// };

// export const fetchCarById = async (id: string): Promise<Car> => {
//   const { data } = await instance.get(`/cars/${id}`);
//   return data;
// };

// export const fetchBrands = async (): Promise<string[]> => {
//   const { data } = await instance.get('/brands');
//   return data;
// };
