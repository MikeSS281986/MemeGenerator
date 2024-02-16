import React from "react"
//import memesData  from "../memesData"

export default function Meme() {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })
    const [allMemes, setAllMemesImages] = React.useState([])
    React.useEffect(function() {
        //console.log("Effect ran")
        fetch(`https://api.imgflip.com/get_memes`)
            .then(res => res.json())
            .then(data => setAllMemesImages(data))
    }, [])
    //console.log(allMemes)
    function getMemeImage(){
        const memeARR = allMemes.data.memes
        const randomPos = Math.floor(Math.random() * memeARR.length)
        const randUrl = memeARR[randomPos].url
        setMeme(prevMemeUrl => ({
            ...prevMemeUrl,
            randomImage:randUrl
        }))
    }

    function handleChange(event){
        const {name, value} = event.target
        setMeme(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }

    return (
        <main>
            <div className="form-container"> 
                <div className="input-group">
                    <label htmlFor="topText">Top text</label>
                    <input type="text" id="topText" name="topText" className="form--input" value={meme.topText} onChange={handleChange}/>
                </div>
                <div className="input-group">
                    <label htmlFor="bottomText">Bottom text</label>
                    <input type="text" id="bottomText" name="bottomText" className="form--input" value={meme.bottomText} onChange={handleChange}/>
                </div>
                <button onClick={getMemeImage}>Get a new meme image  🖼</button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
            </div>
            <h2 className="meme--text top">{meme.topText}</h2>
            <h2 className="meme--text bottom">{meme.bottomText}</h2>
        </main>
    )
}