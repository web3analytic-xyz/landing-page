import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Container from '../shared/Container';
import { Div } from './styles';

const Layout = () => (
  <Div>
    <Container>
      <Header />
      <Outlet />
    </Container>
    <Footer />
  </Div>
);

export default Layout;
