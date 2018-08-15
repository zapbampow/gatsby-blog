import React from 'react';
import Footer from '../components/Footer/Footer';

export default ({data}) => {
return (<div style={{width:'100%', display:'flex', flexDirection:'column', alignItems:'center'}}>
    <div style={{width:'30%'}}>
            <h1>Contact Story Nosh!</h1>

            <form name="contact" method="POST" netlify>
            <input type="hidden" name="form-name" value="contact" />

                <p>
                    <label>Your Name: <input type="text" name="name" required style={{width:'100%'}}/></label>   
                </p>
                <p>
                    <label>Your Email: <input type="email" name="email" required style={{width:'100%'}}/></label>
                </p>
                <p>
                    <label>Message: <textarea name="message" required style={{width:'100%'}}></textarea></label>
                </p>
                <p>
                    <button type="submit">Send</button>
                </p>
            </form>
        
    </div>

    <Footer data={data.footer} />
</div>
)}

export const footerQuery = graphql`
query footerQuery {
    
      
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
`