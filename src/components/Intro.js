import React from "react";
import './Intro.css';

const Intro = () => {
  return (
    <section className="intro">
      <div className="intro__gradients">
        <div className="intro__gradient1" />
        <div className="intro__gradient2" />
      </div>
      <article className="intro__content">
        <h1 className="intro__title">Hi, I'm Renita</h1>
        <p className="intro__about">
          I’m a customer-centric software engineer with experience building the tools and processes that help my teams win 
        </p>
        <div className='intro__actions'>
          <button className="intro__button">Say Hi 👋</button>
          <a className="intro__link" href='#work'>
            <p className="intro__call">See my work &#8595;</p>
          </a>
        </div>
      </article>
    </section>
  )
}

export default Intro;