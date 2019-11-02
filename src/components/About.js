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
                        <h3>Biography</h3>
                        <div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam libero quas perspiciatis nam repudiandae molestias nihil atque optio, repellendus aut ab suscipit odit dolorem eaque modi esse saepe eligendi dolore magnam porro. Quos sint sequi assumenda dolorum rerum. Iste natus molestiae voluptates quibusdam qui! Itaque quo architecto obcaecati placeat? Nisi.</p>
                        </div>

                        <div className="row">
                            <div className="col m7">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam libero quas perspiciatis nam repudiandae molestias nihil atque optio, repellendus aut ab suscipit odit dolorem eaque modi esse saepe eligendi dolore magnam porro. Quos sint sequi assumenda dolorum rerum. Iste natus molestiae voluptates quibusdam qui! Itaque quo architecto obcaecati placeat? Nisi.</p>

                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam libero quas perspiciatis nam repudiandae molestias nihil atque optio, repellendus aut ab suscipit odit dolorem eaque modi esse saepe eligendi dolore magnam porro. Quos sint sequi assumenda dolorum rerum. Iste natus molestiae voluptates quibusdam qui! Itaque quo architecto obcaecati placeat? Nisi.</p>
                            </div>
                            <div className="col m5">
                                <img src={OldPic} alt="oldpic" className="responsive-img" />
                            </div>
                        </div>


                        <div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam libero quas perspiciatis nam repudiandae molestias nihil atque optio, repellendus aut ab suscipit odit dolorem eaque modi esse saepe eligendi dolore magnam porro. Quos sint sequi assumenda dolorum rerum. Iste natus molestiae voluptates quibusdam qui! Itaque quo architecto obcaecati placeat? Nisi.</p>
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
