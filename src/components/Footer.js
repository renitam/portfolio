import React from "react";
import { FooterBack, FooterMenu, FooterSection } from "./styles/FooterComponents";
import { Link, Text3 } from "./styles/SharedComponents";

function scrollToTop() {
  window.scrollTo(0, 0);
}

const Footer = () => {
  return (
    <FooterSection>
      <Link href="https://www.renita.io"><Text3>&copy; 2021 your name</Text3></Link>
      <FooterMenu>
        <Link href="#intro"><Text3>Work</Text3></Link>
        <Link href="#about"><Text3>About</Text3></Link>
        <Link href="#resume"><Text3>Resume</Text3></Link>
        <Link href="#experiments"><Text3>Experiments</Text3></Link>
      </FooterMenu>
      <Link onClick={scrollToTop}><FooterBack>Back up &#8593;</FooterBack></Link>
    </FooterSection>
  )
}

export default Footer;