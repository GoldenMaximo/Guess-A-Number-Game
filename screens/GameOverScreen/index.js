import React, { useEffect, useState } from 'react';
import { Dimensions, ScrollView } from 'react-native';
import { MainButton } from '../../components';
import * as DS from '../../components/default-styled-components';
import * as S from './styles';

const GameOverScreen = ({ numOfRounds, userNumber, onRestart }) => {
    const [availableDeviceWidth, setAvailableDeviceWidth] = useState(Dimensions.get('window').width);
    const [availableDeviceHeight, setAvailableDeviceHeight] = useState(Dimensions.get('window').height);

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

    return (
        <ScrollView>
            <S.Screen>
                <DS.Title>The game is over</DS.Title>
                <S.ImageContainer
                    borderRadius={() => Math.round(availableDeviceWidth + availableDeviceHeight) / 2}
                    width={() => availableDeviceWidth * 0.7}
                    height={() => availableDeviceWidth * 0.7}
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
                <MainButton onPress={onRestart} marginBottom="10px">New Game</MainButton>
            </S.Screen>
        </ScrollView>
    );
};

export default GameOverScreen;