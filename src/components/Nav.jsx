import React from 'react';
import logo from '../assets/logo.png';

export default function Nav() {
  return (

        <nav>
            <ul>
                <li>
                  <span>
                  <img src={logo} alt="logo image" /> 
                  </span>
                </li>
                <li>
                    <button className='contact-btn'>Contact</button>
                </li>
            </ul>
        </nav>

  )
}
