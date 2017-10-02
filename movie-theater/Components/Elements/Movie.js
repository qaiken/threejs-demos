import React from 'react';
import {
  Video,
  View,
  asset
} from 'react-vr';

class Movie extends React.Component {

  render () {
    
    return (
      <View
        style={{ margin: 0.1, height: 2}}
      >
        <Video
          loop={true}
          style={{height:2}}
          source={asset('deer.mp4')}
        />
      </View>
    )
  }
}

module.exports = Movie;
