import React, { Component } from 'react'
import './About.scss'
import profile from '../../assets/image/mypic.png'
import axios from 'axios'
const About = () =>{
        const [state,setState] = React.useState({
            background      : "files/Background%20C%20-%20Big.png",
            by_sec1         : "Rodhiyanto, SEO Google",
            desc_sec1       : "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
            description     : "<p>tes</p>",
            image           : "files/Background%202.png",
            intro_sec1      : "Kami Menjawab Segala macam",
        })
        const getData = async() => {
            await axios.get('/get/about')
                .then((res) => {
                    setState((prevState)=>({...prevState,
                        background      :   res.data.data.background ,
                        by_sec1         :   res.data.data.by_sec1    ,
                        desc_sec1       :   res.data.data.desc_sec1  ,
                        description     :   res.data.data.description,
                        image           :   res.data.data.image      ,
                        intro_sec1      :   res.data.data.intro_sec1 ,
                    }))
                })
                .catch((err) => {

                })
        }
        React.useEffect(() => {
            getData()
        })
        return (
            <div className="about">
                <section className="masthead">
                    <div className="container h-100">
                        <div className="row">
                            <div className="container title-bg-banner">
                                <label>Tentang Kami</label>
                            </div>
                            <div className="container">
                                <div className="row container text-panel col-md-8">
                                    <div dangerouslySetInnerHTML={ {__html: state.description} } />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="row">
                    <div className="col-md-9 col-xs-12 description">
                        <div className="row container subject-description col-md-12">
                            {state.intro_sec1}
                        </div>
                        <br />
                        <div className="row container text-description col-md-8">
                            {state.desc_sec1}
                        </div>
                        <br />
                        <div className="row container sign-profile">
                            {state.by_sec1}
                            </div>
                        <div className="content-profile-mobile">
                            <img className="profile-mobile" src={localStorage.getItem("host")+state.image} />
                        </div>
                    </div>
                    <div className="col-md-3 ">
                        <img className="profile" src={localStorage.getItem("host")+state.image} />
                    </div>
                </section>
            </div>

        )
    
}

export default About;