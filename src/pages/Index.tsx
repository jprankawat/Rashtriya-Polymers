import React from 'react';
import { motion } from 'framer-motion';
import CategoryCard from '../components/CategoryCard';
import { MessageSquare, Star, Users, Wrench } from 'lucide-react';

const categories = [
  {
    id: 1,
    title: 'CPVC Pipe and Fittings',
    image: '/images/cpvc.jpg',
    description: 'High-quality CPVC pipes and fittings for hot and cold water systems'
  },
  {
    id: 2,
    title: 'UPVC Pipe and Fittings',
    image: '/images/upvc.jpg',
    description: 'Durable UPVC solutions for various plumbing applications'
  },
  {
    id: 3,
    title: 'PVC Pipe and Fittings',
    image: '/images/pvc.jpg',
    description: 'Versatile PVC products for drainage and water supply'
  },
  {
    id: 4,
    title: 'Conduit Pipe and Fittings',
    image: '/images/conduit.jpg',
    description: 'Electrical conduit pipes and accessories for wire protection'
  },
  {
    id: 5,
    title: 'Extra Items',
    image: '/images/extra.jpg',
    description: 'Additional plumbing supplies and accessories'
  }
];

const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "Construction Manager",
    content: "The quality of CPVC pipes is outstanding. Perfect for our high-rise projects.",
    rating: 5
  },
  {
    id: 2,
    name: "Amit Patel",
    role: "Plumbing Contractor",
    content: "Best supplier for all plumbing solutions. Their service is prompt and reliable.",
    rating: 5
  },
  {
    id: 3,
    name: "Priya Singh",
    role: "Property Developer",
    content: "Great range of products and excellent technical support when needed.",
    rating: 5
  }
];

const services = [
  {
    id: 1,
    title: "Expert Consultation",
    description: "Get expert advice on product selection and technical specifications",
    icon: <MessageSquare className="h-8 w-8 text-blue-500" />
  },
  {
    id: 2,
    title: "Quality Assurance",
    description: "All products undergo rigorous quality testing and certification",
    icon: <Star className="h-8 w-8 text-blue-500" />
  },
  {
    id: 3,
    title: "Technical Support",
    description: "24/7 technical support for installation and maintenance",
    icon: <Wrench className="h-8 w-8 text-blue-500" />
  },
  {
    id: 4,
    title: "Customer Service",
    description: "Dedicated team for quick response to your queries",
    icon: <Users className="h-8 w-8 text-blue-500" />
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl font-bold mb-6">Quality Pipes & Fittings</h1>
            <p className="text-xl mb-8">Your trusted partner for premium plumbing solutions</p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors">
              Explore Products
            </button>
          </motion.div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Product Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              title={category.title}
              image={category.image}
              description={category.description}
            />
          ))}
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-6">About Us</h2>
            <p className="text-gray-600 mb-8">
              With over 20 years of experience in the plumbing industry, we've established ourselves
              as a leading supplier of high-quality pipes and fittings. Our commitment to excellence
              and customer satisfaction has made us the preferred choice for contractors, builders,
              and plumbing professionals.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <h3 className="text-3xl font-bold text-blue-600">20+</h3>
                <p className="text-gray-600">Years Experience</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-blue-600">5000+</h3>
                <p className="text-gray-600">Happy Clients</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-blue-600">1000+</h3>
                <p className="text-gray-600">Products</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-blue-600">24/7</h3>
                <p className="text-gray-600">Support</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
            >
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, index) => (
                    <Star key={index} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">{testimonial.content}</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-6">Quality Assurance</h2>
            <p className="text-gray-600 mb-4">
              We maintain the highest standards of quality through rigorous testing and quality control processes.
              Our products are certified by international quality standards and undergo multiple inspection stages.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <Star className="h-5 w-5 text-blue-500" />
                <span>ISO 9001:2015 Certified</span>
              </li>
              <li className="flex items-center gap-2">
                <Star className="h-5 w-5 text-blue-500" />
                <span>International Quality Standards</span>
              </li>
              <li className="flex items-center gap-2">
                <Star className="h-5 w-5 text-blue-500" />
                <span>100% Testing Before Dispatch</span>
              </li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative h-[400px] rounded-lg overflow-hidden"
          >
            <img
              src="/images/quality.jpg"
              alt="Quality Testing"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
