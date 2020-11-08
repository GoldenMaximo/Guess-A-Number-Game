import styled from 'styled-components/native';

export const Card = styled.View`
    width: ${({ width }) => width ? width : '100px'};
    max-width: ${({ maxWidth }) => maxWidth ? maxWidth : '100px'};
    align-items: ${({ alignItems }) => alignItems ? alignItems : '100px'};
    shadow-color: black;
    shadow-offset: 0px 2px;
    shadow-radius: 6px;
    shadow-opacity: 0.26;
    elevation: 8;
    background-color: white;
    padding: 20px;
    border-radius: 10px;
`;