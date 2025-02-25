import api from './api';

export const stallService = {
  getStalls: async function() {
    try {
      return await api.get('/stalls/stalls/'); // Ensure this endpoint exists in your backend
    } catch (error) {
      console.error('Error fetching stalls:', error); // Log the error
      throw error; // Rethrow the error for further handling
    }
  },
    
    registerStall: async (stallData) => {
      try {
        console.log('Registering stall with data:', stallData);
        const response = await api.post('/stalls/stalls/', stallData, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`
          }
        });
        console.log('Register stall response:', response);
        return response;
      } catch (error) {
        console.error('Register stall error:', error);
        throw error;
      }
    },
    
    editStall: async (id, stallData) => {
      try {
        const response = await api.patch(`/stalls/stalls/${id}/`, stallData, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`
          }
        });
        return response;
      } catch (error) {
        console.error('Edit stall error:', error);
        throw error;
      }
    },
    
    deleteStall: async (id) => {
      try {
        const response = await api.delete(`/stalls/stalls/${id}/`, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`
          }
        });
        return response;
      } catch (error) {
        console.error('Delete stall error:', error);
        throw error;
      }
    },
};