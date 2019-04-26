import React from 'react';


const userOutput = (props) => {

    return (
        <div className='Person'>
            <p>
              EntertedTextLength: {props.userName.length}  
            </p>
        </div>
    );
}

export default userOutput;