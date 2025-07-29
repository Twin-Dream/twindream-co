"use client";

import React from "react";
import { motion } from "framer-motion";
import { Target, Heart, Code, Lightbulb } from "lucide-react";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Where Partnership Meets{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Innovation
            </span>
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-700 leading-relaxed">
              Twin Dream Limited was founded on a simple, yet powerful, dual
              philosophy. We exist to bring your business vision to life through
              powerful and reliable technology, while simultaneously pushing the
              boundaries of what&apos;s possible by building our own innovative
              tools.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We are a team of passionate software engineers, strategists, and
              innovators dedicated to turning complex challenges into elegant
              digital solutions. Our foundation in disciplined engineering
              ensures that everything we build is robust, scalable, and
              delivered with integrity.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl"
            >
              <Target className="text-blue-600 mb-4" size={32} />
              <h3 className="font-semibold text-gray-900 mb-2">Vision</h3>
              <p className="text-sm text-gray-600">
                Powering the next generation of business by making intelligent
                software a reality for everyone.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl"
            >
              <Heart className="text-purple-600 mb-4" size={32} />
              <h3 className="font-semibold text-gray-900 mb-2">Mission</h3>
              <p className="text-sm text-gray-600">
                Building brilliant, bespoke software and innovative tools that
                anticipate the future of technology.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl"
            >
              <Code className="text-green-600 mb-4" size={32} />
              <h3 className="font-semibold text-gray-900 mb-2">Excellence</h3>
              <p className="text-sm text-gray-600">
                Robust, scalable solutions built with disciplined engineering
                and attention to detail.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl"
            >
              <Lightbulb className="text-orange-600 mb-4" size={32} />
              <h3 className="font-semibold text-gray-900 mb-2">Innovation</h3>
              <p className="text-sm text-gray-600">
                AI-powered solutions that push boundaries and create competitive
                advantages.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
