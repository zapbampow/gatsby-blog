import React, { Component } from "react"
import CenterContainer from "../components/CenterContainer";
import WideContainer from '../components/WideContainer';


class PostTemplate extends Component {
  render() {
    const post = this.props.data.wordpressPost

    return (
        <CenterContainer>
            <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
            <p dangerouslySetInnerHTML={{ __html: post.author.id }} />
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
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
      author {
          id
      }
    }
  }
`