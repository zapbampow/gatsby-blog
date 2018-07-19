import React from 'react';
import WideContainer from '../WideContainer';

import styles from './MainFeatured.module.css'

const MostRecent = (props) =>
    <div className={`${styles.featured} ${styles['most-recent']}`} >
        <div className={styles['article-info-container']} >
            <h1 className={styles['featured-header']} >Article Title</h1>
            <div>
                <span className={styles['category-box']}>Category</span>
                <span className={styles['featured-date']}>Date</span>
            </div>
        </div>
    </div>

const SecondMostRecent = (props) =>
    <div className={`${styles.featured} ${styles['second-most-recent']}`} >
        <div className={styles['article-info-container']} >
            <h3 className={styles['featured-header']} >Article Title</h3>
            <div>
                <span className={styles['category-box']}>Category</span>
                <span className={styles['featured-date']}>Date</span>
            </div>
        </div>
    </div>

const ThirdMostRecent = (props) =>
    <div className={`${styles.featured} ${styles['third-most-recent']}`} >
        <div className={styles['article-info-container']}>
            <h3 className={styles['featured-header']}>Article Title</h3>
            <div>
                <span className={styles['category-box']} >Category</span>
                <span className={styles['featured-date']}>Date</span>
            </div>
        </div>
    </div>

export default (props) => 
    <WideContainer className='bg-grey'>
        <div style={{ width:1140, height:450, display:'grid', gridTemplateColumns:'68% 32%', gridTemplateRows:'50% 50%', gridTemplateAreas:`"most-recent second-most-recent" "most-recent third-most-recent"` }}>
            <MostRecent />
            <SecondMostRecent />
            <ThirdMostRecent />
        </div>
    </WideContainer>