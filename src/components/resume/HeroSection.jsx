import React from "react";
import { motion } from "framer-motion";
import { MapPin, Linkedin, Mail } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 md:px-10 pt-20"
    >
      <div className="max-w-6xl w-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-2 lg:order-1"
          >
            <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
              Fort Wayne, Indiana
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-semibold text-foreground leading-[1.05] mb-6">
              Javas<br />
              Vandeway
            </h1>
            <div className="w-16 h-[2px] bg-foreground mb-6" />
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-md mb-8">
              Director of IT Operations &<br />
              Application Development
            </p>
            <div className="flex items-center gap-6">
              <a
                href="https://www.linkedin.com/in/jvandeway/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                <Linkedin className="w-5 h-5" />
                <span className="text-sm tracking-wide hidden sm:inline">LinkedIn</span>
              </a>
              <a
                href="mailto:jvandeway@gmail.com"
                className="group flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                <Mail className="w-5 h-5" />
                <span className="text-sm tracking-wide hidden sm:inline">Email</span>
              </a>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-5 h-5" />
                <span className="text-sm tracking-wide hidden sm:inline">Fort Wayne, IN</span>
              </div>
            </div>
          </motion.div>

          {/* Headshot Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Decorative frame */}
              <div className="absolute -inset-4 border border-border/60 rounded-sm" />
              <div className="absolute -inset-8 border border-border/30 rounded-sm hidden md:block" />
              
              {/* Photo container */}
              <div className="w-64 h-80 md:w-80 md:h-[26rem] bg-muted rounded-sm overflow-hidden relative">
                {/* Placeholder for headshot */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-muted-foreground/60">
                  <div className="w-20 h-20 rounded-full bg-border/50 mb-4" />
                  <p className="text-xs tracking-widest uppercase">Headshot</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="hidden lg:flex justify-center mt-20"
        >
          <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <span className="text-xs tracking-[0.3em] uppercase">Scroll</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-[1px] h-8 bg-muted-foreground/40"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}