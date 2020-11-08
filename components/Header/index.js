import React from 'react';
import * as S from './styles';

export const Header = ({ title }) => {
    return (
        <S.Header>
            <S.HeaderTitle>{title}</S.HeaderTitle>
        </S.Header>
    );
};