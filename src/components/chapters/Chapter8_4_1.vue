<template>
  <div class="chapter-content">
    <div class="chapter-header">
      <h1 class="chapter-title">8.4.1 物理量的统计平均计算</h1>
      <div class="chapter-meta">
        <span class="chapter-tag">量子统计</span>
        <span class="chapter-tag">平均值计算</span>
        <span class="reading-time">⏱ 25分钟阅读</span>
      </div>
    </div>

    <div class="introduction">
      <h2>引言</h2>
      <p class="lead-text">
        在量子统计力学中，物理量的期望值计算是连接微观量子态和宏观可观测量的桥梁。
        本节将详细介绍如何在不同统计系综中计算物理量的平均值，以及量子统计与经典统计的对应关系。
      </p>
    </div>

    <section class="content-section">
      <h2>统计系综与平均值</h2>
      
      <div class="ensemble-types">
        <div class="ensemble-card canonical">
          <h3>正则系综 (Canonical Ensemble)</h3>
          <div class="ensemble-content">
            <p><strong>系统特征：</strong>温度T固定，粒子数N固定</p>
            <div class="formula-block">
              <katex-element expression="\rho = \frac{1}{Z} e^{-\beta H}" :inline="false" />
            </div>
            <p><strong>配分函数：</strong></p>
            <div class="formula-block">
              <katex-element expression="Z = \text{Tr}[e^{-\beta H}] = \sum_n e^{-\beta E_n}" :inline="false" />
            </div>
            <p><strong>物理量平均值：</strong></p>
            <div class="formula-block">
              <katex-element expression="\langle A \rangle = \text{Tr}[\rho A] = \frac{1}{Z} \sum_n \langle n | A | n \rangle e^{-\beta E_n}" :inline="false" />
            </div>
          </div>
        </div>

        <div class="ensemble-card grand-canonical">
          <h3>巨正则系综 (Grand Canonical Ensemble)</h3>
          <div class="ensemble-content">
            <p><strong>系统特征：</strong>温度T和化学势μ固定</p>
            <div class="formula-block">
              <katex-element expression="\rho = \frac{1}{\Xi} e^{-\beta (H - \mu N)}" :inline="false" />
            </div>
            <p><strong>巨配分函数：</strong></p>
            <div class="formula-block">
              <katex-element expression="\Xi = \text{Tr}[e^{-\beta (H - \mu N)}]" :inline="false" />
            </div>
            <p><strong>物理量平均值：</strong></p>
            <div class="formula-block">
              <katex-element expression="\langle A \rangle = \frac{1}{\Xi} \text{Tr}[A e^{-\beta (H - \mu N)}]" :inline="false" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>具体计算方法</h2>
      
      <div class="calculation-methods">
        <div class="method-card">
          <h3>1. 能量本征态展开</h3>
          <div class="method-content">
            <p>当哈密顿量的本征态已知时：</p>
            <div class="formula-block">
              <katex-element expression="H|n\rangle = E_n|n\rangle" :inline="false" />
            </div>
            <p>物理量A的期望值为：</p>
            <div class="formula-block">
              <katex-element expression="\langle A \rangle = \frac{\sum_n \langle n|A|n\rangle e^{-\beta E_n}}{\sum_n e^{-\beta E_n}}" :inline="false" />
            </div>
            
            <div class="example-box">
              <h4>例子：自由费米气体的能量</h4>
              <p>对于自由费米气体，单粒子能量为 $\varepsilon_k = \frac{\hbar^2 k^2}{2m}$</p>
              <div class="formula-block">
                <katex-element expression="\langle E \rangle = \sum_k \varepsilon_k \langle n_k \rangle = \sum_k \varepsilon_k f(\varepsilon_k)" :inline="false" />
              </div><p>其中$f(\varepsilon) = \frac{1}{e^{\beta(\varepsilon-\mu)} + 1}$是费米分布函数。</p>
            </div>
          </div>
        </div>

        <div class="method-card">
          <h3>2. 路径积分方法</h3>
          <div class="method-content">
            <p>在虚时路径积分表示中：</p>
            <div class="formula-block">
              <katex-element expression="Z = \int \mathcal{D}\phi \, e^{-S[\phi]/\hbar}" :inline="false" />
            </div>
            <p>物理量的期望值：</p>
            <div class="formula-block">
              <katex-element expression="\langle A \rangle = \frac{1}{Z} \int \mathcal{D}\phi \, A[\phi] e^{-S[\phi]/\hbar}" :inline="false" />
            </div>
            
            <div class="path-integral-steps">
              <h4>计算步骤：</h4>
              <ol><li>将时间离散化：$\tau = n\Delta\tau$，$\beta = N\Delta\tau$</li>
                <li>插入完备性关系</li><li>取连续极限：$\Delta\tau \to 0$</li>
                <li>计算泛函积分</li>
              </ol>
            </div>
          </div>
        </div>

        <div class="method-card">
          <h3>3. 格林函数方法</h3>
          <div class="method-content">
            <p>利用虚时格林函数：</p>
            <div class="formula-block">
              <katex-element expression="G(\tau) = -\langle T_\tau \psi(\tau) \psi^\dagger(0) \rangle" :inline="false" />
            </div>
            <p>单粒子密度矩阵：</p>
            <div class="formula-block">
              <katex-element expression="\rho_1(x,x') = \langle \psi^\dagger(x') \psi(x) \rangle = -G(x,x';0^-)" :inline="false" />
            </div>
            <p>粒子数密度：</p>
            <div class="formula-block">
              <katex-element expression="n(x) = \rho_1(x,x) = -G(x,x;0^-)" :inline="false" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>重要物理量的计算</h2>
      
      <div class="physical-quantities">
        <div class="quantity-grid">
          <div class="quantity-card">
            <h3>内能 (Internal Energy)</h3>
            <div class="formula-block">
              <katex-element expression="U = \langle H \rangle = -\frac{\partial \ln Z}{\partial \beta}" :inline="false" />
            </div>
            <p>或者通过能级分布：</p>
            <div class="formula-block">
              <katex-element expression="U = \frac{\sum_n E_n e^{-\beta E_n}}{\sum_n e^{-\beta E_n}}" :inline="false" />
            </div>
          </div>

          <div class="quantity-card">
            <h3>比热 (Specific Heat)</h3>
            <div class="formula-block">
              <katex-element expression="C_V = \frac{\partial U}{\partial T} = k_B \beta^2 \frac{\partial^2 \ln Z}{\partial \beta^2}" :inline="false" />
            </div>
            <p>也可以写成涨落形式：</p>
            <div class="formula-block">
              <katex-element expression="C_V = \frac{1}{k_B T^2} (\langle H^2 \rangle - \langle H \rangle^2)" :inline="false" />
            </div>
          </div>

          <div class="quantity-card">
            <h3>磁化强度 (Magnetization)</h3>
            <div class="formula-block">
              <katex-element expression="M = \langle \sum_i S_i^z \rangle = \frac{1}{\beta} \frac{\partial \ln Z}{\partial B}" :inline="false" />
            </div>
            <p>磁化率：</p>
            <div class="formula-block">
              <katex-element expression="\chi = \frac{\partial M}{\partial B} = \beta (\langle M^2 \rangle - \langle M \rangle^2)" :inline="false" />
            </div>
          </div>

          <div class="quantity-card">
            <h3>关联函数 (Correlation Functions)</h3>
            <div class="formula-block">
              <katex-element expression="C(r) = \langle S_i S_{i+r} \rangle - \langle S_i \rangle \langle S_{i+r} \rangle" :inline="false" />
            </div>
            <p>在临界点附近：</p>
            <div class="formula-block">
              <katex-element expression="C(r) \sim \frac{e^{-r/\xi}}{r^{d-2+\eta}}" :inline="false" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>数值计算方法</h2>
      
      <div class="numerical-methods">
        <div class="method-comparison">
          <div class="method-item">
            <h3>精确对角化 (Exact Diagonalization)</h3>
            <div class="method-details">
              <p><strong>适用范围：</strong>小系统 (N ≤ 20)</p>
              <p><strong>优点：</strong>精确结果，所有温度</p>
              <p><strong>缺点：</strong>指数标度，系统尺寸限制</p>
              <div class="algorithm-box">
                <h4>算法步骤：</h4>
                <ol>
                  <li>构造哈密顿矩阵</li>
                  <li>对角化得到本征值和本征态</li>
                  <li>计算配分函数和期望值</li>
                </ol>
              </div>
            </div>
          </div>

          <div class="method-item">
            <h3>量子蒙特卡罗 (Quantum Monte Carlo)</h3>
            <div class="method-details">
              <p><strong>适用范围：</strong>大系统，无符号问题</p>
              <p><strong>优点：</strong>多项式标度</p>
              <p><strong>缺点：</strong>符号问题，统计误差</p>
              <div class="algorithm-box">
                <h4>主要方法：</h4>
                <ul>
                  <li>世界线量子蒙特卡罗 (Worldline QMC)</li>
                  <li>随机级数展开 (SSE)</li>
                  <li>路径积分蒙特卡罗 (PIMC)</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="method-item">
            <h3>密度矩阵重整化群 (DMRG)</h3>
            <div class="method-details">
              <p><strong>适用范围：</strong>一维和准一维系统</p>
              <p><strong>优点：</strong>高精度，基态和低激发态</p>
              <p><strong>缺点：</strong>主要限于一维</p>
              <div class="algorithm-box">
                <h4>核心思想：</h4>
                <p>保留最重要的量子态，截断希尔伯特空间</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>实际应用示例</h2>
      
      <div class="applications">
        <div class="application-card">
          <h3>一维横场Ising模型</h3>
          <div class="application-content">
            <p><strong>哈密顿量：</strong></p>
            <div class="formula-block">
              <katex-element expression="H = -J \sum_i \sigma_i^z \sigma_{i+1}^z - h \sum_i \sigma_i^x" :inline="false" />
            </div>
            
            <p><strong>横向磁化强度：</strong></p>
            <div class="formula-block">
              <katex-element expression="m_x = \langle \sigma_i^x \rangle = \frac{1}{N} \sum_i \langle \sigma_i^x \rangle" :inline="false" />
            </div>
            
            <p><strong>关联长度：</strong></p>
            <div class="formula-block">
              <katex-element expression="\xi = \frac{1}{\ln(\lambda_0/\lambda_1)}" :inline="false" />
            </div><p>其中$\lambda_0, \lambda_1$ 是转移矩阵的最大和次大本征值。</p>
          </div>
        </div>

        <div class="application-card">
          <h3>Hubbard模型</h3>
          <div class="application-content">
            <p><strong>哈密顿量：</strong></p>
            <div class="formula-block">
              <katex-element expression="H = -t \sum_{\langle i,j \rangle, \sigma} (c_{i\sigma}^\dagger c_{j\sigma} + \text{h.c.}) + U \sum_i n_{i\uparrow} n_{i\downarrow}" :inline="false" />
            </div>
            
            <p><strong>双占据概率：</strong></p>
            <div class="formula-block">
              <katex-element expression="D = \langle n_{i\uparrow} n_{i\downarrow} \rangle" :inline="false" />
            </div>
            
            <p><strong>自旋关联函数：</strong></p>
            <div class="formula-block">
              <katex-element expression="C_s(r) = \langle S_i^z S_{i+r}^z \rangle" :inline="false" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>小结与展望</h2>
      
      <div class="summary-content">
        <div class="key-points">
          <h3>关键要点</h3>
          <ul>
            <li>统计平均值是连接微观量子态和宏观物理量的桥梁</li>
            <li>不同统计系综适用于不同的物理条件</li>
            <li>数值方法的选择取决于系统尺寸和物理问题</li>
            <li>关联函数包含了系统的重要物理信息</li>
          </ul>
        </div>
        
        <div class="future-directions">
          <h3>进一步发展</h3>
          <ul>
            <li>机器学习辅助的量子多体计算</li>
            <li>张量网络方法的推广</li>
            <li>非平衡统计力学</li>
            <li>开放量子系统的统计描述</li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import KatexElement from '../KatexElement.vue'
</script>

<style scoped>
.chapter-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  line-height: 1.6;
}

.chapter-header {
  text-align: center;
  margin-bottom: 3rem;
  padding: 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 15px;
  color: white;
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
}

.chapter-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
}

.chapter-meta {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.chapter-tag {
  background: rgba(255,255,255,0.2);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255,255,255,0.3);
}

.reading-time {
  background: rgba(255,255,255,0.15);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  backdrop-filter: blur(10px);
}

.introduction {
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 15px;
  margin-bottom: 3rem;
  border-left: 5px solid #667eea;
}

.introduction h2 {
  color: #2d3748;
  margin-bottom: 1rem;
}

.lead-text {
  font-size: 1.1rem;
  color: #4a5568;
  margin: 0;
  text-align: justify;
}

.content-section {
  margin-bottom: 3rem;
}

.content-section h2 {
  font-size: 1.8rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #e2e8f0;
}

.ensemble-types {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  gap: 2rem;
  margin-top: 1.5rem;
}

.ensemble-card {
  background: white;
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e8f0;
}

.ensemble-card.canonical {
  border-left: 5px solid #10b981;
}

.ensemble-card.grand-canonical {
  border-left: 5px solid #3b82f6;
}

.ensemble-card h3 {
  color: #1e293b;
  margin-bottom: 1rem;
  font-size: 1.3rem;
}

.formula-block {
  background: #f7fafc;
  padding: 1rem;
  border-radius: 8px;
  margin: 1rem 0;
  text-align: center;
  border-left: 4px solid #4f46e5;
}

.calculation-methods {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.method-card {
  background: white;
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e8f0;
}

.method-card h3 {
  color: #1e293b;
  margin-bottom: 1rem;
  font-size: 1.3rem;
}

.example-box {
  background: #f0fff4;
  border: 1px solid #9ae6b4;
  border-radius: 10px;
  padding: 1.5rem;
  margin-top: 1rem;
}

.example-box h4 {
  color: #2f855a;
  margin-bottom: 1rem;
}

.path-integral-steps {
  background: #fef5e7;
  border: 1px solid #f6e05e;
  border-radius: 10px;
  padding: 1.5rem;
  margin-top: 1rem;
}

.path-integral-steps h4 {
  color: #d69e2e;
  margin-bottom: 1rem;
}

.quantity-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.quantity-card {
  background: white;
  border-radius: 15px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e8f0;
}

.quantity-card h3 {
  color: #1e293b;
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.numerical-methods {
  margin-top: 1.5rem;
}

.method-comparison {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.method-item {
  background: white;
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e8f0;
}

.method-item h3 {
  color: #1e293b;
  margin-bottom: 1rem;
  font-size: 1.3rem;
}

.algorithm-box {
  background: #f7fafc;
  border-radius: 8px;
  padding: 1rem;
  margin-top: 1rem;
}

.algorithm-box h4 {
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.applications {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  margin-top: 1.5rem;
}

.application-card {
  background: white;
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e8f0;
}

.application-card h3 {
  color: #1e293b;
  margin-bottom: 1rem;
  font-size: 1.3rem;
}

.summary-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  margin-top: 1.5rem;
}

.key-points, .future-directions {
  background: white;
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e8f0;
}

.key-points h3, .future-directions h3 {
  color: #1e293b;
  margin-bottom: 1rem;
  font-size: 1.3rem;
}

.key-points {
  border-left: 5px solid #10b981;
}

.future-directions {
  border-left: 5px solid #3b82f6;
}

@media (max-width: 768px) {
  .chapter-content {
    padding: 1rem;
  }
  
  .chapter-title {
    font-size: 2rem;
  }
  
  .ensemble-types,
  .quantity-grid,
  .method-comparison,
  .applications,
  .summary-content {
    grid-template-columns: 1fr;
  }
}
</style>