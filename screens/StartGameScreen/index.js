import React from 'react';
import { TextInput, Button } from 'react-native';
import { Card } from '../../components';
import Colors from '../../constants/colors';
import * as S from './styles';

const StartGameScreen = () => {
    return (
        <S.Screen>
            <Card width="300px" alignItems="center" maxWidth="80%" >
                <S.Title>Enter a number</S.Title>
                <TextInput />
                <S.ButtonContainer>
                    <S.StyledButton>
                        <Button title="Reset" onPress={() => {}} color={Colors.accent} />
                    </S.StyledButton>
                    <S.StyledButton>
                        <Button title="Confirm" onPress={() => {}} color={Colors.primary} />
                    </S.StyledButton>
                </S.ButtonContainer>
            </Card>
        </S.Screen>
    )
};

export default StartGameScreen;