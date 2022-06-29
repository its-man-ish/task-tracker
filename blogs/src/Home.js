
import { useState } from "react"
const Home = () => {
    
    const [name,setName]=useState("Manish");
    const handleClick=()=>{
        setName("Rohit")
    }
    return (
      <div className="home">
        <h2>Homepage</h2>

        <h1>{name}</h1>
        <button onClick={handleClick}>Click</button>

      </div>
    );
  }
   
  export default Home;