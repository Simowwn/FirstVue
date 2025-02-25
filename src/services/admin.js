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
    editUsers: async (id, userData) => {
      try {
        const response = await api.patch(`/users/users/${id}/`, userData, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`
          }
        });
        return response;
      } catch (error) {
        console.error('Edit user error:', error);
        throw error;
      }
    },
    
    deleteUsers: async (id) => {
      try {
        const response = await api.delete(`/users/users/${id}/`, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`
          }
        });
        return response;
      } catch (error) {
        console.error('Delete user error:', error);
        throw error;
      }
    },
};