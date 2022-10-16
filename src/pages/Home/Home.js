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
  ProductSection,
  ProductSectionBox,
  ProductSectionBoxDesc,
  ProductSectionBoxImg,
  ProductSectionBoxTitle,
  ProductWrapper,
  UseCaseSection,
  UseCaseSectionBox,
  UseCaseSectionBoxDesc,
  UseCaseSectionBoxImg,
  UseCaseSectionBoxTitle,
  UseCaseWrapper,
  AlgorithmSection,
  AlgorithmSectionBox,
  AlgorithmWrapper,
  SectionData,
  SectionImg,
  SectionWrapper,
  FullPageSectionWrapper,
  SignUpSection,
  SignUpTitle,
  A,
  Ul,
  UlTriangle,
  LiPurple,
  LiOrange,
  LiTriangle1,
  LiTriangle2,
  LiTriangle3,
} from './styles';
import Community from '../../assets/images/community.png';
import Button from '../../components/shared/Button/Button';
import GithubIcon from '../../Icons/GithubIcon';
import TwitterIcon from '../../Icons/TwitterIcon';
import MessageIcon from '../../Icons/MessageIcon';
import Research from '../../assets/images/research.png';
import Glass from '../../assets/images/icon-glass.png';
import Lightning from '../../assets/images/icon-lightning.png';
import Arrow from '../../assets/images/icon-arrow.png';
import Pyramid from '../../assets/images/pyramid.png';
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
                <A href="https://twitter.com/Web3Analytic"><TwitterIcon /></A>
                <A href="mailto:team@paretolabs.xyz"><MessageIcon /></A>
              </HeaderIcons>
            </HomeHeaderWrapper>
          </HeaderWrapper>
          <HeaderImg src={Community} />
        </HeaderSection>
        <FullPageSectionWrapper>
          <SectionTitle>Our Products</SectionTitle>
          <SectionDesc>Get <b>insights about on-chain wallet preferences and behaviors</b> of web3 users, and communicate with them directly. Most importantly, do this all whilst respecting user privacy.
          </SectionDesc>
          <ProductSection>
            <ProductSectionBox>
              <ProductSectionBoxImg src={Glass} />
              <ProductWrapper>
                <ProductSectionBoxTitle>Actionable User Analytics</ProductSectionBoxTitle>
                <ProductSectionBoxDesc>Data insights on cross-chain wallet behavior to help you make better decisions for your business. 
                </ProductSectionBoxDesc>
                <br/>
                <ProductSectionBoxDesc>Today, a DeFi protocol might airdrop all dydx users. With Web3Analytic, your airdrop can be <b>more precise</b>:
                </ProductSectionBoxDesc>
                <br/>
                <Ul>
                  <LiPurple>Protocol X users</LiPurple>
                  <LiPurple>With at least $100k tx volume last month</LiPurple>
                  <LiPurple>Have not airdrop farmed</LiPurple>
                  <LiPurple>Likely to explore other protocols</LiPurple>
                </Ul>
              </ProductWrapper>
            </ProductSectionBox>
            <ProductSectionBox>
              <ProductSectionBoxImg src={Lightning} />
              <ProductWrapper>
                <ProductSectionBoxTitle>On-Chain Communication</ProductSectionBoxTitle>
                <ProductSectionBoxDesc>Getting in touch with your users does not have to be a challenge. With Web3Analytic:
                </ProductSectionBoxDesc>
                <br/>
                <Ul>
                  <LiOrange><b>Send critical updates.</b> Message your community members so they don’t miss important notification.</LiOrange>
                  <LiOrange><b>Get user feedback.</b> Build exactly for your user&apos;s needs!</LiOrange>
                  <LiOrange><b>Find new users.</b> Share unlockable NFTs to encourage protocol engagement. </LiOrange>
                </Ul>
              </ProductWrapper>
            </ProductSectionBox>
          </ProductSection>
        </FullPageSectionWrapper>
        <FullPageSectionWrapper>
          <SectionTitle>Use Cases</SectionTitle>
          <SectionDesc>A few of the popular applications of Web3Analytic:
          </SectionDesc>
          <UseCaseSection>
            <UseCaseSectionBox>
              <UseCaseSectionBoxImg src={Arrow} />
              <UseCaseWrapper>
                <UseCaseSectionBoxTitle>Know Your Community</UseCaseSectionBoxTitle>
                <UseCaseSectionBoxDesc>See what protocols your users are using to inform who you partner with and where you expand to.
                </UseCaseSectionBoxDesc>
              </UseCaseWrapper>
            </UseCaseSectionBox>
            <UseCaseSectionBox>
              <UseCaseSectionBoxImg src={Arrow} />
              <UseCaseWrapper>
                <UseCaseSectionBoxTitle>Air Drops</UseCaseSectionBoxTitle>
                <UseCaseSectionBoxDesc>Don&apos;t just air drop all users, let us find the power users and avoid the air drop farmers.
                </UseCaseSectionBoxDesc>
              </UseCaseWrapper>
            </UseCaseSectionBox>
            <UseCaseSectionBox>
              <UseCaseSectionBoxImg src={Arrow} />
              <UseCaseWrapper>
                <UseCaseSectionBoxTitle>Community Communication</UseCaseSectionBoxTitle>
                <UseCaseSectionBoxDesc>Ensure your community receives important updates and get their feedback on your use case.
                </UseCaseSectionBoxDesc>
              </UseCaseWrapper>
            </UseCaseSectionBox>
            <UseCaseSectionBox>
              <UseCaseSectionBoxImg src={Arrow} />
              <UseCaseWrapper>
                <UseCaseSectionBoxTitle>Grow Your Community</UseCaseSectionBoxTitle>
                <UseCaseSectionBoxDesc>We offer precision targeting and marketing to potential users. Stop spraying and praying! 
                </UseCaseSectionBoxDesc>
              </UseCaseWrapper>
            </UseCaseSectionBox>
          </UseCaseSection>
        </FullPageSectionWrapper>
        <FullPageSectionWrapper>
          <SectionTitle>How does Web3Analytic work?</SectionTitle>
          <SectionDesc>We take on-chain data and use machine learning techniques to provide you with actionable and predictive insights about on-chain users using three data layers:
          </SectionDesc>
          <AlgorithmWrapper>
            <SectionData>
              <AlgorithmSection>
                <AlgorithmSectionBox>
                  <UlTriangle>
                    <LiTriangle3><b>Layer 3</b>&emsp;Use AI models to predict preferences, cluster similar users, and infer hidden insights.
                    </LiTriangle3>
                  </UlTriangle>
                </AlgorithmSectionBox>
                <AlgorithmSectionBox>
                  <UlTriangle>
                    <LiTriangle2>
                    <b>Layer 2</b>&emsp;Knowledge graph of Web3 users to store recent actions, choices, and behavior. 
                    </LiTriangle2>
                  </UlTriangle>
                </AlgorithmSectionBox>
                <AlgorithmSectionBox>
                  <UlTriangle>
                    <LiTriangle1><b>Layer 1</b>&emsp;Raw transaction data from L1, L2, and App chains. Updated live to stay in sync.
                    </LiTriangle1>
                  </UlTriangle>
                </AlgorithmSectionBox>
              </AlgorithmSection>
            </SectionData>
            <SectionImg src={Pyramid} />
          </AlgorithmWrapper>
        </FullPageSectionWrapper>
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
