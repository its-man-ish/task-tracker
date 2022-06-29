const Home = () => {
    const handleClick =()=>{
        console.log("Hellow Bro")
    }
    const handleClickAgain =(name)=>{
        console.log("Hellow Bro",name)
    }
    return (
      <div className="home">
        <h2>Homepage</h2>
        <button onClick={handleClick}>Click</button>
        <button onClick={()=>{
            handleClickAgain("Manish")
        }}>Click2</button>

      </div>
    );
  }
   
  export default Home;