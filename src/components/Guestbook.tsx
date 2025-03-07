
import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useToast } from '../hooks/use-toast';

const Guestbook = () => {
  const { toast } = useToast();
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Sample messages - in a real app, these would come from a database
  const [messages, setMessages] = useState([
    {
      id: 1,
      name: 'Fatima Ahmed',
      message: 'Congratulations on your beautiful union! May Allah bless your marriage with love, joy, and harmony.',
      date: '2 days ago'
    },
    {
      id: 2,
      name: 'Imran Khan',
      message: 'Wishing you both a lifetime of happiness together. May your love grow stronger with each passing day!',
      date: '3 days ago'
    },
    {
      id: 3,
      name: 'Aisha Patel',
      message: 'So happy for both of you! May Allah shower His blessings upon your marriage.',
      date: '1 week ago'
    }
  ]);

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive"
      });
      return;
    }
    setIsSubmitting(true);

    // Simulate adding a message
    setTimeout(() => {
      const newMessage = {
        id: messages.length + 1,
        name,
        message,
        date: 'Just now'
      };
      setMessages([newMessage, ...messages]);
      setName('');
      setMessage('');
      setIsSubmitting(false);
      toast({
        title: "Message Added",
        description: "Thank you for your lovely message!"
      });
    }, 1000);
  };

  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 80,
        damping: 15
      }
    }
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="heading-divider">
          <h2 className="text-2xl font-serif font-medium text-gray-900 sm:text-3xl md:text-4xl">
            Guestbook
          </h2>
        </div>

        <p className="mx-auto mt-6 max-w-2xl text-center text-gray-600">
          Leave a message of congratulations, well-wishes, or advice for the couple.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="floral-card">
            <h3 className="mb-4 text-xl font-serif font-medium text-gray-900">
              Leave a Message
            </h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-700">
                  Your Name*
                </label>
                <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} required className="w-full rounded-md border border-gray-300 px-4 py-2 text-gray-900 shadow-sm focus:border-lavender-500 focus:outline-none focus:ring-1 focus:ring-lavender-500" />
              </div>

              <div className="mb-4">
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-700">
                  Your Message*
                </label>
                <textarea id="message" value={message} onChange={e => setMessage(e.target.value)} required rows={4} className="w-full rounded-md border border-gray-300 px-4 py-2 text-gray-900 shadow-sm focus:border-lavender-500 focus:outline-none focus:ring-1 focus:ring-lavender-500"></textarea>
              </div>

              <button type="submit" disabled={isSubmitting} className="group relative overflow-hidden rounded-full bg-lavender-600 px-6 py-2 font-medium text-white shadow-md transition-all duration-300 hover:bg-lavender-700 hover:shadow-lg disabled:opacity-70">
                <span className="relative z-10">
                  {isSubmitting ? 'Sending...' : 'Post Message'}
                </span>
                <span className="absolute inset-0 -z-0 bg-white opacity-0 transition-opacity group-hover:opacity-10"></span>
              </button>
            </form>
          </div>

          <motion.div ref={ref} variants={containerVariants} initial="hidden" animate={controls} className="floral-card max-h-[480px] overflow-y-auto">
            <h3 className="mb-4 text-xl font-serif font-medium text-gray-900">
              Recent Messages
            </h3>

            {messages.length > 0 ? (
              <div className="space-y-4">
                {messages.map(msg => (
                  <motion.div key={msg.id} variants={itemVariants} className="rounded-lg bg-white p-4 shadow-sm">
                    <h4 className="font-medium text-gray-900">{msg.name}</h4>
                    <p className="mt-2 text-gray-600">{msg.message}</p>
                    <p className="mt-1 text-xs text-gray-400">{msg.date}</p>
                  </motion.div>
                ))}
              </div>
            ) : (
              <p className="text-center text-gray-500">
                Be the first to leave a message!
              </p>
            )}

            <div className="mt-4 text-center">
              <a href="/guestbook" className="text-sm font-medium text-lavender-600 hover:text-lavender-800">
                View all messages
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Guestbook;
