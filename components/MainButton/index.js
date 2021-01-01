import React from 'react';
import { TouchableOpacity } from 'react-native';
import * as S from './styles';

export const MainButton = ({ children, onPress, marginBottom }) => {
    return (
        <TouchableOpacity activeOpacity={0.6} onPress={onPress}>
            <S.Container marginBottom={marginBottom}>
                <S.Text>{children}</S.Text>
            </S.Container>
        </TouchableOpacity>
    )
};
