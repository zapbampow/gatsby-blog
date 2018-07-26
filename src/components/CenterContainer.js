import React from "react";
import styles from './containerStyles.module.css';

export default (props) => (

    (props.className) 
      ? <div style={{ width:1140 }} className={styles[props.className]} >{props.children}</div>
      : <div style={{ width:1140 }} className='' >{props.children}</div>
);