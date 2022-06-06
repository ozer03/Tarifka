import React, { useEffect, useState } from "react";
import axios from 'axios';

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        try {
            const {data : generalData} = await axios.get(url);
            setData(generalData);
            setLoading(false);
        }
        catch (err) {
            setError(err.message)
        }
    }; 
        

    useEffect(() => {
        fetchData();
    }, [])

    return {data, loading, error};
}

export default useFetch;