import axios from 'axios';
import { Car, CarsListResponse } from '../../types/car';

const api = axios.create({
  baseURL: 'https://car-rental-api.goit.global',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export interface CarsQueryParams {
  brand?: string;
  rentalPrice?: string;
  minMileage?: string | number;
  maxMileage?: string | number;
  limit?: string | number;
  page?: string | number;
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
export const getBrands = async (): Promise<string[]> => {
  const res = await api.get<string[]>('/brands');
  return res.data;
};
