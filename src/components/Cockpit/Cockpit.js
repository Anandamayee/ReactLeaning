import React, { useEffect, useState, useRef } from 'react';
import Radium from 'radium';
import classes from './Cockpit.module.css'
import AuthContext from '../../context/auth-context'
const cockpit = (props) => {
    let assignableClasses = [];
    let buttonClass = '';
    if (props.showPersons) buttonClass = classes.Red;
    if (props.personsLength <= 2) {
        assignableClasses.push(classes.red);
    }
    if (props.personsLength <= 1) {
        assignableClasses.push(classes.bold);
    }
    // useEffect(() => {
    //     console.log("cockpit js , useEffect");
    //     setTimeout(() => {
    //         alert('saved data')
    //     }, 1000);

    // }, [props.persons]) 
    //condition

    const toogleButtonRef = useRef(null);
    //only once
    useEffect(() => {
        console.log("cockpit js , useEffect");
        setTimeout(() => {
            alert('saved data')
            toogleButtonRef.current.click();
        }, 1000);

        return () => {
            // clearTimeout(timer);
            console.log('cock pit use effect clean up');
        }
    }, []);
    useEffect(() => {
        console.log("cockpit js ,2nd useEffect");
        return () => {
            console.log('cock pit 2nd use effect clean up');
        }
    });
    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <h1 className={assignableClasses.join(' ')}> Hello There</h1>
            <button
                ref={toogleButtonRef}
                onClick={props.togggled}
                className={buttonClass}
            >Toggle Persons</button>
            <AuthContext.Consumer>
                {
                    context => <button onClick={context.login}>Login</button>
                }
            </AuthContext.Consumer>

        </div>
    );
}
export default React.memo(cockpit);