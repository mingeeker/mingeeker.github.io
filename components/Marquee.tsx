import React from 'react';

const Marquee: React.FC = () => {
    return (
        <div className="relative w-full py-8 overflow-hidden border-y border-white/5 bg-black/50 backdrop-blur-sm z-20">
            {/* Gradient Fade Edges */}
            <div
                className="absolute inset-0 z-10 w-full h-full bg-gradient-to-r from-[#050505] via-transparent to-[#050505] pointer-events-none"/>

            <div className="flex whitespace-nowrap animate-marquee">
        <span className="text-4xl md:text-5xl font-bold text-white px-4 stroke-text opacity-80 font-mono">
        &nbsp;•&nbsp;&nbsp;•&nbsp; JAVA &nbsp;•&nbsp; SPRING CLOUD &nbsp;•&nbsp; AI AGENT &nbsp;•&nbsp; RULE ENGINE &nbsp;•&nbsp; DOCKER &nbsp;•&nbsp; JavaScript &nbsp;•&nbsp; VUE.JS &nbsp;&nbsp;•&nbsp;&nbsp;•&nbsp;&nbsp;•&nbsp;
        </span>
                <span className="text-4xl md:text-5xl font-bold text-white px-4 stroke-text opacity-80 font-mono">
            &nbsp;•&nbsp;&nbsp;•&nbsp; JAVA &nbsp;•&nbsp; SPRING BOOT &nbsp;•&nbsp;  AI AGENT &nbsp;•&nbsp; RULE ENGINE &nbsp;•&nbsp; DOCKER &nbsp;•&nbsp; JavaScript &nbsp;•&nbsp; VUE.JS &nbsp;&nbsp;•&nbsp;&nbsp;•&nbsp;&nbsp;•&nbsp;
        </span>
            </div>
        </div>
    );
};

export default Marquee;