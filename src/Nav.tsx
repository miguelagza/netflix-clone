import React, { useEffect, useState } from 'react';
import './Nav.css';

interface Props {}

const Nav: React.FC<Props> = () => {
  const [show, handleShow] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener('scroll', () => {});
    };
  }, []);

  return (
    <div className={`nav ${show && 'nav__black'}`}>
      <img
        className='nav__logo'
        src='http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png'
        alt='logo'
      />
      <img
        className='nav__avatar'
        src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
        alt='avatar'
      />
    </div>
  );
};

export default Nav;
