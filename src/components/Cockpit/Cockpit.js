import React, { useEffect, useState } from 'react';
import Radium from 'radium';
import classes from './Cockpit.module.css'
const cockpit = (props) => {
    let assignableClasses = [];
    let buttonClass = '';
    if (props.showPersons) buttonClass = classes.Red;
    if (props.persons.length <= 2) {
        assignableClasses.push(classes.red);
    }
    if (props.persons.length <= 1) {
        assignableClasses.push(classes.bold);
    }
    // useEffect(() => {
    //     console.log("cockpit js , useEffect");
    //     setTimeout(() => {
    //         alert('saved data')
    //     }, 1000);

    // }, [props.persons]) 
    //condition

    //only once
    useEffect(() => {
        console.log("cockpit js , useEffect");
        setTimeout(() => {
            alert('saved data')
        }, 1000);
        return () => {
            console.log('cock pit use effect clean up');
        }
    }, [])
    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <h1 className={assignableClasses.join(' ')}> Hello There</h1>
            <button
                onClick={props.togggled}
                className={buttonClass}
            >Toggle Persons</button>
        </div>
    );
}
export default cockpit;