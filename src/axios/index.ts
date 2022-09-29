import axios from 'axios';

const instance = (token: string) => {
  return axios.create({
    baseURL: 'https://082b-203-205-53-11.ap.ngrok.io',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export default instance;
