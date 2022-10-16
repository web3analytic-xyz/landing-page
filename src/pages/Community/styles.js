import styled from 'styled-components';
import { Paper, PaperDesc } from '../../helpers/shared-styles';
import { devices } from '../../helpers/styles';

export const Div = styled.div`
    display: grid;
    gap: 80px;
`;

export const ResearchSectionDesc = styled(PaperDesc)`
    margin-top: 24px;
    text-align: center;
`;

export const CommunitySection = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;

export const CommunitySectionWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 40px;
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
    }
    @media ${devices.laptopL} {
        width: 85%;
    }
`;

export const Box = styled(Paper)`
    display: flex;
    align-items: start;
    flex-direction: column;
    align-items: center;
    & > svg {
        width: 50px;
        height: 40px;
        margin-bottom: 36px;
    };
    @media ${devices.tablet} {
        flex-direction: row;
        flex-direction: unset;
        align-items: unset;
        & > svg {
            margin-top: 2px;
        };
    }
`;

export const BoxWrapper = styled.div`
    display: grid;
    gap: 14px;
    & > p {
        text-align: start;
    };
    & > button {
        width: max-content;
        margin-top: 18px;
    };
    & > * {
        margin: auto;
    };
    @media ${devices.tablet} {
        margin-left: 40px;
        & > * {
            margin: unset;
        };
    }
`;
