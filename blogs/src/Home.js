
import { useState, useEffect } from "react"
import BlogList from "./Blogs"
const Home = () => {
    const [blogs,setBlogs]=useState(null);
    const [isPending,setisPending] = useState(true);
    const [err,setError] = useState(null) 
   
    const deleteBlog= (id)=>{
      const  newBlogs = blogs.filter(blog=>blog.id!==id);
      setBlogs(newBlogs);
    }  
  
    useEffect(()=>{
       fetch('http://localhost:8000/blogs')
       .then(res=>{
         if (!res.ok) {
           throw Error("ERROR 404 NOT FOUND");
         }
         return res.json();
       })
       .then((data)=>{
         console.log(data);
         setBlogs(data);
         setisPending(false);
         setError(null);
       })
       .catch(err=>{
         setisPending(false);
         setBlogs(null);
         setError(err.message);
       })
    },[])

    return (
      <div className="home">

      { err && <div>{err}</div>}

      { isPending && <div>Loading...</div>}
      {
         blogs &&     <BlogList blogs = {blogs} deleteBlog={deleteBlog} />

      }     
      </div>
    );
  }
   
  export default Home;