import React from 'react';
import {
  CopyRightDesc, CopyRightTitle, Div, Grid, CopyRight, ListITitle, List, ListItem, Contact, Icons, A, Email,
} from './styles';
import Container from '../shared/Container';
import GithubIcon from '../../Icons/GithubIcon';
import TwitterIcon from '../../Icons/TwitterIcon';
import MessageIcon from '../../Icons/MessageIcon';

const Footer = () => (
  <Div>
    <Container disableYPaddings>
      <Grid>
        <CopyRight>
          <CopyRightTitle>Web3Analytic</CopyRightTitle>
          <CopyRightDesc>
            Copyright &#169; Pareto Labs 2022.
            <span style={{ marginTop: '5px', display: 'block' }}> All rights reserved</span>
          </CopyRightDesc>
        </CopyRight>
        <List>
          <ListITitle>Organization</ListITitle>
          <ListItem>Coming Soon!</ListItem>
        </List>
        <List>
          <ListITitle>Resources</ListITitle>
          <ListItem>Coming Soon!</ListItem>
        </List>
        <Contact>
          <Icons>
            <A href="https://github.com/web3-analytic"><GithubIcon /></A>
            <A href="https://twitter.com/Web3Analytic"><TwitterIcon /></A>
            <A href="mailto:team@paretolabs.xyz"><MessageIcon /></A>
          </Icons>
          <ListITitle>Get In Touch</ListITitle>
          <Email><MessageIcon />team@paretolabs.xyz</Email>
        </Contact>
      </Grid>
    </Container>
  </Div>
);

export default Footer;
