export default function Skills() {
    const skills = {
      "Frontend": ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      "Backend": ["Node.js", "Express", "MongoDB"],
      "Tools": ["Git", "VS Code", "Figma", "Postman"]
    };
  
    return (
      <section id="skills" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold mb-4 text-xl">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span 
                      key={skill}
                      className="bg-gray-100 px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }