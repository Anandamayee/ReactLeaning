import React from 'react';


const userInput = (props) =>{
    return(
        <div className='Person'>
            <h1>Enter Your userName</h1>
            <input type="text" 
             onChange={props.change}
            value={props.userName}/>
        </div>
    );
}

export default userInput;