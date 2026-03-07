import React from "react";
import { motion } from "framer-motion";

const timelineData = [
  { year: "2011", role: "IT Leadership & Engineering", company: "Frontier Communications & Brotherhood Mutual" },
  { year: "2015", role: "Manager, Enterprise App Support", company: "Frontier Communications" },
  { year: "2018", role: "Sr. Manager, IT Operations", company: "Frontier Communications" },
  { year: "2021", role: "Technical Delivery Lead", company: "Bottle Rocket Studios" },
  { year: "2024", role: "Sr. Manager, IT Ops & App Dev", company: "Trace3, LLC" },
  { year: "2025", role: "Director, IT Ops, App Dev & Sec Ops", company: "Trace3, LLC", current: true },
];

export default function CareerTimeline() {
  return (
    <section id="timeline" className="py-16 px-6 md:px-10 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-accent mb-2" style={{ fontWeight: 300 }}>Career Journey</p>
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground">20+ Years of Progressive Leadership</h2>
          <div className="w-8 h-[2px] bg-accent mt-4 mx-auto" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Horizontal line */}
          <div className="absolute top-[28px] left-0 right-0 h-[2px] bg-border" />

          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {timelineData.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative flex flex-col items-center text-center"
              >
                {/* Dot */}
                <div className="relative z-10 mb-4">
                  <div className={`w-7 h-7 rounded-full border-2 flex items-center justify-center ${item.current ? "bg-accent border-accent" : "bg-background border-accent/50"}`}>
                    {item.current && <div className="w-2 h-2 rounded-full bg-accent-foreground" />}
                  </div>
                  {item.current && (
                    <div className="absolute inset-0 rounded-full bg-accent/30 animate-ping" />
                  )}
                </div>

                {/* Content */}
                <span className="text-sm font-bold text-accent mb-1">{item.year}</span>
                <p className="text-xs font-medium text-foreground leading-snug mb-1">{item.role}</p>
                <p className="text-xs text-muted-foreground leading-snug">{item.company}</p>
                {item.current && (
                  <span className="mt-2 text-xs px-2 py-0.5 rounded-full bg-accent text-accent-foreground font-medium">Now</span>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}