import React from 'react';
import Radium from 'radium';
import classes from './cockpit.css'

const cockpit = (props) => {
   
    let assignableClasses = [];
    if (props.persons.length <= 2) {
        assignableClasses.push(classes.red);
    }
    if (props.persons.length <= 1) {
        assignableClasses.push(classes.bold);
    }
    let buttonClass='';
    buttonClass=classes.Red;
    if(props.sh)
    return (
        <div className={classes.Cockpit}>
            <h1 className={assignableClasses.join(' ')}> Hello There</h1>
            <button
                onClick={props.togggled}
                className={cockpit.button}
            >Toggle Persons</button>
        </div>
    );
}

export default Radium(cockpit);