
import React, { Component } from 'react'
import './Person.css'
import Radium from 'radium'



// props - Parameters , reloads dom on change
// children-other than params inside tags
// const person = (props) => {
class Person extends Component {
    render() {
        const style = {
            '@media(min-width :500px)': {
                width: '450px'
            }
        }
        console.log("personjs rendering");
        return (
            <div className="Person" style={style} >
                <p onClick={this.props.click}>I'm {this.props.name} and {this.props.age} years old</p>
                <p> {this.props.children}</p>
                <input type='text' onChange={this.props.change}
                    value={this.props.name} />
            </div>
        )
    }
    // };
}
export default Radium(Person);