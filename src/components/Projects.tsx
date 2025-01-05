import { motion } from "framer-motion";
import { GithubIcon } from "lucide-react";

const projects = [
  {
    title: "BlendMaster",
    description: "A comprehensive webapp for blend enthusiasts built from scratch using HTML, CSS, and JS. Features version control and team collaboration using Github.",
    tech: ["HTML", "CSS", "JavaScript", "Github"],
    image: "/lovable-uploads/729c0c52-71f9-4423-b9b2-ddd7464786db.png"
  },
  {
    title: "Insta 2.0",
    description: "An Instagram clone built with React.JS and Chakra UI. Includes user authentication, image uploading, and major Instagram features.",
    tech: ["React.js", "Chakra UI", "Authentication"],
    image: "/lovable-uploads/01c0df75-08e4-4cd0-a4f8-8e00256b5fb8.png"
  },
  {
    title: "Transcriptify",
    description: "A speech-to-text converter application that transforms spoken words into written text in real-time. Built with React and Web Speech API.",
    tech: ["React.js", "Web Speech API", "Tailwind CSS"],
    image: "/lovable-uploads/0c5aecb5-0a61-4fc7-87f6-a51cd4a3fcc5.png"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center text-[#D6BCFA] mb-12"
        >
          Projects
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-bold text-[#000080] mb-4">{project.title}</h3>
              {project.image && (
                <div className="mb-4 overflow-hidden rounded-lg">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              <p className="text-text mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-primary text-secondary px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href="https://github.com/lcow2404"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-[#000080] hover:text-secondary transition-colors"
              >
                <GithubIcon className="w-5 h-5 mr-2" />
                View on GitHub
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;