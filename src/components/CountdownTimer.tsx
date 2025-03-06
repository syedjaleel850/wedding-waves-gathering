
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CountdownTimer = () => {
  // Wedding date: May 11, 2025 at 11:00 AM
  const weddingDate = new Date('2025-05-11T11:00:00').getTime();
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = weddingDate - now;
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    };

    // Calculate immediately and then set up interval
    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [weddingDate]);

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="mx-auto max-w-3xl"
    >
      <h3 className="mb-8 text-xl font-serif text-lavender-700 sm:text-2xl">Counting down to our special day</h3>
      
      <div className="flex flex-wrap justify-center gap-4">
        {timeUnits.map((unit) => (
          <motion.div
            key={unit.label}
            variants={itemVariants}
            className="flex min-w-[100px] flex-col items-center rounded-xl bg-white p-4 shadow-md"
          >
            <span className="text-3xl font-semibold text-lavender-700 sm:text-4xl">
              {unit.value < 10 ? `0${unit.value}` : unit.value}
            </span>
            <span className="mt-1 text-sm text-gray-500 sm:text-base">{unit.label}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default CountdownTimer;
