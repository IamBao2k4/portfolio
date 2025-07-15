import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Mail, MapPin, GraduationCap, Code, ExternalLink, Database, Terminal, FileCode, Layers, Braces, Zap } from 'lucide-react';

const Home = ({ darkMode }) => {
  const techStack = [
    { name: 'React', color: 'bg-blue-500', icon: <Braces size={24} /> },
    { name: 'Node.js', color: 'bg-green-500', icon: <Terminal size={24} /> },
    { name: 'Express.js', color: 'bg-gray-600', icon: <Layers size={24} /> },
    { name: 'MongoDB', color: 'bg-green-600', icon: <Database size={24} /> },
    { name: 'TypeScript', color: 'bg-blue-600', icon: <FileCode size={24} /> },
    { name: 'JavaScript', color: 'bg-yellow-500', icon: <Code size={24} /> },
    { name: 'C#', color: 'bg-purple-600', icon: <Braces size={24} /> },
    { name: 'C++', color: 'bg-blue-700', icon: <Terminal size={24} /> },
    { name: 'WinUI', color: 'bg-indigo-500', icon: <Layers size={24} /> },
    { name: 'Git', color: 'bg-orange-500', icon: <Zap size={24} /> }
  ];

  const projects = [
    {
      name: 'Furniro',
      description: 'Web application for selling and managing furniture built with ExpressJS and Node.js',
      tech: ['ExpressJS', 'Node.js', 'MongoDB', 'MVC'],
      github: 'https://github.com/BlackTran-fullstack/Project_Web',
      type: 'Web App'
    },
    {
      name: 'BC Market',
      description: 'Desktop application for selling and managing merchandise built with WinUI',
      tech: ['WinUI', 'Supabase', 'MVVM', 'C#'],
      github: 'https://github.com/DuongThienChi/BC_Market',
      type: 'Desktop App'
    },
    {
      name: 'Student Management',
      description: 'Website application for managing student and courses (In Progress)',
      tech: ['ReactJS', 'NestJS', 'MongoDB'],
      github: 'https://github.com/IamBao2k4/Group12-Ex-Assignment1',
      type: 'Web App'
    }
  ];

  return (
    <div className="pt-16 min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold">
                  <span className="text-primary">Phan Minh</span>
                  <br />
                  <span className={darkMode ? 'text-white' : 'text-gray-900'}>Gia Bảo</span>
                </h1>
                <p className="text-xl md:text-2xl font-medium text-primary">
                  Intern Software Engineering
                </p>
                <p className={`text-lg leading-relaxed ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  3rd year student at Ho Chi Minh City University of Science, majoring in Software Engineering. 
                  I'm trying day by day to become a good developer.
                </p>
              </div>

              {/* Quick Info */}
              <div className="flex flex-wrap gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-primary" />
                  <span>Ho Chi Minh City, Vietnam</span>
                </div>
                <div className="flex items-center gap-2">
                  <GraduationCap size={16} className="text-primary" />
                  <span>HCMUS - GPA: 3.62</span>
                </div>
                <div className="flex items-center gap-2">
                  <Code size={16} className="text-primary" />
                  <span>Backend Developer</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
                <a
                  href="https://github.com/IamBao2k4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-secondary transition-colors duration-200"
                >
                  <Github size={20} />
                  <span>GitHub</span>
                </a>
                <a
                  href="mailto:pmgbao2004@gmail.com"
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors duration-200 ${
                    darkMode ? 'hover:text-white' : 'hover:text-white'
                  }`}
                >
                  <Mail size={20} />
                  <span>Contact</span>
                </a>
              </div>
            </div>

            {/* Right Content - Profile Image */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 rounded-full bg-gradient-to-br from-primary to-secondary p-1">
                  <div className={`w-full h-full rounded-full ${
                    darkMode ? 'bg-dark-secondary' : 'bg-white'
                  } flex items-center justify-center`}>
                    <div className="w-72 h-72 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                      <img src="/assets/ME.jpg" alt="Logo" className="w-72 h-72 rounded-full object-cover" />
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-14 h-14 bg-accent rounded-full flex items-center justify-center">
                  <Code size={24} className="text-white bold" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className={`py-20 px-4 sm:px-6 lg:px-8 ${
        darkMode ? 'bg-dark-secondary' : 'bg-white'
      }`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Tech Stack & Skills
            </h2>
            <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Technologies and tools I work with
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className={`p-6 rounded-xl border-2 transition-all duration-300 hover:scale-105 text-center ${
                  darkMode 
                    ? 'border-gray-700 bg-dark hover:border-primary' 
                    : 'border-gray-200 bg-gray-50 hover:border-primary'
                }`}
              >
                <div className={`w-12 h-12 ${tech.color} rounded-lg mb-4 flex items-center justify-center mx-auto`}>
                  <span className="text-white">{tech.icon}</span>
                </div>
                <h3 className="font-semibold text-sm text-center">{tech.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured Projects
            </h2>
            <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Some of my recent work
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.name}
                className={`p-6 rounded-xl border-2 transition-all duration-300 hover:scale-105 ${
                  darkMode 
                    ? 'border-gray-700 bg-dark-secondary hover:border-primary' 
                    : 'border-gray-200 bg-white hover:border-primary'
                }`}
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                    <span className="text-sm text-primary font-medium">{project.type}</span>
                  </div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full hover:bg-primary/10 transition-colors duration-200"
                  >
                    <ExternalLink size={20} className="text-primary" />
                  </a>
                </div>
                
                <p className={`text-sm mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        darkMode 
                          ? 'bg-primary/20 text-primary' 
                          : 'bg-primary/10 text-primary'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-20 px-4 sm:px-6 lg:px-8 ${
        darkMode ? 'bg-dark-secondary' : 'bg-gray-50'
      }`}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Let's Work Together
          </h2>
          <p className={`text-lg mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            I'm always open to discussing new opportunities and interesting projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/cv"
              className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-secondary transition-colors duration-200"
            >
              View My CV
            </Link>
            <a
              href="mailto:pmgbao2004@gmail.com"
              className={`px-8 py-3 rounded-lg border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors duration-200`}
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
