import { FC } from 'react';
import styled from 'styled-components';

interface MenuItemProps {
  id: string;
  route: string;
  icon: string;
  label?: string;
}

interface MenuProps {
  items: MenuItemProps[];
  handleClick: (route: string) => void;
  currentLocation: string;
}

interface NavItemProps {
  route: string;
  currentLocation: string;
}

const Nav = styled.nav`
  display: flex;
  width: 100%;
  height: 40px;
  justify-content: center;
  margin-bottom: 120px;
`;

const NavItem = styled.div<NavItemProps>`
  width: calc(100% / 3);
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ route, currentLocation }) =>
    route === currentLocation ? '#4C5A65' : 'none'};
  padding: 0;
  text-align: center;
  cursor: pointer;
  border-bottom-style: solid;
  border-bottom-width: 3;
  border-bottom-color: ${({ route, currentLocation }) =>
    route === currentLocation ? 'rgba(0, 0, 0, 0.95)' : '#fff'};
  & img {
    width: 25px;
    height: 25px;
    filter: ${({ route, currentLocation }) =>
      route === currentLocation ? 'invert(100%)' : 'invert(0)'};
  }
`;

const Menu: FC<MenuProps> = ({ items, handleClick, currentLocation }) => {
  return (
    <Nav>
      {items.map((item) => (
        <NavItem
          key={item.id}
          onClick={() => handleClick(item.route)}
          currentLocation={currentLocation}
          route={item.route}
        >
          {<img src={item.icon} alt={item.label || ''} />}
        </NavItem>
      ))}
    </Nav>
  );
};

export default Menu;
