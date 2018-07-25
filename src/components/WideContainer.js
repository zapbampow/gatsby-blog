import React from "react";
import styles from './containerStyles.module.css';

export default (props) => (

  (props.className) 
    ? <div style={{ width: '100%', display:'flex', justifyContent:'center' }} className={styles[props.className]} >{props.children}</div>
    : <div style={{ width: '100%', display:'flex', justifyContent:'center' }} className='' >{props.children}</div> 
);

