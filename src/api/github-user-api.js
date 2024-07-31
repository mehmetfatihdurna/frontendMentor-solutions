import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://api.github.com/users',
    headers: {
        'Content-Type': 'application/json',
    },
});

export async function getUser(username) {

    try {
        const response = await apiClient.get(`/${username}`);
        console.log('Veriler alındı:');
        return response             
      } catch (error) {
        console.error('Hata oluştu:',error.response);
        return error.response;
      }
}