import styled from 'styled-components';
import { devices } from '../../helpers/styles';
import { Paper } from '../../helpers/shared-styles';

export const Div = styled.div`
    display: grid;
    gap: 80px;
`;

export const ResearchSection = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;

export const ResearchSectionWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 30px;
    width: 100%;
    margin-top: 72px;
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
        gap: 40px;
        margin-top: 80px;
    }
    @media ${devices.laptopL} {
        width: 85%;
    }
`;

export const Box = styled(Paper)`
    gap: 32px;
    display: grid;
    & > * {
        margin: auto;
    };
    & > svg {
        width: 64px;
        height: 64px;
    }
    @media ${devices.mobileL} {
        & > svg {
            width: 74px;
            height: 74px;
         }
    }
    @media ${devices.tablet} {
        & > svg {
            width: 84px;
            height: 84px;
        };
    }
    @media ${devices.laptop} {
        & > svg {
            width: 94px;
            height: 94px;
        };
    }
    @media ${devices.laptop} {
        & > svg {
            width: 120px;
            height: 120px;
        };
    }
`;

export const CodeSection = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;

export const CodeBox = styled(Box)`
    width: 100%;
    justify-content: flex-start;
    margin-top: 72px;
    @media ${devices.tablet} {
        flex-direction: row;
    }
    @media ${devices.laptop} {
        margin-top: 80px;
    };
    & > button {
        align-items: flex-start;
        margin: auto;
        width: max-content;
        @media ${devices.laptop} {
            margin-left: 100px;
         };
    };
    @media ${devices.laptop} {
        margin-top: 80px;
    };
`;

export const CodeBoxWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    @media ${devices.tablet} {
        flex-direction: row;
    }
    & > svg {
        width: 60px;
        height: 60px;
        margin-bottom: 35px;
        @media ${devices.tablet} {
            margin-bottom: 0;
            margin-right: 45px;
         }
    }
`;

export const TextsWrapper = styled.div`
    & > p {
        @media ${devices.tablet} {
            text-align: start;
         }
    }
    & > p:first-child {
        margin-bottom: 15px;
    }
`;

export const GettingStartedSection = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;

export const GettingStartedSectionWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 30px;
    width: 100%;
    margin-top: 72px;
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
        gap: 40px;
        margin-top: 80px;
    }
    @media ${devices.laptop} {
        width: 85%;
    };
    & > div > p {
        text-align: start;
        width: 100%;
    }
`;
