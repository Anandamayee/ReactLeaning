
import React, { Component } from 'react'
import './Person.css'
import Radium from 'radium'


// class Person extends Component {

//     render() {
//         return (
//             <div>
//                 <p>Person</p>
//             </div>
//         );
//     }
// }

// props - Parameters , reloads dom on change
// children-other than params inside tags
const person = (props) => {
    const style = {
        '@media(min-width :500px)': {
            width:'450px'
        }
    }

    return (
        <div className="Person" style={style}>
            <p onClick={props.click}>I'm {props.name} and {props.age} years old</p>
            <p> {props.children}</p>
            <input type='text' onChange={props.change}
                value={props.name} />
        </div>
    )
};

export default Radium(person);