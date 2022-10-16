import styled from 'styled-components';
import { devices } from '../../helpers/styles';

export const Div = styled.div`
    display: grid;
    gap: 80px;
`;

export const HomeHeaderWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 40px;
    & > button {
        width: max-content;
        height: max-content;
    };
    @media ${devices.tablet} {
        flex-direction: column;
    }
`;

export const HeaderIcons = styled.div`
    display: grid;
    grid-template-columns: repeat(3, minmax(max-content, 0));
    gap: 26px;
    align-items: center;
    & > svg {
        width: 24px;
        height: 24px;
    };
    @media ${devices.tablet} {
        margin-top: 72px;
        & > svg {
        width: 32px;
        height: 28px;
        };
        gap: 32px;
    }
`;

export const SectionImg = styled.img`
    width: 100%;
    max-height: 550px;
    grid-row: ${(props) => (props.reverse ? 1 : 'auto')};
    @media ${devices.tablet} {
        grid-row: auto;
    };
`;

export const SectionWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    gap: 50px;
    @media ${devices.tablet} {
        grid-template-columns: 1fr 1fr;
    };
    @media ${devices.mobileL} {
        gap: 65;
    }
    @media ${devices.tablet} {
        gap: 75;
    }
    @media ${devices.laptop} {
        gap: 85;
    }
    @media ${devices.laptopL} {
        gap: 100;
    }
`;

export const SectionData = styled.div`
    & > h1 {
        max-width: 500px;
    }
`;

export const MetricsSection = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    gap: 50px;
    @media ${devices.mobileL} {
        gap: 65;
    }
    @media ${devices.tablet} {
        gap: 75;
    }
    @media ${devices.laptop} {
        gap: 85;
        grid-template-columns: 1fr 1fr;
    }
    @media ${devices.laptopL} {
        gap: 100;
    }
`;

export const Boxes = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 32px;
    grid-row: 1;
    margin-bottom: 0px;
    @media ${devices.mobileL} {
        gap: 65;
    }
    @media ${devices.tablet} {
        gap: 75;
        grid-template-columns: 1fr 1fr;
        margin-bottom: 180px;
    }
    @media ${devices.laptop} {
        grid-row: auto;
    }
    @media ${devices.laptopL} {
        gap: 100;
    }
`;

export const MetricsWrapper = styled.div`
    display: grid;
    gap: 32px;
    & > button {
        width: fit-content;
    }
    & > h1 {
        max-width: 500px;
    };
    & > p {
        margin: 0;
    }
`;

export const Title = styled.h1`
    font-size: 16px;
    font-family: 'Inter-Regular';
    text-align: center;
    margin-bottom: 16px;
`;

export const Value = styled.p`
    font-size: 24px;
    text-align: center;
    font-family: 'Inter-Bold';
    @media ${devices.mobileL} {
        font-size: 26px;
    }
    @media ${devices.tablet} {
       font-size: 28px;
    }
    @media ${devices.laptop} {
       font-size: 30px;
    }
    @media ${devices.laptopL} {
        font-size: 32px;
    }
`;

export const LastSection = styled.div`
    display: grid;
    margin: auto;
    margin-top: 0px;
    grid-template-columns: 1fr;
    gap: 80px;
    width: 100%;
    @media ${devices.mobileL} {
        width: 85%;
    }
    @media ${devices.tablet} {
        grid-template-columns: 1fr 1fr;
        width: 95%;
        gap: 35px;
    }
    @media ${devices.laptop} {
        width: 90%;
        gap: 70px;
    }
    @media ${devices.laptopL} {
        width: 85%;
        gap: 300px;
    };

`;

export const LastSectionBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    & > button {
        margin-top: auto;
    }
    /* justify-content: space-between;
    flex-direction: column;
    align-items: center;
    text-align: center; */
`;

export const LastSectionBoxImg = styled.img`
    width: 120px;
    height: 120px;
    @media ${devices.tablet} {
        width: 150px;
        height: 150px;
    }
    @media ${devices.laptopL} {
        width: 200px;
        height: 200px;
    }
`;

export const Wrapper = styled.div`
    margin: 32px 0;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items:center;
`;

export const LastSectionBoxTitle = styled.h1`
    font-size: 24px;
    text-align: center;
    font-family: 'Inter-Bold';
    max-width: 300px;
    margin-bottom: 32px;
    @media ${devices.mobileL} {
        font-size: 26px;
    }
    @media ${devices.tablet} {
       font-size: 28px;
    }
    @media ${devices.laptop} {
       font-size: 30px;
    }
    @media ${devices.laptopL} {
        font-size: 32px;
    }
`;
export const LastSectionBoxDesc = styled.p`
    text-align: center;
`;

export const SignUpSection = styled.div`
    display: flex;
    flex-direction: column;
`;

export const SignUpTitle = styled.h1`
    font-size: 24px;
    font-family: 'Inter-Bold';
    margin-bottom: 24px;
`;

export const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    & > button {
        width: 100%;
        margin-top: 20px;
        height: 50px;
    };
    @media ${devices.tablet} {
        flex-direction: row;
        & > button {
        max-width: 300px;
        margin-left: 20px;
        width: 100%;
        margin-top: 0px;
        height: auto;
    };
    }
    @media ${devices.laptop} {
        gap: 85;
        grid-template-columns: 1fr 1fr;
    }
    @media ${devices.laptopL} {
        gap: 100;
    }
`;

export const Input = styled.input`
    border-radius: 12px;
    background-color: #F2F2F5;
    border: none;
    outline: none;
    padding: 18px;
    font-size: 16px;
    font-family: 'Inter-Medium';
    & > :focus-visible {
        outline: none;
    };
    @media ${devices.tablet} {
        width: 100%;
    }
`;

export const A = styled.a``;
