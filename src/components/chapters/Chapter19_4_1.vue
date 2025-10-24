<template>
  <div class="chapter-content">
    <h1>19.4.1 量子信息科学</h1>
    
    <div class="content-section">
      <h2>1. 量子信息科学概述</h2>
      <p>量子信息科学是研究量子力学原理在信息处理中应用的交叉学科，融合了量子物理、计算机科学、信息论和数学等多个领域。</p>
      
      <h3>1.1 核心概念</h3>
      <ul>
        <li><strong>量子比特</strong>：量子信息的基本单位</li>
        <li><strong>量子叠加</strong>：同时处于多个状态</li>
        <li><strong>量子纠缠</strong>：非局域量子关联</li>
        <li><strong>量子测量</strong>：信息提取过程</li>
        <li><strong>量子相干</strong>：相位关系的保持</li>
      </ul>

      <h3>1.2 学科交叉特点</h3>
      <ul>
        <li>物理学提供理论基础</li>
        <li>计算机科学提供算法框架</li>
        <li>信息论提供理论工具</li>
        <li>数学提供分析方法</li>
        <li>工程学提供实现途径</li>
      </ul>
    </div>

    <div class="content-section">
      <h2>2. 量子信息理论基础</h2>
      
      <h3>2.1 量子态与量子比特</h3>
      <p>单量子比特态：</p>
      <div class="formula">
        $$|\psi\rangle = \alpha|0\rangle + \beta|1\rangle$$
      </div>
      <p>其中$|\alpha|^2 + |\beta|^2 = 1$。</p>

      <p>Bloch球表示：</p>
      <div class="formula">
        $$|\psi\rangle = \cos\frac{\theta}{2}|0\rangle + e^{i\phi}\sin\frac{\theta}{2}|1\rangle$$
      </div>

      <h3>2.2 量子纠缠</h3>
      <p>Bell态（最大纠缠态）：</p>
      <div class="formula">
        $$|\Phi^+\rangle = \frac{1}{\sqrt{2}}(|00\rangle + |11\rangle)$$
      </div>
      <div class="formula">
        $$|\Phi^-\rangle = \frac{1}{\sqrt{2}}(|00\rangle - |11\rangle)$$
      </div>

      <p>纠缠度量（并发度）：</p>
      <div class="formula">
        $$C(\rho) = \max\{0, \lambda_1 - \lambda_2 - \lambda_3 - \lambda_4\}$$
      </div>

      <h3>2.3 量子信息熵</h3>
      <p>von Neumann熵：</p>
      <div class="formula">
        $$S(\rho) = -\text{Tr}(\rho \log_2 \rho)$$
      </div>

      <p>量子互信息：</p>
      <div class="formula">
        $$I(A:B) = S(\rho_A) + S(\rho_B) - S(\rho_{AB})$$
      </div>

      <h3>2.4 量子不可克隆定理</h3>
      <p>不存在幺正变换能够完美复制任意未知量子态：</p>
      <div class="formula">
        $$\nexists U: U|\psi\rangle|0\rangle = |\psi\rangle|\psi\rangle \quad \forall |\psi\rangle$$
      </div>
    </div>

    <div class="content-section">
      <h2>3. 量子计算理论</h2>
      
      <h3>3.1 量子计算模型</h3>
      <p><strong>量子电路模型</strong>：</p>
      <ul>
        <li>量子门操作</li>
        <li>幺正演化</li>
        <li>测量操作</li>
      </ul>

      <p><strong>绝热量子计算</strong>：</p>
      <ul>
        <li>绝热定理</li>
        <li>哈密顿量演化</li>
        <li>基态计算</li>
      </ul>

      <p><strong>测量驱动量子计算</strong>：</p>
      <ul>
        <li>簇态资源</li>
        <li>自适应测量</li>
        <li>单向计算</li>
      </ul>

      <h3>3.2 量子算法复杂性</h3>
      <p><strong>复杂性类别</strong>：</p>
      <ul>
        <li><strong>BQP</strong>：有界误差量子多项式时间</li>
        <li><strong>QMA</strong>：量子Merlin-Arthur</li>
        <li><strong>QPSPACE</strong>：量子多项式空间</li>
      </ul>

      <p><strong>量子优势</strong>：</p>
      <ul>
        <li>指数加速：Shor算法</li>
        <li>平方根加速：Grover算法</li>
        <li>多项式加速：某些问题</li>
      </ul>

      <h3>3.3 量子纠错理论</h3>
      <p>量子纠错条件：</p>
      <div class="formula">
        $$\langle \psi_i | E_a^\dagger E_b | \psi_j \rangle = C_{ab} \delta_{ij}$$
      </div>

      <p><strong>稳定子码</strong>：</p>
      <ul>
        <li>Pauli群生成元</li>
        <li>稳定子条件</li>
        <li>逻辑算符</li>
      </ul>
    </div>

    <div class="content-section">
      <h2>4. 量子通信与密码学</h2>
      
      <h3>4.1 量子密钥分发</h3>
      <p><strong>BB84协议</strong>：</p>
      <ol>
        <li>Alice随机选择基和比特值</li>
        <li>Bob随机选择测量基</li>
        <li>公开比较基的选择</li>
        <li>保留基相同的结果</li>
        <li>错误率检测</li>
        <li>隐私放大</li>
      </ol>

      <p>安全密钥率：</p>
      <div class="formula">
        $$R = 1 - h(e) - f(e)h(e)$$
      </div>
      <p>其中$e$是量子误码率，$h(x)$是二进制熵函数。</p>

      <h3>4.2 量子隐形传态</h3>
      <p>传态保真度：</p>
      <div class="formula">
        $$F = \langle \psi | \rho_{out} | \psi \rangle$$
      </div>

      <p><strong>连续变量隐形传态</strong>：</p>
      <ul>
        <li>压缩态资源</li>
        <li>同步检测</li>
        <li>前馈控制</li>
      </ul>

      <h3>4.3 量子网络</h3>
      <p><strong>网络拓扑</strong>：</p>
      <ul>
        <li>点对点连接</li>
        <li>星型网络</li>
        <li>网状网络</li>
        <li>分层网络</li>
      </ul>

      <p><strong>量子路由</strong>：</p>
      <ul>
        <li>纠缠分发</li>
        <li>纠缠交换</li>
        <li>纠缠纯化</li>
      </ul>
    </div>

    <div class="content-section">
      <h2>5. 量子传感与计量</h2>
      
      <h3>5.1 量子参数估计</h3>
      <p>Cramér-Rao下界：</p>
      <div class="formula">
        $$\text{Var}(\hat{\theta}) \geq \frac{1}{F(\theta)}$$
      </div>
      <p>其中$F(\theta)$是Fisher信息。</p>

      <p>量子Fisher信息：</p>
      <div class="formula">
        $$F_Q(\theta) = 4(\langle \partial_\theta \psi | \partial_\theta \psi \rangle - |\langle \psi | \partial_\theta \psi \rangle|^2)$$
      </div>

      <h3>5.2 量子增强测量</h3>
      <p><strong>压缩态</strong>：</p>
      <ul>
        <li>自旋压缩</li>
        <li>光场压缩</li>
        <li>原子压缩</li>
      </ul>

      <p><strong>纠缠态</strong>：</p>
      <ul>
        <li>GHZ态</li>
        <li>NOON态</li>
        <li>自旋猫态</li>
      </ul>

      <h3>5.3 量子时钟网络</h3>
      <ul>
        <li>光钟技术</li>
        <li>时间同步</li>
        <li>相对论效应</li>
        <li>基础物理检验</li>
      </ul>
    </div>

    <div class="content-section">
      <h2>6. 量子机器学习</h2>
      
      <h3>6.1 量子数据编码</h3>
      <p><strong>振幅编码</strong>：</p>
      <div class="formula">
        $$|\psi\rangle = \frac{1}{\sqrt{N}} \sum_{i=0}^{N-1} x_i |i\rangle$$
      </div>

      <p><strong>角度编码</strong>：</p>
      <div class="formula">
        $$|\psi\rangle = \bigotimes_{i=1}^n (\cos(x_i)|0\rangle + \sin(x_i)|1\rangle)$$
      </div>

      <h3>6.2 变分量子算法</h3>
      <p><strong>参数化量子电路</strong>：</p>
      <div class="formula">
        $$U(\theta) = \prod_{l=1}^L U_l(\theta_l)$$
      </div>

      <p><strong>成本函数优化</strong>：</p>
      <div class="formula">
        $$C(\theta) = \langle \psi(\theta) | H | \psi(\theta) \rangle$$
      </div>

      <h3>6.3 量子神经网络</h3>
      <ul>
        <li>量子感知机</li>
        <li>量子卷积网络</li>
        <li>量子循环网络</li>
        <li>量子生成对抗网络</li>
      </ul>

      <h3>6.4 量子优势分析</h3>
      <ul>
        <li>希尔伯特空间维度</li>
        <li>量子并行性</li>
        <li>量子干涉</li>
        <li>纠缠资源</li>
      </ul>
    </div>

    <div class="content-section">
      <h2>7. 实验平台与技术</h2>
      
      <h3>7.1 物理实现平台</h3>
      <p><strong>原子系统</strong>：</p>
      <ul>
        <li>冷原子</li>
        <li>离子阱</li>
        <li>Rydberg原子</li>
        <li>原子系综</li>
      </ul>

      <p><strong>固态系统</strong>：</p>
      <ul>
        <li>超导量子比特</li>
        <li>量子点</li>
        <li>NV中心</li>
        <li>硅量子比特</li>
      </ul>

      <p><strong>光子系统</strong>：</p>
      <ul>
        <li>线性光学</li>
        <li>光子芯片</li>
        <li>腔QED</li>
        <li>连续变量</li>
      </ul>

      <h3>7.2 量子控制技术</h3>
      <ul>
        <li>脉冲序列设计</li>
        <li>动力学解耦</li>
        <li>复合脉冲</li>
        <li>最优控制</li>
      </ul>

      <h3>7.3 量子测量技术</h3>
      <ul>
        <li>投影测量</li>
        <li>弱测量</li>
        <li>量子非破坏测量</li>
        <li>连续监测</li>
      </ul>
    </div>

    <div class="content-section">
      <h2>8. 应用与产业化</h2>
      
      <h3>8.1 近期应用</h3>
      <ul>
        <li><strong>量子密码</strong>：商用QKD系统</li>
        <li><strong>量子传感</strong>：精密测量仪器</li>
        <li><strong>量子模拟</strong>：材料设计</li>
        <li><strong>量子优化</strong>：组合问题求解</li>
      </ul>

      <h3>8.2 中期前景</h3>
      <ul>
        <li>容错量子计算</li>
        <li>量子互联网</li>
        <li>量子人工智能</li>
        <li>量子化学计算</li>
      </ul>

      <h3>8.3 产业生态</h3>
      <ul>
        <li><strong>硬件厂商</strong>：IBM、Google、IonQ</li>
        <li><strong>软件平台</strong>：Qiskit、Cirq、PennyLane</li>
        <li><strong>云服务</strong>：量子云计算</li>
        <li><strong>应用开发</strong>：垂直领域解决方案</li>
      </ul>
    </div>

    <div class="content-section">
      <h2>9. 挑战与机遇</h2>
      
      <h3>9.1 技术挑战</h3>
      <ul>
        <li><strong>量子相干性</strong>：环境退相干</li>
        <li><strong>量子纠错</strong>：开销与阈值</li>
        <li><strong>可扩展性</strong>：大规模集成</li>
        <li><strong>控制精度</strong>：高保真操作</li>
      </ul>

      <h3>9.2 理论挑战</h3>
      <ul>
        <li>量子优势边界</li>
        <li>噪声模型</li>
        <li>算法设计</li>
        <li>复杂性理论</li>
      </ul>

      <h3>9.3 发展机遇</h3>
      <ul>
        <li>政府投资支持</li>
        <li>产业需求驱动</li>
        <li>人才培养</li>
        <li>国际合作</li>
      </ul>
    </div>

    <div class="content-section">
      <h2>10. 未来展望</h2>
      
      <div class="highlight-box">
        <h4>科学前沿</h4>
        <ul>
          <li><strong>量子多体系统</strong>：复杂量子态操控</li>
          <li><strong>量子场论</strong>：连续系统量子信息</li>
          <li><strong>量子引力</strong>：时空的量子信息结构</li>
          <li><strong>量子生物学</strong>：生命过程中的量子效应</li>
        </ul>
      </div>

      <div class="highlight-box">
        <h4>技术发展</h4>
        <ul>
          <li><strong>容错量子计算</strong>：实用化量子计算机</li>
          <li><strong>量子互联网</strong>：全球量子通信网络</li>
          <li><strong>量子传感网络</strong>：分布式精密测量</li>
          <li><strong>量子人工智能</strong>：智能系统新范式</li>
        </ul>
      </div>

      <div class="highlight-box">
        <h4>社会影响</h4>
        <ul>
          <li><strong>信息安全</strong>：密码学革命</li>
          <li><strong>科学计算</strong>：复杂问题求解</li>
          <li><strong>医疗健康</strong>：精准诊断治疗</li>
          <li><strong>金融服务</strong>：风险分析优化</li>
          <li><strong>能源环境</strong>：材料设计优化</li>
        </ul>
      </div>

      <p>量子信息科学作为21世纪的颠覆性技术，将深刻改变人类对信息处理的认知，推动科学技术和社会发展进入全新的量子时代。</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chapter19_4_1',
  mounted() {
    // 渲染数学公式
    if (window.renderMathInElement) {
      window.renderMathInElement(this.$el, {
        delimiters: [
          {left: '$$', right: '$$', display: true},
          {left: '$', right: '$', display: false}
        ]
      });
    }
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

h1 {
  color: #2c3e50;
  border-bottom: 3px solid #3498db;
  padding-bottom: 10px;
  margin-bottom: 30px;
  font-size: 2.5em;
}

h2 {
  color: #34495e;
  margin-top: 30px;
  margin-bottom: 20px;
  font-size: 1.8em;
  border-left: 4px solid #3498db;
  padding-left: 15px;
}

h3 {
  color: #2c3e50;
  margin-top: 25px;
  margin-bottom: 15px;
  font-size: 1.4em;
}

h4 {
  color: #2c3e50;
  margin-top: 20px;
  margin-bottom: 10px;
  font-size: 1.2em;
}

.content-section {
  margin-bottom: 30px;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.formula {
  background-color: #fff;
  border: 1px solid #e1e8ed;
  border-radius: 6px;
  padding: 15px;
  margin: 15px 0;
  text-align: center;
  font-size: 1.1em;
  overflow-x: auto;
}

ul, ol {
  margin: 15px 0;
  padding-left: 30px;
}

li {
  margin: 8px 0;
}

.highlight-box {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 20px;
  border-radius: 10px;
  margin: 20px 0;
  box-shadow: 0 4px 15px rgba(0,0,0,0.2);
}

.highlight-box h4 {
  color: white;
  margin-top: 0;
}

.highlight-box ul {
  margin: 10px 0;
}

.highlight-box li {
  margin: 5px 0;
}

p {
  margin: 12px 0;
  text-align: justify;
}

strong {
  color: #2c3e50;
  font-weight: 600;
}

@media (max-width: 768px) {
  .chapter-content {
    padding: 15px;
  }
  
  h1 {
    font-size: 2em;
  }
  
  h2 {
    font-size: 1.5em;
  }
  
  .content-section {
    padding: 15px;
  }
}
</style>