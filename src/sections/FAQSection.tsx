import { useState, useEffect, useRef } from 'react';
import { faqs } from '../data/mathData';
import { ChevronDown, HelpCircle } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const items = section.querySelectorAll('.faq-item');

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });

    tl.from(items, {
      y: 30,
      autoAlpha: 0,
      duration: 0.5,
      stagger: 0.08,
      ease: 'power2.out',
    });

    return () => { tl.kill(); };
  }, []);

  return (
    <section ref={sectionRef} className="section-padding bg-[#f4f6f8]">
      <div className="container-main max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-xs font-semibold text-[#0aad93] uppercase tracking-widest mb-3 block">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-[#082777] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-[#464646] text-base">
            Have questions? We have answers. If you can&apos;t find what you&apos;re looking for, feel free to contact us.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="faq-item bg-white rounded-xl border border-[#ebebeb] overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left"
              >
                <div className="flex items-center gap-3">
                  <HelpCircle size={18} className="text-[#0aad93] shrink-0" />
                  <span className={`font-medium text-sm md:text-base ${openIndex === i ? 'text-[#082777]' : 'text-[#242424]'}`}>
                    {faq.question}
                  </span>
                </div>
                <ChevronDown
                  size={18}
                  className={`text-[#6c6c6c] shrink-0 transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${openIndex === i ? 'max-h-48' : 'max-h-0'}`}
              >
                <div className="px-6 pb-5 pl-12">
                  <p className="text-sm text-[#464646] leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
