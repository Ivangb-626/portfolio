import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/98 backdrop-blur shadow-md z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            Iván González Blázquez
          </Link>
          <ul className="flex gap-6">
            <li><Link href="#about" className="hover:text-blue-600 transition">About</Link></li>
            <li><Link href="#skills" className="hover:text-blue-600 transition">Skills</Link></li>
            <li><Link href="#education" className="hover:text-blue-600 transition">Education</Link></li>
            <li><Link href="#projects" className="hover:text-blue-600 transition">Projects</Link></li>
            <li><Link href="#contact" className="hover:text-blue-600 transition">Contact</Link></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 text-white pt-20">
        <div className="text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
            Hi, I'm <span className="text-blue-400">Iván González Blázquez</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8">
            Software Developer | Full-Stack Engineer | Based in Spain 🇪🇸
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="#projects" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition transform hover:-translate-y-1">
              View My Work
            </Link>
            <Link href="#contact" className="border-2 border-white hover:bg-white hover:text-slate-900 text-white px-8 py-3 rounded-lg font-semibold transition">
              Get In Touch
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-12">About Me</h2>
          <p className="text-lg text-slate-600 mb-6 leading-relaxed">
            I'm a passionate software developer based in Spain with a strong foundation in computer science and a drive to build elegant solutions to complex problems. 
            My journey in programming started during my university studies, and I've been hooked ever since.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed">
            I specialize in building scalable web applications using modern technologies like React, Next.js, Node.js, and Python. 
            I'm particularly interested in full-stack development, clean architecture, and creating user-centric products. 
            When I'm not coding, you can find me exploring new tech trends, contributing to open source, or working on personal projects.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Technical Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <SkillCard 
              title="Languages" 
              skills={['JavaScript', 'TypeScript', 'Python', 'Java', 'SQL']} 
            />
            <SkillCard 
              title="Frontend" 
              skills={['React', 'Next.js', 'Vue.js', 'Tailwind CSS', 'HTML5/CSS3']} 
            />
            <SkillCard 
              title="Backend" 
              skills={['Node.js', 'Express', 'Django', 'PostgreSQL', 'MongoDB']} 
            />
            <SkillCard 
              title="Tools & DevOps" 
              skills={['Git', 'Docker', 'AWS', 'Linux', 'CI/CD', 'Vercel']} 
            />
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Education</h2>
          
          <div className="bg-white p-8 rounded-xl shadow-lg mb-6 border-l-4 border-blue-600">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Bachelor's Degree in Computer Science</h3>
            <p className="text-blue-600 font-semibold mb-3">University Name | Madrid, Spain | 20XX - 20XX</p>
            <p className="text-slate-600">
              Relevant coursework: Data Structures & Algorithms, Software Engineering, Database Systems, 
              Operating Systems, Computer Networks, Web Development, Artificial Intelligence, Machine Learning
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-blue-600">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Certifications & Courses</h3>
            <ul className="space-y-2 text-slate-600">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>[Certification Name] - [Issuing Organization] (Year)</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>[Certification Name] - [Issuing Organization] (Year)</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>[University Course Name] - [Platform/Institution] (Year)</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="E-Commerce Platform"
              tech="Next.js • TypeScript • Stripe • PostgreSQL"
              description="A full-stack e-commerce solution with real-time inventory management, secure payment processing via Stripe, and an admin dashboard for managing products and orders."
            />
            <ProjectCard
              title="Task Management Application"
              tech="React • Node.js • MongoDB • Socket.io"
              description="Collaborative task manager with real-time updates using WebSockets, team workflows, drag-and-drop interface, and progress tracking analytics."
            />
            <ProjectCard
              title="RESTful API with Authentication"
              tech="Python • FastAPI • JWT • PostgreSQL"
              description="Secure RESTful API with JWT authentication, role-based access control, automated testing, and comprehensive API documentation using Swagger/OpenAPI."
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">Get In Touch</h2>
          <p className="text-lg text-slate-600 mb-8">
            I'm currently open to job opportunities and collaborative projects. 
            Whether you have a question, a job opportunity, or just want to connect, feel free to reach out!
          </p>
          <div className="space-y-4">
            <a 
              href="mailto:your.email@example.com" 
              className="block bg-slate-100 hover:bg-blue-600 hover:text-white transition p-4 rounded-lg font-semibold"
            >
              📧 your.email@example.com
            </a>
            <a 
              href="https://linkedin.com/in/yourprofile" 
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-slate-100 hover:bg-blue-600 hover:text-white transition p-4 rounded-lg font-semibold"
            >
              💼 LinkedIn
            </a>
            <a 
              href="https://github.com/yourusername" 
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-slate-100 hover:bg-blue-600 hover:text-white transition p-4 rounded-lg font-semibold"
            >
              🐙 GitHub
            </a>
            <p className="text-slate-500 text-sm mt-4">
              📍 Based in Madrid, Spain | Open to remote & relocation opportunities
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8 text-center">
        <p>&copy; 2026 Iván González Blázquez. Built with ☕ and Next.js.</p>
      </footer>
    </main>
  );
}

function SkillCard({ title, skills }: { title: string; skills: string[] }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
      <h3 className="text-xl font-bold text-slate-900 mb-4">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span 
            key={skill} 
            className="bg-slate-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium border border-slate-200"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ title, tech, description }: { title: string; tech: string; description: string }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all">
      <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
      <p className="text-blue-600 font-semibold text-sm mb-3">{tech}</p>
      <p className="text-slate-600 mb-4 leading-relaxed">{description}</p>
      <div className="flex gap-2">
        <a href="#" className="text-blue-600 hover:text-blue-700 font-medium text-sm">View Code →</a>
        <a href="#" className="text-blue-600 hover:text-blue-700 font-medium text-sm">Live Demo →</a>
      </div>
    </div>
  );
}
