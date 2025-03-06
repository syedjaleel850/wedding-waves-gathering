
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import CountdownTimer from './CountdownTimer';

const Hero = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/public/lovable-uploads/0e43e1b2-6215-4c1d-b219-625da2680e04.png')`,
            opacity: 0.15,
            backgroundSize: '200px',
            filter: 'blur(1px)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
      </div>

      <div className="container relative z-10 mx-auto px-4 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={loaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-2 inline-block rounded-full bg-lavender-100 px-4 py-1 text-sm font-medium text-lavender-800"
        >
          Save The Date • May 11, 2025
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={loaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-6 font-serif text-4xl font-medium tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-7xl"
        >
          <span className="block font-cursive text-lavender-600">Rahamathunisha</span>
          <span className="mx-4 inline-block text-gold-500">&</span>
          <span className="block font-cursive text-lavender-600">Syed Azmathulla</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={loaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mx-auto mb-12 max-w-2xl text-lg text-gray-600 sm:text-xl"
        >
          In the name of Allah, the most compassionate, the most Merciful and the Most Beneficent,
          we invite you to join us in celebrating our special day.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={loaded ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <CountdownTimer />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={loaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-12 flex flex-col justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"
        >
          <a
            href="/rsvp"
            className="group relative overflow-hidden rounded-full bg-lavender-600 px-8 py-3 font-medium text-white shadow-md transition-all duration-300 hover:bg-lavender-700 hover:shadow-lg"
          >
            <span className="relative z-10">RSVP Now</span>
            <span className="absolute inset-0 -z-0 bg-white opacity-0 transition-opacity group-hover:opacity-10"></span>
          </a>
          <a
            href="/details"
            className="gold-border rounded-full bg-white/80 px-8 py-3 font-medium text-lavender-700 shadow-sm backdrop-blur-sm transition-all duration-300 hover:bg-white hover:shadow-md"
          >
            Event Details
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 1.5, 
            delay: 1.2,
            repeat: Infinity,
            repeatType: "reverse" 
          }}
        >
          <a
            href="#event-details"
            aria-label="Scroll down"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-white/80 text-lavender-500 shadow-sm backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-lavender-600 hover:shadow-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
