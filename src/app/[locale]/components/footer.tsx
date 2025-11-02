'use client';

import { Link } from '@/i18n/routing';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export function Footer() {
  const t = useTranslations('Footer');

  return (
    <footer className="bg-card border-t">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left items-center">
          {/* Company Info */}
          <div className="space-y-4 flex flex-col items-center md:items-start">
            <div className="flex flex-col items-center md:items-start">
              <div className="relative w-20 h-20 mx-auto">
                <Image
                  src="/image/Aramco.png"
                  alt="logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-2xl font-bold tracking-wide mt-2">
                ARA<span className="text-red-600">M</span>CO
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs text-center md:text-left">
              {t('company.description')}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 flex flex-col items-center md:items-start">
            <h3 className="font-semibold">{t('quickLinks')}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t('links.about')}
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t('links.services')}
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t('links.projects')}
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 flex flex-col items-center md:items-start">
            <h3 className="font-semibold">{t('contact')}</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-center md:justify-start items-start space-x-2">
                <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">{t('address')}</span>
              </div>
              <div className="flex justify-center md:justify-start items-center space-x-2">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">{t('phone')}</span>
              </div>
              <div className="flex justify-center md:justify-start items-center space-x-2">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">{t('email')}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-6 text-center text-sm text-muted-foreground">
          <p>
            &copy; 2025 Aramco - Engineering & Sustainable Manufacturing
            Company.
          </p>
        </div>
      </div>
    </footer>
  );
}
