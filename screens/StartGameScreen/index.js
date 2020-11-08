import React, { useState } from 'react';
import { Text, Button, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Card, Input } from '../../components';
import Colors from '../../constants/colors';
import * as S from './styles';

const StartGameScreen = () => {
    const [enteredValue, setEnteredValue] = useState('');

    const numberInputHandler = inputText => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''));
    };

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <S.Screen>
                <S.Title>Start a new Game</S.Title>
                <Card width="300px" alignItems="center" maxWidth="80%" >
                    <Text>Enter a number</Text>
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
                            <Button title="Reset" onPress={() => { }} color={Colors.accent} />
                        </S.StyledButton>
                        <S.StyledButton>
                            <Button title="Confirm" onPress={() => { }} color={Colors.primary} />
                        </S.StyledButton>
                    </S.ButtonContainer>
                </Card>
            </S.Screen>
        </TouchableWithoutFeedback>
    )
};

export default StartGameScreen;