import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  IconWrapper, Nav, Ul, Li, Div,
} from './styles';
import MenuIcon from '../../../Icons/MenuIcon';
import CloseIcon from '../../../Icons/CloseIcon';

const MobileNav = ({ navItems }) => {
  const { pathname } = useLocation();
  const [show, setShow] = useState(false);
  const navRef = useRef();
  const iconsRef = useRef();
  const scrollPos = useRef();

  const handleClickOutside = (event) => {
    if (navRef.current && !navRef.current.contains(event.target) && !iconsRef.current.contains(event.target)) {
      setShow(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  useEffect(() => {
    if (show) {
      scrollPos.current = {
        x: window.scrollX,
        y: window.scrollY,
      };
    }
  }, [show]);

  const disableScroll = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    if (show) {
      window.addEventListener('scroll', disableScroll);
      window.scrollTo(0, 0);
    }
    return () => window.removeEventListener('scroll', disableScroll);
  }, [show]);
  return (
    <Div>
      <IconWrapper showBg={show} onClick={() => setShow(!show)} ref={iconsRef}>
        {show ? <CloseIcon /> : <MenuIcon />}
      </IconWrapper>
      <Nav show={show}>
        <Ul ref={navRef}>
          {navItems.map((el) => <Li active={pathname === el.path} key={el.path}><Link to={el.path}>{el.label}</Link></Li>)}
        </Ul>
      </Nav>
    </Div>
  );
};

export default MobileNav;
