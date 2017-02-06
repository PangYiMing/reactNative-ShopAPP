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
  View,
  TouchableOpacity
} from 'react-native';

var HomeDetail = require('./XMGHomeDetail');

var Home = React.createClass({
  render() {
    return (
      <View style={styles.container}>
          <TouchableOpacity onPress={ ()=> {this.pushToDetail()} }>     
              <Text style={styles.welcome}>
                home
              </Text>
          </TouchableOpacity>    
      </View>
    );
  },

  pushToDetail(){
    this.props.navigator.push(
      {
        component:HomeDetail,
        title:'详情页' 
      }
    );
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});

module.exports = Home;
