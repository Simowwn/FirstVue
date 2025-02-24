export const authService = {
    getUsers:async () => {
        return await api.get('/users/');
      },

      login: async (credentials) => {
          // First get the token
          const tokenResponse = await api.post('/token/', credentials);
          return tokenResponse;
        
      },    
}