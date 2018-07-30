import React, {Component} from 'react';
import Link from 'gatsby-link';
import WideContainer from '../WideContainer';
import CenterContainer from '../CenterContainer';

import shortenExcerpt from '../../utils/shortenExcerpt';

import styles from './Section.module.css'

class Section extends Component {
    render() {
        var content = this.props.data.edges.map(({node}, index) => {
            let excerpt = shortenExcerpt(node.excerpt);
    
            return (
                <div key={index} className={styles['article-info-container']} >
                    <div className={styles['post-img']}>
                        <Link to={node.slug} className={styles.linked}>
                            <img src={node.featured_media.source_url} />
                        </Link>
                    </div>

                    <Link to={node.slug} className={styles.linked}>
                        <h3 className={styles['featured-header']} dangerouslySetInnerHTML={{__html: node.title}} > </h3>
                    </Link>

                    <div>
                        <Link to={node.categories[0].link} className={styles['category-box-link']}>
                            <span className={styles['category-box']}>{node.categories[0].name}</span>
                        </Link>
                        <span className={styles['featured-date']}>{node.date}</span>
                    </div>
                    
                    <div className={styles.excerpt} dangerouslySetInnerHTML={{__html:excerpt}} ></div>
                </div>
            )}
        )

        return(
            <WideContainer className='home-section'>
                <CenterContainer>
                <div style={{width:'100%', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'  }}>
                        <div className={styles['section-header']} >
                            <span className={styles['section-title']} >{this.props.sectionTitle}</span>
                            <span className={styles.hline}></span>
                        </div>

                        <div className={styles['section-posts']}>
                            {content}
                        </div>
                </div> 
                </CenterContainer>
            </WideContainer>
        )
    }
}

export default Section;