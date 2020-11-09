import React, { useState } from 'react';
import { NumberContainer, Card } from '../../components';
import { Button, Text } from 'react-native';
import * as S from './styles';

const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const randomNumber = Math.floor((Math.random() * (max - min)) + min);
    if (randomNumber === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return randomNumber;
    }
};

const GameScreen = ({ userChoice }) => {
    const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(1, 100, userChoice));

    return (
        <S.Screen>
            <Text>Opponent's Guess</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card
                flexDirection="row"
                justifyContent="space-around"
                marginTop="20px"
                width="75%"
            >
                <Button title="LOWER" onPress={() => { }} />
                <Button title="GREATER" onPress={() => { }} />
            </Card>
        </S.Screen>
    );
};

export default GameScreen;