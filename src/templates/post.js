import React, { Component } from "react"
import CenterContainer from "../components/CenterContainer";
import WideContainer from '../components/WideContainer';
import styles from './styles.module.css';


class PostTemplate extends Component {
  render() {
    const post = this.props.data.wordpressPost

    return (
        <CenterContainer className="post-page" >
          <div style={{width:'760px'}} >
            <h1 dangerouslySetInnerHTML={{ __html: post.title }} style={{ marginTop:'0.5em' }} />
            <div style={{ maxWidth:'100%', height:'auto' }}>
              <img src={post.featured_media.source_url} alt={post.featured_media.alt_text} />
            </div>
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>

          <div style={{width:'380px', height:'500px', backgroundColor:'red'}} />
        </CenterContainer>
    )
  }
}


export default PostTemplate

export const postQuery = graphql`
  query postQuery($id: String!) {
    wordpressPost(id: { eq: $id }) {
      title
      content
      featured_media {
        source_url
      }
      author {
          name
      }
    }
  }
`