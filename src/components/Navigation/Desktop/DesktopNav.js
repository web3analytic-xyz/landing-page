import { Link, useLocation } from 'react-router-dom';
import { Ul, Li } from './styles';

const DesktopNav = ({ navItems }) => {
  const { pathname } = useLocation();
  return (
    <nav>
      <Ul>
        {navItems.map((el) => <Li active={pathname === el.path} key={el.path}><Link to={el.path}>{el.label}</Link></Li>)}
      </Ul>
    </nav>
  );
};

export default DesktopNav;
