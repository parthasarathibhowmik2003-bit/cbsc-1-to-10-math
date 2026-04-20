import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Target, Users, BookOpen, Award, Heart, TrendingUp } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#f4f6f8]">
      <Navbar />

      {/* Header */}
      <div className="pt-28 pb-14 bg-gradient-to-br from-[#082777] to-[#0056b3]">
        <div className="container-main text-center">
          <h1 className="text-3xl md:text-4xl font-bold font-heading text-white mb-4">
            About CBSE Math Solution Hub
          </h1>
          <p className="text-white/70 text-base max-w-2xl mx-auto">
            Empowering students across India with free, comprehensive, and high-quality mathematics solutions.
          </p>
        </div>
      </div>

      {/* Mission */}
      <div className="py-16 md:py-20">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-semibold text-[#0aad93] uppercase tracking-widest mb-3 block">
                Our Mission
              </span>
              <h2 className="text-2xl md:text-3xl font-bold font-heading text-[#082777] mb-4">
                Making Mathematics Accessible to Every Student
              </h2>
              <p className="text-[#464646] text-base leading-relaxed mb-4">
                CBSE Math Solution Hub was founded with a simple yet powerful mission: to provide every CBSE student 
                in India with free, high-quality mathematics solutions that make learning easy and enjoyable.
              </p>
              <p className="text-[#464646] text-base leading-relaxed mb-6">
                We believe that mathematics should not be a barrier to academic success. Our team of experienced 
                educators works tirelessly to create step-by-step solutions, practice materials, and revision 
                resources that help students build confidence and excel in their exams.
              </p>
              <Link to="/classes" className="btn-primary">
                Start Exploring
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Target, label: 'Goal Oriented', desc: 'Focused on exam success' },
                { icon: Users, label: 'Student First', desc: 'Designed for learners' },
                { icon: BookOpen, label: 'Comprehensive', desc: 'Complete syllabus coverage' },
                { icon: Award, label: 'Quality Content', desc: 'Expert-verified solutions' },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-xl border border-[#ebebeb] p-6 text-center card-shadow">
                  <div className="w-12 h-12 rounded-xl bg-[#d4e2ff] flex items-center justify-center mx-auto mb-3">
                    <item.icon size={22} className="text-[#082777]" />
                  </div>
                  <h4 className="font-semibold text-sm text-[#242424] mb-1">{item.label}</h4>
                  <p className="text-xs text-[#6c6c6c]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="py-14 bg-white border-y border-[#ebebeb]">
        <div className="container-main">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: '150+', label: 'Math Chapters' },
              { value: '10', label: 'CBSE Classes' },
              { value: '50,000+', label: 'Monthly Students' },
              { value: '100%', label: 'Free Access' },
            ].map((stat, i) => (
              <div key={i}>
                <span className="text-3xl md:text-4xl font-bold font-heading text-[#082777] block mb-2">
                  {stat.value}
                </span>
                <span className="text-sm text-[#6c6c6c]">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="py-16 md:py-20">
        <div className="container-main">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold font-heading text-[#082777] mb-3">
              Our Core Values
            </h2>
            <p className="text-[#464646] text-base max-w-xl mx-auto">
              The principles that guide everything we do at CBSE Math Solution Hub
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Heart,
                title: 'Passion for Education',
                description: 'We are driven by a genuine love for teaching and a commitment to helping every student succeed in mathematics.'
              },
              {
                icon: TrendingUp,
                title: 'Continuous Improvement',
                description: 'We constantly update our content, incorporate feedback, and adopt new methods to enhance the learning experience.'
              },
              {
                icon: Users,
                title: 'Inclusive Learning',
                description: 'Our resources are designed to be accessible to all students, regardless of their current skill level or background.'
              },
            ].map((value, i) => (
              <div key={i} className="bg-white rounded-xl border border-[#ebebeb] p-8 card-shadow text-center">
                <div className="w-14 h-14 rounded-xl bg-[#d9f6f2] flex items-center justify-center mx-auto mb-4">
                  <value.icon size={26} className="text-[#0aad93]" />
                </div>
                <h3 className="font-semibold text-lg text-[#242424] mb-3">{value.title}</h3>
                <p className="text-sm text-[#6c6c6c] leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
