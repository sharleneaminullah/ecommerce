import React from 'react';
import './footer.styles.scss';
import { AUTHRO_EMAIL } from '../../helpers';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className='footer'>
      {year} © Clas Ohlson by <a href={"mailto:" + AUTHRO_EMAIL}>Sharlene Aminullah</a>
    </div>
  );
}

export default Footer;