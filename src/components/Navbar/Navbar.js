import React from 'react';
import Link from 'gatsby-link';

import CenterContainer from '../CenterContainer';
import WideContainer from '../WideContainer';

import styles from './Navbar.module.css'


const Navbar = props =>
    <WideContainer className={'bottom-grey-border'}>
        <CenterContainer>
            <div className={styles.navbar}>
            <MenuLeft />
            <MenuRight />
            </div>
        </CenterContainer>
    </WideContainer>

const MenuLeft = props =>
    <div>
        <MenuLeftItem to='/category/stories'>Stories</MenuLeftItem>
        <MenuLeftItem to='/category/food'>Food</MenuLeftItem>
        <MenuLeftItem to='/category/recipes'>Recipes</MenuLeftItem>
    </div>

const MenuLeftItem = props =>
    <span className={styles.menuleftitem}>
        <Link to={props.to} className={styles.menuitem} >
            {props.children}
        </Link>
    </span>

const MenuRight = props =>
    <div>
        <MenuRightItem to='/category/behind-the-scenes'>Behind the Scenes</MenuRightItem>
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