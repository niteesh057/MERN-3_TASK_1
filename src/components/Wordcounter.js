import React, { useState } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

function Wordcounter(){
    const [word, setWord] = useState(0)

    const handleChange = (e) =>{
        const data = e.target.value.split(' ')
        setWord(data.length)
        if(e.target.value === ''){
            setWord(0)
        }
    }

    return(
        <div>
            <textarea class="form-control border-2 border-dark" style={{height:"100px"}} onChange={(e)=>handleChange(e)}></textarea>
            <br></br>
            <p style={{fontSize:"medium"}}>Word Count: {word}</p>
        </div>
    )
}

export default Wordcounter;