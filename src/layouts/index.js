import React from 'react';
import Link from 'gatsby-link';

import TopBar from '../components/TopBar/TopBar';
import Header from '../components/Header/Header';
import Navbar from '../components/Navbar/Navbar';

export default ({ children }) => 
  <div style={{ display:'flex', flexDirection:'column', alignItems:"center", padding: 0 }}>
    <TopBar />
    <Header />
    <Navbar />

    {children()}  {/* This is the page content from /pages */}

  </div>
;
