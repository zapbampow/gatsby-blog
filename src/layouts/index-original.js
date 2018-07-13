import React from "react";
import Link from 'gatsby-link';

const ListLink = props =>
    <li style={{ display: `inline-block`, marginRight: `1rem` }}>
        <Link to={props.to} style={{textShadow:'none'}}>
            {props.children}
        </Link>
    </li>

const FooterLink = props =>
    <li style={{ display: `inline-block`, marginRight: `1rem` }}>
        <Link to={props.to} style={{textShadow:'none', color:'white', backgroundImage:'none'}}>
            {props.children}
        </Link>
    </li>

export default ({ children }) => 
  <div style={{ margin: `0 auto`, maxWidth: 650, minHeight:"100vh", padding: `0 1rem` }}>
    <header style={{ marginBottom: `1.5rem` }}>
        <Link to='/' style={{textShadow:'none', backgroundImage:'none'}}>
            <h3 style={{display:'inline'}}>My Site Title</h3>
        </Link>

        <ul style={{listStyle:'none', float:'right'}}>
            <ListLink to='/about'>About</ListLink>

            <ListLink to='/contact'>
                Contact
            </ListLink>

            <ListLink to='/' >
                Home
            </ListLink>
        </ul>
    </header> 

    {children()}

    <footer style={{ display:'flex', justifyContent:'center', alignItems:'center', width:'100%', backgroundColor:"grey" }}>
        <ul style={{ listStyle:"none" }}>
            <FooterLink to='/'>Home</FooterLink>
            <FooterLink to='/about'>About</FooterLink>
            <FooterLink to='/contact'>Contact</FooterLink>
        </ul>
    </footer>

  </div>
;

