import React, {Component} from 'react';
import MainFeatured from '../../components/MainFeatured/MainFeatured';
import CatSection from '../../components/CatSection/CatSection';
import CenterContainer from '../../components/CenterContainer';
import Footer from '../../components/Footer/Footer';



export default ( {data} ) =>  {
    return (
        <div style={{width:'100%'}}>
            <CatSection data={data.food} sectionTitle='Food' />
            <Footer data={data.footer} />
        </div>
    )

}

export const foodQuery = graphql`
query foodQuery {
    food: allWordpressPost (filter: {categories: {name: {eq: "Food"}}}, sort: {fields: [date], order: DESC,}) {
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
