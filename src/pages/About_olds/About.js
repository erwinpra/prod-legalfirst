import React, { Component } from 'react'
import './About.scss'
import Navigation from '../../component/Navigation/Navigation'
import Footer from '../../component/Footer/Footer'
import groot from '../../assets/image/groot.jpg'

export default class About extends Component {
    render() {
        return (
			<>
            
                <Navigation />
                <div className="row" >
                    <div className="col-12">
                        <section className="bg-about mg-bottom1 mg-bottom-desk" style={{textAlign: 'left', paddingTop:'13rem'}}>
                        <div className="container" style={{paddingLeft:'1rem'}}>
                            <div className="row col-12">
                                <p style={{fontStyle:'normal',fontWeight:'bold', fontSize:'52px'}}>
                                    Tentang Logpad
                                </p>
                            </div>
                        </div>
                    </section>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12">
                        <section className="mg-bottom2" style={{textAlign: 'left'}}>
                        <div className="container" style={{paddingLeft:'1rem'}}>
                            <div className="row col-12">
                                <p style={{fontSize:'24px'}}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit a nulla est duis. Egestas vulputate quam varius fermentum pretium eget.
                                </p>
                            </div>
                        </div>
                    </section>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12">
                        <section className="mg-bottom" style={{textAlign: 'left'}}>
                        <div className="container" style={{paddingLeft:'1rem'}}>
                            <div className="row col-12">
                                <p style={{fontSize:'20px'}}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit a nulla est duis. Egestas vulputate quam varius fermentum pretium eget. Faucibus leo accumsan non orci leo amet diam arcu morbi. Vulputate facilisis mi suspendisse neque adipiscing velit. Sed aliquam volutpat posuere lectus gravida pulvinar ultrices.
                                </p>
                            </div>
                        </div>
                    </section>
                    </div>
                </div>
                
                <section>
                    <div className="row">
                        <div className="col-lg-10">
                            <div className="row" style={{backgroundColor:'#5270FC', marginTop: '100px', paddingLeft:'150px'}}>
                                <div className="col-8">
                                    <div className="container" style={{color:'white', paddingTop:'5rem', fontSize:'40px'}}>
                                        Kami menjawab segala macam kebutuhan website bisnis anda.
                                    </div>
                                </div>
                                <div className="col-md-9">
                                    <div className="container" style={{color:'white', fontSize:'22px', marginTop:'20px', paddingBottom:'3rem',}}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit a nulla est duis. Egestas vulputate quam varius fermentum pretium eget. Faucibus leo accumsan non orci leo amet diam arcu morbi. Vulputate facilisis mi suspendisse neque adipiscing velit. Sed aliquam volutpat posuere lectus gravida pulvinar ultrices.
                                    </div>
                                </div>
                                <div className="col-8">
                                    <div className="container" style={{color:'white', fontSize:'22px', paddingBottom:'5rem',}}>
                                       <p>
                                           <b>Erwin Pranata</b>, CEO Google
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 ac"  style={{marginTop: '160px', marginLeft:'-15rem'}}>
                            <img src={groot} style={{height:'400px'}} />
                        </div>
                    </div>
                </section>
			</>
        )
    }
}