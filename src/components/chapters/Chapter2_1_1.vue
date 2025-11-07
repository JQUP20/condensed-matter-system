<template>
  <div class="chapter-content">
    <div class="chapter-header">
      <h1 class="chapter-title">2.1.1 一次量子化形式中的多体波函数</h1>
      <div class="chapter-meta">
        <span class="chapter-tag">多体理论</span>
        <span class="reading-time">预计阅读时间: 20分钟</span>
      </div>
    </div>

    <div class="chapter-body">
      <section class="introduction">
        <h2>多体波函数的基本概念</h2>
        <p class="lead-text">
          在一次量子化形式中，多体系统的状态由多体波函数描述。这个波函数包含了系统中所有粒子的信息，
          是理解多体量子系统的基础。本节将详细介绍多体波函数的数学形式、物理意义和重要性质。
        </p>
      </section>

      <section class="content-section">
        <h2>多体波函数的数学表述</h2>
        
        <div class="concept-card">
          <div class="concept-icon">📊</div>
          <h3>N粒子系统的波函数</h3>
          <div class="mathematical-content">
            <p>对于包含N个粒子的系统，多体波函数可以写为：</p>
            <div class="equation-block">
              <KatexElement 
                      :expression="`\\Psi(\\mathbf{r}_1, \\sigma_1; \\mathbf{r}_2, \\sigma_2; \\ldots; \\mathbf{r}_N, \\sigma_N; t)`"
                      :block="true"
                    />
            </div>
            <p>其中：</p>
            <ul>
              <li><strong>𝐫ᵢ</strong>：第i个粒子的位置坐标</li>
              <li><strong>σᵢ</strong>：第i个粒子的自旋坐标</li>
              <li><strong>t</strong>：时间</li>
            </ul>
          </div>
        </div>

        <div class="concept-card">
          <div class="concept-icon">🔄</div>
          <h3>全同粒子的对称性</h3>
          <div class="symmetry-content">
            <h4>费米子（反对称）：</h4>
            <div class="equation-block">
              <KatexElement 
                :expression="`\\Psi(\\ldots, \\mathbf{r}_i, \\sigma_i, \\ldots, \\mathbf{r}_j, \\sigma_j, \\ldots) = -\\Psi(\\ldots, \\mathbf{r}_j, \\sigma_j, \\ldots, \\mathbf{r}_i, \\sigma_i, \\ldots)`"
                :block="true"
              />
            </div>
            
            <h4>玻色子（对称）：</h4>
            <div class="equation-block">
              <KatexElement 
                :expression="`\\Psi(\\ldots, \\mathbf{r}_i, \\sigma_i, \\ldots, \\mathbf{r}_j, \\sigma_j, \\ldots) = +\\Psi(\\ldots, \\mathbf{r}_j, \\sigma_j, \\ldots, \\mathbf{r}_i, \\sigma_i, \\ldots)`"
                :block="true"
              />
            </div>
            
            <div class="physics-insight">
              <h4>🔍 物理意义：</h4>
              <p>全同粒子的不可区分性导致波函数必须具有特定的对称性，这是泡利不相容原理和玻色-爱因斯坦统计的量子力学基础。</p>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>多体波函数的构造方法</h2>
        
        <div class="method-grid">
          <div class="method-card">
            <h3>1. 直积态（Product State）</h3>
            <div class="equation-block">
              <KatexElement 
                :expression="`\\Psi(\\mathbf{r}_1, \\mathbf{r}_2, \\ldots, \\mathbf{r}_N) = \\psi_1(\\mathbf{r}_1) \\psi_2(\\mathbf{r}_2) \\cdots \\psi_N(\\mathbf{r}_N)`"
                :block="true"
              />
            </div>
            <p><strong>适用情况：</strong>无相互作用的独立粒子系统</p>
            <p><strong>局限性：</strong>不满足全同粒子的对称性要求</p>
          </div>

          <div class="method-card">
            <h3>2. 斯莱特行列式（Slater Determinant）</h3>
            <div class="equation-block">
              <KatexElement 
                :expression="`\\Psi = \\frac{1}{\\sqrt{N!}} \\begin{vmatrix} \\psi_1(\\mathbf{r}_1) & \\psi_2(\\mathbf{r}_1) & \\cdots & \\psi_N(\\mathbf{r}_1) \\\\ \\psi_1(\\mathbf{r}_2) & \\psi_2(\\mathbf{r}_2) & \\cdots & \\psi_N(\\mathbf{r}_2) \\\\ \\vdots & \\vdots & \\ddots & \\vdots \\\\ \\psi_1(\\mathbf{r}_N) & \\psi_2(\\mathbf{r}_N) & \\cdots & \\psi_N(\\mathbf{r}_N) \\end{vmatrix}`"
                :block="true"
              />
            </div>
            <p><strong>适用情况：</strong>费米子系统，自动满足反对称性</p>
            <p><strong>优点：</strong>包含泡利不相容原理，计算相对简单</p>
          </div>

          <div class="method-card">
            <h3>3. 永久式（Permanent）</h3>
            <div class="equation-block">
              <KatexElement 
                :expression="`\\Psi = \\frac{1}{\\sqrt{N!}} \\text{perm} \\begin{pmatrix} \\psi_1(\\mathbf{r}_1) & \\psi_2(\\mathbf{r}_1) & \\cdots & \\psi_N(\\mathbf{r}_1) \\\\ \\psi_1(\\mathbf{r}_2) & \\psi_2(\\mathbf{r}_2) & \\cdots & \\psi_N(\\mathbf{r}_2) \\\\ \\vdots & \\vdots & \\ddots & \\vdots \\\\ \\psi_1(\\mathbf{r}_N) & \\psi_2(\\mathbf{r}_N) & \\cdots & \\psi_N(\\mathbf{r}_N) \\end{pmatrix}`"
                :block="true"
              />
            </div>
            <p><strong>适用情况：</strong>玻色子系统，自动满足对称性</p>
            <p><strong>特点：</strong>允许多个粒子占据同一量子态</p>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>多体波函数的重要性质</h2>
        
        <div class="properties-grid">
          <div class="property-card">
            <div class="property-icon">📏</div>
            <h3>归一化条件</h3>
            <div class="equation-block">
              <KatexElement 
                :expression="`\\int |\\Psi(\\mathbf{r}_1, \\ldots, \\mathbf{r}_N, t)|^2 d^3r_1 \\cdots d^3r_N = 1`"
                :block="true"
              />
            </div>
            <p>确保总概率为1，体现了概率守恒</p>
          </div>

          <div class="property-card">
            <div class="property-icon">🎯</div>
            <h3>概率密度</h3>
            <div class="equation-block">
              <KatexElement 
                :expression="`\\rho(\\mathbf{r}) = \\sum_{i=1}^N \\delta(\\mathbf{r} - \\mathbf{r}_i)`"
                :block="true"
              />
            </div>
            <p>表示同时在指定位置找到所有粒子的概率密度</p>
          </div>

          <div class="property-card">
            <div class="property-icon">🔗</div>
            <h3>关联函数</h3>
            <div class="equation-block">
              <KatexElement 
                      :expression="`g^{(n)}(\\mathbf{r}_1, \\ldots, \\mathbf{r}_n) = \\frac{N!}{(N-n)!} \\int |\\Psi|^2 d^3r_{n+1} \\cdots d^3r_N`"
                      :block="true"
                    />
            </div>
            <p>描述粒子间的空间关联，n阶约化密度矩阵</p>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>实际应用示例</h2>
        
        <div class="example-section">
          <h3>例1：氦原子的多体波函数</h3>
          <div class="example-content">
            <p>氦原子包含2个电子，其基态波函数可以近似为：</p>
            <div class="equation-block">
              <KatexElement 
                      :expression="`\\Psi(\\mathbf{r}_1, \\mathbf{r}_2) = \\psi_{1s}(\\mathbf{r}_1) \\psi_{1s}(\\mathbf{r}_2) \\cdot \\frac{1}{\\sqrt{2}}[\\alpha(1)\\beta(2) - \\beta(1)\\alpha(2)]`"
                      :block="true"
                    />
            </div>
            <p>其中空间部分是对称的，自旋部分是反对称的，总体满足费米子的反对称性。</p>
          </div>
        </div>

        <div class="example-section">
          <h3>例2：自由电子气的多体波函数</h3>
          <div class="example-content">
            <p>N个自由电子的基态可以用斯莱特行列式表示：</p>
            <div class="equation-block">
              <KatexElement 
                :expression="'\\Psi = \\frac{1}{\\sqrt{N!}} \\det[\\psi_{\\mathbf{k}_i}(\\mathbf{r}_j)]'"
                :block="true"
              />
            </div>
            <p>其中 ψ<sub>𝐤ᵢ</sub>(𝐫<sub>j</sub>) = e<sup>i𝐤ᵢ·𝐫<sub>j</sub></sup>/√V 是平面波单粒子态。</p>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>计算复杂性与挑战</h2>
        
        <div class="challenge-grid">
          <div class="challenge-card">
            <div class="challenge-icon">📈</div>
            <h3>指数增长问题</h3>
            <p>多体波函数的维度随粒子数指数增长：</p>
            <ul>
              <li>N个粒子 → 3N维配置空间</li>
              <li>存储需求：O(M<sup>3N</sup>)，M为每维网格点数</li>
              <li>计算复杂度：随N指数增长</li>
            </ul>
          </div>

          <div class="challenge-card">
            <div class="challenge-icon">🎲</div>
            <h3>量子蒙特卡洛方法</h3>
            <p>应对高维积分的统计方法：</p>
            <ul>
              <li>变分蒙特卡洛（VMC）</li>
              <li>扩散蒙特卡洛（DMC）</li>
              <li>路径积分蒙特卡洛（PIMC）</li>
            </ul>
          </div>

          <div class="challenge-card">
            <div class="challenge-icon">🔧</div>
            <h3>近似方法</h3>
            <p>实用的理论框架：</p>
            <ul>
              <li>平均场理论</li>
              <li>密度泛函理论</li>
              <li>多体微扰理论</li>
              <li>重整化群方法</li>
            </ul>
          </div>
        </div>
      </section>

      <section class="summary-section">
        <h2>本节要点总结</h2>
        <div class="summary-grid">
          <div class="summary-item">
            <h4>🎯 核心概念</h4>
            <p>多体波函数是描述多粒子量子系统的基本工具，包含所有粒子的完整信息</p>
          </div>
          <div class="summary-item">
            <h4>🔄 对称性</h4>
            <p>全同粒子的不可区分性要求波函数具有特定的对称性（费米子反对称，玻色子对称）</p>
          </div>
          <div class="summary-item">
            <h4>🏗️ 构造方法</h4>
            <p>斯莱特行列式（费米子）和永久式（玻色子）是构造对称化波函数的标准方法</p>
          </div>
          <div class="summary-item">
            <h4>⚡ 计算挑战</h4>
            <p>多体问题的指数复杂性推动了各种近似方法和数值技术的发展</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import KatexElement from '../KatexElement.vue'

export default {
  name: 'Chapter2_1_1',
  components: {
    KatexElement
  }
}
</script>

<style scoped>
.chapter-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: #333;
}

.chapter-header {
  text-align: center;
  margin-bottom: 3rem;
  padding-bottom: 2rem;
  border-bottom: 3px solid #3498db;
}

.chapter-title {
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 1rem;
  font-weight: 700;
}

.chapter-meta {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 1rem;
}

.chapter-tag {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
}

.reading-time {
  background: #f8f9fa;
  color: #6c757d;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
}

.introduction {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 2rem;
  border-radius: 15px;
  margin-bottom: 3rem;
}

.introduction h2 {
  color: white;
  margin-bottom: 1rem;
}

.lead-text {
  font-size: 1.1rem;
  line-height: 1.8;
  margin: 0;
}

.content-section {
  margin-bottom: 3rem;
}

.content-section h2 {
  color: #2c3e50;
  font-size: 1.8rem;
  margin-bottom: 2rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #3498db;
}

.concept-card, .method-card, .property-card, .challenge-card {
  background: white;
  border-radius: 15px;
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  border: 1px solid #e9ecef;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.concept-card:hover, .method-card:hover, .property-card:hover, .challenge-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0,0,0,0.15);
}

.concept-icon, .property-icon, .challenge-icon {
  font-size: 2rem;
  margin-bottom: 1rem;
  display: block;
}

.concept-card h3, .method-card h3, .property-card h3, .challenge-card h3 {
  color: #2c3e50;
  margin-bottom: 1rem;
  font-size: 1.3rem;
}

.mathematical-content, .symmetry-content {
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 10px;
  margin-top: 1rem;
}

.equation-block {
  background: white;
  padding: 1rem;
  border-radius: 8px;
  margin: 1rem 0;
  border-left: 4px solid #3498db;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
}

.physics-insight {
  background: linear-gradient(135deg, #74b9ff 0%, #0984e3 100%);
  color: white;
  padding: 1rem;
  border-radius: 10px;
  margin-top: 1rem;
}

.method-grid, .properties-grid, .challenge-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.example-section {
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 15px;
  margin-bottom: 2rem;
  border-left: 5px solid #28a745;
}

.example-section h3 {
  color: #28a745;
  margin-bottom: 1rem;
}

.example-content {
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  margin-top: 1rem;
}

.summary-section {
  background: linear-gradient(135deg, #fd79a8 0%, #fdcb6e 100%);
  padding: 2rem;
  border-radius: 15px;
  margin-top: 3rem;
}

.summary-section h2 {
  color: white;
  text-align: center;
  margin-bottom: 2rem;
  border: none;
}

.summary-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.summary-item {
  background: rgba(255,255,255,0.9);
  padding: 1.5rem;
  border-radius: 10px;
  text-align: center;
}

.summary-item h4 {
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.summary-item p {
  color: #555;
  font-size: 0.9rem;
  margin: 0;
}

ul {
  padding-left: 1.5rem;
}

li {
  margin-bottom: 0.5rem;
}

strong {
  color: #2c3e50;
}

@media (max-width: 768px) {
  .chapter-content {
    padding: 1rem;
  }
  
  .chapter-title {
    font-size: 2rem;
  }
  
  .chapter-meta {
    flex-direction: column;
    gap: 1rem;
  }
  
  .method-grid, .properties-grid, .challenge-grid {
    grid-template-columns: 1fr;
  }
  
  .concept-card, .method-card, .property-card, .challenge-card {
    padding: 1.5rem;
  }
}
</style>