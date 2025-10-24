<template>
  <div class="chapter-content">
    <h1>19.2.2 摩尔纹物理</h1>
    
    <div class="content-section">
      <h2>1. 摩尔纹的基本概念</h2>
      <p>摩尔纹(Moiré pattern)是两个周期性结构叠加时产生的长周期调制图案，在扭转双分子层材料中展现出丰富的物理现象。</p>
      
      <h3>1.1 几何起源</h3>
      <p>两个晶格的叠加产生摩尔超晶格：</p>
      <div class="formula">
        $$\mathbf{G}_M = \mathbf{G}_1 - \mathbf{G}_2$$
      </div>
      <p>摩尔周期：</p>
      <div class="formula">
        $$L_M = \frac{a}{\sqrt{2(1-\cos\theta)}} \approx \frac{a}{\theta}$$
      </div>
      <p>其中a是单层晶格常数，θ是扭转角。</p>

      <h3>1.2 魔角现象</h3>
      <p>在特定的"魔角"下，系统表现出特殊性质：</p>
      <ul>
        <li><strong>平带形成</strong>：能带变得极其平坦</li>
        <li><strong>强关联效应</strong>：库仑相互作用占主导</li>
        <li><strong>新奇相态</strong>：超导、绝缘体等相态</li>
      </ul>
    </div>

    <div class="content-section">
      <h2>2. 扭转双层石墨烯</h2>
      
      <h3>2.1 能带结构</h3>
      <p>扭转双层石墨烯的低能有效哈密顿量：</p>
      <div class="formula">
        $$H = \begin{pmatrix}
        h_1(\mathbf{k}) & T(\mathbf{r}) \\
        T^\dagger(\mathbf{r}) & h_2(\mathbf{k})
        \end{pmatrix}$$
      </div>
      <p>其中T(r)是层间耦合项，具有摩尔周期性。</p>

      <h3>2.2 魔角条件</h3>
      <p>第一魔角约为1.1°：</p>
      <div class="formula">
        $$\theta_m \approx \arcsin\left(\frac{\sqrt{3}w}{2v_F}\right)$$
      </div>
      <p>其中w是层间耦合强度，v_F是费米速度。</p>

      <h3>2.3 平带物理</h3>
      <p>在魔角附近，能带变得极其平坦：</p>
      <ul>
        <li>带宽 ~ 10 meV</li>
        <li>库仑能 ~ 50 meV</li>
        <li>动能被抑制，相互作用占主导</li>
      </ul>
    </div>

    <div class="content-section">
      <h2>3. 强关联现象</h2>
      
      <h3>3.1 Mott绝缘态</h3>
      <p>在半填充时形成绝缘态：</p>
      <div class="formula">
        $$H_{eff} = -t \sum_{\langle i,j \rangle} c_i^\dagger c_j + U \sum_i n_{i\uparrow} n_{i\downarrow}$$
      </div>
      <p>当U >> t时，系统变为Mott绝缘体。</p>

      <h3>3.2 超导态</h3>
      <p>在轻微掺杂下出现超导：</p>
      <ul>
        <li>T_c ~ 1.7 K</li>
        <li>可能的d波配对</li>
        <li>与铜氧化物的类比</li>
      </ul>

      <h3>3.3 相图</h3>
      <p>载流子密度-温度相图显示：</p>
      <ul>
        <li>绝缘相（半填充）</li>
        <li>超导相（轻微掺杂）</li>
        <li>金属相（重掺杂）</li>
        <li>可能的其他奇异相</li>
      </ul>
    </div>

    <div class="content-section">
      <h2>4. 理论模型</h2>
      
      <h3>4.1 连续模型</h3>
      <p>基于Dirac点附近的低能展开：</p>
      <div class="formula">
        $$H = v_F \sum_{\xi,s} \xi \boldsymbol{\sigma} \cdot \mathbf{k} c_{\xi,s}^\dagger c_{\xi,s} + H_{tunnel}$$
      </div>
      <p>其中ξ = ±表示谷指标，s表示自旋。</p>

      <h3>4.2 紧束缚模型</h3>
      <p>考虑原子轨道的紧束缚描述：</p>
      <div class="formula">
        $$H = \sum_{i,j} t_{ij} c_i^\dagger c_j$$
      </div>
      <p>跃迁积分t_ij依赖于原子间距离和角度。</p>

      <h3>4.3 有效低能模型</h3>
      <p>在平带附近的有效模型：</p>
      <div class="formula">
        $$H_{eff} = \sum_{\mathbf{k}} \epsilon(\mathbf{k}) c_{\mathbf{k}}^\dagger c_{\mathbf{k}} + \frac{1}{2} \sum_{\mathbf{k}_1,\mathbf{k}_2,\mathbf{q}} V(\mathbf{q}) c_{\mathbf{k}_1+\mathbf{q}}^\dagger c_{\mathbf{k}_2-\mathbf{q}}^\dagger c_{\mathbf{k}_2} c_{\mathbf{k}_1}$$
      </div>
    </div>

    <div class="content-section">
      <h2>5. 实验观测</h2>
      
      <h3>5.1 输运测量</h3>
      <p>电阻率测量显示：</p>
      <ul>
        <li><strong>绝缘行为</strong>：半填充时电阻急剧增大</li>
        <li><strong>超导转变</strong>：轻微掺杂下零电阻</li>
        <li><strong>量子振荡</strong>：高磁场下的Shubnikov-de Haas振荡</li>
      </ul>

      <h3>5.2 角分辨光电子谱</h3>
      <p>ARPES测量揭示：</p>
      <ul>
        <li>平带的形成</li>
        <li>能带重整化</li>
        <li>费米面的演化</li>
        <li>超导能隙</li>
      </ul>

      <h3>5.3 扫描隧道显微镜</h3>
      <p>STM观测到：</p>
      <ul>
        <li>摩尔超晶格结构</li>
        <li>局域态密度的空间调制</li>
        <li>超导相干峰</li>
      </ul>
    </div>

    <div class="content-section">
      <h2>6. 其他摩尔材料</h2>
      
      <h3>6.1 扭转双层过渡金属硫化物</h3>
      <p><strong>扭转双层WSe₂</strong>：</p>
      <ul>
        <li>Mott绝缘态</li>
        <li>激子绝缘体</li>
        <li>可能的分数Chern绝缘体</li>
      </ul>

      <h3>6.2 石墨烯-hBN异质结</h3>
      <p>石墨烯与六方氮化硼的摩尔超晶格：</p>
      <ul>
        <li>Hofstadter蝴蝶谱</li>
        <li>分数量子霍尔态</li>
        <li>拓扑相变</li>
      </ul>

      <h3>6.3 三层石墨烯系统</h3>
      <p>ABC堆叠三层石墨烯：</p>
      <ul>
        <li>可调的平带</li>
        <li>铁磁性</li>
        <li>超导性</li>
      </ul>
    </div>

    <div class="content-section">
      <h2>7. 理论挑战</h2>
      
      <h3>7.1 多体计算的困难</h3>
      <ul>
        <li><strong>大单胞</strong>：摩尔超晶格包含数千个原子</li>
        <li><strong>强关联</strong>：传统DFT方法失效</li>
        <li><strong>长程相互作用</strong>：库仑相互作用的处理</li>
      </ul>

      <h3>7.2 相图的理解</h3>
      <ul>
        <li>相变的性质</li>
        <li>竞争序参量</li>
        <li>温度和掺杂的效应</li>
      </ul>

      <h3>7.3 超导机制</h3>
      <ul>
        <li>配对对称性</li>
        <li>配对胶水的来源</li>
        <li>与铜氧化物的关系</li>
      </ul>
    </div>

    <div class="content-section">
      <h2>8. 应用前景</h2>
      
      <h3>8.1 可调电子器件</h3>
      <p>摩尔材料的应用潜力：</p>
      <ul>
        <li><strong>可调超导器件</strong>：电场调控的超导开关</li>
        <li><strong>量子传感器</strong>：利用强关联效应</li>
        <li><strong>拓扑器件</strong>：基于拓扑相的器件</li>
      </ul>

      <h3>8.2 量子模拟</h3>
      <ul>
        <li>Hubbard模型的实现</li>
        <li>高温超导机制的研究</li>
        <li>量子磁性的模拟</li>
      </ul>

      <h3>8.3 新型电子学</h3>
      <ul>
        <li>扭转电子学(Twistronics)</li>
        <li>可重构电子器件</li>
        <li>量子信息处理</li>
      </ul>
    </div>

    <div class="content-section">
      <h2>9. 未来展望</h2>
      
      <div class="highlight-box">
        <h4>发展方向</h4>
        <ul>
          <li><strong>新材料探索</strong>：寻找新的摩尔材料体系</li>
          <li><strong>理论发展</strong>：发展处理强关联摩尔系统的理论</li>
          <li><strong>器件应用</strong>：开发基于摩尔物理的实用器件</li>
          <li><strong>量子模拟</strong>：利用摩尔系统研究基础物理问题</li>
          <li><strong>多层系统</strong>：探索更复杂的多层摩尔结构</li>
        </ul>
      </div>

      <p>摩尔纹物理作为凝聚态物理的新兴领域，不仅为理解强关联电子系统提供了新的平台，也为未来电子器件的发展开辟了新的道路。</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chapter19_2_2',
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