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
  Shield,
  Flame,
  Wrench,
  CheckCircle,
  Phone,
  ArrowRight,
  Factory,
  Package,
  Recycle,
} from 'lucide-react';
import { Link } from '@/i18n/routing';
import Image from 'next/image';
import BrowseProducts from '../BrowseProducts/BrowseProducts';
import CommitmentSection from '../CommitmentSection/CommitmentSection';
import CTASection from '../CTA/CTAsection';
import CTAbout from '../CTAAbout/CTAbout';

export default function Home() {
  const t = useTranslations('Home');
  const cta = useTranslations('CTA');
  const browse = useTranslations('browse');

  const heroImages = [
    '/image/hero.jpg',
    '/image/hero2.jpg',
    '/image/hero3.jpg',
  ];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col">
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
            <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
          </div>
        ))}

        <div className="container mx-auto px-4 text-center relative z-10 text-white">
          <Badge variant="secondary" className="mb-6 bg-white/20 text-white">
            {t('hero.badge')}
          </Badge>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
            {t.rich('hero.title', {
              span: (chunks) => <span className="text-primary">{chunks}</span>,
              br: () => <br />,
            })}
          </h1>

          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto text-pretty">
            {t('hero.subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact" className="flex items-center space-x-2">
                <Phone className="h-5 w-5" />
                <span>{t('hero.buttons.quote')}</span>
              </Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="text-red-500 hover:border-none"
              asChild
            >
              <Link href="/services" className="flex items-center space-x-2">
                <span>{t('hero.buttons.services')}</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <BrowseProducts t={browse} />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('services.heading')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              {t('services.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.raw('services.list').map((service: any, index: number) => {
              const icons = [
                <Factory key="factory" />,
                <Package key="package" />,
                <Recycle key="recycle" />,
              ];
              return (
                <Card
                  key={index}
                  className="group hover:shadow-lg transition-all duration-300"
                >
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit group-hover:bg-primary/20 transition-colors">
                      {icons[index]}
                    </div>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* ✅ قسم لماذا تختارنا */}
      <section className="py-20 bg-muted/30">
        <div className="container px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {t('whyChoose.heading')}
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {t('whyChoose.description')}
              </p>

              <div className="space-y-4">
                {t.raw('whyChoose.points').map((point: any, index: number) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 text-start"
                  >
                    <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">{point.title}</h3>
                      <p className="text-muted-foreground">
                        {point.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8">
                <Image
                  height={1000}
                  width={1000}
                  src="/image/sec2.jpg"
                  alt="ProtectionCO professional inspecting fire safety equipment"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <CommitmentSection t={t} />
      <CTAbout />
    </div>
  );
}
