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

class GameScreen extends Component {

constructor(props){
   super(props);

   this.state = {
      selected1: false,
      selected2: false,
      selected3: false,
   }
}

componentDidMount() {
  fetch("https://api.myjson.com/bins/1536oh")
    .then(response => response.json())
    .then(data => this.setState({ data: data }));
}

navigateWithSelectedCard(navigate){
  var selectedCard = 0;
  var states = [this.state.selected1,this.state.selected2,this.state.selected3];
  for (var i = 0; i < states.length; i++) {
    if(states[i] == true){
      selectedCard = i+1;
    }
  }
  navigate("VoteScreen", {card: selectedCard});
}

  static navigationOptions = {
    title: "GameScreen",
    header: null,
  }

  render() {
    const { navigate } = this.props.navigation;
    const { data } = this.state;
    const { name } = this.state;
    const { isLoading } = this.state;
    console.log(data);
    console.log(name);


    const blackCards = {
      1 : {
        file: require('./img/blackCards/1.png'),
      },
      2 : {
        'name' : 'Player2',
        'score' : '08',
      },
      3 : {
        'name' : 'Player3',
        'score' : '07',
      },
      4 : {
        'name' : 'Player4',
        'score' : '04',
      }
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

    if (data == undefined) {
      return (
        <View style={styles.container}>
            <Image source={require('./img/gwb.png')}
                  style={styles.backgroundImage}>
                    {this.props.children}
            </Image>
            <View style={styles.wait}>
              <Text style={{color:'white'}}>Shuffling your winning cards...</Text>
            </View>
        </View>
      );
    }
    return (
      <View style={styles.container}>
          <Image source={require('./img/bg.png')}
                style={styles.backgroundImage}>
                  {this.props.children}
          </Image>
          <Image source={blackCards[data.cards.black[0]]["file"]}
                style={styles.blackCard}>
                  {this.props.children}
          </Image>
          <View style={styles.timer}>
            <CountdownCircle
                seconds={30}
                radius={30}
                borderWidth={8}
                color="#ff003f"
                bgColor="#fff"
                textStyle={{ fontSize: 20 }}
                onTimeElapsed={() => this.navigateWithSelectedCard(navigate)}
            />
          </View>

          <Text style={[styles.scores, (this.state.selected1 || this.state.selected2 || this.state.selected3) && styles.selectedScores]}>{data.players[0]['name']} - {data.players[0]['score']} pts</Text>
          <Text style={styles.scores}>{"\n"}{data.players[1]['name']} - {data.players[1]['score']} pts</Text>
          <Text style={styles.scores}>{"\n"}{"\n"}{data.players[2]['name']} - {data.players[2]['score']} pts</Text>
          <Text style={styles.scores}>{"\n"}{"\n"}{"\n"}{data.players[3]['name']} - {data.players[3]['score']} pts</Text>

          <TouchableWithoutFeedback ref="img1"
          onPress={()=> this.setState({selected1: !this.state.selected1, selected2: false,selected3: false})}>
            <Image source={whiteCards[data.cards.white[0]]["file"]}
                  style={[styles.whiteCard, this.state.selected1 && styles.selectedWhiteCard]} >
                    {this.props.children}
            </Image>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
          onPress={()=> this.setState({selected2: !this.state.selected2, selected1: false,selected3: false})}>
            <Image source={whiteCards[data.cards.white[1]]["file"]}
                  style={[styles.whiteCard, this.state.selected2 && styles.selectedWhiteCard]} >
                    {this.props.children}
            </Image>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
          onPress={()=> this.setState({selected3: !this.state.selected3, selected1: false,selected2: false})}>
            <Image source={whiteCards[data.cards.white[2]]["file"]}
                  style={[styles.whiteCard, this.state.selected3 && styles.selectedWhiteCard]} >
                    {this.props.children}
            </Image>
          </TouchableWithoutFeedback>
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

  timer: {
    marginTop: 40,
    marginLeft : 250,
    position: 'absolute',
  },
  wait :{
    marginTop: 200,
    marginLeft : 250,
    position: 'absolute',
  },
  scores: {
    marginTop: 20,
    marginLeft: 550,
    lineHeight: 25,
    color: 'white',
    position: 'absolute',
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'flex-start'
  },

  selectedScores: {
    marginTop: 20,
    marginLeft: 550,
    lineHeight: 25,
    color: 'green',
    position: 'absolute',
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'flex-start'
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
export default GameScreen;