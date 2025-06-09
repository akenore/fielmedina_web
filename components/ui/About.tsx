'use client';

import { motion } from 'framer-motion';
import { Heart, Target, Users, Award, MapPin, Calendar } from 'lucide-react';
import Image from 'next/image';

export default function About() {
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const values = [
    {
      icon: Heart,
      title: "Passion for Heritage",
      description: "We're deeply passionate about preserving and sharing Tunisia's rich cultural heritage with the world.",
      gradient: "from-red-500 to-pink-600"
    },
    {
      icon: Target,
      title: "Innovation & Tradition",
      description: "Bridging the gap between ancient wisdom and modern technology to create meaningful experiences.",
      gradient: "from-[#b65d37] to-orange-600"
    },
    {
      icon: Users,
      title: "Community First",
      description: "Building connections between travelers and local communities for authentic cultural exchange.",
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      icon: Award,
      title: "Excellence in Experience",
      description: "Committed to delivering exceptional user experiences that exceed expectations every time.",
      gradient: "from-purple-500 to-pink-600"
    }
  ];

  const teamMembers = [
    {
      name: "Muhammad Aslan",
      role: "Founder & CEO",
      description: "Passionate about technology and cultural preservation with 10+ years in mobile app development.",
      image: "/team/founder.jpg"
    },
    {
      name: "Sarah Ben Ali",
      role: "Cultural Consultant",
      description: "Local historian and storyteller specializing in Sousse's rich heritage and traditions.",
      image: "/team/cultural.jpg"
    },
    {
      name: "Ahmed Karray",
      role: "Lead Developer",
      description: "Expert in mobile technologies and GPS systems, bringing technical excellence to every feature.",
      image: "/team/developer.jpg"
    }
  ];

  const milestones = [
    {
      year: "2023",
      title: "The Vision",
      description: "Conceived the idea to digitally preserve and share Sousse's medina heritage"
    },
    {
      year: "2024",
      title: "Development Begins",
      description: "Started working with local historians and community members to map the medina"
    },
    {
      year: "2024",
      title: "Beta Launch",
      description: "Released the first version to local testers and cultural enthusiasts"
    },
    {
      year: "2025",
      title: "Global Launch",
      description: "Officially launched FielMedina Sousse on Google Play Store"
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
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Our Story
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed mb-8">
              Born from a passion for preserving Tunisia's cultural heritage, 
              FielMedina brings the historic medina of Sousse to life through innovative technology.
            </p>
            <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <MapPin className="size-4" />
                <span>Sousse, Tunisia</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="size-4" />
                <span>Founded 2023</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                We believe that cultural heritage should be accessible to everyone. 
                Our mission is to use technology as a bridge between the past and present, 
                helping visitors and locals alike discover the hidden stories behind 
                every door, every stone, and every corner of Sousse's magnificent medina.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Through immersive storytelling, interactive maps, and authentic local insights, 
                we're not just creating an app – we're preserving a living piece of history 
                for future generations to explore and cherish.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-gradient-to-r from-[#b65d37] to-orange-500 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Why FielMedina?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-200 rounded-full mt-2 flex-shrink-0" />
                    <span>Authentic stories from local historians</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-200 rounded-full mt-2 flex-shrink-0" />
                    <span>GPS-guided exploration of hidden gems</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-200 rounded-full mt-2 flex-shrink-0" />
                    <span>Offline access for uninterrupted discovery</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-200 rounded-full mt-2 flex-shrink-0" />
                    <span>Cultural preservation through technology</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 lg:mb-20 max-w-3xl mx-auto"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Our Values
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
              The principles that guide everything we do at FielMedina
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className={`w-14 h-14 mb-6 rounded-xl bg-gradient-to-r ${value.gradient} 
                              flex items-center justify-center text-white group-hover:scale-110 
                              transition-transform duration-300`}>
                  <value.icon className="size-7" />
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 lg:mb-20 max-w-3xl mx-auto"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Meet Our Team
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
              The passionate individuals behind FielMedina's vision
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto"
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center group"
              >
                <div className="relative mb-6 mx-auto w-32 h-32 lg:w-40 lg:h-40">
                  <div className="w-full h-full bg-gradient-to-r from-[#b65d37] to-orange-500 
                                rounded-full flex items-center justify-center text-white 
                                group-hover:scale-105 transition-transform duration-300">
                    <span className="text-2xl lg:text-3xl font-bold">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-[#b65d37] font-semibold mb-4">{member.role}</p>
                <p className="text-gray-600 leading-relaxed">
                  {member.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 lg:py-24 bg-[#FDF7EC]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 lg:mb-20 max-w-3xl mx-auto"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Our Journey
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
              From vision to reality - the milestones that shaped FielMedina
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 lg:left-1/2 lg:transform lg:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-[#b65d37]" />
              
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`relative flex items-center mb-12 last:mb-0 ${
                    index % 2 === 0 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-2 lg:left-1/2 lg:transform lg:-translate-x-1/2 w-4 h-4 bg-[#b65d37] rounded-full border-4 border-white shadow-lg" />
                  
                  {/* Content */}
                  <div className={`bg-white rounded-2xl p-6 shadow-lg ml-12 lg:ml-0 lg:w-5/12 ${
                    index % 2 === 0 ? 'lg:mr-auto lg:pr-12' : 'lg:ml-auto lg:pl-12'
                  }`}>
                    <div className="text-2xl font-bold text-[#b65d37] mb-2">{milestone.year}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{milestone.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-[#b65d37] to-[#b65c37] text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl lg:text-4xl font-bold mb-6"
          >
            Join Our Mission
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg lg:text-xl mb-8 max-w-2xl mx-auto leading-relaxed opacity-90"
          >
            Help us preserve and share the cultural heritage of Sousse with the world
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.a
              href="/"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#b65d37] px-8 py-4 rounded-full text-lg font-semibold 
                       hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl
                       flex items-center space-x-2"
            >
              <span>Back to Home</span>
            </motion.a>
            
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold 
                       hover:bg-white hover:text-[#b65d37] transition-colors
                       flex items-center space-x-2"
            >
              <span>Get In Touch</span>
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 