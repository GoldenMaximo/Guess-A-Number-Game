import React, { useState, useRef, useEffect } from 'react';
import { NumberContainer, Card } from '../../components';
import { Button, View, Text, Alert } from 'react-native';
import * as DS from '../../components/default-styled-components';

const GameOverScreen = ({ numOfRounds, userNumber, onRestart }) => {
    return (
        <View>
            <DS.Text>The game is over</DS.Text>
            <DS.Text>Number of rounds: {numOfRounds}</DS.Text>
            <DS.Text>Number was: {userNumber}</DS.Text>
            <Button title='New Game' onPress={onRestart} />
        </View>
    );
};

export default GameOverScreen;