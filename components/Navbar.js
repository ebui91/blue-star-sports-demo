import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';


export default class Navbar extends React.Component {
  render(){
    return(
      <View style={ styles.navContainer }>
        <Image
          style={{ height: 35, width: 35, marginLeft: 10 }}
          source={ require('../assets/images/burger.png') }
        />
        <Text style={ styles.whiteText }>Blue Star Sports</Text>
      </View>
    )
  }
}


const styles= StyleSheet.create({
  navContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '15%',
    width: '100%',
    backgroundColor: '#122B4F'
  },
  whiteText: {
    fontSize: 28,
    color: '#F2F2F2',
    marginRight: 15
  }
});
