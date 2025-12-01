import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Target, Heart, Sparkles } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" className="py-20 px-4 relative" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
          </motion.div>

          {/* Career Objective */}
          <motion.div variants={itemVariants} className="mb-12">
            <Card className="p-8 bg-gradient-card backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-foreground">Career Objective</h3>
                  <p className="text-foreground/80 leading-relaxed text-lg">
                    Aspiring software engineer dedicated to writing <span className="text-primary font-semibold">clean, maintainable code</span> and 
                    building <span className="text-primary font-semibold">scalable systems</span>. Committed to continuous learning, 
                    staying current with emerging technologies, and exploring the fascinating world of 
                    <span className="text-accent font-semibold"> Artificial Intelligence</span>. 
                    Seeking opportunities to contribute to innovative projects while growing as a well-rounded developer.
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* About Me Content */}
          <motion.div variants={itemVariants}>
            <Card className="p-8 bg-gradient-card backdrop-blur-sm border-border/50 hover:border-accent/50 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-accent/10">
                  <Heart className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-foreground">Who I Am</h3>
                  <p className="text-foreground/80 leading-relaxed text-lg mb-6">
                    A <span className="text-accent font-semibold">quick learner</span> and 
                    <span className="text-accent font-semibold"> adaptable problem-solver</span> with a passion for technology 
                    and innovation. I thrive in collaborative environments where I can apply logical thinking to create 
                    elegant solutions.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <Sparkles className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <p className="text-foreground/80">
                        <span className="font-semibold text-foreground">Adaptable & Curious:</span> Always eager to learn new 
                        technologies and methodologies
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Sparkles className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <p className="text-foreground/80">
                        <span className="font-semibold text-foreground">Logical Thinker:</span> Approach problems systematically 
                        with analytical mindset
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Sparkles className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <p className="text-foreground/80">
                        <span className="font-semibold text-foreground">Team Player:</span> Strong communicator who values 
                        collaboration and shared success
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Sparkles className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <p className="text-foreground/80">
                        <span className="font-semibold text-foreground">Goal-Driven:</span> Time-conscious and focused on 
                        delivering quality results
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;