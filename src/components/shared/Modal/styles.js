import styled from 'styled-components';
import { devices } from '../../../helpers/styles';

export const Div = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
`;

export const ModalContainer = styled.div`
     background-color: rgba(11, 20, 34, 0.15);
     height: 100%;
     display: flex;
     justify-content: center;
     align-items: flex-end;
     @media ${devices.mobileL} {
        align-items: center;
    }
`;

export const ModalContent = styled.div`
    background: #FFFFFF;
    box-shadow: 0px 35px 75px rgba(85, 88, 151, 0.08);
    padding: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    border-top-left-radius: 24px;
    border-top-right-radius: 24px;
    position: relative;
    & > button {
        display: none;
    }
    @media ${devices.mobileL} {
        width: max-content;
        border-radius: 24px;
        & > button {
            display: block;
         }
    };
`;

export const ModalText = styled.p`
    font-family: 'Inter-ExtraBold';
    font-size: 24px;
    margin: 24px 0;
`;

export const CloseIconWrapper = styled.div`
    position: absolute;
    top: 20px;
    right: 20px;
    background-color:#F2F2F5;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    cursor: pointer;
    @media ${devices.mobileL} {
            display: none;
    };
`;
