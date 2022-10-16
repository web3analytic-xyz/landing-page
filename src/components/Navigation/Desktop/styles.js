import styled from 'styled-components';
import { devices } from '../../../helpers/styles';

export const Ul = styled.ul`
    display: grid;
    grid-auto-flow: column;
    list-style: none;
    margin: 0;
    padding: 0;
    @media ${devices.mobileL} {
        gap: 35px;
    }
    @media ${devices.laptop} {
        gap: 40px;
    }
    @media ${devices.laptopL} {
        gap: 48px;
    }
    @media ${devices.laptopXS} {
        gap: 54px;
    }
`;

export const Li = styled.li`
    & > a {
        text-decoration: none;
        color:   ${(props) => (props.active ? '#71BB5A' : '#000000')};
        font-family:   ${(props) => (props.active ? 'Inter-Bold' : 'Inter-Medium')};
    }
`;
