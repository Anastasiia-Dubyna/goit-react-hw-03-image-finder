import axios from 'axios';

const API_KEY = '37485893-252f507e861118bf45a5e3b29';
const BASE_URL = 'https://pixabay.com/api/';

const fetchData = async (searchQuery, page) => {
  const response = await axios.get(BASE_URL, {
    params: {
      q: searchQuery,
      page,
      key: API_KEY,
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: 12,
    },
  });
  return response.data;
};

export { fetchData };
