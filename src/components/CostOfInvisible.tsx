import { motion } from 'motion/react';
import { FiEyeOff, FiAlertTriangle, FiDollarSign } from 'react-icons/fi';

export default function CostOfInvisible() {
  return (
    <section className="py-24 relative overflow-hidden bg-[#0a0a0a]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-red-500/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            The Cost of Being <span className="text-red-400 text-glow" style={{ textShadow: '0 0 10px rgba(248, 113, 113, 0.5)' }}>Invisible</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-400 to-transparent mx-auto rounded-full mb-8" />
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Without a website, you're invisible to the vast majority of customers who search online first. You lose credibility to competitors who do have a professional site. You miss out on 24/7 lead generation and a central hub for your business information.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: 'Lost Credibility',
              desc: 'In today\'s digital age, not having a website means you\'re leaving money on the table and letting your competitors win.',
              icon: <FiAlertTriangle size={32} />,
              color: 'text-orange-400',
              bg: 'bg-orange-400/10',
              border: 'border-orange-400/20'
            },
            {
              title: 'Zero Visibility',
              desc: 'If they can\'t find you online, you don\'t exist. A website ensures you show up when customers are actively looking.',
              icon: <FiEyeOff size={32} />,
              color: 'text-red-400',
              bg: 'bg-red-400/10',
              border: 'border-red-400/20'
            },
            {
              title: 'Missed Revenue',
              desc: 'Every day without a website is a day of missed leads, lost sales, and stunted business growth.',
              icon: <FiDollarSign size={32} />,
              color: 'text-yellow-400',
              bg: 'bg-yellow-400/10',
              border: 'border-yellow-400/20'
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className={`p-8 rounded-2xl bg-[#111111] border ${item.border} hover:shadow-lg hover:shadow-${item.color.split('-')[1]}-500/10 transition-all group relative overflow-hidden`}
            >
              <div className={`w-16 h-16 rounded-2xl ${item.bg} ${item.color} flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform`}>
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
