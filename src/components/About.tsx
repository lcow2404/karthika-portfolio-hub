import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center text-[#D6BCFA] mb-12"
        >
          About Me
        </motion.h2>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto text-text"
        >
          <div className="space-y-6">
            <p className="text-lg">
              Hello! I'm Karthika Raj, a passionate Software Developer with over three years of experience in designing, developing, and deploying robust software solutions. Currently, I am advancing my expertise through a Post-graduate Degree in Full Stack Software Development at Lambton College, Ottawa, where I've earned a GPA of 3.67/4 and a spot on the Dean's Honours List.
            </p>
            
            <p className="text-lg">
              My journey began with a Bachelor's degree in Electronics and Communication Engineering, which laid a solid foundation for my problem-solving and technical skills. Over three enriching years at Wipro Ltd., I honed my abilities in front-end and back-end development, contributing to transformative projects for global clients.
            </p>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-[#000080]">Technical Skills:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><span className="font-medium">Programming Languages:</span> Python (Proficient), Java (Proficient), JavaScript, C/C++</li>
                <li><span className="font-medium">Web Development:</span> React.js, Node.js, HTML, CSS, Angular, RESTful APIs</li>
                <li><span className="font-medium">Database Management:</span> SQL, MongoDB, PL/SQL, Automated ETL Processes</li>
                <li><span className="font-medium">Tools:</span> Kubernetes, MS Office, Diagram.io, Miro, Git</li>
                <li><span className="font-medium">Methodologies:</span> Process Development, SDLC, OOPs, DevOps</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-[#000080]">Education:</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium">Post-graduate Degree (Co-op) - Full Stack Software Development</h4>
                  <p>Lambton College, Ottawa, ON, Canada (January 2024– Present)</p>
                  <p className="italic">GPA: 3.67/4 (Dean's Honours list)</p>
                </div>
                <div>
                  <h4 className="font-medium">Bachelor of Technology - Electronics and Communication</h4>
                  <p>RGPV University, Bhopal, India (2017– 2021)</p>
                  <p className="italic">GPA: 8/10 (First Division with Honours)</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-8">
            <p className="text-[#000080] italic">Resume available upon request</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;