import api from './api';
export const workoutService = {
    getAll: async () => {
        const response = await api.get('/workouts');
        return response.data;
    },
    getById: async (id) => {
        const response = await api.get(`/workouts/${id}`);
        return response.data;
    },
    create: async (data) => {
        const response = await api.post('/workouts', data);
        return response.data;
    },
    update: async (id, data) => {
        const response = await api.put(`/workouts/${id}`, data);
        return response.data;
    },
    delete: async (id) => {
        await api.delete(`/workouts/${id}`);
    },
};
