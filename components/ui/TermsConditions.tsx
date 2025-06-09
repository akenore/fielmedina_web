'use client';

import { motion } from 'framer-motion';
import { FileText, Users, Shield, AlertTriangle, Clock, Mail } from 'lucide-react';
import Footer from './Footer';

export default function TermsConditions() {
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const termsUpdated = "June 5, 2025";

  const keyPoints = [
    {
      icon: FileText,
      title: "Free Service",
      description: "FielMedina is provided as a free service for exploring Sousse's medina.",
      gradient: "from-blue-500 to-cyan-600"
    },
    {
      icon: Users,
      title: "User Responsibility",
      description: "Users are responsible for their safety and following local laws and regulations.",
      gradient: "from-green-500 to-emerald-600"
    },
    {
      icon: Shield,
      title: "Limitation of Liability",
      description: "The app is provided 'as is' without warranties of any kind.",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      icon: AlertTriangle,
      title: "Acceptable Use",
      description: "Use the app responsibly and in accordance with applicable laws.",
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
              <FileText className="size-8 text-white" />
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Terms & Conditions
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed mb-8">
              Please read these terms carefully before using FielMedina. 
              By using our app, you agree to these terms and conditions.
            </p>
            <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
              <Clock className="size-4" />
              <span>Last updated: {termsUpdated}</span>
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
              Key Terms Overview
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
              Essential points about using FielMedina responsibly
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

      {/* Detailed Terms Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-[#FDF7EC] to-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            {/* Acceptance of Terms */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-8 shadow-lg mb-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                By downloading, installing, or using the FielMedina mobile application ("the App"), 
                you agree to be bound by these Terms and Conditions ("Terms"). If you do not agree 
                to these Terms, please do not use the App.
              </p>
              <p className="text-gray-600 leading-relaxed">
                These Terms constitute a legal agreement between you and Fielmedina ("we," "us," or "our"), 
                the developer and operator of FielMedina.
              </p>
            </motion.div>

            {/* App Description */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg mb-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. App Description & Service</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                FielMedina is a free mobile navigation and cultural guide application designed to help 
                users explore the historic medina of Sousse, Tunisia. The App provides:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4 ml-4">
                <li>GPS navigation and mapping services within the medina</li>
                <li>Cultural and historical information about locations</li>
                <li>Local recommendations and points of interest</li>
                <li>Offline functionality for downloaded content</li>
              </ul>
              <p className="text-gray-600 leading-relaxed">
                The service is provided "AS IS" and may be updated, modified, or discontinued at our discretion.
              </p>
            </motion.div>

            {/* User Responsibilities */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-lg mb-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. User Responsibilities & Acceptable Use</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                By using FielMedina, you agree to:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6 ml-4">
                <li>Use the App only for lawful purposes and in accordance with local laws</li>
                <li>Respect local customs, traditions, and private property</li>
                <li>Exercise personal responsibility for your safety while navigating</li>
                <li>Not use the App for any commercial purposes without permission</li>
                <li>Not attempt to reverse engineer, hack, or interfere with the App</li>
                <li>Provide accurate information when contacting our support team</li>
              </ul>
              
              <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
                <p className="text-red-800 font-medium">
                  <strong>Safety Notice:</strong> Always prioritize your personal safety. Be aware of your 
                  surroundings, follow local safety guidelines, and use common sense when exploring unfamiliar areas.
                </p>
              </div>
            </motion.div>

            {/* Privacy & Data */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-2xl p-8 shadow-lg mb-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Privacy & Data Collection</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Your privacy is important to us. By using the App, you consent to the collection 
                and use of information as described in our Privacy Policy, which is incorporated 
                into these Terms by reference.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                The App requires location services to provide navigation functionality. 
                You can control location permissions through your device settings.
              </p>
              <a 
                href="/privacy-policy" 
                className="text-[#b65d37] font-medium hover:underline"
              >
                Read our full Privacy Policy →
              </a>
            </motion.div>

            {/* Intellectual Property */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-2xl p-8 shadow-lg mb-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Intellectual Property Rights</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                All content within the FielMedina app, including but not limited to text, graphics, 
                images, logos, audio clips, digital downloads, and software, is the property of 
                Fielmedina or its content suppliers and is protected by copyright and other 
                intellectual property laws.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                You may not modify, copy, distribute, transmit, display, perform, reproduce, 
                publish, license, create derivative works from, transfer, or sell any content 
                obtained from the App without explicit permission.
              </p>
              <p className="text-gray-600 leading-relaxed">
                The FielMedina name and logo are trademarks of Fielmedina and may not be 
                used without permission.
              </p>
            </motion.div>

            {/* Disclaimers & Limitations */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-white rounded-2xl p-8 shadow-lg mb-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Disclaimers & Limitation of Liability</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Disclaimers</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                The App is provided "AS IS" and "AS AVAILABLE" without warranties of any kind, 
                either express or implied, including but not limited to:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6 ml-4">
                <li>Accuracy, reliability, or completeness of navigation or location data</li>
                <li>Uninterrupted or error-free operation</li>
                <li>Fitness for a particular purpose</li>
                <li>Non-infringement of third-party rights</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Limitation of Liability</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                To the maximum extent permitted by law, Fielmedina shall not be liable for:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4 ml-4">
                <li>Any direct, indirect, incidental, special, or consequential damages</li>
                <li>Personal injury or property damage resulting from app use</li>
                <li>Getting lost or navigation errors</li>
                <li>Loss of data or business interruption</li>
                <li>Any damages exceeding the amount paid for the App (which is free)</li>
              </ul>
            </motion.div>

            {/* Third-Party Content */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-white rounded-2xl p-8 shadow-lg mb-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Third-Party Services & Content</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                The App may integrate with or contain links to third-party services, websites, 
                or content. These third-party services have their own terms and privacy policies, 
                and we are not responsible for their content or practices.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Third-party services used by FielMedina include:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4 ml-4">
                <li>Google Play Services</li>
                <li>Google Analytics for Firebase</li>
                <li>Mapping and location services</li>
              </ul>
            </motion.div>

            {/* Termination */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="bg-white rounded-2xl p-8 shadow-lg mb-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Termination</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                You may stop using the App at any time by uninstalling it from your device. 
                We reserve the right to terminate or suspend access to the App at our discretion, 
                without notice, for any reason including breach of these Terms.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Upon termination, your right to use the App will cease immediately, but the 
                provisions of these Terms that by their nature should survive will remain in effect.
              </p>
            </motion.div>

            {/* Governing Law */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-white rounded-2xl p-8 shadow-lg mb-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Governing Law & Dispute Resolution</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                These Terms shall be governed by and construed in accordance with the laws of Tunisia, 
                without regard to its conflict of law provisions.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Any disputes arising from these Terms or your use of the App shall be resolved 
                through good faith negotiations. If a resolution cannot be reached, disputes may 
                be submitted to the appropriate courts in Sousse, Tunisia.
              </p>
            </motion.div>

            {/* Changes to Terms */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="bg-white rounded-2xl p-8 shadow-lg mb-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Changes to Terms</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We reserve the right to modify these Terms at any time. When we make changes, 
                we will update the "Last updated" date at the top of this page and notify users 
                through the App or other appropriate means.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Your continued use of the App after any changes indicates your acceptance of 
                the modified Terms. If you do not agree to the changes, you should stop using the App.
              </p>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Contact Information</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                If you have any questions about these Terms and Conditions, please contact us:
              </p>
              
              <div className="flex items-start space-x-4 bg-[#b65d37]/10 p-4 rounded-lg">
                <Mail className="size-6 text-[#b65d37] mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Questions or Concerns?</h3>
                  <p className="text-gray-600 mb-2">If you have any questions about this Terms and Conditions, please contact us:</p>
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