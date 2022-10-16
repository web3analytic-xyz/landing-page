import styled from 'styled-components';
import { devices } from '../../../helpers/styles';

export const Btn = styled.button`
    background-color: ${(props) => (props.color === 'green' ? '#7AC861' : 'rgba(122, 200, 97, 0.15)')};
    color: ${(props) => (props.color === 'green' ? '#FFFFFF' : '#71BB5A')};
    border: none;
    cursor: pointer;
    font-family: 'Inter-SemiBold';
    border-radius: 12px;
    font-size: 15px;
    padding: 8px 12px;
    @media ${devices.tablet} {
        padding: 9.8px 18px;
    }
    @media ${devices.laptop} {
        padding: 11px 20px;
    }
`;
