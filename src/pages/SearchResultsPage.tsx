import { useSearchParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { classesData, popularChapters } from '../data/mathData';
import { Search, BookOpen, ArrowRight, Hash, GraduationCap } from 'lucide-react';

export default function SearchResultsPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q')?.toLowerCase() || '';

  // Search chapters
  const chapterResults = classesData.flatMap((cls) =>
    cls.chapters
      .filter(
        (ch) =>
          ch.name.toLowerCase().includes(query) ||
          ch.description.toLowerCase().includes(query) ||
          ch.topics.some((t) => t.toLowerCase().includes(query))
      )
      .map((ch) => ({ ...ch, className: cls.name, classId: cls.id }))
  );

  // Search classes
  const classResults = classesData.filter(
    (cls) =>
      cls.name.toLowerCase().includes(query) ||
      cls.description.toLowerCase().includes(query)
  );

  // Search popular chapters
  const popularResults = popularChapters.filter(
    (ch) =>
      ch.name.toLowerCase().includes(query) ||
      ch.topic.toLowerCase().includes(query)
  );

  const allResults = [...chapterResults, ...popularResults];
  const totalResults = allResults.length + classResults.length;

  return (
    <div className="min-h-screen bg-[#f4f6f8]">
      <Navbar />

      {/* Header */}
      <div className="pt-28 pb-10 bg-white border-b border-[#ebebeb]">
        <div className="container-main">
          <h1 className="text-2xl md:text-3xl font-bold font-heading text-[#082777] mb-2">
            Search Results
          </h1>
          <p className="text-[#464646] text-sm">
            {totalResults} results found for &ldquo;<span className="font-medium text-[#082777]">{query}</span>&rdquo;
          </p>
        </div>
      </div>

      {/* Results */}
      <div className="py-10 md:py-14">
        <div className="container-main max-w-4xl">
          {/* Classes */}
          {classResults.length > 0 && (
            <div className="mb-10">
              <h2 className="text-lg font-bold font-heading text-[#082777] mb-4 flex items-center gap-2">
                <GraduationCap size={20} /> Classes
              </h2>
              <div className="space-y-3">
                {classResults.map((cls) => (
                  <Link
                    key={cls.id}
                    to={`/class/${cls.id}`}
                    className="flex items-center gap-4 bg-white rounded-xl border border-[#ebebeb] p-5 card-shadow hover:border-[#082777] hover:shadow-md transition-all group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-[#d4e2ff] flex items-center justify-center shrink-0 group-hover:bg-[#082777] transition-colors">
                      <span className="font-bold text-[#082777] group-hover:text-white transition-colors">
                        {cls.id}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-sm text-[#242424] group-hover:text-[#082777] transition-colors">
                        {cls.name} Mathematics
                      </h3>
                      <p className="text-xs text-[#6c6c6c] mt-0.5 truncate">{cls.description}</p>
                    </div>
                    <ArrowRight size={16} className="text-[#b4b4b4] group-hover:text-[#082777] transition-colors shrink-0" />
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Chapters */}
          {chapterResults.length > 0 && (
            <div className="mb-10">
              <h2 className="text-lg font-bold font-heading text-[#082777] mb-4 flex items-center gap-2">
                <BookOpen size={20} /> Chapters
              </h2>
              <div className="space-y-3">
                {chapterResults.map((ch) => (
                  <Link
                    key={ch.id}
                    to={`/chapter/${ch.id}`}
                    className="flex items-start gap-4 bg-white rounded-xl border border-[#ebebeb] p-5 card-shadow hover:border-[#082777] hover:shadow-md transition-all group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-[#d9f6f2] flex items-center justify-center shrink-0 group-hover:bg-[#0aad93] transition-colors">
                      <Hash size={18} className="text-[#0aad93] group-hover:text-white transition-colors" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-sm text-[#242424] group-hover:text-[#082777] transition-colors truncate">
                          {ch.name}
                        </h3>
                        <span className="shrink-0 bg-[#d4e2ff] text-[#082777] text-[10px] font-bold px-2 py-0.5 rounded-full">
                          {ch.className}
                        </span>
                      </div>
                      <p className="text-xs text-[#6c6c6c] line-clamp-1">{ch.description}</p>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {ch.topics.slice(0, 3).map((t, i) => (
                          <span key={i} className="text-[10px] bg-[#f4f6f8] text-[#6c6c6c] px-2 py-0.5 rounded-full">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                    <ArrowRight size={16} className="text-[#b4b4b4] group-hover:text-[#082777] transition-colors shrink-0 mt-1" />
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Popular Chapters */}
          {popularResults.length > 0 && (
            <div className="mb-10">
              <h2 className="text-lg font-bold font-heading text-[#082777] mb-4 flex items-center gap-2">
                <Search size={20} /> Popular Results
              </h2>
              <div className="space-y-3">
                {popularResults.map((ch) => (
                  <Link
                    key={ch.id}
                    to={`/chapter/${ch.id}`}
                    className="flex items-center gap-4 bg-white rounded-xl border border-[#ebebeb] p-5 card-shadow hover:border-[#082777] hover:shadow-md transition-all group"
                  >
                    <img
                      src={ch.image}
                      alt={ch.name}
                      className="w-16 h-12 rounded-lg object-cover shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-sm text-[#242424] group-hover:text-[#082777] transition-colors">
                        {ch.name}
                      </h3>
                      <p className="text-xs text-[#6c6c6c]">{ch.topic} - Class {ch.classId}</p>
                    </div>
                    <ArrowRight size={16} className="text-[#b4b4b4] group-hover:text-[#082777] transition-colors shrink-0" />
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* No results */}
          {totalResults === 0 && (
            <div className="text-center py-16">
              <Search size={48} className="text-[#ebebeb] mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-[#242424] mb-2">No results found</h3>
              <p className="text-sm text-[#6c6c6c] mb-6">
                Try searching with different keywords or browse our classes.
              </p>
              <Link to="/classes" className="btn-primary">
                Browse All Classes
              </Link>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
