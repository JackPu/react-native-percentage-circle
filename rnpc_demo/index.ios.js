/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import PercentageCircle from 'react-native-percentage-circle';



class rnpc_demo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Use React Native Percentage Circle
        </Text>
        <View style={styles.row}>
          <View style={styles.item}>
            <PercentageCircle radius={35} percent={50} color={"#3498db"}></PercentageCircle>  
            <Text style={[styles.percentText]}> 50% </Text>
          </View>
          <View style={styles.item}>
            <PercentageCircle radius={35} percent={30} color={"#f39c12"}></PercentageCircle>  
            <Text style={[styles.percentText]}> 30% </Text>
          </View>
          <View style={styles.item}>
            <PercentageCircle radius={35} percent={75} color={"#2ecc71"}></PercentageCircle>  
            <Text style={[styles.percentText]}> 75% </Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.item}>
            <PercentageCircle radius={60} percent={90} borderWidth color={"#34495e"}></PercentageCircle>  
            <Text style={[styles.percentText]}> 90% </Text> 
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.item}>
            <PercentageCircle radius={60} percent={100} color={"#9b59b6"}></PercentageCircle>  
            <Text style={[styles.percentText]}> 100% </Text> 
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop:66,
    backgroundColor: '#fff',
  },
  welcome: {
    fontSize: 16,
    textAlign: 'center',
    margin: 20,
  },
  row:{
    flexDirection:'row',
    alignItems:'center',
    flexWrap:'wrap',
    marginBottom:40,
  },
  item:{
    flex:.33,
    justifyContent:'center',
    alignItems:'center',
  },
  percentText:{
    fontSize:15,
    paddingTop:10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('rnpc_demo', () => rnpc_demo);
