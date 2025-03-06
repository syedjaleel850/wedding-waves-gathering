
import { useEffect } from "react";
import { motion } from "framer-motion";
import { MotionPage, pageTransition } from "@/lib/animations";

const Photos = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const photos = [
    {
      id: 1,
      src: "/placeholder.svg",
      alt: "Photo 1",
      caption: "Our first date"
    },
    {
      id: 2,
      src: "/placeholder.svg",
      alt: "Photo 2",
      caption: "Family gathering"
    },
    {
      id: 3,
      src: "/placeholder.svg",
      alt: "Photo 3",
      caption: "Engagement ceremony"
    },
    {
      id: 4,
      src: "/placeholder.svg",
      alt: "Photo 4",
      caption: "Pre-wedding photoshoot"
    },
    {
      id: 5,
      src: "/placeholder.svg",
      alt: "Photo 5",
      caption: "With friends"
    },
    {
      id: 6,
      src: "/placeholder.svg",
      alt: "Photo 6",
      caption: "Special moments"
    }
  ];

  return (
    <MotionPage
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
      className="page-container"
    >
      <div className="pt-20">
        <section className="relative min-h-[50vh] bg-lavender-50 py-20">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-5"
            style={{
              backgroundImage: `url('/public/lovable-uploads/0e43e1b2-6215-4c1d-b219-625da2680e04.png')`,
              backgroundSize: '200px',
            }}
          />
          <div className="container relative z-10 mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <h1 className="mb-6 font-serif text-4xl font-medium tracking-tight text-gray-900 sm:text-5xl">
                Our Photo Gallery
              </h1>
              <p className="mx-auto max-w-3xl text-lg text-gray-600">
                Capturing our journey together in pictures
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-6xl">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-12"
              >
                <p className="text-lg text-gray-700">
                  Browse through our collection of moments that tell our story. More photos will be added after the wedding!
                </p>
              </motion.div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {photos.map((photo, index) => (
                  <motion.div
                    key={photo.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="floral-card overflow-hidden"
                  >
                    <div className="aspect-square bg-gray-100 overflow-hidden">
                      <img
                        src={photo.src}
                        alt={photo.alt}
                        className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    <div className="p-4 text-center">
                      <p className="text-gray-700">{photo.caption}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="mt-16 text-center"
              >
                <p className="text-lg text-gray-700 italic">
                  "A picture is worth a thousand words, but the memories we capture together are priceless."
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </MotionPage>
  );
};

export default Photos;
