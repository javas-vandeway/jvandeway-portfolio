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
              I've spent over 20 years building and leading IT organizations through growth, change, and modernization. As a Director of IT, I've worked across infrastructure, application development, cloud, and security—building systems that are not just reliable and secure, but truly enable the business to move faster and smarter.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
              I believe the best technology teams are built on people first. I'm passionate about mentoring and developing talent, creating a culture of accountability, and giving teams the clarity and support they need to do their best work. When people are engaged and empowered, the results follow—better systems, stronger execution, and more meaningful impact.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10">
              My passion sits at the intersection of technology and business strategy. From cloud transformations and M&A integrations to evolving ITSM and DevOps practices, I focus on aligning technology with growth, risk, and long-term scalability. I've led multi-million dollar budgets and complex environments, and I partner closely with executive leadership to turn technology into a true driver of the business—while maintaining strong foundations in security and compliance, including SOC 2 and PCI.
            </p>

            {/* Key highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-border">
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