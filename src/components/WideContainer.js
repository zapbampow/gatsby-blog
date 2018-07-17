import React from "react";
import styles from './containerStyles.module.css';

export default (props) => (

  (props.className) 
    ? <div style={{ margin: 0, width: '100%', display:'flex', justifyContent:'center' }} className={styles[props.className]} >{props.children}</div>
    : <div style={{ margin: 0, width: '100%', display:'flex', justifyContent:'center' }} className='' >{props.children}</div> 
);

