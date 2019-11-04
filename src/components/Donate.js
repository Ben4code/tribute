import React from 'react'
import Sidebar from './layout/sidebar'
import Layout from "./layout/layout"
import AngelPic from '../images/angel-art-artwork-460390.jpg'
import Daddy from '../images/daddy.jpg'
import DonateCard from './cards/donateCard'



const Donate = () => {
    return (
        <Layout>
            <div className="" style={{
                backgroundImage: `linear-gradient(
                    to bottom,
                    rgba(0,0,0, .4) 0%,
                    rgba(0,0,0, .8) 70%,
                    rgba(0,0,0, 1) 100%
                ), url('./${AngelPic}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat',
                height: `40vh`,
                color: '#fff',
                position: 'relative',  
                filter: 'grayscale(100%)'
            }}>
                <h2 className=" about-title">Donate to family</h2>
            </div>

            <div className="container">
                <div className="tributeLayout">
                    <div className="tributeList">
                        <h3 style={{ opacity: '0' }}>Fidelis Obioha</h3>
                        <div className="center-align">
                            <p>We are sad to announce that daddy passed away peacefully in October 2019.</p>
                            <p>A service celebrating his life will be held at Enugu Nigeria at his residence on Friday 21st November 2019 at 15:00.</p>
                            <p>Kindly join us afterwards for refreshments as we share some of his memories.</p>

                            <p>Donations in his memory may be sent using the checkout service below.</p>

                        </div>
                        <div className="row">
                            <div className="col m12">
                                <div className="card horizontal grey lighten-3">
                                    <div className="card-image">
                                        <img src={Daddy} alt="daddy1" />
                                    </div>
                                    <DonateCard />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tributeSidebar">
                        <Sidebar />
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Donate
