import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { blogPosts } from '../data/mathData';
import { Search, Clock, Calendar, ArrowRight, BookOpen, Tag } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  category?: string;
}

const allPosts: BlogPost[] = [
  ...blogPosts,
  {
    id: 4,
    title: "Board Exam Preparation Guide: The Complete Strategy",
    excerpt: "A comprehensive guide to preparing for your CBSE board exams with effective study schedules, revision techniques, and stress management tips.",
    image: "/images/blog-study-tips.jpg",
    date: "March 28, 2026",
    readTime: "15 min read",
    category: "Exam Tips"
  },
  {
    id: 5,
    title: "Common Mistakes in Mathematics and How to Avoid Them",
    excerpt: "Learn about the most frequent errors students make in math exams and discover practical strategies to avoid losing marks unnecessarily.",
    image: "/images/blog-formulas.jpg",
    date: "March 20, 2026",
    readTime: "7 min read",
    category: "Study Guide"
  },
  {
    id: 6,
    title: "Geometry Made Easy: Visual Learning Techniques",
    excerpt: "Master geometry concepts using visual aids, diagrams, and spatial reasoning techniques that make complex shapes and theorems easier to understand.",
    image: "/images/blog-trigonometry.jpg",
    date: "March 15, 2026",
    readTime: "9 min read",
    category: "Geometry"
  }
];

const categories = ['All', 'Exam Tips', 'Study Guide', 'Formulas', 'Geometry', 'Algebra'];

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredPosts = allPosts.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-[#f4f6f8]">
      <Navbar />

      {/* Header */}
      <div className="pt-28 pb-12 bg-white border-b border-[#ebebeb]">
        <div className="container-main">
          <h1 className="text-3xl md:text-4xl font-bold font-heading text-[#082777] mb-3">
            Study Blog
          </h1>
          <p className="text-[#464646] text-base max-w-xl mb-6">
            Expert tips, study guides, and strategies to help you excel in CBSE Mathematics.
          </p>

          {/* Search */}
          <div className="relative max-w-md">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#b4b4b4]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search articles..."
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#ebebeb] text-sm outline-none focus:border-[#0aad93] focus:ring-2 focus:ring-[#0aad93]/20 transition-all bg-[#f4f6f8]"
            />
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="py-12 md:py-16">
        <div className="container-main">
          {/* Categories */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-[#082777] text-white'
                    : 'bg-white border border-[#ebebeb] text-[#464646] hover:border-[#082777] hover:text-[#082777]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Featured Post */}
          {filteredPosts.length > 0 && (
            <div className="mb-10">
              <div className="bg-white rounded-2xl border border-[#ebebeb] overflow-hidden card-shadow">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="h-64 md:h-auto">
                    <img
                      src={filteredPosts[0].image}
                      alt={filteredPosts[0].title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 md:p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="inline-flex items-center gap-1 text-xs text-[#0aad93] font-medium bg-[#d9f6f2] px-2.5 py-1 rounded-full">
                        <Tag size={10} /> {filteredPosts[0].category || 'General'}
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs text-[#6c6c6c]">
                        <Clock size={10} /> {filteredPosts[0].readTime}
                      </span>
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold font-heading text-[#082777] mb-3">
                      {filteredPosts[0].title}
                    </h2>
                    <p className="text-sm text-[#464646] leading-relaxed mb-4">
                      {filteredPosts[0].excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 text-xs text-[#6c6c6c]">
                        <Calendar size={12} /> {filteredPosts[0].date}
                      </span>
                      <button className="inline-flex items-center gap-1 text-sm font-medium text-[#082777] hover:text-[#0aad93] transition-colors">
                        Read Article <ArrowRight size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Post Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.slice(1).map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-2xl border border-[#ebebeb] overflow-hidden card-shadow hover:-translate-y-1 hover:shadow-lg transition-all group"
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs text-[#0aad93] font-medium bg-[#d9f6f2] px-2 py-0.5 rounded-full">
                      {post.category || 'General'}
                    </span>
                  </div>
                  <h3 className="font-semibold text-base text-[#242424] mb-2 group-hover:text-[#082777] transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-[#6c6c6c] leading-relaxed line-clamp-2 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1 text-xs text-[#6c6c6c]">
                      <Calendar size={10} /> {post.date}
                    </span>
                    <span className="text-xs text-[#6c6c6c]">{post.readTime}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <BookOpen size={40} className="text-[#b4b4b4] mx-auto mb-3" />
              <p className="text-[#6c6c6c]">No articles found matching your search.</p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
