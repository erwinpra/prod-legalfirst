import React, { Component } from 'react'
import './Footer.scss'
import logpad from '../../assets/logo/logpad-white.svg'
import iconfacebook from '../../assets/icon/icon-white-facebook.svg'
import iconinstagram from '../../assets/icon/icon-white-instagram.svg'
import iconwhatsapp from '../../assets/icon/icon-white-whatsapp.svg'
import icontwitter from '../../assets/icon/icon-white-twitter.svg'
import iconmail from '../../assets/icon/icon-mail-white.svg'
export default class Footer extends Component {
    render() {
        return (
            <footer className="container-fluid bg-grey py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-md-6 ">
                                <div className="logo-part">
                                    <img src={logpad} className="w-50 logo-footer" />
                                </div>
                            </div>
                            <div className="col-md-6 px-4">
                                <h6> Tentang</h6>
                                <p>Kami ada untuk menjawab segala macam kebutuhan sisten untuk bisnis anda</p>
                                {/* <a href="#" className="btn-footer"> More Info </a><br />
                                <a href="#" className="btn-footer"> Contact Us</a> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-md-6 px-4">
                                <h6> Folow Kami</h6>
                                <div className="row ">
                                    <div className="col-md-6">
                                        <ul>
                                            <li><img src={iconfacebook}/> facebook </li>
                                            <li><img src={iconinstagram}/> instagram </li>
                                            <li><img src={icontwitter}/> twitter </li>
                                            <li><img src={iconmail}/> mail </li>
                                            <li><img src={iconwhatsapp}/> whatsapp </li>
                                        </ul>
                                    </div>
                                   
                                </div>
                            </div>
                            <div className="col-md-6 ">
                                <h6> © 2021 PT Logika Prima Data</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        )
    }
}
