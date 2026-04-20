import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/mathData';
import { ArrowRight, Clock, Calendar } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function BlogSection() {
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
      stagger: 0.15,
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
              From Our Blog
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-[#082777]">
              Study Tips & Guides
            </h2>
          </div>
          <Link
            to="/blog"
            className="mt-4 md:mt-0 inline-flex items-center gap-2 text-sm font-medium text-[#082777] hover:text-[#0aad93] transition-colors link-underline"
          >
            View All Articles <ArrowRight size={16} />
          </Link>
        </div>

        {/* Grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="group bg-white rounded-2xl border border-[#ebebeb] overflow-hidden card-shadow transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 mb-3">
                  <span className="inline-flex items-center gap-1.5 text-xs text-[#6c6c6c]">
                    <Calendar size={12} /> {post.date}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs text-[#6c6c6c]">
                    <Clock size={12} /> {post.readTime}
                  </span>
                </div>
                <h3 className="font-semibold text-base text-[#242424] mb-2 group-hover:text-[#082777] transition-colors line-clamp-2 leading-snug">
                  {post.title}
                </h3>
                <p className="text-[#6c6c6c] text-sm leading-relaxed line-clamp-2 mb-4">
                  {post.excerpt}
                </p>
                <Link
                  to="/blog"
                  className="inline-flex items-center gap-1 text-sm font-medium text-[#082777] group-hover:text-[#0aad93] transition-colors"
                >
                  Read More <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
