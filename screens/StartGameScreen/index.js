import React, { useEffect, useState } from 'react';
import { Button, TouchableWithoutFeedback, Keyboard, Alert, ScrollView, KeyboardAvoidingView, Dimensions } from 'react-native';
import { Card, Input, NumberContainer, MainButton } from '../../components';
import Colors from '../../constants/colors';
import * as S from './styles';
import * as DS from '../../components/default-styled-components';

const StartGameScreen = ({ onStartGame }) => {
    const [enteredValue, setEnteredValue] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState(0);
    // Alternative to % on button width, using the Dimensions API
    //  Good example on how to listen to orientation changes, altough unecessary in this case
    //   Hence why it's commented
    // const [buttonWidth, setButtonWidth] = useState(Dimensions.get('window').width / 4);

    // useEffect(() => {
    //     const updateLayout = () => {
    //         setButtonWidth(Dimensions.get('window').width / 4);
    //     };

    //     Dimensions.addEventListener('change', updateLayout());

    //     return () => {
    //         Dimensions.removeEventListener('change', updateLayout());
    //     };
    // }, []);

    const numberInputHandler = inputText => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''));
    };

    const resetInputHandler = () => {
        setEnteredValue('');
        setConfirmed(false);
    };

    const confirmInputHandler = () => {
        const choosenNumber = parseInt(enteredValue);
        if (isNaN(choosenNumber) || choosenNumber <= 0 || choosenNumber > 99) {
            Alert.alert(
                'Invalid Number',
                'Number has to be between 1 and 99.',
                [{ text: 'Ok', style: 'destructive', onPress: resetInputHandler }])
            return;
        };
        setConfirmed(true);
        setSelectedNumber(choosenNumber);
        setEnteredValue('');
        Keyboard.dismiss();
    };

    let confirmedOutput;

    if (confirmed) {
        confirmedOutput = <Card marginTop='20px' alignItems="center">
            <DS.Text>You selected:</DS.Text>
            <NumberContainer>{selectedNumber}</NumberContainer>
            <MainButton onPress={() => onStartGame(selectedNumber)}>START GAME</MainButton>
        </Card>
    };

    return (
        <ScrollView>
            <KeyboardAvoidingView behavio="position" keyboardVerticalOffset={30}>
                <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                    <S.Screen>
                        <DS.Title>Start a new Game!</DS.Title>
                        <Card width="80%" alignItems="center">
                            <DS.Text>Enter a number</DS.Text>
                            <Input
                                width="50px"
                                textAlign="center"
                                blurOnSubmit
                                autoCapitalize='none'
                                autoCorrect={false}
                                keyboardType="number-pad"
                                maxLength={2}
                                onChangeText={numberInputHandler}
                                value={enteredValue}
                            />
                            <S.ButtonContainer>
                                <S.StyledButton>
                                    <Button title="Reset" onPress={resetInputHandler} color={Colors.accent} />
                                </S.StyledButton>
                                <S.StyledButton>
                                    <Button title="Confirm" onPress={confirmInputHandler} color={Colors.primary} />
                                </S.StyledButton>
                            </S.ButtonContainer>
                        </Card>
                        {confirmedOutput}
                    </S.Screen>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </ScrollView>
    )
};

export default StartGameScreen;