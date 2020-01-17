import PropTypes from 'prop-types'
import {useSpring, animated} from 'react-spring';

import '../styles/styles.css';

/* Animations */ 
const HeaderFadeInAnimation = ({headingText}, {subtext}) => {

  // Define one of our springs
  const fadeInQuick = useSpring({delay: 4000, opacity: 1, from: {opacity: 0}})
  const fadeInSlow = useSpring({delay: 5200, opacity: 1, from: {opacity: 0}})

  return (
    <div className="sm:w-full md:flex sm:ml-4 lg:ml-16 xl:mx-64">
      <animated.h1 className="sm:text-5xl md:text-8xl md:inline-block md:w-1/5 text-left md:self-end font-extrabold md:mr-56 lg:leading-tight" style={fadeInQuick}>{headingText}</animated.h1>
      <br />
      <animated.h2 className="text-3xl md:inline-block md:w-2/5 text-left md:self-end" style={fadeInSlow}>{subtext}</animated.h2>
    </div>
  )
}

export default HeaderFadeInAnimation;