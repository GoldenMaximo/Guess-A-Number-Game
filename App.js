import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from './components';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

export default function App() {
    const [userNumber, setUserNumber] = useState(0);
    const [numOfRounds, setNumOfRounds] = useState(0);

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
    <View style={styles.screen}>
        <Header title="Guess a Number" />
        {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
