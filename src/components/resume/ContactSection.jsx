import React from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, MapPin, ArrowUpRight } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 md:py-32 px-6 md:px-10 bg-primary text-primary-foreground">
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
            <p className="text-sm tracking-[0.3em] uppercase text-primary-foreground/60 mb-2">04</p>
            <h2 className="text-3xl md:text-4xl font-serif">Get in<br />Touch</h2>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-8"
          >
            <p className="text-lg md:text-xl text-primary-foreground/70 leading-relaxed max-w-lg mb-12">
              I'm always open to discussing new opportunities, strategic partnerships, 
              or ways technology can drive business value.
            </p>

            <div className="space-y-8">
              <a
                href="mailto:jvandeway@gmail.com"
                className="group flex items-center justify-between py-6 border-b border-primary-foreground/20 hover:border-primary-foreground/60 transition-colors duration-300"
              >
                <div className="flex items-center gap-4">
                  <Mail className="w-5 h-5 text-primary-foreground/60" />
                  <div>
                    <p className="text-xs tracking-[0.2em] uppercase text-primary-foreground/50 mb-1">Email</p>
                    <p className="text-lg md:text-xl">jvandeway@gmail.com</p>
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-primary-foreground/40 group-hover:text-primary-foreground transition-colors duration-300" />
              </a>

              <a
                href="https://www.linkedin.com/in/jvandeway/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between py-6 border-b border-primary-foreground/20 hover:border-primary-foreground/60 transition-colors duration-300"
              >
                <div className="flex items-center gap-4">
                  <Linkedin className="w-5 h-5 text-primary-foreground/60" />
                  <div>
                    <p className="text-xs tracking-[0.2em] uppercase text-primary-foreground/50 mb-1">LinkedIn</p>
                    <p className="text-lg md:text-xl">linkedin.com/in/jvandeway</p>
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-primary-foreground/40 group-hover:text-primary-foreground transition-colors duration-300" />
              </a>

              <div className="flex items-center gap-4 py-6">
                <MapPin className="w-5 h-5 text-primary-foreground/60" />
                <div>
                  <p className="text-xs tracking-[0.2em] uppercase text-primary-foreground/50 mb-1">Location</p>
                  <p className="text-lg md:text-xl">Fort Wayne, Indiana</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-6xl mx-auto mt-24 pt-8 border-t border-primary-foreground/10">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs tracking-widest uppercase text-primary-foreground/40">
            © {new Date().getFullYear()} Jason Vande Wey
          </p>
          <p className="text-xs text-primary-foreground/40">
            All rights reserved
          </p>
        </div>
      </div>
    </section>
  );
}