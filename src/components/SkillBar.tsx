import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface SkillBarProps {
  skill: string;
  level: number;
  delay?: number;
}

export const SkillBar = ({ skill, level, delay = 0 }: SkillBarProps) => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById(`skill-${skill}`);
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [skill]);

  return (
    <div id={`skill-${skill}`} className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="font-space font-medium">{skill}</span>
        <span className="text-primary font-semibold">{level}%</span>
      </div>
      <div className="h-3 bg-secondary rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-primary to-accent rounded-full relative overflow-hidden"
          initial={{ width: 0 }}
          animate={{ width: inView ? `${level}%` : 0 }}
          transition={{ duration: 1, delay, ease: "easeOut" }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            animate={{ x: ["-100%", "200%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>
      </div>
    </div>
  );
};
