import { useEffect, useRef } from 'react';
import { features } from '../data/mathData';
import {
  BookOpen, CheckCircle, Pencil, Sigma, FileText, StickyNote, Brain, Clock
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  BookOpen, CheckCircle, Pencil, Sigma, FileText, StickyNote, Brain, Clock
};

export default function FeaturesSection() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;
    const items = gsap.utils.toArray(grid.children) as HTMLElement[];

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: grid,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    });

    tl.from(items, {
      y: 50,
      autoAlpha: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: 'power2.out',
    });

    return () => { tl.kill(); };
  }, []);

  return (
    <section className="section-padding bg-[#f4f6f8]">
      <div className="container-main">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-xs font-semibold text-[#0aad93] uppercase tracking-widest mb-3 block">
            What We Offer
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-[#082777] mb-4">
            Everything You Need to Excel
          </h2>
          <p className="text-[#464646] text-base max-w-2xl mx-auto">
            From chapter-wise solutions to practice worksheets, we provide comprehensive resources to help you master CBSE Mathematics.
          </p>
        </div>

        {/* Grid */}
        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((feature, i) => {
            const Icon = iconMap[feature.icon] || BookOpen;
            return (
              <div
                key={i}
                className="group bg-white rounded-2xl p-6 border border-[#ebebeb] card-shadow transition-all duration-300 hover:border-[#082777] hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="w-12 h-12 rounded-xl bg-[#d4e2ff] flex items-center justify-center mb-4 group-hover:bg-[#082777] transition-colors duration-300">
                  <Icon size={22} className="text-[#082777] group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-semibold text-base text-[#242424] mb-2 group-hover:text-[#082777] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-[#6c6c6c] text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
