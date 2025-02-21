import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000/api',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  }
});

// Add a request interceptor to add the auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('access_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const userService = {
  getUsers() {
    return api.get('/users/');
  },
  async login(credentials) {
    try {
      // First get the token
      const tokenResponse = await api.post('/token/', credentials);
      return tokenResponse;
    } catch (error) {
      throw error;
    }
  },
  register(userData) {
    return api.post('/users/register/', userData);
  },
  logout() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
  }
};

export default api; 