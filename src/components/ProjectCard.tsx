import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  index: number;
}

export const ProjectCard = ({ title, description, icon: Icon, index }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
    >
      <Card className="glass-card p-6 h-full hover:border-primary/50 transition-all duration-300 group relative overflow-hidden">
        {/* Glow effect on hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={false}
        />

        <div className="relative z-10">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.3 }}
          >
            <Icon className="w-12 h-12 text-primary mb-4 group-hover:drop-shadow-[0_0_10px_rgba(107,91,255,0.8)]" />
          </motion.div>
          
          <h3 className="text-xl font-bold font-space mb-3 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground group-hover:text-foreground transition-colors">
            {description}
          </p>
        </div>

        {/* Animated border on hover */}
        <motion.div
          className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary to-accent"
          initial={{ width: 0 }}
          whileHover={{ width: "100%" }}
          transition={{ duration: 0.4 }}
        />
      </Card>
    </motion.div>
  );
};
