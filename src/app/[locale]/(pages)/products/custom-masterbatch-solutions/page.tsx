'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Sparkles,
  Palette,
  Settings,
  Microscope,
  Users,
  Shield,
  Flame,
  Sun,
  CheckCircle,
  Target,
  Lightbulb,
  Package,
  Home,
  Car,
  Zap,
  Heart,
  Award,
  MessageSquare,
  Wrench,
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import CTAbout from '@/app/[locale]/components/CTAAbout/CTAbout';

const CustomMasterbatchPage: React.FC = () => {
  const features = [
    {
      icon: Settings,
      title: 'Fully Customized Formulations',
      description:
        'We create masterbatch from scratch to meet your technical and aesthetic needs.',
    },
    {
      icon: Palette,
      title: 'Unlimited Color Options',
      description:
        'Accurate color matching based on RAL, Pantone, or actual customer samples.',
    },
    {
      icon: Sparkles,
      title: 'Added Functionalities',
      description:
        'Integrate features like UV resistance, flame retardants, antioxidants, and more.',
    },
    {
      icon: Microscope,
      title: 'Advanced Laboratory Testing',
      description:
        'Each formulation is thoroughly tested to ensure full compatibility with your base resin and processing conditions.',
    },
    {
      icon: Users,
      title: 'Technical Support at Every Step',
      description:
        'Our experts work closely with your production team to ensure seamless performance and implementation.',
    },
  ];

  const functionalAdditions = [
    { icon: Sun, name: 'UV Resistance', color: 'text-yellow-500' },
    { icon: Flame, name: 'Flame Retardants', color: 'text-orange-500' },
    { icon: Shield, name: 'Antioxidants', color: 'text-blue-500' },
    { icon: Sparkles, name: 'Special Effects', color: 'text-purple-500' },
  ];

  const applications = [
    {
      icon: Package,
      title: 'Advanced Packaging',
      description:
        'High-performance solutions for premium packaging that demands exceptional quality and visual appeal.',
    },
    {
      icon: Home,
      title: 'Premium Household Goods',
      description:
        'Custom formulations for consumer products requiring superior aesthetics and durability.',
    },
    {
      icon: Car,
      title: 'Automotive Components',
      description:
        'Specialized masterbatch for automotive parts with strict performance and safety requirements.',
    },
    {
      icon: Zap,
      title: 'Electrical Parts',
      description:
        'Technical solutions for electrical components requiring specific functional properties.',
    },
    {
      icon: Heart,
      title: 'Medical-Grade Products',
      description:
        'Certified formulations meeting stringent medical and healthcare industry standards.',
    },
    {
      icon: Target,
      title: 'Unique Projects',
      description:
        'Any project requiring unique color or performance characteristics tailored to your needs.',
    },
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Consultation',
      description:
        'We discuss your requirements, application, and performance goals.',
      icon: MessageSquare,
    },
    {
      number: '02',
      title: 'Formulation',
      description:
        'Our team develops a custom formula matching your exact specifications.',
      icon: Lightbulb,
    },
    {
      number: '03',
      title: 'Testing',
      description:
        'Rigorous laboratory testing ensures compatibility and performance.',
      icon: Microscope,
    },
    {
      number: '04',
      title: 'Implementation',
      description:
        'Full technical support during production and ongoing optimization.',
      icon: Wrench,
    },
  ];

  const whyAramco = [
    {
      icon: Target,
      title: 'Tailored Solutions',
      description:
        'Every formulation is designed specifically for your unique requirements',
    },
    {
      icon: Award,
      title: 'High-Quality Standards',
      description:
        'Rigorous testing and quality control ensure consistent excellence',
    },
    {
      icon: Users,
      title: 'Strategic Partnership',
      description:
        'We work as an extension of your team, committed to your success',
    },
    {
      icon: Wrench,
      title: 'Full Technical Support',
      description:
        'Expert guidance from formulation through production and beyond',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 to-background overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-background/80 to-background/90 z-10" />
          <Image
            src="/image/3.webp"
            alt="Custom Masterbatch Solutions"
            fill
            className="object-cover opacity-80"
            priority
          />
        </div>
        <div className="container mx-auto px-4 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <Settings className="h-12 w-12 text-primary mr-4" />
              <h1 className="text-4xl md:text-6xl font-bold text-foreground">
                Custom <span className="text-primary">Masterbatch</span>{' '}
                Solutions
              </h1>
            </div>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Tailor-made formulations developed to meet your exact product
              requirements — whether it's color, performance, or special
              functionality. We don't just sell products — we collaborate with
              you to design precise, effective, and application-specific
              solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
                className="flex items-center space-x-2 bg-background/80 backdrop-blur rounded-lg px-4 py-2 border"
              >
                <Target className="h-6 w-6 text-primary" />
                <span className="text-sm font-medium">
                  Precision Engineered
                </span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="flex items-center space-x-2 bg-background/80 backdrop-blur rounded-lg px-4 py-2 border"
              >
                <Sparkles className="h-6 w-6 text-primary" />
                <span className="text-sm font-medium">
                  Unlimited Possibilities
                </span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="flex items-center space-x-2 bg-background/80 backdrop-blur rounded-lg px-4 py-2 border"
              >
                <Users className="h-6 w-6 text-primary" />
                <span className="text-sm font-medium">Full Support</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What is Custom Masterbatch */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                What is Custom Masterbatch?
              </h2>
            </div>
            <Card className="p-8 lg:p-12 bg-gradient-to-br from-primary/5 to-background border-primary/20">
              <div className="flex items-start gap-6">
                <div className="hidden md:block">
                  <Target className="h-16 w-16 text-primary" />
                </div>
                <div>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                    Custom masterbatch is a tailor-made formulation developed to
                    meet your exact product requirements — whether it's color,
                    performance, or special functionality.
                  </p>
                  <p className="text-lg font-semibold text-foreground">
                    At Aramco, we don't just sell products — we collaborate with
                    you to design precise, effective, and application-specific
                    masterbatch solutions.
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Key Features of Aramco's Custom Masterbatch
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive capabilities designed to bring your vision to life
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-xl transition-all duration-300">
                    <CardHeader>
                      <IconComponent className="h-12 w-12 text-primary mb-4" />
                      <CardTitle className="mb-3">{feature.title}</CardTitle>
                      <CardDescription className="leading-relaxed">
                        {feature.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Functional Additions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <Card className="p-8 bg-gradient-to-br from-primary/5 to-background">
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
                Available Functional Additions
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {functionalAdditions.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex flex-col items-center text-center"
                    >
                      <IconComponent
                        className={`h-10 w-10 ${item.color} mb-3`}
                      />
                      <span className="text-sm font-medium">{item.name}</span>
                    </motion.div>
                  );
                })}
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Collaboration Process
              </h2>
              <p className="text-lg text-muted-foreground">
                From concept to production, we're with you every step of the way
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="h-full text-center hover:shadow-xl transition-all duration-300">
                      <CardHeader>
                        <div className="text-6xl font-bold text-primary/20 mb-4">
                          {step.number}
                        </div>
                        <IconComponent className="h-12 w-12 text-primary mx-auto mb-4" />
                        <CardTitle className="mb-3">{step.title}</CardTitle>
                        <CardDescription className="leading-relaxed">
                          {step.description}
                        </CardDescription>
                      </CardHeader>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Applications
              </h2>
              <p className="text-lg text-muted-foreground">
                Custom masterbatch is ideal for high-spec or niche applications
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {applications.map((app, index) => {
                const IconComponent = app.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="h-full hover:shadow-xl transition-all duration-300">
                      <CardHeader>
                        <IconComponent className="h-12 w-12 text-primary mb-4" />
                        <CardTitle className="mb-3">{app.title}</CardTitle>
                        <CardDescription className="leading-relaxed">
                          {app.description}
                        </CardDescription>
                      </CardHeader>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Aramco */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why Aramco?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Because we don't just deliver materials — we deliver tailored
                solutions and strategic partnerships
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {whyAramco.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="h-full hover:shadow-xl transition-all duration-300">
                      <CardHeader>
                        <div className="flex items-start gap-4">
                          <IconComponent className="h-12 w-12 text-primary flex-shrink-0" />
                          <div>
                            <CardTitle className="mb-3">{item.title}</CardTitle>
                            <CardDescription className="leading-relaxed">
                              {item.description}
                            </CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                    </Card>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 bg-gradient-to-br from-primary/10 to-background border-primary/20">
                <div className="text-center">
                  <CheckCircle className="h-16 w-16 text-primary mx-auto mb-6" />
                  <p className="text-xl text-foreground font-semibold mb-4">
                    With Aramco, you get:
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <Badge variant="secondary" className="text-sm px-4 py-2">
                      High-Quality Custom Formulations
                    </Badge>
                    <Badge variant="secondary" className="text-sm px-4 py-2">
                      Full Technical Support
                    </Badge>
                    <Badge variant="secondary" className="text-sm px-4 py-2">
                      Dedicated Team
                    </Badge>
                    <Badge variant="secondary" className="text-sm px-4 py-2">
                      Commitment to Your Success
                    </Badge>
                  </div>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <CTAbout />
    </div>
  );
};

export default CustomMasterbatchPage;
