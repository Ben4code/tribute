import React, {useState, useEffect} from 'react'
import {Gallery, GalleryImage} from 'react-gesture-gallery'
// import {imagesArray} from './imagesArray'

import Pic1 from '../../images/academic_new.png'
import Pic2 from '../../images/candles.jpg'
import Pic3 from '../../images/oldSkull.jpg'
import Pic4 from '../../images/gatsby-astronaut.png'
const imgs = [Pic1, Pic2, Pic3, Pic4]

// const imagesArray = ['../../images/academic_new.png', '../../images/candles.jpg', '../../images/oldSkull.jpg','../../images/gatsby-astronaut.png']

const Sidebar = () => {
    const [index, setIndex] = useState(0);
    
    
    useEffect(() => {
        const interval = setInterval(()=> {
            if(index === imgs.length - 1){
                setIndex(0);
            }else{
                setIndex(index + 1)
            }
            
        }, 5000)
        return () => clearInterval(interval); 
    }, [index])
    
    
    return (
        <div className="center-align">
            <h3 className="hack">.</h3>
            
            <div className="card-panel black-text">
                <h5 className="red-text">Funeral Arrangements</h5>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis commodi ducimus dolor rerum doloribus nostrum sit rem nesciunt consectetur quas, aperiam labore. Et sit iste quia consequatur reprehenderit voluptas qui.</p>
            </div>
            <button className="btn btn-small amber darken-4">
                Write a tribute <i className="fa fa-edit"></i>
            </button>
            <div className="card-panel">
                <Gallery index={index} 
                // style={{height: '100%', width: '100%'}} 

                onRequestChange={(i)=> {
                    setIndex(i);
                }}
                
                >
                    {imgs.map(image => {
                        return (
                            <GalleryImage key={image} objectFit="contain" src={image} />
                        )
                    })}
                </Gallery>
            </div>

        </div>
    )
}

export default Sidebar
