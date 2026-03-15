import axios from 'axios';
import { Car, CarsListResponse } from '../../types/car';

const api = axios.create({
  baseURL: 'https://car-rental-api.goit.global',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

interface CarsQueryParams {
  brand?: string;
  rentalPrice?: string;
  minMileage?: string;
  maxMileage?: string;
  limit?: string;
  page?: string;
}
export const getCars = async (
  params: CarsQueryParams = {}
): Promise<CarsListResponse> => {
  const res = await api.get<CarsListResponse>('/cars', { params });
  return res.data;
};
export const getSingleCar = async (id: string) => {
  const res = await api.get<Car>(`/cars/${id}`);
  return res.data;
};
export async function getBrands(): Promise<string[]> {
  const res = await api.get<string[]>(`/brands`);
  return res.data;
}
