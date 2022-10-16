import styled from 'styled-components';
import { devices } from '../../helpers/styles';
import EllipsePurple from '../../assets/images/ellipse-purple.png';
import EllipseOrange from '../../assets/images/ellipse-orange.png';
import Triangle1 from '../../assets/images/triangle-1.png';
import Triangle2 from '../../assets/images/triangle-2.png';
import Triangle3 from '../../assets/images/triangle-3.png';

export const Div = styled.div`
    display: grid;
    gap: 120px;
`;

export const Ul = styled.ul`
  font-size: 24px;
  align-items: left;
  text-align: left;
  margin-top: 20px;
`;
export const LiPurple = styled.li`
  margin-bottom: 10px;
  list-style: none;
  content: '';
  display: inline-block;
  background-image: url(${EllipsePurple});
  background-repeat: no-repeat;
  background-position: left center;
  padding-left: 40px;
  font-size: 18px;
  line-height: 1.5;
  @media ${devices.mobileL} {
    font-size: 18px;
  }
  @media ${devices.tablet} {
    font-size: 20px;
  }
  @media ${devices.laptop} {
      font-size: 22px;
  }
  @media ${devices.laptopL} {
      font-size: 24px;
  }
`;

export const LiOrange = styled.li`
  margin-bottom: 25px;
  list-style: none;
  content: '';
  display: inline-block;
  background-image: url(${EllipseOrange});
  background-repeat: no-repeat;
  background-position: left center;
  padding-left: 40px;
  font-size: 18px;
  line-height: 1.5;
  @media ${devices.mobileL} {
    font-size: 18px;
  }
  @media ${devices.tablet} {
    font-size: 20px;
  }
  @media ${devices.laptop} {
      font-size: 22px;
  }
  @media ${devices.laptopL} {
      font-size: 24px;
  }
`;
export const UlTriangle = styled.ul`
  font-size: 24px;
  align-items: left;
  text-align: left;
`;
export const LiTriangle1 = styled.li`
  list-style: none;
  content: '';
  display: inline-block;
  background-image: url(${Triangle1});
  background-repeat: no-repeat;
  background-position: left center;
  padding-left: 60px;
  font-size: 18px;
  line-height: 1.5;
  @media ${devices.mobileL} {
    font-size: 18px;
  }
  @media ${devices.tablet} {
    font-size: 20px;
  }
  @media ${devices.laptop} {
      font-size: 22px;
  }
  @media ${devices.laptopL} {
      font-size: 24px;
  }
`;

export const LiTriangle2 = styled.li`
  list-style: none;
  content: '';
  display: inline-block;
  background-image: url(${Triangle2});
  background-repeat: no-repeat;
  background-position: left center;
  padding-left: 60px;
  font-size: 18px;
  line-height: 1.5;
  @media ${devices.mobileL} {
    font-size: 18px;
  }
  @media ${devices.tablet} {
    font-size: 20px;
  }
  @media ${devices.laptop} {
      font-size: 22px;
  }
  @media ${devices.laptopL} {
      font-size: 24px;
  }
`;

export const LiTriangle3 = styled.li`
  list-style: none;
  content: '';
  display: inline-block;
  background-image: url(${Triangle3});
  background-repeat: no-repeat;
  background-position: left center;
  padding-left: 60px;
  font-size: 18px;
  line-height: 1.5;
  @media ${devices.mobileL} {
    font-size: 18px;
  }
  @media ${devices.tablet} {
    font-size: 20px;
  }
  @media ${devices.laptop} {
      font-size: 22px;
  }
  @media ${devices.laptopL} {
      font-size: 24px;
  }
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

export const FullPageSectionWrapper = styled.div`
    gap: 100px;
`;

export const SectionWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    gap: 100px;
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

// Product section styling

export const ProductSection = styled.div`
    display: grid;
    margin: auto;
    margin-top: 80px;
    grid-template-columns: 1fr;
    gap: 50px;
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
        width: 90%;
        gap: 200px;
    };
`;

export const ProductSectionBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 50px;
    padding-left: 50px;
    padding-right: 50px;
    padding-bottom: 10px;
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    & > button {
        margin-top: auto;
    }
    /* justify-content: space-between;
    flex-direction: column;
    align-items: center;
    text-align: center; */
`;

export const ProductSectionBoxImg = styled.img`
    width: 120px;
    height: 120px;
    @media ${devices.tablet} {
        width: 120px;
        height: 120px;
    }
    @media ${devices.laptopL} {
        width: 120px;
        height: 120px;
    }
`;

export const ProductSectionBoxTitle = styled.h1`
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
export const ProductSectionBoxDesc = styled.p`
    font-size: 18px;
    text-align: left;
    line-height: 1.5;
    margin-top: 25px;
    @media ${devices.mobileL} {
        font-size: 20px;
    }
    @media ${devices.tablet} {
       font-size: 22px;
    }
    @media ${devices.laptop} {
        font-size: 24px;
    }
    @media ${devices.laptopL} {
        font-size: 24px;
    }
`;

export const ProductWrapper = styled.div`
    margin: 32px 0;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items:center;
`;

// Usecase section styling

export const UseCaseSection = styled.div`
    display: grid;
    margin: auto;
    margin-top: 80px;
    grid-template-columns: 1fr;
    gap: 50px;
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
        gap: 50px;
    }
    @media ${devices.laptopL} {
        width: 90%;
        gap: 50px;
    };

`;

export const UseCaseSectionBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 25px;
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    & > button {
        margin-top: auto;
    }
    /* justify-content: space-between;
    flex-direction: column;
    align-items: center;
    text-align: center; */
`;

export const UseCaseSectionBoxImg = styled.img`
    width: 80px;
    height: 80px;
    @media ${devices.tablet} {
        width: 80px;
        height: 80px;
    }
    @media ${devices.laptopL} {
        width: 80px;
        height: 80px;
    }
`;

export const UseCaseSectionBoxTitle = styled.h1`
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
export const UseCaseSectionBoxDesc = styled.p`
    font-size: 18px;
    text-align: center;
    line-height: 1.5;
    margin-top: 25px;
    @media ${devices.mobileL} {
        font-size: 20px;
    }
    @media ${devices.tablet} {
      font-size: 20px;
    }
    @media ${devices.laptop} {
        font-size: 22px;
    }
    @media ${devices.laptopL} {
        font-size: 24px;
    }
`;

export const UseCaseWrapper = styled.div`
    margin: 20px 0;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items:center;
`;

// Algorithm section styling

export const AlgorithmSection = styled.div`
    display: grid;
    margin: auto;
    gap: 40px;
    grid-template-columns: 1fr;
    width: 100%;
`;

export const AlgorithmSectionBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 25px;
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    & > button {
        margin-top: auto;
    }
    /* justify-content: space-between;
    flex-direction: column;
    align-items: center;
    text-align: center; */
`;

export const AlgorithmWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    gap: 0px;
    margin-top: 30px;
    @media ${devices.tablet} {
        grid-template-columns: 1fr 1fr;
    };
`;

// Sign up portion

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
