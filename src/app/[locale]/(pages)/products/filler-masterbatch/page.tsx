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
  Package,
  TrendingDown,
  Shield,
  Zap,
  CheckCircle,
  Award,
  Factory,
  Sparkles,
  Layers,
  Box,
  Droplets,
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import CTAbout from '@/app/[locale]/components/CTAAbout/CTAbout';

const FillerMasterbatchPage: React.FC = () => {
  const products = [
    {
      name: 'Polyethylene Filler Masterbatch',
      code: 'EFPE 1001',
      category: 'PE Based',
      description:
        'A blend of calcium carbonate and additives within a polyethylene resin carrier. Helps lower material costs by partially replacing virgin polyethylene resin.',
      features: [
        'Cost-Effective Solution',
        'Virgin PE Replacement',
        'Enhanced Competitiveness',
        'Superior Dispersion',
      ],
      applications: [
        'Blow Molding',
        'Injection Molding',
        'Film Production',
        'Packaging Materials',
      ],
    },
    {
      name: 'Polypropylene Filler Masterbatch',
      code: 'EFPP 1001',
      category: 'PP Based',
      description:
        'Composed of calcium carbonate, polypropylene resin, and performance-enhancing additives. Delivers significant cost savings in production.',
      features: [
        'Multiple Advantages',
        'Performance Enhancement',
        'Production Savings',
        'Process Stability',
      ],
      applications: [
        'Injection Molding',
        'Plastic Frames',
        'Automotive Parts',
        'Consumer Goods',
      ],
    },
    {
      name: 'High-Impact Polystyrene (HIPS) Filler Masterbatch',
      code: 'HIPS-MB',
      category: 'Special Grade',
      description:
        'A blend of calcium carbonate, HIPS resin, and specialized additives. Provides excellent whiteness, dispersion, and compatibility.',
      features: [
        'Excellent Whiteness',
        'Superior Dispersion',
        'High Compatibility',
        'Impact Resistance',
      ],
      applications: [
        'Packaging',
        'Disposable Items',
        'Electronics Housing',
        'Food Containers',
      ],
    },
    {
      name: 'Transparent Filler Masterbatch',
      code: 'TFM-001',
      category: 'Specialty',
      description:
        'Incorporates barium sulfate (BaSO₄) with plastic resins and special additives to reduce costs and improve mechanical properties.',
      features: [
        'Maintains Clarity',
        'Cost Reduction',
        'Enhanced Mechanics',
        'Special Formula',
      ],
      applications: [
        'Clear Packaging',
        'Transparent Films',
        'Medical Devices',
        'Optical Applications',
      ],
    },
  ];

  const certifications = [
    { name: 'ISO 9001 Certified', icon: Award },
    { name: 'Quality Assured', icon: Shield },
    { name: 'Industry Standard', icon: CheckCircle },
    { name: 'Innovation Leader', icon: Sparkles },
  ];

  const advantages = [
    {
      icon: TrendingDown,
      title: 'Cost Reduction',
      description:
        'Lowers raw material consumption, thus reducing production costs significantly',
    },
    {
      icon: Shield,
      title: 'Enhanced Product Properties',
      description:
        'Improves hardness, impact resistance, and product stability',
    },
    {
      icon: Zap,
      title: 'Processing Efficiency',
      description:
        'Stabilizes production processes and enhances surface quality',
    },
    {
      icon: Layers,
      title: 'Energy Savings',
      description:
        'High thermal conductivity of calcium carbonate reduces energy consumption',
    },
  ];

  const applicationsList = [
    { name: 'Blow Molding', icon: Droplets },
    { name: 'Injection Molding', icon: Box },
    { name: 'Packaging', icon: Package },
    { name: 'Plastic Frames', icon: Layers },
    { name: 'Doors', icon: Factory },
    { name: 'Plastic Pipes', icon: Factory },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 to-background overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-background/80 to-background/90 z-10" />
          <Image
            src="/image/1.png"
            alt="Filler Masterbatch Production"
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
              <Package className="h-12 w-12 text-primary mr-4" />
              <h1 className="text-4xl md:text-6xl font-bold text-foreground">
                Filler <span className="text-primary">Masterbatch</span>
              </h1>
            </div>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Filler masterbatch is widely used in the production of plastic
              products. It consists of a blend of calcium carbonate (CaCO₃),
              plastic resin pellets, and specialized additives tailored to meet
              customer requirements
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {certifications.map((cert, index) => {
                const IconComponent = cert.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-2 bg-background/80 backdrop-blur rounded-lg px-4 py-2 border"
                  >
                    <IconComponent className="h-6 w-6 text-primary" />
                    <span className="text-sm font-medium">{cert.name}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Advantages of Aramco Filler Masterbatch
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our filler masterbatch offers several key benefits that transform
              your production efficiency and product quality
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => {
              const IconComponent = advantage.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="text-center hover:shadow-xl transition-all duration-300 h-full">
                    <CardHeader>
                      <IconComponent className="h-12 w-12 text-primary mx-auto mb-4" />
                      <CardTitle className="mb-2">{advantage.title}</CardTitle>
                      <CardDescription className="leading-relaxed">
                        {advantage.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Types of Filler Masterbatch
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive range of filler masterbatch solutions designed to
              meet diverse manufacturing requirements
            </p>
          </motion.div>

          <div className="space-y-8">
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="p-8 lg:p-12">
                    <div className="flex items-center gap-3 mb-4">
                      <Badge variant="secondary">{product.category}</Badge>
                      {product.code && (
                        <Badge variant="outline" className="font-mono">
                          {product.code}
                        </Badge>
                      )}
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                      {product.name}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {product.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="font-semibold text-foreground mb-3">
                        Key Features:
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {product.features.map((feature, featureIndex) => (
                          <div
                            key={featureIndex}
                            className="flex items-center space-x-2 text-sm"
                          >
                            <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                            <span className="text-muted-foreground">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-foreground mb-3">
                        Applications:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {product.applications.map((app, appIndex) => (
                          <Badge
                            key={appIndex}
                            variant="outline"
                            className="text-xs"
                          >
                            {app}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Overview */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Wide Range of Applications
              </h2>
              <p className="text-lg text-muted-foreground">
                Aramco's filler masterbatch is widely applied in various
                manufacturing processes
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {applicationsList.map((app, index) => {
                const IconComponent = app.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Card className="text-center p-6 hover:shadow-lg transition-all cursor-pointer">
                      <IconComponent className="h-8 w-8 text-primary mx-auto mb-3" />
                      <h3 className="font-semibold text-foreground">
                        {app.name}
                      </h3>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Aramco */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why Choose Aramco?
              </h2>
              <p className="text-lg text-muted-foreground">
                Leading provider of innovative filler masterbatch solutions
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0 }}
              >
                <Card className="text-center h-full">
                  <CardHeader>
                    <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                    <CardTitle>Innovation Excellence</CardTitle>
                    <CardDescription>
                      High-quality solutions engineered with cutting-edge
                      technology and innovative formulations
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <Card className="text-center h-full">
                  <CardHeader>
                    <Sparkles className="h-12 w-12 text-primary mx-auto mb-4" />
                    <CardTitle>Customer Focus</CardTitle>
                    <CardDescription>
                      Specialized additives tailored to meet diverse customer
                      needs and specific requirements
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <Card className="text-center h-full">
                  <CardHeader>
                    <TrendingDown className="h-12 w-12 text-primary mx-auto mb-4" />
                    <CardTitle>Cost Efficiency</CardTitle>
                    <CardDescription>
                      Ensuring cost efficiency and production excellence
                      throughout your manufacturing process
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTAbout />
    </div>
  );
};

export default FillerMasterbatchPage;
