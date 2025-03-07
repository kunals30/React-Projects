import { useState } from "react";
import { useEffect } from "react";

const useFetch = (url) => {

    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true);
    const [error,setError] = useState(null)

    useEffect(() =>{
        fetch(url)
        .then(res =>{
            if(!res.ok){
                throw Error('Could not fetch the data from the server')
            }
            return res.json();
        })
        .then(data =>{
            console.log(data)
            setData(data);
            setIsPending(false);
            setError(null);
        })
        .catch(err =>{
            setIsPending(false);
            setError(err.message);
        })

        return ()=>{
            console.log("Cleanup");
        }
    },[url])

    return { data, isPending, error }
}


export default useFetch;