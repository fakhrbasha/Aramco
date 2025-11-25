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
  Palette,
  Sparkles,
  Shield,
  Thermometer,
  Wind,
  TrendingUp,
  CheckCircle,
  Award,
  Users,
  Leaf,
  Layers,
  Film,
  Box,
  Factory,
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import CTAbout from '@/app/[locale]/components/CTAAbout/CTAbout';

const ColorMasterbatchPage: React.FC = () => {
  const features = [
    {
      icon: Sparkles,
      title: 'Excellent Pigment Dispersion',
      description:
        'Ensures uniform color distribution and consistency across the final product surface.',
    },
    {
      icon: Shield,
      title: 'High Color Fastness',
      description:
        'Maintains color integrity under harsh processing conditions and long-term usage.',
    },
    {
      icon: Thermometer,
      title: 'Thermal Resistance',
      description:
        'Performs reliably at high processing temperatures without degradation or color shift.',
    },
    {
      icon: Wind,
      title: 'Reduced Dust and Contamination',
      description:
        'Minimizes airborne particles and workplace pollution compared to traditional powdered pigments.',
    },
    {
      icon: TrendingUp,
      title: 'Enhanced Production Efficiency',
      description:
        'Improves workflow by making handling easier, reducing waste, and cutting overall production costs.',
    },
  ];

  const applications = [
    { name: 'Plastic Film Production', icon: Film },
    { name: 'Injection Molding', icon: Box },
    { name: 'Extrusion Processes', icon: Layers },
    { name: 'Industrial Applications', icon: Factory },
  ];

  const standardColors = [
    { name: 'White', color: 'bg-white border-2 border-gray-300' },
    { name: 'Black', color: 'bg-black' },
    { name: 'Red', color: 'bg-red-500' },
    { name: 'Blue', color: 'bg-blue-500' },
    { name: 'Gray', color: 'bg-gray-500' },
    { name: 'Orange', color: 'bg-orange-500' },
    { name: 'Purple', color: 'bg-purple-500' },
    { name: 'Brown', color: 'bg-amber-700' },
    { name: 'Yellow', color: 'bg-yellow-400' },
  ];

  const whyChoose = [
    {
      icon: Award,
      title: 'High-Performance Solutions',
      description:
        'Delivering exceptional quality that enhances your product excellence',
    },
    {
      icon: TrendingUp,
      title: 'Production Efficiency',
      description:
        'Streamlined processes that improve workflow and reduce costs',
    },
    {
      icon: Leaf,
      title: 'Environmental Sustainability',
      description:
        'Committed to eco-friendly practices and sustainable solutions',
    },
    {
      icon: Users,
      title: 'Customer Satisfaction',
      description:
        'Strong focus on meeting and exceeding customer expectations',
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
            src="/image/2.png"
            alt="Color Masterbatch Production"
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
              <Palette className="h-12 w-12 text-primary mr-4" />
              <h1 className="text-4xl md:text-6xl font-bold text-foreground">
                Color <span className="text-primary">Masterbatch</span>
              </h1>
            </div>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Premium plastic compound engineered to deliver vibrant, accurate,
              and consistent coloration to your plastic products. Made by
              blending high-quality pigments with base resin and special
              additives for superior performance.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
                className="flex items-center space-x-2 bg-background/80 backdrop-blur rounded-lg px-4 py-2 border"
              >
                <Sparkles className="h-6 w-6 text-primary" />
                <span className="text-sm font-medium">Vibrant Colors</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="flex items-center space-x-2 bg-background/80 backdrop-blur rounded-lg px-4 py-2 border"
              >
                <CheckCircle className="h-6 w-6 text-primary" />
                <span className="text-sm font-medium">Consistent Quality</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="flex items-center space-x-2 bg-background/80 backdrop-blur rounded-lg px-4 py-2 border"
              >
                <Award className="h-6 w-6 text-primary" />
                <span className="text-sm font-medium">Premium Grade</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What is Color Masterbatch */}
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
                What is Color Masterbatch?
              </h2>
            </div>
            <Card className="p-8 lg:p-12">
              <div className="flex items-start gap-6">
                <div className="hidden md:block">
                  <Palette className="h-16 w-16 text-primary" />
                </div>
                <div>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Color masterbatch is a plastic compound used to impart
                    vibrant, accurate, and consistent coloration to plastic
                    products. It is made by blending high-quality pigments with
                    a base resin and special additives, then pelletized for use
                    in various manufacturing processes.
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
              Key Features of Aramco Color Masterbatch
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Engineered with advanced technology to deliver exceptional
              performance in every application
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
        </div>
      </section>

      {/* Available Colors */}
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
                Available Colors
              </h2>
              <p className="text-lg text-muted-foreground">
                Comprehensive color palette to meet all your design requirements
              </p>
            </div>

            {/* Standard Colors */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
                Standard Colors
              </h3>
              <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-6">
                {standardColors.map((color, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.1 }}
                    className="flex flex-col items-center cursor-pointer"
                  >
                    <div
                      className={`${color.color} w-20 h-20 rounded-full shadow-lg mb-3 transition-transform`}
                    />
                    <span className="text-sm font-medium text-center">
                      {color.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Custom Solutions */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 bg-gradient-to-br from-primary/5 to-background border-primary/20">
                <div className="flex items-start gap-6">
                  <Sparkles className="h-12 w-12 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-3">
                      Custom Solutions
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Tailored color masterbatch with special visual effects
                      based on your product's design requirements. We work
                      closely with you to create unique colors that perfectly
                      match your brand identity and product specifications.
                    </p>
                    <Button className="mt-6">Request Custom Color</Button>
                  </div>
                </div>
              </Card>
            </motion.div>
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
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Applications
              </h2>
              <p className="text-lg text-muted-foreground">
                Ideal for a wide range of plastic processing applications
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {applications.map((app, index) => {
                const IconComponent = app.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="p-6 hover:shadow-xl transition-all duration-300 cursor-pointer h-full">
                      <div className="flex items-center gap-4">
                        <IconComponent className="h-10 w-10 text-primary flex-shrink-0" />
                        <h3 className="text-xl font-semibold text-foreground">
                          {app.name}
                        </h3>
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Aramco */}
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
                Why Choose Aramco?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                As a trusted partner in the plastics industry, Aramco delivers
                comprehensive solutions that drive success
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {whyChoose.map((item, index) => {
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
              className="mt-12 text-center"
            >
              <Card className="p-8 bg-gradient-to-br from-primary/10 to-background">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Aramco's color masterbatch solutions enhance{' '}
                  <span className="font-semibold text-foreground">
                    product quality
                  </span>
                  , improve{' '}
                  <span className="font-semibold text-foreground">
                    production efficiency
                  </span>
                  , and support{' '}
                  <span className="font-semibold text-foreground">
                    environmental sustainability
                  </span>{' '}
                  — all with a strong focus on{' '}
                  <span className="font-semibold text-foreground">
                    customer satisfaction
                  </span>
                  .
                </p>
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

export default ColorMasterbatchPage;
