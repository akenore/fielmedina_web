'use client';

import { motion } from 'framer-motion';
import { Download, Menu, X } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import {Link} from '../../i18n/navigation';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = useTranslations('navigation');
  const locale = useLocale();

  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-lg z-50 border-b border-gray-200/50"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/">
              <Image
                src="/logo.svg"
                alt="Fielmedina"
                width={180}
                height={40}
                className="h-8 lg:h-10 w-auto"
                priority
              />
            </Link>
          </div>
          <nav className="hidden lg:flex items-center space-x-8">
            {[
              { name: t('home'), href: '/#home', key: 'home' },
              { name: t('features'), href: '/#features', key: 'features' },
              { name: t('about'), href: '/about', key: 'about' },
              { name: t('reviews'), href: '/#reviews', key: 'reviews' },
              { name: t('contact'), href: '/contact', key: 'contact' }
            ].map((item) => (
              <a 
                key={item.key}
                href={item.href} 
                className="text-gray-700 hover:text-[#b65d37] font-medium transition-colors duration-300"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Language Switcher & Download Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <LanguageSwitcher />
            
            {/* Download Button */}
            <motion.a
              href="https://play.google.com/store/apps/details?id=com.fielmedina.sousse"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 bg-[#b65d37] text-white px-6 py-3 rounded-full 
                       hover:bg-[#a0542f] transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Download className="size-4" />
              <span className="font-medium">Download</span>
            </motion.a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        initial={false}
        animate={isMenuOpen ? { opacity: 1, height: 'auto' } : { opacity: 0, height: 0 }}
        transition={{ duration: 0.3 }}
        className="lg:hidden bg-white border-t border-gray-200 overflow-hidden"
      >
        <div className="container mx-auto px-4 py-4 space-y-4">
          {[
            { name: t('home'), href: '/#home', key: 'home' },
            { name: t('features'), href: '/#features', key: 'features' },
            { name: t('about'), href: '/about', key: 'about' },
            { name: t('reviews'), href: '/#reviews', key: 'reviews' },
            { name: t('contact'), href: '/contact', key: 'contact' }
          ].map((item) => (
            <a 
              key={item.key}
              href={item.href} 
              className="block text-gray-700 hover:text-[#b65d37] font-medium py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
          
          {/* Language Switcher in Mobile */}
          <div className="pt-2 border-t border-gray-200">
            <LanguageSwitcher />
          </div>
          <a 
            href="https://play.google.com/store/apps/details?id=com.fielmedina.sousse"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 bg-[#b65d37] text-white px-6 py-3 rounded-full 
                         hover:bg-[#a0542f] transition-colors w-full justify-center"
          >
            <Download className="size-4" />
            <span>Download App</span>
          </a>
        </div>
      </motion.div>
    </motion.header>
  );
}