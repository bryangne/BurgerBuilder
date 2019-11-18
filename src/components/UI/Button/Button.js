import React from 'react';
import classes from './Button.module.css';
const button = (props) => (
    // btnType will specify what style this button will have
    // based on Button.module.css
    <button 
        className={[classes.Button, classes[props.btnType]].join(' ')}
        onClick={props.clicked}>{props.children}</button>
);

export default button;