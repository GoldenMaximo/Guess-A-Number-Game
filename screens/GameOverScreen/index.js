import React from 'react';
import { Dimensions, ScrollView } from 'react-native';
import { MainButton } from '../../components';
import * as DS from '../../components/default-styled-components';
import * as S from './styles';

const GameOverScreen = ({ numOfRounds, userNumber, onRestart }) => {
    return (
        <ScrollView>
            <S.Screen>
                <DS.Title>The game is over</DS.Title>
                <S.ImageContainer
                    borderRadius={() => Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2}
                    width={() => Dimensions.get('window').width * 0.7}
                    height={() => Dimensions.get('window').width * 0.7}
                >
                    <S.SuccessImage resizeMode='cover' contain source={require('../../assets/success.png')} />
                </S.ImageContainer>
                <S.ResultTextContainer>
                    <S.Text>
                        Your phone needed&nbsp;
                        <S.Highlight>{numOfRounds}</S.Highlight>
                    &nbsp;rounds to guess the number&nbsp;
                        <S.Highlight>{userNumber}</S.Highlight>
                    </S.Text>
                </S.ResultTextContainer>
                <MainButton onPress={onRestart}>New Game</MainButton>
            </S.Screen>
        </ScrollView>
    );
};

export default GameOverScreen;