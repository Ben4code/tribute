import React, {useState, useEffect} from 'react'
import {Gallery, GalleryImage} from 'react-gesture-gallery'

import Pic1 from '../../images/academic_new.png'
import Pic2 from '../../images/daddy.jpg'
import Pic3 from '../../images/oldSkull.jpg'



const Sidebar = () => {
    const [index, setIndex] = useState(0);
    const imgs = [Pic1, Pic2, Pic3]
    

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
                <h5 className="blue-text">Service of Songs</h5>
                <p>Service of songs will be held at All Saints Church Bletchley, Milton Keynes Buckinghamshire, MK3 3AN, on the 16th of November at 1pm.</p>
                <h5 className="blue-text">Wake Keeping Service</h5>
                <p>There will be a Wake Keeping service on the 21th on November, 2019 at his residence.</p>
                <h5 className="blue-text">Burial Ceremony</h5>
                <p>Burial ceremont will be on 29th November, 2019, at his hometown.</p>
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
