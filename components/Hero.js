import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {useSpring, animated} from 'react-spring';

/* CSS Styles */ 
const headerContentStyle = {
  color: '#ffffff',
  fontFamily: 'Barlow, sans-serif',
  textAlign: 'center',
  margin: '0 auto',
  zIndex: '999',
  position: 'relative'
}

/* Component Layout */ 
const Hero = ({children}) => {

  const fadeIn = useSpring({delay: 7000, opacity: 1, from: {opacity: 0}})

  return (
    <div className="background sm:h-260 md:h-100 lg:h-75 max-w-full text-center">
      <div className="header__content w-full" style={headerContentStyle}>
        {children}
      </div>

      <style jsx>{`
        a:hover {
          transition: .5s;
          text-decoration: underline !important;
          cursor: pointer !important;
        }
      `}</style>
    </div>
  )
}

export default Hero;