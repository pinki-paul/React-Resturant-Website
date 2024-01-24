import React from 'react';
import Layout from '../Components/Layout/Layout.js';
import { Link } from 'react-router-dom';
import '../styles/HomeStyle.css';

const Home = () => {
  return (
    <Layout>
   <div className='home'>
    <div className='headerContainer'>
      <h1>Food Website</h1>
      <p>best and freshly cooked foods in india.</p>
    
    <Link to={'/menu'}>
    <button className='main-btn'>Order now</button>
    </Link>

    </div>
   </div>
    </Layout>
  )
}

export default Home;