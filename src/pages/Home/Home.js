import React, { Component } from "react";
import "./Home.scss";
import ImageBanner from "../../assets/image/logpad-banner-icon.svg";
import ImageLayanan from "../../assets/image/logpad-layanan-icon.svg";
import iconfacebook from "../../assets/icon/icon-white-facebook.svg";
import iconinstagram from "../../assets/icon/icon-white-instagram.svg";
import iconwhatsapp from "../../assets/icon/icon-white-whatsapp.svg";
import icontwitter from "../../assets/icon/icon-white-twitter.svg";
import iconcode from "../../assets/icon/icon-code.svg";
import iconmobile from "../../assets/icon/icon-mobile.svg";
import iconenterprice from "../../assets/icon/icon-enterprise.svg";
import iconquestionmarkfield from "../../assets/icon/icon-question-mark-filled.svg";
import imgportfolio1 from "../../assets/image/portfolio-1.svg";
import logogoogle from "../../assets/image/google.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Card } from "react-bootstrap";
import Slider from "react-slick";
import { Bounce, JackInTheBox } from "react-awesome-reveal";
import "animate.css";
import axios from "axios";
import Loading from "../../component/Loading/Loading";
import { Link } from 'react-router-dom'


const Home = () => {
  const [state, setState] = React.useState({
    banner: [],
    beranda: [],
    service: [],
    // portofolio: [],
    ourclient: [],
    urlsosmed: [],
    styleMasthead: "",
  });
  const styles = {
    sMasthead: {
      // backgroundImage: `url(data:image/jpeg;base64,${state.banner[0].image_base64})`
    },
  };
  const btnPurple = React.useRef([]);

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
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const AnimatedInject = (e, type, element, effect) => {
    btnPurple.current = [];
    btnPurple.current.push(e);
    if (type == "enter") {
      btnPurple.current[0].target.className =
        element + " animate__animated " + effect;
    } else {
      btnPurple.current[0].target.className = element;
    }
  };
  const getHomeData = () => {
    axios
      .get("/get/beranda")
      .then((res) => {
        setState((prevState) => ({
          ...prevState,
          banner: res.data.data.banner.data,
          urlsosmed: res.data.data.urlsosmed.data,
          beranda: res.data.data.beranda.data,
          service: res.data.data.service.data,
          // portofolio: res.data.data.portofolio.data,
          ourclient: res.data.data.ourclient.data,
        }));
      })
      .catch((err) => { });
  };
  React.useEffect(() => {
    getHomeData();
  }, []);
  return (

    <div className="home">

      {state.banner.length == 1 ||
        state.beranda.length == 1 ||
        state.service.length > 0 ||
        state.urlsosmed.length > 0 ||
        // state.portofolio.length > 0 ||
        state.ourclient.length > 0 ? (
        <>
          {/* BANNER */}
          {(() => {
            const dataX = [];
            state.banner.map((item) => {
              dataX.push(
                <>
                  <section
                    className="masthead"
                    style={{
                      backgroundImage: `url(${localStorage.getItem('host')+item.image_base64})`
                      // backgroundImage: "url(localStorage.getItem('host')+item.image_base64)",
                    }}
                  >
                    <div className="container h-100">
                      <div className="row"></div>
                      <div className="row bg-banner">
                        <img
                          src={localStorage.getItem('host')+item.image_base_64}
                          className="image-banner img-fluid animate__animated animate__jackInTheBox"
                        />
                        <div className="col-md-10">
                          <label className="title-bg-banner animate__animated  animate__zoomInDown">
                            {item.wording}
                          </label>
                        </div>
                      </div>
                      <div className="row animate__animated  animate__zoomInDown">
                        <div className="col-md-8">
                          <label className="ls-banner">{item.intro}</label>
                        </div>
                      </div>
                      <div className="row col-md-12 group-btn animate__animated  animate__zoomInDown">
                        <Bounce triggerOnce>
                          <a
                            href={item.urlbutton}
                            target="_blank"
                            className="btn-pink mr-3"
                            onMouseEnter={(e) =>
                              AnimatedInject(
                                e,
                                "enter",
                                "btn-pink mr-3",
                                "animate__tada"
                              )
                            }
                            onMouseLeave={(e) =>
                              AnimatedInject(
                                e,
                                "leave",
                                "btn-pink mr-3",
                                "animate__tada"
                              )
                            }
                          >
                            {item.titlebutton}
                          </a>
                          <a
                            href={item.urlbutton2}
                            target="_blank"
                            className="btn-white"
                            onMouseEnter={(e) =>
                              AnimatedInject(
                                e,
                                "enter",
                                "btn-white",
                                "animate__tada"
                              )
                            }
                            onMouseLeave={(e) =>
                              AnimatedInject(
                                e,
                                "leave",
                                "btn-white",
                                "animate__tada"
                              )
                            }
                          >
                            {item.titlebutton2}
                          </a>
                        </Bounce>
                      </div>

                      <div className="row banner-sosmed">
                        <div className="form-inline">
                          {(() => {
                            let sosmedimg = [];
                            state.urlsosmed.map((item) => {
                              sosmedimg.push(<a href={item.urlimage} target="_blank"><img
                                src={localStorage.getItem('host')+item.image_base64}
                                className="mr-3 animate__animated  animate__zoomInDown"
                              /></a>
                              )
                            })
                            return sosmedimg
                          })()}

                          <div className="line-banner"></div>
                        </div>
                      </div>
                    </div>
                  </section>
                </>
              );
            });
            return dataX;
          })()}
          {/* Banner */}
          {/* Service */}
          {
            (() => {
              const elementBeranda = [];
              state.beranda.map(item => {
                elementBeranda.push(
                  <section className="container-logpad-layanan">
                    <div className="container">
                      <div className="form-inline">
                        <div className="container container-layanan ">
                          <JackInTheBox triggerOnce>
                            <img
                              src={localStorage.getItem('host')+item.image_base64}
                              className="float-left img-layanan-desktop"
                            />
                          </JackInTheBox>
                          <div className="row subject-layanan col-md-4 ">
                            {item.title}
                          </div>
                          <div className="row header-layanan col-md-6">
                            <h1>
                              <strong>{item.subtitle}.</strong>
                            </h1>
                          </div>
                          <div className="row img-container-layanan-mobile">
                            <img
                              src={localStorage.getItem('host')+item.image_base64}
                              className="img-layanan-mobile animate__delay-1s"
                            />
                          </div>
                          <div className="row content-layanan col-md-8">
                            {item.desc}
                          </div>
                          <div className="row col-md-8">
                            <Link className="btn-blue mobile col-md-2" to="/service">{item.titlebutton}</Link>
                          </div>
                          <div className="row">

                            <div className="container form-inline">
                              <div className="item-layanan col-md-4">
                                <div className="row icon-item-layanan col-md-1">
                                  <img className="icon-layanan" src={localStorage.getItem('host')+item.iconfasatu_base64} />
                                </div>
                                <div className="row title-item-layanan">
                                  {item.kategorisatu}
                                </div>
                                <div className="row content-item-layanan">
                                  {item.desc1}
                                </div>
                              </div>
                              <div className="item-layanan col-md-4">
                                <div className="row icon-item-layanan col-md-4">
                                  <img className="icon-layanan" src={localStorage.getItem('host')+item.iconfadua_base64} />
                                </div>
                                <div className="row title-item-layanan">
                                  {item.kategoridua}
                                </div>
                                <div className="row content-item-layanan">
                                  {item.desc2}
                                </div>
                              </div>
                              <div className="item-layanan col-md-4">
                                <div className="row icon-item-layanan col-md-4">
                                  <img className="icon-layanan" src={localStorage.getItem('host')+item.iconfatiga_base64} />
                                </div>
                                <div className="row title-item-layanan">
                                  {item.kategoritiga}
                                </div>
                                <div className="row content-item-layanan">
                                  {item.desc3}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="end-class"></div>
                  </section>

                )
              })
              return elementBeranda
            })()
          }
          {/* Service */}
          <section className="container container-paket">
            <FontAwesomeIcon icon="coffee" />
            <div className="header-paket col-md-12">
              Pilih paket untuk anda.
            </div>
            <div className="row">
              <div className="form-inline" style={{display: "contents"}}>
                {(() => {
                  const paket = [];
                  state.service.map((item) => {
                    paket.push(
                      <React.Fragment>
                        <div className="card-paket" 
                          // style={{ height: item.daftarpaket.length * 150 }}
                          style={{ height: "auto" }}
                        >
                          <div className=" basic-paket" >
                            {item.judul}
                          </div>
                          <div className="harga-paket"> {item.harga}</div>
                          {/* <div className="time-for-paket">per Bulan</div> */}
                          <div>

                            <button
                              className="btn-purple-paket"
                              ref={btnPurple.current[0]}
                              onMouseEnter={(e) =>
                                AnimatedInject(
                                  e,
                                  "enter",
                                  "btn-purple-paket",
                                  "animate__tada"
                                )
                              }
                              onMouseLeave={(e) =>
                                AnimatedInject(
                                  e,
                                  "leave",
                                  "btn-purple-paket",
                                  "animate__tada"
                                )
                              }
                            >
                              <a class="btn-paket" href={item.urlbutton}>{item.judulbutton1}</a>
                            </button>
                          </div>
                          <div className="container detail-paket" >
                            {(() => {
                              let detailpaket = [];
                              for (let i = 0; i < item.daftarpaket.length; i++) {
                                detailpaket.push(
                                  <div className="row">
                                    <div className="form-inline">
                                      <img src={iconquestionmarkfield} />
                                      <label>{item.daftarpaket[i]}</label>
                                    </div>
                                  </div>)
                              }
                              return detailpaket
                            }
                            )()}
                          </div>
                          <hr />
                          {/* <div className="see-paket">
                            <Link to="/layanan"> {item.judulbutton2}</Link>
                          </div> */}
                        </div>
                      </React.Fragment>
                    )
                  })
                  return paket;
                })()}
              </div>
            </div>
          </section>
          {/* SEKIP */}
          {/* <div className="container">
            <div className="container custom-paket-desktop">
              <div className="title-custom-paket">
                Pilih Paket Anda
              </div>
              <div className="subject-custom-paket">
                Langsung hubungi kami jika ingin paket layanan secara custom.
              </div>
              <div className="btn-custom-paket">
                <button
                  className="btn-pink"
                  onMouseEnter={(e) =>
                    AnimatedInject(e, "enter", "btn-pink", "animate__tada")
                  }
                  onMouseLeave={(e) =>
                    AnimatedInject(e, "leave", "btn-pink", "animate__tada")
                  }
                >
                  Konsultasi Sekarang
                </button>
              </div>
            </div>
            <Card className="container custom-paket-mobile">
              <div className="title-custom-paket">
                Anda juga bisa membuat website secara custom, loh!
              </div>
              <div className="subject-custom-paket">
                Langsung hubungi kami jika ingin paket layanan secara custom.
              </div>
              <button className="btn-pink">Konsultasi Sekarang</button>
            </Card>
          </div> */}
          {/* <section className="container home-portfolio">
            <div className="form-inline">
              <div className="title-porfolio">Portofolio kami.</div>
              <div className="col-md-6">
                Kami bekerja secara kolaboratif dengan setiap klien
              </div>
            </div>
            <div className="form-inline col-md-12 list-portfolio">
             {(() => {
               const portfolioData = []
               state.portofolio.map ((item) => {
                portfolioData.push (
                  <React.Fragment>
                    <Card className="contain-portfolio col-md-4">
                      <div className="img-portfolio">
                        <img variant="top" src={localStorage.getItem('host')+item.image_base64} />
                      </div>
                      <div className="breadcrumb-portfolio">
                        <FontAwesomeIcon size="xs" icon={faCircle} /> {item.kategori} &nbsp;
                  <FontAwesomeIcon size="xs" icon={faCircle} /> Company Profile
                  &nbsp;
                </div>
                      <div className="body-portfolio">
                        <Card.Title>{item.title}</Card.Title>
                      </div>
                      <div className="link-portfolio">
                        <a href={ !item.link ? "#" : item.link}>
                          Kunjungi Website <FontAwesomeIcon icon={faArrowRight} />{" "}
                        </a>
                      </div>
                    </Card>
                    </React.Fragment>
                )
               })
               return portfolioData
             })()}
            </div>
          </section> */}
          <section className="home-client">
            <div className="title-home-client">Klien Kami</div>
            <div className="container"></div>
          </section>
          <section className="container home-client">
            <div className="container">
              <Slider {...settings}>
                {(()=> {
                  let ourclientData = []
                  state.ourclient.map((item) => {
                    ourclientData.push(
                      <div className="data-client-image">
                        <img src={localStorage.getItem('host')+item.image_base64} />
                      </div>
                    )
                  })
                  return ourclientData
                }

                )()}
              </Slider>
            </div>
          </section>
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default Home;
