import { motion } from 'motion/react';
import { FiTrendingUp, FiShield, FiGlobe, FiBarChart2 } from 'react-icons/fi';

export default function WhyWebsite() {
  const points = [
    {
      title: '24/7 Sales Tool',
      desc: 'Your website never sleeps. It acts as a relentless salesperson, generating leads and closing deals around the clock.',
      icon: <FiTrendingUp size={24} />,
    },
    {
      title: 'Credibility Booster',
      desc: 'A professional website instantly elevates your brand, building trust and showing customers you mean business.',
      icon: <FiShield size={24} />,
    },
    {
      title: 'Global Reach',
      desc: 'Break geographical barriers. A website allows you to reach a wider audience and expand your market globally.',
      icon: <FiGlobe size={24} />,
    },
    {
      title: 'Valuable Insights',
      desc: 'Understand your customers better with analytics. Track behavior, preferences, and optimize for better results.',
      icon: <FiBarChart2 size={24} />,
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-[#111111]">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#4adeff]/5 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
              A Website is Your <br />
              <span className="text-[#4adeff] text-glow">Digital Storefront</span>
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed mb-8">
              It's not just a dummy showcase; it's a powerful engine for growth. It's the best way to control your brand narrative, build unwavering trust, and provide a seamless experience for your audience. Think of it as an investment in your business's future, not an expense.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {points.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col gap-3"
                >
                  <div className="w-12 h-12 rounded-full bg-[#0a0a0a] border border-white/10 flex items-center justify-center text-[#4adeff] box-glow">
                    {point.icon}
                  </div>
                  <h4 className="text-xl font-bold text-white">{point.title}</h4>
                  <p className="text-sm text-gray-400 leading-relaxed">{point.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[600px] rounded-3xl overflow-hidden border border-white/10 box-glow"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent z-10" />
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1415&auto=format&fit=crop"
              alt="Digital Storefront Analytics"
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute bottom-8 left-8 right-8 z-20">
              <div className="p-6 rounded-2xl bg-[#111111]/80 backdrop-blur-md border border-white/10">
                <p className="text-white font-medium text-lg">"Your website is the center of your digital eco-system, like a brick and mortar location, the experience matters once a customer enters, just as much as the perception they have of you before they walk through the door."</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
