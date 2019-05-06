import React, { Component } from 'react';
import './App.css';
import Person from '../components/Persons/Person/Person.jsx';
import '../components//Persons/Person/Person.css';
import UserInput from '../components/User/UserInput.jsx'
import UserOutput from '../components/User/UserOutput.jsx';
import Validation from '../components/User/Validation.jsx';
import CharComponent from '../components/User/CharComponent.jsx';
import '../components/User/User.css';
import Radium, { StyleRoot } from 'radium'
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import WithClass from '../hoc/WithClass';

class App extends Component {

  constructor(props) {
    console.log("constructor  :", props);
    super(props);
  }
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
    showCockPit: true,
    charcatersEntered: null
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps  :", props);
    return state;
  }
  componentDidMount() {
    console.log("componentDidMount  :");
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log(" app js shouldComponentUpdate");

    return true

  }
  componentDidUpdate() {
    console.log(" app js componentDidUpdate");
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
    console.log("render  :");
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
        />
      )
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
        {/* <div className="App"> */}
        <WithClass classess="App">
          <button onClick={() => {
            this.setState({ showCockPit: !this.state.showCockPit })
          }}
          >ToggleCockPit
      </button>
          {this.state.showCockPit ?
            <Cockpit
              title={this.props.appTitle}
              showPersons={this.state.showPersons}
              personsLength={this.state.persons.length}
              togggled={this.togglePersonHandler}
            />
            : null}
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

        </WithClass>
        {/* </div> */}
      </StyleRoot >
    );
  }
}
export default Radium(App);
