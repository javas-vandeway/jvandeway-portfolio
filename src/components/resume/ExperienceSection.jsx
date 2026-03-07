import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Director of IT Operations & Application Development",
    company: "$5B Technology Company",
    period: "Present",
    description:
      "Leading IT operations and application development across the enterprise. Overseeing infrastructure reliability, software delivery, and digital transformation initiatives that directly impact revenue and operational efficiency.",
    highlights: [
      "Spearheading enterprise-wide digital transformation strategy",
      "Directing cross-functional teams across operations and development",
      "Driving operational excellence through automation and process optimization",
      "Managing multi-million dollar IT budgets and vendor relationships",
    ],
  },
  {
    role: "Senior IT Leadership Roles",
    company: "Progressive Career Growth",
    period: "Previous",
    description:
      "Built a career trajectory through increasingly responsible IT leadership positions, developing deep expertise in both technical operations and team management.",
    highlights: [
      "Scaled infrastructure to support rapid business growth",
      "Implemented ITIL and DevOps best practices",
      "Led cloud migration and modernization initiatives",
      "Established governance frameworks for application lifecycle management",
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 md:py-32 px-6 md:px-10 bg-secondary/40">
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
            <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-2">02</p>
            <h2 className="text-3xl md:text-4xl font-serif text-foreground">Experience</h2>
          </motion.div>

          {/* Content */}
          <div className="lg:col-span-8 space-y-16">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-serif font-semibold text-foreground mb-1">
                      {exp.role}
                    </h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                  </div>
                  <span className="text-sm tracking-widest uppercase text-muted-foreground mt-2 sm:mt-1 shrink-0">
                    {exp.period}
                  </span>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  {exp.description}
                </p>

                <ul className="space-y-3">
                  {exp.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 shrink-0" />
                      <span className="text-muted-foreground text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>

                {i < experiences.length - 1 && (
                  <div className="w-full h-[1px] bg-border mt-16" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}