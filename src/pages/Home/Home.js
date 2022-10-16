import React, { useState } from 'react';
import jsonp from 'jsonp';
import toQueryString from 'to-querystring';
import {
  HeaderImg,
  HeaderSection, HeaderWrapper, SectionDesc, SectionTitle,
} from '../../helpers/shared-styles';
import {
  Div, HeaderIcons,
  HomeHeaderWrapper,
  Input,
  InputWrapper,
  LastSection,
  LastSectionBox,
  LastSectionBoxDesc,
  LastSectionBoxImg,
  LastSectionBoxTitle,
  SectionData,
  SectionImg,
  SectionWrapper,
  SignUpSection,
  SignUpTitle,
  Wrapper,
  A,
} from './styles';
import Group from '../../assets/images/Group.png';
import Button from '../../components/shared/Button/Button';
import GithubIcon from '../../Icons/GithubIcon';
import TwitterIcon from '../../Icons/TwitterIcon';
import MessageIcon from '../../Icons/MessageIcon';
import Sustainable from '../../assets/images/sustainable.png';
import Research from '../../assets/images/research.png';
import Portfolio from '../../assets/images/portfolio.png';
import Defi from '../../assets/images/defi.png';
import Pareto from '../../assets/images/pareto.png';
import Modal from '../../components/shared/Modal/Modal';

const Home = () => {
  const [open, setOpen] = useState(false);

  // Whether email form went through
  const [failed, setFailed] = useState(false);

  // For signup forms
  const [email, setEmail] = useState('');

  /// For preparing the post request
  const getAjaxUrl = (url) => url.replace('/post?', '/post-json?');

  // Fires when submit is clicked
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email && email.indexOf('@') > -1) {
      setFailed(false);
      // See line 10 in https://github.com/revolunet/react-mailchimp-subscribe/blob/master/src/SimpleForm.js
      const params = toQueryString({
        EMAIL: email,
      });
      // Build the post request URL
      // eslint-disable-next-line
      const url = getAjaxUrl(process.env.REACT_APP_MAILCHIMP_URL) + '&' + params;
      jsonp(
        url,
        {
          param: 'c',
        },
        (err) => {
          if (err) {
            // Indicate to user some error has occurred
            setFailed(true);
          }
        },
      );
    } else {
      setFailed(true);
    }
    setOpen(true);
  };

  // Fires when email is being changed
  const handleEmailChange = (e) => {
    const { value } = e.target;
    setEmail(value);
  };

  return (
    (
      <Div>
        <Modal open={open} setOpen={(val) => setOpen(val)} failed={failed} />
        <HeaderSection>
          <HeaderWrapper>
            <SectionTitle>Trade Decentralized Options</SectionTitle>
            <SectionDesc>
              Arbitrum Nitro&apos;s First Options Order Book with Cross-Protocol Margining
            </SectionDesc>
            <HomeHeaderWrapper>
              <Button color="green">Coming soon!</Button>
              <HeaderIcons>
                <A href="https://github.com/pareto-xyz"><GithubIcon /></A>
                <A href="https://twitter.com/Paretoxyz"><TwitterIcon /></A>
                <A href="mailto:team@paretolabs.xyz"><MessageIcon /></A>
              </HeaderIcons>
            </HomeHeaderWrapper>
          </HeaderWrapper>
          <HeaderImg src={Group} />
        </HeaderSection>
        <SectionWrapper>
          <SectionImg src={Sustainable} />
          <SectionData>
            <SectionTitle>Trade crypto options with best-in-class leverage</SectionTitle>
            <SectionDesc>Struggling to find capital efficient options on-chain? Look no further than Pareto.
            </SectionDesc>
          </SectionData>
        </SectionWrapper>
        <SectionWrapper>
          <SectionData>
            <SectionTitle>Delta hedging with one click</SectionTitle>
            <SectionDesc>Access tools and strategies previously only available to sophisticated investors.
            </SectionDesc>
          </SectionData>
          <SectionImg src={Portfolio} reverse />
        </SectionWrapper>
        <SectionWrapper>
          <SectionImg src={Research} />
          <SectionData>
            <SectionTitle>Downside protection that&apos;s easy to use</SectionTitle>
            <SectionDesc>Hedge your positions with options. Build your safety net today.
            </SectionDesc>
          </SectionData>
        </SectionWrapper>
        <LastSection>
          <LastSectionBox>
            <LastSectionBoxImg src={Defi} />
            <Wrapper>
              <LastSectionBoxTitle>Build cutting-edge technology in DeFi</LastSectionBoxTitle>
              <LastSectionBoxDesc>Make composability and capital efficiency first class citizens in DeFi.
              </LastSectionBoxDesc>
            </Wrapper>
            <A href="https://twitter.com/Paretoxyz">
              <Button>Learn More</Button>
            </A>
          </LastSectionBox>
          <LastSectionBox>
            <LastSectionBoxImg src={Pareto} />
            <Wrapper>
              <LastSectionBoxTitle>Join the Pareto Community</LastSectionBoxTitle>
              <LastSectionBoxDesc>Build the future of on-chain options with us.
              </LastSectionBoxDesc>
            </Wrapper>
            <A href="https://twitter.com/Paretoxyz">
              <Button>Learn More</Button>
            </A>
          </LastSectionBox>
        </LastSection>
        <SignUpSection>
          <SignUpTitle>Sign up for Our Mailing List</SignUpTitle>
          <InputWrapper>
            <Input
              name="email"
              placeholder="Your email address"
              required
              type="email"
              onChange={handleEmailChange}
              value={email}
            />
            <Button onClick={handleSubmit} color="green">Sign up</Button>
          </InputWrapper>
        </SignUpSection>
      </Div>
    )
  );
};

export default Home;
