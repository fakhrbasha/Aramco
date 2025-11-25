'use client';

import { useTranslations } from 'next-intl';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  CheckCircle,
  Phone,
  ArrowRight,
  Factory,
  Package,
  Recycle,
  Sparkles,
  Award,
  TrendingUp,
} from 'lucide-react';
import { Link } from '@/i18n/routing';
import Image from 'next/image';
import { motion } from 'framer-motion';
import BrowseProducts from '../BrowseProducts/BrowseProducts';
import CommitmentSection from '../CommitmentSection/CommitmentSection';
import CTASection from '../CTA/CTAsection';
import CTAbout from '../CTAAbout/CTAbout';

export default function Home() {
  const t = useTranslations('Home');
  const cta = useTranslations('CTA');
  const browse = useTranslations('browse');

  const heroImages = [
    '/image/HERO.jpg',
    '/image/Hero2.jpg',
    '/image/Hero3.jpg',
  ];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const serviceIcons = [Factory, Package, Recycle];

  return (
    <div className="flex flex-col">
      {/* Hero Section - Enhanced */}
      <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden">
        {heroImages.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${
              index === currentImage ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={src}
              alt={`Hero background ${index + 1}`}
              fill
              priority={index === 0}
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60" />
          </div>
        ))}

        <div className="container mx-auto px-4 text-center relative z-10 text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge
              variant="secondary"
              className="mb-6 bg-white/20 backdrop-blur-sm text-white border-white/30 px-4 py-2"
            >
              {t('hero.badge')}
            </Badge>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance leading-tight">
              {t.rich('hero.title', {
                span: (chunks) => (
                  <span className="text-primary bg-primary/10 px-2 rounded">
                    {chunks}
                  </span>
                ),
                br: () => <br />,
              })}
            </h1>

            <p className="text-lg md:text-xl lg:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto text-pretty leading-relaxed">
              {t('hero.subtitle')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                asChild
                className="text-lg px-8 py-6 shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <Link href="/contact" className="flex items-center space-x-2">
                  <Phone className="h-5 w-5" />
                  <span>{t('hero.buttons.quote')}</span>
                </Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-foreground transition-all duration-300"
                asChild
              >
                <Link href="/services" className="flex items-center space-x-2">
                  <span>{t('hero.buttons.services')}</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Browse Products */}
      <BrowseProducts t={browse} />

      {/* Services Section - Redesigned */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge variant="outline" className="mb-4">
              {t('services.heading')}
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              {t('services.heading')}
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              {t('services.description')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.raw('services.list').map((service: any, index: number) => {
              const IconComponent = serviceIcons[index];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <Card className="group hover:shadow-2xl transition-all duration-300 h-full border-2 hover:border-primary/50 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <CardHeader className="text-center relative z-10">
                      <div className="mx-auto mb-6 p-4 bg-primary/10 rounded-2xl w-fit group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                        <IconComponent className="h-8 w-8 text-primary group-hover:text-white transition-colors" />
                      </div>
                      <CardTitle className="text-xl mb-3">
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="relative z-10">
                      <CardDescription className="text-center leading-relaxed">
                        {service.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section - Redesigned */}
      <section className="py-20 bg-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
        </div>

        <div className="container px-4 lg:px-10 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Badge variant="outline" className="mb-4">
                Why Choose Us
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                {t('whyChoose.heading')}
              </h2>
              <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                {t('whyChoose.description')}
              </p>

              <div className="space-y-6">
                {t.raw('whyChoose.points').map((point: any, index: number) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex items-start space-x-4 p-4 rounded-lg bg-background/50 hover:bg-background transition-all duration-300 group"
                  >
                    <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <CheckCircle className="h-6 w-6 text-primary group-hover:text-white flex-shrink-0" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">{point.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {point.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 z-10" />
                <Image
                  height={1000}
                  width={1000}
                  src="/image/sec2.jpg"
                  alt="Professional team working"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-2xl p-6"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <Award className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">15+</p>
                    <p className="text-sm text-muted-foreground">
                      Years Experience
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/20 rounded-full blur-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      <CommitmentSection t={t} />
      <CTAbout />
    </div>
  );
}
