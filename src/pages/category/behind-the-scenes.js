import React from 'react';
import CatSection from '../../components/CatSection/CatSection';
import Footer from '../../components/Footer/Footer';



export default ( {data} ) =>  {
    return (
        <div style={{width:'100%'}}>
            <CatSection data={data.behindthescenes} sectionTitle='Behind the Scenes' />
            <Footer data={data.footer} />
        </div>
    )

}

export const behindthescenesQuery = graphql`
query behindthescenesQuery {
    behindthescenes: allWordpressPost (filter: {categories: {name: {eq: "Behind the Scenes"}}}, sort: {fields: [date], order: DESC,}) {
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
            name
            link
          }
        }
      }
      }
      
      footer: allWordpressPost(sort: {fields: [date], order: DESC,}, limit: 3) {
        edges {
          node {
            id
            title
            date (formatString: "MMM DD, YYYY")
            slug            
          }
        }
      }

}
`;
