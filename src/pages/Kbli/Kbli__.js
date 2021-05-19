import React from 'react'
import {Table, Pagination} from 'react-bootstrap'
import * as dataKbli from './kbli.json'
const Kbli = () => {
    const [state,setState] = React.useState({
        data : dataKbli.data,
        dataSource : [],
        length : 0
    })  
    const changePage = () => {

    }
    const pagination = (page = 0 , perpage = 10,length = state.data.length) => {
      let paginationLength = length % perpage  
      let paginationTotal = length / perpage + (paginationLength == 0 ? 0 : 1)
      return paginationTotal.toFixed(0)
    }
    const getData = (page=1,perpage = 10,search) => {
        let dataTable = []
        let arrSlice = state.data.slice((page-1)*perpage,(perpage*page))
        let paginationLength = pagination()
        setState((prevState) => ({...prevState,dataSource:arrSlice , length : paginationLength}))
       // dataTable.push(arrSlice,paginationLength) 
       // let activePage = document.querySelector(".page-link"+page).innerHTML =

        console.log(dataTable)
        return 1
    }
  React.useEffect(() => {
    getData()
  },[])  
  return(
    <>
    <Table striped bordered hover>
        
    <thead>
      <tr>
        <th>#</th>
        <th>KBLI</th>
        <th>Judul</th>
        <th>Uraian</th>
      </tr>
    </thead>
    <tbody>
      {(()=>{
          let dataMap = []
          let dataDOM = []
          state.dataSource.map((item) => {
              dataDOM.push(
                    <tr>
                        <td>#</td>
                        <td>{item.kbli}</td>
                        <td>{item.judul}</td>
                        <td>{item.uraian}</td>
                    </tr>
              )
          })
          return dataDOM
      })()}
    </tbody>
    </Table>
    <div>
    <Pagination>
    {(() => {
      let items = [];
      for (let number = 1; number <= state.length; number++) {
        items.push(
          <Pagination.Item key={number} id={`page-link-${number}`} onClick={()=> getData(number,500,"")}>
            {number}
          </Pagination.Item>,
        );
      }
      return items
    })()}
    </Pagination>
    </div>
    </>
  )
}

export default Kbli