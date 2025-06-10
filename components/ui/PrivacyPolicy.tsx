'use client';

import { motion } from 'framer-motion';
import { Shield, Eye, Lock, Users, Clock, Mail } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Footer from './Footer';

export default function PrivacyPolicy() {
  const t = useTranslations();
  
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const policyUpdated = "June 5, 2025";

  const keyPoints = [
    {
      icon: Shield,
      title: t('legal.privacyPolicy.keyPoints.dataProtection.title'),
      description: t('legal.privacyPolicy.keyPoints.dataProtection.description'),
      gradient: "from-green-500 to-emerald-600"
    },
    {
      icon: Eye,
      title: t('legal.privacyPolicy.keyPoints.transparency.title'),
      description: t('legal.privacyPolicy.keyPoints.transparency.description'),
      gradient: "from-blue-500 to-cyan-600"
    },
    {
      icon: Lock,
      title: t('legal.privacyPolicy.keyPoints.privacyFirst.title'),
      description: t('legal.privacyPolicy.keyPoints.privacyFirst.description'),
      gradient: "from-purple-500 to-pink-600"
    },
    {
      icon: Users,
      title: t('legal.privacyPolicy.keyPoints.noSale.title'),
      description: t('legal.privacyPolicy.keyPoints.noSale.description'),
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
              {t('legal.privacyPolicy.title')}
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed mb-8">
              {t('legal.privacyPolicy.subtitle')}
            </p>
            <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
              <Clock className="size-4" />
              <span>{t('legal.privacyPolicy.lastUpdated')}</span>
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
              {t('legal.privacyPolicy.keyPoints.title')}
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
              {t('legal.privacyPolicy.keyPoints.subtitle')}
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
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('legal.privacyPolicy.sections.introduction.title')}</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                {t('legal.privacyPolicy.sections.introduction.content1')}
              </p>
              <p className="text-gray-600 leading-relaxed">
                {t('legal.privacyPolicy.sections.introduction.content2')}
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
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('legal.privacyPolicy.sections.informationCollection.title')}</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('legal.privacyPolicy.sections.informationCollection.userProvidedTitle')}</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                {t('legal.privacyPolicy.sections.informationCollection.userProvidedContent')}
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6 ml-4">
                <li>{t('legal.privacyPolicy.sections.informationCollection.userProvided1')}</li>
                <li>{t('legal.privacyPolicy.sections.informationCollection.userProvided2')}</li>
                <li>{t('legal.privacyPolicy.sections.informationCollection.userProvided3')}</li>
                <li>{t('legal.privacyPolicy.sections.informationCollection.userProvided4')}</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('legal.privacyPolicy.sections.informationCollection.automaticTitle')}</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                {t('legal.privacyPolicy.sections.informationCollection.automaticContent')}
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4 ml-4">
                <li>{t('legal.privacyPolicy.sections.informationCollection.automatic1')}</li>
                <li>{t('legal.privacyPolicy.sections.informationCollection.automatic2')}</li>
                <li>{t('legal.privacyPolicy.sections.informationCollection.automatic3')}</li>
                <li>{t('legal.privacyPolicy.sections.informationCollection.automatic4')}</li>
                <li>{t('legal.privacyPolicy.sections.informationCollection.automatic5')}</li>
                <li>{t('legal.privacyPolicy.sections.informationCollection.automatic6')}</li>
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
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('legal.privacyPolicy.sections.locationInformation.title')}</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                {t('legal.privacyPolicy.sections.locationInformation.content1')}
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4 ml-4">
                <li><strong>{t('legal.privacyPolicy.sections.locationInformation.gpsNavigation')}</strong></li>
                <li><strong>{t('legal.privacyPolicy.sections.locationInformation.nearbyPOI')}</strong></li>
                <li><strong>{t('legal.privacyPolicy.sections.locationInformation.improvedExperience')}</strong></li>
                <li><strong>{t('legal.privacyPolicy.sections.locationInformation.offlineFunctionality')}</strong></li>
              </ul>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                <p className="text-blue-800 font-medium">
                  {t('legal.privacyPolicy.sections.locationInformation.important')}
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
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('legal.privacyPolicy.sections.thirdPartyServices.title')}</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                {t('legal.privacyPolicy.sections.thirdPartyServices.content1')}
              </p>
              <div className="space-y-4">
                <div className="border-l-4 border-[#b65d37] pl-4">
                  <h4 className="font-semibold text-gray-900">{t('legal.privacyPolicy.sections.thirdPartyServices.googlePlay')}</h4>
                  <p className="text-gray-600 text-sm">{t('legal.privacyPolicy.sections.thirdPartyServices.googlePlayDesc')}</p>
                </div>
                <div className="border-l-4 border-[#b65d37] pl-4">
                  <h4 className="font-semibold text-gray-900">{t('legal.privacyPolicy.sections.thirdPartyServices.firebase')}</h4>
                  <p className="text-gray-600 text-sm">{t('legal.privacyPolicy.sections.thirdPartyServices.firebaseDesc')}</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mt-4">
                {t('legal.privacyPolicy.sections.thirdPartyServices.content2')}
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
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('legal.privacyPolicy.sections.dataSecurity.title')}</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                {t('legal.privacyPolicy.sections.dataSecurity.content1')}
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6 ml-4">
                <li>{t('legal.privacyPolicy.sections.dataSecurity.measure1')}</li>
                <li>{t('legal.privacyPolicy.sections.dataSecurity.measure2')}</li>
                <li>{t('legal.privacyPolicy.sections.dataSecurity.measure3')}</li>
                <li>{t('legal.privacyPolicy.sections.dataSecurity.measure4')}</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('legal.privacyPolicy.sections.dataSecurity.dataRetentionTitle')}</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4 ml-4">
                <li>{t('legal.privacyPolicy.sections.dataSecurity.retention1')}</li>
                <li>{t('legal.privacyPolicy.sections.dataSecurity.retention2')}</li>
                <li>{t('legal.privacyPolicy.sections.dataSecurity.retention3')}</li>
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
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('legal.privacyPolicy.sections.userRights.title')}</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                {t('legal.privacyPolicy.sections.userRights.content1')}
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6 ml-4">
                <li><strong>{t('legal.privacyPolicy.sections.userRights.access')}</strong></li>
                <li><strong>{t('legal.privacyPolicy.sections.userRights.correction')}</strong></li>
                <li><strong>{t('legal.privacyPolicy.sections.userRights.deletion')}</strong></li>
                <li><strong>{t('legal.privacyPolicy.sections.userRights.optOut')}</strong></li>
                <li><strong>{t('legal.privacyPolicy.sections.userRights.locationServices')}</strong></li>
              </ul>
              
              <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                <p className="text-green-800 font-medium">
                  {t('legal.privacyPolicy.sections.userRights.exerciseRights')}
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
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('legal.privacyPolicy.sections.childrensPrivacy.title')}</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                {t('legal.privacyPolicy.sections.childrensPrivacy.content1')}
              </p>
              <p className="text-gray-600 leading-relaxed">
                {t('legal.privacyPolicy.sections.childrensPrivacy.content2')}
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
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('legal.privacyPolicy.sections.updates.title')}</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                {t('legal.privacyPolicy.sections.updates.content1')}
              </p>
              
              <div className="flex items-start space-x-4 bg-[#b65d37]/10 p-4 rounded-lg">
                <Mail className="size-6 text-[#b65d37] mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">{t('legal.privacyPolicy.sections.updates.contactTitle')}</h3>
                  <p className="text-gray-600 mb-2">
                    {t('legal.privacyPolicy.sections.updates.contactContent')}
                  </p>
                  <a 
                    href="mailto:info@fielmedina.com" 
                    className="text-[#b65d37] font-medium hover:underline"
                  >
                    {t('legal.privacyPolicy.sections.updates.email')}
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
            {t('legal.privacyPolicy.cta.title')}
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg lg:text-xl mb-8 max-w-2xl mx-auto leading-relaxed opacity-90"
          >
            {t('legal.privacyPolicy.cta.subtitle')}
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
            <span>{t('legal.privacyPolicy.cta.downloadButton')}</span>
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