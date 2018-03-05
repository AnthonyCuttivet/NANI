import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Image,
  TextInput
} from 'react-native';

class WYN extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }
  static navigationOptions = {
    title: "WYN",
    header: null,
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
          <Image source={require('./img/wyn.png')}
                style={styles.backgroundImage}>
                  {this.props.children}
          </Image>
          <TextInput
            style={{height: 40,width:200, borderColor: 'gray', borderWidth: 1, position: 'absolute', color:'white'}}
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
            ref="nameInput"
          />
        <TouchableHighlight
          onPress={() => navigate("GWB", {name: this.state.text})}
          style={styles.button}>
         <Text style={{color:'white'}}> Let me in ! </Text>
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
export default WYN;