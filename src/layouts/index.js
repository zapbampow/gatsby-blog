import React from 'react';
import Link from 'gatsby-link';

const TopBar = props =>
    <div style={{width:'1170px', display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'flex-end'}} >
        <SearchBar />
        <BarLink to='https://www.instagram.com/storynosh'>Instagram</BarLink>
        <BarLink to='https://www.facebook.com/storynosh'>Facebook</BarLink>   
    </div>

const BarLink = props =>
    <span>
        <Link to={props.to} style={{textShadow:'none', backgroundImage:'none', marginLeft:'1em', color:'#ffffff'}}>
            {props.children}
        </Link>
    </span>

const SearchBar = props =>
    <span>
        <form action="/" style={{marginBottom:'0'}}>
            <input type="text" placeholder="Search.." name="search" style={{backgroundColor:'#ffffff00', color:'#ffffff', border:'none', borderBottom:'1px #ffffff solid'}} />
            {/* <button type="submit" style={{ backgroundColor:'#ffffff00', color:'#ffffff', border:'none', borderBottom:'1px #fff solid' }}>Search</button> */}
        </form>
    </span>

const Header = props =>
    <div style={{display:'flex', justifyContent:'space-between', width:'1170', height:'100%'}}>
        <Link to='/' activeStyle={{ backgroundImage:'none' }}>
            <img src="http://www.storynosh.com/wp-content/uploads/2018/06/Header.png" style={{ margin:'1em 0' }} />
        </Link>
    </div>

const MenuLeft = props =>
    <div>
        <MenuLeftItem to='/stories'>Stories</MenuLeftItem>
        <MenuLeftItem to='/food'>Food</MenuLeftItem>
        <MenuLeftItem to='/recipes'>Recipes</MenuLeftItem>
    </div>

const MenuLeftItem = props =>
    <span style={{marginRight:'1em'}}>
        <Link to={props.to}>
            {props.children}
        </Link>
    </span>



export default ({ children }) => 
  <div style={{ display:'flex', flexDirection:'column', alignItems:"center", padding: 0 }}>
    <div style={{width:"100%", height:'2.5em', backgroundColor:'#cc5241', display:'flex', justifyContent:'center'}}>
        <TopBar></TopBar>
    </div> 
    
    <div style={{width:"100%", borderBottom:"1px #efefef solid", display:'flex', justifyContent:'center'}}>
        <Header />
    </div>

    <div style={{width:"1170px", margin:0, display:'flex', justifyContent:'space-between'}}>
        <MenuLeft />
        {/* <MenuRight /> */}
    </div>    
    {children()}

  </div>
;
