import api from './api';
import { Workout } from '@/types';

export const workoutService = {
  getAll: async () => {
    const response = await api.get<Workout[]>('/workouts');
    return response.data;
  },

  getById: async (id: string) => {
    const response = await api.get<Workout>(`/workouts/${id}`);
    return response.data;
  },

  create: async (data: Omit<Workout, 'id'>) => {
    const response = await api.post<Workout>('/workouts', data);
    return response.data;
  },

  update: async (id: string, data: Partial<Workout>) => {
    const response = await api.put<Workout>(`/workouts/${id}`, data);
    return response.data;
  },

  delete: async (id: string) => {
    await api.delete(`/workouts/${id}`);
  },
};
