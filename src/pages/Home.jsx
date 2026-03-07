import React from "react";
import { ThemeProvider } from "../components/resume/ThemeContext";
import Navigation from "../components/resume/Navigation";
import HeroSection from "../components/resume/HeroSection";
import AboutSection from "../components/resume/AboutSection";
import ExperienceSection from "../components/resume/ExperienceSection";
import SkillsSection from "../components/resume/SkillsSection";
import BeyondSection from "../components/resume/BeyondSection";
import CareerTimeline from "../components/resume/CareerTimeline";
import ContactSection from "../components/resume/ContactSection";

export default function Home() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background">
        <Navigation />
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <BeyondSection />
        <CareerTimeline />
        <ContactSection />
      </div>
    </ThemeProvider>
  );
}