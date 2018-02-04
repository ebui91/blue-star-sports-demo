import React from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import Navbar from './components/Navbar.js';
import PlayerInfo from './components/PlayerInfo.js';
import Team from './components/Team.js';

export default class App extends React.Component {
  constructor(props){
    super(props);

    this.state= {
      playerList: []
    }
    this.addPlayer= this.addPlayer.bind(this);
  }

  componentWillMount(){
    fetch('http://localhost:3000/db').then(res=> res.json())
    .then(data=> this.setState({ playerList: data.team }));
  }

  addPlayer(player){
    fetch('http://localhost:3000/team', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        "firstName": player.firstName,
        "lastName": player.lastName,
        "imgURL": player.imgURL,
        "team": player.team,
        "number": player.number,
        "position": player.position
      })
    }).then(res=> res.json())
      .then(data=> this.setState({ playerList: data.tean }));

      Alert.alert('Player Added!');
    this.setState({ playerList: [...this.state.playerList, player] });
  }

  render() {
    return (
      <View style= { styles.container }>
        <Navbar />
        <ScrollableTabView
          tabBarBackgroundColor= '#666666'
          tabBarActiveTextColor= '#0010A3'
        >
          <PlayerInfo playerList= {this.state.playerList} addPlayer= {this.addPlayer} tabLabel='Add Player'/>
          <Team playerList= {this.state.playerList} tabLabel='View Team'/>
        </ScrollableTabView>
      </View>
    );
  }
}

const styles= StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111'
  },
});
