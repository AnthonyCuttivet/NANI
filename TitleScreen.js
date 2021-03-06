import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Image
} from 'react-native';

class TitleScreen extends Component {
  static navigationOptions = {
    title: "TitleScreen",
    header: null,
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <TouchableHighlight
          onPress={() => navigate("FTD", {screen: "FTD"})}
          style={styles.button}>
          <Image source={require('./img/title.png')}
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
export default TitleScreen;