<template>
  <div class="chapter-content">
    <div class="chapter-header">
      <h1>1.4.12 后续凝聚态会学到的主要内容</h1>
      <p class="chapter-intro">
        在凝聚态物理学的学习过程中，我们将接触到许多重要的理论模型和方法。本节将通过对比表的形式，
        系统介绍三个核心模型：Coulomb电子气量子Ising模型、Hubbard模型和Heisenberg模型，
        帮助读者建立对后续学习内容的整体认识。
      </p>
    </div>

    <div class="content-section">
      <h2>模型对比总览</h2>
      <div class="table-container">
        <table class="comparison-table">
          <thead>
            <tr>
              <th class="category-header">分类</th>
              <th class="model-header coulomb">Coulomb电子气<br>量子Ising模型</th>
              <th class="model-header hubbard">Hubbard模型<br>Bose-Hubbard模型</th>
              <th class="model-header heisenberg">Heisenberg模型<br>BCS模型</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="category">基本理论模型</td>
              <td>Ising模型</td>
              <td>Kondo晶格</td>
              <td>SYK模型</td>
            </tr>
            <tr>
              <td class="category">重要基本概念</td>
              <td>Luttinger液体</td>
              <td>KT相变</td>
              <td>量子相变</td>
            </tr>
            <tr>
              <td class="category">使用技巧</td>
              <td>Jordan-Wigner变换</td>
              <td>Holstein-Primakoff变换</td>
              <td>Bogoliubov变换</td>
            </tr>
            <tr>
              <td class="category">讨论</td>
              <td>对偶变换</td>
              <td>相干态</td>
              <td>费转子</td>
            </tr>
            <tr>
              <td class="category">常用理论近似</td>
              <td>Z₂规范场<br>玻色化<br>高斯近似</td>
              <td>Feynman图微扰论<br>微扰重整化<br>数点近似</td>
              <td>RPA<br>高温展开<br>动力学平均场</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="content-section">
      <h2>三大核心模型详解</h2>
      
      <div class="model-section coulomb-section">
        <h3>1. Coulomb电子气量子Ising模型</h3>
        <div class="model-content">
          <h4>基本特征</h4>
          <ul>
            <li><strong>基本理论模型</strong>：Ising模型是最简单的相互作用自旋模型</li>
            <li><strong>重要概念</strong>：Luttinger液体描述一维强关联电子系统的低能激发</li>
            <li><strong>核心技巧</strong>：Jordan-Wigner变换将自旋算符映射为费米子算符</li>
          </ul>
          
          <h4>理论方法</h4>
          <ul>
            <li><strong>Z₂规范场</strong>：处理约束系统的有效方法</li>
            <li><strong>玻色化</strong>：将费米子系统转化为玻色子描述</li>
            <li><strong>高斯近似</strong>：在临界点附近的有效理论</li>
          </ul>
          
          <div class="formula-box">
            <p><strong>典型哈密顿量</strong>：</p>
            <katex-element formula="H = -J\sum_{\langle i,j \rangle} \sigma_i^z \sigma_j^z - h\sum_i \sigma_i^x" />
          </div>
        </div>
      </div>

      <div class="model-section hubbard-section">
        <h3>2. Hubbard模型与Bose-Hubbard模型</h3>
        <div class="model-content">
          <h4>基本特征</h4>
          <ul>
            <li><strong>基本理论</strong>：Kondo晶格模型描述局域磁矩与传导电子的相互作用</li>
            <li><strong>重要概念</strong>：KT相变是二维系统中的拓扑相变</li>
            <li><strong>核心技巧</strong>：Holstein-Primakoff变换处理自旋波激发</li>
          </ul>
          
          <h4>理论方法</h4>
          <ul>
            <li><strong>Feynman图微扰论</strong>：系统处理多体相互作用的图形方法</li>
            <li><strong>微扰重整化</strong>：处理发散问题的重整化技术</li>
            <li><strong>数点近似</strong>：在强关联极限下的近似方法</li>
          </ul>
          
          <div class="formula-box">
            <p><strong>Hubbard模型哈密顿量</strong>：</p>
            <katex-element formula="H = -t\sum_{\langle i,j \rangle, \sigma} (c_{i\sigma}^\dagger c_{j\sigma} + h.c.) + U\sum_i n_{i\uparrow} n_{i\downarrow}" />
          </div>
        </div>
      </div>

      <div class="model-section heisenberg-section">
        <h3>3. Heisenberg模型与BCS模型</h3>
        <div class="model-content">
          <h4>基本特征</h4>
          <ul>
            <li><strong>基本理论</strong>：SYK模型是可解的强关联量子多体系统</li>
            <li><strong>重要概念</strong>：量子相变发生在绝对零度的相变现象</li>
            <li><strong>核心技巧</strong>：Bogoliubov变换处理超导配对问题</li>
          </ul>
          
          <h4>理论方法</h4>
          <ul>
            <li><strong>RPA近似</strong>：随机相位近似处理集体激发</li>
            <li><strong>高温展开</strong>：在高温极限下的级数展开方法</li>
            <li><strong>动力学平均场</strong>：DMFT方法处理强关联系统</li>
          </ul>
          
          <div class="formula-box">
            <p><strong>Heisenberg模型哈密顿量</strong>：</p>
            <katex-element formula="H = J\sum_{\langle i,j \rangle} \vec{S}_i \cdot \vec{S}_j" />
          </div>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>学习路径与方法论</h2>
      
      <div class="learning-path">
        <h3>建议的学习顺序</h3>
        <div class="path-steps">
          <div class="step">
            <div class="step-number">1</div>
            <div class="step-content">
              <h4>基础模型理解</h4>
              <p>从最简单的Ising模型开始，理解相变的基本概念和临界现象</p>
            </div>
          </div>
          
          <div class="step">
            <div class="step-number">2</div>
            <div class="step-content">
              <h4>数学工具掌握</h4>
              <p>学习Jordan-Wigner变换、Holstein-Primakoff变换等关键数学技巧</p>
            </div>
          </div>
          
          <div class="step">
            <div class="step-number">3</div>
            <div class="step-content">
              <h4>近似方法应用</h4>
              <p>掌握平均场理论、RPA、重整化群等重要近似方法</p>
            </div>
          </div>
          
          <div class="step">
            <div class="step-number">4</div>
            <div class="step-content">
              <h4>现代理论前沿</h4>
              <p>深入学习拓扑相变、量子自旋液体、非费米液体等前沿概念</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>各模型的物理意义与应用</h2>
      
      <div class="applications-grid">
        <div class="application-card">
          <h4>量子磁性</h4>
          <p>Ising和Heisenberg模型是理解量子磁性的基础，从经典磁性到量子自旋液体</p>
        </div>
        
        <div class="application-card">
          <h4>强关联电子系统</h4>
          <p>Hubbard模型描述了高温超导体、Mott绝缘体等强关联现象</p>
        </div>
        
        <div class="application-card">
          <h4>拓扑物态</h4>
          <p>这些模型的拓扑推广导致了拓扑绝缘体、拓扑超导体等新物态的发现</p>
        </div>
        
        <div class="application-card">
          <h4>量子计算</h4>
          <p>量子自旋模型为拓扑量子计算和量子模拟提供了理论基础</p>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>小结</h2>
      <div class="summary-box">
        <p>
          通过对比这三大核心模型，我们可以看到凝聚态物理学的丰富性和统一性。
          每个模型都有其独特的物理图像和数学结构，但它们之间又存在深刻的联系。
          掌握这些基本模型和相关的理论方法，将为深入理解现代凝聚态物理学奠定坚实的基础。
        </p>
        
        <p>
          在后续的学习中，我们将逐一深入探讨这些模型的具体应用，
          理解它们如何帮助我们理解从超导到量子磁性，从相变到拓扑物态的各种奇妙现象。
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
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
  padding-bottom: 2rem;
  border-bottom: 2px solid #e2e8f0;
}

.chapter-header h1 {
  font-size: 2.5rem;
  color: #1e293b;
  margin-bottom: 1rem;
  font-weight: 700;
}

.chapter-intro {
  font-size: 1.125rem;
  color: #64748b;
  max-width: 800px;
  margin: 0 auto;
}

.content-section {
  margin-bottom: 3rem;
}

.content-section h2 {
  font-size: 1.875rem;
  color: #1e293b;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #e2e8f0;
}

.table-container {
  overflow-x: auto;
  margin: 2rem 0;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.comparison-table {
  width: 100%;
  border-collapse: collapse;
  background: white;
  font-size: 0.9rem;
}

.comparison-table th,
.comparison-table td {
  padding: 1rem;
  text-align: left;
  border: 1px solid #e2e8f0;
}

.category-header {
  background: #f8fafc;
  font-weight: 600;
  color: #374151;
  width: 120px;
}

.model-header {
  font-weight: 600;
  text-align: center;
  color: white;
  width: 200px;
}

.model-header.coulomb {
  background: linear-gradient(135deg, #3b82f6, #1d4ed8);
}

.model-header.hubbard {
  background: linear-gradient(135deg, #10b981, #047857);
}

.model-header.heisenberg {
  background: linear-gradient(135deg, #f59e0b, #d97706);
}

.category {
  background: #f8fafc;
  font-weight: 600;
  color: #374151;
}

.comparison-table tbody tr:nth-child(even) {
  background: #f9fafb;
}

.model-section {
  margin: 2rem 0;
  padding: 2rem;
  border-radius: 0.75rem;
  border-left: 4px solid;
}

.coulomb-section {
  background: linear-gradient(135deg, #eff6ff, #dbeafe);
  border-left-color: #3b82f6;
}

.hubbard-section {
  background: linear-gradient(135deg, #ecfdf5, #d1fae5);
  border-left-color: #10b981;
}

.heisenberg-section {
  background: linear-gradient(135deg, #fffbeb, #fef3c7);
  border-left-color: #f59e0b;
}

.model-section h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #1e293b;
}

.model-section h4 {
  font-size: 1.25rem;
  margin: 1.5rem 0 0.75rem 0;
  color: #374151;
}

.model-content ul {
  margin: 0.5rem 0;
  padding-left: 1.5rem;
}

.model-content li {
  margin: 0.5rem 0;
}

.formula-box {
  background: white;
  padding: 1.5rem;
  border-radius: 0.5rem;
  margin: 1rem 0;
  border: 1px solid #e2e8f0;
  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.1);
}

.formula-box p {
  margin: 0 0 0.5rem 0;
  font-weight: 600;
  color: #374151;
}

.learning-path {
  background: #f8fafc;
  padding: 2rem;
  border-radius: 0.75rem;
  margin: 2rem 0;
}

.learning-path h3 {
  font-size: 1.5rem;
  color: #1e293b;
  margin-bottom: 1.5rem;
  text-align: center;
}

.path-steps {
  display: grid;
  gap: 1.5rem;
}

.step {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}

.step-number {
  width: 2.5rem;
  height: 2.5rem;
  background: linear-gradient(135deg, #3b82f6, #1d4ed8);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  flex-shrink: 0;
}

.step-content h4 {
  margin: 0 0 0.5rem 0;
  color: #1e293b;
  font-size: 1.125rem;
}

.step-content p {
  margin: 0;
  color: #64748b;
}

.applications-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.application-card {
  background: white;
  padding: 1.5rem;
  border-radius: 0.5rem;
  border: 1px solid #e2e8f0;
  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;
}

.application-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.application-card h4 {
  margin: 0 0 0.75rem 0;
  color: #1e293b;
  font-size: 1.125rem;
}

.application-card p {
  margin: 0;
  color: #64748b;
  font-size: 0.9rem;
}

.summary-box {
  background: linear-gradient(135deg, #f0f9ff, #e0f2fe);
  padding: 2rem;
  border-radius: 0.75rem;
  border-left: 4px solid #0ea5e9;
}

.summary-box p {
  margin: 0 0 1rem 0;
  color: #374151;
}

.summary-box p:last-child {
  margin-bottom: 0;
}

@media (max-width: 768px) {
  .chapter-content {
    padding: 1rem;
  }
  
  .chapter-header h1 {
    font-size: 2rem;
  }
  
  .comparison-table {
    font-size: 0.8rem;
  }
  
  .comparison-table th,
  .comparison-table td {
    padding: 0.5rem;
  }
  
  .model-section {
    padding: 1rem;
  }
  
  .applications-grid {
    grid-template-columns: 1fr;
  }
}
</style>