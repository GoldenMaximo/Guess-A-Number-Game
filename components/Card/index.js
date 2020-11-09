import React from 'react';
import * as S from './styles';

export const Card = ({ width, maxWidth, flexDirection, alignItems, justifyContent, marginTop, children }) => {
    return (
        <S.Card
            width={width}
            maxWidth={maxWidth}
            alignItems={alignItems}
            marginTop={marginTop}
            flexDirection={flexDirection}
            justifyContent={justifyContent}
        >
            {children}
        </S.Card>
    )
};