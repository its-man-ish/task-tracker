
import { useState, useEffect } from "react"
import BlogList from "./Blogs"
const Home = () => {
    const [name,setName] = useState("Manish")
    const [blogs,setBlogs]=useState([
         {
        title:"Naruto Uzumaki", 
        body:"Guided by the spirit demon within him, Naruto learns to harness his powers as a ninja in this anime adventure series.",
        author:"Masashi Kishimoto",
        id:1,
       },
       {
        title:"Death Note", 
        body:"The story follows Light Yagami, a teen genius who discovers a mysterious notebook: the Death NOte.",
        author:"Tsugumi Ohba ",
        id:2,
       }
    ]);
   
    const deleteBlog= (id)=>{
      const  newBlogs = blogs.filter(blog=>blog.id!==id);
      setBlogs(newBlogs)
    }  
  
    useEffect(()=>{
      console.log('use effect ran')
      console.log(blogs)
    },[name])
    return (
      <div className="home">
        <BlogList blogs = {blogs} deleteBlog={deleteBlog} />
        {name}
        <button onClick={()=>setName("Chotu")}>Name</button>
      </div>
    );
  }
   
  export default Home;