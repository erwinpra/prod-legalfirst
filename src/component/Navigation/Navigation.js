import React, { Component } from 'react'
import {Navbar , Nav, NavDropdown, Form, Button, Container} from 'react-bootstrap'
import './Navigation.scss'

import logpad from '../../assets/logo/logpad.svg'
import legal from '../../assets/logo/2-legalfirst.png'
import {NavLink} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
class Navigation extends Component {
  
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  handleNavLink = () => {
    document.querySelector(".navbar-collapse").className = "navbar-collapse collapse";
  }
  handleScroll = () => {
    if (window.scrollY > 20) {
      document.querySelector(".navbar").className = "navbar navbar-expand-sm navbar-light fixed-top scroll";
    } else {
      document.querySelector(".navbar").className = "navbar navbar-expand-sm fixed-top navbar-light";
    }
  };
    render() {
      const activeStyles = {
        fontWeight: "bold",
        color: "#5e35b1",
      }
      return(
        <>
          <Navbar className="navbar navbar-expand-sm fixed-top navbar-light" expand="lg">
            <Navbar.Brand href="#home"><img className="nav-img" src={legal} alt="Logika prima data"/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Container fluid className="justify-content-md-center">
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto navbar-item" >
                <NavLink className="ml-4 mr-4 nav-link" activeStyle={activeStyles} to="/beranda" onClick={()=>this.handleNavLink()} >Beranda</NavLink >
                <NavLink className="ml-4 mr-4 nav-link" activeStyle={activeStyles} to="/layanan" onClick={()=>this.handleNavLink()} >Layanan</NavLink >
                <NavLink className="ml-4 mr-4 nav-link" activeStyle={activeStyles} to="/portfolio" onClick={()=>this.handleNavLink()} >Portfolio</NavLink >
                <NavLink className="ml-4 mr-4 nav-link" activeStyle={activeStyles} to="/tentang" onClick={()=>this.handleNavLink()} >Tentang</NavLink >
                <NavLink className="ml-4 mr-4 nav-link" activeStyle={activeStyles} to="/kontak" onClick={()=>this.handleNavLink()} >Kontak</NavLink >
                <NavLink className="ml-4 mr-4 nav-link" activeStyle={activeStyles} to="/artikel" onClick={()=>this.handleNavLink()} >Artikel</NavLink >
                <NavLink className="ml-4 mr-4 nav-link" activeStyle={activeStyles} to="/kbli" onClick={()=>this.handleNavLink()} >KBLI</NavLink >
              </Nav>
              {/* <Form inline>
               <button className="btn-nav"><FontAwesomeIcon size="xs" icon={faPhoneAlt} /> &nbsp; Hubungi Kami</button>
              </Form> */}
            </Navbar.Collapse>
            </Container>
          </Navbar>
        </>  
     )
  }
}
export default Navigation;
