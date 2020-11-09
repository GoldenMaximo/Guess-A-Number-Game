import React from 'react';
import * as S from './styles';

export const Card = ({ width, maxWidth, alignItems, marginTop, children }) => {
    return (
        <S.Card width={width} maxWidth={maxWidth} alignItems={alignItems} marginTop={marginTop}>
            {children}
        </S.Card>
    )
};