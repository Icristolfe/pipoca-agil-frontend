import { useState, useEffect } from 'react';
import { Container, Popcorn } from './style';
import CentralContainer from '../../components/CentralContainer';
import Corn from '../../assets/corn.png';

function Splash() {
  const [containerWidth, setContainerWidth] = useState(window.innerWidth);
  const [popcorns, setPopcorns] = useState([]);
  const [startTime] = useState(Date.now());
  const [showLogin, setShowLogin] = useState(false);
  const [timeLimitReached, setTimeLimitReached] = useState(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const addPopcorn = () => {
    if (!timeLimitReached) {
      const newPopcorn = {
        top: Math.random() * (window.innerHeight - 100),
        left: Math.random() * (containerWidth - 50),
        rotation: Math.random() * 360,
        id: Date.now(),
      };
      setPopcorns((prevPopcorns) => [...prevPopcorns, newPopcorn]);
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const calculateInterval = () => {
    const elapsedTime = Date.now() - startTime;
    return Math.max(500 / Math.pow(2, Math.floor(elapsedTime / 250)), 5);
  };

  useEffect(() => {
    const popcornInterval = setInterval(() => {
      addPopcorn();
    }, calculateInterval());

    return () => {
      clearInterval(popcornInterval);
    };
  }, [addPopcorn, calculateInterval, popcorns, timeLimitReached]);

  useEffect(() => {
    const handleResize = () => {
      setContainerWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (!showLogin) {
      setTimeout(() => {
        setTimeLimitReached(true);
        setShowLogin(true);
      }, 10000);
    }
  }, [showLogin]);

 
return (
  <Container>
    {popcorns.map((popcorn) => (
      <Popcorn
        key={popcorn.id}
        src={Corn}
        alt='popcorn'
        style={{
          position: 'absolute',
          top: `${popcorn.top}px`,
          left: `${popcorn.left}px`,
          transform: `rotate(${popcorn.rotation}deg)`,
        }}
      />
    ))}

    {showLogin && (
      <CentralContainer showQuestion={timeLimitReached} />
    )}
  </Container>
);
}

export default Splash;
