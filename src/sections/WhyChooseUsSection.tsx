import { useEffect, useRef } from 'react';
import { whyChooseUs } from '../data/mathData';
import { Check } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function WhyChooseUsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Stagger animation for cards
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const cards = section.querySelectorAll('.why-card');

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });

    tl.from(cards, {
      y: 40,
      autoAlpha: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: 'power2.out',
    });

    return () => { tl.kill(); };
  }, []);

  // Academic Learning Void canvas effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let time = 0;
    const particles: { x: number; y: number; vx: number; vy: number; size: number; alpha: number }[] = [];
    const floatingTexts: { x: number; y: number; text: string; vx: number; vy: number; life: number; size: number; color: string }[] = [];

    const seedTexts = [...'∫∑∏√∂∞≈≠≤≥×÷+-=0123456789ABCDEFxyzθ'];

    const resize = () => {
      const container = canvas.parentElement;
      if (!container) return;
      canvas.width = container.clientWidth;
      canvas.height = container.clientHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Init particles
    for (let i = 0; i < 40; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        alpha: Math.random() * 0.5 + 0.2,
      });
    }

    const spawnFloatingText = () => {
      const cx = canvas.width / 2;
      const cy = canvas.height / 2;
      floatingTexts.push({
        x: cx + (Math.random() - 0.5) * (canvas.width * 0.4),
        y: cy + (Math.random() - 0.5) * (canvas.height * 0.4),
        text: seedTexts[Math.floor(Math.random() * seedTexts.length)],
        vx: (Math.random() - 0.5) * 0.5,
        vy: -Math.random() * 0.5 - 0.2,
        life: 1.0,
        size: Math.random() * 14 + 12,
        color: Math.random() > 0.5 ? '#082777' : '#0aad93',
      });
    };

    const loop = () => {
      animId = requestAnimationFrame(loop);
      time++;
      const w = canvas.width;
      const h = canvas.height;
      const cx = w / 2;
      const cy = h / 2;

      ctx.fillStyle = '#f4f6f8';
      ctx.fillRect(0, 0, w, h);

      // Energy Core
      const energyRadius = Math.min(w, h) * 0.15 * (1 + Math.sin(time * 0.02) * 0.1);
      const gradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, energyRadius);
      gradient.addColorStop(0, 'rgba(10, 173, 147, 0.15)');
      gradient.addColorStop(0.5, 'rgba(8, 39, 119, 0.08)');
      gradient.addColorStop(1, 'rgba(8, 39, 119, 0)');
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(cx, cy, energyRadius, 0, Math.PI * 2);
      ctx.fill();

      // Particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(8, 39, 119, ${p.alpha})`;
        ctx.fill();
      });

      // Floating texts
      if (time % 30 === 0) spawnFloatingText();
      for (let i = floatingTexts.length - 1; i >= 0; i--) {
        const ft = floatingTexts[i];
        ft.x += ft.vx;
        ft.y += ft.vy;
        ft.life -= 0.005;
        if (ft.life <= 0) {
          floatingTexts.splice(i, 1);
          continue;
        }
        ctx.font = `${ft.size}px 'Space Mono', monospace`;
        ctx.fillStyle = ft.color;
        ctx.globalAlpha = ft.life;
        ctx.fillText(ft.text, ft.x, ft.y);
        ctx.globalAlpha = 1;
      }
    };

    loop();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <section ref={sectionRef} className="section-padding bg-[#f4f6f8] relative overflow-hidden">
      {/* Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute top-0 right-0 w-full lg:w-[45%] h-full opacity-60"
      />

      <div className="container-main relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Left Content */}
          <div className="lg:w-[55%]">
            <span className="text-xs font-semibold text-[#0aad93] uppercase tracking-widest mb-3 block">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-[#082777] mb-4">
              The Best Way to Learn Mathematics
            </h2>
            <p className="text-[#464646] text-base mb-10 max-w-lg">
              We combine expert-created content with an intuitive learning experience to help you achieve your academic goals.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {whyChooseUs.map((item, i) => (
                <div
                  key={i}
                  className="why-card bg-white rounded-xl p-5 border border-[#ebebeb] card-shadow transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#d9f6f2] flex items-center justify-center mb-3">
                    <Check size={16} className="text-[#0aad93]" />
                  </div>
                  <h4 className="font-semibold text-sm text-[#242424] mb-1.5">
                    {item.title}
                  </h4>
                  <p className="text-[#6c6c6c] text-xs leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Stats */}
          <div className="lg:w-[45%] flex items-center">
            <div className="grid grid-cols-2 gap-5 w-full">
              {[
                { value: '150+', label: 'Math Chapters' },
                { value: '10', label: 'CBSE Classes' },
                { value: '5000+', label: 'Solved Questions' },
                { value: '100%', label: 'NCERT Aligned' },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="why-card bg-white rounded-2xl p-6 md:p-8 text-center border border-[#ebebeb] card-shadow"
                >
                  <span className="text-3xl md:text-4xl font-bold font-heading text-[#082777] block mb-2">
                    {stat.value}
                  </span>
                  <span className="text-sm text-[#6c6c6c]">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
