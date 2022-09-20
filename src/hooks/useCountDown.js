import { useEffect, useState } from 'react';

const getCountDownValues = countDown => {
  const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  );
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

  return [days, hours, minutes, seconds];
};

const useCountDown = targetDate => {
  const targetDateInSeconds = new Date(targetDate).getTime();

  const [countDownInSeconds, setCountDownInSeconds] = useState(
    targetDateInSeconds - new Date().getTime(),
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDownInSeconds(targetDateInSeconds - new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDateInSeconds]);

  return getCountDownValues(countDownInSeconds);
};

export { useCountDown };
