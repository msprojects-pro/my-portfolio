import { motion } from 'motion/react';
import { FiMonitor, FiSmartphone, FiPenTool } from 'react-icons/fi';

export default function WhatIDo() {
  return (
    <section id="what-i-do" className="py-24 relative overflow-hidden bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            What I <span className="text-[#4adeff] text-glow">Do</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#4adeff] to-transparent mx-auto rounded-full mb-8" />
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            I help businesses build a professional online presence and attract more customers by giving website design services. I create meaningful and delightful digital products that create an equilibrium between user needs and business goals.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: 'UI/UX Design',
              desc: 'Crafting intuitive and engaging user experiences that delight your customers.',
              icon: <FiPenTool size={32} />,
            },
            {
              title: 'Web Development',
              desc: 'Building fast, responsive, and scalable websites using modern technologies.',
              icon: <FiMonitor size={32} />,
            },
            {
              title: 'Mobile First',
              desc: 'Ensuring your digital presence looks flawless on every device and screen size.',
              icon: <FiSmartphone size={32} />,
            },
          ].map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="p-8 rounded-2xl bg-[#111111] border border-white/5 hover:border-[#4adeff]/30 transition-all group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#4adeff] to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-14 h-14 rounded-xl bg-[#4adeff]/10 text-[#4adeff] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform box-glow-hover">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
