import React from 'react';
import { Text, Button } from 'react-native';
import { Card, Input } from '../../components';
import Colors from '../../constants/colors';
import * as S from './styles';

const StartGameScreen = () => {
    return (
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
    )
};

export default StartGameScreen;