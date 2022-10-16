import styled from 'styled-components';
import { devices } from '../../helpers/styles';

export const Div = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Logo = styled.div`
    font-family: 'Inter-Bold';
    font-size: 17px;
    cursor: pointer;
    @media ${devices.mobileL} {
        font-size: 17.5px;
    }
    @media ${devices.laptop} {
        font-size: 18px;
    }
    @media ${devices.laptopL} {
        font-size: 19px;
    }
    @media ${devices.laptopXS} {
        font-size: 20px;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
