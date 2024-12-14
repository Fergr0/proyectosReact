import axios from "axios";
import { useEffect, useState } from "react"


function MemeListComponent() {

    const [memes, setMemes] = useState([]);

    const HTMLMemes = memes.map((meme)=>{
        return(
            <li key={meme.id}>
                <h2>{meme.name}</h2>
                <img src={meme.url} alt={meme.name} className="meme-image"></img>
            </li>
        )
    })

    useEffect(()=>{
        axios.get("https://api.imgflip.com/get_memes").then((response)=>{
            console.log(response.data);
            setMemes(response.data.data.memes)
        })
    }, [])

    // useEffect(()=>{
    //     fetch("https://api.imgflip.com/get_memes")
    //     .then((response)=>response.json())
    //     .then((data)=>{
    //     console.log(data.data.memes)
    //     setMemes(data.data.memes);
    //    })
    // }, [])
    
  return (
    <ul className="meme-list">
        {HTMLMemes}
    </ul>
  )
}

export default MemeListComponent