import React from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, MapPin, ArrowUpRight, Download } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 md:py-32 px-6 md:px-10 bg-card border-t border-border">
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
            <p className="text-xs tracking-[0.3em] uppercase text-accent mb-2" style={{fontWeight: 300}}>04</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground">Get in<br />Touch</h2>
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
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg mb-12">
              I'm always open to discussing new opportunities, strategic partnerships, 
              or ways technology can drive business value.
            </p>

            <div className="space-y-8">
              <a
                href="mailto:jvandeway@gmail.com"
                className="group flex items-center justify-between py-6 border-b border-border hover:border-accent/60 transition-colors duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                    <Mail className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-1" style={{fontWeight: 300}}>Email</p>
                    <p className="text-lg md:text-xl text-foreground">jvandeway@gmail.com</p>
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors duration-300" />
              </a>

              <a
                href="https://www.linkedin.com/in/jvandeway/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between py-6 border-b border-border hover:border-accent/60 transition-colors duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                    <Linkedin className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-1" style={{fontWeight: 300}}>LinkedIn</p>
                    <p className="text-lg md:text-xl text-foreground">linkedin.com/in/jvandeway</p>
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors duration-300" />
              </a>

              <div className="flex items-center gap-4 py-6">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-1" style={{fontWeight: 300}}>Location</p>
                  <p className="text-lg md:text-xl text-foreground">Fort Wayne, Indiana</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-6xl mx-auto mt-24 pt-8 border-t border-border">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs tracking-widest uppercase text-muted-foreground">
            © {new Date().getFullYear()} Javas Vandeway
          </p>
          <p className="text-xs text-muted-foreground">
            All rights reserved
          </p>
        </div>
      </div>
    </section>
  );
}