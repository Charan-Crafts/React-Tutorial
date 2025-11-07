import React, { useEffect, useState } from 'react';

const useCurrencyHook = (currency) => {

    const [data, setData] = useState({})
    useEffect(
        () => {

            fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`)

            .then((response)=>{
                
                return response.json()
                
            })
            .then((res)=>{
                // console.log(res?.[currency]);
                setData(res?.[currency])
            })
        
        }, [currency])

        return data;

}

export default useCurrencyHook;
