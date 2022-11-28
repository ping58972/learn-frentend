import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 2dcdae42afe95d0d62232899b6d1dce549ebde2916c1dcb799e37608bcc151f0'
      }
});