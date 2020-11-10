import React from 'react';
import { TouchableOpacity } from 'react-native';
import * as S from './styles';

export const MainButton = ({ children, onPress }) => {
    return (
        <TouchableOpacity activeOpacity={0.6} onPress={onPress}>
            <S.Container>
                <S.Text>{children}</S.Text>
            </S.Container>
        </TouchableOpacity>
    )
};
