import React from 'react';
import {
  FooterText,
  FooterBack,
  // FooterMenu,
  FooterSection,
} from './styles/FooterComponents';
import { Link } from './styles/SharedComponents';

function scrollToTop() {
  window.scrollTo(0, 0);
}

function currentYear() {
  const date = new Date();
  const year = date.getFullYear();
  return year;
}

function Footer() {
  return (
    <FooterSection>
      <Link href="https://www.renita.io"><FooterText>&copy; {currentYear()} Renita M</FooterText></Link>
      {/* <FooterMenu>
        <Link href="#intro"><FooterText>Work</FooterText></Link>
        <Link href="#about"><FooterText>About</FooterText></Link>
        <Link href="https://standardresume.co/r/Xm38TEt7xRmavS8CZBW8d" target="_blank"><FooterText>Resume</FooterText></Link>
      </FooterMenu> */}
      <Link onClick={scrollToTop}><FooterBack>Back up &#8593;</FooterBack></Link>
    </FooterSection>
  );
}

export default Footer;
