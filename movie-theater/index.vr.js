import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  Sound,
  VideoPano
} from 'react-vr';

import MovieProjector from './Components/Scenes/MovieProjector.js';
import Scene from './Components/Scenes/Scene.js';

export default class MovieTheater extends React.Component {

  state = {
    scene: 1
  }

  handleSceneChange = scene => {

    this.setState({scene})
  }

  renderScene (scene) {

    if (scene === 1) {
      return (
        <Scene
          text={"Welcome"}
          buttonText={"BEGIN"}
          onSceneChange={() => this.handleSceneChange(2)}
          scene={scene}
        />
      )
    }

    if (scene === 2) {
      return (
        <Scene
          text={"Scene Select"}
          buttonText={"?"}
          onSceneChange={() => this.handleSceneChange(3)}
          scene={scene}
        />
      )
    }

    return <MovieProjector />
  }

  render () {

    const {scene} = this.state

    return (
      <View>
        <Pano source={asset('2001.jpg')}>
          <Sound
            volume={0.8}
            loop = {true}
            source={{mp3: asset('substrata.mp3')}}
          />
        </Pano>
        {this.renderScene(scene)}
      </View>
    );
  }
};

AppRegistry.registerComponent('OutdoorMovieTheater', () => MovieTheater);
