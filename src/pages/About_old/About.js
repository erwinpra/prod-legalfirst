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
                <header className="bg-about">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
								<h1 className="title-about" ><strong>Tentang Kami</strong></h1>
                            </div>
						</div>
						<div className="row">
							<div className="col-md-4">
								<p className="desc-about-1" >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
							</div>
						</div>
						<div className="row">
							<div className="col-md-4">
								<p className="desc-about-2" >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
							</div>
                        </div>
                    </div>
                </header>

				<section className="imageblock">
					<div className="row">
						<div className="bg-green col-md-10">
							<div className="row col-md-6">
								<div className="header-layanan">
									<h1 className="font-purple pl-18">
										<strong>Kami ada untuk menjawab segala macam kebutuhan website untuk bisnis anda.</strong>
									</h1>
								</div>
							</div>
							<div className="row col-md-8">
								<div className="content-layanan">
									<p className="font-purple pl-18">
										Kami ada untuk menjawab segala macam kebutuhan website untuk bisnis anda. Kami ada untuk menjawab segala macam kebutuhan website untuk bisnis anda.
									</p>
								</div>
							</div>
						</div>
						<div className="col-md-2">
								<img src={groot} className="image-banner" />
						</div>
					</div>
				</section>
				<Footer/>
			</>
        )
    }
}