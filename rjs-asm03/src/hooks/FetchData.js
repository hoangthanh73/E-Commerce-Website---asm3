import { useState, useEffect } from 'react';

export const useFetch = (url) => {

    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [error, setError] = useState(false);

    useEffect(() => {

        const getData = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('error');
                }
                const results = await response.json();
                setLoading(false)
                setData(results);
                setError(false)

            } catch (error) {
                setLoading(false)
                setError(false)
                setError(error)
            }
        }

        getData();

    }, [url]);

    return {
        loading,
        data,
        error
    }
}

export default useFetch;