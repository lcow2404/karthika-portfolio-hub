import { motion } from "framer-motion";
import { BriefcaseIcon } from "lucide-react";

const experiences = [
  {
    title: "Customer Service Representative",
    company: "Food Basics",
    location: "ON, Canada",
    period: "January 2024 - Present",
    description: [
      "Problem solving and Communication: Resolved customer issues efficiently",
      "Time Management and Multitasking: Balanced high volumes of customer service tasks",
    ],
  },
  {
    title: "Software Developer",
    company: "Wipro Ltd.",
    location: "Remote",
    period: "July 2021 - December 2023",
    description: [
      "Process Development: Developed the process flow for enhanced banking application",
      "Communication: Engaged with clients, delivering solutions including CTB",
      "Software Development and Automation: Developed automation scripts using Python and selenium",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center text-secondary mb-12"
        >
          Experience
        </motion.h2>
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="mb-10 bg-white p-6 rounded-lg shadow-lg"
            >
              <div className="flex items-center mb-4">
                <BriefcaseIcon className="w-6 h-6 text-[#000080] mr-2" />
                <h3 className="text-xl font-bold text-[#000080]">{exp.title}</h3>
              </div>
              <div className="mb-4">
                <p className="text-[#000080]">{exp.company}</p>
                <p className="text-sm text-gray-600">{exp.location} | {exp.period}</p>
              </div>
              <ul className="list-disc list-inside text-text">
                {exp.description.map((item, i) => (
                  <li key={i} className="mb-2">{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;