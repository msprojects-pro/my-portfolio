import { motion } from 'motion/react';
import { FiMail, FiGithub, FiFacebook } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

export default function ReachMe() {
  return (
    <section id="reach-me" className="py-24 relative overflow-hidden bg-[#111111]">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=1429&auto=format&fit=crop')] bg-cover bg-center opacity-5 mix-blend-luminosity pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#111111]/80 to-[#111111] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="p-12 md:p-16 rounded-3xl bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/10 box-glow"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Let's <span className="text-[#4adeff] text-glow">Connect</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#4adeff] to-transparent mx-auto rounded-full mb-12" />

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 mb-12">
            <motion.a
              href="mailto:muhammadsufyan.services@gmail.com"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-4 px-8 py-4 rounded-full bg-white/5 border border-white/10 hover:border-[#4adeff]/50 hover:bg-[#4adeff]/10 transition-all group w-full md:w-auto"
            >
              <span className="text-[#4adeff] group-hover:animate-bounce"><FiMail size={24} /></span>
              <span className="text-gray-300 font-medium group-hover:text-white transition-colors">
                muhammadsufyan.services@gmail.com
              </span>
            </motion.a>

            <motion.a
              href="https://wa.me/923101606541"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-4 px-8 py-4 rounded-full bg-white/5 border border-white/10 hover:border-[#25D366]/50 hover:bg-[#25D366]/10 transition-all group w-full md:w-auto"
            >
              <span className="text-[#25D366] group-hover:animate-bounce"><FaWhatsapp size={24} /></span>
              <span className="text-gray-300 font-medium group-hover:text-white transition-colors">
                +92 310 1606 541
              </span>
            </motion.a>
          </div>

          <div className="flex items-center justify-center gap-6">
            <motion.a
              href="https://github.com/msprojects-pro"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-all"
            >
              <FiGithub size={24} />
            </motion.a>
            <motion.a
              href="https://www.facebook.com/sufyanonline"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
              className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#1877F2] hover:border-[#1877F2] transition-all"
            >
              <FiFacebook size={24} />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
