import React from "react";
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Leadership & Strategy",
    skills: [
      "IT Operations Management",
      "Digital Transformation",
      "Strategic Planning",
      "Team Building & Development",
      "Budget & Vendor Management",
      "Stakeholder Communication",
    ],
  },
  {
    title: "Technical Expertise",
    skills: [
      "Application Development",
      "Cloud Infrastructure (AWS / Azure)",
      "DevOps & CI/CD",
      "Enterprise Architecture",
      "System Integration",
      "Database Management",
    ],
  },
  {
    title: "Operational Excellence",
    skills: [
      "ITIL Framework",
      "Agile & Scrum Methodologies",
      "Incident & Change Management",
      "Business Continuity Planning",
      "Process Automation",
      "Security & Compliance",
    ],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4"
          >
            <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-2">03</p>
            <h2 className="text-3xl md:text-4xl font-serif text-foreground">Skills &<br />Expertise</h2>
          </motion.div>

          {/* Content */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-10">
            {skillCategories.map((category, i) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
              >
                <h3 className="text-sm tracking-[0.2em] uppercase font-semibold text-foreground mb-6">
                  {category.title}
                </h3>
                <ul className="space-y-3">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="text-muted-foreground text-sm leading-relaxed pl-4 border-l border-border hover:border-foreground hover:text-foreground transition-colors duration-300"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}