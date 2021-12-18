import React from 'react';
import Particles from 'react-tsparticles';
import { particleOptions } from '../../constants/particleOptions';

const ParticleEffect = () => {
    const particlesInit = () => {};

    const particlesLoaded = () => {};

    return (
      <Particles 
        id="particle-effect"
        init={particlesInit}
        loaded={particlesLoaded}
        options={particleOptions}
     />
    );
};

export default ParticleEffect;
