import React from 'react';

import GlitchClip from 'react-glitch-effect/core/Clip';

import './Header.scss';

import Navigation from '../../common/Navigation/Navigation';

const Header = () => {
  return (
    <div className='Header'>
      <div className='Header__Logo'>
        <GlitchClip>
          <h3 className='Header__Logo-h3'>Łukasz Dawidowicz</h3>
          <p className='Header__Logo-paragraph'>Front-End Developer</p>
        </GlitchClip>
      </div>
      <Navigation />
    </div>
  );
};

export default Header;
