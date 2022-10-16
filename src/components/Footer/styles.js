import styled from 'styled-components';
import { devices } from '../../helpers/styles';

export const Div = styled.div`
    border-top: 1px solid #EAEFF3;
    padding-top: 40px;
    margin-bottom: 50px;
    margin-top: 80px;
`;

export const Grid = styled.div`
    display: grid;
    gap: 30px;
    grid-template-columns: repeat(1, minmax(0,max-content));
    justify-content: space-between;
    @media ${devices.mobileL} {
        grid-template-columns: repeat(1, minmax(0,max-content));
        gap: 35px;
    }
    @media ${`(min-width: ${450}px)`} {
        grid-template-columns: repeat(2, minmax(0,max-content));
        gap: 40px;
    }
    @media ${devices.tablet} {
        grid-template-columns: repeat(3, minmax(0,max-content));
        gap: 45px;
    }
    @media ${devices.laptop} {
        grid-template-columns: repeat(4, minmax(0,max-content));
        gap: 50px;
    }
 
`;

export const CopyRight = styled.div`
    display: flex;
    flex-direction: column;
    grid-row: 4;
    @media ${`(min-width: ${400}px)`} {
        grid-row: auto;
    }
`;

export const CopyRightTitle = styled.h1`
    font-family: 'Inter-Bold';
    font-size: 20px;
`;

export const CopyRightDesc = styled.p`
    font-family: 'Inter-Regular';
    font-size: 14px;
    color: #717171;
    margin-top: 20px;
    @media ${devices.mobileL} {
        margin-top: 24px;
    }
    @media ${devices.laptop} {
        margin-top: 28px;
    }
    @media ${devices.laptopL} {
        margin-top: 32px;
    }
`;

export const List = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ListITitle = styled.h1`
    font-family: 'Inter-Bold';
    font-size: 24px;
    @media ${devices.mobileL} {
        & > a {
            font-size: 13.8px;
        }
    }
    @media ${devices.laptop} {
        font-size: 14.3;
    }
    @media ${devices.laptopL} {
        font-size: 15;
    }
`;

export const ListItem = styled.p`
    margin-top: 16px;
    cursor: pointer;
    & > a {
        text-decoration: none;
        font-family: 'Inter-Medium';
        font-size: 13.5px;
        color: black;
    }
    @media ${devices.mobileL} {
        margin-top: 18px;
        & > a {
            font-size: 13.8px;
        }
    }
    @media ${devices.laptop} {
        margin-top: 20px;
        & > a {
        font-size: 14.3;
        }
    }
    @media ${devices.laptopL} {
        margin-top: 24px;
        & > a {
        font-size: 15;
        }
    }
`;

export const Contact = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Icons = styled.div`
    display: grid;
    grid-auto-flow: column;
    gap: 32px;
    align-items: center;
    margin-bottom: 28px;
    @media ${devices.mobileL} {
        margin-bottom: 32px;
    }
    @media ${devices.laptop} {
        margin-bottom: 36px;
    }
    @media ${devices.laptopL} {
        margin-bottom: 40px;
    }
`;

export const A = styled.a``;

export const Email = styled.div`
    display: grid;
    grid-auto-flow: column;
    align-items: center;
    margin-top: 24px;
    & > svg {
        margin-right: 10px;
    }
`;
