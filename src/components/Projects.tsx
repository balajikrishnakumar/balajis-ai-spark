import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BarChart3, ShoppingCart, ExternalLink } from "lucide-react";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "Sales & Expense Management Dashboard",
      description:
        "Interactive data visualization dashboard built with Excel, Plotly, and Streamlit. Features real-time analytics, dynamic charts, and comprehensive financial reporting for business insights.",
      icon: BarChart3,
      color: "text-primary",
      bgColor: "bg-primary/10",
      tags: ["Excel", "Plotly", "Streamlit", "Python", "Data Analysis"],
    },
    {
      title: "E-Commerce Shopping Website",
      description:
        "Full-stack e-commerce platform with modern frontend using HTML, CSS, and JavaScript, powered by a robust Python backend. Features include product catalog, shopping cart, and user authentication.",
      icon: ShoppingCart,
      color: "text-accent",
      bgColor: "bg-accent/10",
      tags: ["HTML", "CSS", "JavaScript", "Python", "Full-Stack"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="projects" className="py-20 px-4" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 text-lg">
            Building solutions, one project at a time
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-8"
        >
          {projects.map((project, idx) => (
            <motion.div key={idx} variants={itemVariants}>
              <Card className="h-full p-6 bg-gradient-card backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 group hover:shadow-glow-primary">
                <div className="flex items-start gap-4 mb-4">
                  <div className={`p-3 rounded-lg ${project.bgColor}`}>
                    <project.icon className={`w-6 h-6 ${project.color}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors opacity-0 group-hover:opacity-100" />
                </div>

                <p className="text-foreground/80 leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <Badge
                      key={tagIdx}
                      variant="secondary"
                      className="text-xs bg-card hover:bg-primary/20 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;