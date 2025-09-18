import { motion } from "framer-motion";

const GuaranteeSection = () => {
  return (
    <div className="w-full bg-background/50 backdrop-blur-sm py-16 mt-20">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container px-4"
      >
        <div className="glass rounded-xl p-8 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-2xl md:text-3xl font-bold text-white mb-4"
          >
            Your Vision, Delivered.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-lg text-muted-foreground max-w-4xl mx-auto"
          >
            If the final website doesn't perfectly match your requirements, you receive a full refund. No questions asked.
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
};

export default GuaranteeSection;