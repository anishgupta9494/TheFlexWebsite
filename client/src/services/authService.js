import api from './api';
export const authService = {
    register: async (email, password, name) => {
        const response = await api.post('/auth/register', {
            email,
            password,
            name,
        });
        if (response.data.token) {
            localStorage.setItem('token', response.data.token);
        }
        return response.data;
    },
    login: async (email, password) => {
        const response = await api.post('/auth/login', {
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
        const response = await api.get('/users/profile');
        return response.data;
    },
    updateProfile: async (data) => {
        const response = await api.put('/users/profile', data);
        return response.data;
    },
};
