import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {
    InputGroup,
    FormControl,
    Dropdown,
    Card,
    Button,
    Pagination
} from 'react-bootstrap'
import './Portfolio.scss'
import iconsearch from '../../assets/icon/icon-search.svg';
import portfoliossvg from '../../assets/image/blog.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'

const Portfolio = () => {
    const [state, setState] = React.useState({
        data: [],
        pagination: [],
        next: 0,
        previous: 0,
        first: 0,
        last: 0,
        skip : 0,
        loading : false

    })
    const getData = async (take = 2, skip = 0) => {
       setState((prevState) => ({...prevState,loading : true}))
        await axios.get("/get/portofolio?take=" + take + "&skip=" + skip + "")
            .then((res) => {
                console.log(res.data.data.portofolio)
                setState((prevState) =>
                ({
                    ...prevState,
                    data: res.data.data.portofolio.data,
                    pagination: res.data.data.portofolio.pagination,
                    next: res.data.data.portofolio.next,
                    previous: res.data.data.portofolio.previous,
                    first: res.data.data.portofolio.first,
                    last: res.data.data.portofolio.last,
                    loading : false
                }))
            })
            .catch((err) => {
                console.log(err)
            })
    }
    React.useEffect(() => {
        getData()
    }, [])
    return (
        
        <div className="portfolio-grid">
            <section className="masthead">
                <div className="container h-100">
                    <div className="row">
                        <div className="container title-bg-banner">
                            <label className="container">Portfolio Kami</label>
                        </div>
                        <div className="container">
                            <div className="text-panel col-md-6">
                                Kami bekerja secara kolaboratif dengan setiap klien untuk memberikan solusi terstruktur dan efektif.
                            </div>
                        </div>
                    </div>
                    {/* <div className="row portfolio-grid-panel">
                        <div className="col-md-12 form-inline">
                            <div className="col-md-3 search-box">
                                <InputGroup className="mb-3">
                                    <FormControl
                                        placeholder="Search"
                                        aria-label="Search"
                                        aria-describedby="Search"
                                    />
                                    <InputGroup.Append>
                                        <InputGroup.Text id="basic-addon2"><img src={iconsearch} /></InputGroup.Text>
                                    </InputGroup.Append>
                                </InputGroup>
                            </div>
                            <div className="col-md-3">
                                <Dropdown>
                                    <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                        Category
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">All Project</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">All Project</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">All Project</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>

                        </div>

                    </div> */}
                    <div className="row data-grid">
                        {(() => {
                            let portfolioData = []
                            state.data.map((item) => {
                                portfolioData.push(
                                    <div className="data-grid-card">
                                        <Card style={{ width: '21.5rem' }}>
                                            <Card.Img variant="top" style={{height:220}} src={localStorage.getItem('host')+item.image_base64} />
                                            <Card.Body>
                                                <div className="breadcrumb-portfolio">
                                                    <FontAwesomeIcon size="xs" icon={faCircle} /> {item.kategori_title} &nbsp;
                                                </div>
                                                <Card.Title>{item.title}</Card.Title>
                                                <div className="link-portfolio">
                                                    <a href={!item.link ? "#" : item.link}>Kunjungi Website <FontAwesomeIcon icon={faArrowRight} /> </a>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                )
                            })
                            return portfolioData
                        })()}
                        

                        </div>
                    <div className="row pagination col-md-12">
                    {state.loading == true ? ("Loading...") : (
                        <Pagination>
                        {(() => {
                            const paginationData = []
                            
                               
                                for(let i = 1 ; i <= state.pagination.length ; i++){
                                    let skips = i - 1
                                    skips = skips * 2
                                    // setState((prevState) => ({...prevState,skip:skips}))
                                    paginationData.push(
                                        <Pagination.Item onClick={()=> getData( 2,skips)}>{i}</Pagination.Item>
                                    )
                                }
                            
                            return paginationData   
                        })
                        ()}
                        </Pagination>
                    )
                    }
                    
                    </div>
                    {/* <div className="container">
                        <div className="container custom-paket-desktop">
                            <div className="title-custom-paket">
                                Buat website anda sekarang.
                                 </div>
                            <div className="subject-custom-paket">
                                Puaskan customer anda dengan pelayanan website terbaik kami.
                                 </div>
                            <div className="btn-custom-paket"><button className="btn-pink">Konsultasi Sekarang</button></div>
                        </div>
                        <Card className="container custom-paket-mobile">
                            <div className="title-custom-paket">
                                Buat website anda sekarang.
                                </div>
                            <div className="subject-custom-paket">
                                Puaskan customer anda dengan pelayanan website terbaik kami.
                                 </div>
                            <button className="btn-pink">Konsultasi Sekarang</button>
                        </Card>
                    </div> */}
                </div>
            </section>
        </div>

    )
}


export default Portfolio;