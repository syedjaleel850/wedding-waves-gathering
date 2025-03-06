
import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, Clock, MapPin, Map } from 'lucide-react';

const EventDetails = () => {
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
        staggerChildren: 0.2,
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
    <section 
      id="event-details" 
      className="py-20"
    >
      <div className="container mx-auto px-4">
        <div className="heading-divider">
          <h2 className="text-2xl font-serif font-medium text-gray-900 sm:text-3xl md:text-4xl">
            Wedding Details
          </h2>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="mt-12 grid gap-8 md:grid-cols-2"
        >
          <motion.div variants={itemVariants} className="floral-card">
            <div className="mb-4 flex items-center">
              <Calendar className="mr-2 text-lavender-600" size={24} />
              <h3 className="text-xl font-serif font-medium text-gray-900">Date</h3>
            </div>
            <p className="mb-2 text-lg text-gray-700">Sunday, May 11, 2025</p>
            <p className="text-sm text-gray-500">
              The 12th, Dhul-Qi'dah, 1446 Hijri
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="floral-card">
            <div className="mb-4 flex items-center">
              <Clock className="mr-2 text-lavender-600" size={24} />
              <h3 className="text-xl font-serif font-medium text-gray-900">Time</h3>
            </div>
            <p className="mb-2 text-lg text-gray-700">Beginning at 11:00 AM</p>
            <p className="text-sm text-gray-500">Followed by Nikkah lunch</p>
          </motion.div>

          <motion.div 
            variants={itemVariants} 
            className="floral-card md:col-span-2"
          >
            <div className="mb-4 flex items-center">
              <MapPin className="mr-2 text-lavender-600" size={24} />
              <h3 className="text-xl font-serif font-medium text-gray-900">Venue</h3>
            </div>
            <p className="mb-2 text-lg font-medium text-gray-700">
              Sri Ramakrishna Thirumana Mandapam
            </p>
            <p className="mb-4 text-gray-600">
              No.1, Villiyampakkam, Chengalpattu - 603 001
              <br />
              (Near Villayampakkam Bus Stand & Railway Station)
            </p>
            
            <a
              href="https://maps.google.com/?q=Sri+Ramakrishna+Thirumana+Mandapam+Chengalpattu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-md bg-lavender-100 px-4 py-2 text-sm font-medium text-lavender-700 transition-colors hover:bg-lavender-200"
            >
              <Map className="mr-2" size={16} />
              Open in Google Maps
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="mt-16"
        >
          <div className="heading-divider">
            <h2 className="text-2xl font-serif font-medium text-gray-900 sm:text-3xl">
              Schedule
            </h2>
          </div>

          <div className="mt-8 pl-4">
            <div className="event-timeline-item">
              <h4 className="mb-1 text-lg font-medium text-gray-900">Arrival & Welcome</h4>
              <p className="mb-1 text-sm text-lavender-600">10:30 AM</p>
              <p className="text-gray-600">
                Guests arrive and are welcomed with refreshments
              </p>
            </div>

            <div className="event-timeline-item">
              <h4 className="mb-1 text-lg font-medium text-gray-900">Nikkah Ceremony</h4>
              <p className="mb-1 text-sm text-lavender-600">11:00 AM</p>
              <p className="text-gray-600">
                The Islamic marriage ceremony
              </p>
            </div>

            <div className="event-timeline-item">
              <h4 className="mb-1 text-lg font-medium text-gray-900">Wedding Lunch</h4>
              <p className="mb-1 text-sm text-lavender-600">12:30 PM</p>
              <p className="text-gray-600">
                Join us for a traditional celebration lunch
              </p>
            </div>

            <div className="event-timeline-item">
              <h4 className="mb-1 text-lg font-medium text-gray-900">Well-wishes & Departure</h4>
              <p className="mb-1 text-sm text-lavender-600">2:30 PM onwards</p>
              <p className="text-gray-600">
                Opportunity for guests to congratulate the newlyweds
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EventDetails;
