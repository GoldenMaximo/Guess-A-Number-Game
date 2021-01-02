import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Header } from './components';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

const fetchFonts = () => {
    return Font.loadAsync({
        'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
        'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
    });
};

export default function App() {
    const [userNumber, setUserNumber] = useState(0);
    const [numOfRounds, setNumOfRounds] = useState(0);
    const [dataLoaded, setDataLoaded] = useState(false);

    if (!dataLoaded) {
        return <AppLoading
            startAsync={fetchFonts}
            onFinish={() => setDataLoaded(true)}
        />
    }

    const configureNewGameHandler = () => {
        setNumOfRounds(0);
        setUserNumber(0);
    };

    const startGameHandler = selectedNumber => {
        setUserNumber(selectedNumber);
    };

    const gameOverHandler = numOfRounds => {
        setNumOfRounds(numOfRounds);
    };

    let content = <StartGameScreen onStartGame={startGameHandler} />;

    if (userNumber && numOfRounds <= 0) {
        content = <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />;
    } else if (numOfRounds > 0) {
        content = <GameOverScreen numOfRounds={numOfRounds} userNumber={userNumber} onRestart={configureNewGameHandler} />;
    }

    return (
        <SafeAreaView style={styles.screen}>
            <Header title="Guess a Number" />
            {content}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
});
