import { motion } from 'framer-motion';

export default function Placeholder({ isLoading, children }) {
  return (
    <div className="relative">
      {isLoading ? (
        <div className=" absolute w-full h-full grid">
          <span class="m-auto animate-pulse inline-flex h-full w-full bg-background2 opacity-5"></span>
        </div>
      ) : null}
      <motion.div
        initial="initial"
        animate="animate"
        transition={{ duration: 1 }}
        variants={{
          initial: {
            opacity: 0,
          },
          animate: {
            opacity: 1,
          },
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
