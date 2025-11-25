'use client';

import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { motion } from 'framer-motion';
import {
  Shield,
  Target,
  Eye,
  Award,
  Building,
  CheckCircle,
  ArrowRight,
  Sparkles,
  TrendingUp,
  Users,
  Leaf,
  Handshake,
} from 'lucide-react';
import { Link } from '@/i18n/routing';

export default function AboutPage() {
  const t = useTranslations('About');

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <img
          src="/image/about1.jpg"
          alt="About our fire protection company"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

        <div className="relative z-10 text-center text-white px-6">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg"
          >
            {t.rich('hero.title', {
              span: (chunks) => <span className="text-primary">{chunks}</span>,
            })}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto leading-relaxed"
          >
            {/* {t('hero.subtitle')} */}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-8"
          >
            <Button
              size="lg"
              variant="secondary"
              asChild
              className="font-semibold shadow-lg"
            >
              <Link href="/contact" className="flex items-center space-x-2">
                <span>{t('hero.button', { defaultValue: 'Contact Us' })}</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Story Timeline - REDESIGNED */}
      <section className="py-20 bg-transparent">
        <div className="containerr mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              {t('story.heading')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t('story.subTitle')}
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative max-w-6xl mx-auto">
            {/* Vertical Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary/20 via-primary/50 to-primary/20" />

            {/* Milestone 1 */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative flex items-center md:flex-row mb-12"
            >
              <div className="w-full md:w-5/12">
                <Card className="hover:shadow-xl transition-all duration-300 group hover:border-primary/50">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary to-primary/70 rounded-xl flex items-center justify-center text-primary-foreground group-hover:scale-110 transition-transform duration-300">
                        <Sparkles className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-2">
                          2015
                        </div>
                        <CardTitle className="text-xl mb-2">
                          {t('story.Beginning')}
                        </CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {t('story.paragraph_1')}
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
              <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-primary rounded-full border-4 border-background shadow-lg z-10" />
              <div className="hidden md:block w-5/12" />
            </motion.div>

            {/* Milestone 2 */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="relative flex items-center md:flex-row-reverse mb-12"
            >
              <div className="w-full md:w-5/12">
                <Card className="hover:shadow-xl transition-all duration-300 group hover:border-primary/50">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary to-primary/70 rounded-xl flex items-center justify-center text-primary-foreground group-hover:scale-110 transition-transform duration-300">
                        <TrendingUp className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-2">
                          Growth
                        </div>
                        <CardTitle className="text-xl mb-2">
                          {t('story.Evolution')}
                        </CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {t('story.par2')}
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
              <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-primary rounded-full border-4 border-background shadow-lg z-10" />
              <div className="hidden md:block w-5/12" />
            </motion.div>

            {/* Milestone 3 */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative flex items-center md:flex-row mb-12"
            >
              <div className="w-full md:w-5/12">
                <Card className="hover:shadow-xl transition-all duration-300 group hover:border-primary/50">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary to-primary/70 rounded-xl flex items-center justify-center text-primary-foreground group-hover:scale-110 transition-transform duration-300">
                        <Users className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-2">
                          Partnership
                        </div>
                        <CardTitle className="text-xl mb-2">
                          {t('story.Solutions')}
                        </CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {t('story.par3')}
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
              <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-primary rounded-full border-4 border-background shadow-lg z-10" />
              <div className="hidden md:block w-5/12" />
            </motion.div>

            {/* Milestone 4 */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="relative flex items-center md:flex-row-reverse mb-12"
            >
              <div className="w-full md:w-5/12">
                <Card className="hover:shadow-xl transition-all duration-300 group hover:border-primary/50">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary to-primary/70 rounded-xl flex items-center justify-center text-primary-foreground group-hover:scale-110 transition-transform duration-300">
                        <Leaf className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-2">
                          Sustainability
                        </div>
                        <CardTitle className="text-xl mb-2">
                          {t('story.Innovation')}
                        </CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {t('story.par4')}
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
              <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-primary rounded-full border-4 border-background shadow-lg z-10" />
              <div className="hidden md:block w-5/12" />
            </motion.div>

            {/* Milestone 5 */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="relative flex items-center md:flex-row"
            >
              <div className="w-full md:w-5/12">
                <Card className="hover:shadow-xl transition-all duration-300 group hover:border-primary/50">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary to-primary/70 rounded-xl flex items-center justify-center text-primary-foreground group-hover:scale-110 transition-transform duration-300">
                        <Handshake className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-2">
                          Today
                        </div>
                        <CardTitle className="text-xl mb-2">
                          {t('story.Partners')}
                        </CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {t('story.par5')}
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
              <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-primary rounded-full border-4 border-background shadow-lg z-10" />
              <div className="hidden md:block w-5/12" />
            </motion.div>
          </div>

          {/* Bottom Highlight */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="inline-block bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 border border-primary/20 max-w-3xl">
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t('story.par')}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted/30">
        <div className="containerr mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('missionVision.heading')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              {t('missionVision.description')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {t.raw('missionVision.cards').map((card: any, i: number) => {
              const icons = [
                <Target className="h-8 w-8 text-primary" />,
                <Eye className="h-8 w-8 text-accent" />,
              ];
              return (
                <Card key={i} className="h-full">
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                      {icons[i]}
                    </div>
                    <CardTitle className="text-2xl">{card.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardDescription className="text-base leading-relaxed">
                      {card.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative py-20 bg-gradient-to-b from-background via-primary/5 to-background overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: '2s' }}
          ></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block mb-4">
              <span className="text-xs font-bold text-primary tracking-widest uppercase px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5">
                {t('values.foundation')}
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              {t('values.heading')}
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t('values.description')}
            </p>
          </motion.div>

          <div className="max-w-7xl mx-auto space-y-6">
            {/* First row - 3 cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Quality */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="relative h-full overflow-hidden border-2 hover:border-primary/50 transition-all duration-500 group bg-card/50 backdrop-blur-sm">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <CardHeader className="relative">
                    <div className="mb-4 inline-flex p-3 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-xl border border-blue-500/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                      <Shield className="h-8 w-8 text-blue-600" />
                    </div>
                    <CardTitle className="text-2xl font-bold group-hover:text-primary transition-colors duration-300">
                      {t('values.quality.title')}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="relative">
                    <CardDescription className="text-base leading-relaxed">
                      {t('values.quality.description')}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Innovation */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="relative h-full overflow-hidden border-2 hover:border-primary/50 transition-all duration-500 group bg-card/50 backdrop-blur-sm">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <CardHeader className="relative">
                    <div className="mb-4 inline-flex p-3 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl border border-purple-500/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                      <Sparkles className="h-8 w-8 text-purple-600" />
                    </div>
                    <CardTitle className="text-2xl font-bold group-hover:text-primary transition-colors duration-300">
                      {t('values.innovation.title')}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="relative">
                    <CardDescription className="text-base leading-relaxed">
                      {t('values.innovation.description')}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Sustainability */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Card className="relative h-full overflow-hidden border-2 hover:border-primary/50 transition-all duration-500 group bg-card/50 backdrop-blur-sm">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <CardHeader className="relative">
                    <div className="mb-4 inline-flex p-3 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-xl border border-green-500/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                      <Leaf className="h-8 w-8 text-green-600" />
                    </div>
                    <CardTitle className="text-2xl font-bold group-hover:text-primary transition-colors duration-300">
                      {t('values.sustainability.title')}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="relative">
                    <CardDescription className="text-base leading-relaxed">
                      {t('values.sustainability.description')}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Second row - 2 cards taking full width */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Partnership */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Card className="relative h-full overflow-hidden border-2 hover:border-primary/50 transition-all duration-500 group bg-card/50 backdrop-blur-sm">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <CardHeader className="relative">
                    <div className="mb-4 inline-flex p-3 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-xl border border-orange-500/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                      <Handshake className="h-8 w-8 text-orange-600" />
                    </div>
                    <CardTitle className="text-2xl font-bold group-hover:text-primary transition-colors duration-300">
                      {t('values.partnership.title')}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="relative">
                    <CardDescription className="text-base leading-relaxed">
                      {t('values.partnership.description')}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Reliability */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="relative h-full overflow-hidden border-2 hover:border-primary/50 transition-all duration-500 group bg-card/50 backdrop-blur-sm">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <CardHeader className="relative">
                    <div className="mb-4 inline-flex p-3 bg-gradient-to-br from-indigo-500/10 to-blue-500/10 rounded-xl border border-indigo-500/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                      <CheckCircle className="h-8 w-8 text-indigo-600" />
                    </div>
                    <CardTitle className="text-2xl font-bold group-hover:text-primary transition-colors duration-300">
                      {t('values.reliability.title')}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="relative">
                    <CardDescription className="text-base leading-relaxed">
                      {t('values.reliability.description')}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-primary-foreground/20" />
        <div className="absolute inset-0 bg-black/20 mix-blend-multiply" />

        <div className="relative containerr mx-auto px-4 text-center text-primary-foreground">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight drop-shadow-lg">
              {t('cta.heading')}
            </h2>
            <p className="text-lg md:text-xl opacity-90 mb-10 max-w-2xl mx-auto leading-relaxed text-pretty">
              {t('cta.description')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                variant="secondary"
                className="px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                asChild
              >
                <Link href="/products" className="flex items-center space-x-2">
                  <span>{t('cta.buttons.services')}</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="px-8 py-6 text-lg border-2 font-semibold border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-transparent"
                asChild
              >
                <Link href="/contact">{t('cta.buttons.contact')}</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
