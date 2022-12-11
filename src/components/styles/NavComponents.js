import styled from 'styled-components';

import { Link } from './SharedComponents';
import dot from '../../images/navoptions.svg';

export const NavMenu = styled.nav`
  max-width: 1184px;
  padding: 20px 24px 0;
  position: relative;
  /* box-shadow: 0 2px 10px rgb(255 255 255 / 20%); */
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Avatar = styled.img`
  width: 70px;
  height: 68px;
  margin: 0;

  @media (max-width: 767px) {
    margin: 0 0 3px 24px;
    height: 44px;
    width: 44px;
  }
`;

export const NavOptions = styled.ul`
  list-style: none;
  display: flex;
  gap: 16px;
  padding: 0;
  margin: 0;
  background-color: rgba(34, 34, 34, 0.7);
  border-radius: 50px;

  @media (max-width: 767px) {
    justify-self: flex-end;
    margin: 0;
    padding: 0;
    gap: 0;
  }
`;

export const NavItem = styled.li`
  position: relative;
  font-family: 'SF Pro Text', 'sans-serif';
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 22px;
  letter-spacing: 0.0043em;
  color: #ffffff;
  margin: 12px 24px;
  padding: 24px 0;

  @media (max-width: 767px) {
    padding: 10px;
  }
`;

export const NavLink = styled(Link)`
  &:active {
    background-image: url(${dot});
    background-repeat: no-repeat;
    background-position: bottom center;
  }
`;

export const NavSocials = styled.div`
  margin: 0;
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;

export const NavIcon = styled.img`
  height: 30px;
  width: 30px;
  margin: 0 auto;
  fill: #ffffff;
`;
