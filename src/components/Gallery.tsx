
import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Gallery = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

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
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 80,
        damping: 15,
      },
    },
  };

  // Placeholder gallery grid - typically these would be actual images
  const galleryItems = Array(8).fill(null).map((_, i) => ({
    id: i,
    title: `Gallery Image ${i + 1}`,
    placeholder: true,
  }));

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="heading-divider">
          <h2 className="text-2xl font-serif font-medium text-gray-900 sm:text-3xl md:text-4xl">
            Photo Gallery
          </h2>
        </div>

        <p className="mx-auto mt-6 max-w-2xl text-center text-gray-600">
          Our journey together in pictures. We'll be adding more photos after our wedding day!
        </p>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4"
        >
          {galleryItems.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="gallery-image group aspect-square overflow-hidden"
            >
              {item.placeholder ? (
                <div className="flex h-full flex-col items-center justify-center bg-gradient-to-br from-lavender-100 to-lavender-200 p-4 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/80 text-lavender-400">
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
                      <path d="M15 8h.01" />
                      <rect width="16" height="16" x="4" y="4" rx="3" />
                      <path d="m4 15 4-4a3 5 0 0 1 3 0l5 5" />
                      <path d="m14 14 1-1a3 5 0 0 1 3 0l2 2" />
                    </svg>
                  </div>
                  <p className="mt-4 text-sm font-medium text-lavender-600">
                    Photo coming soon
                  </p>
                </div>
              ) : (
                <img
                  src={`/gallery/${item.id}.jpg`}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              )}
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-10 text-center">
          <a
            href="/photos"
            className="inline-flex items-center rounded-full bg-white px-6 py-3 font-medium text-lavender-700 shadow-sm transition-all duration-300 hover:bg-lavender-50 hover:shadow-md"
          >
            View More Photos
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ml-2 h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
