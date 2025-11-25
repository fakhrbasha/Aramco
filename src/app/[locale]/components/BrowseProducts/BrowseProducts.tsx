'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Link } from '@/i18n/routing';
import { ArrowRight, Package, Palette, Settings } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function BrowseProducts({ t }: { t: any }) {
  const browse = useTranslations('browse');

  const products = [
    {
      title: t('filler'),
      description: t('disFilter'),
      image: '/image/1.png',
      link: '/products/filler-masterbatch',
      icon: Package,
      color: 'from-blue-500/20 to-cyan-500/20',
    },
    {
      title: t('filler1'),
      description: t('colorDisF'),
      image: '/image/2.png',
      link: '/products/color-masterbatch',
      icon: Palette,
      color: 'from-purple-500/20 to-pink-500/20',
    },
    {
      title: t('Custom'),
      description: t('customDis'),
      image: '/image/3.webp',
      link: '/products/custom-masterbatch-solutions',
      icon: Settings,
      color: 'from-orange-500/20 to-red-500/20',
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-primary/5 via-background to-background">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Title Animation */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            {t('heading', { defaultValue: 'Browse Our Products' })}
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            {t('subheading', {
              defaultValue:
                'Explore our comprehensive range of masterbatch solutions designed for excellence in plastic manufacturing.',
            })}
          </p>
        </motion.div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => {
            const IconComponent = product.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="relative rounded-2xl overflow-hidden bg-card border border-border shadow-lg hover:shadow-2xl transition-all duration-500 h-full">
                  {/* Image Container */}
                  <div className="relative h-64 overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10">
                    {/* Real Image */}
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    {/* Dark overlay on hover */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Icon overlay on hover */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <IconComponent className="h-20 w-20 text-white drop-shadow-lg" />
                    </div>

                    {/* Gradient overlay on hover */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-0 group-hover:opacity-50 transition-opacity duration-500`}
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {product.description}
                    </p>

                    <Button
                      asChild
                      className="w-full group-hover:shadow-lg transition-all duration-300"
                    >
                      <Link
                        href={product.link}
                        className="flex items-center justify-center gap-2"
                      >
                        {/* {t('view', { defaultValue: 'View Details' })} */}
                        View Details
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>

                  {/* Decorative corner */}
                  <div className="absolute top-4 right-4 w-12 h-12 bg-primary/10 rounded-full blur-xl group-hover:bg-primary/20 transition-colors" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
