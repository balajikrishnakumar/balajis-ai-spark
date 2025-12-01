import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { Code2, Database, GitBranch, Palette } from "lucide-react";

const TechStack = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const techCategories = [
    {
      title: "Languages",
      icon: Code2,
      color: "text-primary",
      techs: ["Java", "C", "JavaScript", "Python", "HTML/CSS"],
    },
    {
      title: "Frameworks & Libraries",
      icon: Code2,
      color: "text-accent",
      techs: ["React", "Node.js", "Express.js", "Streamlit", "Plotly"],
    },
    {
      title: "Databases & Tools",
      icon: Database,
      color: "text-primary",
      techs: ["MySQL", "MongoDB", "Git", "Linux"],
    },
    {
      title: "Design",
      icon: Palette,
      color: "text-accent",
      techs: ["Figma"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="tech" className="py-20 px-4 bg-secondary/20" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Tech Stack
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 text-lg">
            Technologies and tools I work with
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-6"
        >
          {techCategories.map((category, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="p-6 rounded-xl bg-gradient-card backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-card">
                  <category.icon className={`w-6 h-6 ${category.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.techs.map((tech, techIdx) => (
                  <Badge
                    key={techIdx}
                    variant="secondary"
                    className="text-sm px-3 py-1 bg-card hover:bg-primary/20 hover:text-primary transition-all duration-300 cursor-default"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* MERN Stack Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-8 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-primary/10 border border-primary/30">
            <GitBranch className="w-5 h-5 text-primary" />
            <span className="text-lg font-semibold bg-gradient-primary bg-clip-text text-transparent">
              MERN Stack Developer
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;