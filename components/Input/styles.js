import styled from 'styled-components/native';

export const StyledTextInput = styled.TextInput`
    height: 30px;
    width: ${({ width }) => width ? width : '50px'};
    text-align: ${({ textAlign }) => textAlign ? textAlign : 'center'};
    border-bottom-color: grey;
    border-bottom-width: 1px;
    margin-vertical: 10px;
`;