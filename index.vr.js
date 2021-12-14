import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
} from 'react-vr';

export default class MyHome extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('star.jpg')}/>
      </View>
    );
  }
};

AppRegistry.registerComponent('MyHome', () => MyHome);
