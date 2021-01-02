import React from 'react';
import { TouchableOpacity, TouchableNativeFeedback, Platform } from 'react-native';
import * as S from './styles';

export const MainButton = ({ children, onPress, marginBottom }) => {
    let ButtonComponent = TouchableOpacity;

    if (Platform.OS === 'android' && Platform.Version >= 21) {
        ButtonComponent = TouchableNativeFeedback;
    }

    return (
        <S.ButtonContainer>
            <ButtonComponent activeOpacity={0.6} onPress={onPress}>
                <S.Container marginBottom={marginBottom}>
                    <S.Text>{children}</S.Text>
                </S.Container>
            </ButtonComponent>
        </S.ButtonContainer>
    )
};
