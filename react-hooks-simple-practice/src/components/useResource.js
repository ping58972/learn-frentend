import { useState, useEffect } from 'react';
import axios from 'axios';

const useResource = resource => {
    const [resouss, setResouss] = useState([]);
    useEffect(()=> {
        (async (resource) => {
            const res = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);
            setResouss(res.data);
        })(resource);
    }, [resource]);
    return resouss;
}

export default useResource;
