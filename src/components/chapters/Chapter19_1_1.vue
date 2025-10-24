<template>
  <div class="chapter-content">
    <h1>19.1.1 高温超导机制</h1>
    
    <div class="content-section">
      <h2>1. 高温超导的挑战</h2>
      <p>高温超导体的发现是20世纪物理学的重大突破之一，但其微观机制至今仍是凝聚态物理学最重要的未解决问题。</p>
      
      <h3>1.1 传统BCS理论的局限</h3>
      <p>传统的BCS理论基于电子-声子相互作用：</p>
      <div class="formula">
        $$H_{BCS} = \sum_{\mathbf{k},\sigma} \epsilon_{\mathbf{k}} c_{\mathbf{k}\sigma}^\dagger c_{\mathbf{k}\sigma} + \sum_{\mathbf{k},\mathbf{k}'} V_{\mathbf{k},\mathbf{k}'} c_{\mathbf{k}\uparrow}^\dagger c_{-\mathbf{k}\downarrow}^\dagger c_{-\mathbf{k}'\downarrow} c_{\mathbf{k}'\uparrow}$$
      </div>
      <p>但对于铜氧化物超导体，这一理论面临严重挑战：</p>
      <ul>
        <li>临界温度过高（T_c > 100K）</li>
        <li>同位素效应异常</li>
        <li>赝能隙现象</li>
        <li>d波配对对称性</li>
      </ul>
    </div>

    <div class="content-section">
      <h2>2. 铜氧化物超导体的特征</h2>
      
      <h3>2.1 晶体结构</h3>
      <p>铜氧化物超导体具有层状结构，CuO₂平面是超导的关键：</p>
      <ul>
        <li><strong>La₂₋ₓSrₓCuO₄</strong>：单层结构，T_c ≈ 40K</li>
        <li><strong>YBa₂Cu₃O₇₋δ</strong>：双层结构，T_c ≈ 93K</li>
        <li><strong>Bi₂Sr₂Ca₂Cu₃O₁₀</strong>：三层结构，T_c ≈ 110K</li>
      </ul>

      <h3>2.2 电子结构</h3>
      <p>CuO₂平面的电子结构决定了超导性质：</p>
      <div class="formula">
        $$H_{Hubbard} = -t\sum_{\langle i,j \rangle,\sigma} (c_{i\sigma}^\dagger c_{j\sigma} + h.c.) + U\sum_i n_{i\uparrow} n_{i\downarrow}$$
      </div>
      <p>其中t是跃迁积分，U是库仑排斥能。</p>
    </div>

    <div class="content-section">
      <h2>3. 可能的配对机制</h2>
      
      <h3>3.1 自旋涨落机制</h3>
      <p>反铁磁自旋涨落可能提供配对胶水：</p>
      <div class="formula">
        $$V_{eff}(\mathbf{q},\omega) = \frac{3J^2}{2} \frac{\chi(\mathbf{q},\omega)}{1 - J\chi(\mathbf{q},\omega)}$$
      </div>
      <p>其中χ(q,ω)是自旋磁化率，J是交换相互作用。</p>

      <h3>3.2 电荷涨落机制</h3>
      <p>电荷密度涨落也可能贡献配对：</p>
      <div class="formula">
        $$\chi_c(\mathbf{q},\omega) = \frac{\chi_0(\mathbf{q},\omega)}{1 - V_c(\mathbf{q})\chi_0(\mathbf{q},\omega)}$$
      </div>

      <h3>3.3 轨道涨落机制</h3>
      <p>轨道自由度的涨落在某些材料中可能重要。</p>
    </div>

    <div class="content-section">
      <h2>4. d波配对对称性</h2>
      <p>高温超导体表现出d波配对对称性：</p>
      <div class="formula">
        $$\Delta(\mathbf{k}) = \Delta_0 (\cos k_x - \cos k_y)$$
      </div>
      
      <h3>4.1 实验证据</h3>
      <ul>
        <li>角分辨光电子谱(ARPES)观测到节点</li>
        <li>约瑟夫森结实验</li>
        <li>比热测量显示线性温度依赖</li>
        <li>核磁共振Knight位移</li>
      </ul>

      <h3>4.2 理论意义</h3>
      <p>d波对称性暗示：</p>
      <ul>
        <li>配对机制非传统</li>
        <li>可能涉及反铁磁涨落</li>
        <li>存在节点激发</li>
      </ul>
    </div>

    <div class="content-section">
      <h2>5. 赝能隙现象</h2>
      <p>在超导转变温度T_c之上存在赝能隙T*：</p>
      
      <h3>5.1 实验观测</h3>
      <ul>
        <li>ARPES观测到费米弧</li>
        <li>隧道谱显示能隙结构</li>
        <li>输运性质异常</li>
        <li>核磁共振自旋晶格弛豫</li>
      </ul>

      <h3>5.2 理论解释</h3>
      <p>可能的机制包括：</p>
      <ul>
        <li>预形成Cooper对</li>
        <li>竞争序参量</li>
        <li>量子临界涨落</li>
        <li>条纹相关联</li>
      </ul>
    </div>

    <div class="content-section">
      <h2>6. 当前研究前沿</h2>
      
      <h3>6.1 铁基超导体</h3>
      <p>2008年发现的铁基超导体提供新视角：</p>
      <ul>
        <li>多轨道特性</li>
        <li>s±配对对称性</li>
        <li>自旋涨落机制</li>
        <li>向列相</li>
      </ul>

      <h3>6.2 无限层镍酸盐</h3>
      <p>2019年发现的镍酸盐超导体：</p>
      <div class="formula">
        $$\text{Nd}_{1-x}\text{Sr}_x\text{NiO}_2$$
      </div>
      <p>可能提供理解铜氧化物的新线索。</p>

      <h3>6.3 理论方法进展</h3>
      <ul>
        <li>动力学平均场理论(DMFT)</li>
        <li>量子蒙特卡罗方法</li>
        <li>密度矩阵重整化群</li>
        <li>机器学习方法</li>
      </ul>
    </div>

    <div class="content-section">
      <h2>7. 未来展望</h2>
      <p>解决高温超导机制需要：</p>
      <ul>
        <li><strong>理论突破</strong>：发展新的理论框架</li>
        <li><strong>实验技术</strong>：提高能量和动量分辨率</li>
        <li><strong>材料探索</strong>：寻找新的超导体系</li>
        <li><strong>计算方法</strong>：发展强关联电子系统的数值方法</li>
      </ul>
      
      <div class="highlight-box">
        <h4>关键问题</h4>
        <p>高温超导机制的解决将不仅推动基础物理学发展，还可能带来室温超导体的实现，彻底改变能源和信息技术。</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chapter19_1_1',
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