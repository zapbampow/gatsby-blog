import React from 'react';
import Link from 'gatsby-link';

import TopBar from '../components/TopBar/TopBar';
import Header from '../components/Header/Header';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

export default ({ children }) => 
  <div style={{ display:'flex', flexDirection:'column', alignItems:"center", padding: 0 }}>
    <TopBar />
    <Header />
    <Navbar />

    {children()}  {/* This is the page content from /pages */}

    {/* <Footer  /> */}

  </div>
;



