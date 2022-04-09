import React from 'react';
import profile from '../images/avatar.svg'
import './Nav.css';

const Nav = () => {
  return (
    <nav className='nav'>
      <div className='nav__container'>
        <img className='nav__avatar' alt='profile pic' src={profile} />
        <ul className='nav__options'>
          <a className='link' href='#work'>
            <li className='nav__item'>Work</li>
          </a>
          <a className='link' href='#about'>
            <li className='nav__item'>About</li>
          </a>
          <a className='link' href='#resume'>
            <li className='nav__item'>Resume</li>
          </a>
        </ul>
      </div>
    </nav>
  )
}

export default Nav;