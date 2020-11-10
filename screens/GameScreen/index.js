import React, { useState, useRef, useEffect } from 'react';
import { NumberContainer, Card, MainButton } from '../../components';
import { Button, Alert } from 'react-native';
import * as S from './styles';
import * as DS from '../../components/default-styled-components';
import { Ionicons } from '@expo/vector-icons';

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

const GameScreen = ({ userChoice, onGameOver }) => {
    const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(1, 100, userChoice));
    const [rounds, setRounds] = useState(0);
    const currentLow = useRef(1);
    const currentHigh = useRef(100);

    useEffect(() => {
        if (currentGuess === userChoice) {
            onGameOver(rounds);
        }
    }, [currentGuess]);

    const nextGuessHandler = direction => {
        if ((direction === 'lower' && currentGuess < userChoice) || (direction === 'greater' && currentGuess > userChoice )) {
            Alert.alert('Don\'t lie!', 'You know that this is wrong...', [{ text: 'Sorry!', style: 'cancel'}]);
            return;
        };

        if (direction === 'lower') {
            currentHigh.current = currentGuess;
        } else {
            currentLow.current = currentGuess;
        }

        const nextNumber = generateRandomBetween(currentLow.current, currentHigh.current, currentGuess);
        setRounds(rounds => rounds + 1);
        setCurrentGuess(nextNumber);
    };

    return (
        <S.Screen>
            <DS.Text>Opponent's Guess</DS.Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card
                flexDirection="row"
                justifyContent="space-around"
                marginTop="20px"
                width="85%"
            >
                <MainButton onPress={() => nextGuessHandler('lower')}>
                    <Ionicons name="md-remove" size={24} color="white" />
                </MainButton>
                <MainButton onPress={() => nextGuessHandler('greater')}>
                    <Ionicons  name="md-add" size={24} color="white" />
                </MainButton>
            </Card>
        </S.Screen>
    );
};

export default GameScreen;