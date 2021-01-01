import styled from 'styled-components/native';
import Colors from '../../constants/colors';

export const Container = styled.View`
    background-color: ${Colors.primary};
    padding-vertical: 12px;
    padding-horizontal: 30px;
    border-radius: 25px;
    margin-bottom: ${({ marginBottom }) => marginBottom ? marginBottom : '0px'};
`;

export const Text = styled.Text`
    color: white;
    font-family: open-sans;
    font-size: 16px;
    text-align: center;
`;