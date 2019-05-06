import React from 'react';


const withClass = props => (
    <div className={props.classess}>
        {props.children}
    </div>

);


export default withClass;