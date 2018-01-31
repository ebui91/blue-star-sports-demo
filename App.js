import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navbar from './components/Navbar.js';
import PlayerInfo from './components/PlayerInfo.js';
import Team from './components/Team.js';

export default class App extends React.Component {
  constructor(props){
    super(props);

    this.state= {
      playerList: [
        { firstName: 'Ezekiel', lastName: 'Elliot', imgURL: 'http://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/3051392.png&w=350&h=254', team: 'Dallas Cowboys', number: '21', position: 'RB' }
      ]
    }
    this.addPlayer= this.addPlayer.bind(this);
  }

  addPlayer(player){
    this.setState({ playerList: [...this.state.playerList, player] });
  }

  render() {
    return (
      <View style= { styles.container }>
        <Navbar />
        <PlayerInfo playerList= {this.state.playerList} addPlayer= {this.addPlayer}/>
        <Team playerList= {this.state.playerList} />
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
