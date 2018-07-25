import React, {Component} from 'react';
import MainFeatured from '../components/MainFeatured/MainFeatured';
import Section from '../components/Section/Section';
import CenterContainer from '../components/CenterContainer';



export default ( {data} ) =>  {
    return (
        <div style={{width:'100%'}}>
            <MainFeatured data={data.mainSection} />
            <Section data={data.storiesSection} sectionTitle='Stories' />
            <Section data={data.foodSection} sectionTitle='Food' />
            <Section data={data.recipesSection} sectionTitle='Recipes' />
        </div>
    )

}

export const homepageQuery = graphql`
query homepageQuery {
    mainSection: allWordpressPost(sort: {fields: [date], order: DESC,}, limit: 3) {
      edges {
        node {
          id
          title
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
  
  	recipesSection: allWordpressPost (filter: {categories: {name: {eq: "Recipes"}}}, sort: {fields: [date], order: DESC,}, limit: 3) {
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
  
  	storiesSection: allWordpressPost (filter: {categories: {name: {eq: "Stories"}}}, sort: {fields: [date], order: DESC,}, limit: 3) {
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
  
  	foodSection: allWordpressPost (filter: {categories: {name: {eq: "Food"}}}, sort: {fields: [date], order: DESC,}, limit: 3) {
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
}
`;
