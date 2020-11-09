import React, { useState } from 'react';
import { Text, Button, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import { Card, Input, NumberContainer } from '../../components';
import Colors from '../../constants/colors';
import * as S from './styles';
import * as DS from '../../components/default-styled-components';

const StartGameScreen = ({ onStartGame }) => {
    const [enteredValue, setEnteredValue] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState(0);

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
                  [{text: 'Ok', style: 'destructive', onPress: resetInputHandler}])
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
            <Button title="START GAME" onPress={() => onStartGame(selectedNumber)} />
            </Card>
    };

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <S.Screen>
                <S.Title>Start a new Game!</S.Title>
                <Card width="300px" alignItems="center" maxWidth="80%" >
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
    )
};

export default StartGameScreen;