import styled from 'styled-components';
import { devices } from './styles';

export const HeaderSection = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    gap: 50px;
    margin-top: 32px;
    @media ${devices.mobileL} {
        /* margin-bottom: 80px; */
    }
    @media ${devices.tablet} {
        /* margin-bottom: 80px; */
        grid-template-columns: 1fr 1.4fr;
        margin-top: 64px;
    }
    @media ${devices.laptop} {
        gap: 120px;
        margin-top: 100px;
    }
    @media ${devices.laptopL} {
        gap: 130px;
        margin-top: 130px;
    }
`;

export const HeaderWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media ${devices.tablet} {
        max-width: 430px;
    }
`;

export const HeaderImg = styled.img`
    width: 100%;
    height: 100%;
    max-height: 350px;
    grid-row: 1;
    @media ${devices.tablet} {
        grid-row: auto;
        max-height: 430px;
    }
`;

export const LogoImg = styled.img`
    width: 25%;
    height: 100%;
    max-height: 350px;
    min-width: 200px;
    grid-row: 1;
    @media ${devices.tablet} {
        grid-row: auto;
        max-height: 430px;
        min-width: 200px;
    }
`;

export const SectionDesc = styled.p`
font-family: 'Inter-Regular';
font-size: 16px;
line-height: 1.5;
margin-top: 15px;
@media ${devices.mobileL} {
    font-size: 17px;
}
@media ${devices.tablet} {
    font-size: 18.5px;
}
@media ${devices.laptop} {
    font-size: 20px;
}
`;

export const SectionTitle = styled.h1`
font-family: 'Inter-ExtraBold';
font-size: 32px;
line-height: 1.15;
text-align:  ${({ textAlign }) => textAlign || 'start'};
@media ${devices.laptop} {
    font-size: 35px;
}
@media ${devices.laptopL} {
    font-size: 40px;
}
@media ${devices.laptopXS} {
    font-size: 48px;
}
`;

export const Paper = styled.div`
    background-color: white;
    border-radius: 24px;
    box-shadow: -1px 10px 45px -12px rgba(85,88,151,0.2);
    padding: 25px;
    @media ${devices.tablet} {
        padding: 30px;
    }
    @media ${devices.laptop} {
        padding: 35px;
    }
    @media ${devices.laptop} {
        padding: 40px;
    }
`;

export const PaperTitle = styled.p`
    font-family: 'Inter-Bold';
    font-size: 24px;
    text-align: center;
    @media ${devices.mobileL} {
        font-size: 26px;
    }
    @media ${devices.tablet} {
        font-size: 28px;
    }
    @media ${devices.laptop} {
        font-size: 30px;
    }
    @media ${devices.laptop} {
        font-size: 32px;
    }
`;

export const PaperDesc = styled.p`
    font-family: 'Inter-Regular';
    font-size: 14px;
    text-align: center;
    line-height: 1.5;
    @media ${devices.mobileL} {
        font-size: 14.5px;
    }
    @media ${devices.tablet} {
        font-size: 15px;
    }
    @media ${devices.laptop} {
        font-size: 15.5px;
    }
    @media ${devices.laptop} {
        font-size: 16px;
    }
`;
