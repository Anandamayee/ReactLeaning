
import React, { Component,PureComponent } from 'react'
import Person from './Person/Person.jsx'
// const persons = (props) => 
class Persons extends PureComponent {

    // static getDerivedStateFromProps(props,state){
    //     console.log("personss  getDerivedStateFromProps");
    //     return state;
    // }

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log("persons  shouldComponentUpdate", nextProps);
    //     if (nextProps.persons !== this.props.persons ||
    //         nextProps.changed !== this.props.changed ||
    //         nextProps.clicked !== this.props.clicked) {
    //         return true;
    //     }
    //     return false
    // }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("persons  getSnapshotBeforeUpdate");
        return null;
    }

    componentDidUpdate() {
        console.log("persons  componentDidUpdate");
    }
    render() {
        console.log("personsjs rendering");
        return this.props.persons.map((person, index) => {
            return (<Person
                name={person.name}
                age={person.age}
                key={person.id}
                change={(event) => this.props.changed(event, person.id)}
                click={this.props.clicked.bind(this, index)}
                isAuth={this.props.isAuthenticated}
            />);
        })
    }
};


export default Persons;