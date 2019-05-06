
import React, { Component ,Fragment} from 'react'
import './Person.css'
import Radium from 'radium'
import Auxiliary from '../../../hoc/Auxiliary.js'



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

            // <div className="Person" style={style} >
            // <Auxiliary>
            
            // same as Auxiliary
            <Fragment>
                <p onClick={this.props.click}>I'm {this.props.name} and {this.props.age} years old</p>
                <p  > {this.props.children}</p>
                <input type='text' onChange={this.props.change}
                    value={this.props.name} />
            </Fragment>
            // </Auxiliary>
            // </div>
        )
    }
    // };
}
export default Radium(Person);