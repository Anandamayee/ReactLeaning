
import React, { Component, Fragment } from 'react'
import './Person.css'
import Radium from 'radium'
import PropTypes from 'prop-types'
import Auxiliary from '../../../hoc/Auxiliary.js';
import withClass from '../../../hoc/WithClass'
import AuthContext from '../../../context/auth-context'


// props - Parameters , reloads dom on change
// children-other than params inside tags
// const person = (props) => {
class Person extends Component {

    constructor(props) {
        super(props)
        this.inputElementRef = React.createRef();
    }

    static contextType = AuthContext;

    componentDidMount() {
        this.inputElementRef.focus();
        console.log(this.context.authenticated);

    }
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
                {/* <AuthContext.Consumer>
                    {
                        (context) => 
                        context.authenticated ?
                            <p>Authenticated</p> :<p>Please login</p>
                    }
                </AuthContext.Consumer> */}

                {this.context.authenticated ?
                    <p>Authenticated</p> : <p>Please login</p>}

                {/* {this.props.isAuth ?
                    <p>Authenticated</p> : 'please login'} */}
                <p onClick={this.props.click}>
                    I'm {this.props.name} and
                {this.props.age} years old</p>
                <p  > {this.props.children}</p>
                <input
                    type='text'
                    ref={(inputEl) => { this.inputElementRef = inputEl }}
                    onChange={this.props.change}
                    value={this.props.name} />
            </Fragment>
            // </Auxiliary>
            // </div>
        )
    }
    // };
}

Person.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    clicke: PropTypes.func,
    change: PropTypes.func
};
// export default Radium(Person);
export default withClass(Person, 'Person');