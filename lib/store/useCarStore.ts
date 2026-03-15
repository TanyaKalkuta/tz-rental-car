// import { create } from 'zustand';
// import { persist } from 'zustand/middleware';
// import { Car, CarFilters } from '../../types/car';

// interface CarState {
//   cars: Car[];
//   favorites: string[]; // зберігаємо тільки ID
//   filters: CarFilters;
//   isLoading: boolean;
//   error: string | null;

//   // Actions
//   setCars: (cars: Car[]) => void;
//   addCars: (newCars: Car[]) => void; // для Load More
//   toggleFavorite: (id: string) => void;
//   setFilters: (filters: CarFilters) => void;
//   resetFilters: () => void;
// }

// export const useCarStore = create<CarState>()(
//   persist(
//     set => ({
//       cars: [],
//       favorites: [],
//       filters: {},
//       isLoading: false,
//       error: null,

//       setCars: cars => set({ cars }),
//       addCars: newCars => set(state => ({ cars: [...state.cars, ...newCars] })),

//       toggleFavorite: id =>
//         set(state => ({
//           favorites: state.favorites.includes(id)
//             ? state.favorites.filter(favId => favId !== id)
//             : [...state.favorites, id],
//         })),

//       setFilters: filters => set({ filters }),
//       resetFilters: () => set({ filters: {}, cars: [] }), // скидаємо авто при зміні фільтрів
//     }),
//     {
//       name: 'car-rental-storage', // назва ключа в localStorage
//       partialize: state => ({ favorites: state.favorites }), // зберігаємо ТІЛЬКИ обране
//     }
//   )
// );
