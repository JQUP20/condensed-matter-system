<template>
  <div class="chapter-content">
    <h1>19.4.2 生物物理</h1>
    
    <div class="content-section">
      <h2>1. 生物物理学概述</h2>
      <p>生物物理学是运用物理学的概念、理论和方法研究生物系统的交叉学科，旨在从分子、细胞到组织器官等多个层次理解生命现象的物理机制。</p>
      
      <h3>1.1 学科特点</h3>
      <ul>
        <li><strong>多尺度研究</strong>：从分子到宏观</li>
        <li><strong>定量分析</strong>：数学建模与实验</li>
        <li><strong>物理原理</strong>：热力学、统计力学、量子力学</li>
        <li><strong>技术驱动</strong>：先进物理技术应用</li>
      </ul>

      <h3>1.2 研究层次</h3>
      <ul>
        <li><strong>分子层次</strong>：蛋白质、DNA、RNA结构与功能</li>
        <li><strong>细胞层次</strong>：膜结构、细胞器、信号传导</li>
        <li><strong>组织层次</strong>：细胞间相互作用、组织力学</li>
        <li><strong>器官层次</strong>：器官功能、生理过程</li>
        <li><strong>系统层次</strong>：整体生物系统行为</li>
      </ul>
    </div>

    <div class="content-section">
      <h2>2. 分子生物物理</h2>
      
      <h3>2.1 蛋白质物理</h3>
      <p><strong>蛋白质折叠</strong>：</p>
      <p>Levinthal悖论：蛋白质折叠的时间尺度问题</p>
      <div class="formula">
        $$t_{fold} \sim \tau_0 \cdot 3^N$$
      </div>
      <p>其中$N$是氨基酸残基数，$\tau_0 \sim 10^{-13}$s。</p>

      <p><strong>折叠漏斗模型</strong>：</p>
      <div class="formula">
        $$F(Q) = -\epsilon N Q^2 + T S(Q)$$
      </div>
      <p>其中$Q$是天然接触分数，$S(Q)$是构象熵。</p>

      <p><strong>蛋白质动力学</strong>：</p>
      <ul>
        <li>构象变化</li>
        <li>酶催化机制</li>
        <li>分子马达</li>
        <li>变构调节</li>
      </ul>

      <h3>2.2 DNA物理</h3>
      <p><strong>DNA弹性</strong>：</p>
      <p>蠕虫链模型（WLC）：</p>
      <div class="formula">
        $$\langle R^2 \rangle = 2L_p L \left(1 - \frac{L_p}{L}(1-e^{-L/L_p})\right)$$
      </div>
      <p>其中$L_p$是持续长度，$L$是轮廓长度。</p>

      <p><strong>DNA超螺旋</strong>：</p>
      <div class="formula">
        $$Lk = Tw + Wr$$
      </div>
      <p>其中$Lk$是连环数，$Tw$是扭转数，$Wr$是缠绕数。</p>

      <p><strong>DNA-蛋白质相互作用</strong>：</p>
      <ul>
        <li>转录因子结合</li>
        <li>DNA修复机制</li>
        <li>染色质重塑</li>
        <li>基因调控</li>
      </ul>

      <h3>2.3 膜生物物理</h3>
      <p><strong>脂质双分子层</strong>：</p>
      <p>弯曲弹性能：</p>
      <div class="formula">
        $$E = \frac{\kappa}{2}\int (H - H_0)^2 dA + \bar{\kappa}\int K dA$$
      </div>
      <p>其中$H$是平均曲率，$K$是高斯曲率。</p>

      <p><strong>膜蛋白</strong>：</p>
      <ul>
        <li>离子通道</li>
        <li>载体蛋白</li>
        <li>受体蛋白</li>
        <li>膜融合蛋白</li>
      </ul>

      <p><strong>膜相变</strong>：</p>
      <ul>
        <li>凝胶-液晶相变</li>
        <li>脂筏形成</li>
        <li>膜域分离</li>
      </ul>
    </div>

    <div class="content-section">
      <h2>3. 细胞生物物理</h2>
      
      <h3>3.1 细胞力学</h3>
      <p><strong>细胞骨架</strong>：</p>
      <ul>
        <li><strong>肌动蛋白丝</strong>：细胞运动、形状维持</li>
        <li><strong>微管</strong>：细胞分裂、胞内运输</li>
        <li><strong>中间丝</strong>：机械支撑</li>
      </ul>

      <p><strong>细胞弹性模量</strong>：</p>
      <div class="formula">
        $$E = \frac{\sigma}{\epsilon}$$
      </div>
      <p>典型值：$E \sim 0.1-10$ kPa</p>

      <p><strong>细胞运动</strong>：</p>
      <ul>
        <li>肌动蛋白聚合驱动</li>
        <li>肌球蛋白收缩</li>
        <li>黏附动力学</li>
        <li>趋化性</li>
      </ul>

      <h3>3.2 细胞电生理</h3>
      <p><strong>膜电位</strong>：</p>
      <p>Nernst方程：</p>
      <div class="formula">
        $$E_{ion} = \frac{RT}{zF}\ln\frac{[ion]_{out}}{[ion]_{in}}$$
      </div>

      <p>Goldman-Hodgkin-Katz方程：</p>
      <div class="formula">
        $$V_m = \frac{RT}{F}\ln\frac{P_K[K^+]_o + P_{Na}[Na^+]_o + P_{Cl}[Cl^-]_i}{P_K[K^+]_i + P_{Na}[Na^+]_i + P_{Cl}[Cl^-]_o}$$
      </div>

      <p><strong>动作电位</strong>：</p>
      <p>Hodgkin-Huxley模型：</p>
      <div class="formula">
        $$C_m\frac{dV}{dt} = -g_K n^4(V-E_K) - g_{Na} m^3 h(V-E_{Na}) - g_L(V-E_L) + I$$
      </div>

      <h3>3.3 细胞信号传导</h3>
      <p><strong>信号放大</strong>：</p>
      <ul>
        <li>酶级联反应</li>
        <li>第二信使系统</li>
        <li>正反馈机制</li>
      </ul>

      <p><strong>信号网络</strong>：</p>
      <ul>
        <li>信号整合</li>
        <li>交叉调节</li>
        <li>时空动力学</li>
      </ul>
    </div>

    <div class="content-section">
      <h2>4. 神经生物物理</h2>
      
      <h3>4.1 神经元模型</h3>
      <p><strong>积分发放模型</strong>：</p>
      <div class="formula">
        $$\tau_m \frac{dV}{dt} = -(V - V_{rest}) + R_m I(t)$$
      </div>

      <p><strong>FitzHugh-Nagumo模型</strong>：</p>
      <div class="formula">
        $$\frac{dv}{dt} = v - \frac{v^3}{3} - w + I$$
      </div>
      <div class="formula">
        $$\frac{dw}{dt} = \epsilon(v + a - bw)$$
      </div>

      <h3>4.2 突触传递</h3>
      <p><strong>突触可塑性</strong>：</p>
      <ul>
        <li>长时程增强（LTP）</li>
        <li>长时程抑制（LTD）</li>
        <li>短时程可塑性</li>
        <li>稳态可塑性</li>
      </ul>

      <p><strong>神经递质动力学</strong>：</p>
      <div class="formula">
        $$\frac{d[NT]}{dt} = -k_{uptake}[NT] + k_{release}N_{vesicle}$$
      </div>

      <h3>4.3 神经网络动力学</h3>
      <p><strong>网络振荡</strong>：</p>
      <ul>
        <li>γ振荡（30-100 Hz）</li>
        <li>θ振荡（4-8 Hz）</li>
        <li>α振荡（8-12 Hz）</li>
        <li>δ振荡（0.5-4 Hz）</li>
      </ul>

      <p><strong>同步化</strong>：</p>
      <ul>
        <li>相位锁定</li>
        <li>频率同步</li>
        <li>混沌同步</li>
      </ul>
    </div>

    <div class="content-section">
      <h2>5. 生物系统的物理原理</h2>
      
      <h3>5.1 热力学与生命</h3>
      <p><strong>非平衡态热力学</strong>：</p>
      <p>熵产生率：</p>
      <div class="formula">
        $$\frac{dS}{dt} = \frac{d_iS}{dt} + \frac{d_eS}{dt} \geq 0$$
      </div>

      <p><strong>耗散结构</strong>：</p>
      <ul>
        <li>自组织现象</li>
        <li>模式形成</li>
        <li>稳态维持</li>
      </ul>

      <p><strong>生物能量学</strong>：</p>
      <ul>
        <li>ATP水解</li>
        <li>电化学梯度</li>
        <li>能量转换效率</li>
      </ul>

      <h3>5.2 统计力学与生物系统</h3>
      <p><strong>分子马达</strong>：</p>
      <p>布朗棘轮模型：</p>
      <div class="formula">
        $$v = \frac{k_B T}{6\pi\eta r} \frac{\partial \ln Z}{\partial x}$$
      </div>

      <p><strong>协同效应</strong>：</p>
      <ul>
        <li>Hill方程</li>
        <li>变构调节</li>
        <li>协同结合</li>
      </ul>

      <h3>5.3 信息论与生物学</h3>
      <p><strong>生物信息</strong>：</p>
      <p>Shannon熵：</p>
      <div class="formula">
        $$H = -\sum_i p_i \log_2 p_i$$
      </div>

      <p><strong>信息传递</strong>：</p>
      <ul>
        <li>信道容量</li>
        <li>噪声与信号</li>
        <li>纠错机制</li>
      </ul>
    </div>

    <div class="content-section">
      <h2>6. 实验技术与方法</h2>
      
      <h3>6.1 单分子技术</h3>
      <p><strong>光学镊子</strong>：</p>
      <ul>
        <li>力测量（pN级别）</li>
        <li>位移测量（nm级别）</li>
        <li>分子操控</li>
      </ul>

      <p><strong>原子力显微镜</strong>：</p>
      <ul>
        <li>高分辨成像</li>
        <li>力谱测量</li>
        <li>动态过程观察</li>
      </ul>

      <p><strong>磁镊技术</strong>：</p>
      <ul>
        <li>扭转力测量</li>
        <li>DNA超螺旋研究</li>
        <li>蛋白质展开</li>
      </ul>

      <h3>6.2 光学成像技术</h3>
      <p><strong>超分辨显微镜</strong>：</p>
      <ul>
        <li>STED显微镜</li>
        <li>PALM/STORM</li>
        <li>结构光照明</li>
      </ul>

      <p><strong>荧光技术</strong>：</p>
      <ul>
        <li>FRET</li>
        <li>荧光寿命成像</li>
        <li>光漂白恢复</li>
      </ul>

      <h3>6.3 电生理技术</h3>
      <ul>
        <li>膜片钳技术</li>
        <li>胞内记录</li>
        <li>多电极阵列</li>
        <li>光遗传学</li>
      </ul>

      <h3>6.4 结构生物学技术</h3>
      <ul>
        <li>X射线晶体学</li>
        <li>核磁共振</li>
        <li>冷冻电镜</li>
        <li>小角散射</li>
      </ul>
    </div>

    <div class="content-section">
      <h2>7. 计算生物物理</h2>
      
      <h3>7.1 分子动力学模拟</h3>
      <p><strong>经典MD</strong>：</p>
      <p>牛顿运动方程：</p>
      <div class="formula">
        $$m_i \frac{d^2\mathbf{r}_i}{dt^2} = -\nabla_i U(\mathbf{r}_1, ..., \mathbf{r}_N)$$
      </div>

      <p><strong>力场模型</strong>：</p>
      <div class="formula">
        $$U = \sum_{bonds} k_b(r-r_0)^2 + \sum_{angles} k_\theta(\theta-\theta_0)^2 + \sum_{dihedrals} V_n\cos(n\phi-\gamma) + \sum_{i&lt;j} \left[\frac{A_{ij}}{r_{ij}^{12}} - \frac{B_{ij}}{r_{ij}^6} + \frac{q_iq_j}{4\pi\epsilon_0 r_{ij}}\right]$$
      </div>

      <p><strong>增强采样方法</strong>：</p>
      <ul>
        <li>伞形采样</li>
        <li>副本交换</li>
        <li>元动力学</li>
        <li>自适应偏置力</li>
      </ul>

      <h3>7.2 量子化学计算</h3>
      <p><strong>密度泛函理论</strong>：</p>
      <div class="formula">
        $$E[\rho] = T[\rho] + V_{ext}[\rho] + V_{ee}[\rho]$$
      </div>

      <p><strong>QM/MM方法</strong>：</p>
      <ul>
        <li>活性位点量子处理</li>
        <li>环境经典处理</li>
        <li>边界处理</li>
      </ul>

      <h3>7.3 系统生物学建模</h3>
      <p><strong>反应网络</strong>：</p>
      <p>质量作用定律：</p>
      <div class="formula">
        $$\frac{d[X_i]}{dt} = \sum_j \nu_{ij} v_j$$
      </div>

      <p><strong>随机模拟</strong>：</p>
      <ul>
        <li>Gillespie算法</li>
        <li>化学Langevin方程</li>
        <li>跳跃扩散过程</li>
      </ul>
    </div>

    <div class="content-section">
      <h2>8. 应用领域</h2>
      
      <h3>8.1 药物设计</h3>
      <ul>
        <li><strong>分子对接</strong>：药物-靶点相互作用</li>
        <li><strong>药效团模型</strong>：活性位点识别</li>
        <li><strong>ADMET预测</strong>：药代动力学</li>
        <li><strong>副作用预测</strong>：脱靶效应</li>
      </ul>

      <h3>8.2 疾病机制研究</h3>
      <ul>
        <li><strong>蛋白质错误折叠</strong>：神经退行性疾病</li>
        <li><strong>离子通道病</strong>：遗传性疾病</li>
        <li><strong>癌症物理学</strong>：肿瘤生长与转移</li>
        <li><strong>心血管疾病</strong>：血流动力学</li>
      </ul>

      <h3>8.3 生物技术</h3>
      <ul>
        <li><strong>蛋白质工程</strong>：酶设计与改造</li>
        <li><strong>基因治疗</strong>：载体设计</li>
        <li><strong>生物传感器</strong>：检测原理</li>
        <li><strong>组织工程</strong>：支架材料</li>
      </ul>

      <h3>8.4 合成生物学</h3>
      <ul>
        <li><strong>生物电路</strong>：基因调控网络</li>
        <li><strong>人工细胞</strong>：最小生命系统</li>
        <li><strong>生物计算</strong>：DNA计算</li>
        <li><strong>代谢工程</strong>：代谢途径设计</li>
      </ul>
    </div>

    <div class="content-section">
      <h2>9. 前沿发展方向</h2>
      
      <h3>9.1 量子生物学</h3>
      <ul>
        <li><strong>光合作用</strong>：量子相干传能</li>
        <li><strong>酶催化</strong>：量子隧穿效应</li>
        <li><strong>鸟类导航</strong>：量子罗盘</li>
        <li><strong>嗅觉机制</strong>：量子振动理论</li>
      </ul>

      <h3>9.2 机器学习与生物物理</h3>
      <ul>
        <li><strong>蛋白质结构预测</strong>：AlphaFold</li>
        <li><strong>药物发现</strong>：深度学习</li>
        <li><strong>基因组分析</strong>：序列模式识别</li>
        <li><strong>医学影像</strong>：诊断辅助</li>
      </ul>

      <h3>9.3 多尺度建模</h3>
      <ul>
        <li><strong>跨尺度耦合</strong>：分子到细胞</li>
        <li><strong>多物理场</strong>：力-化学-电耦合</li>
        <li><strong>时间尺度</strong>：快慢动力学分离</li>
        <li><strong>空间尺度</strong>：连续-离散耦合</li>
      </ul>

      <h3>9.4 单细胞生物物理</h3>
      <ul>
        <li><strong>单细胞测序</strong>：基因表达异质性</li>
        <li><strong>单细胞力学</strong>：细胞个体差异</li>
        <li><strong>单细胞代谢</strong>：代谢流分析</li>
        <li><strong>单细胞成像</strong>：动态过程追踪</li>
      </ul>
    </div>

    <div class="content-section">
      <h2>10. 未来展望</h2>
      
      <div class="highlight-box">
        <h4>科学前沿</h4>
        <ul>
          <li><strong>生命起源</strong>：从物理到生物的转变</li>
          <li><strong>意识机制</strong>：神经活动的物理基础</li>
          <li><strong>衰老机制</strong>：时间对生物系统的影响</li>
          <li><strong>进化动力学</strong>：适应性景观理论</li>
        </ul>
      </div>

      <div class="highlight-box">
        <h4>技术发展</h4>
        <ul>
          <li><strong>精准医学</strong>：个体化治疗方案</li>
          <li><strong>再生医学</strong>：组织器官再生</li>
          <li><strong>脑机接口</strong>：神经信号解码</li>
          <li><strong>生物计算机</strong>：DNA存储与计算</li>
        </ul>
      </div>

      <div class="highlight-box">
        <h4>社会影响</h4>
        <ul>
          <li><strong>健康管理</strong>：预防性医疗</li>
          <li><strong>食品安全</strong>：营养优化</li>
          <li><strong>环境保护</strong>：生物修复技术</li>
          <li><strong>能源生产</strong>：生物燃料</li>
          <li><strong>材料科学</strong>：仿生材料</li>
        </ul>
      </div>

      <p>生物物理学作为连接物理科学与生命科学的桥梁，将继续推动我们对生命本质的理解，为人类健康、环境保护和可持续发展提供科学基础和技术支撑。</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chapter19_4_2',
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