import React, { Component, useState, forwardRef, useEffect } from 'react'
import './Kbli.scss'
import * as kbli from './kbli.json'
import MaterialTable from 'material-table';
import { 
    AddBox, 
    ArrowDownward, 
    Check, 
    ChevronLeft, 
    ChevronRight, 
    Clear, 
    DeleteOutline, 
    Edit, 
    FilterList, 
    FirstPage, 
    LastPage, 
    Remove, 
    SaveAlt, 
    Search, 
    ViewColumn 
} from '@material-ui/icons';

const Kbli = () => {
    const [state, setState] = useState({
        dataKbli: kbli.data,
        dataSource : [],
        displayLength: 10,
        loading: false,
        page: 1,
    })

    const columns = [
        {
            title: 'KBLI',
            field: 'kbli',
            headerStyle: {
                fontSize: 15,
                fontWeight: 'bold'
            }
        },
        {
            title: 'Judul',
            field: 'judul',
            headerStyle: {
                fontSize: 15,
                fontWeight: 'bold'
            }
        },
        {
            title: 'Uraian',
            field: 'uraian',
            headerStyle: {
                fontSize: 15,
                fontWeight: 'bold'
            }
        }
    ]

    const data = () => {
        for(let i = 0; i < kbli.data.length; i++){
            let obj = kbli.data[i]
            return obj
        }
    }

    const tableIcons = {
        Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
        Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
        Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
        Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
        DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
        Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
        Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
        Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
        FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
        LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
        NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
        PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
        ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
        Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
        SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
        ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
        ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
    };
    React.useEffect(() => {
        
    })
    return (
        <div className="about">
            <section className="masthead">
                <div className="container h-100">
                    <div className="row">
                        <div className="container title-bg-banner">
                            <label>Data KBLI 2020</label>
                        </div>
                        <div className="container">
                            <div className="row container text-panel col-md-8">
                                {/* <div dangerouslySetInnerHTML={ {__html: state.description} } /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="masthead-2">
                <div className="container h-100">
                    <div className="row">
                        <div className="container">
                            <label>
                                <b>Search keyword</b>: Contoh ketik <b>payment gateway</b> untuk KBLI <b>66411</b> atau ketik <b>74902</b> untuk kegiatan <b>konsultasi bisnis</b> dan <b>broker bisnis</b>. Di KBLI 2020 ditambahkan beberapa kegiatan usaha yang baru misalnya kegiatan <b>konten kreatif</b>. Kamu bisa pilih kode KBLI <b>74141</b> untuk kegiatan <b>konten kreatif</b>.
                                <br/>
                                <br/>
                                <b>Kode yang sering di pilih</b>: 63122 - kegiatan web portal / platform, 46494 - perdagangan kosmetik, 70209 - konsultan manajemen lainnya, 82302 - event organizer, 46693 - perdagangan alat kesehatan. Di KBLI 2020 ada tambahan kode KBLI baru misalnya 74141 - konten kreatif, 66411 - payment gateway.
                            </label>
                        </div>
                        <div className="container text-panel col-lg-12">
                            <label><a href="https://legalfirst.id/kbli-2020.pdf">Download KBLI 2020</a></label>
                        </div>
                        <div className="container">
                            <div className="row container text-panel col-lg-12">
                                {/* <div dangerouslySetInnerHTML={ {__html: state.description} } /> */}
                                <MaterialTable
                                    icons={tableIcons}
                                    title=""
                                    columns={columns}
                                    data={state.dataKbli.map((item) => {
                                        return(
                                            {
                                                kbli: item.kbli,
                                                judul: item.judul,
                                                uraian: item.uraian,
                                            }
                                            
                                        )
                                    })}
                                    options={{
                                        exportButton: true,
                                        pageSize: 10,
                                        searchFieldStyle: {
                                            fontSize: 15
                                        },
                                        rowStyle: {
                                            fontSize: 15,
                                        }
                                    }}
                                />
                            </div>
                            <br/>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Kbli;