import React from 'react';
import {
  Text,
  View,
  Animated
} from 'react-vr';

import { Easing } from 'react-native';

class Title extends React.Component {

  state = {
    fade: new Animated.Value(0)
  }

  componentDidMount () {

    Animated.sequence([
      Animated.timing(
        this.state.fade,
        {
         toValue: 1,
         duration: 5000,
         easing: Easing.ease
        }
      )
    ]).start();
  }

  render () {

    return (
      <View style={{margin: 0.1, height: 0.5}}>
        <Animated.Text
          style={{
            fontSize: 0.5,
            opacity: this.state.fade,
            fontWeight: '400',
            textAlign: 'center',
            textAlignVertical: 'center'
          }}
        >
          {this.props.text}
        </Animated.Text>
      </View>
    )
  }
}

module.exports = Title;
