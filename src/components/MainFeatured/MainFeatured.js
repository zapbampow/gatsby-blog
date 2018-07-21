import React, {Component} from 'react';
import Link from 'gatsby-link';
import WideContainer from '../WideContainer';

import styles from './MainFeatured.module.css'

class MostRecent extends Component {
    render(){
        const bgimage = `url(${this.props.data.featured_media.source_url})`

        return (
            <div className={`${styles.featured} ${styles['most-recent']}`} style={{backgroundImage: bgimage}} >
                <div className={styles['article-info-container']} >
                    <h1 className={styles['featured-header']} >{this.props.data.title}</h1>
                    <div>
                        <Link to={this.props.data.categories[0].link} className={styles['category-box-link']}>
                            <span className={styles['category-box']}>{this.props.data.categories[0].name}</span>
                        </Link>
                        <span className={styles['featured-date']}>{this.props.data.date}</span>
                    </div>
                </div>
            </div>
        )
    }
}


// const MostRecent = (props) => 
//     <div className={`${styles.featured} ${styles['most-recent']}`} style={{backgroundImage: bgimage }} >
//         <div className={styles['article-info-container']} >
//             <h1 className={styles['featured-header']} >{props.data.title}</h1>
//             <div>
//                 <Link to={props.data.categories[0].link} className={styles['category-box-link']}>
//                     <span className={styles['category-box']}>{props.data.categories[0].name}</span>
//                 </Link>
//                 <span className={styles['featured-date']}>{props.data.date}</span>
//             </div>
//         </div>
//     </div>


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
            <MostRecent data={props.data.edges[0].node} />
            <SecondMostRecent />
            <ThirdMostRecent />
            <p>{props.data.edges[0].node.title}</p>
        </div>
    </WideContainer>

