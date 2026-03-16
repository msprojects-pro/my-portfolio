import { motion } from 'motion/react';
import { FiArrowRight } from 'react-icons/fi';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#4adeff]/20 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-[1.1fr_0.9fr] lg:grid-cols-[1.2fr_0.8fr] xl:grid-cols-[1.3fr_0.7fr] gap-12 lg:gap-16 items-center w-full">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex flex-col gap-6 z-10 order-2 md:order-1"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 lg:px-5 lg:py-2.5 rounded-full bg-white/5 border border-white/10 w-fit"
          >
            <span className="w-2 h-2 lg:w-2.5 lg:h-2.5 rounded-full bg-[#4adeff] box-glow animate-pulse" />
            <span className="text-sm lg:text-base font-medium text-gray-300">Hello! I Am Sufyan</span>
          </motion.div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-[5rem] 2xl:text-[5.5rem] font-display font-bold leading-[1.1] tracking-tight text-white">
            A Website Designer <br className="hidden md:block" />
            <span className="md:whitespace-nowrap">
              who <br className="md:hidden" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4adeff] to-purple-400 text-glow">
                Judges a book
              </span>
            </span>{' '}
            <br />
            by its cover...
          </h1>

          <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-400 max-w-2xl leading-relaxed">
            Because if the cover does not impress you, what else can?
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-4 lg:mt-6">
            <motion.a
              href="#my-work"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 md:px-8 md:py-4 lg:px-10 lg:py-5 lg:text-lg rounded-full bg-[#4adeff] text-[#0a0a0a] font-semibold flex items-center gap-2 box-glow-hover transition-all"
            >
              View My Work <FiArrowRight />
            </motion.a>
            <motion.a
              href="#reach-me"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 md:px-8 md:py-4 lg:px-10 lg:py-5 lg:text-lg rounded-full bg-white/5 border border-white/10 text-white font-semibold hover:bg-white/10 transition-all"
            >
              Contact Me
            </motion.a>
          </div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative flex flex-col items-center justify-center z-10 w-full md:ml-auto md:w-fit order-1 md:order-2 mb-8 md:mb-0"
        >
          {/* Avatar Container */}
          <div className="relative w-64 h-64 md:w-[280px] md:h-[280px] lg:w-[340px] lg:h-[340px] rounded-full p-[2px] bg-gradient-to-br from-[#4adeff]/40 via-[#0a0a0a] to-purple-600/40 shadow-[0_0_50px_rgba(74,222,255,0.1)]">
            <div className="w-full h-full rounded-full overflow-hidden bg-[#0a0a0a]">
              <img
                src="https://i.postimg.cc/DFxkHK00/profile-pic-(1).png"
                alt="Sufyan"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
