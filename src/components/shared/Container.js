import React from 'react';
import styled from 'styled-components';
import { devices } from '../../helpers/styles';

const Container = ({ children, disableYPaddings }) => (
  <Div disableYPaddings={disableYPaddings}>{children}</Div>
);

export default Container;

const Div = styled.div`
    padding: ${(props) => (props.disableYPaddings ? '0 20px' : '20px')};
    max-width: 1600px;
    margin: auto;
    @media ${devices.mobileL} {
        padding: ${(props) => (props.disableYPaddings ? '0 35px' : '30px 35px')};
    }
    @media ${devices.laptop} {
        padding: ${(props) => (props.disableYPaddings ? '0 45px' : '35px 45px')};
    }
    @media ${devices.laptopL} {
        padding: ${(props) => (props.disableYPaddings ? '0 70px' : '43px 70px')};
    }
    @media ${devices.laptopXS} {
        padding: ${(props) => (props.disableYPaddings ? '0 130px' : '48px 130px')};
    }
`;
