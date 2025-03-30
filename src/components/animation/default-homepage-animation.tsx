import { AnimationComponent } from "@/types/animation-component";
import { AnimatePresence } from "framer-motion";

import { motion } from "framer-motion";

export function DefaultHomepageAnimationComponent({children}: AnimationComponent) {
    return (
        <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute inset-0 flex items-center justify-center"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    )
}