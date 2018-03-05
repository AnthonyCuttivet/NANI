/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';

import { StackNavigator } from 'react-navigation';
import SplashScreen from './SplashScreen';
import TitleScreen from './TitleScreen';
import GameScreen from './GameScreen';
import VoteScreen from './VoteScreen';
import WYN from './wyn';
import FTD from './ftd';
import GWB from './gwb';

const App = StackNavigator({
    SplashScreen: {screen: SplashScreen},
    TitleScreen: {screen: TitleScreen},
    FTD: {screen: FTD},
    WYN: {screen: WYN},
    GWB: {screen: GWB},
    GameScreen: {screen: GameScreen},
    VoteScreen: {screen: VoteScreen},
})

export default App;