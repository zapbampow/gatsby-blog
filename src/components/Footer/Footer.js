import React, {Component} from 'react';
import styles from './Footer.module.css';
import WideContainer from '../WideContainer';
// import Link from 'gatsby-link';
import CenterContainer from '../CenterContainer';

class RecentPosts extends Component {
    render() {
        return (
            <div className={`${styles['recent-posts']} ${styles['footer-section']}`}>
                <h3>Recent Posts</h3>
                <ul>
                    {this.props.data.edges.map(({node}, index) =>
                        <li key={index}>{node.title}</li>
                    )}
                </ul>
            </div>
        )
    }
}

class Footer extends Component {
    render(){
        return(
            <div>
                <WideContainer className='bg-footer-top'>
                    <div style={{marginTop: '2em'}}>
                        <CenterContainer>
                            <div className={styles['footer-top']}>
                                <section className={`${styles.about} ${styles['footer-section']}`}>
                                    <h3>About</h3>
                                    <p>This is a story-driven food blog.</p>
                                    <p>We are more interested in interaction than consumption. We are hanging out with restaurant owners and bringing you their stories a few bites at a time.</p>
                                </section>

                                <RecentPosts data={this.props.data} />

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
                                <li>Stories</li>
                                <li>Food</li>
                                <li>Recipes</li>
                                <li>Behind the Scenes</li>
                                <li>About</li>
                                <li>Contact</li>
                            </ul>
                        </nav>
                    </CenterContainer>
                </WideContainer>
            </div>
        )}
}

export default Footer;