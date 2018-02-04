import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import PlayerCard from './PlayerCard.js';

export default class PlayerInfo extends Component {
  constructor(props){
    super(props);

    this.state= {
      firstName: '',
      lastName: '',
      imgURL: '',
      team: '',
      number: '',
      position: ''
    }
    this.handleFirstName= this.handleFirstName.bind(this);
    this.handleLastName= this.handleLastName.bind(this);
    this.handleTeam= this.handleTeam.bind(this);
    this.handleNumber= this.handleNumber.bind(this);
    this.handlePosition= this.handlePosition.bind(this);
    this.addToTeam= this.addToTeam.bind(this);
  }

  handleFirstName(input){
    this.setState({ firstName: input });
  }

  handleLastName(input){
    this.setState({ lastName: input });
  }

  handleURL(input){
    this.setState({ imgURL: input });
  }

  handleTeam(input){
    this.setState({ team: input });
  }

  handleNumber(input){
    this.setState({ number: input });
  }

  handlePosition(input){
    this.setState({ position: input });
  }

  addToTeam(){
    const player= {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      imgURL: this.state.imgURL,
      team: this.state.team,
      number: this.state.number,
      position: this.state.position
    };

    this.props.addPlayer(player);

    this.setState({
      firstName: '',
      lastName: '',
      imgURL: '',
      team: '',
      number: '',
      position: ''
    });

    Keyboard.dismiss();
  }

  render(){
    return(
      <View style={styles.infoContainer}>
          <Text style={styles.inputHeader}>First Name</Text>
          <TextInput
            style={styles.inputField}
            placeholder= 'First Name'
            value= {this.state.firstName}
            onChangeText={ input=> this.handleFirstName(input) }
          />

        <Text style={styles.inputHeader}>Last Name</Text>
          <TextInput
            style={styles.inputField}
            placeholder= 'Last Name'
            value= {this.state.lastName}
            onChangeText={ input=> this.handleLastName(input) }
          />

        <Text style={styles.inputHeader}>Image URL</Text>
          <TextInput
            style={styles.inputField}
            placeholder= 'Image URL...'
            value= {this.state.imgURL}
            onChangeText={ input=> this.handleURL(input) }
          />

        <Text style={styles.inputHeader}>Team</Text>
        <TextInput
          style={styles.inputField}
          placeholder= 'Team'
          value= {this.state.team}
          onChangeText={ input=> this.handleTeam(input) }
        />

      <Text style={styles.inputHeader}>Player Number</Text>
        <TextInput
          style={styles.inputField}
          placeholder= '#'
          value= {this.state.number}
          onChangeText={ input=> this.handleNumber(input) }
        />

      <Text style={styles.inputHeader}>Position</Text>
        <TextInput
          style={styles.inputField}
          placeholder= 'Position'
          value= {this.state.position}
          onChangeText={ input=> this.handlePosition(input) }
        />

      <TouchableOpacity
        style= {styles.button}
        onPress= { ()=> {this.addToTeam()} }>
        <Text style= {{ color: 'white', fontWeight: 'bold' }}>ADD PLAYER</Text>
      </TouchableOpacity>
    </View>
    )
  }
}

const styles= StyleSheet.create({
  infoContainer: {
    marginTop: 30,
    flex: 0.9,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#111'
  },
  inputHeader: {
    fontSize: 16,
    color: '#F2F2F2'
  },
  inputField: {
    borderStyle: 'solid',
    borderColor: '#122B4F',
    borderWidth: 2,
    height: 30,
    width: '75%',
    color: '#F2F2F2'
  },
  button: {
    height: 35,
    width: 120,
    margin: 'auto',
    backgroundColor: '#122B4F',
    borderRadius: 5,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
