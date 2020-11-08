import React from 'react';
import * as S from './styles';

export const Input = (props, { width, textAlign }) => <S.StyledTextInput {...props} width={width} textAlign={textAlign} />;
