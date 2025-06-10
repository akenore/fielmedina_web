'use client';

import { motion } from 'framer-motion';
import { Download, Star, Quote } from 'lucide-react';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import Header from './Header';
import BubbleIcon from '../icons/BubbleIcon';
import WorldIcon from '../icons/WorldIcon';
import NavigatorIcon from '../icons/NavigatorIcon';

export default function Home() {
  const t = useTranslations();
  const [currentSlide, setCurrentSlide] = useState(0);

  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const sliderImages = [
    "/slider/splash.webp",
    "/slider/pic-1.webp", 
    "/slider/pic-2.webp"
  ];

  // Auto-slide every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [sliderImages.length]);

  const features = [
    {
      icon: NavigatorIcon,
      title: t('home.features.smartNavigation.title'),
      description: t('home.features.smartNavigation.description'),
      gradient: "from-gray-700 to-[#b65d37]"
    },
    {
      icon: BubbleIcon,
      title: t('home.features.localInsights.title'), 
      description: t('home.features.localInsights.description'),
      gradient: "from-[#b65d37] to-gray-800"
    },
    {
      icon: WorldIcon,
      title: t('home.features.culturalGuide.title'),
      description: t('home.features.culturalGuide.description'),
      gradient: "from-gray-700 to-[#b65d37]"
    }
  ];

  const stats = [
    { number: t('home.stats.rating'), label: t('home.stats.ratingLabel') },
    { number: t('home.stats.locations'), label: t('home.stats.locationsLabel') }
  ];

  const testimonials = [
    {
      name: t('home.testimonials.ahmed.name'),
      role: t('home.testimonials.ahmed.role'),
      text: t('home.testimonials.ahmed.text'),
      rating: 5
    },
    {
      name: t('home.testimonials.sarah.name'), 
      role: t('home.testimonials.sarah.role'),
      text: t('home.testimonials.sarah.text'),
      rating: 5
    },
    {
      name: t('home.testimonials.mohamed.name'),
      role: t('home.testimonials.mohamed.role'), 
      text: t('home.testimonials.mohamed.text'),
      rating: 5
    }
  ];

     return (
    <div className="min-h-screen bg-[#FDF7EC]">
      <Header />
      <section id="home" className="pt-24 lg:pt-32 pb-16 lg:pb-24 relative overflow-hidden">
        <div className="section-decoration" />
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="text-center lg:text-left"
            >
              <motion.div
                variants={fadeInUp}
                className="inline-block bg-[#b65d37]/10 text-[#b65d37] px-4 py-2 rounded-full text-md font-medium mb-6"
              >
                {t('home.hero.badge')}
              </motion.div>
              
              <motion.h1 
                variants={fadeInUp}
                className="text-responsive-2xl font-bold text-gray-900 leading-tight mb-6"
              >
                {t('home.hero.title.line1')}
                <span className="text-[#b65d37] block">{t('home.hero.title.line2')}</span>
                {t('home.hero.title.line3')}
              </motion.h1>
              
              <motion.p 
                variants={fadeInUp}
                className="text-lg lg:text-xl text-gray-600 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0"
              >
                {t('home.hero.subtitle')}
              </motion.p>

              {/* CTA Buttons */}
              <motion.div 
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4 mb-12 justify-center lg:justify-start"
              >
                <motion.a
                  href="https://play.google.com/store/apps/details?id=com.fielmedina.sousse"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#b65d37] text-white px-8 py-4 rounded-full text-lg font-semibold 
                           hover:bg-[#a0542f] transition-all duration-300 shadow-lg hover:shadow-xl
                           flex items-center justify-center space-x-2"
                >
                  <Download className="size-5" />
                  <span>{t('home.hero.downloadButton')}</span>
                </motion.a>
              </motion.div>

              {/* Stats */}
              <motion.div 
                variants={fadeInUp}
                className="grid grid-cols-2 lg:grid-cols-4 gap-6"
              >
                {stats.map((stat, index) => (
                  <div key={index} className="text-center lg:text-left">
                    <div className="text-2xl lg:text-3xl font-bold text-[#b65d37] mb-1">
                      {stat.number}
                    </div>
                    <div className="text-gray-600 text-sm lg:text-base">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right content - App mockup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotateY: 15 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative flex justify-center"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#b65d37]/20 to-blue-500/20 
                            rounded-full blur-3xl scale-75 opacity-60" />
              
              {/* Phone mockup */}
              <div className="relative z-10 bg-gray-900 rounded-[3rem] p-3 shadow-2xl 
                            transform hover:rotate-0 transition-transform duration-500 rotate-2">
                <div className="bg-white rounded-[2.5rem] overflow-hidden w-72 lg:w-80 aspect-[9/19.5] flex flex-col">
                  
                  {/* Status bar */}
                  <div className="bg-white px-6 py-3 flex justify-between items-center text-black text-sm flex-shrink-0">
                    <span className="font-medium">{t('home.phoneUI.time')}</span>
                    <div className="flex items-center space-x-1">
                      <div className="w-6 h-3 border border-black rounded-sm">
                        <div className="w-4 h-2 bg-black rounded-sm ml-0.5 mt-0.5" />
                      </div>
                    </div>
                  </div>

                  {/* Image Slider */}
                  <div className="relative flex-1 overflow-hidden bg-gray-100 min-h-0">
                    <div 
                      className="flex transition-transform duration-500 ease-in-out h-full"
                      style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                    >
                      {sliderImages.map((image, index) => (
                        <div key={index} className="w-full h-full flex-shrink-0 relative">
                          <Image
                            src={image}
                            alt={t('home.phoneUI.screenshotAlt', {number: index + 1})}
                            fill
                            sizes="(max-width: 768px) 288px, 320px"
                            className="object-cover"
                            priority={index === 0}
                          />
                          {/* Overlay gradient for better readability */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                        </div>
                      ))}
                    </div>

                    {/* Slide indicators */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                      {sliderImages.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentSlide(index)}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            index === currentSlide 
                              ? 'bg-white shadow-lg' 
                              : 'bg-white/50 hover:bg-white/70'
                          }`}
                          aria-label={t('common.goToSlide', {number: index + 1})}
                        />
                      ))}
                    </div>

                    {/* App branding overlay */}
                    <div className="absolute top-4 left-4 right-4">
                      <div className="bg-black/50 backdrop-blur-sm rounded-2xl px-4 py-3 text-white">
                        <h3 className="text-lg font-bold">{t('home.appBranding.title')}</h3>
                        <p className="text-white/80 text-sm">{t('home.appBranding.subtitle')}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <section id="features" className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 lg:mb-20 max-w-3xl mx-auto"
          >
            <h2 className="text-responsive-2xl font-bold text-gray-900 mb-6">
              {t('home.features.title')}
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
              {t('home.features.subtitle')}
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group text-center"
              >
                <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${feature.gradient} 
                              flex items-center justify-center text-white shadow-lg group-hover:scale-110 
                              transition-transform duration-300`}>
                  <feature.icon width="32" height="32" />
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section id="reviews" className="py-16 lg:py-24 bg-[#FDF7EC]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 lg:mb-20"
          >
            <h2 className="text-responsive-2xl font-bold text-gray-900 mb-6">
              {t('home.testimonials.title')}
            </h2>
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="size-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-xl font-bold text-gray-900">{t('home.testimonials.rating')}</span>
            </div>
            <p className="text-gray-600">{t('home.testimonials.basedOn')}</p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="size-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <Quote className="size-8 text-[#b65d37] mb-4" />
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#b65d37] to-orange-500 
                                rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 lg:py-24 bg-gradient-to-r from-[#b65d37] to-[#b65c37] text-white relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-responsive-2xl font-bold mb-6"
          >
            {t('home.cta.title')}
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg lg:text-xl mb-8 max-w-2xl mx-auto leading-relaxed opacity-90"
          >
            {t('home.cta.subtitle')}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.a
              href="https://play.google.com/store/apps/details?id=com.fielmedina.sousse"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#b65d37] px-8 py-4 rounded-full text-lg font-semibold 
                       hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl
                       flex items-center space-x-2"
            >
              <Download className="size-5" />
              <span>{t('home.cta.downloadButton')}</span>
            </motion.a>
          </motion.div>
        </div>

        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full" />
          <div className="absolute top-1/2 right-20 w-16 h-16 bg-white rounded-full" />
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white rounded-full" />
        </div>
      </section>
    </div>
     );
}