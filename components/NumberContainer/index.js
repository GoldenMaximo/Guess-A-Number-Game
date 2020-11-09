import React from 'react';
import * as S from './styles';

export const NumberContainer = ({ children }) => {
    return (
        <S.Container>
            <S.Number>{children}</S.Number>
        </S.Container>
    )
};