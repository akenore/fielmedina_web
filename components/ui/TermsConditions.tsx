'use client';

import { motion } from 'framer-motion';
import { FileText, Users, Shield, AlertTriangle, Clock, Mail } from 'lucide-react';
import { useTranslations } from 'next-intl';
import {Link} from '../../i18n/navigation';
import Footer from './Footer';

export default function TermsConditions() {
  const t = useTranslations();

  const keyPoints = [
    {
      icon: FileText,
      title: t('legal.termsConditions.keyPoints.freeService.title'),
      description: t('legal.termsConditions.keyPoints.freeService.description'),
      gradient: "from-blue-500 to-cyan-600"
    },
    {
      icon: Users,
      title: t('legal.termsConditions.keyPoints.userResponsibility.title'),
      description: t('legal.termsConditions.keyPoints.userResponsibility.description'),
      gradient: "from-green-500 to-emerald-600"
    },
    {
      icon: Shield,
      title: t('legal.termsConditions.keyPoints.limitation.title'),
      description: t('legal.termsConditions.keyPoints.limitation.description'),
      gradient: "from-purple-500 to-pink-600"
    },
    {
      icon: AlertTriangle,
      title: t('legal.termsConditions.keyPoints.acceptableUse.title'),
      description: t('legal.termsConditions.keyPoints.acceptableUse.description'),
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
              {t('legal.termsConditions.title')}
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed mb-8">
              {t('legal.termsConditions.subtitle')}
            </p>
            <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
              <Clock className="size-4" />
              <span>{t('legal.termsConditions.lastUpdated')}</span>
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
              {t('legal.termsConditions.keyPoints.title')}
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
              {t('legal.termsConditions.keyPoints.subtitle')}
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
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('legal.termsConditions.sections.acceptance.title')}</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                {t('legal.termsConditions.sections.acceptance.content1')}
              </p>
              <p className="text-gray-600 leading-relaxed">
                {t('legal.termsConditions.sections.acceptance.content2')}
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
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('legal.termsConditions.sections.appDescription.title')}</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                {t('legal.termsConditions.sections.appDescription.content1')}
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4 ml-4">
                <li>{t('legal.termsConditions.sections.appDescription.feature1')}</li>
                <li>{t('legal.termsConditions.sections.appDescription.feature2')}</li>
                <li>{t('legal.termsConditions.sections.appDescription.feature3')}</li>
                <li>{t('legal.termsConditions.sections.appDescription.feature4')}</li>
              </ul>
              <p className="text-gray-600 leading-relaxed">
                {t('legal.termsConditions.sections.appDescription.content2')}
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
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('legal.termsConditions.sections.userResponsibilities.title')}</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                {t('legal.termsConditions.sections.userResponsibilities.content1')}
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6 ml-4">
                <li>{t('legal.termsConditions.sections.userResponsibilities.responsibility1')}</li>
                <li>{t('legal.termsConditions.sections.userResponsibilities.responsibility2')}</li>
                <li>{t('legal.termsConditions.sections.userResponsibilities.responsibility3')}</li>
                <li>{t('legal.termsConditions.sections.userResponsibilities.responsibility4')}</li>
                <li>{t('legal.termsConditions.sections.userResponsibilities.responsibility5')}</li>
                <li>{t('legal.termsConditions.sections.userResponsibilities.responsibility6')}</li>
              </ul>
              
              <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
                <p className="text-red-800 font-medium">
                  <strong>{t('legal.termsConditions.sections.userResponsibilities.safetyNotice.title')}</strong> {t('legal.termsConditions.sections.userResponsibilities.safetyNotice.content')}
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
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('legal.termsConditions.sections.privacy.title')}</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                {t('legal.termsConditions.sections.privacy.content1')}
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                {t('legal.termsConditions.sections.privacy.content2')}
              </p>
              <Link 
                href="/privacy-policy" 
                scroll={false}
                className="text-[#b65d37] font-medium hover:underline"
              >
                {t('legal.termsConditions.sections.privacy.linkText')}
              </Link>
            </motion.div>

            {/* Intellectual Property */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-2xl p-8 shadow-lg mb-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('legal.termsConditions.sections.intellectualProperty.title')}</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                {t('legal.termsConditions.sections.intellectualProperty.content1')}
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                {t('legal.termsConditions.sections.intellectualProperty.content2')}
              </p>
              <p className="text-gray-600 leading-relaxed">
                {t('legal.termsConditions.sections.intellectualProperty.content3')}
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
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('legal.termsConditions.sections.disclaimers.title')}</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('legal.termsConditions.sections.disclaimers.disclaimersTitle')}</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                {t('legal.termsConditions.sections.disclaimers.disclaimersContent')}
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6 ml-4">
                <li>{t('legal.termsConditions.sections.disclaimers.disclaimer1')}</li>
                <li>{t('legal.termsConditions.sections.disclaimers.disclaimer2')}</li>
                <li>{t('legal.termsConditions.sections.disclaimers.disclaimer3')}</li>
                <li>{t('legal.termsConditions.sections.disclaimers.disclaimer4')}</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('legal.termsConditions.sections.disclaimers.liabilityTitle')}</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                {t('legal.termsConditions.sections.disclaimers.liabilityContent')}
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4 ml-4">
                <li>{t('legal.termsConditions.sections.disclaimers.liability1')}</li>
                <li>{t('legal.termsConditions.sections.disclaimers.liability2')}</li>
                <li>{t('legal.termsConditions.sections.disclaimers.liability3')}</li>
                <li>{t('legal.termsConditions.sections.disclaimers.liability4')}</li>
                <li>{t('legal.termsConditions.sections.disclaimers.liability5')}</li>
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
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('legal.termsConditions.sections.thirdParty.title')}</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                {t('legal.termsConditions.sections.thirdParty.content1')}
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                {t('legal.termsConditions.sections.thirdParty.content2')}
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4 ml-4">
                <li>{t('legal.termsConditions.sections.thirdParty.service1')}</li>
                <li>{t('legal.termsConditions.sections.thirdParty.service2')}</li>
                <li>{t('legal.termsConditions.sections.thirdParty.service3')}</li>
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
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('legal.termsConditions.sections.termination.title')}</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                {t('legal.termsConditions.sections.termination.content1')}
              </p>
              <p className="text-gray-600 leading-relaxed">
                {t('legal.termsConditions.sections.termination.content2')}
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
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('legal.termsConditions.sections.governingLaw.title')}</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                {t('legal.termsConditions.sections.governingLaw.content1')}
              </p>
              <p className="text-gray-600 leading-relaxed">
                {t('legal.termsConditions.sections.governingLaw.content2')}
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
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('legal.termsConditions.sections.changes.title')}</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                {t('legal.termsConditions.sections.changes.content1')}
              </p>
              <p className="text-gray-600 leading-relaxed">
                {t('legal.termsConditions.sections.changes.content2')}
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
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('legal.termsConditions.sections.contact.title')}</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                {t('legal.termsConditions.sections.contact.content1')}
              </p>
              
              <div className="flex items-start space-x-4 bg-[#b65d37]/10 p-4 rounded-lg">
                <Mail className="size-6 text-[#b65d37] mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">{t('legal.termsConditions.sections.contact.contactTitle')}</h3>
                  <p className="text-gray-600 mb-2">{t('legal.termsConditions.sections.contact.contactMessage')}</p>
                  <a 
                    href="mailto:info@fielmedina.com" 
                    className="text-[#b65d37] font-medium hover:underline"
                  >
                    {t('legal.termsConditions.sections.contact.email')}
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
            {t('legal.termsConditions.cta.title')}
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg lg:text-xl mb-8 max-w-2xl mx-auto leading-relaxed opacity-90"
          >
            {t('legal.termsConditions.cta.subtitle')}
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
            <span>{t('legal.termsConditions.cta.downloadButton')}</span>
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