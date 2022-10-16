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
  ProductWrapper,
  SignUpSection,
  SignUpTitle,
  Wrapper,
  A,
  Ul,
  LiPurple,
  LiOrange,
} from './styles';
import Community from '../../assets/images/community.png';
import Button from '../../components/shared/Button/Button';
import GithubIcon from '../../Icons/GithubIcon';
import TwitterIcon from '../../Icons/TwitterIcon';
import MessageIcon from '../../Icons/MessageIcon';
import Research from '../../assets/images/research.png';
import Glass from '../../assets/images/icon-glass.png';
import Lightning from '../../assets/images/icon-lightning.png';
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
            <SectionTitle>Helping You Find Your Web3 Users</SectionTitle>
            <SectionDesc>
            Web3Analytic takes a data-driven approach to helping protocols find and engage with users.
            </SectionDesc>
            <HomeHeaderWrapper>
              <Button color="green">Coming soon!</Button>
              <HeaderIcons>
                <A href="https://github.com/web3-analytic"><GithubIcon /></A>
                <A href="https://twitter.com/ParetoAnalytics"><TwitterIcon /></A>
                <A href="mailto:team@paretolabs.xyz"><MessageIcon /></A>
              </HeaderIcons>
            </HomeHeaderWrapper>
          </HeaderWrapper>
          <HeaderImg src={Community} />
        </HeaderSection>
        <ProductWrapper>
          <SectionTitle>Our Products</SectionTitle>
          <SectionDesc>Get <b>insights about on-chain wallet preferences and behaviors</b> of web3 users, and communicate with them directly. Most importantly, do this all whilst respecting user privacy.
          </SectionDesc>
          <LastSection>
            <LastSectionBox>
              <LastSectionBoxImg src={Glass} />
              <Wrapper>
                <LastSectionBoxTitle>Actionable User Analytics</LastSectionBoxTitle>
                <LastSectionBoxDesc>Data insights on cross-chain wallet behavior to help you make better decisions for your business. 
                </LastSectionBoxDesc>
                <br/>
                <LastSectionBoxDesc>Today, a DeFi protocol might airdrop all dydx users. With Web3Analytic, your airdrop can be <b>more precise</b>:
                </LastSectionBoxDesc>
                <br/>
                <Ul>
                  <LiPurple>Protocol X users</LiPurple>
                  <LiPurple>With at least $100k tx volume last month</LiPurple>
                  <LiPurple>Have not airdrop farmed</LiPurple>
                  <LiPurple>Likely to explore other protocols</LiPurple>
                </Ul>
              </Wrapper>
            </LastSectionBox>
            <LastSectionBox>
              <LastSectionBoxImg src={Lightning} />
              <Wrapper>
                <LastSectionBoxTitle>On-Chain Communication</LastSectionBoxTitle>
                <LastSectionBoxDesc>Getting in touch with your users does not have to be a challenge. With Web3Analytic:
                </LastSectionBoxDesc>
                <br/>
                <Ul>
                  <LiOrange><b>Send critical updates.</b> Message your community members so they don’t miss important notification.</LiOrange>
                  <LiOrange><b>Get user feedback.</b> Build exactly for your user&apos;s needs!</LiOrange>
                  <LiOrange><b>Find new users.</b> Share unlockable NFTs to encourage protocol engagement. </LiOrange>
                </Ul>
              </Wrapper>
            </LastSectionBox>
          </LastSection>
        </ProductWrapper>
        <SectionWrapper>
          <SectionImg src={Research} />
          <SectionData>
            <SectionTitle>Who are we?</SectionTitle>
            <SectionDesc>We are a team at the intersection of Web3 and AI, with a mix of native web3 builders and almost a decade of machine learning expertise. 
            </SectionDesc>
            <SectionDesc>If you&apos;re interested in learning more or are excited about our vision, please reach out!
            </SectionDesc>
          </SectionData>
        </SectionWrapper>
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
