import { motion, useScroll, useTransform } from "framer-motion";
import { Download, Mail, MapPin, Calendar, Code, Languages, Star, Briefcase, Send, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import bernardoImage from "@/assets/bernardo-3.jpg";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { SkillBar } from "@/components/SkillBar";
import { TimelineItem } from "@/components/TimelineItem";
import { ProjectCard } from "@/components/ProjectCard";
import { useRef } from "react";

const Index = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  const experiences = [
    {
      title: "General Supervisor",
      company: "Santa Group",
      period: "2023 - 2025",
      responsibilities: [
        "Led and managed a complete sales team, orchestrating strategic operations",
        "Conducted strategic meetings to optimize team performance",
        "Designed promotional campaigns that boosted sales significantly",
        "Managed team roster and performance evaluations",
        "Exceeded daily targets: achieved 6k pounds against 5k goal",
      ],
    },
    {
      title: "Intern",
      company: "Tuga Shoes (Portuguese Store)",
      period: "Villerupt, France",
      responsibilities: [
        "Developed organizational systems and efficiency protocols",
        "Provided comprehensive operational support",
        "Collaborated in team-based retail environment",
      ],
    },
  ];

  const projects = [
    {
      title: "Volunteer to Professional",
      description: "Started as a volunteer at Santa Group before being promoted to General Supervisor",
      icon: Briefcase,
    },
    {
      title: "Design Creation",
      description: "Develop creative designs and visual solutions for various projects",
      icon: Code,
    },
    {
      title: "Personal Development",
      description: "Working on multiple personal tech projects to expand skills",
      icon: Star,
    },
    {
      title: "Fitness & Wellness",
      description: "Regular gym training with friends, focusing on discipline",
      icon: Star,
    },
    {
      title: "Team Collaboration",
      description: "Active participation in collaborative team projects",
      icon: Briefcase,
    },
    {
      title: "Professional Internship",
      description: "Completed internship at Tuga Shoes, gaining retail experience",
      icon: Briefcase,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted overflow-x-hidden">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
        <AnimatedBackground />

        {/* Gradient orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px]"
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 50, 0],
              y: [0, 30, 0],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px]"
            animate={{
              scale: [1.2, 1, 1.2],
              x: [0, -50, 0],
              y: [0, -30, 0],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <motion.div style={{ opacity, scale }} className="relative z-10 max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src={bernardoImage}
                alt="Bernardo De Oliveira Cego"
                className="w-48 h-48 mx-auto rounded-full object-cover border-4 border-primary shadow-[0_0_40px_rgba(107,91,255,0.5)] mb-8 hover:shadow-[0_0_60px_rgba(107,91,255,0.8)] transition-all duration-300"
              />
            </motion.div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-6xl md:text-8xl font-bold font-space mb-6 animate-glow"
          >
            Bernardo De Oliveira Cego
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <p className="text-2xl md:text-3xl text-primary font-space mb-4">
              Future Developer • Team Leader • Tech Creator
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12"
          >
            Transforming vision into reality through code, leadership, and relentless innovation
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-space text-lg px-8 shadow-[0_0_20px_rgba(107,91,255,0.4)] hover:shadow-[0_0_30px_rgba(107,91,255,0.6)] transition-all"
              >
                <Download className="mr-2" />
                Download CV
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-space text-lg px-8 transition-all"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Mail className="mr-2" />
                Contact Me
              </Button>
            </motion.div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 -ml-4"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-8 h-12 border-2 border-primary/50 rounded-full flex justify-center pt-2">
              <motion.div
                className="w-2 h-2 bg-primary rounded-full"
                animate={{ y: [0, 16, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-24 px-4" id="about">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-5xl font-bold font-space text-center mb-4 text-gradient">About Me</h2>
          <motion.div
            className="h-1 bg-primary mx-auto mb-12"
            initial={{ width: 0 }}
            whileInView={{ width: "6rem" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          />

          <motion.div whileHover={{ scale: 1.01 }} transition={{ duration: 0.3 }}>
            <Card className="glass-card p-8 md:p-12 group hover:border-primary/50 transition-all duration-300">
              <div className="flex items-center gap-2 text-muted-foreground mb-6">
                <MapPin className="w-5 h-5 text-primary group-hover:animate-pulse" />
                <span>Herserange, France</span>
                <span className="mx-2">•</span>
                <Calendar className="w-5 h-5 text-primary group-hover:animate-pulse" />
                <span>Born September 20, 2008 (17 years old)</span>
              </div>

              <p className="text-lg leading-relaxed mb-6">
                I'm a 17-year-old aspiring developer with a clear goal: to become an exceptional professional in the tech industry.
                Born and raised in France with strong Portuguese roots, I've developed a unique international perspective that shapes
                my approach to problem-solving and collaboration.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                What sets me apart is my natural leadership ability and proven track record in team management. At a young age,
                I've demonstrated maturity beyond my years, successfully leading teams, optimizing performance, and achieving
                ambitious goals. My experience spans from managing sales teams to creating innovative designs and developing projects.
              </p>

              <p className="text-lg leading-relaxed">
                I thrive in collaborative environments where I can combine my technical skills with my passion for organization
                and excellence. Whether it's developing software, designing solutions, or training at the gym with friends,
                I approach every challenge with dedication, focus, and a commitment to continuous improvement.
              </p>
            </Card>
          </motion.div>
        </motion.div>
      </section>

      {/* Experience Timeline */}
      <section className="py-24 px-4 bg-muted/30" id="experience">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-5xl font-bold font-space text-center mb-4 text-gradient">Professional Experience</h2>
          <motion.div
            className="h-1 bg-primary mx-auto mb-16"
            initial={{ width: 0 }}
            whileInView={{ width: "6rem" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <TimelineItem key={index} {...exp} index={index} />
            ))}
          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="py-24 px-4" id="skills">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-5xl font-bold font-space text-center mb-4 text-gradient">Skills & Expertise</h2>
          <motion.div
            className="h-1 bg-primary mx-auto mb-16"
            initial={{ width: 0 }}
            whileInView={{ width: "6rem" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          />

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            {/* Technical Skills with animated bars */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold font-space mb-6 flex items-center gap-3">
                <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                  <Code className="text-primary" />
                </motion.div>
                Technical Skills
              </h3>
              <SkillBar skill="Canva" level={90} delay={0} />
              <SkillBar skill="Visual Studio" level={85} delay={0.1} />
              <SkillBar skill="Python" level={75} delay={0.2} />
              <SkillBar skill="Excel" level={80} delay={0.3} />
            </motion.div>

            {/* Soft Skills */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold font-space mb-6 flex items-center gap-3">
                <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                  <Star className="text-primary" />
                </motion.div>
                Soft Skills
              </h3>
              <div className="flex flex-wrap gap-3">
                {[
                  'Dedicated',
                  'Serious',
                  'Team Player',
                  'Demanding',
                  'Organized',
                  'Responsible',
                  'Great Communication',
                ].map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -5 }}
                  >
                    <Badge className="text-lg px-6 py-3 bg-secondary hover:bg-primary hover:text-primary-foreground transition-all cursor-pointer">
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold font-space mb-6 flex items-center gap-3">
              <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                <Languages className="text-primary" />
              </motion.div>
              Languages
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { lang: 'Portuguese (PT)', level: 'Native', flag: '🇵🇹' },
                { lang: 'Portuguese (BR)', level: 'Near Native', flag: '🇧🇷' },
                { lang: 'French', level: 'Native', flag: '🇫🇷' },
                { lang: 'English', level: 'B1', flag: '🇬🇧' },
              ].map((item, index) => (
                <motion.div
                  key={item.lang}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.05 }}
                >
                  <Card className="glass-card p-4 text-center hover:border-primary/50 transition-all cursor-pointer">
                    <motion.div
                      className="text-4xl mb-2"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                    >
                      {item.flag}
                    </motion.div>
                    <p className="font-semibold">{item.lang}</p>
                    <p className="text-sm text-muted-foreground">{item.level}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section className="py-24 px-4 bg-muted/30" id="projects">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-5xl font-bold font-space text-center mb-4 text-gradient">Projects & Activities</h2>
          <motion.div
            className="h-1 bg-primary mx-auto mb-16"
            initial={{ width: 0 }}
            whileInView={{ width: "6rem" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} {...project} index={index} />
            ))}
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-4" id="contact">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-5xl font-bold font-space text-center mb-4 text-gradient">Get In Touch</h2>
          <motion.div
            className="h-1 bg-primary mx-auto mb-16"
            initial={{ width: 0 }}
            whileInView={{ width: "6rem" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          />

          <motion.div whileHover={{ scale: 1.01 }} transition={{ duration: 0.3 }}>
            <Card className="glass-card p-8 md:p-12 hover:border-primary/50 transition-all duration-300">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div whileHover={{ scale: 1.02 }} whileFocus={{ scale: 1.02 }}>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <Input
                      placeholder="Your name"
                      className="bg-background/50 border-primary/30 focus:border-primary transition-all"
                    />
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.02 }} whileFocus={{ scale: 1.02 }}>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input
                      type="email"
                      placeholder="your.email@example.com"
                      className="bg-background/50 border-primary/30 focus:border-primary transition-all"
                    />
                  </motion.div>
                </div>

                <motion.div whileHover={{ scale: 1.02 }} whileFocus={{ scale: 1.02 }}>
                  <label className="block text-sm font-medium mb-2">Subject</label>
                  <Input
                    placeholder="What's this about?"
                    className="bg-background/50 border-primary/30 focus:border-primary transition-all"
                  />
                </motion.div>

                <motion.div whileHover={{ scale: 1.02 }} whileFocus={{ scale: 1.02 }}>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <Textarea
                    placeholder="Your message..."
                    rows={6}
                    className="bg-background/50 border-primary/30 focus:border-primary transition-all resize-none"
                  />
                </motion.div>

                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-space text-lg shadow-[0_0_20px_rgba(107,91,255,0.4)] hover:shadow-[0_0_30px_rgba(107,91,255,0.6)] transition-all"
                  >
                    <Send className="mr-2" />
                    Send Message
                  </Button>
                </motion.div>
              </form>

              <div className="mt-12 pt-8 border-t border-border">
                <div className="flex flex-wrap justify-center gap-6 text-muted-foreground">
                  <motion.div
                    className="flex items-center gap-2"
                    whileHover={{ scale: 1.1, color: "hsl(248, 73%, 68%)" }}
                  >
                    <MapPin className="w-5 h-5 text-primary" />
                    <span>Herserange, France</span>
                  </motion.div>
                </div>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-border">
        <div className="max-w-6xl mx-auto text-center">
          <motion.p
            className="text-lg font-space mb-2"
            whileHover={{ scale: 1.05, color: "hsl(248, 73%, 68%)" }}
          >
            Bernardo De Oliveira Cego
          </motion.p>
          <p className="text-muted-foreground">© 2025 • Designed with cutting-edge technology</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
