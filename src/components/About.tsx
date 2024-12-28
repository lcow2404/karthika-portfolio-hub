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
          <p className="text-lg mb-6">
            I am a Software Developer with a strong foundation in both front-end and back-end development. Currently pursuing a Post-graduate Degree in Full Stack Software Development at Lambton College with a GPA of 3.67/4, I bring hands-on experience from my role at Wipro Ltd.
          </p>
          <p className="text-lg mb-6">
            My technical expertise includes proficiency in Python and Java, along with experience in JavaScript, React.js, and Node.js. I'm passionate about creating efficient solutions and continuously learning new technologies.
          </p>
          <div className="flex justify-center mt-8">
            <p className="text-[#000080] italic">Resume available upon request</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;