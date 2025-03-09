// import React from "react";

// const LoadingPage = () => {
//   return (
//     <div className="flex items-center justify-center min-h-screen bg-[#EFDFBB]">
//       <div className="relative flex flex-col items-center">
//         {/* Spinner */}
//         <div className="w-16 h-16 border-t-4 border-[#722F37] border-solid rounded-full animate-spin"></div>
        
//         {/* Animated Text */}
//         <p className="mt-4 text-[#722F37] text-xl font-bold animate-pulse">Loading...</p>
//       </div>
//     </div>
//   );
// };

// export default LoadingPage;




// 4rt Idea
import React from "react";
import { motion } from "framer-motion";

const LoadingPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-[#EFDFBB] to-[#722F37] relative overflow-hidden">
      {/* Animated Background Gradient */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-[#722F37] to-[#EFDFBB]"
        animate={{ opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      {/* Morphing Loader */}
      <motion.div
        className="w-24 h-24 bg-[#722F37] rounded-full absolute shadow-2xl"
        animate={{ scale: [1, 1.3, 1], borderRadius: ["50%", "30%", "50%"] }}
        transition={{ duration: 2, repeat: Infinity }}
      />

      {/* Glowing Loading Text with App Name */}
      <div className="relative flex flex-col items-center">
        <motion.p 
          className="text-5xl font-extrabold text-[#EFDFBB] drop-shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Indore_Bazar
        </motion.p>
        <motion.p 
          className="text-xl text-[#EFDFBB] mt-2 animate-bounce"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Loading...
        </motion.p>
      </div>

      {/* Floating Particles */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-3 h-3 bg-[#EFDFBB] rounded-full opacity-50 shadow-md"
          initial={{ x: Math.random() * 200 - 100, y: Math.random() * 200 - 100 }}
          animate={{ y: [0, -50, 0], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2 + Math.random() * 2, repeat: Infinity, delay: i * 0.2 }}
        />
      ))}
    </div>
  );
};

export default LoadingPage;
