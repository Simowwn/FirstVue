import axios from 'axios';
import Cookies from 'js-cookie'; // Import js-cookie

const api = axios.create({
  baseURL: 'http://localhost:8000/api',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    'X-CSRFToken': Cookies.get('csrftoken'), // Add CSRF token header
  },
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
  },
  async registerStall(stallData) {
    console.log('Registering stall with data:', stallData); // Debug log
    try {
      return await api.post('/stalls/stalls/', stallData);
    } catch (error) {
      console.error('Error registering stall:', error); // Log the error
      // Improved error logging
      console.error('Error details:', error.response?.data); // Log detailed error response
      throw error; // Rethrow the error for further handling
    }
  },
  async getStalls() {
    try {
      return await api.get('/stalls/stalls/'); // Ensure this endpoint exists in your backend
    } catch (error) {
      console.error('Error fetching stalls:', error); // Log the error
      throw error; // Rethrow the error for further handling
    }
  },
  async editStalls(id, stallData) {
    try {
      return await api.patch(`/stalls/stalls/${id}/`, stallData); // Use the id and stallData
    } catch (error) {
      console.error('Error in patching stall:', error); // Log the error
      throw error; // Rethrow the error for further handling
    }
  },
  async deleteStalls(id, stallData){
    try {
      return await api.delete(`/stalls/stalls/${id}/`, stallData);
    } catch (error) {
      console.error('Error in delete stall:', error);
      throw error;
    }
  },
};

export default api; 