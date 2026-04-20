import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { classesData } from '../data/mathData';
import { ArrowRight, BookOpen } from 'lucide-react';

const pastelColors = [
  'from-[#d9f6f2] to-[#e8faf7]',
  'from-[#d4e2ff] to-[#e8f0ff]',
  'from-[#fef3c7] to-[#fffbeb]',
  'from-[#fce7f3] to-[#fdf2f8]',
  'from-[#d1fae5] to-[#ecfdf5]',
  'from-[#e0e7ff] to-[#eef2ff]',
  'from-[#fed7aa] to-[#fff7ed]',
  'from-[#c7d2fe] to-[#e0e7ff]',
  'from-[#bbf7d0] to-[#f0fdf4]',
  'from-[#ddd6fe] to-[#f5f3ff]',
];

export default function ClassesPage() {
  return (
    <div className="min-h-screen bg-[#f4f6f8]">
      <Navbar />

      {/* Header */}
      <div className="pt-28 pb-12 bg-white border-b border-[#ebebeb]">
        <div className="container-main">
          <nav className="flex items-center gap-2 text-sm text-[#6c6c6c] mb-4">
            <Link to="/" className="hover:text-[#082777]">Home</Link>
            <span>/</span>
            <span className="text-[#082777] font-medium">Classes</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold font-heading text-[#082777] mb-3">
            Select Your Class
          </h1>
          <p className="text-[#464646] text-base max-w-xl">
            Choose your class to access complete chapter-wise solutions, practice questions, and study materials.
          </p>
        </div>
      </div>

      {/* Class Grid */}
      <div className="section-padding">
        <div className="container-main">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {classesData.map((cls, i) => (
              <Link
                key={cls.id}
                to={`/class/${cls.id}`}
                className={`group relative bg-gradient-to-br ${pastelColors[i]} rounded-2xl border border-[#ebebeb] p-6 md:p-8 text-center aspect-square flex flex-col items-center justify-center transition-all duration-300 hover:border-[#082777] hover:shadow-lg hover:scale-[1.03]`}
              >
                <span className="text-5xl md:text-6xl font-bold font-heading text-[#082777]/20 group-hover:text-[#082777]/40 transition-colors">
                  {cls.id}
                </span>
                <span className="text-sm font-semibold text-[#242424] mt-2">Class {cls.id}</span>
                <span className="text-xs text-[#6c6c6c] mt-1">{cls.chapterCount} Chapters</span>

                <div className="absolute inset-x-0 bottom-4 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="inline-flex items-center gap-1 text-xs font-medium bg-[#082777] text-white px-3 py-1.5 rounded-full">
                    Explore Syllabus <ArrowRight size={12} />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Quick Access - Featured Classes */}
          <div className="mt-16">
            <h2 className="text-xl font-bold font-heading text-[#082777] mb-6">
              Most Visited Classes
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[10, 9, 8].map((classId) => {
                const cls = classesData.find((c) => c.id === classId);
                if (!cls) return null;
                return (
                  <Link
                    key={classId}
                    to={`/class/${classId}`}
                    className="flex items-center gap-4 bg-white rounded-xl border border-[#ebebeb] p-5 card-shadow hover:border-[#082777] hover:shadow-md transition-all group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-[#d4e2ff] flex items-center justify-center shrink-0 group-hover:bg-[#082777] transition-colors">
                      <BookOpen size={20} className="text-[#082777] group-hover:text-white transition-colors" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-sm text-[#242424] group-hover:text-[#082777] transition-colors">
                        {cls.name} Mathematics
                      </h3>
                      <p className="text-xs text-[#6c6c6c] mt-0.5">
                        {cls.chapterCount} chapters with full solutions
                      </p>
                    </div>
                    <ArrowRight size={16} className="text-[#b4b4b4] group-hover:text-[#082777] transition-colors shrink-0" />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
