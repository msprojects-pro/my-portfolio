import { motion } from 'motion/react';

export default function MyWork() {
  const projects = [
    {
      name: 'Iron & Oak Fitness',
      url: 'https://iron-oak.netlify.app/',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop',
      heroContent: (
        <div className="text-center flex flex-col items-center">
          <p className="text-[8px] md:text-[10px] text-[#f97316] tracking-[0.2em] font-bold uppercase mb-2">Boutique Strength & Conditioning</p>
          <h4 className="text-xl md:text-2xl font-bold text-white leading-tight mb-2">Forge Your Strength.<br/>Build Your Legacy.</h4>
          <p className="text-[8px] md:text-[10px] text-gray-300 max-w-[250px] leading-relaxed mb-3">Denver's premier fitness destination where strength meets community. Expert coaching, world-class equipment, and a supportive environment.</p>
        </div>
      )
    },
    {
      name: 'Bite & Bliss Restaurant',
      url: 'https://bites-bliss.netlify.app/',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1470&auto=format&fit=crop',
      heroContent: (
        <div className="text-center flex flex-col items-center">
          <p className="text-[8px] md:text-[10px] text-[#eab308] tracking-[0.2em] uppercase mb-2">Experience Modern Mediterranean</p>
          <h4 className="text-2xl md:text-3xl font-serif text-white mb-2">Bite <span className="text-[#eab308] italic">&</span> Bliss</h4>
          <p className="text-[8px] md:text-[10px] text-gray-300 max-w-[250px] leading-relaxed mb-3">A culinary journey through the sun-drenched coasts of the Mediterranean, reimagined with modern elegance.</p>
        </div>
      )
    },
    {
      name: 'Lumiere Salon & Spa',
      url: 'https://lumierespa.netlify.app/',
      image: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=1470&auto=format&fit=crop',
      heroContent: (
        <div className="text-center flex flex-col items-center">
          <p className="text-[8px] md:text-[10px] text-gray-300 tracking-[0.2em] uppercase mb-2">Established 2017</p>
          <h4 className="text-2xl md:text-3xl font-serif text-white mb-2">Where Light Meets <span className="italic text-gray-300">Beauty</span></h4>
          <p className="text-[8px] md:text-[10px] text-gray-300 tracking-widest uppercase mb-3">Austin's Premier Luxury Salon & Spa</p>
        </div>
      )
    },
    {
      name: 'Brew & Bloom Cafe',
      url: 'https://brewbloomcafe.netlify.app',
      image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1447&auto=format&fit=crop',
      heroContent: (
        <div className="text-center flex flex-col items-center">
          <p className="text-[8px] md:text-[10px] text-gray-300 tracking-[0.2em] uppercase mb-2">Seattle's Finest Roastery</p>
          <h4 className="text-2xl md:text-3xl font-serif text-white mb-2">Slow Roasted.<br/><span className="italic text-[#d97706]">Fast Poured.</span></h4>
          <p className="text-[8px] md:text-[10px] text-gray-300 max-w-[250px] leading-relaxed mb-3">Experience the art of the perfect brew in an atmosphere designed for connection and clarity.</p>
        </div>
      )
    },
    {
      name: 'Copperline Plumbing',
      url: 'https://copperline-plumbing.pages.dev',
      image: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?q=80&w=1470&auto=format&fit=crop',
      heroContent: (
        <div className="text-center flex flex-col items-center">
          <h4 className="text-2xl md:text-3xl font-bold text-white mb-2 tracking-tight">Copperline</h4>
          <p className="text-[10px] md:text-xs text-[#06b6d4] tracking-widest uppercase font-medium">Professional Plumbing</p>
        </div>
      )
    },
    {
      name: 'Copperline Plumbing V2',
      url: 'https://copperlineplumbing.pages.dev',
      image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=1470&auto=format&fit=crop',
      heroContent: (
        <div className="text-center flex flex-col items-center">
          <div className="flex items-center gap-1 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#f97316]"></span>
            <p className="text-[8px] md:text-[10px] text-[#f97316] font-bold tracking-wider uppercase">24/7 Emergency Service</p>
          </div>
          <h4 className="text-xl md:text-2xl font-bold text-white leading-tight mb-2">Premium Plumbing<br/>Solutions for <span className="text-[#06b6d4]">Phoenix</span></h4>
          <p className="text-[8px] md:text-[10px] text-gray-300 max-w-[250px] leading-relaxed mb-3">Flowing Right. Day or Night. Expert residential and commercial services with a commitment to quality.</p>
        </div>
      )
    },
    {
      name: 'FireStone Pizza',
      url: 'https://firestone-pizza.pages.dev/',
      image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1470&auto=format&fit=crop',
      heroContent: (
        <div className="text-center flex flex-col items-center">
          <h4 className="text-3xl md:text-4xl font-display font-black text-white uppercase tracking-tighter mb-2 transform -skew-x-6">Fire<span className="text-red-500">Stone</span></h4>
          <p className="text-[10px] md:text-xs text-white font-medium tracking-widest uppercase bg-red-600 px-2 py-0.5">Wood-Fired Perfection</p>
        </div>
      )
    },
    {
      name: 'Truespark Electric',
      url: 'https://truespark-electric.pages.dev/',
      image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1469&auto=format&fit=crop',
      heroContent: (
        <div className="text-center flex flex-col items-center">
          <div className="w-8 h-8 rounded border-2 border-yellow-400 flex items-center justify-center mb-2">
            <div className="w-4 h-4 bg-yellow-400" style={{ clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)' }}></div>
          </div>
          <h4 className="text-xl md:text-2xl font-bold text-white uppercase tracking-wider mb-1">Truespark</h4>
          <p className="text-[8px] md:text-[10px] text-yellow-400 tracking-[0.2em] uppercase">Powering Your World</p>
        </div>
      )
    },
    {
      name: 'Truespark Electric V2',
      url: 'https://truespark-electrics.pages.dev/',
      image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop',
      heroContent: (
        <div className="text-center flex flex-col items-center w-full">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-6 h-6 bg-[#00d4ff] rounded-md flex items-center justify-center shadow-[0_0_10px_rgba(0,212,255,0.3)]">
              <svg className="w-3.5 h-3.5 text-[#0b1120]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
            </div>
            <div className="flex flex-col items-start">
              <span className="text-sm font-bold text-white leading-none tracking-wide">TrueSpark</span>
              <span className="text-[6px] font-bold text-[#00d4ff] tracking-[0.2em] leading-none mt-0.5">ELECTRIC</span>
            </div>
          </div>
          <h4 className="text-xl md:text-2xl font-bold text-white mb-2 leading-tight">
            Power You Can <span className="text-[#00d4ff]">Trust.</span><br/>
            Service You Can <span className="text-[#ffb400]">Feel.</span>
          </h4>
          <p className="text-[8px] md:text-[10px] text-gray-300 max-w-[220px] leading-relaxed">Premium electrical solutions for residential, commercial, and industrial clients.</p>
        </div>
      )
    },
  ];

  return (
    <section id="my-work" className="py-24 relative overflow-hidden bg-[#0a0a0a]">
      {/* Background Glows matching the screenshot */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Subtle stars/dots background */}
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at center, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#4adeff] font-medium tracking-widest uppercase mb-4 text-sm text-glow">
            Pixel Perfect. Performance Driven.
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            My <span className="text-[#4adeff] text-glow">Work</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#4adeff] to-transparent mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative rounded-2xl overflow-hidden bg-[#050505] border border-white/10 hover:border-[#a855f7]/50 transition-all duration-500 h-[340px] flex flex-col shadow-lg shadow-purple-900/5 hover:shadow-purple-500/20"
            >
              {/* Background Image & Overlay */}
              <div className="absolute inset-0 z-0">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover opacity-40 group-hover:opacity-30 group-hover:scale-105 transition-all duration-700 ease-in-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-[#050505]/20" />
              </div>
              
              {/* Simulated Hero Content */}
              <div className="relative z-10 flex-grow flex flex-col items-center justify-center p-6 opacity-90 group-hover:opacity-100 transition-opacity duration-500">
                {project.heroContent}
              </div>
              
              {/* Bottom Info */}
              <div className="relative z-20 p-6 pt-0 mt-auto">
                <h3 className="text-2xl font-bold text-white mb-1 drop-shadow-md group-hover:text-[#a855f7] transition-colors">
                  {project.name}
                </h3>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-[#a855f7] hover:text-[#c084fc] underline underline-offset-4 decoration-2 font-medium transition-colors"
                >
                  Visit Site
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
