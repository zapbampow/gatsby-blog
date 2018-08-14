// import React, { Component } from "react"
// import CenterContainer from "../components/CenterContainer";
// import WideContainer from '../components/WideContainer';
// import Sidebar from '../components/Sidebar/Sidebar'
// import Footer from '../components/Footer/Footer'
// import styles from './styles.module.css';

// const IndexPage = ({ data, pathContext }) => {
//     const { group, index, first, last, pageCount } = pathContext;
//     const previousUrl = index - 1 == 1 ? "" : (index - 1).toString();
//     const nextUrl = (index + 1).toString();
   
//     return (
//       <div>
//         <h4>{pageCount} Posts</h4>
   
//         {group.map(({ node }) => (
//           <div key={node.id} className="blogListing">
//             <div className="date">{node.date}</div>
//             <Link className="blogUrl" to={node.slug}>
//               {node.title}
//             </Link>
//             <div>{node.excerpt}</div>
//           </div>
//         ))}
//         <div className="previousLink">
//           <NavLink test={first} url={previousUrl} text="Go to Previous Page" />
//         </div>
//         <div className="nextLink">
//           <NavLink test={last} url={nextUrl} text="Go to Next Page" />
//         </div>
//       </div>
//     );
//   };
//   export default IndexPage;