import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default class PlayerCard extends Component{
  constructor(props){
    super(props);
  }
  render(){
    const uri= this.props.imgURL;
    return(
      <View style= {styles.cardContainer}>
        <Image
          style= {{ height: 75, width: 75 }}
          source= {{ uri: uri }}
        />
      <Text style={{ color: '#F2F2F2' }}>{this.props.firstName + ' ' + this.props.lastName}</Text>
        <Text style={{ color: '#F2F2F2' }}>{this.props.team}</Text>
        <Text style={{ color: '#F2F2F2' }}>#{this.props.number}</Text>
        <Text style={{ color: '#F2F2F2' }}>{this.props.position}</Text>
      </View>
    )
  }
}

const styles= StyleSheet.create({
  cardContainer: {
    height: 80,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderStyle: 'solid',
    borderColor: '#0010A3',
    borderWidth: 1,
    backgroundColor: '#122B4F',
  }
});
