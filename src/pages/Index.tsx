
import { useEffect } from "react";
import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import EventDetails from "@/components/EventDetails";
import CoupleStory from "@/components/CoupleStory";
import Gallery from "@/components/Gallery";
import RSVP from "@/components/RSVP";
import Guestbook from "@/components/Guestbook";

const Index = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="page-container"
    >
      <Hero />
      <EventDetails />
      <CoupleStory />
      <Gallery />
      <RSVP />
      <Guestbook />
      
      <footer className="bg-gradient-to-b from-lavender-50 to-white py-12 text-center">
        <div className="container mx-auto px-4">
          <h3 className="font-cursive text-2xl font-medium text-lavender-600">
            Rahamathunisha & Syed Azmathulla
          </h3>
          <p className="mt-2 text-gray-600">
            May 11, 2025 • Chengalpattu, Tamil Nadu
          </p>
          <p className="mt-8 text-sm text-gray-500">
            &copy; {new Date().getFullYear()} • Wedding Invitation Website
          </p>
        </div>
      </footer>
    </motion.div>
  );
};

export default Index;
