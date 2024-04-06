import { useState } from "react"
import "./styles/imageHover.css"

export function Character(character) {

    const [image, setImage] = useState(character.image)
    const [hovered, setHovered] = useState(false)

    return (
  <div className="text-center p-5" key={character.id }>
    <h1 className="text-white">{character.name}</h1>
    <img src={image} alt={character.name} className={`image-container ${hovered ? "hovered" : ""} img-fluid rounded-pill hover-zoom` } 
      
      onMouseEnter={() => { setHovered(true)}}
      onMouseLeave={() => { setHovered(false)}}
    />
    <p>{character.species}</p>
  </div>
    );
  }
