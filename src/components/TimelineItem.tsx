import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

interface TimelineItemProps {
  title: string;
  company: string;
  period: string;
  responsibilities: string[];
  index: number;
}

export const TimelineItem = ({
  title,
  company,
  period,
  responsibilities,
  index,
}: TimelineItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="relative"
    >
      {/* Timeline connector */}
      <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/30 hidden md:block" />
      
      {/* Timeline dot */}
      <motion.div
        className="absolute left-1/2 top-8 -ml-4 w-8 h-8 rounded-full bg-primary border-4 border-background z-10 hidden md:flex items-center justify-center"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
      >
        <Briefcase className="w-4 h-4 text-primary-foreground" />
      </motion.div>

      {/* Content */}
      <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:ml-auto md:pl-12'}`}>
        <motion.div
          whileHover={{ scale: 1.02, y: -5 }}
          transition={{ duration: 0.3 }}
        >
          <Card className="glass-card p-6 hover:border-primary/50 transition-all duration-300 group">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
              <Briefcase className="w-4 h-4 text-primary group-hover:animate-pulse" />
              <span>{period}</span>
            </div>
            <h3 className="text-2xl font-bold font-space text-primary mb-2 group-hover:text-accent transition-colors">
              {title}
            </h3>
            <p className="text-lg text-foreground mb-4 font-medium">{company}</p>

            <ul className="space-y-2">
              {responsibilities.map((resp, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * idx }}
                  className="flex items-start gap-3 text-muted-foreground group-hover:text-foreground transition-colors"
                >
                  <span className="text-primary mt-1">▹</span>
                  <span>{resp}</span>
                </motion.li>
              ))}
            </ul>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  );
};
