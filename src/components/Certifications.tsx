import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Award, CheckCircle2 } from "lucide-react";

const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const certifications = [
    {
      title: "AWS Cloud Foundations",
      issuer: "Amazon Web Services",
      description: "Comprehensive understanding of cloud computing concepts and AWS core services",
    },
    {
      title: "Oracle AWS Academy",
      issuer: "Oracle",
      description: "Advanced training in cloud infrastructure and database management",
    },
    {
      title: "Forage - Mastercard Job Simulation",
      issuer: "Forage",
      description: "Practical experience in solving real-world business challenges",
    },
    {
      title: "GenAI Analytics Simulation",
      issuer: "Forage",
      description: "Hands-on experience with generative AI and data analytics",
    },
    {
      title: "Mastercard Cybersecurity Simulation",
      issuer: "Forage",
      description: "Security best practices and threat mitigation strategies",
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="certifications" className="py-20 px-4 bg-secondary/20" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Certifications
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-accent mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 text-lg">
            Continuous learning and professional development
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-6"
        >
          {certifications.map((cert, idx) => (
            <motion.div key={idx} variants={itemVariants}>
              <Card className="h-full p-6 bg-gradient-card backdrop-blur-sm border-border/50 hover:border-accent/50 transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-accent/10 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Award className="w-6 h-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-accent transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-primary font-medium mb-2">
                      {cert.issuer}
                    </p>
                    <p className="text-sm text-foreground/70 leading-relaxed">
                      {cert.description}
                    </p>
                    <div className="flex items-center gap-2 mt-3">
                      <CheckCircle2 className="w-4 h-4 text-accent" />
                      <span className="text-xs text-muted-foreground">Verified</span>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;