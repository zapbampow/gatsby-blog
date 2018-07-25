import React, {Component} from 'react';
import Link from 'gatsby-link';
import WideContainer from '../WideContainer';
import htmlDecode from '../../utils/htmlDecode'

import styles from './MainFeatured.module.css'

class MostRecent extends Component {
    render(){
        const bgimage = `url(${this.props.data.featured_media.source_url})`;

        const title = htmlDecode(this.props.data.title);

        return (
            <div className={`${styles.featured} ${styles['most-recent']}`} style={{backgroundImage: bgimage}} >
                <div className={styles['article-info-container']} >
                    <Link to={this.props.data.slug} className={styles.linked}>
                        <h1 className={styles['featured-header']} >{title}</h1>
                    </Link>
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

class SecondMostRecent extends Component {
    render() {
        const bgimage = `url(${this.props.data.featured_media.source_url})`

        const title = htmlDecode(this.props.data.title);

        return (
            <div className={`${styles.featured} ${styles['second-most-recent']}`} style={{backgroundImage: bgimage}} >
                <div className={styles['article-info-container']} >
                    <Link to={this.props.data.slug} className={styles.linked}>
                        <h3 className={styles['featured-header']} >{title}</h3>
                    </Link>
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

class ThirdMostRecent extends Component {
    render() {
        const bgimage = `url(${this.props.data.featured_media.source_url})`

        const title = htmlDecode(this.props.data.title);

        return (
            <div className={`${styles.featured} ${styles['third-most-recent']}`} style={{backgroundImage: bgimage}} >
                <div className={styles['article-info-container']} >
                    <Link to={this.props.data.slug} className={styles.linked}>
                        <h3 className={styles['featured-header']} >{title}</h3>
                    </Link>
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


export default (props) => 
    <WideContainer className='bg-grey'>
        <div style={{ width:1140, height:450, display:'grid', gridTemplateColumns:'68% 32%', gridTemplateRows:'50% 50%', gridTemplateAreas:`"most-recent second-most-recent" "most-recent third-most-recent"` }}>
            <MostRecent data={props.data.edges[0].node} />
            <SecondMostRecent data={props.data.edges[1].node} />
            <ThirdMostRecent data={props.data.edges[2].node} />
        </div>
    </WideContainer>

