import React from 'react';
// import './Person/Person.css'
const validation = (props) => {
    return (
        <div className='Person'>
            {props.userName.length < 5 ? 'Text too short' : null}
            {props.userName.length > 15 ? 'Text too large' : null}
        </div>
    );
}

export default validation;