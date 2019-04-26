import React, { Component } from 'react';
import './App.css';
import Person from '../components/Persons/Person/Person.jsx';
import '../components//Persons/Person/Person.css';
import UserInput from '../components/User/UserInput.jsx'
import UserOutput from '../components/User/UserOutput.jsx';
import Validation from '../components/User/Validation.jsx';
import CharComponent from '../components/User/CharComponent.jsx';
import '../components/User/User.css';
import Radium,{StyleRoot} from 'radium'
import Persons from '../components/Persons/Persons';

class App extends Component {

  // state- reserved property . if changes reload the dom can be used with class base component 
  state = {
    persons: [
      {
        id: 'abc', name: 'andy', age: 24
      },
      {
        id: 'cde', name: 'sandy', age: 26
      },
      {
        id: 'efg', name: 'mandy', age: 27
      }
    ],
    showPersons: false,
    userName: '',
    charcters: [{
      charcter: '',
      index: 0
    }],
    charcatersEntered: null

  }
  switchNameHandler = (newName) => {
    console.log('was clicked');
    this.setState({
      persons:
        [{
          name: newName, age: 24
        },
        {
          name: 'sandy', age: 26
        },
        {
          name: 'mandy', age: 27
        }]
    })
  }
  nameChangedHandler = (event, id) => {
    let personIndex =
      this.state.persons.findIndex(p => {
        return p.id === id
      })
    let persons = [...this.state.persons];
    persons[personIndex].name = event.target.value
    this.setState({ persons: persons });
  }
  togglePersonHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    });
  }

  deletePersonHandler = (personIndex) => {
    // const persons=this.state.persons.slice();
    let persons = [...this.state.persons];
    persons.splice(personIndex, 1)
    this.setState({ persons: persons });
  }

  nameEnteredHandler = (event) => {
    this.setState({ userName: event.target.value })
  }
  removeCharcter(inputIndex) {
    let inputs = [...this.state.userName]
    inputs.splice(inputIndex, 1);
    this.setState({ userName: inputs.join('') })
  }
  render() {
    

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div >
         <Persons 
         persons={this.state.persons}
         clicked={this.deletePersonHandler}
         changed={this.nameChangedHandler}
         />
          {/* <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
            click={this.switchNameHandler.bind(this, 'anandamayee!')}
            change={this.nameChangedHandler}
          >Dancing</Person>
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
          />
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}
          /> */}
        </div>
      )
      style.background = 'red'
      style[':hover']= {
        background: 'salmon',
        color: 'black'
      }

    }
    let validName = null;
    if (this.state.userName.length > 15 || this.state.userName.length < 5) {
      validName = (
        <Validation userName={this.state.userName} />
      )
    }

    let char =
      this.state.userName.split('').map((char, index) => {
        return <CharComponent characters={char}
          click={this.removeCharcter.bind(this, index)}
        />
      })
    

    return (
      <StyleRoot>
      <div className="App">
       
        {/* () => this.switchNameHandler('anandamayee') */}

        {/* this.state.showPersons ?

      : null
      } */}


        {persons}


        {/* 
        <UserInput
          userName={this.state.userName}
          change={this.nameEnteredHandler}
        ></UserInput>
        <UserOutput
          userName={this.state.userName}
        />
        {validName}
        {char} */}

      </div>
      </StyleRoot>
    );
    //   return React.createElement('div',
    //     { className: 'App' },
    //     React.createElement('h1',
    //       null, 'Hi There'));
  }
}
export default Radium(App);

// // userState- doesn't merge other states 
// import React, { Component, useState } from 'react';
// import './App.css';
// import Person from './Person/Person.jsx'
// // class App extends Component {
// const app = props => {
//   const [personsState, setpersonsState] = useState({
//     persons: [
//       {
//         name: 'andy', age: 24
//       },
//       {
//         name: 'sandy', age: 26
//       }
//     ]
//   });
//   const switchNameHandler = () => {
//     console.log('was clicked');
//     setpersonsState({
//       persons:
//         [{
//           name: 'anandamayee', age: 24
//         },
//         {
//           name: 'sandy', age: 26
//         }]
//     })
//   }
//   // render() {
//   return (
//     <div className="App">
//       <h1> Hello There</h1>
//       <button onClick={switchNameHandler}>Switch Name</button>
//       <Person name={personsState.persons[0].name}
//         age={personsState.persons[0].age}  >Dancing</Person>
//       <Person name={personsState.persons[1].name}
//         age={personsState.persons[1].age} />
//     </div>
//   );
//   //   return React.createElement('div',
//   //     { className: 'App' },
//   //     React.createElement('h1',
//   //       null, 'Hi There'));
// }
// // }
// export default app;
