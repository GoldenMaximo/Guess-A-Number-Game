import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const Screen = styled.View`
    flex: 1;
    padding: 10px;
    align-items: center;
`;

export const ListItem = styled.View`
    flex-direction: row;
    justify-content: space-around;
    border-color: #ccc;
    border-width: 1px;
    padding: 15px;
    margin-vertical: 10px;
    background-color: white;
`;

export const ListContainer = styled.View`
    flex: 1;
    width: ${({ deviceWidth }) => deviceWidth > 600 ? '85%' : '80%'};
`;