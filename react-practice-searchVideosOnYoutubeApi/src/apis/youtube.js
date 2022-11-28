import axios from 'axios';

const KEY = 'AIzaSyD7xR3iPIB_JQg4dsZQZFpb33Fm21d7E_Q';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY,
    }
});

