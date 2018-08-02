import React, { Component } from "react"
import CenterContainer from "../components/CenterContainer"
import WideContainer from '../components/WideContainer'
import Sidebar from "../components/Sidebar/Sidebar"
import Footer from "../components/Footer/Footer"


class PageTemplate extends Component {
  render() {
    const currentPage = this.props.data.page

    return (
      <div style={{width:'100%', display:'flex', flexDirection:'column', alignItems:'center'}}>
        <CenterContainer className="post-page" >
          <div style={{width:'66%'}} >
            <h1 dangerouslySetInnerHTML={{ __html: currentPage.title }} />
            <div dangerouslySetInnerHTML={{ __html: currentPage.content }} />
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

export default PageTemplate

export const pageQuery = graphql`
  query pageQuery($id: String!) {
    page: wordpressPage(id: { eq: $id }) {
      title
      content
      date(formatString: "MMMM DD, YYYY")
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