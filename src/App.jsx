import React, { useRef } from 'react';
import Hero from './components/Hero';
import StoryScroller from './components/StoryScroller';
import ProjectsShowcase from './components/ProjectsShowcase';
import CTAManifesto from './components/CTAManifesto';

export default function App() {
  const storyRef = useRef(null);

  const handleExplore = () => {
    const el = document.getElementById('story');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen w-full bg-black text-white antialiased">
      <a
        href="#cta"
        className="fixed right-4 top-4 z-50 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs text-white/80 backdrop-blur hover:bg-white/20"
      >
        DAPROMEX — Consultoría I+D
      </a>

      <Hero onExploreClick={handleExplore} />

      <div id="story" ref={storyRef}>
        <StoryScroller />
      </div>

      <ProjectsShowcase />
      <CTAManifesto />

      <footer className="border-t border-white/10 bg-black/80 py-10 text-center text-xs text-white/60">
        © {new Date().getFullYear()} DAPROMEX — Redefinimos industrias.
      </footer>
    </div>
  );
}
