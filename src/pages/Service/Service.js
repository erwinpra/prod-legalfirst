import React, { Component } from 'react'
import './Service.scss'
import iconquestionmarkfield from '../../assets/icon/icon-question-mark-filled.svg'
import check from '../../assets/icon/check-tick.svg'
import up from '../../assets/icon/Icon-Chevron-Up.svg'
import down from '../../assets/icon/Icon-Chevron-Down.svg'
import Loading from "../../component/Loading/Loading";
import axios from 'axios';
import { Link } from 'react-router-dom'

const Service = () => {
    const [state, setState] = React.useState({
        service: [],
        detail: [],
        maintenance: false,
        fitur: false,
        data_maintenance: [],
        data_fitur: [],
        data_paket: []
    })

    const getLayanan = async () => {
        await axios.get('/get/layanan')
            .then((res) => {
                setState((prevState) => ({
                    ...prevState,
                    service: res.data.data.service
                }));
                // console.log(res.data.data.service)
            })
            .catch((err) => { });
    }

    const getJenis = async () => {
        await axios.get('get/jenis_service')
            .then((res) => {
                // var paket = []
                var paket = res.data.data.detail_service.data.filter((val) => {
                    return val['jenis_service'] == 'paket'
                })
                // var maintenance = res.data.data.detail_service.data.filter((val) => {
                //     return val['jenis_service'] == 'maintenance'
                // })
                var fitur = res.data.data.detail_service.data.filter((val) => {
                    return val['jenis_service'] == 'fitur'
                })
                setState((prevState) => ({
                    ...prevState,
                    data_paket: paket,
                    // data_maintenance: maintenance,
                    data_fitur: fitur
                }))
                // console.log(maintenance)
            })
    }
    React.useEffect(() => {
        getLayanan()
        getJenis()
    }, [])
    return (
        <div className="service">
            {/* {console.log(state.service)} */}
            {
                state.service.length > 0 || state.detail.length > 0 ?
                    (
                        <>
                            <section className="content-header">
                                <div className="container">
                                    <div className="row">
                                        <div className="row col-md-10 col-xs-12">
                                            <label className="title-header">Layanan Kami.</label>
                                        </div>
                                        <div className="row col-md-10 col-xs-12">
                                            <label className="title-info">Pilih paket payanan sesuai kebutuhan Anda</label>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="container container-paket">
                                <div className="header-paket col-md-12">
                                    Pilih paket website untuk anda.
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
                                                                <button className="btn-purple-paket" >
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
                                                                <Link to="/service"> {item.judulbutton2}</Link>
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

                            <section className="container container-paket">
                                <div className="header-paket col-md-12">Detail paket layanan Kami.</div>
                                <div className="form-inline">
                                    <div className="card-paket-detail">
                                        <div className="row">
                                            {(() => {
                                                const paket = [];
                                                state.data_paket.map((item) => {
                                                    paket.push(
                                                        <React.Fragment>
                                                            <div className="col-paket">
                                                                <div className="form-inline">
                                                                    {
                                                                        item.header == 0 ?
                                                                            <>
                                                                                <img className="image-xs" src={iconquestionmarkfield} />
                                                                            </> : null
                                                                    }
                                                                    <label className={item.header == 1 ? 'jenis-paket fs' : 'sign-paket'}>{item.jenis}:</label>
                                                                </div>
                                                            </div>
                                                            <div className="col-paket">
                                                                {
                                                                    item.header == 1 ?
                                                                        <>
                                                                            <div className="form-inline">
                                                                                <label className="title-basic">Basic</label>
                                                                            </div>
                                                                        </> : null
                                                                }
                                                                <div className="form-inline">
                                                                    <label className={item.header == 1 ? 'harga-paket-detail fs' : 'desc-paket'}>{item.item1}</label>
                                                                </div>
                                                                {
                                                                    item.header == 1 ?
                                                                        <>
                                                                            <div className="form-inline">
                                                                                {/* <label className="gimmick">Per Bulan</label> */}
                                                                            </div>
                                                                        </> : null
                                                                }
                                                            </div>
                                                            <div className="col-paket">
                                                                {
                                                                    item.header == 1 ?
                                                                        <>
                                                                            <div className="form-inline">
                                                                                <label className="title-basic">Pro</label>
                                                                            </div>
                                                                        </> : null
                                                                }
                                                                {/* <div className="form-inline">
                                                    <label className="title-pro">Pro</label>
                                                </div> */}
                                                                <div className="form-inline">
                                                                    <label className={item.header == 1 ? 'harga-paket-detail fs' : 'desc-paket'}>{item.item2}</label>
                                                                </div>
                                                                {/* <div className="form-inline">
                                                    <label className="harga-paket-detail fs">{item.item2}</label>
                                                </div> */}
                                                                {
                                                                    item.header == 1 ?
                                                                        <>
                                                                            <div className="form-inline">
                                                                                {/* <label className="gimmick">Per Bulan</label> */}
                                                                            </div>
                                                                        </> : null
                                                                }
                                                                {/* <div className="form-inline">
                                                    <label className="gimmick">per bulan</label>
                                                </div> */}
                                                            </div>
                                                            <div className="col-paket">
                                                                {
                                                                    item.header == 1 ?
                                                                        <>
                                                                            <div className="form-inline">
                                                                                <label className="title-basic">Business</label>
                                                                            </div>
                                                                        </> : null
                                                                }
                                                                {/* <div className="form-inline">
                                                    <label className="title-business">Business</label>
                                                </div> */}
                                                                <div className="form-inline">
                                                                    <label className={item.header == 1 ? 'harga-paket-detail fs' : 'desc-paket'}>{item.item3}</label>
                                                                </div>
                                                                {
                                                                    item.header == 1 ?
                                                                        <>
                                                                            <div className="form-inline">
                                                                                {/* <label className="gimmick">Per Bulan</label> */}
                                                                            </div>
                                                                        </> : null
                                                                }
                                                                {/* <div className="form-inline">
                                                    <label className="gimmick">per bulan</label>
                                                </div> */}
                                                            </div>
                                                            <hr />
                                                        </React.Fragment>
                                                    )
                                                })
                                                return paket
                                            })()}
                                        </div>
                                        <hr />

                                        {/* <div className="row">
                                            <div className="col-dropdown">
                                                <button className="hide-show" onClick={() =>
                                                    setState((prevState) => ({
                                                        ...prevState,
                                                        maintenance: !state.maintenance
                                                    }))
                                                }>
                                                    {'Maintenance'}
                                                    <label className="pull-right">{state.maintenance ? <img src={up} /> : <img src={down} />}</label>
                                                </button>
                                            </div>
                                        </div> */}
                                        {/* <div className="col-dropdown">
                                            {(() => {
                                                let dataMaintenance = []
                                                for (let i = 0; i < state.data_maintenance.length; i++) {
                                                    // console.log(state.data_maintenance[i])
                                                    dataMaintenance.push(
                                                        <div style={{ display: state.maintenance ? "block" : "none" }}>
                                                            <div className="row inline-hover">
                                                                <div className="col-paket">
                                                                    <div className="form-inline">
                                                                        <img className="image-xs" src={iconquestionmarkfield} />
                                                                        <label className="sign-paket">{state.data_maintenance[i].jenis}</label>
                                                                    </div>
                                                                </div>
                                                                <div className="col-paket">
                                                                    <div className="form-inline">
                                                                        <label className="desc-paket">{state.data_maintenance[i].item1}</label>
                                                                    </div>
                                                                </div>
                                                                <div className="col-paket">
                                                                    <div className="form-inline">
                                                                        <label className="desc-paket">{state.data_maintenance[i].item2}</label>
                                                                    </div>
                                                                </div>
                                                                <div className="col-paket">
                                                                    <div className="form-inline">
                                                                        <label className="desc-paket">{state.data_maintenance[i].item3}</label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <hr />
                                                        </div>
                                                    )
                                                }
                                                return dataMaintenance
                                            })()}
                                        </div> */}

                                        <div className="row" style={{ marginTop: '5px' }}>
                                            <div className="col-dropdown">
                                                <button className="hide-show" onClick={() =>
                                                    setState((prevState) => ({
                                                        ...prevState,
                                                        fitur: !state.fitur
                                                    }))
                                                }>
                                                    {'Legalitas yang didapat'}
                                                    <label className="pull-right">{state.fitur ? <img src={up} /> : <img src={down} />}</label>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="col-dropdown">
                                            {(() => {
                                                let dataFitur = []
                                                for (let i = 0; i < state.data_fitur.length; i++) {
                                                    dataFitur.push(
                                                        <div style={{ display: state.fitur ? "block" : "none" }}>
                                                            <div className="row inline-hover">
                                                                <div className="col-paket">
                                                                    <div className="form-inline">
                                                                        <img className="image-xs" src={iconquestionmarkfield} />
                                                                        <label className="sign-paket">{state.data_fitur[i].jenis}</label>
                                                                    </div>
                                                                </div>
                                                                <div className="col-paket">
                                                                    <div className="form-inline">
                                                                        <label className="desc-paket">{state.data_fitur[i].item1}</label>
                                                                    </div>
                                                                </div>
                                                                <div className="col-paket">
                                                                    <div className="form-inline">
                                                                        <label className="desc-paket">{state.data_fitur[i].item2}</label>
                                                                    </div>
                                                                </div>
                                                                <div className="col-paket">
                                                                    <div className="form-inline">
                                                                        <label className="desc-paket">{state.data_fitur[i].item3}</label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <hr />
                                                        </div>
                                                    )
                                                }
                                                return dataFitur
                                            })()}
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </>
                    ) : (
                        <Loading />
                    )
            }
        </div>
    )
}
export default Service