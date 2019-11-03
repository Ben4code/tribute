import React from 'react'
import Sidebar from './layout/sidebar'
import Layout from "./layout/layout"
import AngelPic from '../images/angel-art-black-and-white-208001 (1).jpg'
import OldPic from '../images/oldSkull.jpg'


const About = () => {
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
                position: 'relative'
            }}>
                <h2 className=" about-title">About Fidelis Obioha</h2>
            </div>

            <div className="container">
                <div className="tributeLayout">
                    <div className="tributeList">
                        <h3 className="about_sub">Biography</h3>
                        <div className="row">
                            <p className="top_p">Fidelis was born and raised in Imo state. He attended Bishop Shanahan College Orlu before travelling to the United Kingdom where he obtained his doctorate. </p>
                            <div className="col m7 about_p">
                                <p> He returned to Nigeria and began working as a lecturer at various universities including the University of Nigeria untill he became a United Nations volunteer to different African countries like South Africa and Zambia. </p>
                                <p>He is survived by his loving wife, four children and five grand children.</p>
                                <p>He is also published author and professor in the field of Radiation Medicine.</p>
                            </div>
                            <div className="col m5">
                                <img src={OldPic} alt="oldpic" className="responsive-img" />
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

export default About
