import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Image,
  TextInput,
  ActivityIndicator
} from 'react-native';
import CountdownCircle from 'react-native-countdown-circle';

class GWB extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      isLoading: true
    };
  }

  static navigationOptions = {
    title: "GWB",
    header: null,
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
          <Image source={require('./img/gwb.png')}
                style={styles.backgroundImage}>
                  {this.props.children}
          </Image>
            <View style={styles.wait}>
              <Text style={{color:'white'}}>Connecting to the other players...</Text>
            </View>
          <View style={styles.timer}>
            <CountdownCircle
                seconds={3}
                radius={30}
                borderWidth={8}
                color="#ff003f"
                bgColor="#fff"
                textStyle={{ fontSize: 20 }}
                onTimeElapsed={() => navigate("GameScreen", {screen: "GameScreen"})}
            />
          </View>
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
  timer: {
    marginTop: 40,
    marginLeft : 250,
    position: 'absolute',
    display: 'none'
  },
  backgroundImage: {
        position: 'absolute',
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
  },
  button: {
    marginTop : 175,
    alignItems: 'center',
    borderColor: 'white',
    borderWidth: 1,
    padding: 10
  },
  buttonText: {
    color: 'white',
    fontSize: 22,
    alignSelf: 'center'
  }
});
export default GWB;