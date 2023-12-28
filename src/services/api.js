import axios from 'axios';
const baseUrl = 'https://api-intranet.onrender.com/api/v1/posts';

const getPosts = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

export default { getPosts };
