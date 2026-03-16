import { motion } from 'motion/react';
import { FiTarget, FiMessageCircle, FiSmartphone, FiLayout } from 'react-icons/fi';

export default function WhyChooseMe() {
  const points = [
    {
      title: 'Tailored Designs',
      desc: 'I don\'t use templates. Every website is custom-built to reflect your unique brand identity and goals.',
      icon: <FiLayout size={28} />,
    },
    {
      title: 'Results-Driven Focus',
      desc: 'My designs are focused on user experience (UX) to guide visitors and convert them into loyal customers.',
      icon: <FiTarget size={28} />,
    },
    {
      title: 'Clear Communication',
      desc: 'I believe in transparent collaboration. You\'ll be involved in every step, from concept to launch.',
      icon: <FiMessageCircle size={28} />,
    },
    {
      title: 'Mobile-First Approach',
      desc: 'Your website will look and perform flawlessly on every device, from desktops to smartphones.',
      icon: <FiSmartphone size={28} />,
    },
  ];

  return (
    <section id="why-choose-me" className="py-24 relative overflow-hidden bg-[#0a0a0a]">
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#4adeff]/10 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Why Work <span className="text-[#4adeff] text-glow">With Me?</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#4adeff] to-transparent mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {points.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="flex items-start gap-6 p-8 rounded-2xl bg-[#111111] border border-white/5 hover:border-[#4adeff]/30 transition-all group box-glow-hover"
            >
              <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-[#4adeff]/10 text-[#4adeff] flex items-center justify-center group-hover:scale-110 transition-transform">
                {point.icon}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#4adeff] transition-colors">{point.title}</h3>
                <p className="text-gray-400 leading-relaxed">{point.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
