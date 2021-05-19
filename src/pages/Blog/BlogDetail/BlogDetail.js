import React, { Component, useState } from 'react'
import { useParams } from 'react-router';
import { Jumbotron, Button, InputGroup, FormControl, Card } from 'react-bootstrap'
import './BlogDetail.scss'
import imgblogdetail from '../../../assets/image/blog.png'
import iconsearch from '../../../assets/icon/icon-search.svg';
import iconfacebook from '../../../assets/icon/icon-white-facebook.svg';
import icontwitter from '../../../assets/icon/icon-white-twitter.svg';
import iconinstagram from '../../../assets/icon/icon-white-instagram.svg';
import iconwhatsapp from '../../../assets/icon/icon-white-whatsapp.svg';
import iconlink from '../../../assets/icon/icon-link.svg';
import iconexit from '../../../assets/icon/icon-exit.svg';
import iconshare from '../../../assets/icon/share.svg';
import logogoogle from '../../../assets/image/google.svg'
import Slider from "react-slick";
import { Link } from 'react-router-dom'
import blogssvg from '../../../assets/image/blog.png';
import axios from 'axios';
const BlogDetail = (props) => {
    const [stateBlog,setStateBlog] = React.useState({
        blogDetail : [],
        toparticle : [],
        recentarticle : []
    })
    const [actionShare, setactionShare] = useState(false)
    const { category,id } = useParams()
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    
    const hitClickAPI = async() => {
        await axios.get("/countArticle/"+id)
    }
    const getData = async() => {
        await axios.get("get/detail/article/"+id)
        .then((res) => {
            // console.log(res.data.data.articles.data[0].id);
            setStateBlog((prevState) => ({...prevState,blogDetail:res.data.data.articles.data[0]}) )
            
        })
        .catch((err) => {
            console.log(err)
        })
    }
    const getTopArticle = async ()=> {
        await axios.get("/get/article?by=popular&slug=lorem-ipsum")
             .then((res) => {
                 setStateBlog((prevState) => ({...prevState,toparticle : res.data.data.kategori.data}))
             })
             .catch((err) => {
                 console.log(err)
             })
    }
    const getRecentArticle = async ()=> {
        await axios.get("/get/article?take=5&skip=0&slug=lorem-ipsum")
             .then((res) => {
                
                 setStateBlog((prevState) => ({...prevState,recentarticle : res.data.data.article.data}))
             })
             .catch((err) => {
                 console.log(err)
             })
    }
    React.useEffect(() => {
        hitClickAPI()
        getData()
        getTopArticle()
        getRecentArticle()
        
    },[])
    const shareAction = () => {
        if (actionShare == false) {
            setactionShare(true);
            //  alert(true)
        } else {
            setactionShare(false);
            // alert(false)
        }
    }
    return (
        
        <div className="blog-detail">
            <section className="masthead">
                <div className="container h-100 body-content">
                    <div className=" col-md-12 col-xs-4">
                        <div className="content form-inline">
                            <div className="col-md-12">
                                <div className="">
                                    <div className="col-md-12 form-inline ">

                                        <InputGroup className="mb-3 mt-2 search-box">
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
                                    <div className="col-md-12 blog-subject">
                                        {stateBlog.blogDetail.intro }<hr />
                                    </div>
                                    <div className="col-md-12 img-header">
                                        <img src={localStorage.getItem('host')+stateBlog.blogDetail.image}/>
                                    </div>
                                    <div className="col-md-12 form-inline category-post">
                                        <div className="blog-category">{category}</div>
                                        <div className="post-time-category">{stateBlog.blogDetail.post_date}</div>

                                    </div>
                                    <hr />
                                    <div className="col-md-12 post-content">
                                       {stateBlog.blogDetail.wording}
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container  share-content form-inline">
                    <div className="container">
                        {
                            actionShare == false ?
                                (<div className="icon-share-open" onClick={() => shareAction()}>
                                    <img src={iconshare} />
                                </div>)
                                :
                                (
                                    <div>
                                        <div className="icon-share">
                                            <img src={iconfacebook} />
                                        </div>
                                        <div className="icon-share">
                                            <img src={icontwitter} />
                                        </div>
                                        <div className="icon-share">
                                            <img src={iconinstagram} />
                                        </div>
                                        <div className="icon-share">
                                            <img src={iconwhatsapp} />
                                        </div>
                                        <div className="icon-share">
                                            <img src={iconlink} />
                                        </div>
                                        <div className="icon-share" onClick={() => shareAction()}>
                                            <img src={iconexit} />
                                        </div>
                                    </div>
                                )
                        }



                    </div>

                </div>
            </section>
            <section className="top-5">
                <div className="col-md-12 box-blog">
                    <div className="container">
                        <div className="title-blog-content">
                            Top 5 Blogs
                        </div>
                        <hr />
                        <Slider {...settings}>
                            {(() => {
                                const content = [];
                                stateBlog.toparticle.map((item) => {
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
                        </Slider>
                    </div>
                </div>
            </section>
            <section className="top-recent">
                <div className="col-md-12 box-blog">
                    <div className="container">
                        <div className="title-blog-content">
                            Recent Blogs
                        </div>
                        <hr />
                        <Slider {...settings}>
                        {(() => {
                                const content = [];
                                stateBlog.recentarticle.map((item) => {
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
                        </Slider>
                    </div>
                </div>
            </section>
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
    )
}
export default BlogDetail;
