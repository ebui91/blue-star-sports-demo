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
        <View style={styles.infoCol}>
          <TextInput
            style={styles.inputField}
            placeholder= 'First Name'
            value= {this.state.firstName}
            onChangeText={ input=> this.handleFirstName(input) }
          />

          <TextInput
            style={styles.inputField}
            placeholder= 'Last Name'
            value= {this.state.lastName}
            onChangeText={ input=> this.handleLastName(input) }
          />

          <TextInput
            style={styles.inputField}
            placeholder= 'Image URL...'
            value= {this.state.imgURL}
            onChangeText={ input=> this.handleURL(input) }
          />
      </View>

      <View style={styles.infoCol}>
        <TextInput
          style={styles.inputField}
          placeholder= 'Team'
          value= {this.state.team}
          onChangeText={ input=> this.handleTeam(input) }
        />

        <TextInput
          style={styles.inputField}
          placeholder= '#'
          value= {this.state.number}
          onChangeText={ input=> this.handleNumber(input) }
        />

        <TextInput
          style={styles.inputField}
          placeholder= 'Position'
          value= {this.state.position}
          onChangeText={ input=> this.handlePosition(input) }
        />
      </View>

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
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'grey'
  },
  infoCol: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch'
  },
  inputField: {
    borderStyle: 'solid',
    borderColor: '#122B4F',
    borderWidth: 1,
    width: '30%',
    margin: 3,
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
