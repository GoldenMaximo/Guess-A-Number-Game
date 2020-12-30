import styled from 'styled-components/native';
import Colors from '../../constants/colors';
import { Dimensions } from 'react-native';

export const Screen = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const SuccessImage = styled.Image`
    width: 100%;
    height: 100%;
`;

export const ImageContainer = styled.View`
    width: ${({ width }) => width}px;
    height: ${({ height }) => height}px;
    border-radius: ${({ borderRadius }) => borderRadius}px;
    border-width: 3px;
    border-color: black;
    overflow: hidden;
    margin-vertical: ${Dimensions.get('window').height / 60}px;
`;

export const ResultTextContainer = styled.View`
    margin-vertical: 5%;
`;

export const Text = styled.Text`
    font-family: open-sans;
    text-align: center;
    font-size: ${Dimensions.get('window').width > 400 ? '18' : '16'}px;
`;

export const Highlight = styled.Text`
    color: ${Colors.primary};
    font-family: open-sans-bold;
`;
