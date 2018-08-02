import React from 'react';
import CenterContainer from '../components/CenterContainer';
import WideContainer from '../components/WideContainer';
import Footer from '../components/Footer/Footer';
import Sidebar from '../components/Sidebar/Sidebar';
import shortenExcerpt from '../utils/shortenExcerpt';

export default ( {data} ) =>  {
    return (
        <div style={{width:'100%', display:'flex', flexDirection:'column', alignItems:'center'}}>
            <CenterContainer className="post-page" >
                <div style={{width:'66%'}} >

                {data.posts.edges.map(({node}, index) => {
                    let excerpt = shortenExcerpt(node.excerpt);

                    return(
                        <div style={{display:'flex', justifyContent:'center'}}>
                        <div style={{ width:'33%', height:'auto' }}>
                            <img src={node.featured_media.source_url} alt={node.featured_media.alt_text} />
                        </div>

                        <div style={{width:'66%'}}>
                            <h1 dangerouslySetInnerHTML={{ __html: node.title }} style={{ marginTop:'0.5em' }} />
                            <p dangerouslySetInnerHTML={{__html:node.date}}></p>
                        </div>
                    </div>
                    )
                    })
                }
                    

  
                </div>

                <Sidebar />
            </CenterContainer>

            <WideContainer>
                <Footer data={data.footer}/>
            </WideContainer>
        </div>
    )
}


export const allPostsQuery = graphql`
query allPostQuery {
    posts: allWordpressPost {
      edges {
        node {
          id
          title
          excerpt
          date (formatString: "MMM DD, YYYY")
          featured_media {
            source_url
            alt_text
          }
          slug
          categories {
            id
            name
            link
          }
          
        }
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
`;