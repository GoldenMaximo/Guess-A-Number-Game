import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const Screen = styled.View`
    flex: 1;
    padding: 10px;
    align-items: center;
`;

export const ButtonContainer = styled.View`
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    padding-horizontal: 15px;
`;

export const StyledButton = styled.View`
    /* width: ${Dimensions.get('window').width / 4}; */
    /* % always refers to the direct parent width */
    width: 45%;
`;