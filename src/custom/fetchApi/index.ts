import axios from 'axios';

export const getAPI = async (url: string) => {
  let errored = false;
  let loadding = true;
  const data: [] = await axios
    .get(url)
    .then(res => {
      return res.data;
    })
    .catch(error => {
      errored = true;
      throw error;
    })
    .finally(() => (loadding = false));
  return { data, errored, loadding };
};

export const deleteAPI = (url = '') => {
  axios.delete(url);
};
