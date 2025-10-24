<template>
  <div class="chapter-content">
    <h1>13.4.2 BCS哈密顿量</h1>
    
    <section class="introduction">
      <h2>概述</h2>
      <p>
        BCS哈密顿量是描述超导体微观状态的基本理论框架，由Bardeen、Cooper和Schrieffer在1957年提出。
        该哈密顿量巧妙地将电子-声子相互作用简化为有效的电子配对相互作用，
        为理解超导现象提供了完整的量子力学描述。
      </p>
    </section>

    <section class="full-hamiltonian">
      <h2>完整哈密顿量</h2>
      
      <div class="subsection">
        <h3>系统组成</h3>
        <p>超导体的完整哈密顿量包含三个主要部分：</p>
        
        <div class="formula-box">
          <h4>总哈密顿量</h4>
          <p>\\[ H = H_{el} + H_{ph} + H_{el-ph} \\]</p>
          <p>其中：</p>
          <ul>
            <li>\\(H_{el}\\)：电子动能项</li>
            <li>\\(H_{ph}\\)：声子哈密顿量</li>
            <li>\\(H_{el-ph}\\)：电子-声子相互作用</li>
          </ul>
        </div>
      </div>

      <div class="subsection">
        <h3>电子哈密顿量</h3>
        <div class="formula-box">
          <p>\\[ H_{el} = \\sum_{\\mathbf{k},\\sigma} \\epsilon_\\mathbf{k} c^\\dagger_{\\mathbf{k}\\sigma} c_{\\mathbf{k}\\sigma} \\]</p>
          <p>其中：</p>
          <ul>
            <li>\\(\\epsilon_\\mathbf{k} = \\frac{\\hbar^2 k^2}{2m} - \\mu\\) 是相对于化学势的电子能量</li>
            <li>\\(c^\\dagger_{\\mathbf{k}\\sigma}\\), \\(c_{\\mathbf{k}\\sigma}\\) 是电子产生和湮灭算符</li>
            <li>\\(\\sigma = \\uparrow, \\downarrow\\) 表示自旋</li>
          </ul>
        </div>
      </div>

      <div class="subsection">
        <h3>声子哈密顿量</h3>
        <div class="formula-box">
          <p>\\[ H_{ph} = \\sum_{\\mathbf{q},\\lambda} \\hbar\\omega_{\\mathbf{q}\\lambda} a^\\dagger_{\\mathbf{q}\\lambda} a_{\\mathbf{q}\\lambda} \\]</p>
          <p>其中：</p>
          <ul>
            <li>\\(\\omega_{\\mathbf{q}\\lambda}\\) 是声子频率</li>
            <li>\\(\\lambda\\) 表示声子极化</li>
            <li>\\(a^\\dagger_{\\mathbf{q}\\lambda}\\), \\(a_{\\mathbf{q}\\lambda}\\) 是声子产生和湮灭算符</li>
          </ul>
        </div>
      </div>

      <div class="subsection">
        <h3>电子-声子相互作用</h3>
        <div class="formula-box">
          <p>\\[ H_{el-ph} = \\sum_{\\mathbf{k},\\mathbf{q},\\lambda,\\sigma} g_{\\mathbf{k},\\mathbf{q}}^\\lambda c^\\dagger_{\\mathbf{k}+\\mathbf{q},\\sigma} c_{\\mathbf{k},\\sigma} (a_{\\mathbf{q}\\lambda} + a^\\dagger_{-\\mathbf{q}\\lambda}) \\]</p>
          <p>其中 \\(g_{\\mathbf{k},\\mathbf{q}}^\\lambda\\) 是电子-声子耦合常数。</p>
        </div>
      </div>
    </section>

    <section class="effective-hamiltonian">
      <h2>有效哈密顿量推导</h2>
      
      <div class="subsection">
        <h3>绝热近似</h3>
        <p>由于电子运动比声子快得多，可以采用绝热近似：</p>
        <ul>
          <li><strong>快变量：</strong>电子坐标</li>
          <li><strong>慢变量：</strong>离子坐标</li>
          <li><strong>近似条件：</strong>\\(\\hbar\\omega_D \\ll E_F\\)</li>
        </ul>
      </div>

      <div class="subsection">
        <h3>二阶微扰理论</h3>
        <p>通过二阶微扰理论消除声子自由度：</p>
        
        <div class="formula-box">
          <h4>有效相互作用</h4>
          <p>\\[ V_{\\mathbf{k},\\mathbf{k}'} = -\\sum_{\\mathbf{q},\\lambda} \\frac{|g_{\\mathbf{k},\\mathbf{q}}^\\lambda|^2}{\\epsilon_{\\mathbf{k}'} - \\epsilon_\\mathbf{k} - \\hbar\\omega_{\\mathbf{q}\\lambda}} \\]</p>
        </div>
        
        <div class="perturbation-analysis">
          <h4>物理图像</h4>
          <div class="process-steps">
            <div class="step">
              <h5>1. 声子发射</h5>
              <p>电子 \\((\\mathbf{k}\\uparrow)\\) 发射声子 \\((\\mathbf{q}\\lambda)\\) 跃迁到 \\((\\mathbf{k}-\\mathbf{q}\\uparrow)\\)</p>
            </div>
            
            <div class="step">
              <h5>2. 声子吸收</h5>
              <p>电子 \\((-\\mathbf{k}'\\downarrow)\\) 吸收同一声子跃迁到 \\((-\\mathbf{k}'+\\mathbf{q}\\downarrow)\\)</p>
            </div>
            
            <div class="step">
              <h5>3. 净效果</h5>
              <p>两电子通过虚声子交换产生有效吸引相互作用</p>
            </div>
          </div>
        </div>
      </div>

      <div class="subsection">
        <h3>配对近似</h3>
        <p>在超导态中，主要的散射过程是Cooper对的形成和破坏：</p>
        
        <div class="formula-box">
          <h4>配对哈密顿量</h4>
          <p>\\[ H_{pair} = \\sum_{\\mathbf{k},\\mathbf{k}'} V_{\\mathbf{k},\\mathbf{k}'} c^\\dagger_{\\mathbf{k}\\uparrow} c^\\dagger_{-\\mathbf{k}\\downarrow} c_{-\\mathbf{k}'\\downarrow} c_{\\mathbf{k}'\\uparrow} \\]</p>
        </div>
        
        <p>这里只保留了 \\((\\mathbf{k}\\uparrow, -\\mathbf{k}\\downarrow) \\leftrightarrow (\\mathbf{k}'\\uparrow, -\\mathbf{k}'\\downarrow)\\) 的散射过程。</p>
      </div>
    </section>

    <section class="bcs-hamiltonian">
      <h2>BCS哈密顿量</h2>
      
      <div class="subsection">
        <h3>最终形式</h3>
        <div class="formula-box">
          <h4>BCS哈密顿量</h4>
          <p>\\[ H_{BCS} = \\sum_\\mathbf{k} \\epsilon_\\mathbf{k} (c^\\dagger_{\\mathbf{k}\\uparrow} c_{\\mathbf{k}\\uparrow} + c^\\dagger_{\\mathbf{k}\\downarrow} c_{\\mathbf{k}\\downarrow}) + \\sum_{\\mathbf{k},\\mathbf{k}'} V_{\\mathbf{k},\\mathbf{k}'} c^\\dagger_{\\mathbf{k}\\uparrow} c^\\dagger_{-\\mathbf{k}\\downarrow} c_{-\\mathbf{k}'\\downarrow} c_{\\mathbf{k}'\\uparrow} \\]</p>
        </div>
        
        <p>这个哈密顿量包含两个主要项：</p>
        <ul>
          <li><strong>动能项：</strong>描述自由电子的运动</li>
          <li><strong>配对项：</strong>描述Cooper对的形成和破坏</li>
        </ul>
      </div>

      <div class="subsection">
        <h3>简化模型</h3>
        <p>为了便于求解，通常采用常数配对势近似：</p>
        
        <div class="formula-box">
          <h4>常数配对势</h4>
          <p>\\[ V_{\\mathbf{k},\\mathbf{k}'} = \\begin{cases} 
          -V & \\text{if } |\\epsilon_\\mathbf{k}|, |\\epsilon_{\\mathbf{k}'}| < \\hbar\\omega_D \\\\
          0 & \\text{otherwise}
          \\end{cases} \\]</p>
        </div>
        
        <div class="model-justification">
          <h4>近似合理性</h4>
          <ul>
            <li><strong>能量窗口：</strong>配对主要发生在德拜频率范围内</li>
            <li><strong>各向同性：</strong>忽略费米面的各向异性</li>
            <li><strong>s波配对：</strong>假设配对具有s波对称性</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="symmetries">
      <h2>对称性分析</h2>
      
      <div class="subsection">
        <h3>粒子数守恒</h3>
        <p>BCS哈密顿量不严格守恒粒子数，但守恒粒子数的奇偶性：</p>
        
        <div class="formula-box">
          <p>\\[ [H_{BCS}, N] \\neq 0, \\quad [H_{BCS}, (-1)^N] = 0 \\]</p>
          <p>其中 \\(N = \\sum_{\\mathbf{k},\\sigma} c^\\dagger_{\\mathbf{k}\\sigma} c_{\\mathbf{k}\\sigma}\\) 是总粒子数算符。</p>
        </div>
      </div>

      <div class="subsection">
        <h3>时间反演对称性</h3>
        <p>配对项具有特殊的时间反演对称性：</p>
        
        <div class="symmetry-properties">
          <div class="property">
            <h4>Cooper对的时间反演</h4>
            <p>\\((\\mathbf{k}\\uparrow, -\\mathbf{k}\\downarrow)\\) 态在时间反演下变为 \\((-\\mathbf{k}\\downarrow, \\mathbf{k}\\uparrow)\\)</p>
          </div>
          
          <div class="property">
            <h4>单态配对</h4>
            <p>Cooper对形成自旋单态，总自旋为零</p>
          </div>
        </div>
      </div>

      <div class="subsection">
        <h3>规范对称性</h3>
        <p>BCS哈密顿量具有U(1)规范对称性的破缺：</p>
        
        <div class="formula-box">
          <h4>规范变换</h4>
          <p>\\[ c_{\\mathbf{k}\\sigma} \\rightarrow e^{i\\phi} c_{\\mathbf{k}\\sigma} \\]</p>
          <p>配对项在此变换下不不变，导致超导相的出现。</p>
        </div>
      </div>
    </section>

    <section class="bogoliubov-transformation">
      <h2>Bogoliubov变换</h2>
      
      <div class="subsection">
        <h3>变换动机</h3>
        <p>BCS哈密顿量的配对项使得通常的单粒子图像失效，需要引入新的准粒子：</p>
        
        <div class="motivation-points">
          <div class="point">
            <h4>问题</h4>
            <p>配对项混合了粒子和空穴态</p>
          </div>
          
          <div class="point">
            <h4>解决方案</h4>
            <p>引入Bogoliubov准粒子对角化哈密顿量</p>
          </div>
        </div>
      </div>

      <div class="subsection">
        <h3>变换定义</h3>
        <div class="formula-box">
          <h4>Bogoliubov变换</h4>
          <p>\\[ \\begin{pmatrix} \\gamma_{\\mathbf{k}\\uparrow} \\\\ \\gamma^\\dagger_{-\\mathbf{k}\\downarrow} \\end{pmatrix} = \\begin{pmatrix} u_\\mathbf{k} & v_\\mathbf{k} \\\\ -v_\\mathbf{k}^* & u_\\mathbf{k}^* \\end{pmatrix} \\begin{pmatrix} c_{\\mathbf{k}\\uparrow} \\\\ c^\\dagger_{-\\mathbf{k}\\downarrow} \\end{pmatrix} \\]</p>
        </div>
        
        <div class="transformation-properties">
          <h4>变换系数</h4>
          <ul>
            <li><strong>归一化条件：</strong>\\(|u_\\mathbf{k}|^2 + |v_\\mathbf{k}|^2 = 1\\)</li>
            <li><strong>反交换关系：</strong>\\(\\{\\gamma_{\\mathbf{k}\\sigma}, \\gamma^\\dagger_{\\mathbf{k}'\\sigma'}\\} = \\delta_{\\mathbf{k},\\mathbf{k}'} \\delta_{\\sigma,\\sigma'}\\)</li>
          </ul>
        </div>
      </div>

      <div class="subsection">
        <h3>对角化结果</h3>
        <p>通过适当选择 \\(u_\\mathbf{k}\\) 和 \\(v_\\mathbf{k}\\)，可以将BCS哈密顿量对角化：</p>
        
        <div class="formula-box">
          <h4>对角化哈密顿量</h4>
          <p>\\[ H_{BCS} = E_0 + \\sum_\\mathbf{k} E_\\mathbf{k} (\\gamma^\\dagger_{\\mathbf{k}\\uparrow} \\gamma_{\\mathbf{k}\\uparrow} + \\gamma^\\dagger_{\\mathbf{k}\\downarrow} \\gamma_{\\mathbf{k}\\downarrow}) \\]</p>
          <p>其中：</p>
          <ul>
            <li>\\(E_\\mathbf{k} = \\sqrt{\\epsilon_\\mathbf{k}^2 + |\\Delta_\\mathbf{k}|^2}\\) 是准粒子能量</li>
            <li>\\(\\Delta_\\mathbf{k}\\) 是超导能隙参数</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="physical-interpretation">
      <h2>物理解释</h2>
      
      <div class="subsection">
        <h3>准粒子图像</h3>
        <div class="quasiparticle-properties">
          <div class="property">
            <h4>Bogoliubov准粒子</h4>
            <p>\\(\\gamma^\\dagger_{\\mathbf{k}\\sigma}\\) 创造一个能量为 \\(E_\\mathbf{k}\\) 的准粒子激发</p>
          </div>
          
          <div class="property">
            <h4>粒子-空穴混合</h4>
            <p>准粒子是电子和空穴的相干叠加</p>
          </div>
          
          <div class="property">
            <h4>能隙结构</h4>
            <p>最低激发能量为 \\(\\min(E_\\mathbf{k}) = |\\Delta|\\)</p>
          </div>
        </div>
      </div>

      <div class="subsection">
        <h3>基态性质</h3>
        <p>BCS基态是所有Cooper对都被占据的态：</p>
        
        <div class="formula-box">
          <h4>BCS基态</h4>
          <p>\\[ |BCS\\rangle = \\prod_\\mathbf{k} (u_\\mathbf{k} + v_\\mathbf{k} c^\\dagger_{\\mathbf{k}\\uparrow} c^\\dagger_{-\\mathbf{k}\\downarrow}) |0\\rangle \\]</p>
        </div>
        
        <div class="ground-state-properties">
          <h4>基态特征</h4>
          <ul>
            <li><strong>相干态：</strong>所有Cooper对处于相同的量子态</li>
            <li><strong>宏观量子相干：</strong>具有确定的相位关系</li>
            <li><strong>能隙：</strong>激发需要克服超导能隙</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="applications">
      <h2>应用与拓展</h2>
      
      <div class="subsection">
        <h3>理论应用</h3>
        <div class="applications-grid">
          <div class="application">
            <h4>热力学性质</h4>
            <p>计算比热、磁化率等热力学量</p>
          </div>
          
          <div class="application">
            <h4>输运性质</h4>
            <p>分析电导率、热导率等输运现象</p>
          </div>
          
          <div class="application">
            <h4>光谱性质</h4>
            <p>预言隧道谱、光电子谱等实验结果</p>
          </div>
        </div>
      </div>

      <div class="subsection">
        <h3>推广与发展</h3>
        <ul>
          <li><strong>非常规超导：</strong>d波、p波配对的BCS类理论</li>
          <li><strong>强耦合理论：</strong>Eliashberg理论</li>
          <li><strong>多带超导：</strong>多带BCS模型</li>
          <li><strong>拓扑超导：</strong>具有拓扑性质的配对态</li>
        </ul>
      </div>
    </section>

    <section class="summary">
      <h2>本节小结</h2>
      <div class="key-points">
        <div class="point">
          <h3>🔬 理论框架</h3>
          <p>BCS哈密顿量提供了描述超导体的完整量子力学框架</p>
        </div>
        
        <div class="point">
          <h3>📊 数学工具</h3>
          <p>Bogoliubov变换是处理配对系统的核心数学工具</p>
        </div>
        
        <div class="point">
          <h3>🧪 物理图像</h3>
          <p>准粒子概念统一了超导态的各种物理性质</p>
        </div>
        
        <div class="point">
          <h3>🚀 应用价值</h3>
          <p>为理解和设计新型超导材料提供理论基础</p>
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

.perturbation-analysis {
  background: #f0f8ff;
  padding: 20px;
  border-radius: 8px;
  margin: 15px 0;
}

.process-steps {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 15px;
  margin: 15px 0;
}

.step {
  background: white;
  padding: 15px;
  border-radius: 8px;
  border: 1px solid #ddd;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.step h5 {
  color: #3498db;
  margin-top: 0;
  margin-bottom: 10px;
}

.model-justification {
  background: #e8f4fd;
  padding: 15px;
  border-radius: 8px;
  margin: 15px 0;
}

.model-justification h4 {
  color: #2980b9;
  margin-top: 0;
}

.symmetry-properties {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin: 20px 0;
}

.property {
  background: #fff;
  padding: 15px;
  border-radius: 8px;
  border: 1px solid #ddd;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.property h4 {
  color: #e74c3c;
  margin-top: 0;
}

.motivation-points {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
  margin: 15px 0;
}

.point {
  background: #f8f9fa;
  padding: 15px;
  border-radius: 8px;
  border-left: 4px solid #3498db;
}

.point h4 {
  color: #2c3e50;
  margin-top: 0;
}

.transformation-properties {
  background: #f0f8ff;
  padding: 15px;
  border-radius: 8px;
  margin: 15px 0;
}

.transformation-properties h4 {
  color: #2c3e50;
  margin-bottom: 10px;
}

.quasiparticle-properties {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin: 20px 0;
}

.ground-state-properties {
  background: #e8f4fd;
  padding: 15px;
  border-radius: 8px;
  margin: 15px 0;
}

.ground-state-properties h4 {
  color: #2980b9;
  margin-top: 0;
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

.key-points .point {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  border-left: none;
}

.key-points .point h3 {
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