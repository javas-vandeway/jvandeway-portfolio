import React from "react";
import { motion } from "framer-motion";

const interests = [
  {
    emoji: "✈️",
    title: "Travel & Adventure",
    description:
      "Exploring new places, cultures, and perspectives fuels my curiosity and broadens the way I think. Whether it's a domestic road trip or an international adventure, travel reminds me how big — and connected — the world truly is.",
  },
  {
    emoji: "⚙️",
    title: "Technology Tinkering",
    description:
      "My curiosity doesn't stop at work. I love exploring emerging tech, building side projects, and staying ahead of what's coming next.",
  },
  {
    emoji: "📚",
    title: "Continuous Learning",
    description:
      "In a field where technology and business priorities evolve rapidly, staying curious and continually expanding knowledge is essential. I actively seek new perspectives, technologies, and leadership practices to better support the teams and organizations I serve. This commitment helps me guide teams through change and make thoughtful, informed decisions.",
  },
  {
    emoji: "🤝",
    title: "Giving Back",
    description:
      "Making a positive impact beyond the workplace matters deeply to me. Whether through financial support of causes I believe in or rolling up my sleeves to volunteer, I'm committed to strengthening the communities I'm a part of.",
  },
];

export default function BeyondSection() {
  return (
    <section id="beyond" className="py-24 md:py-32 px-6 md:px-10 bg-secondary/40">
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
            <p className="text-xs tracking-[0.3em] uppercase text-accent mb-2" style={{fontWeight: 300}}>05</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
              Beyond<br />the Office
            </h2>
            <div className="w-8 h-[2px] bg-accent mt-4" />
            <p className="text-muted-foreground mt-4 leading-relaxed text-sm max-w-xs">
              The person behind the title — what drives me, what grounds me, and what I'm passionate about outside of work.
            </p>
          </motion.div>

          {/* Cards */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {interests.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 border border-border rounded-xl hover:border-accent/40 transition-all duration-300 bg-card hover:shadow-lg hover:shadow-accent/5"
              >
                <span className="text-3xl mb-4 block">{item.emoji}</span>
                <h3 className="text-base font-medium text-foreground mb-2 tracking-wide">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}