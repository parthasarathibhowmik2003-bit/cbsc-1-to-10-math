import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { classesData } from '../data/mathData';
import { BookOpen, ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ClassesSection() {
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
      stagger: 0.08,
      ease: 'power2.out',
    });

    return () => { tl.kill(); };
  }, []);

  return (
    <section className="section-padding bg-white">
      <div className="container-main">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-xs font-semibold text-[#0aad93] uppercase tracking-widest mb-3 block">
            Browse by Class
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-[#082777] mb-4">
            Select Your Class
          </h2>
          <p className="text-[#464646] text-base max-w-xl mx-auto">
            Access complete chapter-wise solutions for your class. Every chapter includes NCERT solutions, extra questions, formulas, and worksheets.
          </p>
        </div>

        {/* Grid */}
        <div ref={gridRef} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-5">
          {classesData.map((cls) => (
            <Link
              key={cls.id}
              to={`/class/${cls.id}`}
              className="group relative bg-gradient-to-br from-[#f4f6f8] to-white rounded-2xl border border-[#ebebeb] p-6 md:p-8 text-center transition-all duration-300 hover:border-[#082777] hover:shadow-lg hover:-translate-y-1"
            >
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-gradient-to-br from-[#082777] to-[#0056b3] flex items-center justify-center mx-auto mb-4 group-hover:from-[#0aad93] group-hover:to-[#088f7a] transition-all duration-300">
                <span className="text-white font-bold text-xl md:text-2xl font-heading">
                  {cls.id}
                </span>
              </div>
              <h3 className="font-semibold text-sm md:text-base text-[#242424] mb-1 group-hover:text-[#082777] transition-colors">
                Class {cls.id}
              </h3>
              <p className="text-[#6c6c6c] text-xs mb-3 line-clamp-1">
                {cls.chapterCount} Chapters
              </p>
              <span className="inline-flex items-center gap-1 text-xs font-medium text-[#082777] opacity-0 group-hover:opacity-100 transition-opacity">
                Explore <ArrowRight size={12} />
              </span>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-10">
          <Link
            to="/classes"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#082777] hover:text-[#0aad93] transition-colors link-underline"
          >
            <BookOpen size={16} />
            View All Classes
          </Link>
        </div>
      </div>
    </section>
  );
}
