import styled from 'styled-components/native';

export const Card = styled.View`
    width: ${({ width }) => width ? width : '55%'};
    max-width: ${({ maxWidth }) => maxWidth ? maxWidth : '90%'};
    flex-direction: ${({ flexDirection }) => flexDirection ? flexDirection : 'column'};
    align-items: ${({ alignItems }) => alignItems ? alignItems : 'flex-start'};
    justify-content: ${({ justifyContent }) => justifyContent ? justifyContent : 'flex-start'};
    margin-top: ${({ marginTop }) => marginTop ? marginTop : '0px'};
    shadow-color: black;
    shadow-offset: 0px 2px;
    shadow-radius: 6px;
    shadow-opacity: 0.26;
    elevation: 8;
    background-color: white;
    padding: 20px;
    border-radius: 10px;
`;