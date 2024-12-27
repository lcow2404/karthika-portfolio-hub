import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-primary to-background py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="md:w-1/2 text-center md:text-left mb-10 md:mb-0"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-secondary mb-4">
            Hi, I'm Karthika Raj
          </h1>
          <h2 className="text-2xl md:text-3xl text-accent mb-6">
            Software Developer
          </h2>
          <p className="text-text text-lg mb-8">
            Passionate about creating efficient and innovative software solutions
          </p>
          <a
            href="#contact"
            className="bg-[#D6BCFA] hover:bg-[#9b87f5] text-white px-8 py-3 rounded-full transition-colors duration-300"
          >
            Get in Touch
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="md:w-1/2 flex justify-center"
        >
          <img
            src="/lovable-uploads/11ed75d3-c2e6-4497-9848-b82ea78fd883.png"
            alt="Karthika Raj"
            className="rounded-full w-64 h-64 object-cover border-4 border-secondary shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;