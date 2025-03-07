import { useState } from 'react';
import { motion } from 'framer-motion';
import { useToast } from '../hooks/use-toast';
import { supabase } from '../integrations/supabase/client';

const RSVP = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    attending: 'yes',
    guests: 1,
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Save the form submission to Supabase
      const { error } = await supabase
        .from('rsvp_submissions')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            attending: formData.attending,
            guests: formData.attending === 'yes' ? formData.guests : null,
            message: formData.message,
          },
        ]);

      if (error) {
        console.error('Error submitting RSVP:', error);
        toast({
          title: "Error",
          description: "There was a problem submitting your RSVP. Please try again.",
          variant: "destructive",
          duration: 5000,
        });
        setIsSubmitting(false);
        return;
      }

      setIsSubmitting(false);
      setSubmitted(true);
      toast({
        title: "RSVP Received",
        description: "Thank you for your response!",
        duration: 5000,
      });
    } catch (error) {
      console.error('Error submitting RSVP:', error);
      toast({
        title: "Error",
        description: "There was a problem submitting your RSVP. Please try again.",
        variant: "destructive",
        duration: 5000,
      });
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-gradient-to-b from-white to-lavender-50 py-20">
      <div className="container mx-auto px-4">
        <div className="heading-divider">
          <h2 className="text-2xl font-serif font-medium text-gray-900 sm:text-3xl md:text-4xl">
            RSVP
          </h2>
        </div>

        <p className="mx-auto mt-6 max-w-2xl text-center text-gray-600">
          We would be honored to have you join us on our special day. Please let us know if you'll be attending by May 1, 2025.
        </p>

        <div className="mx-auto mt-12 max-w-2xl">
          {!submitted ? (
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              onSubmit={handleSubmit}
              className="floral-card"
            >
              <div className="mb-6">
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-700">
                  Your Name*
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded-md border border-gray-300 px-4 py-2 text-gray-900 shadow-sm focus:border-lavender-500 focus:outline-none focus:ring-1 focus:ring-lavender-500"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-700">
                  Email Address*
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-md border border-gray-300 px-4 py-2 text-gray-900 shadow-sm focus:border-lavender-500 focus:outline-none focus:ring-1 focus:ring-lavender-500"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="attending" className="mb-2 block text-sm font-medium text-gray-700">
                  Will you be attending?*
                </label>
                <select
                  id="attending"
                  name="attending"
                  required
                  value={formData.attending}
                  onChange={handleChange}
                  className="w-full rounded-md border border-gray-300 px-4 py-2 text-gray-900 shadow-sm focus:border-lavender-500 focus:outline-none focus:ring-1 focus:ring-lavender-500"
                >
                  <option value="yes">Yes, I'll be there</option>
                  <option value="no">Sorry, I can't make it</option>
                  <option value="maybe">Not sure yet</option>
                </select>
              </div>

              {formData.attending === 'yes' && (
                <div className="mb-6">
                  <label htmlFor="guests" className="mb-2 block text-sm font-medium text-gray-700">
                    Number of Guests*
                  </label>
                  <select
                    id="guests"
                    name="guests"
                    required
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full rounded-md border border-gray-300 px-4 py-2 text-gray-900 shadow-sm focus:border-lavender-500 focus:outline-none focus:ring-1 focus:ring-lavender-500"
                  >
                    {[1, 2, 3, 4, 5].map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? 'guest' : 'guests'}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              <div className="mb-6">
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-700">
                  Message (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full rounded-md border border-gray-300 px-4 py-2 text-gray-900 shadow-sm focus:border-lavender-500 focus:outline-none focus:ring-1 focus:ring-lavender-500"
                  placeholder="Any dietary restrictions or special messages for the couple..."
                ></textarea>
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative overflow-hidden rounded-full bg-lavender-600 px-8 py-3 font-medium text-white shadow-md transition-all duration-300 hover:bg-lavender-700 hover:shadow-lg disabled:opacity-70"
                >
                  <span className="relative z-10">
                    {isSubmitting ? 'Sending...' : 'Submit RSVP'}
                  </span>
                  <span className="absolute inset-0 -z-0 bg-white opacity-0 transition-opacity group-hover:opacity-10"></span>
                </button>
              </div>
            </motion.form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="floral-card text-center"
            >
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-lavender-100 text-lavender-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <path d="M22 4 12 14.01l-3-3" />
                </svg>
              </div>
              <h3 className="mb-2 text-2xl font-serif font-medium text-gray-900">
                Thank You!
              </h3>
              <p className="text-gray-600">
                Your RSVP has been received. We look forward to celebrating with you!
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-6 text-sm font-medium text-lavender-600 hover:text-lavender-800"
              >
                Send another response
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default RSVP;
