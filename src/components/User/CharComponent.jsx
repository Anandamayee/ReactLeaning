import React, { Component } from 'react'

import './User.css'

const charComponent = (props) => {
    return (
        <div className="characters" onClick={props.click}>{props.characters}
        </div>
    );

}

export default charComponent;