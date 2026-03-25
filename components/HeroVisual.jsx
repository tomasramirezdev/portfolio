"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Copy, Layers, MousePointer2 } from "lucide-react";

export default function HeroVisual() {
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const springConfig = { stiffness: 50, damping: 20 };
  const mouseXSpring = useSpring(x, springConfig);
  const mouseYSpring = useSpring(y, springConfig);

  // Redujimos levemente los grados para que en mobile el tilt no expulse a los elementos de la pantalla
  const rotateX = useTransform(mouseYSpring, [0, 1], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [0, 1], ["-10deg", "10deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    x.set(mouseX / width);
    y.set(mouseY / height);
  };

  const handleMouseLeave = () => {
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <div 
      className="relative h-full w-full pointer-events-auto flex items-center justify-center p-4 sm:p-8 overflow-hidden rounded-3xl" 
      style={{ minHeight: "500px", perspective: "1500px" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      
      {/* Auroras de fondo - Strict overflow-hidden para matar el scroll horizontal en mobile */}
      <div 
        className="absolute inset-0 pointer-events-none -z-10 flex items-center justify-center overflow-hidden"
        style={{ 
          WebkitMaskImage: 'radial-gradient(circle at center, black 10%, transparent 70%)', 
          maskImage: 'radial-gradient(circle at center, black 10%, transparent 70%)' 
        }}
      >
        <motion.div 
          animate={{ scale: [1, 1.15, 1], opacity: [0.1, 0.2, 0.1], x: [0, 15, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-[5%] top-[10%] w-[250px] h-[250px] md:w-[400px] md:h-[400px] bg-purple-600 rounded-full blur-[90px] md:blur-[140px] mix-blend-screen"
        />
        <motion.div 
          animate={{ scale: [1, 1.25, 1], opacity: [0.08, 0.15, 0.08], y: [0, -15, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute left-[5%] bottom-[10%] w-[300px] h-[300px] md:w-[450px] md:h-[450px] bg-blue-600 rounded-full blur-[100px] md:blur-[160px] mix-blend-screen"
        />
      </div>

      {/* Composición abstracta de tarjetas (Bento Box Parallax 3D adaptativo) */}
      <motion.div 
        className="relative z-10 w-full max-w-[260px] sm:max-w-xs md:max-w-sm aspect-square pointer-events-none"
        style={{ 
          rotateX, 
          rotateY, 
          transformStyle: "preserve-3d" 
        }}
      >
        
        {/* Tarjeta Capas (UI) - Flota en Z */}
        <motion.div 
          initial={{ opacity: 0, y: 30, z: 0 }}
          animate={{ opacity: 1, y: 0, z: 40 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          className="absolute top-8 left-2 right-12 md:top-12 md:left-4 md:right-16 h-28 md:h-32 bg-[#ffffff05] backdrop-blur-xl border border-white/10 rounded-2xl p-4 md:p-5 flex flex-col justify-between shadow-2xl"
        >
          <div className="flex items-center gap-2 md:gap-3">
            <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center">
              <Layers className="w-4 h-4 text-purple-400" />
            </div>
            <div className="h-4 w-20 md:w-24 bg-white/10 rounded-full" />
          </div>
          <div className="space-y-2">
            <div className="h-2 w-full bg-white/5 rounded-full" />
            <div className="h-2 w-2/3 bg-white/5 rounded-full" />
          </div>
        </motion.div>

        {/* Tarjeta Interacción (UX) - Sobresale más al frente en Z */}
        <motion.div 
          initial={{ opacity: 0, x: 30, z: 0 }}
          animate={{ opacity: 1, x: 0, z: 90 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          className="absolute bottom-16 right-0 w-40 h-40 md:w-48 md:h-48 bg-[#ffffff08] backdrop-blur-3xl border border-white/10 rounded-3xl p-5 md:p-6 shadow-2xl flex flex-col items-center justify-center gap-4"
        >
          <div className="w-12 h-12 rounded-full border border-purple-500/30 flex items-center justify-center">
            <MousePointer2 className="w-5 h-5 text-purple-300" />
          </div>
          <div className="h-1.5 w-16 bg-gradient-to-r from-purple-500/80 to-blue-500/80 rounded-full" />
        </motion.div>

        {/* Tarjeta Código (Desarrollo) - Flota ligeramente en Z */}
        <motion.div 
          initial={{ opacity: 0, y: -30, z: 0 }}
          animate={{ opacity: 1, y: 0, z: 20 }}
          transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
          className="absolute bottom-2 left-4 md:bottom-4 md:left-6 w-36 h-24 md:w-44 md:h-28 bg-[#ffffff03] backdrop-blur-md border border-white/5 border-t-white/10 rounded-2xl p-3 md:p-4 shadow-2xl flex flex-col justify-between"
        >
          <div className="w-6 h-6 rounded bg-blue-500/20 flex items-center justify-center">
            <Copy className="w-3 h-3 text-blue-400" />
          </div>
          <div className="flex gap-2">
            <div className="w-full h-6 md:h-8 bg-white/5 rounded-lg" />
            <div className="w-8 md:w-10 h-6 md:h-8 bg-white/5 rounded-lg" />
          </div>
        </motion.div>

      </motion.div>
    </div>
  );
}
