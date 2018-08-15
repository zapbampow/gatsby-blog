import React from 'react';
import styles from './Header.module.css';
import WideContainer from '../WideContainer';
import Link from 'gatsby-link';

const Header = props =>
    <WideContainer>
        <div className={styles.header}>
            <div className={styles.header_centered}>
                <Link to='/' activeStyle={{ backgroundImage:'none' }}>
                    <img src="https://www.storynosh.com/wp-content/uploads/2018/06/Header.png" style={{ margin:'0.9em 0' }} />
                </Link>
            </div>
        </div>
    </WideContainer>

export default Header;