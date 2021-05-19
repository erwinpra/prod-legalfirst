import React, { Component } from 'react'
import './Contact.scss'
import iconwhatsapp from '../../assets/icon/icon-white-whatsapp.svg'
import iconmail from '../../assets/icon/icon-mail-white.svg'
import axios from 'axios'

export default class Contact extends Component {
	constructor(props){
		super(props)
		this.state = {
			name: '',
			email: '',
			phone: '',
			pesan: ''
		}
		this.onSubmit = this.onSubmit.bind(this)
	}
	async onSubmit(event){
		event.preventDefault();
		const data = {
			name: this.state.name,
			email: this.state.email,
			phone: this.state.phone,
			pesan: this.state.pesan,
		}
		await axios({
            method: 'POST',
            url: 'post/contact',
            config: {
                headers: {'Access-Control-Allow-Origin': '*'}
            },
            data: data,
            withCredentials: false
        })
		.then((res) => {
			if(res.data.status_code == 200){
				alert(res.data.status_msg)
			}
			else{
				alert(res.data.status_msg)
			}
		})
		.catch((err) => {
			console.log(err)
		})
	}
	
    render() {
        return (
			<>
				<section className="bg-contact mg-header">
					<div className="row">
						<div className="col-lg-2"></div>
						<div className="col-lg-4 col-sm-12">
							<div className="container" style={{}}>
								<div className="row col-12">
									<p className="title-contact" style={{fontStyle:'normal',fontWeight:'bold', fontSize:'52px'}}>
										Hai, apa yang ingin Anda konsultasikan?
									</p>
								</div>
								<div className="row col-12 intro-contact-mg">
									<p className="intro-contact" style={{fontSize:'24px'}}>
									Kami akan membalas pesan anda dalam 1-3 hari kerja lewat email.
									</p>
								</div>
							</div>
						</div>
						<div className="col-lg-6 col-sm-12" style={{marginBottom: '10rem'}}>
							<div className="container field-contact">
								<form method="POST" >
									<div className="form__group">
										<input onChange={event => this.setState({name: event.target.value})} value={this.state.name} type="input" className="form__field" placeholder="Nama" name="name" id='nama' required />
										<label for="nama" className="form__label">Nama</label>
									</div>
									<div className="form__group">
										<input onChange={event => this.setState({email: event.target.value})} value={this.state.email} type="input" className="form__field" placeholder="Alamat Email" name="email" id='email' required />
										<label for="email" className="form__label">Alamat Email</label>
									</div>
									<div className="form__group">
										<input onChange={event => this.setState({phone: event.target.value})} value={this.state.phone} type="input" className="form__field" placeholder="No. phone" name="phone" id='phone' required />
										<label for="phone" className="form__label">No. phone</label>
									</div>
									<div className="form__group">
										<textarea onChange={event => this.setState({pesan: event.target.value})} value={this.state.pesan} className="form__field" placeholder="Pesan" name="pesan" id='pesan' required ></textarea>
										<label for="pesan" className="form__label">Pesan</label>
									</div>
									<div className="form__group" style={{}}>
										<button className="btn-blue-kontak" onClick={this.onSubmit}>Kirim email</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</section>

				<section className="row" style={{marginTop: '9rem'}}>
                    <div className="col-md-6 col-xs-12 kontak-kami">
                        <div className="row container alamat col-md-12">
                            Kontak Kami.
						</div>
                        <br /> 
                        <div className="row container alamat-description col-md-8">
							<h3 className="font-white alamat-title">
								<strong>Alamat</strong>
							</h3>
							<p className="alamat-desc">
								Permata Regency D/37 <br/>
								Jalan Hj. Kelik RT 001 RW 006 Srengseng <br/>
								Kec. Kembangan, Kota Jakarta Barat, Daerah Khusus Ibukota <br/>
								Jakarta 11630 <br/>
							</p>
							<div className="col-md-6 contact-email-and-phone">
								<div className="row font-white">
									<h3>Kontak</h3>
								</div>
								<div className="row">
									<img src={iconwhatsapp}/> <a className="" target="_blank" href="https://api.whatsapp.com/send/?phone=6285215010357">0852-1501-0357</a>
								</div>
								<div className="row">
									<img src={iconmail}/> admin@legalfirst.id
								</div>
							</div>
						</div>
                        <br />
                        <br />
						{/* <div className="row container texted col-md-4 col-xs-1 col-sm-1">
							<h3 className="font-white">
								<strong>Kontak</strong>
							</h3>
							<p className="kontak-desc mg-top">
								<img src={iconwhatsapp}/> 0811-515-111 <br/>
								<img src={iconmail}/> info@logpad.id
							</p>
						</div> */}
                    </div>
                    <div className="col-md-6 col-sm-12 kontak-kami">
						<iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=Infiniti%20Office%20%7C%20Permata%20Regency%20&t=&z=17&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" width="100%" height="100%" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                    </div>
                </section>
				<div className="rectangle">
					<svg width="283" height="222" viewBox="0 0 283 222" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M283 222L0 0V222L283 222Z" fill="#A17CFF"/>
					</svg>
				</div>
			</>
        )
    }
}