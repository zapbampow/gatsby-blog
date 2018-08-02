import React, {Component} from 'react';
import styles from './Footer.module.css';
import WideContainer from '../WideContainer';
// import Link from 'gatsby-link';
import CenterContainer from '../CenterContainer';
import Link from 'gatsby-link';

class RecentPosts extends Component {
    render(){
        return (
            <div className={`${styles['recent-posts']} ${styles['footer-section']}`}>
                <h3>Recent Posts</h3>
                <ul>
                    {this.props.data.edges.map(({node}, index) =>
                        <li key={node.id}><Link to={node.slug} className={styles.link}><span dangerouslySetInnerHTML={{__html:node.title}}></span></Link></li>
                    )}
                </ul>
            </div>
        )
    }
};

const Footer = ({data}) => {
        return(
            <div style={{width:'100%', marginTop:'1em'}}>
                <WideContainer className='bg-footer-top'>
                    <div style={{marginTop: '2em'}}>
                        <CenterContainer>
                            <div className={styles['footer-top']}>
                                <section className={`${styles.about} ${styles['footer-section']}`}>
                                    <h3>About</h3>
                                    <p>This is a story-driven food blog.</p>
                                    <p>We are more interested in interaction than consumption. We are hanging out with restaurant owners and bringing you their stories a few bites at a time.</p>
                                </section>

                                <RecentPosts data={data} />

                                <section className={`${styles.contact} ${styles['footer-section']}`}>
                                    <h3>Connect</h3>
                                    <p>EMAIL ADDRESS</p>
                                    <p>Instagram</p>
                                    <p>Facebook</p>
                                </section>

                                <section className={`${styles.logo} ${styles['footer-section']}`}>
                                    <img src="https://www.storynosh.com/wp-content/uploads/2018/07/Story-Nosh_dark-300x300.png" />
                                </section>
                            </div>

                            

                        </CenterContainer>

                    </div>
                </WideContainer>

                <WideContainer className='bg-footer-bottom'>
                    <CenterContainer className='footer-bottom-margin'>
                        <nav className={styles['footer-bottom']}>
                            <span className={styles.copyright}>&copy; 2018 - Clayton Ingalls</span>
                            <ul className={styles['bottom-nav']}>
                                <li><Link to='/category/stories' className={styles.link}>Stories</Link></li>
                                <li><Link to='/category/food' className={styles.link}>Food</Link></li>
                                <li><Link to='/category/recipes' className={styles.link}>Recipes</Link></li>
                                <li><Link to='/category/behind-the-scenes' className={styles.link}>Behind the Scenes</Link></li>
                                <li><Link to='/about' className={styles.link}>About</Link></li>
                                <li><Link to='/contact' className={styles.link}>Contact</Link></li>
                            </ul>
                        </nav>
                    </CenterContainer>
                </WideContainer>
            </div>
        )
};

export default Footer;