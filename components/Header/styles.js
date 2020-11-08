import styled from 'styled-components/native';
import Colors from '../../constants/colors';

export const Header = styled.View`
    width: 100%;
    height: 90px;
    padding-top: 36px;
    background-color: ${Colors.primary};
    align-items: center;
    justify-content: center;
`;

export const HeaderTitle = styled.Text`
    color: black;
    font-size: 18px;
`;