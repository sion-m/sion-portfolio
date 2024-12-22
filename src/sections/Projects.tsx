export default function Projects() {
  const projects = [
    {
      title: "프로젝트 1",
      description: "Next.js와 TypeScript를 활용한 웹 애플리케이션",
      tech: ["Next.js", "TypeScript", "Tailwind CSS"],
      image: "/profile-img.png",
      link: "https://project1-url.com"
    },
    {
      title: "프로젝트 2",
      description: "React를 이용한 실시간 채팅 애플리케이션",
      tech: ["React", "Socket.io", "Node.js"],
      image: "/profile-img.png",
      link: "https://project2-url.com"
    },
    {
      title: "프로젝트 3",
      description: "반응형 포트폴리오 웹사이트",
      tech: ["HTML", "CSS", "JavaScript"],
      image: "/profile-img.png",
      link: "https://project3-url.com"
    },
    {
      title: "프로젝트 4",
      description: "반응형 포트폴리오 웹사이트",
      tech: ["HTML", "CSS", "JavaScript"],
      image: "/profile-img.png",
      link: "https://project3-url.com"
    },
    {
      title: "프로젝트 5",
      description: "반응형 포트폴리오 웹사이트",
      tech: ["HTML", "CSS", "JavaScript"],
      image: "/profile-img.png",
      link: "https://project3-url.com"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-white">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <a 
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer" 
              className="group block h-full"
            >
              <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-gray-700 border border-gray-700 h-full flex flex-col">
                <div className="relative h-48 overflow-hidden flex-shrink-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-semibold">View Project</span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                  <p className="text-gray-400 mb-4 flex-grow">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech}
                        className="bg-gray-900 text-gray-300 px-2 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}