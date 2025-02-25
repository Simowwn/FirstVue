import api from './api';

export const authService = {
  getUsers: async () => {
    const response = await api.get('/users/');
    return response;
  },
  login: async (credentials) => {
    const response = await api.post('/users/login/', credentials);
    return response;
  },
  register: async (userData) => {
    // Send the userData directly without additional conversion
    // The is_staff value is already a boolean from the v-model binding
    const response = await api.post('/users/register/', userData);
    return response;
  },
  logout: () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
  },
};