import React from 'react';
import Link from 'gatsby-link';

import CenterContainer from '../CenterContainer';

import styles from './Navbar.module.css'

import '../../../node_modules/react-fontawesome'

const Navbar = props =>
    <CenterContainer>
        <div className={styles.navbar}>
        <MenuLeft />
        <MenuRight />
        </div>
    </CenterContainer>

const MenuLeft = props =>
    <div>
        <MenuLeftItem to='/stories'>Stories</MenuLeftItem>
        <MenuLeftItem to='/food'>Food</MenuLeftItem>
        <MenuLeftItem to='/recipes'>Recipes</MenuLeftItem>
    </div>

const MenuLeftItem = props =>
    <span className={styles.menuleftitem}>
        <Link to={props.to} className={styles.menuitem} >
            {props.children}
        </Link>
    </span>

const MenuRight = props =>
    <div>
        <MenuRightItem to='/behind-the-scenes'>Behind the Scenes</MenuRightItem>
        <MenuRightItem to='/about'>About</MenuRightItem>
        <MenuRightItem to='/contact'>Contact</MenuRightItem>
    </div>

const MenuRightItem = props =>
    <span className={styles.menurightitem} >
        <Link to={props.to} className={styles.menuitem}>
            {props.children}
        </Link>
    </span>

export default Navbar;