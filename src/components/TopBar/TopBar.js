import React from 'react';
import GatsbyLink from 'gatsby-link';
import WideContainer from '../WideContainer';
import CenterContainer from '../CenterContainer';
import styles from './TopBar.module.css';

const Link = ({ children, to, ...other }) => {
    // Tailor the following test to your environment.
    // This example assumes that any internal link (intended for Gatsby)
    // will start with exactly one slash, and that anything else is external.
    const internal = /^\/(?!\/)/.test(to);
  
    // Use gatsby-link for internal links, and <a> for others
    if (internal) {
      return (
        <GatsbyLink to={to} {...other}>
          {children}
        </GatsbyLink>
      );
    }
    return (
      <a href={to} {...other}>
        {children}
      </a>
    );
  };

const TopBar = props =>
    <WideContainer>
        <div className={styles.topbar}>
            <CenterContainer>
                <div className={styles['topbar-content']}>
                <SearchBar />
                <BarLink to='https://www.instagram.com/storynosh'>Instagram</BarLink>
                <BarLink to='https://www.facebook.com/storynosh'>Facebook</BarLink> 
                </div>
            </CenterContainer>
        </div>
    </WideContainer>

const BarLink = props =>
    <span>
        <Link to={props.to} className={styles.barlink} >
            {props.children}
        </Link>
    </span>

const SearchBar = props =>
    <span>
        <form action="/" style={{marginBottom:'0'}}>
            <input type="text" placeholder="Search.." name="search" className={ styles.searchbar } />
            {/* <button type="submit" style={{ backgroundColor:'#ffffff00', color:'#ffffff', border:'none', borderBottom:'1px #fff solid' }}>Search</button> */}
        </form>
    </span>

export default TopBar;