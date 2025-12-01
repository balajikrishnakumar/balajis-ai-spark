import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MessageSquare, Users, Brain, Clock, Target } from "lucide-react";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const softSkills = [
    {
      icon: MessageSquare,
      title: "Communication",
      description: "Clear and effective communication in team settings",
    },
    {
      icon: Users,
      title: "Team Player",
      description: "Collaborative mindset with strong interpersonal skills",
    },
    {
      icon: Brain,
      title: "Critical Thinking",
      description: "Analytical approach to problem-solving",
    },
    {
      icon: Clock,
      title: "Time Management",
      description: "Efficient prioritization and deadline management",
    },
    {
      icon: Target,
      title: "Goal-Driven",
      description: "Focused on achieving objectives with determination",
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="skills" className="py-20 px-4 bg-secondary/20" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Soft Skills
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-accent mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 text-lg">
            Beyond technical expertise
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {softSkills.map((skill, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="group"
            >
              <div className="h-full p-6 rounded-xl bg-gradient-card backdrop-blur-sm border border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-glow-accent">
                <div className="flex flex-col items-center text-center">
                  <div className="p-4 rounded-full bg-accent/10 mb-4 group-hover:scale-110 transition-transform duration-300">
                    <skill.icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {skill.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;