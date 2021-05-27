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
import './BlogGrid.scss'
import iconsearch from '../../../assets/icon/icon-search.svg';
import blogssvg from '../../../assets/image/blog.png';
import axios from 'axios'

const BlogGrid = () => {
    const [state, setState] = React.useState({
        data: [],
        pagination: [],
        next: 0,
        previous: 0,
        first: 0,
        last: 0,
        skip: 0,
        loading: false,
        search : ""

    })
    const handleSearch = async(take = 12, skip = 0) => {
        if(state.search.length > 0){
            setState((prevState) => ({ ...prevState, loading: true }))
            await axios.get("/get/article?take=" + take + "&skip=" + skip+"&search="+state.search)
                .then((res) => {
                    setState((prevState) =>
                    ({
                        ...prevState,
                        data: res.data.data.article.data,
                        pagination: res.data.data.article.pagination,
                        next: res.data.data.article.next,
                        previous: res.data.data.article.previous,
                        first: res.data.data.article.first,
                        last: res.data.data.article.last,
                        loading: false
                    }))
                })
                .catch((err) => {
                    console.log(err)
                })
        }else{
            getData()
        }
        
    }
    const getData = async (take = 12, skip = 0) => {
        setState((prevState) => ({ ...prevState, loading: true }))
        await axios.get("/get/article?take=" + take + "&skip=" + skip + "")
            .then((res) => {
                setState((prevState) =>
                ({
                    ...prevState,
                    data: res.data.data.article.data,
                    pagination: res.data.data.article.pagination,
                    next: res.data.data.article.next,
                    previous: res.data.data.article.previous,
                    first: res.data.data.article.first,
                    last: res.data.data.article.last,
                    loading: false
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

        <div className="blog-grid">
            <section className="masthead">
                <div className="container h-100">
                    <div className="row">
                        <div className="container title-bg-banner">
                            <label className="container">Artikel</label>
                        </div>
                    </div>
                    <div className="row blog-grid-panel">
                        <div className="col-md-12 form-inline">
                            <div className="col-md-3 search-box">
                                <InputGroup className="mb-3">
                                    
                                    <FormControl
                                        placeholder="Search"
                                        aria-label="Search"
                                        aria-describedby="Search"
                                        onChange={(event) => setState((prevState) => ({...prevState,search : event.target.value})) } 
                                    />
                                    <InputGroup.Append onClick={() => handleSearch()} style={{cursor : "pointer"}}>
                                        <InputGroup.Text id="basic-addon2" ><img src={iconsearch} /></InputGroup.Text>
                                    </InputGroup.Append>
                                </InputGroup>
                            </div>
                            {/* <div className="col-md-3">
                                <Dropdown>
                                    <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                        Category
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">All Post</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">All Post</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">All Post</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div> */}

                        </div>

                    </div>
                    <div className="row data-grid">
                        {(() => {
                            let content = []
                            state.data.map((item) => {
                                content.push(
                                    <div className="data-grid-card">
                                        <Card style={{ width: '21.5rem' }}>
                                            <Card.Img style={{height:220}} variant="top" src={localStorage.getItem("host")+item.image} />
                                            <Card.Body>
                                                <div className="field-post-content">
                                                    <label className="time-post-content">{item.post_date}</label>
                                                    <label className="category-post-content">Marketing</label>
                                                </div>
                                                <Card.Title>{item.intro}</Card.Title>
                                                <Card.Text>
                                                    {item.wording}
                                            </Card.Text>
                                                <Link to={`/artikel/${item.kategori}/${item.slug}`}><Button variant="primary">Baca selengkapnya</Button></Link>
                                            </Card.Body>    
                                        </Card>
                                    </div>
                                )
                            })
                            return content;
                        })()
                        }

                    </div>
                    
                    <div className="row pagination col-md-12">
                        {state.loading == true ? ("Loading...") : (
                            <Pagination>
                                {(() => {
                                    const paginationData = []


                                    for (let i = 1; i <= state.pagination.length; i++) {
                                        let skips = i - 1
                                        skips = skips * 12
                                        // setState((prevState) => ({...prevState,skip:skips}))
                                        if(state.search.length > 0){
                                            paginationData.push(
                                                <Pagination.Item onClick={() => handleSearch(12, skips)}>{i}</Pagination.Item>
                                            )
                                        }else{
                                            paginationData.push(
                                                <Pagination.Item onClick={() => getData(12, skips)}>{i}</Pagination.Item>
                                            )
                                        }
                                        
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


export default BlogGrid