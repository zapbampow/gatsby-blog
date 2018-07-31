import React, { Component } from "react"
import CenterContainer from "../components/CenterContainer"


class PageTemplate extends Component {
  render() {
    const currentPage = this.props.data.wordpressPage

    return (
      <CenterContainer className="post-page" >
        <div style={{width:'760px'}} >
          <h1 dangerouslySetInnerHTML={{ __html: currentPage.title }} />
          <div dangerouslySetInnerHTML={{ __html: currentPage.content }} />
        </div>

        <div style={{width:'380px', height:'500px', backgroundColor:'red'}} ></div>

      </CenterContainer>
    )
  }
}

export default PageTemplate

export const pageQuery = graphql`
  query pageQuery($id: String!) {
    wordpressPage(id: { eq: $id }) {
      title
      content
      date(formatString: "MMMM DD, YYYY")
    }
  }
`