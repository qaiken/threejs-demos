import React from 'react';
import {
  Text,
  View,
  VrButton
} from 'react-vr';

class Button extends React.Component {

  render () {

    return (
      <View style={{ margin: 0.1, height: 0.3, backgroundColor: '#607F9D'}}>
        <VrButton onClick={this.props.onClick}>
          <Text
            style={{
              fontSize: 0.2,
              fontWeight: 300,
              textAlign: 'center'
            }}
          >
            {this.props.buttonText}
          </Text>
        </VrButton>
      </View>
    )
  }
}

module.exports = Button;
