"use client";

import { Github, Linkedin, ArrowDown, ExternalLink, Menu, X } from '../../node_modules/lucide-react';
import React, { useState } from 'react';
import Image from '../../node_modules/next/image';


const NavLink = ({ href, children, onLinkClick }: { href: string; children: React.ReactNode; onLinkClick?: () => void; }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = href.replace(/.*#/, "");
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
    
    if (onLinkClick) {
      onLinkClick();
    }
  };
  
  return (
    <a href={href} onClick={handleClick} className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-2">
      {children}
    </a>
  );
};


const SocialLink = ({ href, icon: Icon }: { href: string; icon: React.ElementType }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-500 transition-colors duration-300">
    <Icon size={24} />
  </a>
);

const SkillBadge = ({ name }: { name: string }) => (
  <span className="bg-gray-700/50 text-cyan-300 text-sm font-medium px-3 py-1 rounded-full border border-gray-600">
    {name}
  </span>
);

export default function PortfolioPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const projects = [
    {
      title: "Generator - Veritas Global",
      description: "A rapidly growing car warranty company that is expanding its technology.",
      tags: ["C#", ".NET", "Telerik", "API's", "Database", "Azure"],
      link: "#",
      image: "/images/veritasglobal.webp"
    },
    {
      title: "BSHP - Core4ce",
      description: "A Bio Surveillance Health Portal application to be used by Governments and Militaries around the world.",
      tags: ["React", "Next.js", "TypeScript", "Leaflet", "GraphQL", "CSS", "AWS"],
      link: "#",
      image: "/images/bshpcore4ce.avif"
    },
    {
      title: "Mobile App",
      description: "An ecommerce mobile app designed to sell any category of product with lots of customization options.",
      tags: ["Swift", "iOS", "XCode"],
      link: "#",
      image: "/images/ecommercemobileapp.png"
    }
  ];

  const handleMenuToggle = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);
  
  return (
    <div className="bg-gray-900 text-white font-sans leading-relaxed">
      <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Chad Lutz
          </a>

          <nav className="hidden md:flex items-center space-x-8">
            <NavLink href="#about">About</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#contact">Contact</NavLink>
            <a 
            href="/ChadLutz-Resume.pdf"
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
          >
            Resume
          </a>
          </nav>
          <button onClick={handleMenuToggle} className="md:hidden z-50">
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      <div className={`md:hidden fixed inset-0 bg-gray-900 z-40 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}>
        <nav className="flex flex-col items-center justify-center h-full text-2xl space-y-8">
          <NavLink href="#about" onLinkClick={closeMenu}>About</NavLink>
          <NavLink href="#projects" onLinkClick={closeMenu}>Projects</NavLink>
          <NavLink href="#contact" onLinkClick={closeMenu}>Contact</NavLink>
          <a 
            href="/ChadLutz-Resume.pdf"
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
            onClick={closeMenu}
          >
            Resume
          </a>
        </nav>
      </div>


      <main className={`${isMenuOpen ? 'blur-sm' : ''}`}>
        <section id="hero" className="min-h-screen flex items-center bg-grid-gray-800/20">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Creative Developer</span>
              <span className="block text-gray-300 mt-2">Crafting Digital Experiences</span>
            </h1>
            <p className="max-w-3xl mx-auto text-gray-400 text-lg md:text-xl my-8">
              I specialize in building beautiful, fast, and responsive web applications.
              From UI design to backend logic, I love turning complex problems into elegant solutions.
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="/ChadLutz-Resume.pdf"
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:scale-105 transform transition-transform duration-300"
              >
                Resume
              </a>
              <a
                href="#projects"
                className="bg-gray-700/50 border border-gray-600 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-gray-700 transition-colors duration-300"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="bg-gray-700/50 border border-gray-600 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-gray-700 transition-colors duration-300"
              >
                Get In Touch
              </a>
            </div>
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
                <a href="#about" aria-label="Scroll down">
                    <ArrowDown className="w-8 h-8 text-gray-500 animate-bounce" />
                </a>
            </div>
          </div>
        </section>

        <section id="about" className="py-20 md:py-32 bg-gray-900">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-5 gap-12 items-center">
              <div className="md:col-span-2">
                <Image 
                  src="/images/portrait.jpg" 
                  alt="A portrait of the developer" 
                  width={400}
                  height={400}
                  className="rounded-full w-64 h-64 mx-auto md:w-full md:h-auto md:max-w-sm border-4 border-gray-700 shadow-xl"
                />
              </div>
              <div className="md:col-span-3">
                <h2 className="text-4xl font-bold mb-4">About Me</h2>
                <p className="text-gray-400 text-lg mb-6">
                  Hello! I&apos;m a passionate developer with a knack for creating dynamic and user-friendly web interfaces. With a background in both design and development, I bridge the gap between aesthetics and functionality. My goal is to always build products that provide a great user experience while being scalable and maintainable.
                </p>
                <p className="text-gray-400 text-lg mb-8">
                  When I&apos;m not coding, you can find me exploring the latest tech trends, contributing to open-source projects, or seeing new sights.
                </p>
                <div className="flex flex-wrap gap-3">
                    <SkillBadge name="TypeScript" />
                    <SkillBadge name="React / Next.js" />
                    <SkillBadge name="Node.js" />
                    <SkillBadge name="Python" />
                    <SkillBadge name="C#" />
                    <SkillBadge name=".NET" />
                    <SkillBadge name="UI/UX Design" />
                    <SkillBadge name="Databases" />
                    <SkillBadge name="DevOps" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="py-20 md:py-32 bg-gray-800/50 bg-grid-gray-700/20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold">Featured Projects</h2>
              <p className="text-gray-400 text-lg mt-2">A selection of my recent work.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div key={index} className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 transform hover:-translate-y-2 transition-transform duration-300 shadow-lg">
                  <div className="relative w-full h-48">
                    <Image 
                        src={project.image} 
                        alt={project.title} 
                        fill={true}
                        className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-400 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map(tag => <SkillBadge key={tag} name={tag} />)}
                    </div>
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold">
                      View Project <ExternalLink className="ml-2" size={18} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 md:py-32">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold">Get In Touch</h2>
            <p className="text-gray-400 text-lg mt-2 mb-8 max-w-2xl mx-auto">
              I&apos;m currently open to new opportunities and collaborations. Feel free to reach out if you have a project in mind!
            </p>
            <a 
              href="mailto:chadlutz2@gmail.com" 
              className="inline-block bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold text-xl px-10 py-4 rounded-lg shadow-lg hover:scale-105 transform transition-transform duration-300"
            >
              chadlutz2@gmail.com
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800/50 border-t border-gray-700 py-8">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">&copy; {new Date().getFullYear()} Chad Lutz. All Rights Reserved.</p>
          <div className="flex space-x-6">
            <SocialLink href="https://github.com/chadlutz" icon={Github} />
            <SocialLink href="https://www.linkedin.com/in/chadlutz" icon={Linkedin} />
          </div>
        </div>
      </footer>
      <style jsx global>{`
        .bg-grid-gray-800\\/20 {
          background-image: linear-gradient(rgba(31, 41, 55, 0.05) 1px, transparent 1px), linear-gradient(to right, rgba(31, 41, 55, 0.05) 1px, transparent 1px);
          background-size: 2rem 2rem;
        }
        
        body {
          overflow: ${isMenuOpen ? 'hidden' : 'auto'};
        }
      `}</style>
    </div>
  );
}