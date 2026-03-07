import React from "react";
import { motion } from "framer-motion";
import { MapPin, Linkedin, Mail, ArrowDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 md:px-10 pt-20 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-accent/5 blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] rounded-full bg-accent/3 blur-3xl" />
        {/* Grid lines */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
            backgroundSize: "80px 80px"
          }}
        />
      </div>

      <div className="max-w-6xl w-full mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="order-2 lg:order-1"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-[750] text-foreground leading-[1.05] mb-4" style={{fontWeight: 750}}>
              Javas
              <br />
              <span className="gradient-text">Vandeway</span>
            </h1>

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-md mb-8 font-light" style={{fontWeight: 300}}>
              Director of IT Operations, App Dev & Sec Ops
              <span className="text-accent mx-2">·</span>
              20+ Years Leading Enterprise Technology
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://www.linkedin.com/in/jvandeway/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium hover:bg-accent/90 transition-all duration-300 shadow-lg shadow-accent/20"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
              <a
                href="mailto:jvandeway@gmail.com"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border text-muted-foreground hover:border-accent hover:text-foreground text-sm transition-all duration-300"
              >
                <Mail className="w-4 h-4" />
                Email Me
              </a>
              <div className="inline-flex items-center gap-2 px-3 py-2 text-muted-foreground text-sm">
                <MapPin className="w-4 h-4" />
                Fort Wayne, IN
              </div>
            </div>
          </motion.div>

          {/* Headshot Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Accent ring */}
              <div className="absolute -inset-3 rounded-2xl border border-accent/20" />
              <div className="absolute -inset-6 rounded-2xl border border-accent/10 hidden md:block" />
              {/* Accent corner decorations */}
              <div className="absolute -top-3 -right-3 w-6 h-6 border-t-2 border-r-2 border-accent rounded-tr-sm" />
              <div className="absolute -bottom-3 -left-3 w-6 h-6 border-b-2 border-l-2 border-accent rounded-bl-sm" />

              {/* Photo container */}
              <div className="w-64 h-80 md:w-80 md:h-[26rem] bg-card rounded-xl overflow-hidden relative glow-accent border border-border">
                <div className="absolute inset-0 flex flex-col items-center justify-center text-muted-foreground/50">
                  <div className="w-20 h-20 rounded-full bg-border/70 mb-4 flex items-center justify-center">
                    <span className="text-2xl font-semibold text-muted-foreground/40">JV</span>
                  </div>
                  <p className="text-xs tracking-widest uppercase">Your Headshot</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="hidden lg:flex justify-center mt-16"
        >
          <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-accent transition-colors group">
            <span className="text-xs tracking-[0.3em] uppercase">Explore</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <ArrowDown className="w-4 h-4" />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}