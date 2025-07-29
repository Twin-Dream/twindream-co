"use client";

import React from "react";
import { motion } from "framer-motion";
import { Search, Palette, Code2, TestTube, Rocket } from "lucide-react";

const Approach = () => {
  const steps = [
    {
      icon: Search,
      title: "Discover & Strategize",
      description:
        "We begin by deeply understanding your goals. We align on a clear strategy and a detailed project roadmap.",
      number: "01",
    },
    {
      icon: Palette,
      title: "Design & Architect",
      description:
        "We design intuitive user experiences while architecting a robust and scalable technical foundation.",
      number: "02",
    },
    {
      icon: Code2,
      title: "Develop & Iterate",
      description:
        "Our agile process means you see progress regularly and provide feedback, ensuring the final product is what you envisioned.",
      number: "03",
    },
    {
      icon: TestTube,
      title: "Test & Assure Quality",
      description:
        "Quality is non-negotiable. We conduct rigorous testing at every stage to ensure your software is secure and bug-free.",
      number: "04",
    },
    {
      icon: Rocket,
      title: "Deploy & Support",
      description:
        "We handle the seamless launch of your product and remain your partner for ongoing support and maintenance.",
      number: "05",
    },
  ];

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
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="approach" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            The Blueprint for{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Success
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our proven approach ensures your project succeeds from concept to
            launch
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-8"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-8 group"
            >
              <div className="flex items-center space-x-4 md:space-x-6">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg"
                >
                  <step.icon className="text-white" size={28} />
                </motion.div>
              </div>

              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Why Choose Us Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 pt-16 border-t border-gray-200"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Why Choose Twin Dream?
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Quality on Time, Every Time",
                description:
                  "We are engineers at heart. We respect deadlines and budgets as much as we respect clean code.",
              },
              {
                title: "AI-Powered Innovation",
                description:
                  "Our focus on AI ensures your solution is not just current, but future-ready.",
              },
              {
                title: "True Partnership",
                description:
                  'We invest in your success. The "twin dream" means we are on this journey together.',
              },
              {
                title: "Exceptional Value",
                description:
                  "We provide top-tier development and strategic thinking at a fair price, ensuring a high return on your investment.",
              },
            ].map((reason, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="text-center p-6 rounded-xl bg-gradient-to-br from-gray-50 to-white shadow-lg hover:shadow-xl transition-shadow"
              >
                <h4 className="font-semibold text-gray-900 mb-3">
                  {reason.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Approach;
