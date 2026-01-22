import React from 'react';
import { motion } from 'framer-motion';

// Import images from public folder
const getImageUrl = (filename: string) => {
    return import.meta.env.BASE_URL + filename;
};

const Showcase: React.FC = () => {
  return (
    <section id="work" className="w-full max-w-6xl mx-auto px-6 pb-32 z-10 relative">
      
      {/* Header Section */}
      <div className="mb-16 flex items-end justify-between border-b border-white/10 pb-4">
        <motion.h2 
           initial={{ opacity: 0, x: -20 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           className="text-3xl md:text-5xl font-bold tracking-tighter text-white"
        >
          精选项目 <span className="text-gray-600">/ WORKS</span>
        </motion.h2>
        <span className="text-xs text-gray-400 font-mono hidden md:block">工程架构 & AI 创作</span>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Card 1: MES智能监测系统 (AI + Java Engineering) */}
        <div className="group relative bg-white/5 border border-white/10 hover:border-white/30 transition-all duration-500 overflow-hidden h-[480px]">
           <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10"></div>
           <img src={getImageUrl("cheqi1.png")}
                onError={(e) => e.currentTarget.src = 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2940&auto=format&fit=crop'}
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0" alt="MES System" />
           
           <div className="absolute bottom-0 left-0 p-8 z-20 w-full">
             <p className="text-xs font-mono text-cyan-400 mb-2">AI智能分析 / Spring Cloud & AI</p>
             <h3 className="text-2xl font-bold mb-3">MES智能监测系统</h3>
             <p className="text-sm text-gray-400 mb-4 leading-relaxed">
             针对石油化工行业的MES系统，实现生产过程实时监控与智能分析。主导电气设备检测系统设计开发，接入AI大模型实现生产智能分析与智能问答功能，建立APaaS平台流水线完成服务部署与运维。
             </p>
           </div>
        </div>

        {/* Card 2: IT一体化运营平台 (Enterprise Architecture) */}
        <div className="group relative bg-white/5 border border-red-900/30 hover:border-red-500/50 transition-all duration-500 overflow-hidden h-[480px]">
           <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10"></div>
           <img src={getImageUrl("RAG1.png")}
                onError={(e) => e.currentTarget.src = 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2832&auto=format&fit=crop'}
                className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" alt="IT Operations" />
           
           <div className="absolute bottom-0 left-0 p-8 z-20 w-full">
             <div className="flex items-center gap-2 mb-2">
                <svg viewBox="0 0 1024 1024" className="w-4 h-4 text-red-500 fill-current" xmlns="http://www.w3.org/2000/svg"><path d="M512 0C229.2 0 0 229.2 0 512s229.2 512 512 512 512-229.2 512-512S794.8 0 512 0zm0 889.6c-208.4 0-377.6-169.2-377.6-377.6S303.6 134.4 512 134.4s377.6 169.2 377.6 377.6-169.2 377.6-377.6 377.6zm176.8-542.4c-17.6 0-33.6 6-46.8 16-24-20.4-55.2-32.8-89.2-32.8-59.2 0-110 33.6-136.4 83.2-12.4-5.6-26-8.8-40.4-8.8-55.2 0-100 44.8-100 100 0 55.2 44.8 100 100 100 10.4 0 20.4-1.6 30-4.8 19.6 44 64.4 74.8 116.8 74.8 32 0 61.6-11.2 85.2-30 14.4 12.8 33.2 20.8 54 20.8 44 0 80-36 80-80s-36-80-80-80c-9.6 0-18.8 1.6-27.6 4.8-11.6-25.2-36-43.2-64.8-45.2 24.8-19.2 40.8-49.2 40.8-82.8 0-1.6 0-3.2-.4-4.8 24.4 16.4 53.6 26 85.2 26 4.4 0 8.8-.4 13.2-1.2 1.6 43.6 37.6 78.4 81.6 78.4 45.2 0 81.6-36.4 81.6-81.6 0-45.2-36.4-81.6-81.6-81.6-37.6 0-69.2 24.8-78.4 59.2-11.2-3.6-23.2-5.6-35.6-5.6-11.2 0-22 1.6-32.4 4.8-15.6-43.6-57.6-74.8-107.2-74.8z"/></svg>
                <p className="text-xs font-mono text-red-400">数字化转型</p>
             </div>
             <h3 className="text-2xl font-bold mb-3">IT一体化运营平台</h3>
             <p className="text-sm text-gray-400 mb-4 leading-relaxed">
             覆盖4万多台IT设备、2000余个机房、1300余套应用系统的数字化运营平台。主导80%以上核心功能从0到1建设，设计数据权限管理服务，实现生产运营系统自动化处置流程，提升开发效率10%。
             </p>
           </div>
        </div>

        {/* Card 3: 非现场检查平台 (Rule Engine & AI) */}
        <div className="group relative bg-white/5 border border-white/10 hover:border-white/30 transition-all duration-500 overflow-hidden h-[480px]">
           <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10"></div>
           <img src={getImageUrl("xiaohongshu1.jpg")}
                onError={(e) => e.currentTarget.src = 'https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2840&auto=format&fit=crop'}
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0" alt="Risk Management" />
           
           <div className="absolute bottom-0 left-0 p-8 z-20 w-full">
             <p className="text-xs font-mono text-purple-400 mb-2">风险&资产管控 / Drools规则引擎</p>
             <h3 className="text-2xl font-bold mb-3">非现场检查及资产管理平台</h3>
             <p className="text-sm text-gray-400 mb-4 leading-relaxed">
               承载风险指标检查、年度考核和资产全生命周期管理的平台。使用Drools规则引擎和模版方法设计模式实现风险指标、报表、考核任务线上自动化管理，大大提升项目可维护性和扩展性。
             </p>
           </div>
        </div>

        {/* Card 4: 商城 (E-commerce Platform) */}
        <div className="group relative bg-white/5 border border-white/10 hover:border-white/30 transition-all duration-500 overflow-hidden h-[480px]">
           <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10"></div>
           <img src={getImageUrl("1Wechat.jpg")}
                onError={(e) => e.currentTarget.src = 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2874&auto=format&fit=crop'}
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0" alt="E-commerce" />
           
           <div className="absolute bottom-0 left-0 p-8 z-20 w-full">
             <p className="text-xs font-mono text-blue-400 mb-2">微服务 / 电商系统</p>
             <h3 className="text-2xl font-bold mb-3">B2C商城后台管理系统</h3>
             <p className="text-sm text-gray-400 mb-4 leading-relaxed">
             B2C模式电商平台，采用微服务架构，负责核心功能设计和开发。使用Gateway组件提供负载均衡、服务熔断、统一认证等功能，实现Docker镜像化部署。
             </p>
           </div>
        </div>

      </div>
    </section>
  );
};

export default Showcase;