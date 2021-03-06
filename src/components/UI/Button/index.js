import React from 'react';

import classes from './Button.module.css';

const button = ({clicked,btnType,children}) => (
    <button
        className={[classes.Button, classes[btnType]].join(' ')}
        onClick={clicked}>{children}</button>
);

export default button;