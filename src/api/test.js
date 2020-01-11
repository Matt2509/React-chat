//import React from 'react';
import axios from 'axios';
//const axioss = require('axios');

/*
export default class PersonList extends React.Component {
  state = {
    persons: []
  }

    async function test() {
        axios.get(`http://www.omdbapi.com/?apikey=b502738f&s=matrix`)
            .then(res => {
                const persons = res.data;
                this.setState({ persons });
                console.log(persons);
            })
    }

  render() {
    return (
        <ul>
          { this.state.persons.map(person => <li>{person.name}</li>)}
        </ul>
    )
  }
}
*/

async function test() {
    console.log("Yolooooooooo");
    axios.get(`http://www.omdbapi.com/?apikey=b502738f&s=matrix`)
        .then(res => {
            const persons = res.data;
            this.setState({ persons });
            console.log(persons);
        })


}

export default test
