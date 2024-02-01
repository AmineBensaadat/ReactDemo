import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react";
import DataTable from 'react-data-table-component';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import ContactForm from './components/ContactForm.js';
import MyDataTable from './components/datatable.js';
import CustomizedTables from './components/datatableMaterial.js';
import axios from 'axios';

function App() {
  // const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   axios.get('https://jsonplaceholder.typicode.com/posts')
  //     .then(response => {
  //       setPosts(response.data);
  //     })
  //     .catch(error => {
  //       console.error(error);
  //     });
  // }, []);

  // return (
  //   <ul>
  //     {posts.map(post => (
  //       <li key={post.id}>{post.title}</li>
  //     ))}
  //   </ul>
  // );
  return (
  <div className='container mt-5'>
    < CustomizedTables />
    <MyDataTable />
    <ContactForm />
  </div>
  );
}

export default App;
