'use client';

import { motion } from 'framer-motion';
import { Shield, Eye, Lock, Users, Clock, Mail } from 'lucide-react';
import Footer from './Footer';

export default function PrivacyPolicy() {
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const policyUpdated = "June 5, 2025";

  const keyPoints = [
    {
      icon: Shield,
      title: "Data Protection",
      description: "We use industry-standard security measures to protect your personal information.",
      gradient: "from-green-500 to-emerald-600"
    },
    {
      icon: Eye,
      title: "Transparency",
      description: "We're transparent about what data we collect and how we use it.",
      gradient: "from-blue-500 to-cyan-600"
    },
    {
      icon: Lock,
      title: "Privacy First",
      description: "Your privacy is our priority - we only collect what's necessary for the app to function.",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      icon: Users,
      title: "No Sale of Data",
      description: "We never sell your personal information to third parties.",
      gradient: "from-[#b65d37] to-orange-600"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-24 lg:pt-32 pb-16 lg:pb-24 bg-gradient-to-br from-[#FDF7EC] to-orange-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#b65d37] rounded-2xl mb-6">
              <Shield className="size-8 text-white" />
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed mb-8">
              Your privacy matters to us. This policy explains how we collect, use, and protect 
              your information when you use FielMedina.
            </p>
            <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
              <Clock className="size-4" />
              <span>Last updated: {policyUpdated}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Points Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 max-w-3xl mx-auto"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Our Privacy Commitments
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
              Here's what you need to know about how we handle your data
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
            {keyPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <div className={`w-12 h-12 mb-4 rounded-xl bg-gradient-to-r ${point.gradient} 
                              flex items-center justify-center text-white`}>
                  <point.icon className="size-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {point.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {point.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Policy Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-[#FDF7EC] to-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            {/* Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-8 shadow-lg mb-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                This Privacy Policy applies to the FielMedina mobile application (the "Application") 
                developed by Fielmedina (the "Service Provider") as a free service. This service 
                is provided "AS IS" and is designed to help users navigate and explore the historic 
                medina of Sousse, Tunisia.
              </p>
              <p className="text-gray-600 leading-relaxed">
                By using our Application, you agree to the collection and use of information in 
                accordance with this policy. We are committed to protecting your privacy and ensuring 
                you have a positive experience on our app.
              </p>
            </motion.div>

            {/* Information Collection */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg mb-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">User Provided Information</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                The Application may collect information you provide when you:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6 ml-4">
                <li>Download and use the Application</li>
                <li>Contact us through the app or our support channels</li>
                <li>Provide feedback or reviews</li>
                <li>Participate in surveys or promotional activities</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Automatically Collected Information</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                The Application may automatically collect certain information, including:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4 ml-4">
                <li>Device type and mobile operating system</li>
                <li>Unique device identifier</li>
                <li>IP address</li>
                <li>Mobile browser type</li>
                <li>App usage patterns and navigation data</li>
                <li>Crash logs and performance data</li>
              </ul>
            </motion.div>

            {/* Location Information */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-lg mb-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Location Information</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                FielMedina is a navigation app that requires location services to function properly. 
                Here's how we handle your location data:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4 ml-4">
                <li><strong>GPS Navigation:</strong> We use your location to provide turn-by-turn navigation through the medina</li>
                <li><strong>Nearby Points of Interest:</strong> Location data helps us show relevant attractions and shops near you</li>
                <li><strong>Improved Experience:</strong> We analyze aggregated, anonymized location patterns to improve our maps and recommendations</li>
                <li><strong>Offline Functionality:</strong> Location data is processed locally on your device when using offline features</li>
              </ul>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                <p className="text-blue-800 font-medium">
                  Important: You can disable location services at any time through your device settings, 
                  but this may limit the app's navigation functionality.
                </p>
              </div>
            </motion.div>

            {/* Third Party Services */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-2xl p-8 shadow-lg mb-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Services</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                The Application uses the following third-party services that may collect information:
              </p>
              <div className="space-y-4">
                <div className="border-l-4 border-[#b65d37] pl-4">
                  <h4 className="font-semibold text-gray-900">Google Play Services</h4>
                  <p className="text-gray-600 text-sm">For app distribution, updates, and core Android functionality</p>
                </div>
                <div className="border-l-4 border-[#b65d37] pl-4">
                  <h4 className="font-semibold text-gray-900">Google Analytics for Firebase</h4>
                  <p className="text-gray-600 text-sm">For app performance monitoring and user analytics</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mt-4">
                These services have their own privacy policies that govern their data collection practices. 
                We only share anonymized, aggregated data with these services.
              </p>
            </motion.div>

            {/* Data Security */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-2xl p-8 shadow-lg mb-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security & Retention</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We implement appropriate security measures to protect your information:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6 ml-4">
                <li>Encryption of data in transit and at rest</li>
                <li>Regular security audits and updates</li>
                <li>Limited access to personal data on a need-to-know basis</li>
                <li>Secure data centers with physical and digital protection</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Data Retention</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4 ml-4">
                <li>User data is retained only as long as necessary for app functionality</li>
                <li>Analytics data is retained for up to 24 months</li>
                <li>You can request deletion of your data by contacting us at info@fielmedina.com</li>
              </ul>
            </motion.div>

            {/* Your Rights */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-white rounded-2xl p-8 shadow-lg mb-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights & Choices</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                You have several rights regarding your personal information:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6 ml-4">
                <li><strong>Access:</strong> Request a copy of the personal data we hold about you</li>
                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete data</li>
                <li><strong>Deletion:</strong> Request deletion of your personal data</li>
                <li><strong>Opt-out:</strong> Uninstall the app to stop all data collection</li>
                <li><strong>Location Services:</strong> Disable location access through device settings</li>
              </ul>
              
              <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                <p className="text-green-800 font-medium">
                  To exercise any of these rights, contact us at info@fielmedina.com. 
                  We will respond within a reasonable timeframe.
                </p>
              </div>
            </motion.div>

            {/* Children's Privacy */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-white rounded-2xl p-8 shadow-lg mb-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Children's Privacy</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                FielMedina does not knowingly collect personal information from children under 13 years of age. 
                If we discover that a child under 13 has provided personal information, we will immediately 
                delete this information from our servers.
              </p>
              <p className="text-gray-600 leading-relaxed">
                If you are a parent or guardian and believe your child has provided personal information, 
                please contact us at info@fielmedina.com so we can take appropriate action.
              </p>
            </motion.div>

            {/* Contact & Updates */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Updates & Contact</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                This Privacy Policy may be updated periodically to reflect changes in our practices 
                or for legal and regulatory reasons. We will notify users of significant changes 
                through the app or by updating this page.
              </p>
              
              <div className="flex items-start space-x-4 bg-[#b65d37]/10 p-4 rounded-lg">
                <Mail className="size-6 text-[#b65d37] mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Questions or Concerns?</h3>
                  <p className="text-gray-600 mb-2">
                    If you have any questions about this Privacy Policy or our data practices, 
                    please contact us:
                  </p>
                  <a 
                    href="mailto:info@fielmedina.com" 
                    className="text-[#b65d37] font-medium hover:underline"
                  >
                    info@fielmedina.com
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-[#b65d37] to-[#b65c37] text-white relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-responsive-2xl font-bold mb-6"
          >
            Ready to Explore Sousse?
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg lg:text-xl mb-8 max-w-2xl mx-auto leading-relaxed opacity-90"
          >
            Download Fielmedina now and start your unforgettable journey through 
            the historic medina of Sousse.
          </motion.p>
          
          <motion.a
            href="https://play.google.com/store/apps/details?id=com.fielmedina.sousse"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-[#b65d37] px-8 py-4 rounded-full text-lg font-semibold 
                     hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl
                     inline-flex items-center space-x-2"
          >
            <span>Download for Android</span>
          </motion.a>
        </div>

        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full" />
          <div className="absolute top-1/2 right-20 w-16 h-16 bg-white rounded-full" />
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white rounded-full" />
        </div>
      </section>
      <Footer />
    </div>
  );
} 