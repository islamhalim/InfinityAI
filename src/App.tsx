import React from 'react';
import { Brain, Scroll, Code2, Laptop, Users, ChevronRight, GraduationCap, Linkedin, Facebook, Instagram, Youtube } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface CourseCardProps {
  title: string;
  description: string;
  duration: string;
  level: string;
}

interface PartnerLogoProps {
  src: string;
  alt: string;
}

interface TestimonialProps {
  content: string;
  author: string;
  role: string;
  company: string;
  image: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="p-6 bg-black/5 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-yellow-500/10">
      <div className="w-12 h-12 bg-yellow-500/10 rounded-lg flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function CourseCard({ title, description, duration, level }: CourseCardProps) {
  return (
    <div className="bg-black/5 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-yellow-500/10">
      <div className="p-6">
        <div className="flex items-center mb-4">
          <GraduationCap className="h-6 w-6 text-yellow-500 mr-2" />
          <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        </div>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex items-center justify-between text-sm text-gray-500">
          <span className="flex items-center">
            <Code2 className="h-4 w-4 mr-1" /> {duration}
          </span>
          <span className="bg-yellow-500 text-black px-3 py-1 rounded-full font-medium">
            {level}
          </span>
        </div>
      </div>
    </div>
  );
}

function PartnerLogo({ src, alt }: PartnerLogoProps) {
  return (
    <div className="flex items-center justify-center p-8 bg-black/5 rounded-xl">
      <img src={src} alt={alt} className="max-h-12 grayscale hover:grayscale-0 transition-all" />
    </div>
  );
}

function Testimonial({ content, author, role, company, image }: TestimonialProps) {
  return (
    <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
      <p className="text-gray-300 mb-6 italic">"{content}"</p>
      <div className="flex items-center">
        <img src={image} alt={author} className="w-12 h-12 rounded-full mr-4 object-cover" />
        <div>
          <h4 className="text-yellow-500 font-semibold">{author}</h4>
          <p className="text-gray-400 text-sm">{role}</p>
          <p className="text-gray-500 text-sm">{company}</p>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <header className="bg-black">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Brain className="h-8 w-8 text-yellow-500" />
              <span className="text-2xl font-bold text-white">Infinity AI</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#courses" className="text-gray-300 hover:text-yellow-500">Courses</a>
              <a href="#certifications" className="text-gray-300 hover:text-yellow-500">Certifications</a>
              <a href="#about" className="text-gray-300 hover:text-yellow-500">About</a>
              <a href="#contact" className="text-gray-300 hover:text-yellow-500">Contact</a>
            </div>
            <button className="bg-yellow-500 text-black px-6 py-2 rounded-full font-semibold hover:bg-yellow-400 transition-colors">
              Get Started
            </button>
          </div>
        </nav>

        <div className="container mx-auto px-6 py-20">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                Master AI Technology with Practical Training
              </h1>
              <p className="mt-4 text-xl text-gray-400">
                Get industry-recognized certifications and hands-on experience in AI, Machine Learning, and Deep Learning.
              </p>
              <div className="mt-8 flex space-x-4">
                <button className="bg-yellow-500 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-400 transition-colors flex items-center">
                  View Courses <ChevronRight className="ml-2 h-5 w-5" />
                </button>
                <button className="border-2 border-yellow-500 text-yellow-500 px-8 py-3 rounded-full font-semibold hover:bg-yellow-500/10 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
            <div className="md:w-1/2 mt-10 md:mt-0">
              <img 
                src="./img/ai-generated-8540915_1280.png"
                alt="AI Training"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">Why Choose Infinity AI?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <FeatureCard 
              icon={<Laptop className="h-8 w-8 text-yellow-500" />}
              title="Practical Learning"
              description="Hands-on projects and real-world applications to build your portfolio"
            />
            <FeatureCard 
              icon={<Scroll className="h-8 w-8 text-yellow-500" />}
              title="Industry Certifications"
              description="Recognized certifications that boost your career prospects"
            />
            <FeatureCard 
              icon={<Users className="h-8 w-8 text-yellow-500" />}
              title="Expert Instructors"
              description="Learn from industry professionals with years of experience"
            />
          </div>
        </div>
      </section>

      {/* Courses Preview */}
      <section className="bg-black/5 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">Popular Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <CourseCard 
              title="Machine Learning Fundamentals"
              description="Master the basics of ML algorithms and implementation"
              duration="8 weeks"
              level="Beginner"
            />
            <CourseCard 
              title="Deep Learning Specialization"
              description="Advanced neural networks and deep learning techniques"
              duration="12 weeks"
              level="Intermediate"
            />
            <CourseCard 
              title="AI for Business"
              description="Implement AI solutions in business contexts"
              duration="10 weeks"
              level="Advanced"
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-black py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-white mb-4">What Our Students Say</h2>
          <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
            Hear from professionals who have transformed their careers through our AI training programs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Testimonial 
              content="The practical approach to AI training at Infinity AI helped me transition from a data analyst to an ML engineer. The hands-on projects were invaluable."
              author="Sarah Chen"
              role="Machine Learning Engineer"
              company="Google"
              image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
            />
            <Testimonial 
              content="What sets Infinity AI apart is their focus on real-world applications. I was able to implement AI solutions in my company right after completing the course."
              author="Michael Rodriguez"
              role="AI Solutions Architect"
              company="Microsoft"
              image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80"
            />
            <Testimonial 
              content="The certification program was intense but extremely rewarding. The instructors are industry veterans who bring invaluable insights to the classroom."
              author="Emily Watson"
              role="Data Science Lead"
              company="Amazon"
              image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80"
            />
            <Testimonial 
              content="The AI ethics course opened my eyes to the importance of responsible AI development. This knowledge has been crucial in my role as a tech leader."
              author="David Park"
              role="Chief Technology Officer"
              company="Tesla"
              image="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
            />
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">Trusted by Industry Leaders</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <PartnerLogo 
              src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=200&h=80&q=80"
              alt="Google Cloud"
            />
            <PartnerLogo 
              src="https://images.unsplash.com/photo-1611162616305-c69b3037c7bb?auto=format&fit=crop&w=200&h=80&q=80"
              alt="Microsoft"
            />
            <PartnerLogo 
              src="https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?auto=format&fit=crop&w=200&h=80&q=80"
              alt="Amazon AWS"
            />
            <PartnerLogo 
              src="https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&w=200&h=80&q=80"
              alt="IBM"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-8 md:mb-0">
              <div className="flex items-center space-x-2">
                <Brain className="h-8 w-8 text-yellow-500" />
                <span className="text-2xl font-bold">Infinity AI</span>
              </div>
              <p className="mt-4 text-gray-400 max-w-sm">
                Empowering professionals with practical AI skills and industry-recognized certifications.
              </p>
              <div className="flex space-x-4 mt-6">
                <a href="https://linkedin.com" className="text-gray-400 hover:text-yellow-500">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="https://facebook.com" className="text-gray-400 hover:text-yellow-500">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="https://instagram.com" className="text-gray-400 hover:text-yellow-500">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="https://youtube.com" className="text-gray-400 hover:text-yellow-500">
                  <Youtube className="h-6 w-6" />
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
              <div>
                <h3 className="font-semibold mb-4 text-yellow-500">Company</h3>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#about" className="hover:text-yellow-500">About</a></li>
                  <li><a href="#careers" className="hover:text-yellow-500">Careers</a></li>
                  <li><a href="#contact" className="hover:text-yellow-500">Contact</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4 text-yellow-500">Resources</h3>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#blog" className="hover:text-yellow-500">Blog</a></li>
                  <li><a href="#guides" className="hover:text-yellow-500">Guides</a></li>
                  <li><a href="#documentation" className="hover:text-yellow-500">Documentation</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4 text-yellow-500">Legal</h3>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#privacy" className="hover:text-yellow-500">Privacy</a></li>
                  <li><a href="#terms" className="hover:text-yellow-500">Terms</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Infinity AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
