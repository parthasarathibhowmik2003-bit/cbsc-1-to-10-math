import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { classesData } from '../data/mathData';
import { BookOpen, FileText, Hash, ChevronRight, GraduationCap } from 'lucide-react';

export default function ClassPage() {
  const { classId } = useParams<{ classId: string }>();
  const cls = classesData.find((c) => c.id === Number(classId));

  if (!cls) {
    return (
      <div className="min-h-screen bg-[#f4f6f8]">
        <Navbar />
        <div className="pt-28 pb-20 container-main text-center">
          <h1 className="text-2xl font-bold text-[#082777]">Class not found</h1>
          <Link to="/classes" className="btn-primary mt-4 inline-flex">Browse All Classes</Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f4f6f8]">
      <Navbar />

      {/* Class Header */}
      <div className={`pt-28 pb-14 bg-gradient-to-br ${cls.bgGradient} border-b border-[#ebebeb]`}>
        <div className="container-main">
          <nav className="flex items-center gap-2 text-sm text-[#6c6c6c] mb-4">
            <Link to="/" className="hover:text-[#082777]">Home</Link>
            <ChevronRight size={14} />
            <Link to="/classes" className="hover:text-[#082777]">Classes</Link>
            <ChevronRight size={14} />
            <span className="text-[#082777] font-medium">{cls.name}</span>
          </nav>

          <div className="flex items-start gap-4 md:gap-6">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-[#082777] flex items-center justify-center shrink-0">
              <span className="text-white font-bold text-2xl md:text-3xl font-heading">{cls.id}</span>
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold font-heading text-[#082777] mb-2">
                {cls.name} Mathematics
              </h1>
              <p className="text-[#464646] text-base max-w-2xl mb-4">
                {cls.description}
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-1.5 bg-white/80 rounded-full px-3 py-1 text-xs font-medium text-[#082777]">
                  <BookOpen size={12} /> {cls.chapterCount} Chapters
                </span>
                <span className="inline-flex items-center gap-1.5 bg-white/80 rounded-full px-3 py-1 text-xs font-medium text-[#082777]">
                  <FileText size={12} /> NCERT Aligned
                </span>
                <span className="inline-flex items-center gap-1.5 bg-white/80 rounded-full px-3 py-1 text-xs font-medium text-[#082777]">
                  <GraduationCap size={12} /> CBSE Syllabus
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Chapter List */}
      <div className="py-12 md:py-16">
        <div className="container-main">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold font-heading text-[#082777]">All Chapters</h2>
              <p className="text-sm text-[#6c6c6c] mt-1">
                Click on any chapter to view solutions, formulas, and practice questions
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {cls.chapters.map((chapter, i) => (
              <Link
                key={chapter.id}
                to={`/chapter/${chapter.id}`}
                className="group flex items-start gap-4 bg-white rounded-xl border border-[#ebebeb] p-5 card-shadow hover:border-[#082777] hover:shadow-md transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-[#f4f6f8] flex items-center justify-center shrink-0 group-hover:bg-[#082777] transition-colors">
                  <Hash size={16} className="text-[#6c6c6c] group-hover:text-white transition-colors" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-sm md:text-base text-[#242424] group-hover:text-[#082777] transition-colors truncate">
                      {i + 1}. {chapter.name}
                    </h3>
                    <ChevronRight size={16} className="text-[#b4b4b4] group-hover:text-[#082777] transition-colors shrink-0 ml-2" />
                  </div>
                  <p className="text-xs text-[#6c6c6c] mt-1 line-clamp-1">
                    {chapter.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {chapter.topics.slice(0, 3).map((topic, j) => (
                      <span
                        key={j}
                        className="text-[10px] bg-[#f4f6f8] text-[#6c6c6c] px-2 py-0.5 rounded-full"
                      >
                        {topic}
                      </span>
                    ))}
                    {chapter.topics.length > 3 && (
                      <span className="text-[10px] bg-[#f4f6f8] text-[#6c6c6c] px-2 py-0.5 rounded-full">
                        +{chapter.topics.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
