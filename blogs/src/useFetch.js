import { useState, useEffect } from "react"



const useFetch = (url)=>{

    const [data,setData]=useState(null);
    const [isPending,setisPending] = useState(true);
    const [error,setError] = useState(null) 

    useEffect(()=>{
        fetch(url)
        .then(res=>{
          if (!res.ok) {
            throw Error("ERROR 404 NOT FOUND");
          }
          return res.json();
        })
        .then((data)=>{
          console.log(data);
          setData(data);
          setisPending(false);
          setError(null);
        })
        .catch(err=>{
          setisPending(false);
          setData(null);
          setError(err.message);
        })
     },[])

     return {data,isPending,error}

}


export default useFetch;
