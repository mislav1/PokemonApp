import React from 'react'
import SimpleImageSlider from "react-simple-image-slider";

export default function Slider({ pokemon }) {

    const style = {
        width: "250px",
        height: "250px",
        backgroundColor: "#0adad8",
        margin:"10px",
        borderRadius:"15px"
    }

    const getImages = () => {
        const images = []
        if (pokemon.sprites) {
            Object.keys(pokemon.sprites).forEach((key, index) => {
                if (pokemon.sprites[key] !== null && typeof pokemon.sprites[key] === "string") {
                    images.push({ url: pokemon.sprites[key] })
                }
            })
            return images
        }
        return []
    }

    const images = getImages()

    return (
        <div>
            {
                images.length > 0 ?
                    <SimpleImageSlider
                        width={250}
                        height={250}
                        images={images}
                        style={style}
                        showBullets={false}
                    />
                    :
                    <img alt="Pokemon"/>
            }

        </div>
    )
}