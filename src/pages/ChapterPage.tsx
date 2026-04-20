import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { classesData } from '../data/mathData';
import {
  ChevronRight, BookOpen, FileText, Calculator,
  Brain, HelpCircle, Download, ClipboardList, ArrowLeft
} from 'lucide-react';

const sectionIcons: Record<string, React.ComponentType<{size?: number; className?: string}>> = {
  intro: BookOpen,
  concepts: Brain,
  formulas: Calculator,
  exercises: FileText,
  mcq: HelpCircle,
  extra: ClipboardList,
  worksheets: Download,
};

export default function ChapterPage() {
  const { chapterId } = useParams<{ chapterId: string }>();
  const [activeSection, setActiveSection] = useState('concepts');

  // Find the chapter and its class
  let chapter = null;
  let cls = null;
  for (const c of classesData) {
    const ch = c.chapters.find((ch) => ch.id === chapterId);
    if (ch) {
      chapter = ch;
      cls = c;
      break;
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [chapterId]);

  if (!chapter || !cls) {
    return (
      <div className="min-h-screen bg-[#f4f6f8]">
        <Navbar />
        <div className="pt-28 pb-20 container-main text-center">
          <h1 className="text-2xl font-bold text-[#082777]">Chapter not found</h1>
          <Link to="/classes" className="btn-primary mt-4 inline-flex">Browse All Classes</Link>
        </div>
        <Footer />
      </div>
    );
  }

  const chapterIndex = cls.chapters.findIndex((ch) => ch.id === chapterId);
  const prevChapter = chapterIndex > 0 ? cls.chapters[chapterIndex - 1] : null;
  const nextChapter = chapterIndex < cls.chapters.length - 1 ? cls.chapters[chapterIndex + 1] : null;

  const sidebarSections = [
    { id: 'concepts', label: 'Important Concepts' },
    { id: 'formulas', label: 'Formulas' },
    { id: 'exercises', label: 'Exercise Solutions' },
    { id: 'mcq', label: 'MCQ Questions' },
    { id: 'extra', label: 'Extra Questions' },
    { id: 'hots', label: 'HOTS Questions' },
    { id: 'previous', label: 'Previous Year' },
    { id: 'worksheets', label: 'Worksheets' },
  ];

  return (
    <div className="min-h-screen bg-[#f4f6f8]">
      <Navbar />

      {/* Chapter Header */}
      <div className="pt-28 pb-10 bg-white border-b border-[#ebebeb]">
        <div className="container-main">
          <nav className="flex items-center gap-2 text-sm text-[#6c6c6c] mb-4 flex-wrap">
            <Link to="/" className="hover:text-[#082777]">Home</Link>
            <ChevronRight size={14} />
            <Link to="/classes" className="hover:text-[#082777]">Classes</Link>
            <ChevronRight size={14} />
            <Link to={`/class/${cls.id}`} className="hover:text-[#082777]">{cls.name}</Link>
            <ChevronRight size={14} />
            <span className="text-[#082777] font-medium truncate">{chapter.name}</span>
          </nav>

          <Link
            to={`/class/${cls.id}`}
            className="inline-flex items-center gap-1.5 text-sm text-[#6c6c6c] hover:text-[#082777] mb-4 transition-colors"
          >
            <ArrowLeft size={14} /> Back to {cls.name}
          </Link>

          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#082777] to-[#0056b3] flex items-center justify-center shrink-0">
              <BookOpen size={24} className="text-white" />
            </div>
            <div>
              <span className="text-xs font-medium text-[#0aad93] uppercase tracking-wide">
                Chapter {chapterIndex + 1}
              </span>
              <h1 className="text-2xl md:text-3xl font-bold font-heading text-[#082777]">
                {chapter.name}
              </h1>
              <p className="text-[#464646] text-sm mt-1 max-w-2xl">
                {chapter.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-8 md:py-12">
        <div className="container-main">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <aside className="lg:w-[280px] shrink-0">
              <div className="bg-white rounded-xl border border-[#ebebeb] overflow-hidden sticky top-24">
                <div className="p-4 border-b border-[#ebebeb]">
                  <h3 className="font-semibold text-sm text-[#242424]">Chapter Contents</h3>
                </div>
                <nav className="p-2">
                  {sidebarSections.map((section) => {
                    const Icon = sectionIcons[section.id] || FileText;
                    return (
                      <button
                        key={section.id}
                        onClick={() => setActiveSection(section.id)}
                        className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left text-sm transition-all ${
                          activeSection === section.id
                            ? 'bg-[#d4e2ff] text-[#082777] font-medium'
                            : 'text-[#464646] hover:bg-[#f4f6f8]'
                        }`}
                      >
                        <Icon size={16} className="shrink-0" />
                        {section.label}
                      </button>
                    );
                  })}
                </nav>

                {/* Chapter Navigation */}
                <div className="border-t border-[#ebebeb] p-3 space-y-2">
                  {prevChapter && (
                    <Link
                      to={`/chapter/${prevChapter.id}`}
                      className="flex items-center gap-2 text-xs text-[#6c6c6c] hover:text-[#082777] transition-colors"
                    >
                      <ArrowLeft size={12} /> Prev: {prevChapter.name}
                    </Link>
                  )}
                  {nextChapter && (
                    <Link
                      to={`/chapter/${nextChapter.id}`}
                      className="flex items-center gap-2 text-xs text-[#6c6c6c] hover:text-[#082777] transition-colors"
                    >
                      Next: {nextChapter.name} <ChevronRight size={12} />
                    </Link>
                  )}
                </div>
              </div>
            </aside>

            {/* Content Area */}
            <main className="flex-1 min-w-0">
              {/* Important Concepts */}
              {activeSection === 'concepts' && (
                <div className="bg-white rounded-xl border border-[#ebebeb] p-6 md:p-8">
                  <h2 className="text-xl font-bold font-heading text-[#082777] mb-6">
                    Important Concepts
                  </h2>
                  <div className="space-y-6">
                    {chapter.topics.map((topic, i) => (
                      <div key={i} className="flex gap-4">
                        <div className="w-8 h-8 rounded-lg bg-[#d9f6f2] flex items-center justify-center shrink-0 mt-0.5">
                          <span className="text-xs font-bold text-[#0aad93]">{i + 1}</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-sm text-[#242424] mb-1">{topic}</h4>
                          <p className="text-sm text-[#6c6c6c] leading-relaxed">
                            Understanding {topic.toLowerCase()} is essential for mastering this chapter. 
                            Practice related problems to build a strong foundation in this concept.
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Summary Box */}
                  <div className="mt-8 bg-gradient-to-br from-[#d9f6f2] to-[#e8faf7] rounded-xl p-5 border border-[#0aad93]/20">
                    <h4 className="font-semibold text-sm text-[#082777] mb-2">Chapter Summary</h4>
                    <p className="text-sm text-[#464646] leading-relaxed">
                      This chapter covers {chapter.topics.length} key topics: {chapter.topics.join(', ')}. 
                      Make sure you understand all concepts before moving to exercises.
                    </p>
                  </div>
                </div>
              )}

              {/* Formulas */}
              {activeSection === 'formulas' && (
                <div className="bg-white rounded-xl border border-[#ebebeb] p-6 md:p-8">
                  <h2 className="text-xl font-bold font-heading text-[#082777] mb-6">
                    Important Formulas
                  </h2>
                  {chapter.formulas && chapter.formulas.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {chapter.formulas.map((f, i) => (
                        <div
                          key={i}
                          className="bg-[#f4f6f8] rounded-xl p-5 border border-[#ebebeb]"
                        >
                          <h4 className="font-semibold text-sm text-[#242424] mb-2">{f.name}</h4>
                          <code className="block bg-[#d9f6f2] text-[#082777] px-4 py-3 rounded-lg text-sm font-mono text-center">
                            {f.formula}
                          </code>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <Calculator size={40} className="text-[#b4b4b4] mx-auto mb-3" />
                      <p className="text-[#6c6c6c]">
                        Formulas for this chapter will be updated soon. Check back later!
                      </p>
                    </div>
                  )}

                  <div className="mt-6 bg-[#d4e2ff]/30 rounded-xl p-5 border border-[#d4e2ff]">
                    <p className="text-sm text-[#082777]">
                      <strong>Tip:</strong> Memorize these formulas and practice applying them to different types of problems. 
                      Create formula cards for quick revision before exams.
                    </p>
                  </div>
                </div>
              )}

              {/* Exercise Solutions */}
              {activeSection === 'exercises' && (
                <div className="bg-white rounded-xl border border-[#ebebeb] p-6 md:p-8">
                  <h2 className="text-xl font-bold font-heading text-[#082777] mb-6">
                    NCERT Exercise Solutions
                  </h2>
                  <div className="space-y-4">
                    {['Exercise 1.1', 'Exercise 1.2', 'Exercise 1.3', 'Exercise 1.4', 'Exercise 1.5'].map((ex, i) => (
                      <div key={i} className="border border-[#ebebeb] rounded-xl overflow-hidden">
                        <button className="w-full flex items-center justify-between px-5 py-4 text-left bg-[#f4f6f8] hover:bg-[#e8f0ff] transition-colors">
                          <div className="flex items-center gap-3">
                            <FileText size={18} className="text-[#082777]" />
                            <span className="font-medium text-sm text-[#242424]">{ex}</span>
                          </div>
                          <span className="text-xs bg-[#d9f6f2] text-[#0aad93] px-2.5 py-1 rounded-full font-medium">
                            {5 + i * 2} Questions
                          </span>
                        </button>
                        <div className="px-5 py-4">
                          <p className="text-sm text-[#6c6c6c] mb-3">
                            Complete step-by-step solutions for all questions in {ex}.
                          </p>
                          <div className="space-y-3">
                            {[1, 2, 3].map((q) => (
                              <div key={q} className="bg-[#f4f6f8] rounded-lg p-4">
                                <p className="text-sm font-medium text-[#242424] mb-2">
                                  Question {q}:
                                </p>
                                <p className="text-sm text-[#6c6c6c] mb-3">
                                  This is a sample solution for question {q} from {ex}. 
                                  Detailed step-by-step working is provided below.
                                </p>
                                <div className="bg-white rounded-lg p-3 border border-[#ebebeb]">
                                  <p className="text-xs font-medium text-[#0aad93] mb-1">Solution:</p>
                                  <p className="text-sm text-[#464646]">
                                    Step 1: Identify the given information and what needs to be found.
                                    <br />
                                    Step 2: Apply the relevant formula or concept from this chapter.
                                    <br />
                                    Step 3: Simplify and calculate the final answer.
                                  </p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* MCQ Questions */}
              {activeSection === 'mcq' && (
                <div className="bg-white rounded-xl border border-[#ebebeb] p-6 md:p-8">
                  <h2 className="text-xl font-bold font-heading text-[#082777] mb-6">
                    Multiple Choice Questions
                  </h2>
                  <div className="space-y-6">
                    {[1, 2, 3, 4, 5].map((q) => (
                      <div key={q} className="bg-[#f4f6f8] rounded-xl p-5">
                        <p className="text-sm font-medium text-[#242424] mb-4">
                          Q{q}. What is the key concept related to {chapter.topics[q % chapter.topics.length]}?
                        </p>
                        <div className="space-y-2">
                          {['Option A: Sample answer choice', 'Option B: Correct conceptual answer', 'Option C: Incorrect option', 'Option D: Another distractor'].map((opt, j) => (
                            <label
                              key={j}
                              className="flex items-center gap-3 p-3 bg-white rounded-lg border border-[#ebebeb] cursor-pointer hover:border-[#082777] transition-colors"
                            >
                              <input type="radio" name={`mcq-${q}`} className="accent-[#082777]" />
                              <span className="text-sm text-[#464646]">{opt}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Extra Questions */}
              {activeSection === 'extra' && (
                <div className="bg-white rounded-xl border border-[#ebebeb] p-6 md:p-8">
                  <h2 className="text-xl font-bold font-heading text-[#082777] mb-6">
                    Extra Practice Questions
                  </h2>
                  <div className="space-y-4">
                    {[1, 2, 3].map((q) => (
                      <div key={q} className="border border-[#ebebeb] rounded-xl p-5">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="bg-[#d4e2ff] text-[#082777] text-xs font-bold px-2 py-1 rounded">
                            Short Answer
                          </span>
                          <span className="text-xs text-[#6c6c6c]">2 Marks</span>
                        </div>
                        <p className="text-sm text-[#242424] font-medium mb-3">
                          Q{q}. Explain the concept of {chapter.topics[q % chapter.topics.length]} with a suitable example.
                        </p>
                        <div className="bg-[#f4f6f8] rounded-lg p-4">
                          <p className="text-xs font-medium text-[#0aad93] mb-1">Answer:</p>
                          <p className="text-sm text-[#464646] leading-relaxed">
                            {chapter.topics[q % chapter.topics.length]} refers to the fundamental concept 
                            covered in this chapter. A detailed explanation with examples helps understand 
                            the practical application of this concept in solving mathematical problems.
                          </p>
                        </div>
                      </div>
                    ))}
                    {[4, 5].map((q) => (
                      <div key={q} className="border border-[#ebebeb] rounded-xl p-5">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="bg-[#d9f6f2] text-[#0aad93] text-xs font-bold px-2 py-1 rounded">
                            Long Answer
                          </span>
                          <span className="text-xs text-[#6c6c6c]">5 Marks</span>
                        </div>
                        <p className="text-sm text-[#242424] font-medium mb-3">
                          Q{q}. Describe in detail the various aspects of {chapter.topics[q % chapter.topics.length]} 
                          and solve a related problem.
                        </p>
                        <div className="bg-[#f4f6f8] rounded-lg p-4">
                          <p className="text-xs font-medium text-[#0aad93] mb-1">Answer:</p>
                          <p className="text-sm text-[#464646] leading-relaxed">
                            A comprehensive explanation covering all aspects of {chapter.topics[q % chapter.topics.length]}.
                            Include definitions, properties, formulas, and a detailed solved example.
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* HOTS Questions */}
              {activeSection === 'hots' && (
                <div className="bg-white rounded-xl border border-[#ebebeb] p-6 md:p-8">
                  <h2 className="text-xl font-bold font-heading text-[#082777] mb-4">
                    Higher Order Thinking Skills (HOTS)
                  </h2>
                  <div className="bg-gradient-to-br from-[#fef3c7] to-[#fffbeb] rounded-xl p-5 border border-amber-200 mb-6">
                    <p className="text-sm text-[#92400e]">
                      These questions are designed to test your analytical and problem-solving abilities. 
                      They require deeper understanding and application of multiple concepts.
                    </p>
                  </div>
                  <div className="space-y-4">
                    {[1, 2, 3].map((q) => (
                      <div key={q} className="border border-[#ebebeb] rounded-xl p-5">
                        <div className="flex items-center gap-2 mb-3">
                          <Brain size={14} className="text-[#082777]" />
                          <span className="text-xs font-bold text-[#082777]">HOTS {q}</span>
                        </div>
                        <p className="text-sm text-[#242424] font-medium mb-3">
                          Apply your understanding of {chapter.name} to solve this challenging problem 
                          that combines multiple concepts from this chapter.
                        </p>
                        <div className="bg-[#f4f6f8] rounded-lg p-4">
                          <p className="text-xs font-medium text-[#0aad93] mb-1">Solution Approach:</p>
                          <p className="text-sm text-[#464646]">
                            Identify the key concepts involved, formulate a strategy, and solve step-by-step.
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Previous Year Questions */}
              {activeSection === 'previous' && (
                <div className="bg-white rounded-xl border border-[#ebebeb] p-6 md:p-8">
                  <h2 className="text-xl font-bold font-heading text-[#082777] mb-6">
                    Previous Year Board Questions
                  </h2>
                  <div className="space-y-4">
                    {['2025', '2024', '2023'].map((year) => (
                      <div key={year} className="border border-[#ebebeb] rounded-xl overflow-hidden">
                        <div className="bg-[#f4f6f8] px-5 py-3 flex items-center justify-between">
                          <span className="font-semibold text-sm text-[#242424]">CBSE Board {year}</span>
                          <span className="text-xs bg-[#d4e2ff] text-[#082777] px-2.5 py-1 rounded-full">3 Questions</span>
                        </div>
                        <div className="p-5 space-y-4">
                          {[1, 2, 3].map((q) => (
                            <div key={q} className="bg-[#f4f6f8] rounded-lg p-4">
                              <p className="text-sm text-[#242424] font-medium mb-2">
                                Q{q}. ({['3 Marks', '2 Marks', '5 Marks'][q - 1]}) Board Question from {chapter.name}
                              </p>
                              <p className="text-xs text-[#0aad93] font-medium cursor-pointer hover:underline">
                                View Solution
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Worksheets */}
              {activeSection === 'worksheets' && (
                <div className="bg-white rounded-xl border border-[#ebebeb] p-6 md:p-8">
                  <h2 className="text-xl font-bold font-heading text-[#082777] mb-6">
                    Practice Worksheets
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { name: 'Basic Practice Worksheet', qs: 20, level: 'Easy' },
                      { name: 'Intermediate Worksheet', qs: 15, level: 'Medium' },
                      { name: 'Advanced Challenge Worksheet', qs: 10, level: 'Hard' },
                      { name: 'Revision Test Worksheet', qs: 25, level: 'Mixed' },
                    ].map((ws, i) => (
                      <div
                        key={i}
                        className="bg-[#f4f6f8] rounded-xl p-5 border border-[#ebebeb] hover:border-[#082777] transition-all group"
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 rounded-lg bg-[#d4e2ff] flex items-center justify-center group-hover:bg-[#082777] transition-colors">
                            <Download size={18} className="text-[#082777] group-hover:text-white transition-colors" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-sm text-[#242424]">{ws.name}</h4>
                            <span className="text-xs text-[#6c6c6c]">{ws.qs} Questions</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                            ws.level === 'Easy' ? 'bg-green-100 text-green-700' :
                            ws.level === 'Medium' ? 'bg-amber-100 text-amber-700' :
                            ws.level === 'Hard' ? 'bg-red-100 text-red-700' :
                            'bg-[#d4e2ff] text-[#082777]'
                          }`}>
                            {ws.level}
                          </span>
                          <button className="text-xs font-medium text-[#082777] hover:text-[#0aad93] transition-colors">
                            Download PDF
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </main>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
