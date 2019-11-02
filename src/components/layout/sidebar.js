import React, {useState, useEffect} from 'react'
import {Gallery, GalleryImage} from 'react-gesture-gallery'

import Pic1 from '../../images/academic_new.png'
import Pic2 from '../../images/candles.jpg'
import Pic3 from '../../images/oldSkull.jpg'
import Pic4 from '../../images/gatsby-astronaut.png'


const Sidebar = () => {
    const [index, setIndex] = useState(0);
    const imgs = [Pic1, Pic2, Pic3, Pic4]
    

    useEffect(() => {
        const interval = setInterval(()=> {
            if(index === imgs.length - 1){
                setIndex(0);
            }else{
                setIndex(index + 1)
            }
            
        }, 5000)
        return () => clearInterval(interval); 
    }, [index, imgs.length])
    
    
    return (
        <div className="center-align">
            <h3 className="hack">.</h3>
            
            <div className="card-panel black-text">
                <h5 className="blue-text">Funeral Arrangements</h5>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis commodi ducimus dolor rerum doloribus nostrum sit rem nesciunt consectetur quas, aperiam labore. Et sit iste quia consequatur reprehenderit voluptas qui.</p>
            </div>
            
            <div className="card-panel">
                <Gallery index={index} 
                
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
