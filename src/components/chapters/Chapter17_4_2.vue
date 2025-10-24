<template>
  <div class="chapter-content">
    <div class="content-header">
      <h1>17.4.2 黑洞物理</h1>
      <p class="subtitle">SYK模型中的黑洞现象与信息悖论</p>
    </div>

    <div class="content-body">
      <!-- 核心概念 -->
      <section class="concept-section">
        <h2>🕳️ 黑洞物理基础</h2>
        <div class="concept-card">
          <h3>黑洞的基本性质</h3>
          <p>黑洞是时空中的极端天体：</p>
          <ul>
            <li><strong>事件视界</strong>：信息无法逃脱的边界</li>
            <li><strong>奇点</strong>：时空曲率发散的区域</li>
            <li><strong>Hawking辐射</strong>：量子效应导致的热辐射</li>
            <li><strong>熵</strong>：与视界面积成正比</li>
          </ul>
        </div>

        <div class="concept-card">
          <h3>SYK模型与黑洞的联系</h3>
          <div class="connection-content">
            <h4>为什么SYK模型重要？</h4>
            <ul>
              <li>提供黑洞的微观模型</li>
              <li>可控的理论实验室</li>
              <li>解析可解的强关联系统</li>
              <li>展现最大混沌行为</li>
            </ul>
            
            <h4>对偶关系</h4>
            <div class="formula">
              $$\text{SYK模型} \leftrightarrow \text{AdS}_2\text{黑洞}$$
            </div>
            
            <h4>关键参数对应</h4>
            <ul>
              <li>SYK温度 ↔ Hawking温度</li>
              <li>SYK熵 ↔ Bekenstein-Hawking熵</li>
              <li>混沌指数 ↔ 信息扰乱率</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Hawking辐射 -->
      <section class="hawking-section">
        <h2>🌟 Hawking辐射</h2>
        
        <div class="hawking-card">
          <h3>Hawking辐射的发现</h3>
          <div class="discovery-content">
            <h4>理论背景</h4>
            <p>1974年，Stephen Hawking发现黑洞会发出热辐射：</p>
            <div class="formula">
              $$T_H = \frac{\hbar c^3}{8\pi G M k_B}$$
            </div>
            
            <h4>物理机制</h4>
            <ul>
              <li><strong>真空涨落</strong>：量子场的零点能</li>
              <li><strong>视界效应</strong>：粒子对的分离</li>
              <li><strong>负能态</strong>：落入黑洞的粒子</li>
              <li><strong>正能态</strong>：逃逸到无穷远</li>
            </ul>
            
            <h4>热力学性质</h4>
            <div class="formula">
              $$S_{BH} = \frac{A}{4G\hbar} = \frac{\pi M^2 G}{\hbar c^3}$$
            </div>
          </div>
        </div>

        <div class="hawking-card">
          <h3>SYK模型中的Hawking辐射</h3>
          <div class="syk-hawking">
            <h4>热平衡态</h4>
            <p>SYK模型在有限温度下的配分函数：</p>
            <div class="formula">
              $$Z = \text{Tr} e^{-\beta H} = e^{-\beta F}$$
            </div>
            
            <h4>热关联函数</h4>
            <div class="formula">
              $$G(\tau) = \langle T \chi_i(\tau) \chi_i(0) \rangle$$
            </div>
            <p>在低温极限下表现出共形行为：</p>
            <div class="formula">
              $$G(\tau) \sim \frac{\text{sgn}(\tau)}{|\tau|^{2\Delta}}$$
            </div>
            
            <h4>对偶解释</h4>
            <ul>
              <li>SYK的热态 ↔ AdS₂黑洞</li>
              <li>温度涨落 ↔ Hawking辐射</li>
              <li>热化过程 ↔ 黑洞形成</li>
            </ul>
          </div>
        </div>

        <div class="hawking-card">
          <h3>辐射谱与温度</h3>
          <div class="spectrum-content">
            <h4>Planck分布</h4>
            <div class="formula">
              $$n(\omega) = \frac{1}{e^{\omega/T_H} - 1}$$
            </div>
            
            <h4>SYK模型的谱函数</h4>
            <div class="formula">
              $$A(\omega) = -\frac{1}{\pi} \text{Im} G(\omega + i0^+)$$
            </div>
            
            <h4>低频行为</h4>
            <div class="formula">
              $$A(\omega) \sim |\omega|^{2\Delta-1} \quad (\omega \to 0)$$
            </div>
            
            <h4>温度依赖性</h4>
            <p>在SYK模型中，所有能量尺度都由温度设定：</p>
            <div class="formula">
              $$\omega_{\text{typical}} \sim T$$
            </div>
          </div>
        </div>
      </section>

      <!-- 信息悖论 -->
      <section class="information-section">
        <h2>🔍 信息悖论</h2>
        
        <div class="paradox-card">
          <h3>信息悖论的提出</h3>
          <div class="paradox-formulation">
            <h4>经典图像</h4>
            <p>根据广义相对论，落入黑洞的信息永远丢失。</p>
            
            <h4>量子力学要求</h4>
            <p>量子力学的幺正性要求信息必须守恒。</p>
            
            <h4>矛盾</h4>
            <div class="formula">
              $$\text{广义相对论} \quad \leftrightarrow \quad \text{量子力学}$$
            </div>
            <div class="formula">
              $$\text{信息丢失} \quad \leftrightarrow \quad \text{信息守恒}$$
            </div>
            
            <h4>Hawking的原始观点</h4>
            <ul>
              <li>黑洞完全蒸发</li>
              <li>信息永远丢失</li>
              <li>量子力学需要修正</li>
            </ul>
          </div>
        </div>

        <div class="paradox-card">
          <h3>Page曲线</h3>
          <div class="page-curve">
            <h4>纠缠熵的演化</h4>
            <p>Don Page计算了黑洞蒸发过程中辐射的纠缠熵：</p>
            
            <h4>三个阶段</h4>
            <ul>
              <li><strong>早期</strong>：$S \sim t$（线性增长）</li>
              <li><strong>Page时间</strong>：$t_{\text{Page}} \sim S_{BH}/T_H$</li>
              <li><strong>晚期</strong>：$S$开始下降</li>
            </ul>
            
            <h4>物理意义</h4>
            <div class="formula">
              $$S_{\text{rad}}(t) = \min(S_{\text{thermal}}, S_{BH})$$
            </div>
            
            <h4>信息守恒的要求</h4>
            <p>如果信息守恒，纠缠熵必须在Page时间后开始下降。</p>
          </div>
        </div>

        <div class="paradox-card">
          <h3>SYK模型中的信息悖论</h3>
          <div class="syk-paradox">
            <h4>优势</h4>
            <ul>
              <li>完全可控的理论模型</li>
              <li>精确的解析结果</li>
              <li>明确的微观自由度</li>
              <li>全息对偶的存在</li>
            </ul>
            
            <h4>信息扰乱</h4>
            <p>通过OTOC研究信息传播：</p>
            <div class="formula">
              $$C(t) = \langle [W(t), V(0)]^2 \rangle \sim e^{\lambda_L t}$$
            </div>
            
            <h4>扰乱时间</h4>
            <div class="formula">
              $$t_* \sim \frac{1}{T} \ln N$$
            </div>
            
            <h4>信息恢复</h4>
            <p>在$t > t_*$后，信息开始从混沌中恢复。</p>
          </div>
        </div>
      </section>

      <!-- 全息纠错 -->
      <section class="holographic-section">
        <h2>🔧 全息纠错</h2>
        
        <div class="correction-card">
          <h3>量子纠错码</h3>
          <div class="error-correction">
            <h4>基本概念</h4>
            <p>量子纠错码保护量子信息免受噪声影响：</p>
            <ul>
              <li><strong>编码</strong>：逻辑量子比特 → 物理量子比特</li>
              <li><strong>检错</strong>：测量综合征</li>
              <li><strong>纠错</strong>：恢复原始信息</li>
            </ul>
            
            <h4>阈值定理</h4>
            <p>当错误率低于阈值时，可以任意精确地保护信息。</p>
            
            <h4>全息纠错的特点</h4>
            <ul>
              <li>自然的冗余编码</li>
              <li>几何保护机制</li>
              <li>局域性与非局域性的平衡</li>
            </ul>
          </div>
        </div>

        <div class="correction-card">
          <h3>AdS/CFT中的纠错</h3>
          <div class="ads-correction">
            <h4>编码映射</h4>
            <p>边界信息编码到体中：</p>
            <div class="formula">
              $$|\psi_{\text{boundary}}\rangle \to |\psi_{\text{bulk}}\rangle$$
            </div>
            
            <h4>纠错条件</h4>
            <p>Almheiri-Dong-Harlow条件：</p>
            <div class="formula">
              $$\text{Area}(\partial A) \geq \text{Area}(\gamma_A)$$
            </div>
            
            <h4>纠错半径</h4>
            <p>可以纠正的错误区域大小有限制：</p>
            <ul>
              <li>小错误：可以完全纠正</li>
              <li>大错误：信息不可恢复</li>
              <li>阈值：与纠缠楔相关</li>
            </ul>
          </div>
        </div>

        <div class="correction-card">
          <h3>SYK模型的纠错性质</h3>
          <div class="syk-correction">
            <h4>信息的分布存储</h4>
            <p>在SYK模型中，信息分布在所有自由度中：</p>
            <ul>
              <li>高度纠缠的基态</li>
              <li>信息的非局域存储</li>
              <li>部分信息的可恢复性</li>
            </ul>
            
            <h4>纠错阈值</h4>
            <p>SYK模型的纠错阈值与系统参数相关：</p>
            <div class="formula">
              $$p_{\text{threshold}} \sim \frac{1}{\ln N}$$
            </div>
            
            <h4>实际应用</h4>
            <ul>
              <li>量子计算的容错性</li>
              <li>信息存储的可靠性</li>
              <li>噪声环境下的量子相干</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- 虫洞与隐形传态 -->
      <section class="wormhole-section">
        <h2>🌀 虫洞与量子隐形传态</h2>
        
        <div class="wormhole-card">
          <h3>Einstein-Rosen桥</h3>
          <div class="er-bridge">
            <h4>经典虫洞</h4>
            <p>连接两个时空区域的"桥梁"：</p>
            <div class="formula">
              $$ds^2 = -dt^2 + dr^2 + (r^2 + a^2)(d\theta^2 + \sin^2\theta d\phi^2)$$
            </div>
            
            <h4>问题</h4>
            <ul>
              <li>经典虫洞不稳定</li>
              <li>需要奇异物质支撑</li>
              <li>违反能量条件</li>
            </ul>
            
            <h4>量子修正</h4>
            <p>量子效应可能稳定虫洞：</p>
            <ul>
              <li>Casimir能量</li>
              <li>量子涨落</li>
              <li>拓扑保护</li>
            </ul>
          </div>
        </div>

        <div class="wormhole-card">
          <h3>ER=EPR猜想</h3>
          <div class="er-epr">
            <h4>Maldacena-Susskind猜想</h4>
            <p>Einstein-Rosen桥等价于Einstein-Podolsky-Rosen纠缠：</p>
            <div class="formula">
              $$\text{ER} = \text{EPR}$$
            </div>
            
            <h4>物理图像</h4>
            <ul>
              <li>纠缠粒子对 ↔ 虫洞两端</li>
              <li>量子关联 ↔ 几何连接</li>
              <li>信息传输 ↔ 虫洞穿越</li>
            </ul>
            
            <h4>SYK模型的实现</h4>
            <p>两个纠缠的SYK系统：</p>
            <div class="formula">
              $$H = H_L + H_R + H_{\text{int}}$$
            </div>
            <p>其中$H_{\text{int}}$描述两个系统间的相互作用。</p>
          </div>
        </div>

        <div class="wormhole-card">
          <h3>可穿越虫洞</h3>
          <div class="traversable-wormhole">
            <h4>Gao-Jafferis-Wall协议</h4>
            <p>通过量子隐形传态实现信息穿越：</p>
            <ol>
              <li>制备纠缠的SYK对</li>
              <li>在一侧注入信息</li>
              <li>进行Bell测量</li>
              <li>在另一侧恢复信息</li>
            </ol>
            
            <h4>时间延迟</h4>
            <div class="formula">
              $$\Delta t \sim \frac{\ln N}{T}$$
            </div>
            
            <h4>负能量脉冲</h4>
            <p>使虫洞可穿越需要：</p>
            <div class="formula">
              $$\langle T_{\mu\nu} \rangle < 0$$
            </div>
            
            <h4>实验可行性</h4>
            <ul>
              <li>冷原子系统</li>
              <li>超导量子比特</li>
              <li>量子模拟器</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- 数值研究 -->
      <section class="numerical-section">
        <h2>💻 数值研究方法</h2>
        
        <div class="numerical-card">
          <h3>精确对角化</h3>
          <div class="exact-diagonalization">
            <h4>适用范围</h4>
            <ul>
              <li>小系统：$N \leq 20$</li>
              <li>完整能谱</li>
              <li>精确本征态</li>
            </ul>
            
            <h4>黑洞相关计算</h4>
            <ul>
              <li>热力学量</li>
              <li>关联函数</li>
              <li>纠缠熵</li>
              <li>OTOC</li>
            </ul>
            
            <h4>技术挑战</h4>
            <ul>
              <li>指数增长的希尔伯特空间</li>
              <li>随机矩阵的存储</li>
              <li>数值精度问题</li>
            </ul>
          </div>
        </div>

        <div class="numerical-card">
          <h3>量子蒙特卡罗</h3>
          <div class="quantum-monte-carlo">
            <h4>路径积分方法</h4>
            <p>将量子问题转化为经典统计问题：</p>
            <div class="formula">
              $$Z = \int \mathcal{D}\chi \, e^{-S[\chi]}$$
            </div>
            
            <h4>符号问题</h4>
            <p>费米子系统的主要挑战：</p>
            <ul>
              <li>复数权重</li>
              <li>统计误差增大</li>
              <li>计算时间指数增长</li>
            </ul>
            
            <h4>SYK模型的优势</h4>
            <ul>
              <li>大N极限下符号问题缓解</li>
              <li>解析结果可供对比</li>
              <li>高温下计算相对容易</li>
            </ul>
          </div>
        </div>

        <div class="numerical-card">
          <h3>机器学习方法</h3>
          <div class="machine-learning">
            <h4>神经网络量子态</h4>
            <p>用神经网络表示量子多体态：</p>
            <div class="formula">
              $$\psi(\sigma) = \text{NN}(\sigma; \theta)$$
            </div>
            
            <h4>变分蒙特卡罗</h4>
            <ul>
              <li>优化网络参数</li>
              <li>逼近基态</li>
              <li>计算物理量</li>
            </ul>
            
            <h4>应用前景</h4>
            <ul>
              <li>大系统的处理</li>
              <li>复杂相互作用</li>
              <li>实时动力学</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- 实验实现 -->
      <section class="experimental-section">
        <h2>🔬 实验实现</h2>
        
        <div class="experimental-card">
          <h3>冷原子平台</h3>
          <div class="cold-atoms">
            <h4>实现方案</h4>
            <ul>
              <li><strong>光晶格</strong>：创造人工晶格结构</li>
              <li><strong>Feshbach共振</strong>：调节相互作用强度</li>
              <li><strong>随机势</strong>：模拟随机耦合</li>
            </ul>
            
            <h4>测量技术</h4>
            <ul>
              <li>时间飞行成像</li>
              <li>原位密度测量</li>
              <li>干涉测量</li>
              <li>量子气体显微镜</li>
            </ul>
            
            <h4>挑战</h4>
            <ul>
              <li>全连接相互作用的实现</li>
              <li>退相干时间限制</li>
              <li>温度控制</li>
            </ul>
          </div>
        </div>

        <div class="experimental-card">
          <h3>超导量子比特</h3>
          <div class="superconducting-qubits">
            <h4>优势</h4>
            <ul>
              <li>高度可控</li>
              <li>快速量子门</li>
              <li>精确测量</li>
              <li>可扩展性</li>
            </ul>
            
            <h4>SYK模拟</h4>
            <ul>
              <li>可编程的哈密顿量</li>
              <li>任意连接拓扑</li>
              <li>实时演化</li>
            </ul>
            
            <h4>Google的实验</h4>
            <p>2022年，Google团队在超导处理器上实现了SYK模型的量子模拟。</p>
          </div>
        </div>

        <div class="experimental-card">
          <h3>量子模拟器</h3>
          <div class="quantum-simulators">
            <h4>数字量子模拟</h4>
            <ul>
              <li>Trotter分解</li>
              <li>量子算法</li>
              <li>错误缓解</li>
            </ul>
            
            <h4>模拟量子模拟</h4>
            <ul>
              <li>直接实现哈密顿量</li>
              <li>自然演化</li>
              <li>连续时间</li>
            </ul>
            
            <h4>未来发展</h4>
            <ul>
              <li>更大系统尺寸</li>
              <li>更长相干时间</li>
              <li>更精确控制</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- 理论意义 -->
      <section class="theoretical-section">
        <h2>🎓 理论意义与展望</h2>
        
        <div class="theoretical-card">
          <h3>对量子引力的启示</h3>
          <ul>
            <li><strong>时空涌现</strong>：几何从纠缠中涌现</li>
            <li><strong>全息原理</strong>：信息的降维存储</li>
            <li><strong>量子纠错</strong>：时空的稳定性机制</li>
            <li><strong>因果结构</strong>：纠缠与因果性的关系</li>
          </ul>
        </div>

        <div class="theoretical-card">
          <h3>对凝聚态物理的影响</h3>
          <ul>
            <li><strong>强关联系统</strong>：新的理论工具</li>
            <li><strong>量子临界点</strong>：全息描述</li>
            <li><strong>奇异金属</strong>：非费米液体行为</li>
            <li><strong>高温超导</strong>：机理的新理解</li>
          </ul>
        </div>

        <div class="theoretical-card">
          <h3>对量子信息的贡献</h3>
          <ul>
            <li><strong>量子纠错</strong>：全息纠错码</li>
            <li><strong>量子计算</strong>：容错量子计算</li>
            <li><strong>量子通信</strong>：安全通信协议</li>
            <li><strong>量子传感</strong>：高精度测量</li>
          </ul>
        </div>
      </section>

      <!-- 总结 -->
      <section class="summary-section">
        <h2>📝 总结</h2>
        <div class="summary-card">
          <p>SYK模型在黑洞物理研究中的重要贡献：</p>
          <ul>
            <li><strong>理论突破</strong>：提供了黑洞的可控微观模型</li>
            <li><strong>信息悖论</strong>：为解决信息悖论提供新思路</li>
            <li><strong>全息对偶</strong>：深化了对时空与信息关系的理解</li>
            <li><strong>实验可行</strong>：开辟了黑洞物理的实验研究途径</li>
          </ul>
          <p>通过SYK模型，我们不仅能够理解黑洞的微观结构，更重要的是揭示了量子信息、几何和引力之间的深刻联系。这为未来的量子引力理论、量子计算技术和强关联物理研究奠定了重要基础。SYK模型作为连接不同物理领域的桥梁，将继续在理论物理的发展中发挥重要作用。</p>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chapter17_4_2',
  mounted() {
    this.$nextTick(() => {
      if (window.renderMathInElement) {
        window.renderMathInElement(this.$el, {
          delimiters: [
            {left: '$$', right: '$$', display: true},
            {left: '$', right: '$', display: false}
          ],
          throwOnError: false
        });
      }
    });
  },
  updated() {
    this.$nextTick(() => {
      if (window.renderMathInElement) {
        window.renderMathInElement(this.$el, {
          delimiters: [
            {left: '$$', right: '$$', display: true},
            {left: '$', right: '$', display: false}
          ],
          throwOnError: false
        });
      }
    });
  }
}
</script>

<style scoped>
.chapter-content {
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: #333;
}

.content-header {
  text-align: center;
  margin-bottom: 30px;
  padding: 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 10px;
}

.content-header h1 {
  margin: 0 0 10px 0;
  font-size: 2.5em;
  font-weight: bold;
}

.subtitle {
  font-size: 1.2em;
  opacity: 0.9;
  margin: 0;
}

.content-body {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

section {
  background: white;
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  border-left: 4px solid #667eea;
}

section h2 {
  color: #667eea;
  margin-bottom: 20px;
  font-size: 1.5em;
  display: flex;
  align-items: center;
  gap: 10px;
}

.concept-card, .hawking-card, .paradox-card, .correction-card, 
.wormhole-card, .numerical-card, .experimental-card, .theoretical-card, .summary-card {
  background: #f8f9fa;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 15px;
  border-left: 3px solid #28a745;
}

.concept-card h3, .hawking-card h3, .paradox-card h3, 
.correction-card h3, .wormhole-card h3, .numerical-card h3, 
.experimental-card h3, .theoretical-card h3, .summary-card h3 {
  color: #495057;
  margin-bottom: 15px;
  font-size: 1.2em;
}

.formula {
  background: white;
  padding: 15px;
  border-radius: 5px;
  margin: 10px 0;
  text-align: center;
  border: 1px solid #dee2e6;
  font-size: 1.1em;
}

.connection-content h4, .discovery-content h4, .syk-hawking h4,
.spectrum-content h4, .paradox-formulation h4, .page-curve h4,
.syk-paradox h4, .error-correction h4, .ads-correction h4,
.syk-correction h4, .er-bridge h4, .er-epr h4,
.traversable-wormhole h4, .exact-diagonalization h4, .quantum-monte-carlo h4,
.machine-learning h4, .cold-atoms h4, .superconducting-qubits h4,
.quantum-simulators h4 {
  color: #6c757d;
  margin-top: 15px;
  margin-bottom: 8px;
}

ul {
  padding-left: 20px;
}

ol {
  padding-left: 20px;
}

li {
  margin-bottom: 8px;
}

strong {
  color: #495057;
  font-weight: 600;
}

.hawking-section {
  border-left-color: #ffc107;
}

.information-section {
  border-left-color: #dc3545;
}

.holographic-section {
  border-left-color: #6f42c1;
}

.wormhole-section {
  border-left-color: #e83e8c;
}

.numerical-section {
  border-left-color: #20c997;
}

.experimental-section {
  border-left-color: #fd7e14;
}

.theoretical-section {
  border-left-color: #6610f2;
}

.hawking-card {
  border-left-color: #ffc107;
}

.paradox-card {
  border-left-color: #dc3545;
}

.correction-card {
  border-left-color: #6f42c1;
}

.wormhole-card {
  border-left-color: #e83e8c;
}

.numerical-card {
  border-left-color: #20c997;
}

.experimental-card {
  border-left-color: #fd7e14;
}

.theoretical-card {
  border-left-color: #6610f2;
}

.summary-card {
  border-left-color: #17a2b8;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
}

@media (max-width: 768px) {
  .chapter-content {
    padding: 15px;
  }
  
  .content-header h1 {
    font-size: 2em;
  }
  
  section {
    padding: 20px;
  }
}
</style>