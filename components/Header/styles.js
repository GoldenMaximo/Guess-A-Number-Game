import styled from 'styled-components/native';
import Colors from '../../constants/colors';
import { Platform } from 'react-native';

export const Header = styled.View`
    width: 100%;
    height: 90px;
    padding-top: 36px;
    background-color: ${Platform.OS === 'android' ? Colors.primary : 'white'};
    align-items: center;
    justify-content: center;
    border-bottom-color: ${Platform.OS === 'ios' ? '#ccc' : 'transparent'};
    border-bottom-width: ${Platform.OS === 'ios' ? '1' : '0'};
`;

export const HeaderTitle = styled.Text`
    color: ${Platform.OS === 'ios' ? Colors.primary : 'white'};
    font-size: 18px;
    font-family: open-sans-bold;
`;