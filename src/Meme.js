import React from 'react';
import memesData from "./memesData";

function Meme()
{

    const [meme,setMeme] = React.useState({
        topText:"",
        bottomText: "",
        randomImage:"https://i.imgflip.com/30b1gx.jpg"
    })

    const [allMemeImages , setAllMemeImages] = React.useState(memesData)


    // const[memeImage , setMemeImage] = React.useState("https://i.imgflip.com/30b1gx.jpg")
    // let url
    function getMemeImage()
    {
        const memesArray = memesData.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        // url = memesArray[randomNumber].url;
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage:url
        }))
    

    }
    return (
        <main>
            <div className="form">
                <input
                     type="text"
                     placeholder="Top text"
                     className = "form--input"
                 />
                <input
                    type="text"
                    placeholder="Bottom text"
                    className = "form--input"
                />
                <button 
                    onClick={getMemeImage}
                    className = "form--button">
                        Get a new meme image 🖼️
                </button>
            </div>
            <img src={meme.randomImage} className="meme--image" />
        </main>
    );
}

export default Meme;