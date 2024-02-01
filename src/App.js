import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react";
import DataTable from 'react-data-table-component';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import ContactForm from './components/ContactForm';
import MyDataTable from './components/datatable';
import axios from 'axios';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <ul>
      {posts.map(post => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
  // return (
  // <div className='container mt-5'>
  //   <MyDataTable />
  //   <ContactForm />
  // </div>
  // );
}

export default App;
