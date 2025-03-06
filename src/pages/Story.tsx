
import { useEffect } from "react";
import { motion } from "framer-motion";
import { MotionPage, pageTransition } from "@/lib/animations";

const Story = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const timelineItems = [
    {
      title: "First Meeting",
      date: "2023",
      description: "Our journey began when we first met through mutual friends. It was an instant connection as we discovered our shared values and interests."
    },
    {
      title: "Growing Closer",
      date: "2023",
      description: "As we spent more time together, our bond grew stronger. We realized how well we complement each other, with shared dreams and aspirations."
    },
    {
      title: "Family Introductions",
      date: "2024",
      description: "We introduced each other to our families, who were supportive and happy to see the love we share. Their blessings meant the world to us."
    },
    {
      title: "The Proposal",
      date: "2024",
      description: "With the blessings of our families, we decided to take our relationship to the next level and commit to spending our lives together."
    },
    {
      title: "Wedding Planning",
      date: "2025",
      description: "Planning our wedding has been an exciting journey, bringing us even closer as we prepare to start our life together."
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
                Our Love Story
              </h1>
              <p className="mx-auto max-w-3xl text-lg text-gray-600">
                The journey of Rahamathunisha and Syed Azmathulla
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
                className="mb-16 text-center"
              >
                <p className="text-lg leading-relaxed text-gray-700">
                  Allah has a way of bringing two souls together. Our story is a testament to how faith, patience, and trust in His plan can lead to finding your perfect match.
                </p>
              </motion.div>

              <div className="relative">
                <div className="absolute left-1/2 top-0 -ml-px h-full w-0.5 bg-lavender-200"></div>

                {timelineItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    className={`relative mb-16 ${
                      index % 2 === 0 ? 'md:mr-auto md:ml-0' : 'md:ml-auto md:mr-0'
                    } md:w-2/5`}
                  >
                    <div
                      className={`flex ${
                        index % 2 === 0
                          ? 'md:flex-row-reverse md:justify-start'
                          : 'md:flex-row md:justify-start'
                      }`}
                    >
                      <div className="relative z-10 -mt-2 ml-4 mr-4 flex h-14 w-14 flex-none items-center justify-center rounded-full bg-white shadow-md">
                        <div className="h-8 w-8 rounded-full bg-lavender-300"></div>
                      </div>
                      <div
                        className={`floral-card ${
                          index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                        }`}
                      >
                        <h3 className="mb-1 text-xl font-serif font-medium text-gray-900">
                          {item.title}
                        </h3>
                        <p className="mb-3 text-sm font-medium text-lavender-500">
                          {item.date}
                        </p>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="mt-20 floral-card text-center"
              >
                <h3 className="mb-4 text-2xl font-serif font-medium text-lavender-700">
                  About Rahamathunisha
                </h3>
                <p className="mb-2 text-lg font-medium text-gray-900">
                  H. Rahamathunisha, BSc, MBA
                </p>
                <p className="mb-4 text-gray-600">
                  Assistant Manager, SBI Mutual Funds
                </p>
                <p className="text-gray-700">
                  Daughter of A. Hayath Basha, BA & H. Shakila Begum, Rahamathunisha brings intelligence, grace and dedication to everything she does. Her warm personality and compassionate nature make her beloved by family and friends alike.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="mt-8 floral-card text-center"
              >
                <h3 className="mb-4 text-2xl font-serif font-medium text-lavender-700">
                  About Syed Azmathulla
                </h3>
                <p className="mb-2 text-lg font-medium text-gray-900">
                  S. Syed Azmathulla, BE (EEE)
                </p>
                <p className="mb-4 text-gray-600">
                  Senior Analyst, Barclays
                </p>
                <p className="text-gray-700">
                  Son of Syed Khaleel Ahamed & Shamila Begum, Syed is known for his intelligence, integrity and kind heart. His commitment to faith and family values has prepared him well for this new chapter in life.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="mt-12 text-center"
              >
                <p className="text-xl font-serif italic text-lavender-700">
                  "And of His signs is that He created for you from yourselves mates that you may find tranquility in them; and He placed between you affection and mercy. Indeed in that are signs for a people who give thought."
                </p>
                <p className="mt-2 text-sm text-gray-500">— Quran 30:21</p>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </MotionPage>
  );
};

export default Story;
