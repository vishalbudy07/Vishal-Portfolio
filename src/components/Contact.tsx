import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Send, Download, Github, Linkedin, Code, MessageSquare } from 'lucide-react';

// Helper to detect if device is mobile
const isMobileDevice = () => {
  if (typeof navigator === 'undefined') return false;
  return /android|iphone|ipad|ipod|opera mini|iemobile|mobile/i.test(navigator.userAgent);
};

// Helper to detect if running in a webview
const isWebView = () => {
  if (typeof navigator === 'undefined' || typeof window === 'undefined') return false;
  // Common webview detection (not 100% but covers most cases)
  const userAgent = navigator.userAgent || '';
  const standalone = (window.navigator as any).standalone;
  const isIOSWebView = /\b(iPhone|iPod|iPad)\b.*AppleWebKit(?!.*Safari)/i.test(userAgent);
  const isAndroidWebView = ( /\bwv\b/.test(userAgent) )
    || ( /; wv\)/.test(userAgent) )
    || ( /Version\/[\d.]+/i.test(userAgent) && /Chrome\/[.0-9]* Mobile/i.test(userAgent) && !/Safari/i.test(userAgent) );
  // Some apps set their own UA, so also check for lack of Safari and Chrome
  const isGenericWebView = ( (!/Safari/i.test(userAgent) && /Mobile/i.test(userAgent)) )
    || ( typeof standalone !== 'undefined' && Boolean(standalone) );
  return isIOSWebView || isAndroidWebView || isGenericWebView;
};

// Helper to open Gmail compose in a new window (using the correct compose URL)
const openGmailCompose = (to: string, subject: string, body: string) => {
  // Gmail compose URL as per instruction
  // https://mail.google.com/mail/u/0/#inbox?compose=new
  // Add params as URL hash fragment
  // See: https://stackoverflow.com/a/36946173
  const params = [
    `to=${encodeURIComponent(to)}`,
    `su=${encodeURIComponent(subject)}`,
    `body=${encodeURIComponent(body)}`
  ].join('&');
  const gmailUrl = `https://mail.google.com/mail/u/0/#inbox?compose=new&${params}`;
  window.open(gmailUrl, '_blank');
};

// Helper to try opening mailto in a new window for desktop to trigger app chooser
const openMailClient = (mailtoUrl: string) => {
  // Try to open in a new window/tab first (may trigger chooser in some browsers)
  const win = window.open(mailtoUrl, '_blank');
  // If popup blocked or not opened, fallback to location.href
  if (!win) {
    window.location.href = mailtoUrl;
  }
};

const RESUME_DRIVE_LINK = "https://drive.google.com/file/d/1qCRr3uANd0Z9-yg3zW74wH33LuvEoajS/view?usp=drivesdk"; // <-- Replace with your actual Google Drive direct download link

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'vishalgupta66666@gmail.com',
      link: 'mailto:vishalgupta66666@gmail.com',
      color: 'from-blue-500 to-blue-600',
      bg: 'bg-blue-50 dark:bg-gray-800', // light blue
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 6388794311',
      link: 'tel:+916388794311',
      color: 'from-green-500 to-green-600',
      bg: 'bg-green-50 dark:bg-gray-800', // light green
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Gorakhpur , Uttar Pradesh, India',
      link: 'https://maps.app.goo.gl/KSxQpfyVsuoi7BwT9',
      color: 'from-purple-500 to-purple-600',
      bg: 'bg-purple-50 dark:bg-gray-800', // light purple
    },
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/vishalbudy07',
      color: 'from-gray-700 to-gray-800',
      description: 'View my projects and contributions',
      bg: 'bg-gray-50 dark:bg-gray-800', // light gray
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/vishal-gupta-62ba6537b/',
      color: 'from-blue-600 to-blue-700',
      description: 'Connect professionally',
      bg: 'bg-blue-50 dark:bg-gray-800', // light blue
    },
    {
      name: 'LeetCode',
      icon: Code,
      url: 'https://leetcode.com/u/vishalbudy07/',
      color: 'from-yellow-500 to-orange-500',
      description: 'Check my problem-solving skills',
      bg: 'bg-yellow-50 dark:bg-gray-800', // light yellow
    },
    {
      name: 'Portfolio',
      icon: MessageSquare,
      url: '#',
      color: 'from-primary-500 to-primary-600',
      description: 'This website you\'re viewing',
      bg: 'bg-pink-50 dark:bg-gray-800', // light pink
    },
  ];

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    else if (formData.message.length < 10) newErrors.message = 'Message must be at least 10 characters';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handler for "Start a Project" button
  // Should open the native mail app chooser (mailto: link)
  const handleStartProject = () => {
    const email = 'vishalgupta66666@gmail.com';
    const subject = 'Project Quotation Request';
    const body =
      `Hi Vishal,\n\nI would like to get a quotation for my project. Please let me know how we can proceed further.\n\nLooking forward to your response!\n\nBest regards,`;
    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    if (isMobileDevice()) {
      // On mobile, mailto: will open app chooser
      window.location.href = mailtoUrl;
    } else if (isWebView()) {
      // On webview, open Gmail compose in new window (using correct URL)
      openGmailCompose(email, subject, body);
    } else {
      // On desktop, try to open in a new window/tab to trigger app chooser
      openMailClient(mailtoUrl);
    }
  };

  // Handler for "Schedule a Call" button
  const handleScheduleCall = () => {
    // WhatsApp number must be in international format without +
    const phoneNumber = '916388794311';
    const message = encodeURIComponent(
      `Hi Vishal,\n\nI hope you're doing well. I would like to schedule a call with you to discuss some opportunities. Please let me know your availability for a call at your earliest convenience.\n\nLooking forward to connecting!\n\nBest regards,`
    );
    // Try WhatsApp first
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
    // Optionally, fallback to SMS if WhatsApp is not available (not implemented here)
  };

  // Handler for contact form submission
  // On mobile: send SMS with details
  // On desktop: open mailto: with details (try to trigger app chooser)
  // On webview: open Gmail compose in new window
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);

    // Compose message
    const details = `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`;
    const smsNumber = '916388794311';
    const email = 'vishalgupta66666@gmail.com';
    const subject = 'Contact Form Submission';
    const body = details;

    if (isMobileDevice()) {
      // Try to open SMS app with prefilled message
      // Use sms: URI scheme
      // Some Androids use ?body=, iOS uses &body=
      let smsUrl = '';
      if (/iphone|ipad|ipod/i.test(navigator.userAgent)) {
        smsUrl = `sms:${smsNumber}&body=${encodeURIComponent(body)}`;
      } else {
        smsUrl = `sms:${smsNumber}?body=${encodeURIComponent(body)}`;
      }
      window.location.href = smsUrl;
    } else if (isWebView()) {
      // On webview, open Gmail compose in new window (using correct URL)
      openGmailCompose(email, subject, body);
    } else {
      // Desktop: try to open mailto: in a new window/tab to trigger app chooser
      const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      openMailClient(mailtoUrl);
    }

    // Simulate submission for UI feedback
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitSuccess(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitSuccess(false), 4000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  // Handler for Download Resume button
  const handleDownloadResume = () => {
    window.open(RESUME_DRIVE_LINK, '_blank');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="contact" className="section-padding scroll-mt-24">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-12"
        >
          <motion.h2 variants={itemVariants} className="text-3xl lg:text-4xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-base lg:text-lg text-gray-600 dark:text-gray-100 max-w-3xl mx-auto leading-relaxed">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <motion.div variants={containerVariants} className="space-y-6">
            <motion.h3 variants={itemVariants} className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">
              Let's Connect
            </motion.h3>

            {/* Contact Details */}
            <div className="space-y-4">
              {contactInfo.map((info, idx) => (
                <motion.div
                  key={info.title}
                  variants={itemVariants}
                  className={`flex items-center gap-4 p-4 ${info.bg} rounded-xl shadow-lg hover:shadow-xl transition-all duration-300`}
                >
                  <div className={`w-10 h-10 bg-gradient-to-r ${info.color} rounded-lg flex items-center justify-center`}>
                    <info.icon size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200">
                      {info.title}
                    </h4>
                    <a href={info.link} className="text-primary-600 dark:text-primary-400 hover:underline transition-colors duration-300 text-sm">
                      {info.value}
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div variants={containerVariants} className="mt-8">
              <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
                Follow Me
              </h4>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, y: -2 }}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-4 ${social.bg} rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group`}
                  >
                    <div className={`w-10 h-10 bg-gradient-to-r ${social.color} rounded-lg flex items-center justify-center mx-auto mb-2`}>
                      <social.icon size={20} className="text-white" />
                    </div>
                    <h5 className="font-semibold text-gray-800 dark:text-gray-200 mb-0.5 text-sm">
                      {social.name}
                    </h5>
                    <p className="text-[11px] text-gray-600 dark:text-gray-200">
                      {social.description}
                    </p>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Download Resume */}
            <motion.div variants={containerVariants} className="mt-6">
              <motion.button
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold py-3 px-5 rounded-xl hover:from-primary-600 hover:to-primary-700 transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl text-sm"
                onClick={handleDownloadResume}
                type="button"
              >
                <Download size={18} />
                Download Resume (PDF)
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={containerVariants} className="bg-orange-50 dark:bg-gray-800 rounded-2xl shadow-xl p-6">
            <motion.h3 variants={itemVariants} className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">
              Send Message
            </motion.h3>

            {submitSuccess && (
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="mb-5 p-3.5 bg-green-100 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                <p className="text-green-800 dark:text-green-400 text-center text-sm">
                  Thank you! Your message has been sent successfully. I'll get back to you soon.
                </p>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-300 ${errors.name ? 'border-red-500 bg-red-50 dark:bg-red-900/20' : 'border-gray-300 dark:border-gray-600 bg-orange-50 dark:bg-gray-800'}`}
                  placeholder="Your full name"
                />
                {errors.name && <p className="mt-1 text-xs text-red-600 dark:text-red-400">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-300 ${errors.email ? 'border-red-500 bg-red-50 dark:bg-red-900/20' : 'border-gray-300 dark:border-gray-600 bg-orange-50 dark:bg-gray-800'}`}
                  placeholder="your.email@example.com"
                />
                {errors.email && <p className="mt-1 text-xs text-red-600 dark:text-red-400">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-300 resize-none ${errors.message ? 'border-red-500 bg-red-50 dark:bg-red-900/20' : 'border-gray-300 dark:border-gray-600 bg-orange-50 dark:bg-gray-800'}`}
                  placeholder="Tell me about your project or just say hello!"
                />
                {errors.message && <p className="mt-1 text-xs text-red-600 dark:text-red-400">{errors.message}</p>}
              </div>

              <motion.button type="submit" disabled={isSubmitting} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold py-3 px-5 rounded-lg hover:from-primary-600 hover:to-primary-700 transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed text-sm">
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div variants={containerVariants} className="mt-16 text-center">
          <motion.div variants={itemVariants} className="bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 rounded-2xl p-6 max-w-4xl mx-auto">
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3">
              Ready to Work Together?
            </h3>
            <p className="text-base text-gray-700 dark:text-gray-100 leading-relaxed mb-5">
              I'm currently available for freelance work and full-time opportunities. Let's discuss how I can help bring your ideas to life!
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary text-sm"
                onClick={handleStartProject}
                type="button"
              >
                Start a Project
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary text-sm"
                onClick={handleScheduleCall}
                type="button"
              >
                Schedule a Call
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
