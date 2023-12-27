import axios from 'axios';
const baseUrl = 'https://notesback-bzcn.onrender.com/api/notes';

axios
  .get(baseUrl)
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.log('Deu erro' + error);
  });
