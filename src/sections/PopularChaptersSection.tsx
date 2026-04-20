import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { popularChapters } from '../data/mathData';
import { ArrowRight, Star } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function PopularChaptersSection() {
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
      duration: 0.7,
      stagger: 0.12,
      ease: 'power2.out',
    });

    return () => { tl.kill(); };
  }, []);

  return (
    <section className="section-padding bg-white">
      <div className="container-main">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <span className="text-xs font-semibold text-[#0aad93] uppercase tracking-widest mb-3 block">
              Trending Now
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-[#082777]">
              Popular Chapters
            </h2>
          </div>
          <Link
            to="/classes"
            className="mt-4 md:mt-0 inline-flex items-center gap-2 text-sm font-medium text-[#082777] hover:text-[#0aad93] transition-colors link-underline"
          >
            View All Chapters <ArrowRight size={16} />
          </Link>
        </div>

        {/* Grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularChapters.map((chapter) => (
            <Link
              key={chapter.id}
              to={`/chapter/${chapter.id}`}
              className="group bg-white rounded-2xl border border-[#ebebeb] overflow-hidden card-shadow transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={chapter.image}
                  alt={chapter.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 flex items-center gap-1 bg-white/90 backdrop-blur-sm rounded-full px-2.5 py-1">
                  <Star size={12} className="text-amber-500 fill-amber-500" />
                  <span className="text-xs font-medium text-[#242424]">Popular</span>
                </div>
                <div className="absolute bottom-3 right-3 bg-[#082777] text-white text-xs font-semibold rounded-full px-3 py-1">
                  Class {chapter.classId}
                </div>
              </div>
              <div className="p-5">
                <span className="text-xs text-[#0aad93] font-medium uppercase tracking-wide">
                  {chapter.topic}
                </span>
                <h3 className="font-semibold text-lg text-[#242424] mt-1 mb-2 group-hover:text-[#082777] transition-colors">
                  {chapter.name}
                </h3>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-[#082777]">
                  View Solutions <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
