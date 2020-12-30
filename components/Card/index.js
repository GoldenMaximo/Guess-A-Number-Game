import React from 'react';
import * as S from './styles';

export const Card = ({ width, maxWidth, minWidth, flexDirection, alignItems, justifyContent, marginTop, children }) => {
    return (
        <S.Card
            width={width}
            maxWidth={maxWidth}
            minWidth={minWidth}
            alignItems={alignItems}
            marginTop={marginTop}
            flexDirection={flexDirection}
            justifyContent={justifyContent}
        >
            {children}
        </S.Card>
    )
};