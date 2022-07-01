
import { useState, useEffect } from "react"
import BlogList from "./Blogs"
const Home = () => {
    const [blogs,setBlogs]=useState(null);
    const [isPending,setisPending] = useState(true);
   
    const deleteBlog= (id)=>{
      const  newBlogs = blogs.filter(blog=>blog.id!==id);
      setBlogs(newBlogs)
    }  
  
    useEffect(()=>{
       fetch('http://localhost:8000/blogs')
       .then(res=>{
         return res.json();
       })
       .then((data)=>{
         console.log(data);
         setBlogs(data);
         setisPending(false);
       })
    },[])

    return (
      <div className="home">

      { isPending && <div>Loading...</div>}
      {
         blogs &&     <BlogList blogs = {blogs} deleteBlog={deleteBlog} />

      }     
      </div>
    );
  }
   
  export default Home;