"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code, Brain, Rocket, Users } from "lucide-react";
import { useRouter } from "next/navigation";

const Services = () => {
  const router = useRouter();
  const services = [
    {
      icon: Code,
      title: "Custom Software Development",
      url: "/services/custom-software-development",
      description:
        "We build robust, scalable, and secure web and mobile applications tailored to your exact business needs. From enterprise platforms to customer-facing apps, we deliver code you can count on.",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
    },
    {
      icon: Brain,
      title: "AI & Machine Learning Solutions",
      url: "/services/ai-machine-learning",
      description:
        "Go beyond automation. We help you leverage the power of Artificial Intelligence to unlock insights, optimize processes, and create intelligent products that give you a competitive edge.",
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50",
    },
    {
      icon: Rocket,
      title: "Product Prototyping & MVP Development",
      url: "/services/mvp-development",
      description:
        "We specialize in building Minimum Viable Products (MVPs) that allow you to test your market, gather user feedback, and secure investment faster.",
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50",
    },
    {
      icon: Users,
      title: "Technology Consulting",
      url: "/services/technology-consulting",
      description:
        "We act as your trusted advisor, helping you navigate the complex technology landscape, choose the right tech stack, and create a digital strategy that aligns with your goals.",
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-50 to-red-50",
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            From Idea to{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Impact
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our Core Services
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className={` cursor-pointer bg-gradient-to-br ${service.bgGradient} p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow`}
              onClick={() => router.push(service.url)}
            >
              <div
                className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-xl flex items-center justify-center mb-6`}
              >
                <service.icon className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {service.description}
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="cursor-pointer mt-6 w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:shadow-xl transition-shadow"
              >
                <span>Learn more</span>
              </motion.button>{" "}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
