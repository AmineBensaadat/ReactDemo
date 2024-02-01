import React, { useEffect, useState } from "react";
import DataTable from 'react-data-table-component';
const MyDataTable = () => {
  const columns = [
    {
      name : 'Title',
      selector: row => row.name,
      sortable: true, 
    },
    {
      name : 'Email',
      selector: row => row.email ,
      sortable: true, 
  
    },
    {
      name : 'Age',
      selector: row => row.age ,
      sortable: true, 
  
    }
  ];
  
  const data = [
    {
      id : 1,
      name: 'amine',
      email: 'bensaadat.amine@gmail.com',
      age: '30' 
    },
    {
      id : 2,
      name: 'morad',
      email: 'bensaadat.morad@gmail.com',
      age: '20' 
    },
    {
      id : 3,
      name: 'akram',
      email: 'akram.amine@gmail.com',
      age: '17' 
    },
    {
      id : 4,
      name: 'marwa',
      email: 'marwa.amine@gmail.com',
      age: '45' 
    },
    {
      id : 5,
      name: 'salem',
      email: 'salem.amine@gmail.com',
      age: '19' 
    },
    {
      id : 6,
      name: 'amine',
      email: 'bensaadat.amine@gmail.com',
      age: '30' 
    },
    {
      id : 7,
      name: 'morad',
      email: 'bensaadat.morad@gmail.com',
      age: '20' 
    },
    {
      id : 8,
      name: 'akram',
      email: 'akram.amine@gmail.com',
      age: '17' 
    },
    {
      id : 9,
      name: 'khalil',
      email: 'khalil.amine@gmail.com',
      age: '20' 
    },
    {
      id : 5,
      name: 'adir',
      email: 'adir.amine@gmail.com',
      age: '19' 
    },
    
  ];
  const [records, setRecords] = useState(data);
  function handleFilter(event){
    const newData = data.filter(row => {
      return row.name.toLowerCase().includes(event.target.value.toLowerCase())
    })
    setRecords(newData)
  }
  return (
    <div className="container mt-5">
      <h2 className="mb-3">React DataTable Component Example</h2>
      <div className='text-end' ><input type='text' onChange={handleFilter} /></div>
    <DataTable
    columns={columns}
    data={records}
    selectableRows
    fixedHeader
    pagination
    ></DataTable>
    </div>
  )
}
export default MyDataTable