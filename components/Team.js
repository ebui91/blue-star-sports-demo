import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PlayerCard from './PlayerCard.js';


export default class Team extends Component {
  constructor(props){
    super(props);
  }

  render(){
    const players= this.props.playerList.map((player,i)=> {
      return(
        <PlayerCard key= {i}
          firstName= {player.firstName}
          lastName= {player.lastName}
          imgURL= {player.imgURL}
          team= {player.team}
          number= {player.number}
          position= {player.position}
        />
      )
    });

    return(
      <View style= {styles.teamContainer}>
        <Text>TEAM</Text>
        {players}
      </View>
    )
  }
}

const styles= StyleSheet.create({
  teamContainer: {
    flex: 3
  }
});
