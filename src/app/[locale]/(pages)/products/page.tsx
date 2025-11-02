'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { FileText, ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import CTAbout from '../../components/CTAAbout/CTAbout';

type Product = {
  id: string;
  title_ar: string;
  title_en: string;
  subtitle: string;
  image?: string;
  pdf: string;
  specs: { label: string; value: string }[];
};

const PRODUCTS: Product[] = [
  // ==== المنتجات الأصلية ====
];

export default function ProductsPage() {
  const t = useTranslations('product');
  const [openPdf, setOpenPdf] = useState<{ src: string; title: string } | null>(
    null
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpenPdf(null);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-black dark:to-black text-foreground">
      {/* HERO */}
      <section className="relative h-[60vh] flex items-center justify-center text-center overflow-hidden">
        <Image
          src="/image/HERO.jpg"
          alt={t('hero.alt')}
          fill
          className="object-cover brightness-[0.65]"
        />
        <div className="absolute inset-0 bg-black/40" />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-white px-6"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
            {t('hero.title')}
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            {t('hero.subtitle')}
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Button
              asChild
              size="lg"
              className="bg-white text-red-700 hover:bg-gray-100 font-semibold px-8"
            >
              {/* <Link href="/gallery">{t('hero.button')}</Link> */}
              <Link href="/contact">Contact</Link>
            </Button>
          </div>
        </motion.div>
      </section>

      {/* PRODUCTS */}
      <section id="catalog" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              {t('catalog.title')}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {t('catalog.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <h1 className="text-center font-bold">Waiting</h1>
            {PRODUCTS.map((p) => (
              <motion.div
                key={p.id}
                whileHover={{ scale: 1.01 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <Card
                  className={`overflow-hidden rounded-3xl shadow-md hover:shadow-2xl transition-all duration-300 bg-white dark:bg-gray-800 flex flex-col ${
                    p.image ? 'h-auto lg:h-[550px] ' : 'h-auto'
                  }`}
                >
                  {p.image ? (
                    <div className="grid md:grid-cols-2 h-full">
                      <div className="relative h-64 md:h-auto">
                        <Image
                          src={p.image}
                          alt={p.title_en}
                          fill
                          className="object-cover transition-transform duration-500 hover:scale-105"
                        />
                        <div className="absolute top-3 left-3 bg-black/60 text-white text-xs px-3 py-1 rounded">
                          {p.id}
                        </div>
                      </div>

                      <div className="p-6 flex flex-col justify-between">
                        <div>
                          <h3 className="text-xl font-bold mb-1 text-gray-900 dark:text-white">
                            {p.title_ar}
                          </h3>
                          <h4 className="text-sm text-gray-500 mb-3">
                            {p.title_en}
                          </h4>
                          <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed line-clamp-3">
                            {p.subtitle}
                          </p>
                          <div className="grid grid-cols-2 gap-y-2 text-sm">
                            {p.specs.map((s, idx) => (
                              <div key={idx}>
                                <span className="text-gray-500">{s.label}</span>
                                <br />
                                <span className="font-medium text-gray-900 dark:text-gray-100">
                                  {s.value}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-3 mt-6">
                          <Button
                            onClick={() =>
                              setOpenPdf({
                                src: p.pdf,
                                title: `${p.id} — ${p.title_en}`,
                              })
                            }
                            className="bg-red-600 hover:bg-red-700 text-white flex items-center gap-2"
                          >
                            <FileText className="w-4 h-4" />
                            {t('catalog.view')}
                          </Button>
                          <a
                            href={p.pdf}
                            download
                            className="inline-flex items-center gap-2 text-sm font-medium text-red-700 hover:text-red-800"
                          >
                            {t('catalog.download')}{' '}
                            <ArrowRight className="w-4 h-4" />
                          </a>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="p-8 text-center flex flex-col justify-between h-full">
                      <div>
                        <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                          {p.title_ar}
                        </h3>
                        <h4 className="text-sm text-gray-500 mb-3">
                          {p.title_en}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-6">
                          {p.subtitle}
                        </p>
                      </div>
                      <div className="flex justify-center gap-3">
                        <Button
                          onClick={() =>
                            setOpenPdf({
                              src: p.pdf,
                              title: `${p.id} — ${p.title_en}`,
                            })
                          }
                          className="bg-red-600 hover:bg-red-700 text-white flex items-center gap-2"
                        >
                          <FileText className="w-4 h-4" />
                          {t('catalog.view')}
                        </Button>
                        <a
                          href={p.pdf}
                          download
                          className="inline-flex items-center gap-2 text-sm font-medium text-red-700 hover:text-red-800"
                        >
                          {t('catalog.download')}{' '}
                          <ArrowRight className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  )}
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PDF Modal */}
      <AnimatePresence>
        {openPdf && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              onClick={() => setOpenPdf(null)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative z-10 w-full max-w-5xl bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden"
            >
              <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-800">
                <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {openPdf.title}
                </h4>
                <div className="flex gap-2">
                  <a
                    href={openPdf.src}
                    download
                    className="px-3 py-1 rounded bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-sm"
                  >
                    {t('catalog.download')}
                  </a>
                  <button
                    onClick={() => setOpenPdf(null)}
                    className="px-3 py-1 rounded bg-red-600 hover:bg-red-700 text-white text-sm"
                  >
                    {t('catalog.close')}
                  </button>
                </div>
              </div>
              <div className="h-[80vh]">
                <iframe
                  src={openPdf.src}
                  title={openPdf.title}
                  className="w-full h-full"
                  style={{ border: 'none' }}
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* WHY SECTION */}
      <section className="bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-950 py-20 mt-10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            {t('why.title')}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-12">
            {t('why.description')}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['quality', 'safety', 'support'].map((key) => (
              <motion.div
                key={key}
                whileHover={{ y: -5 }}
                className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md"
              >
                <h3 className="text-xl font-semibold text-red-600 mb-2">
                  {t(`why.cards.${key}.title`)}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {t(`why.cards.${key}.desc`)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}

      <CTAbout />
    </div>
  );
}
