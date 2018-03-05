import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Image
} from 'react-native';
import CountdownCircle from 'react-native-countdown-circle';

class VoteScreen extends Component {

constructor(props){
   super(props);

   this.state = {
      selected1: false,
      selected2: false,
      selected3: false,
   }
}

showWinner() {
  var winner = Math.floor(Math.random() * 3) + 1 ;
  switch(winner){
    case 1 : 
      this.setState({selected1 : true});
      break;
    case 2 :
      this.setState({selected2 : true});
      break;
    case 3 :
      this.setState({selected3 : true});
      break;
  }
}

  static navigationOptions = {
    title: "VoteScreen",
    header: null,
  }

  render() {
    const { navigate } = this.props.navigation;
    const { card } = this.props.navigation.state.params;

    const blackCards = {
      1 : {
        file: require('./img/blackCards/1.png'),
      },
    };

    const whiteCards = {
      1 : {
        file: require('./img/whiteCards/1.png'),
      },
      2 : {
        file: require('./img/whiteCards/2.png'),
      },
      3 : {
        file: require('./img/whiteCards/3.png'),
      },
      4 : {
        file: require('./img/whiteCards/4.png'),
      },
    };

    return (
      <View style={styles.container}>
          <Image source={require('./img/winnerbg.png')}
                style={styles.backgroundImage}>
                  {this.props.children}
          </Image>

          <Image source={require('./img/blackCards/1.png')}
                style={styles.blackCard}>
                  {this.props.children}
          </Image>

          <View style={styles.timer}>
            <CountdownCircle
                seconds={3}
                radius={30}
                borderWidth={8}
                color="#ff003f"
                bgColor="#fff"
                textStyle={{ fontSize: 20 }}
                onTimeElapsed={() => {this.showWinner()}}
            />
          </View>

            <TouchableWithoutFeedback>
            <Image source={whiteCards[card]["file"]}
                    style={styles.whiteCard} >
                      {this.props.children}
              </Image>
            </TouchableWithoutFeedback>
          <TouchableWithoutFeedback>
            <Image source={require('./img/whiteCards/4.png')}
                  style={styles.whiteCard} >
                    {this.props.children}
            </Image>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback>
            <Image source={require('./img/whiteCards/5.png')}
                  style={styles.whiteCard} >
                    {this.props.children}
            </Image>
          </TouchableWithoutFeedback>
          <Image source={require('./img/crown.png')}
                style={this.state.selected1 && styles.Wcrown1}>
                  {this.props.children}
          </Image>
          <Image source={require('./img/crown.png')}
                style={this.state.selected2 && styles.Wcrown2}>
                  {this.props.children}
          </Image>
          <Image source={require('./img/crown.png')}
                style={this.state.selected3 && styles.Wcrown3}>
                  {this.props.children}
          </Image>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  scores: {
    color: 'white',
    position: 'absolute',
  },
  timer: {
    marginTop: 40,
    marginLeft : 250,
    position: 'absolute',
    display : 'none'
  },
  Wcrown1 : {
    position: 'absolute',
    marginTop : 100,
    marginLeft : 275,
    width : 50,
    height : 50,
  },
  Wcrown2 : {
    position: 'absolute',
    marginTop : 100,
    marginLeft : 415,
    width : 50,
    height : 50,
  },
  Wcrown3 : {
    position: 'absolute',
    marginTop : 100,
    marginLeft : 555,
    width : 50,
    height : 50,
  },
  whiteCard: {
      position: 'relative',
      marginTop : 120,
      width: 140,
      height: 280,
  },
  selectedWhiteCard: {
      position: 'relative',
      marginTop : 80,
      width: 140,
      height: 280,
    borderWidth: 3,
    borderColor: '#9c880a',
    borderRadius: 10,
  },
  viewWinner:{

  },
  blackCard: {
        marginTop : -30,
        marginLeft : 10,
        width: 225,
        height: 450,
  },
  backgroundImage: {
        position: 'absolute',
        flex: 1,
        width: '100%',
        height: '100%',
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
export default VoteScreen;