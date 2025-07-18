import React, { useEffect, useState } from 'react';

const useApi = (url) => {
    const [data,setData]=useState(null)
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(json=>setData(json))
    },[url])
    return data
};

export default useApi;