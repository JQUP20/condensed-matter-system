<template>
  <div class="chapter-content">
    <h1>13.4.1 Cooper对的形成</h1>
    
    <section class="introduction">
      <h2>概述</h2>
      <p>
        Cooper对的形成是超导现象的核心机制。1956年，Leon Cooper发现在费米海附近，
        两个电子可以通过声子交换形成束缚态，这一发现为BCS理论奠定了基础。
        Cooper对的形成克服了库仑排斥，实现了电子的配对，是理解超导微观机制的关键。
      </p>
    </section>

    <section class="cooper-pair-formation">
      <h2>Cooper对形成机制</h2>
      
      <div class="subsection">
        <h3>基本图像</h3>
        <p>考虑费米海中两个电子的相互作用：</p>
        <ul>
          <li><strong>库仑排斥：</strong>直接的电子-电子相互作用是排斥性的</li>
          <li><strong>声子介导吸引：</strong>通过声子交换产生有效吸引相互作用</li>
          <li><strong>Pauli原理：</strong>限制了电子的可占据态</li>
        </ul>
        
        <div class="formula-box">
          <h4>有效相互作用哈密顿量</h4>
          <p>\\[ H_{eff} = \\sum_{\\mathbf{k},\\mathbf{k}'} V_{\\mathbf{k},\\mathbf{k}'} c^\\dagger_{\\mathbf{k}\\uparrow} c^\\dagger_{-\\mathbf{k}\\downarrow} c_{-\\mathbf{k}'\\downarrow} c_{\\mathbf{k}'\\uparrow} \\]</p>
          <p>其中 \\(V_{\\mathbf{k},\\mathbf{k}'}\\) 是有效配对势。</p>
        </div>
      </div>

      <div class="subsection">
        <h3>声子介导的配对机制</h3>
        <p>电子通过声子交换形成Cooper对的物理图像：</p>
        
        <div class="mechanism-steps">
          <div class="step">
            <h4>1. 晶格变形</h4>
            <p>第一个电子使周围晶格发生变形，产生局域的正电荷密度增加</p>
          </div>
          
          <div class="step">
            <h4>2. 吸引第二个电子</h4>
            <p>晶格变形区域吸引第二个电子，形成间接的电子-电子吸引</p>
          </div>
          
          <div class="step">
            <h4>3. 动量守恒</h4>
            <p>Cooper对总动量为零：\\(\\mathbf{k} + (-\\mathbf{k}) = 0\\)</p>
          </div>
          
          <div class="step">
            <h4>4. 自旋反平行</h4>
            <p>配对电子自旋反平行，形成自旋单态</p>
          </div>
        </div>
      </div>
    </section>

    <section class="cooper-problem">
      <h2>Cooper问题</h2>
      
      <div class="subsection">
        <h3>问题设定</h3>
        <p>考虑费米海上方两个电子的束缚态问题：</p>
        
        <div class="formula-box">
          <h4>薛定谔方程</h4>
          <p>\\[ (E_k + E_{-k} - E) \\psi_k + \\sum_{k'} V_{k,k'} \\psi_{k'} = 0 \\]</p>
          <p>其中：</p>
          <ul>
            <li>\\(E_k = \\epsilon_k - \\mu\\) 是相对于化学势的单粒子能量</li>
            <li>\\(E\\) 是Cooper对的束缚能</li>
            <li>\\(\\psi_k\\) 是配对波函数</li>
          </ul>
        </div>
      </div>

      <div class="subsection">
        <h3>简化模型</h3>
        <p>采用常数配对势近似：</p>
        
        <div class="formula-box">
          <p>\\[ V_{k,k'} = \\begin{cases} 
          -V & \\text{if } |\\epsilon_k|, |\\epsilon_{k'}| < \\hbar\\omega_D \\\\
          0 & \\text{otherwise}
          \\end{cases} \\]</p>
          <p>其中 \\(\\hbar\\omega_D\\) 是德拜截止频率。</p>
        </div>
        
        <p>在此近似下，薛定谔方程变为：</p>
        <div class="formula-box">
          <p>\\[ \\psi_k = \\frac{V \\sum_{k'} \\psi_{k'}}{E - 2\\epsilon_k} \\]</p>
        </div>
      </div>

      <div class="subsection">
        <h3>自洽解</h3>
        <p>定义配对振幅 \\(\\Delta = V \\sum_k \\psi_k\\)，得到：</p>
        
        <div class="formula-box">
          <h4>自洽方程</h4>
          <p>\\[ 1 = V \\sum_k \\frac{1}{E - 2\\epsilon_k} \\]</p>
        </div>
        
        <p>转换为积分形式：</p>
        <div class="formula-box">
          <p>\\[ 1 = V N(0) \\int_0^{\\hbar\\omega_D} \\frac{d\\epsilon}{E - 2\\epsilon} \\]</p>
          <p>其中 \\(N(0)\\) 是费米面处的态密度。</p>
        </div>
      </div>
    </section>

    <section class="binding-energy">
      <h2>束缚能计算</h2>
      
      <div class="subsection">
        <h3>积分求解</h3>
        <p>对自洽方程进行积分：</p>
        
        <div class="formula-box">
          <p>\\[ \\frac{1}{VN(0)} = \\frac{1}{2} \\ln\\left|\\frac{E + 2\\hbar\\omega_D}{E - 2\\hbar\\omega_D}\\right| \\]</p>
        </div>
        
        <p>在弱耦合极限 \\(VN(0) \\ll 1\\) 下：</p>
        <div class="formula-box">
          <h4>Cooper对束缚能</h4>
          <p>\\[ E = -2\\hbar\\omega_D \\exp\\left(-\\frac{2}{VN(0)}\\right) \\]</p>
        </div>
      </div>

      <div class="subsection">
        <h3>物理意义</h3>
        <div class="physics-insights">
          <div class="insight">
            <h4>指数依赖性</h4>
            <p>束缚能对耦合强度的指数依赖表明这是一个非微扰效应</p>
          </div>
          
          <div class="insight">
            <h4>弱耦合稳定性</h4>
            <p>即使在任意弱的吸引相互作用下，Cooper对也是稳定的</p>
          </div>
          
          <div class="insight">
            <h4>能量尺度</h4>
            <p>束缚能的量级决定了超导转变温度</p>
          </div>
        </div>
      </div>
    </section>

    <section class="pair-wavefunction">
      <h2>配对波函数</h2>
      
      <div class="subsection">
        <h3>实空间波函数</h3>
        <p>Cooper对的实空间波函数具有特殊的对称性：</p>
        
        <div class="formula-box">
          <h4>相对坐标波函数</h4>
          <p>\\[ \\psi(\\mathbf{r}) = \\sum_k \\psi_k e^{i\\mathbf{k} \\cdot \\mathbf{r}} \\]</p>
          <p>其中 \\(\\mathbf{r}\\) 是两电子的相对坐标。</p>
        </div>
        
        <div class="wavefunction-properties">
          <h4>波函数性质</h4>
          <ul>
            <li><strong>s波配对：</strong>在简单模型中，Cooper对具有s波对称性</li>
            <li><strong>相干长度：</strong>\\(\\xi = \\hbar v_F / \\pi \\Delta\\)</li>
            <li><strong>空间扩展：</strong>Cooper对尺寸远大于晶格常数</li>
          </ul>
        </div>
      </div>

      <div class="subsection">
        <h3>动量空间结构</h3>
        <p>在动量空间中，配对波函数的分布反映了费米面附近的配对：</p>
        
        <div class="formula-box">
          <p>\\[ \\psi_k \\propto \\frac{1}{2\\epsilon_k + |E|} \\]</p>
        </div>
        
        <p>这表明配对主要发生在费米面附近的薄壳层内。</p>
      </div>
    </section>

    <section class="experimental-evidence">
      <h2>实验证据</h2>
      
      <div class="subsection">
        <h3>同位素效应</h3>
        <p>Cooper对理论预言的同位素效应：</p>
        
        <div class="formula-box">
          <p>\\[ T_c \\propto M^{-1/2} \\]</p>
          <p>其中 \\(M\\) 是同位素质量。</p>
        </div>
        
        <div class="experimental-data">
          <h4>典型实验结果</h4>
          <table>
            <thead>
              <tr>
                <th>材料</th>
                <th>同位素指数 α</th>
                <th>理论值</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Hg</td>
                <td>0.50</td>
                <td>0.50</td>
              </tr>
              <tr>
                <td>Sn</td>
                <td>0.47</td>
                <td>0.50</td>
              </tr>
              <tr>
                <td>Pb</td>
                <td>0.49</td>
                <td>0.50</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="subsection">
        <h3>隧道谱学</h3>
        <p>隧道实验直接观测到Cooper对的存在：</p>
        <ul>
          <li><strong>准粒子峰：</strong>在 \\(eV = \\pm\\Delta\\) 处观测到尖锐峰</li>
          <li><strong>能隙结构：</strong>证实了超导能隙的存在</li>
          <li><strong>温度依赖：</strong>验证了BCS理论的温度依赖关系</li>
        </ul>
      </div>
    </section>

    <section class="applications">
      <h2>应用与拓展</h2>
      
      <div class="subsection">
        <h3>技术应用</h3>
        <div class="applications-grid">
          <div class="application">
            <h4>超导电子学</h4>
            <p>基于Cooper对的Josephson效应实现超导量子器件</p>
          </div>
          
          <div class="application">
            <h4>量子计算</h4>
            <p>Cooper对箱作为量子比特的基本单元</p>
          </div>
          
          <div class="application">
            <h4>精密测量</h4>
            <p>利用Cooper对的量子相干性实现高精度测量</p>
          </div>
        </div>
      </div>

      <div class="subsection">
        <h3>理论拓展</h3>
        <ul>
          <li><strong>非常规配对：</strong>d波、p波等高角动量配对</li>
          <li><strong>强关联系统：</strong>重费米子、高温超导体中的配对</li>
          <li><strong>拓扑超导：</strong>具有非平凡拓扑性质的Cooper对</li>
        </ul>
      </div>
    </section>

    <section class="summary">
      <h2>本节小结</h2>
      <div class="key-points">
        <div class="point">
          <h3>🔬 核心概念</h3>
          <p>Cooper对是通过声子介导的电子配对，克服库仑排斥形成束缚态</p>
        </div>
        
        <div class="point">
          <h3>📊 数学描述</h3>
          <p>Cooper问题的解给出指数形式的束缚能，体现非微扰本质</p>
        </div>
        
        <div class="point">
          <h3>🧪 实验验证</h3>
          <p>同位素效应和隧道谱学直接证实了Cooper对的存在</p>
        </div>
        
        <div class="point">
          <h3>🚀 应用前景</h3>
          <p>Cooper对是超导电子学和量子技术的基础</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// 组件逻辑
</script>

<style scoped>
.chapter-content {
  max-width: 1200px;
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
}

h2 {
  color: #34495e;
  margin-top: 30px;
  margin-bottom: 20px;
  padding-left: 10px;
  border-left: 4px solid #3498db;
}

h3 {
  color: #2c3e50;
  margin-top: 25px;
  margin-bottom: 15px;
}

.introduction {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 25px;
  border-radius: 10px;
  margin-bottom: 30px;
}

.introduction h2 {
  color: white;
  border-left-color: white;
}

.subsection {
  margin-bottom: 25px;
  padding: 20px;
  background: #f8f9fa;
  border-radius: 8px;
  border-left: 4px solid #3498db;
}

.formula-box {
  background: #fff;
  border: 2px solid #e74c3c;
  border-radius: 8px;
  padding: 20px;
  margin: 15px 0;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.formula-box h4 {
  color: #e74c3c;
  margin-top: 0;
  margin-bottom: 15px;
}

.mechanism-steps {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 15px;
  margin: 20px 0;
}

.step {
  background: white;
  padding: 15px;
  border-radius: 8px;
  border: 1px solid #ddd;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.step h4 {
  color: #3498db;
  margin-top: 0;
}

.physics-insights {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin: 20px 0;
}

.insight {
  background: #e8f4fd;
  padding: 20px;
  border-radius: 8px;
  border-left: 4px solid #3498db;
}

.insight h4 {
  color: #2980b9;
  margin-top: 0;
}

.wavefunction-properties {
  background: #f0f8ff;
  padding: 15px;
  border-radius: 8px;
  margin: 15px 0;
}

.wavefunction-properties h4 {
  color: #2c3e50;
  margin-bottom: 10px;
}

.experimental-data table {
  width: 100%;
  border-collapse: collapse;
  margin: 15px 0;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.experimental-data th,
.experimental-data td {
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

.experimental-data th {
  background: #3498db;
  color: white;
  font-weight: 600;
}

.experimental-data tr:hover {
  background: #f5f5f5;
}

.applications-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin: 20px 0;
}

.application {
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  border: 1px solid #ddd;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  transition: transform 0.2s;
}

.application:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.15);
}

.application h4 {
  color: #e74c3c;
  margin-top: 0;
}

.key-points {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin: 20px 0;
}

.point {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
}

.point h3 {
  margin-top: 0;
  color: white;
}

ul, ol {
  padding-left: 20px;
}

li {
  margin-bottom: 8px;
}

.summary {
  margin-top: 40px;
  padding: 25px;
  background: #f8f9fa;
  border-radius: 10px;
  border: 2px solid #3498db;
}
</style>