import React from "react";
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Leadership & Strategy",
    icon: "🎯",
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
    icon: "⚡",
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
    icon: "🛡️",
    skills: [
      "ITIL Framework",
      "Agile & Scrum Methodologies",
      "Incident & Change Management",
      "Business Continuity Planning",
      "Process Automation",
      "SOC 2 & PCI Compliance",
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
            <p className="text-xs tracking-[0.3em] uppercase text-accent font-medium mb-2">03</p>
            <h2 className="text-3xl md:text-4xl font-serif text-foreground">Skills &<br />Expertise</h2>
            <div className="w-8 h-[2px] bg-accent mt-4" />
          </motion.div>

          {/* Content */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {skillCategories.map((category, i) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="p-6 rounded-xl bg-card border border-border hover:border-accent/40 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5"
              >
                <div className="text-2xl mb-3">{category.icon}</div>
                <h3 className="text-sm font-semibold text-foreground mb-5 tracking-wide">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-2.5 py-1 rounded-full bg-secondary text-muted-foreground border border-border hover:border-accent/40 hover:text-foreground transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}