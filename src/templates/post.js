import React, { Component } from "react"
import CenterContainer from "../components/CenterContainer";
import WideContainer from '../components/WideContainer';
import Sidebar from '../components/Sidebar/Sidebar'
import Footer from '../components/Footer/Footer'
import styles from './styles.module.css';


class PostTemplate extends Component {
  render() {
    const post = this.props.data.post

    return (
      <div style={{width:'100%', display:'flex', flexDirection:'column', alignItems:'center'}}>
        <CenterContainer className="post-page" >
          <div style={{width:'66%'}} >
            <div style={{ maxWidth:'100%', height:'auto' }}>
              <img src={post.featured_media.source_url} alt={post.featured_media.alt_text} />
            </div>
            
            <h1 dangerouslySetInnerHTML={{ __html: post.title }} style={{ marginTop:'0.5em' }} />
            
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>

          <Sidebar />
        </CenterContainer>

        <WideContainer>
          <Footer data={this.props.data.footer}/>
        </WideContainer>
      </div>
    )
  }
}


export default PostTemplate

export const postQuery = graphql`
  query postQuery($id: String!) {
    post: wordpressPost(id: { eq: $id }) {
      title
      content
      featured_media {
        source_url
      }
      author {
          name
      }
    }

    footer: allWordpressPost(sort: {fields: [date], order: DESC,}, limit: 3){
      edges {
          node {
              id
              title
              slug
          }
      }
    }
  }
`