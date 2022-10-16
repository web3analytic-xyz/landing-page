import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DesktopNav from '../Navigation/Desktop/DesktopNav';
import MobileNav from '../Navigation/Mobile/MobileNav';
import Button from '../shared/Button/Button';
import LogoOrange from '../../assets/images/LogoOrange.png';
import { Div, Logo, Wrapper } from './styles';
import { LogoImg } from '../../helpers/shared-styles';

const Header = () => {
  const [responsive, setResponsive] = useState(false);
  const navigate = useNavigate();

  const handleResize = () => {
    const val = !!(window.innerWidth < 850);
    setResponsive(val);
  };

  useEffect(() => {
    setResponsive(window.innerWidth < 850);
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Div>
      <Logo onClick={() => navigate('/')}>
        <LogoImg src={LogoOrange} />
      </Logo>
      {!responsive && <DesktopNav navItems={navItems} />}
      <Wrapper>
        <Button>Coming soon!</Button>
        {responsive && <MobileNav navItems={navItems} />}
      </Wrapper>
    </Div>
  );
};

export default Header;

export const navItems = [
  // {
  //   label: 'Research',
  //   path: '/research',
  // },
  // {
  //   label: 'Community',
  //   path: '/community',
  // },
  // {
  //   label: 'Blog',
  //   path: '/blog',
  // },
  // {
  //   label: 'FAQ',
  //   path: '/faq',
  // },
  // {
  //   label: 'Analytics',
  //   path: '/analytics',
  // },
];
