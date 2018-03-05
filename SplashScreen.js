import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Image
} from 'react-native';

class SplashScreen extends Component {
  static navigationOptions = {
    title: "SplashScreen",
    header: null,
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <TouchableHighlight
          onPress={() => navigate("TitleScreen", {screen: "Title screen"})}
          style={styles.button}>
          <Image source={require('./img/splash.png')}
                style={styles.backgroundImage}>
                  {this.props.children}
          </Image>
        </TouchableHighlight>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  backgroundImage: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover'
  },
  button: {
    alignSelf: 'stretch',
    height: '100%',
    justifyContent: 'center'
  },
  buttonText: {
    color: 'white',
    fontSize: 22,
    alignSelf: 'center'
  }
});
export default SplashScreen;