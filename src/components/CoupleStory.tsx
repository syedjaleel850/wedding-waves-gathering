
import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const CoupleStory = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [activeStory, setActiveStory] = useState(0);

  const storyTimeline = [
    {
      title: "How We Met",
      date: "2023",
      description: "Our worlds collided through mutual friends and divine timing. What started as casual conversation quickly revealed how much we had in common.",
    },
    {
      title: "Our First Date",
      date: "2023",
      description: "We spent hours talking over coffee, losing track of time as we discovered more about each other's dreams and aspirations.",
    },
    {
      title: "The Proposal",
      date: "2024",
      description: "With the blessings of our families, we decided to embark on this beautiful journey of marriage together.",
    },
    {
      title: "Looking Forward",
      date: "2025",
      description: "We're excited to begin our lives together, with shared values, mutual respect, and a deep commitment to building a loving home.",
    },
  ];

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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
        stiffness: 80,
        damping: 15,
      },
    },
  };

  return (
    <section className="bg-gradient-to-b from-white to-lavender-50 py-20">
      <div className="container mx-auto px-4">
        <div className="heading-divider">
          <h2 className="text-2xl font-serif font-medium text-gray-900 sm:text-3xl md:text-4xl">
            Our Story
          </h2>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="mt-12"
        >
          <div className="flex flex-col space-y-6 md:flex-row md:space-x-6 md:space-y-0">
            <motion.div variants={itemVariants} className="md:w-1/3">
              <div className="h-full rounded-2xl bg-white p-6 shadow-sm">
                {storyTimeline.map((story, index) => (
                  <div
                    key={index}
                    className={`mb-4 cursor-pointer rounded-lg p-4 transition-colors ${
                      activeStory === index
                        ? 'bg-lavender-100 text-lavender-800'
                        : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                    }`}
                    onClick={() => setActiveStory(index)}
                  >
                    <h3 className="text-lg font-medium">{story.title}</h3>
                    <p className="text-sm">{story.date}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="floral-card md:w-2/3">
              <h3 className="mb-2 text-2xl font-serif font-medium text-lavender-700">
                {storyTimeline[activeStory].title}
              </h3>
              <p className="mb-4 text-sm font-medium text-lavender-500">
                {storyTimeline[activeStory].date}
              </p>
              <p className="text-gray-700">
                {storyTimeline[activeStory].description}
              </p>

              <div className="mt-8 flex justify-center">
                <div className="grid grid-cols-2 gap-4">
                  <div className="aspect-square overflow-hidden rounded-lg bg-lavender-200 opacity-80">
                    <div className="flex h-full items-center justify-center text-center text-sm text-lavender-600">
                      Photos coming soon
                    </div>
                  </div>
                  <div className="aspect-square overflow-hidden rounded-lg bg-lavender-200 opacity-80">
                    <div className="flex h-full items-center justify-center text-center text-sm text-lavender-600">
                      Photos coming soon
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex justify-center">
                <div className="flex space-x-2">
                  {storyTimeline.map((_, index) => (
                    <button
                      key={index}
                      className={`h-2 w-2 rounded-full transition-all ${
                        activeStory === index
                          ? 'w-4 bg-lavender-500'
                          : 'bg-lavender-200'
                      }`}
                      onClick={() => setActiveStory(index)}
                      aria-label={`View story ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="mt-16 grid gap-8 md:grid-cols-2"
        >
          <motion.div variants={itemVariants} className="floral-card">
            <h3 className="mb-4 text-center text-xl font-serif font-medium text-gray-900">
              Rahamathunisha
            </h3>
            <div className="aspect-[3/4] overflow-hidden rounded-lg bg-lavender-100">
              <div className="flex h-full flex-col items-center justify-center p-6 text-center">
                <p className="mb-2 text-lg font-medium text-lavender-700">
                  H. Rahamathunisha, BSc, MBA
                </p>
                <p className="text-sm text-gray-600">
                  Assistant Manager, SBI Mutual Funds
                </p>
                <p className="mt-4 text-sm text-gray-500">
                  Daughter of A. Hayath Basha, BA & H. Shakila Begum
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="floral-card">
            <h3 className="mb-4 text-center text-xl font-serif font-medium text-gray-900">
              Syed Azmathulla
            </h3>
            <div className="aspect-[3/4] overflow-hidden rounded-lg bg-lavender-100">
              <div className="flex h-full flex-col items-center justify-center p-6 text-center">
                <p className="mb-2 text-lg font-medium text-lavender-700">
                  S. Syed Azmathulla, BE (EEE)
                </p>
                <p className="text-sm text-gray-600">
                  Senior Analyst, Barclays
                </p>
                <p className="mt-4 text-sm text-gray-500">
                  Son of Syed Khaleel Ahamed & Shamila Begum
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CoupleStory;
