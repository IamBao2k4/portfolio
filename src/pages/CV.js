import React from 'react';
import { Download, Mail, Phone, MapPin, Calendar, GraduationCap, Briefcase, Award, Code } from 'lucide-react';

const CV = ({ darkMode }) => {
  return (
    <div className={`min-h-screen pt-20 px-4 transition-colors duration-300 ${
      darkMode ? 'bg-dark text-white' : 'bg-gray-50 text-gray-900'
    }`}>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className={`rounded-lg shadow-lg p-8 mb-8 ${
          darkMode ? 'bg-gray-800' : 'bg-white'
        }`}>
          <div className="flex justify-between items-start mb-6">
            <div>
              <h1 className="text-4xl font-bold mb-2">Phan Minh Gia Bao</h1>
              <p className="text-xl text-blue-600 mb-4">Software Engineering Student</p>
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Mail size={16} />
                  <span>pmgbao2004@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={16} />
                  <span>+84 375 539 204</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={16} />
                  <span>Ho Chi Minh City, Vietnam</span>
                </div>
              </div>
            </div>
            <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              <Download size={16} />
              Download PDF
            </button>
          </div>
        </div>

        {/* Education */}
        <div className={`rounded-lg shadow-lg p-8 mb-8 ${
          darkMode ? 'bg-gray-800' : 'bg-white'
        }`}>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <GraduationCap className="text-blue-600" />
            Education
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold">Bachelor of Software Engineering</h3>
              <p className="text-blue-600 font-medium">University Name</p>
              <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
                <Calendar size={14} />
                <span>2022 - 2026 (Expected)</span>
              </div>
              <p className="mt-2">
                Relevant coursework: Data Structures, Algorithms, Software Design Patterns, 
                Database Management, Web Development, Mobile App Development
              </p>
            </div>
          </div>
        </div>

        {/* Experience */}
        <div className={`rounded-lg shadow-lg p-8 mb-8 ${
          darkMode ? 'bg-gray-800' : 'bg-white'
        }`}>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Briefcase className="text-blue-600" />
            Experience
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold">Backend Developer Intern</h3>
              <p className="text-blue-600 font-medium">MangoAds</p>
              <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
                <Calendar size={14} />
                <span>June 2024 - August 2024</span>
              </div>
              <ul className="mt-2 space-y-1 text-sm">
                <li>• Developed responsive web applications using React.js and modern JavaScript</li>
                <li>• Collaborated with design team to implement UI/UX improvements</li>
                <li>• Optimized application performance resulting in 30% faster load times</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Freelance Web Developer</h3>
              <p className="text-blue-600 font-medium">Self-Employed</p>
              <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
                <Calendar size={14} />
                <span>2023 - Present</span>
              </div>
              <ul className="mt-2 space-y-1 text-sm">
                <li>• Built custom websites for small businesses using React and Node.js</li>
                <li>• Managed full project lifecycle from requirements gathering to deployment</li>
                <li>• Maintained long-term client relationships and provided ongoing support</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className={`rounded-lg shadow-lg p-8 mb-8 ${
          darkMode ? 'bg-gray-800' : 'bg-white'
        }`}>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Code className="text-blue-600" />
            Technical Skills
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3">Programming Languages</h3>
              <div className="flex flex-wrap gap-2">
                {['JavaScript', 'Python', 'Java', 'C++', 'TypeScript'].map((skill) => (
                  <span key={skill} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Frameworks & Libraries</h3>
              <div className="flex flex-wrap gap-2">
                {['React', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL'].map((skill) => (
                  <span key={skill} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Tools & Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {['Git', 'Docker', 'AWS', 'VS Code', 'Figma'].map((skill) => (
                  <span key={skill} className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Soft Skills</h3>
              <div className="flex flex-wrap gap-2">
                {['Problem Solving', 'Team Collaboration', 'Communication', 'Time Management'].map((skill) => (
                  <span key={skill} className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Projects */}
        <div className={`rounded-lg shadow-lg p-8 mb-8 ${
          darkMode ? 'bg-gray-800' : 'bg-white'
        }`}>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Award className="text-blue-600" />
            Key Projects
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold">E-commerce Web Application</h3>
              <p className="text-sm text-gray-600 mb-2">React, Node.js, MongoDB, Stripe API</p>
              <p className="text-sm">
                Full-stack e-commerce platform with user authentication, product catalog, 
                shopping cart, and payment integration. Implemented responsive design and 
                optimized for mobile devices.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Task Management Mobile App</h3>
              <p className="text-sm text-gray-600 mb-2">React Native, Firebase, Redux</p>
              <p className="text-sm">
                Cross-platform mobile application for task management with real-time 
                synchronization, offline capabilities, and collaborative features.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Personal Portfolio Website</h3>
              <p className="text-sm text-gray-600 mb-2">React, Tailwind CSS, React Router</p>
              <p className="text-sm">
                Responsive portfolio website showcasing projects and skills with dark mode 
                toggle, smooth animations, and optimized performance.
              </p>
            </div>
          </div>
        </div>

        {/* Languages */}
        <div className={`rounded-lg shadow-lg p-8 mb-8 ${
          darkMode ? 'bg-gray-800' : 'bg-white'
        }`}>
          <h2 className="text-2xl font-bold mb-6">Languages</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <span className="font-semibold">Vietnamese</span>
              <p className="text-sm text-gray-600">Native</p>
            </div>
            <div>
              <span className="font-semibold">English</span>
              <p className="text-sm text-gray-600">Professional Working Proficiency</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CV;
