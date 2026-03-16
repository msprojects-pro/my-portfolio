/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Hero from './components/Hero';
import WhatIDo from './components/WhatIDo';
import WhyWebsite from './components/WhyWebsite';
import CostOfInvisible from './components/CostOfInvisible';
import MyWork from './components/MyWork';
import WhyChooseMe from './components/WhyChooseMe';
import ReachMe from './components/ReachMe';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen font-sans text-gray-200 overflow-x-hidden selection:bg-[#4adeff] selection:text-[#0a0a0a]">
      <Header />
      <main>
        <Hero />
        <WhatIDo />
        <WhyWebsite />
        <CostOfInvisible />
        <MyWork />
        <WhyChooseMe />
        <ReachMe />
      </main>
      <Footer />
    </div>
  );
}
