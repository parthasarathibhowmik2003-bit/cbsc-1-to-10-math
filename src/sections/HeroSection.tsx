import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Search, BookOpen, Zap } from 'lucide-react';
import * as THREE from 'three';

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sceneRef = useRef<{
    renderer: THREE.WebGLRenderer;
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    meshes: THREE.Mesh[];
    velocities: THREE.Vector3[];
    rotations: THREE.Vector3[];
    animId: number;
  } | null>(null);

  // Initialize 3D math playground
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 100);
    camera.position.z = 8;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);
    const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
    dirLight.position.set(5, 5, 5);
    scene.add(dirLight);
    const tealLight = new THREE.PointLight(0x0aad93, 0.5, 20);
    tealLight.position.set(-3, 2, 3);
    scene.add(tealLight);

    // Create math symbols as floating 3D shapes
    const symbols: { geometry: THREE.BufferGeometry; color: string }[] = [
      { geometry: new THREE.TorusGeometry(0.5, 0.15, 16, 32), color: '#082777' },
      { geometry: new THREE.IcosahedronGeometry(0.5, 0), color: '#0aad93' },
      { geometry: new THREE.OctahedronGeometry(0.5, 0), color: '#0056b3' },
      { geometry: new THREE.SphereGeometry(0.4, 32, 32), color: '#082777' },
      { geometry: new THREE.BoxGeometry(0.6, 0.6, 0.6), color: '#0aad93' },
      { geometry: new THREE.ConeGeometry(0.4, 0.8, 16), color: '#0056b3' },
      { geometry: new THREE.DodecahedronGeometry(0.45, 0), color: '#082777' },
      { geometry: new THREE.TetrahedronGeometry(0.5, 0), color: '#0aad93' },
    ];

    const meshes: THREE.Mesh[] = [];
    const velocities: THREE.Vector3[] = [];
    const rotations: THREE.Vector3[] = [];

    symbols.forEach((sym) => {
      const material = new THREE.MeshStandardMaterial({
        color: sym.color,
        roughness: 0.3,
        metalness: 0.2,
        transparent: true,
        opacity: 0.85,
      });
      const mesh = new THREE.Mesh(sym.geometry, material);
      mesh.position.set(
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 5,
        (Math.random() - 0.5) * 4
      );
      mesh.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0);
      scene.add(mesh);
      meshes.push(mesh);
      velocities.push(new THREE.Vector3(
        (Math.random() - 0.5) * 0.008,
        (Math.random() - 0.5) * 0.006,
        (Math.random() - 0.5) * 0.004
      ));
      rotations.push(new THREE.Vector3(
        (Math.random() - 0.5) * 0.008,
        (Math.random() - 0.5) * 0.01,
        (Math.random() - 0.5) * 0.006
      ));
    });

    // Mouse interaction
    const mouse = { x: 0, y: 0 };
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Resize handler
    const resize = () => {
      const container = canvas.parentElement;
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    resize();
    window.addEventListener('resize', resize);

    // Animation loop
    let animId: number = 0;
    const animate = () => {
      animId = requestAnimationFrame(animate);

      meshes.forEach((mesh, i) => {
        mesh.position.add(velocities[i]);
        mesh.rotation.x += rotations[i].x;
        mesh.rotation.y += rotations[i].y;
        mesh.rotation.z += rotations[i].z;

        // Bounce off invisible walls
        if (Math.abs(mesh.position.x) > 5) velocities[i].x *= -1;
        if (Math.abs(mesh.position.y) > 3.5) velocities[i].y *= -1;
        if (Math.abs(mesh.position.z) > 3) velocities[i].z *= -1;

        // Subtle mouse influence
        mesh.position.x += mouse.x * 0.002;
        mesh.position.y += mouse.y * 0.002;
      });

      // Gentle camera movement
      camera.position.x += (mouse.x * 0.5 - camera.position.x) * 0.02;
      camera.position.y += (mouse.y * 0.3 - camera.position.y) * 0.02;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };
    animate();

    sceneRef.current = { renderer, scene, camera, meshes, velocities, rotations, animId };

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', resize);
      meshes.forEach((m) => {
        m.geometry.dispose();
        (m.material as THREE.Material).dispose();
      });
      renderer.dispose();
    };
  }, []);

  return (
    <section className="relative min-h-screen bg-[#f4f6f8] overflow-hidden pt-16 md:pt-20">
      <div className="container-main flex flex-col lg:flex-row items-center min-h-[calc(100vh-5rem)]">
        {/* Left Content */}
        <div className="w-full lg:w-[50%] py-12 lg:py-0 lg:pr-8 z-10">
          <div className="inline-flex items-center gap-2 bg-[#d9f6f2] rounded-full px-4 py-1.5 mb-6">
            <Zap size={14} className="text-[#0aad93]" />
            <span className="text-xs font-semibold text-[#0aad93] uppercase tracking-wider">
              Free CBSE Math Solutions
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-bold font-heading text-[#082777] leading-[1.1] mb-5">
            Complete CBSE
            <br />
            <span className="text-[#0aad93]">Mathematics</span>
            <br />
            Solutions
          </h1>

          <p className="text-[#464646] text-base md:text-lg leading-relaxed mb-8 max-w-lg">
            Master every chapter from Class 1 to Class 10 with step-by-step solutions, practice questions, formulas, and exam preparation materials — all in one place.
          </p>

          {/* Search Bar */}
          <div className="relative max-w-md mb-6">
            <div className="flex items-center bg-white rounded-2xl shadow-lg border border-[#ebebeb] overflow-hidden">
              <Search size={18} className="text-[#b4b4b4] ml-4 shrink-0" />
              <input
                type="text"
                placeholder="Search chapters, topics, classes..."
                className="flex-1 px-3 py-3.5 text-sm outline-none bg-transparent placeholder:text-[#b4b4b4]"
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    const q = (e.target as HTMLInputElement).value;
                    if (q.trim()) window.location.href = `/search?q=${encodeURIComponent(q.trim())}`;
                  }
                }}
              />
              <button
                className="bg-[#082777] text-white px-5 py-3 text-sm font-medium hover:bg-[#0aad93] transition-colors"
                onClick={() => {
                  const input = document.querySelector('input') as HTMLInputElement;
                  if (input?.value.trim()) window.location.href = `/search?q=${encodeURIComponent(input.value.trim())}`;
                }}
              >
                Search
              </button>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {['Algebra', 'Geometry', 'Trigonometry', 'Calculus', 'Mensuration'].map((tag) => (
              <Link
                key={tag}
                to={`/search?q=${encodeURIComponent(tag)}`}
                className="px-4 py-1.5 rounded-full bg-white border border-[#ebebeb] text-xs font-medium text-[#464646] hover:border-[#082777] hover:text-[#082777] transition-all"
              >
                {tag}
              </Link>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3">
            <Link to="/classes" className="btn-primary gap-2">
              <BookOpen size={16} />
              Explore Classes
            </Link>
            <Link to="/class/10" className="btn-secondary">
              Start Learning
            </Link>
          </div>
        </div>

        {/* Right Content - 3D Canvas */}
        <div className="w-full lg:w-[50%] h-[400px] lg:h-[600px] relative">
          <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full"
          />
          <div className="absolute bottom-4 right-4 text-xs text-[#b4b4b4] font-medium hidden lg:block">
            Interact with the concepts. Move your cursor.
          </div>
        </div>
      </div>

      {/* Subtle bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#f4f6f8] to-transparent pointer-events-none" />
    </section>
  );
}
