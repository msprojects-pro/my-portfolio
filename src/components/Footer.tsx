import { motion } from 'motion/react';
import { FiHeart } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="py-8 bg-[#0a0a0a] border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-gray-500 text-sm"
        >
          &copy; {new Date().getFullYear()} Sufyan. All rights reserved.
        </motion.p>
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-500 text-sm flex items-center gap-2"
        >
          Designed by <span className="text-white font-medium">Sufyan</span> with <span className="text-red-500 animate-pulse"><FiHeart /></span>
        </motion.p>
      </div>
    </footer>
  );
}
