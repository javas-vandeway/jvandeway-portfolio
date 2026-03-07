import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Director, IT Operations, App Dev, & Sec Ops",
    company: "Trace3, LLC — Irvine, CA",
    period: "June 2025 – Present",
    description:
      "Provide executive leadership across IT Operations, Application Development, Cloud Infrastructure, Help Desk, and Security Operations, supporting enterprise-scale internal and customer-facing platforms across 9 locations and 1,500+ users.",
    highlights: [
      "Lead global onshore and near-shore teams delivering enterprise application support, integrations, and modernization initiatives.",
      "Own and manage a $16M annual IT Operations & Application Development budget, including forecasting, vendor strategy, contract negotiation, and cost optimization.",
      "Define and execute IT strategy, governance frameworks, and multi-year technology roadmaps aligned to business growth and risk management.",
      "Champion ITSM maturity, cybersecurity compliance, and operational excellence while building high-performing technical leadership teams.",
      "Led end-to-end technology integration for the 2025 acquisitions of Zivaro, LLC and Ivoxy, LLC, ensuring operational continuity, security alignment, and platform consolidation.",
    ],
  },
  {
    role: "Sr. Manager, IT Operations & App Dev",
    company: "Trace3, LLC — Irvine, CA",
    period: "April 2024 – June 2025",
    description:
      "Transformed Help Desk, Network, and Infrastructure teams into a high-performing IT delivery organization supporting 1,500+ remote and in-office users.",
    highlights: [
      "Established operational standards, service delivery metrics, and escalation models to improve responsiveness and customer satisfaction.",
      "Played a key leadership role in achieving Trace3's first SOC 2 Type II certification (2024).",
      "Partnered with executive leadership to improve operational maturity, security posture, and service reliability.",
    ],
  },
  {
    role: "Technical Delivery Lead",
    company: "Bottle Rocket Studios, LLC — Fort Wayne, IN",
    period: "December 2021 – April 2024",
    description:
      "Served as senior technical liaison between internal development teams and Fortune 500 clients, ensuring successful delivery of large-scale web and mobile initiatives.",
    highlights: [
      "Led cross-functional teams of ~20 technical and non-technical resources using agile delivery practices.",
      "Supported implementation of headless CMS platforms, API-driven architectures, and mobile applications (iOS / Android).",
    ],
  },
  {
    role: "Sr. Manager, IT Operations",
    company: "Frontier Communications, Inc. — Fort Wayne, IN",
    period: "May 2018 – December 2021",
    description:
      "Led multi-disciplinary teams supporting critical enterprise applications across multiple platforms.",
    highlights: [
      "Directed DevOps automation initiatives enabling CI/CD pipelines across .NET and Java-based enterprise applications.",
      "Led cloud migration of critical Windows applications to Microsoft Azure, improving scalability and resilience.",
      "Designed and implemented enterprise disaster recovery environments; successfully completed annual DR testing.",
      "Led PCI compliance certifications (2017–2020) for all payment-processing applications.",
    ],
  },
  {
    role: "Manager, Enterprise Application Support",
    company: "Frontier Communications, Inc. — Fort Wayne, IN",
    period: "February 2015 – May 2018",
    description:
      "Led a team of 35 senior systems analysts, developers, and engineers supporting Frontier's critical enterprise application infrastructure.",
    highlights: [
      "Directed 24/7 Level 2 and Level 3 support for business-critical platforms with strict availability and performance requirements.",
      "Implemented DevOps processes, automated monitoring, and proactive incident management to improve system stability.",
      "Led complex initiatives to modernize, scale, and harden enterprise applications, achieving 99.8% uptime across critical platforms.",
      "Designed and delivered monthly application integration workshops to elevate Level 1 support effectiveness.",
    ],
  },
  {
    role: "IT Leadership & Engineering Roles",
    company: "Frontier Communications, Inc. & Brotherhood Mutual Insurance",
    period: "January 2011 – February 2015",
    description:
      "Progressively advanced through senior technical and frontline leadership roles supporting enterprise application platforms, infrastructure, and data center operations.",
    highlights: [
      "Led nationwide application and server migrations, data center consolidations, and disaster recovery initiatives.",
      "Managed distributed teams and delivered high-availability environments across multiple geographic locations.",
      "Built foundational experience in enterprise infrastructure, application architecture, and operational resilience.",
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 md:py-32 px-6 md:px-10 bg-secondary/40">
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
            <p className="text-xs tracking-[0.3em] uppercase text-accent font-medium mb-2">02</p>
            <h2 className="text-3xl md:text-4xl font-serif text-foreground">Experience</h2>
            <div className="w-8 h-[2px] bg-accent mt-4" />
          </motion.div>

          {/* Content */}
          <div className="lg:col-span-8 space-y-16">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.role + exp.period}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: Math.min(i * 0.1, 0.3) }}
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 gap-2">
                  <div>
                    <h3 className="text-xl md:text-2xl font-serif font-semibold text-foreground mb-1">
                      {exp.role}
                    </h3>
                    <p className="text-muted-foreground text-sm">{exp.company}</p>
                  </div>
                  <span className="text-xs px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/20 shrink-0 mt-1 font-medium">
                    {exp.period}
                  </span>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-4 text-sm">
                  {exp.description}
                </p>

                <ul className="space-y-2">
                  {exp.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                      <span className="text-muted-foreground text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>

                {i < experiences.length - 1 && (
                  <div className="w-full h-[1px] bg-border mt-16" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}