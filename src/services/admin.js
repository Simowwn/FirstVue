import api from './api';

export const adminService = {
    getStalls: async () => {
      const response = await api.get('/stalls/stalls/');
      return response;
    },
    adminUsers: async () => {
      const response = await api.get('/users/users/');
      return response;
    },
    updateStall: async (id, stallData) => {
      const response = await api.patch(`/stalls/stalls/${id}/`, stallData);
      return response;
    },
    deleteStall: async (id) => {
      const response = await api.delete(`/stalls/stalls/${id}/`);
      return response;
    },

    deleteUser: async (id) => { // Add this function
      const response = await api.delete(`/users/users/${id}/`); // Adjust the endpoint as necessary
      return response;
    },

    updatedUser: async (id, userData) => { // Add this function
      const response = await api.patch(`/users/users/${id}/`, userData); // Adjust the endpoint as necessary
      return response;
    },
};