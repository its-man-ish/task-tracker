import {useState } from 'react'
const Create = ()=>{
   const [title,setTitle] = useState('');
   const [body,setBody] = useState('');
   const [genre,setGenre] = useState('');



    return(
        <div className="create">
          <h3>Create a New Bog </h3>

          <form action="">
             <label htmlFor="">Blog title</label>

             <input 
             value={title}
             onChange={(e)=>setTitle(e.target.value)}
             type="text"
             required
              />
              <label htmlFor="">Genre</label>
              <select name="" id="" 
               value={genre}
               onChange={(e)=>setGenre(e.target.value)}
              required
              >
                <option value="game">Game</option>
                <option value="fashion">Fashion</option>
                <option value="anime">Anime</option>
                <option value="education">Education</option>
                <option value="Technology">Technology</option>
                <option value="Politics">Politics</option>
              </select>
            <label htmlFor="">Blog body</label>
            <textarea 
            value={body}
            onChange={(e)=>setBody(e.target.value)}
            required
            ></textarea>
            <button>Add Blog</button> <br />

            

          </form>
        </div>
    )
}

export default Create