import React,{useState,useEffect} from 'react'
import axios from 'axios';
//import { Button } from 'primereact/button';  
//import logo from './image/sai.jpg'
import {DataTable} from  'primereact/datatable';
import {Column} from 'primereact/column';


function Datatable() {
    const [row,setRow] = useState()


 const flagFunction = (row) => {
  return <img src={row.flags.png} alt="img" width="42" />
 }
 const statusCheck = (row) => {
  if(row.numericCode <= 100) {
    return "success"
  }
  else if(row.numericCode > 100 && row.numericCode <=200) {
    return "danger"
  }else {
    return "pending"
  }

 }


  useEffect(()=>{
    axios.get("https://restcountries.com/v2/all").then(res=> setRow(res.data))
  },[])
  return (
    <div className="container bg-success">
      <div className="row">
        <div className="col-lg-12 col-sm-12">
    <div className="card">
    <DataTable
    value={row}
    responsiveLayout="scroll"
    paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink CurrentPageReport RowsPerPageDropdown"
    dataKey="id"
    paginator
    emptyMessage = "No Data Found"
    className="datatable-responsive"
    currentpagereporttemplate="showing {first} to {last} of {totalRecords} row"
    rows={10}
    
    >  
    <Column field="name" sortable filter header="name"></Column>
    <Column field={statusCheck} sortable filter header="numericCode"></Column>
    <Column field="region" sortable filter header="region"></Column>
    <Column field={flagFunction} header="flags"></Column>
    <Column field="nativeName" sortable filter header="nativeName"></Column>
    <Column field="subregion" sortable filter header="subregion"></Column>
    </DataTable>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Datatable