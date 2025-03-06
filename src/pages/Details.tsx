
import { useEffect } from "react";
import { motion } from "framer-motion";
import { MotionPage, pageTransition } from "@/lib/animations";
import { Map, Calendar, Clock, Gift } from "lucide-react";

const Details = () => {
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
                Wedding Details
              </h1>
              <p className="mx-auto max-w-3xl text-lg text-gray-600">
                Everything you need to know about our wedding celebration
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="mb-16 grid gap-8 md:grid-cols-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="floral-card text-center"
              >
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-lavender-100 text-lavender-600">
                  <Calendar size={28} />
                </div>
                <h3 className="mb-2 text-xl font-serif font-medium text-gray-900">
                  The Date
                </h3>
                <p className="mb-1 text-gray-700">
                  Sunday, May 11, 2025
                </p>
                <p className="text-sm text-gray-500">
                  The 12th, Dhul-Qi'dah, 1446 Hijri
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="floral-card text-center"
              >
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-lavender-100 text-lavender-600">
                  <Clock size={28} />
                </div>
                <h3 className="mb-2 text-xl font-serif font-medium text-gray-900">
                  The Time
                </h3>
                <p className="mb-1 text-gray-700">
                  Ceremony starts at 11:00 AM
                </p>
                <p className="text-sm text-gray-500">
                  Please arrive by 10:30 AM
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="floral-card text-center"
              >
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-lavender-100 text-lavender-600">
                  <Map size={28} />
                </div>
                <h3 className="mb-2 text-xl font-serif font-medium text-gray-900">
                  The Venue
                </h3>
                <p className="mb-1 text-gray-700">
                  Sri Ramakrishna Thirumana Mandapam
                </p>
                <p className="text-sm text-gray-500">
                  Chengalpattu, Tamil Nadu
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="floral-card"
            >
              <h3 className="mb-6 text-center text-2xl font-serif font-medium text-gray-900">
                Venue Information
              </h3>
              <div className="mb-6 aspect-video rounded-lg bg-gray-200">
                <div className="flex h-full items-center justify-center text-gray-500">
                  Interactive map will be available soon
                </div>
              </div>
              <div className="text-gray-700">
                <p className="mb-4">
                  <strong>Sri Ramakrishna Thirumana Mandapam</strong><br />
                  No.1, Villiyampakkam, Chengalpattu - 603 001<br />
                  (Near Villayampakkam Bus Stand & Railway Station)
                </p>
                <div className="mb-4 rounded-md bg-lavender-50 p-4">
                  <h4 className="mb-2 font-medium text-lavender-800">Getting There:</h4>
                  <ul className="ml-4 list-disc space-y-1 text-gray-600">
                    <li>
                      <strong>By Car:</strong> The venue is easily accessible by car, with parking available on-site.
                    </li>
                    <li>
                      <strong>By Public Transport:</strong> The venue is conveniently located near Villayampakkam Bus Stand and Railway Station.
                    </li>
                  </ul>
                </div>
                <p>
                  <a
                    href="https://maps.google.com/?q=Sri+Ramakrishna+Thirumana+Mandapam+Chengalpattu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center rounded-md bg-lavender-100 px-4 py-2 text-sm font-medium text-lavender-700 transition-colors hover:bg-lavender-200"
                  >
                    <Map className="mr-2" size={16} />
                    Get Directions
                  </a>
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-8 floral-card"
            >
              <h3 className="mb-6 text-center text-2xl font-serif font-medium text-gray-900">
                Wedding Day Schedule
              </h3>
              <div className="space-y-8">
                <div className="flex">
                  <div className="mr-6 flex-none text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-lavender-100 text-lavender-800">
                      <span className="text-lg font-medium">10:30</span>
                    </div>
                    <span className="mt-1 block text-xs font-medium text-gray-500">AM</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900">Guest Arrival</h4>
                    <p className="text-gray-600">
                      Welcome drinks and refreshments will be served as guests arrive
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="mr-6 flex-none text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-lavender-100 text-lavender-800">
                      <span className="text-lg font-medium">11:00</span>
                    </div>
                    <span className="mt-1 block text-xs font-medium text-gray-500">AM</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900">Nikkah Ceremony</h4>
                    <p className="text-gray-600">
                      The Islamic marriage ceremony will take place
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="mr-6 flex-none text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-lavender-100 text-lavender-800">
                      <span className="text-lg font-medium">12:30</span>
                    </div>
                    <span className="mt-1 block text-xs font-medium text-gray-500">PM</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900">Wedding Lunch</h4>
                    <p className="text-gray-600">
                      Join us for a traditional celebration lunch
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="mr-6 flex-none text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-lavender-100 text-lavender-800">
                      <span className="text-lg font-medium">2:30</span>
                    </div>
                    <span className="mt-1 block text-xs font-medium text-gray-500">PM</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900">Farewell</h4>
                    <p className="text-gray-600">
                      Guests can congratulate the newlyweds before departure
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-8 floral-card"
            >
              <div className="flex items-center justify-center">
                <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-lavender-100 text-lavender-600">
                  <Gift size={24} />
                </div>
                <h3 className="text-2xl font-serif font-medium text-gray-900">
                  Gift Registry
                </h3>
              </div>
              
              <p className="mt-4 text-center text-gray-600">
                Your presence at our wedding is the greatest gift. However, if you wish to honor us with a gift, we have created a registry.
              </p>
              
              <div className="mt-6 text-center">
                <button
                  disabled
                  className="inline-flex items-center rounded-full bg-lavender-100 px-6 py-3 font-medium text-lavender-400 opacity-70"
                >
                  Registry Coming Soon
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MotionPage>
  );
};

export default Details;
