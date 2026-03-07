import React from "react";
import { motion } from "framer-motion";

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
            <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-2">01</p>
            <h2 className="text-3xl md:text-4xl font-serif text-foreground">About</h2>
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
              Results-driven IT executive with extensive experience leading operations and application 
              development at enterprise scale. Currently serving as Director of IT Operations and 
              Application Development for a $5 billion technology company, where I oversee critical 
              infrastructure, drive digital transformation, and deliver solutions that power business growth.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              I bring a unique blend of strategic vision and hands-on technical expertise, with a passion 
              for building high-performing teams, optimizing processes, and leveraging technology to solve 
              complex business challenges.
            </p>

            {/* Key highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8 border-t border-border">
              {[
                { number: "$5B+", label: "Company Revenue" },
                { number: "15+", label: "Years in IT Leadership" },
                { number: "100+", label: "Team Members Led" },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                >
                  <p className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-1">
                    {item.number}
                  </p>
                  <p className="text-sm text-muted-foreground tracking-wide">
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