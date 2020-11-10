import styled from 'styled-components/native';
import Colors from '../../constants/colors';

export const Container = styled.View`
    border-width: 2px;
    border-color: ${Colors.accent};
    padding: 1px;
    border-radius: 10px;
    margin-vertical: 10px;
    align-items: center;
    justify-content: center;
`;

export const Number = styled.Text`
    color: ${Colors.accent};
    font-size: 22px;
    margin: 10px;
`;