import { useEffect, useRef, useState } from 'react';
import { testimonials } from '../data/mathData';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });

    tl.from(section.querySelector('.testimonial-header'), {
      y: 30,
      autoAlpha: 0,
      duration: 0.6,
      ease: 'power2.out',
    });

    return () => { tl.kill(); };
  }, []);

  const next = () => setActiveIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section ref={sectionRef} className="section-padding bg-white">
      <div className="container-main">
        {/* Header */}
        <div className="testimonial-header text-center mb-12">
          <span className="text-xs font-semibold text-[#0aad93] uppercase tracking-widest mb-3 block">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-[#082777]">
            What Students & Parents Say
          </h2>
        </div>

        {/* Testimonial Slider */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-br from-[#f4f6f8] to-white rounded-3xl border border-[#ebebeb] p-8 md:p-12">
            <Quote size={40} className="text-[#d4e2ff] mb-4" />

            <div className="min-h-[140px] flex items-center">
              <p className="text-lg md:text-xl text-[#242424] leading-relaxed font-medium">
                &ldquo;{testimonials[activeIndex].text}&rdquo;
              </p>
            </div>

            <div className="flex items-center gap-4 mt-8">
              <img
                src={testimonials[activeIndex].avatar}
                alt={testimonials[activeIndex].name}
                className="w-14 h-14 rounded-full object-cover border-2 border-[#d4e2ff]"
              />
              <div>
                <h4 className="font-semibold text-[#242424]">{testimonials[activeIndex].name}</h4>
                <p className="text-sm text-[#6c6c6c]">{testimonials[activeIndex].role}</p>
              </div>
            </div>

            {/* Navigation */}
            <div className="absolute bottom-8 right-8 flex gap-2">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full bg-white border border-[#ebebeb] flex items-center justify-center hover:bg-[#082777] hover:text-white hover:border-[#082777] transition-all"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full bg-white border border-[#ebebeb] flex items-center justify-center hover:bg-[#082777] hover:text-white hover:border-[#082777] transition-all"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  i === activeIndex ? 'bg-[#082777] w-8' : 'bg-[#ebebeb] hover:bg-[#b4b4b4]'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
