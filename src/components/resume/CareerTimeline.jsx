import React from "react";
import { motion } from "framer-motion";

const timelineData = [
  {
    year: "2025",
    role: "Director, IT Operations, App Dev & Sec Ops",
    company: "Trace3, LLC",
    location: "Irvine, CA",
    current: true,
  },
  {
    year: "2024",
    role: "Sr. Manager, IT Operations & App Dev",
    company: "Trace3, LLC",
    location: "Irvine, CA",
  },
  {
    year: "2021",
    role: "Technical Delivery Lead",
    company: "Bottle Rocket Studios, LLC",
    location: "Fort Wayne, IN",
  },
  {
    year: "2018",
    role: "Sr. Manager, IT Operations",
    company: "Frontier Communications, Inc.",
    location: "Fort Wayne, IN",
  },
  {
    year: "2015",
    role: "Manager, Enterprise Application Support",
    company: "Frontier Communications, Inc.",
    location: "Fort Wayne, IN",
  },
  {
    year: "2011",
    role: "IT Leadership & Engineering Roles",
    company: "Frontier Communications & Brotherhood Mutual",
    location: "Fort Wayne, IN",
  },
];

export default function CareerTimeline() {
  return (
    <section id="timeline" className="py-24 md:py-32 px-6 md:px-10">
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
            <p className="text-xs tracking-[0.3em] uppercase text-accent mb-2" style={{ fontWeight: 300 }}>06</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground">Career<br />Timeline</h2>
            <div className="w-8 h-[2px] bg-accent mt-4" />
            <p className="text-muted-foreground mt-4 leading-relaxed text-sm max-w-xs">
              20+ years of progressive leadership across IT operations, application development, and security.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="lg:col-span-8 relative">
            {/* Vertical line */}
            <div className="absolute left-[72px] top-0 bottom-0 w-[2px] bg-border" />

            <div className="space-y-0">
              {timelineData.map((item, i) => (
                <motion.div
                  key={item.year + item.role}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="relative flex items-start gap-6 pb-10 last:pb-0"
                >
                  {/* Year */}
                  <div className="w-[64px] shrink-0 text-right">
                    <span className="text-sm font-semibold text-accent">{item.year}</span>
                  </div>

                  {/* Dot */}
                  <div className="relative z-10 shrink-0 mt-1">
                    <div className={`w-4 h-4 rounded-full border-2 ${item.current ? "bg-accent border-accent" : "bg-background border-accent/50"}`} />
                    {item.current && (
                      <div className="absolute inset-0 rounded-full bg-accent/30 animate-ping" />
                    )}
                  </div>

                  {/* Content */}
                  <div className={`flex-1 p-5 rounded-xl border transition-all duration-300 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5 ${item.current ? "bg-accent/5 border-accent/30" : "bg-card border-border"}`}>
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
                      <div>
                        <h3 className="text-base font-medium text-foreground leading-snug">{item.role}</h3>
                        <p className="text-sm text-accent mt-0.5">{item.company}</p>
                      </div>
                      {item.current && (
                        <span className="text-xs px-2.5 py-1 rounded-full bg-accent text-accent-foreground font-medium shrink-0 self-start">
                          Current
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">{item.location}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}