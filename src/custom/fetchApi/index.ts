import axios from 'axios';

// interface IUrl{
//     url: string;
//     data: any;
// };

export const getAPI = async (url = '') => {
  let newData = [];
  const response = await axios.get(url);
  newData = response.data;
  return newData;
};
