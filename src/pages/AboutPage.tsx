
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Clock } from 'lucide-react';

const AboutPage = () => {
  const milestones = [
    { year: "1998", event: "Company Founded" },
    { year: "2005", event: "Expanded to Pan India" },
    { year: "2012", event: "ISO 9001:2015 Certification" },
    { year: "2018", event: "Launched Export Division" },
    { year: "2023", event: "20+ Warehouses Nationwide" }
  ];

  const values = [
    {
      title: "Quality Excellence",
      description: "We maintain the highest standards in our products through rigorous testing and quality control."
    },
    {
      title: "Customer First",
      description: "Our customers' success and satisfaction drive every decision we make."
    },
    {
      title: "Innovation",
      description: "We continuously invest in new technologies and product development."
    },
    {
      title: "Sustainability",
      description: "Committed to environmentally responsible manufacturing practices."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Story</h1>
            <p className="text-lg md:text-xl">
              25 Years of Excellence in Plumbing Solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-4 text-blue-800">Our Mission</h2>
            <p className="text-gray-600">
              To provide high-quality plumbing solutions that exceed industry standards 
              while ensuring customer satisfaction through exceptional service and 
              technical support.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-4 text-blue-800">Our Vision</h2>
            <p className="text-gray-600">
              To be the leading provider of innovative plumbing solutions in India, 
              recognized for our commitment to quality, sustainability, and customer service.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Journey</h2>
          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex mb-8 relative"
              >
                <div className="w-32 flex-shrink-0 text-blue-800 font-bold">
                  {milestone.year}
                </div>
                <div className="flex-grow pl-8 border-l-2 border-blue-500">
                  <div className="bg-white p-4 rounded-lg shadow">
                    {milestone.event}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
            >
              <h3 className="text-xl font-semibold text-blue-800 mb-4">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Leadership Team</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { name: "Rajesh Mehta", role: "CEO", image: "/images/team1.jpg" },
              { name: "Priya Sharma", role: "Technical Director", image: "/images/team2.jpg" },
              { name: "Amit Patel", role: "Operations Head", image: "/images/team3.jpg" }
            ].map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="h-48 bg-gray-200"></div>
                <div className="p-4 text-center">
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
