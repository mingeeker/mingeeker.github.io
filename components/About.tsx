import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="w-full max-w-6xl mx-auto px-6 pb-32 z-10 relative">
      <div className="grid md:grid-cols-12 gap-12">
        
        <div className="md:col-span-5">
          <h2 className="text-3xl font-bold text-white mb-6">我是杨明亮。</h2>
          <div className="space-y-6 text-gray-400 leading-relaxed text-sm md:text-base">
            <p>
              拥有 <strong className="text-white">6年 Java 后端开发经验</strong>，深度参与多个<strong className="text-white">0到1项目构建</strong>，涵盖互联网和工业软件领域。
            </p>
            <p>
              专注用<strong className="text-white">工程化方法</strong>解决复杂问题，具备扎实的编码功底和系统架构设计能力。
            </p>
            <p>
              在AI应用工程方面，我积极探索大模型在企业级应用中的落地实践，主导AI智能体开发与系统集成。
            </p>
            <p>
              具备全栈开发能力，从后端架构到前端界面，从DevOps部署到系统运维，均有丰富实践经验。
            </p>
            <p>
              始终保持对新技术的热情，具备极强的创新能力和学习能力，致力于用技术创造更大价值。
            </p>
          </div>
        </div>

        <div className="md:col-span-7">
           <h3 className="text-sm font-mono text-gray-500 mb-6 uppercase tracking-wider">Technical DNA / 技术武器库</h3>
           
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
             {/* Java后端工程 */}
             <div className="bg-white/5 border border-white/10 p-5 hover:border-blue-500/30 transition-all duration-300">
                <h4 className="text-white font-bold mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span> 
                  <span className="text-sm">Java后端工程</span>
                </h4>
                <p className="text-xs text-gray-500 mb-3">Java Back-end Engineering</p>
                <div className="space-y-1 text-xs text-gray-400 leading-relaxed">
                  <p><span className="text-gray-300">Java · Spring Boot · Spring Cloud · MyBatis</span></p>
                  <p>分布式架构 · 微服务治理 · 性能调优</p>
                  <p>Redis · MySQL · OpenGauss · 慢 SQL 优化</p>
                </div>
             </div>
             
             {/* AI智能体与应用 */}
             <div className="bg-white/5 border border-white/10 p-5 hover:border-purple-500/30 transition-all duration-300">
                <h4 className="text-white font-bold mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  <span className="text-sm">AI智能体与应用</span>
                </h4>
                <p className="text-xs text-gray-500 mb-3">AI Agent & Application</p>
                <div className="space-y-1 text-xs text-gray-400 leading-relaxed">
                  <p>大模型应用开发 · 智能体开发</p>
                  <p>AI模型对接 · 智能问答系统</p>
                  <p>RAG系统 · 规则引擎</p>
                </div>
             </div>

             {/* DevOps与运维 */}
             <div className="bg-white/5 border border-white/10 p-5 hover:border-green-500/30 transition-all duration-300">
                <h4 className="text-white font-bold mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span className="text-sm">DevOps与运维</span>
                </h4>
                <p className="text-xs text-gray-500 mb-3">DevOps & Operations</p>
                <div className="space-y-1 text-xs text-gray-400 leading-relaxed">
                  <p>Docker · Jenkins · CI/CD流水线</p>
                  <p>Linux服务器运维 · 故障排查</p>
                  <p>线上问题诊断 · 系统优化</p>
                </div>
             </div>

             {/* 前端与全栈 */}
             <div className="bg-white/5 border border-white/10 p-5 hover:border-red-500/30 transition-all duration-300">
                <h4 className="text-white font-bold mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                  <span className="text-sm">前端与全栈</span>
                </h4>
                <p className="text-xs text-gray-500 mb-3">Frontend & Full-stack</p>
                <div className="space-y-1 text-xs text-gray-400 leading-relaxed">
                  <p><span className="text-gray-300">HTML · CSS · JavaScript · Vue.js</span></p>
                  <p>前后端分离架构 · RESTful API</p>
                  <p>响应式设计 · 组件化开发</p>
                </div>
             </div>
           </div>
        </div>

      </div>
    </section>
  );
};

export default About;