import React from "react";
import { motion } from "framer-motion";

const stats = [
  { number: "20+", label: "Years in IT Leadership" },
  { number: "$50M+", label: "M&A Integrations" },
  { number: "$16M+", label: "Annual Budget Managed" },
  { number: "1,500+", label: "Users Supported" },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-10">
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
            <p className="text-xs tracking-[0.3em] uppercase text-accent mb-2" style={{fontWeight: 300}}>01</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground">About</h2>
            <div className="w-8 h-[2px] bg-accent mt-4" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-8"
          >
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
              Director of IT with 20+ years of experience leading enterprise IT operations, application 
              development, cloud platforms, and security programs. Proven executive leader of global 
              onshore and near-shore teams delivering secure, highly available, and scalable technology 
              solutions.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10">
              Experienced in managing $16M+ budgets, leading M&A technology integrations, and aligning 
              IT strategy, governance, and roadmaps with business growth, risk management, and compliance. 
              Trusted partner to executive leadership with deep expertise in modernization, cloud migration, 
              ITSM maturity, DevOps enablement, and cybersecurity compliance (SOC 2, PCI).
            </p>

            {/* Key highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-border">
              {stats.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="p-5 rounded-xl bg-card border border-border hover:border-accent/40 transition-colors duration-300"
                >
                  <p className="text-3xl md:text-4xl font-semibold text-accent mb-1">
                    {item.number}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {item.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}