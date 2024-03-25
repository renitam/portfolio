import React from 'react';
import profile from '../images/avatar.png';
import linkedin from '../images/linkedin-circle.svg';
import github from '../images/github-circle.svg';
import tiktok from '../images/tiktok-circle.svg';

import {
  Avatar,
  NavMenu,
  NavOptions,
  // NavItem,
  // NavLink,
  NavSocials,
  NavIcon,
} from './styles/NavComponents';

import { Link } from './styles/SharedComponents';

function Nav() {
  return (
    <NavMenu id="nav">
      <Avatar alt="profile pic" src={profile} />
      <NavOptions>
        {/* <NavLink href="work">
          <NavItem>Work</NavItem>
        </NavLink>
        <NavLink href="about">
          <NavItem>About</NavItem>
        </NavLink>
        <NavLink href="https://standardresume.co/r/Xm38TEt7xRmavS8CZBW8d" target="_blank">
          <NavItem>Resume</NavItem>
        </NavLink> */}
      </NavOptions>
      <NavSocials>
        <Link href="https://www.github.com/renitam" target="_blank">
          <NavIcon src={github} alt="GitHub icon" />
        </Link>
        <Link href="https://www.tiktok.com/@renitadevlab" target="_blank">
          <NavIcon src={tiktok} alt="TikTok icon" />
        </Link>
        <Link href="https://www.linkedin.com/in/mwangachuchu/" target="_blank">
          <NavIcon src={linkedin} alt="LinkedIn icon" />
        </Link>
      </NavSocials>
    </NavMenu>
  );
}

export default Nav;