import React from "react"

export default function HeaderBar() {
    return (
        <header className="header--bar">
            <img src="./src/assets/TrollFace.png" className="meme--logo" />
            <h2 className="meme--title">Meme Generator</h2>
            <p className="project--name">React Course - Project 3</p>
        </header>
    )
}