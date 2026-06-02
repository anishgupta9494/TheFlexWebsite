import api from './api';
import { User, AuthResponse } from '@/types';

export const authService = {
  register: async (email: string, password: string, name: string) => {
    const response = await api.post<AuthResponse>('/auth/register', {
      email,
      password,
      name,
    });
    if (response.data.token) {
      localStorage.setItem('token', response.data.token);
    }
    return response.data;
  },

  login: async (email: string, password: string) => {
    const response = await api.post<AuthResponse>('/auth/login', {
      email,
      password,
    });
    if (response.data.token) {
      localStorage.setItem('token', response.data.token);
    }
    return response.data;
  },

  logout: () => {
    localStorage.removeItem('token');
  },

  getProfile: async () => {
    const response = await api.get<User>('/users/profile');
    return response.data;
  },

  updateProfile: async (data: Partial<User>) => {
    const response = await api.put<User>('/users/profile', data);
    return response.data;
  },
};
