import React, { useState, useRef, useEffect } from 'react';
import { Alert, FlatList, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
// import * as ScreenOrientation from 'expo-screen-orientation';

import { NumberContainer, Card, MainButton } from '../../components';
import * as S from './styles';
import * as DS from '../../components/default-styled-components';

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

const renderListItem = (itemData, listLength) => {
    return (
        <S.ListItem>
            <DS.Text>#{listLength - itemData.index}</DS.Text>
            <DS.Text>{itemData.item}</DS.Text>
        </S.ListItem>
    )
}

const GameScreen = ({ userChoice, onGameOver }) => {
    // ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);

    const initialGuess = generateRandomBetween(1, 100, userChoice);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    const [pastGuesses, setPastGuesses] = useState([initialGuess.toString()]);
    const [availableDeviceWidth, setAvailableDeviceWidth] = useState(Dimensions.get('window').width);
    const [availableDeviceHeight, setAvailableDeviceHeight] = useState(Dimensions.get('window').height);
    const currentLow = useRef(1);
    const currentHigh = useRef(100);

    useEffect(() => {
        const updateDimensions = () => {
            setAvailableDeviceWidth(Dimensions.get('window').width);
            setAvailableDeviceHeight(Dimensions.get('window').height);
        };

        Dimensions.addEventListener('change', updateDimensions);

        return () => {
            Dimensions.removeEventListener('change', updateDimensions);
        }
    }, []);

    useEffect(() => {
        if (currentGuess === userChoice) {
            onGameOver(pastGuesses.length);
        }
    }, [currentGuess]);

    const nextGuessHandler = direction => {
        if ((direction === 'lower' && currentGuess < userChoice) || (direction === 'greater' && currentGuess > userChoice)) {
            Alert.alert('Don\'t lie!', 'You know that this is wrong...', [{ text: 'Sorry!', style: 'cancel' }]);
            return;
        };

        if (direction === 'lower') {
            currentHigh.current = currentGuess;
        } else {
            currentLow.current = currentGuess + 1;
        }

        const nextNumber = generateRandomBetween(currentLow.current, currentHigh.current, currentGuess);
        setCurrentGuess(nextNumber);
        // setRounds(rounds => rounds + 1);
        setPastGuesses(currPastGuesses => [nextNumber.toString(), ...currPastGuesses]);
    };

    if (availableDeviceHeight < 500) {
        return (
            <S.Screen>
                <DS.Text>Opponent's Guess</DS.Text>
                <Card
                    flexDirection="row"
                    justifyContent="space-around"
                    alignItems="center"
                    marginTop="10px"
                    width="80%"
                >
                    <MainButton onPress={() => nextGuessHandler('lower')}>
                        <Ionicons name="md-remove" size={24} color="white" />
                    </MainButton>
                    <NumberContainer>{currentGuess}</NumberContainer>
                    <MainButton onPress={() => nextGuessHandler('greater')}>
                        <Ionicons name="md-add" size={24} color="white" />
                    </MainButton>
                </Card>
                <S.ListContainer deviceWidth={availableDeviceWidth}>
                    <FlatList
                        data={pastGuesses}
                        keyExtractor={item => item}
                        renderItem={guess => renderListItem(guess, pastGuesses.length)}
                    />
                </S.ListContainer>
            </S.Screen>
        );
    }

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
                    <Ionicons name="md-add" size={24} color="white" />
                </MainButton>
            </Card>
            <S.ListContainer deviceWidth={availableDeviceWidth}>
                <FlatList
                    data={pastGuesses}
                    keyExtractor={item => item}
                    renderItem={guess => renderListItem(guess, pastGuesses.length)}
                />
            </S.ListContainer>
        </S.Screen>
    );
};

export default GameScreen;