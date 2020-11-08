import React from 'react';
import * as S from './styles';

export const Card = ({ width, maxWidth, alignItems, children }) => {
    return (
        <S.Card width={width} maxWidth={maxWidth} alignItems={alignItems}>
            {children}
        </S.Card>
    )
};