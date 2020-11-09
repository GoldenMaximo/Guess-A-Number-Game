import React, { useState, useRef, useEffect } from 'react';
import { NumberContainer, Card } from '../../components';
import { Button, View, Text, Alert } from 'react-native';

const GameOverScreen = ({ numOfRounds, userNumber, onRestart }) => {
    return (
        <View>
            <Text>The game is over</Text>
            <Text>Number of rounds: {numOfRounds}</Text>
            <Text>Number was: {userNumber}</Text>
            <Button title='New Game' onPress={onRestart} />
        </View>
    );
};

export default GameOverScreen;