import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse position state for Reverse Parallax
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth spring animation for the text movement
  const springConfig = { damping: 50, stiffness: 400 };
  const mouseX = useSpring(x, springConfig);
  const mouseY = useSpring(y, springConfig);

  // Transform mouse position to text movement
  const textX = useTransform(mouseX, [-0.5, 0.5], ["30px", "-30px"]);
  const textY = useTransform(mouseY, [-0.5, 0.5], ["30px", "-30px"]);
  const textY2 = useTransform(mouseY, [-0.5, 0.5], ["100px", "-30px"]);
  const textY3 = useTransform(mouseY, [-0.5, 0.5], ["150px", "-30px"]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      const width = rect.width;
      const height = rect.height;
      const mouseXVal = e.clientX - rect.left;
      const mouseYVal = e.clientY - rect.top;
      
      // Calculate normalized position (-0.5 to 0.5)
      const xPct = (mouseXVal / width) - 0.5;
      const yPct = (mouseYVal / height) - 0.5;
      
      x.set(xPct);
      y.set(yPct);
    }
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const Line = ({ text, x, y, delayClass, fontSize = "text-[15vw] md:text-[13vw]" }: {
    text: string,
    x: any,
    y: any,
    delayClass: string,
    fontSize?: string
  }) => {
    return (
        <motion.div style={{ x, y }}>
          <h1 className={`${fontSize} font-bold leading-[0.8] tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-600 drop-shadow-2xl hover:from-white hover:to-white transition-all duration-500 cursor-default animate-reveal ${delayClass}`}>
            {text}
          </h1>
        </motion.div>
    );
  };


  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden z-10 perspective-[1000px]"
    >
      {/* Background abstract element (Circle) */}
      <div className="absolute w-[60vh] h-[60vh] rounded-full border border-white/10 pointer-events-none z-0 opacity-50" />

      {/* Main Typography */}
      <div className="relative z-10 flex flex-col items-center justify-center select-none mix-blend-luminosity">
        <Line text="JAVA" x={textX} y={textY} delayClass="delay-100" fontSize="text-[12vw] md:text-[10vw]"/>
        <Line text="AI・full-stack" x={textX} y={textY2} delayClass="delay-200"  fontSize="text-[12vw] md:text-[10vw]"/>
        <Line text="ML Yang" x={textX} y={textY3} delayClass="delay-300" fontSize="text-[12vw] md:text-[8vw]"/>


      </div>

      {/* Bottom Description */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-8 max-w-[480px] z-20"
      >
        <div className="w-8 h-[2px] bg-white mb-4" />
        <p className="text-xs md:text-sm font-medium leading-relaxed text-gray-400 tracking-wide">
          <span className="block text-white text-lg font-bold mb-1">十年磨一剑🔪</span>
          从Java后端开发，到AI智能体应用与工程化落地。<br/>
          <span className="text-gray-500 mt-2 block">在系统稳定性、模型行为一致性之间寻找平衡。<br/></span>

          <span className="text-gray-500 mt-2 block">致力于用工程化方法解决复杂问题，实现技术价值<br/>最大化。</span>
        </p>
      </motion.div>

    </section>
  );
};

const Line = ({ text, x, y, delayClass }: { text: string, x: any, y: any, delayClass: string }) => {
  return (
    <motion.div style={{ x, y }}>
      <h1 className={`text-[15vw] md:text-[13vw] font-bold leading-[0.8] tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-600 drop-shadow-2xl hover:from-white hover:to-white transition-all duration-500 cursor-default animate-reveal ${delayClass}`}>
        {text}
      </h1>
    </motion.div>
  );
};

export default Hero;