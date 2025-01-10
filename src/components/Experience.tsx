import { motion } from "framer-motion";
import { BriefcaseIcon } from "lucide-react";

const experiences = [
  {
    title: "Software Developer",
    company: "Wipro Ltd.",
    location: "India",
    period: "July 2021 - December 2023",
    description: [
      "Enhanced Operational Efficiency: Streamlined processes for a leading UK financial services organization by designing and deploying Python-based automation scripts, reducing manual intervention by 30 percent.",
      "Business Application Integration: Led the development of key modules in an enhanced banking application using Java and REST APIs, improving customer satisfaction scores by 15 percent.",
      "Data Management: Engineered automated ETL pipelines in SQL and PL/SQL to extract, transform, and load customer data, accelerating reporting efficiency by 25 percent.",
      "Client Collaboration: Delivered actionable insights through weekly status reports and technical demonstrations, strengthening client relationships and ensuring alignment with project objectives.",
      "Unit Testing and Documentation: Conducted unit testing for all policies and covers, ensuring functionality and accuracy. Documented test cases and results to facilitate project handovers and knowledge sharing.",
    ],
  },
  {
    title: "Software Developer",
    company: "Bhopal",
    location: "India",
    period: "2017 - 2021",
    description: [
      "Developed and maintained software applications using various programming languages and frameworks",
      "Collaborated with cross-functional teams to deliver high-quality software solutions",
      "Participated in code reviews and implemented best practices for software development",
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