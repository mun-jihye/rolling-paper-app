import { useState, useEffect } from 'react';

const useDeviceType = () => {
  const [deviceType, setDeviceType] = useState();

  useEffect(() => {
    const checkDeviceType = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 1200) {
        setDeviceType('PC');
        return;
      }
      if (screenWidth >= 768) {
        setDeviceType('Tablet');
        return;
      }
      setDeviceType('Mobile');
    };

    checkDeviceType();
    window.addEventListener('resize', checkDeviceType);

    return () => {
      window.removeEventListener('resize', checkDeviceType);
    };
  }, []);

  return deviceType;
};

export default useDeviceType;
