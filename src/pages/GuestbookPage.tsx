
import { useEffect } from "react";
import { motion } from "framer-motion";
import { MotionPage, pageTransition } from "@/lib/animations";
import Guestbook from "@/components/Guestbook";

const GuestbookPage = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
                Guestbook
              </h1>
              <p className="mx-auto max-w-3xl text-lg text-gray-600">
                Leave your wishes and blessings for the couple
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mb-12"
              >
                <Guestbook />
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </MotionPage>
  );
};

export default GuestbookPage;
