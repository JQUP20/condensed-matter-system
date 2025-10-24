<template>
  <div class="chapter-content">
    <h1>13.4.3 平均场近似</h1>
    
    <div class="section">
      <h2>概述</h2>
      <p>
        平均场近似（Mean-Field Approximation）是BCS理论的核心数学技巧，它将复杂的多体相互作用问题简化为有效的单体问题。
        通过引入序参量和自洽条件，平均场近似使我们能够求解超导态的基本性质。
      </p>
    </div>

    <div class="section">
      <h2>基本思想</h2>
      
      <h3>多体问题的困难</h3>
      <p>BCS哈密顿量包含四算符项：</p>
      <div class="formula">
        H = ∑<sub>k,σ</sub> ε<sub>k</sub> c<sub>k,σ</sub><sup>†</sup> c<sub>k,σ</sub> - V ∑<sub>k,k'</sub> c<sub>k,↑</sub><sup>†</sup> c<sub>-k,↓</sub><sup>†</sup> c<sub>-k',↓</sub> c<sub>k',↑</sub>
      </div>
      
      <h3>平均场分解</h3>
      <p>将四算符项分解为两个双算符项的乘积：</p>
      <div class="formula">
        c<sub>k,↑</sub><sup>†</sup> c<sub>-k,↓</sub><sup>†</sup> c<sub>-k',↓</sub> c<sub>k',↑</sub> ≈ 
        ⟨c<sub>k,↑</sub><sup>†</sup> c<sub>-k,↓</sub><sup>†</sup>⟩ c<sub>-k',↓</sub> c<sub>k',↑</sub> + 
        c<sub>k,↑</sub><sup>†</sup> c<sub>-k,↓</sub><sup>†</sup> ⟨c<sub>-k',↓</sub> c<sub>k',↑</sub>⟩ - 
        ⟨c<sub>k,↑</sub><sup>†</sup> c<sub>-k,↓</sub><sup>†</sup>⟩⟨c<sub>-k',↓</sub> c<sub>k',↑</sub>⟩
      </div>
    </div>

    <div class="section">
      <h2>序参量的引入</h2>
      
      <h3>超导序参量</h3>
      <p>定义超导序参量：</p>
      <div class="formula">
        Δ<sub>k</sub> = -V ∑<sub>k'</sub> ⟨c<sub>-k',↓</sub> c<sub>k',↑</sub>⟩
      </div>
      
      <h3>物理意义</h3>
      <ul>
        <li><strong>配对振幅：</strong>描述Cooper对的形成强度</li>
        <li><strong>相干性：</strong>反映超导态的宏观量子相干</li>
        <li><strong>对称性破缺：</strong>表征规范对称性的自发破缺</li>
        <li><strong>能隙：</strong>与准粒子激发能隙直接相关</li>
      </ul>
      
      <h3>简化情况</h3>
      <p>对于s波配对，序参量为常数：</p>
      <div class="formula">
        Δ<sub>k</sub> = Δ = 常数
      </div>
    </div>

    <div class="section">
      <h2>平均场哈密顿量</h2>
      
      <h3>有效哈密顿量</h3>
      <p>经过平均场近似后的哈密顿量：</p>
      <div class="formula">
        H<sub>MF</sub> = ∑<sub>k</sub> [ε<sub>k</sub> (c<sub>k,↑</sub><sup>†</sup> c<sub>k,↑</sub> + c<sub>-k,↓</sub><sup>†</sup> c<sub>-k,↓</sub>) + 
        Δ c<sub>k,↑</sub><sup>†</sup> c<sub>-k,↓</sub><sup>†</sup> + Δ* c<sub>-k,↓</sub> c<sub>k,↑</sub>]
      </div>
      
      <h3>矩阵形式</h3>
      <p>在Nambu表象中：</p>
      <div class="formula">
        H<sub>MF</sub> = ∑<sub>k</sub> Ψ<sub>k</sub><sup>†</sup> H<sub>k</sub> Ψ<sub>k</sub>
      </div>
      <p>其中：</p>
      <div class="formula">
        Ψ<sub>k</sub> = (c<sub>k,↑</sub>, c<sub>-k,↓</sub><sup>†</sup>)<sup>T</sup>
      </div>
      <div class="formula">
        H<sub>k</sub> = (
        <table style="border: none; margin: 0;">
          <tr><td>ε<sub>k</sub></td><td>Δ</td></tr>
          <tr><td>Δ*</td><td>-ε<sub>k</sub></td></tr>
        </table>
        )
      </div>
    </div>

    <div class="section">
      <h2>Bogoliubov变换</h2>
      
      <h3>对角化</h3>
      <p>通过Bogoliubov变换对角化哈密顿量：</p>
      <div class="formula">
        γ<sub>k</sub> = u<sub>k</sub> c<sub>k,↑</sub> + v<sub>k</sub> c<sub>-k,↓</sub><sup>†</sup>
      </div>
      <div class="formula">
        γ<sub>-k</sub><sup>†</sup> = u<sub>k</sub> c<sub>-k,↓</sub><sup>†</sup> - v<sub>k</sub> c<sub>k,↑</sub>
      </div>
      
      <h3>系数确定</h3>
      <p>Bogoliubov系数：</p>
      <div class="formula">
        u<sub>k</sub><sup>2</sup> = ½(1 + ε<sub>k</sub>/E<sub>k</sub>)
      </div>
      <div class="formula">
        v<sub>k</sub><sup>2</sup> = ½(1 - ε<sub>k</sub>/E<sub>k</sub>)
      </div>
      <div class="formula">
        u<sub>k</sub> v<sub>k</sub> = Δ/(2E<sub>k</sub>)
      </div>
      
      <h3>准粒子能谱</h3>
      <div class="formula">
        E<sub>k</sub> = √(ε<sub>k</sub><sup>2</sup> + |Δ|<sup>2</sup>)
      </div>
    </div>

    <div class="section">
      <h2>自洽条件</h2>
      
      <h3>能隙方程</h3>
      <p>序参量的自洽条件：</p>
      <div class="formula">
        Δ = V ∑<sub>k</sub> (Δ)/(2E<sub>k</sub>) tanh(E<sub>k</sub>/(2k<sub>B</sub>T))
      </div>
      
      <h3>零温情况</h3>
      <p>T = 0时的能隙方程：</p>
      <div class="formula">
        1 = (V/2) ∑<sub>k</sub> 1/E<sub>k</sub> = (V/2) ∑<sub>k</sub> 1/√(ε<sub>k</sub><sup>2</sup> + Δ<sup>2</sup>)
      </div>
      
      <h3>弱耦合近似</h3>
      <p>在Debye模型中：</p>
      <div class="formula">
        Δ<sub>0</sub> = 2ℏω<sub>D</sub> exp(-1/(N(0)V))
      </div>
      <p>其中N(0)是费米面态密度。</p>
    </div>

    <div class="section">
      <h2>基态性质</h2>
      
      <h3>BCS基态</h3>
      <p>超导基态波函数：</p>
      <div class="formula">
        |BCS⟩ = ∏<sub>k</sub> (u<sub>k</sub> + v<sub>k</sub> c<sub>k,↑</sub><sup>†</sup> c<sub>-k,↓</sub><sup>†</sup>)|0⟩
      </div>
      
      <h3>基态能量</h3>
      <div class="formula">
        E<sub>0</sub> = ∑<sub>k</sub> ε<sub>k</sub> v<sub>k</sub><sup>2</sup> - |Δ|<sup>2</sup>/V
      </div>
      
      <h3>凝聚能</h3>
      <p>相对于正常态的能量降低：</p>
      <div class="formula">
        E<sub>cond</sub> = -½N(0)Δ<sub>0</sub><sup>2</sup>
      </div>
    </div>

    <div class="section">
      <h2>有限温度性质</h2>
      
      <h3>温度依赖性</h3>
      <p>能隙随温度的变化遵循：</p>
      <div class="formula">
        Δ(T) = Δ<sub>0</sub> tanh(1.74√(T<sub>c</sub>/T - 1))
      </div>
      
      <h3>临界温度</h3>
      <p>超导转变温度：</p>
      <div class="formula">
        k<sub>B</sub>T<sub>c</sub> = 1.14ℏω<sub>D</sub> exp(-1/(N(0)V))
      </div>
      
      <h3>BCS关系</h3>
      <div class="formula">
        2Δ<sub>0</sub>/(k<sub>B</sub>T<sub>c</sub>) = 3.53
      </div>
    </div>

    <div class="section">
      <h2>平均场近似的局限性</h2>
      
      <h3>忽略的效应</h3>
      <ul>
        <li><strong>涨落效应：</strong>序参量的量子和热涨落</li>
        <li><strong>相位涨落：</strong>特别在低维系统中重要</li>
        <li><strong>强关联效应：</strong>电子间的强库仑相互作用</li>
        <li><strong>无序效应：</strong>杂质和缺陷的影响</li>
      </ul>
      
      <h3>适用范围</h3>
      <ul>
        <li><strong>弱耦合超导体：</strong>传统的BCS超导体</li>
        <li><strong>三维系统：</strong>涨落效应相对较小</li>
        <li><strong>均匀系统：</strong>空间均匀的超导态</li>
        <li><strong>热力学极限：</strong>大系统尺寸</li>
      </ul>
    </div>

    <div class="section">
      <h2>超越平均场的方法</h2>
      
      <h3>涨落修正</h3>
      <ul>
        <li><strong>Gaussian涨落：</strong>序参量的二次涨落</li>
        <li><strong>相位涨落：</strong>Kosterlitz-Thouless转变</li>
        <li><strong>振幅涨落：</strong>配对涨落和赝能隙</li>
      </ul>
      
      <h3>数值方法</h3>
      <ul>
        <li><strong>量子蒙特卡罗：</strong>精确的数值计算</li>
        <li><strong>动力学平均场：</strong>处理强关联效应</li>
        <li><strong>密度泛函理论：</strong>第一性原理计算</li>
      </ul>
    </div>

    <div class="section">
      <h2>实验验证</h2>
      
      <h3>直接测量</h3>
      <ul>
        <li><strong>隧道谱：</strong>直接测量准粒子能隙</li>
        <li><strong>比热测量：</strong>验证指数激活行为</li>
        <li><strong>NMR弛豫：</strong>测量自旋激发能隙</li>
        <li><strong>光谱学：</strong>ARPES测量能带结构</li>
      </ul>
      
      <h3>间接证据</h3>
      <ul>
        <li><strong>同位素效应：</strong>T<sub>c</sub> ∝ M<sup>-1/2</sup></li>
        <li><strong>BCS关系：</strong>2Δ/(k<sub>B</sub>T<sub>c</sub>) ≈ 3.5</li>
        <li><strong>相干峰：</strong>准粒子态密度的尖锐峰</li>
      </ul>
    </div>

    <div class="section">
      <h2>应用和推广</h2>
      
      <h3>非常规超导</h3>
      <ul>
        <li><strong>d波配对：</strong>铜氧化物超导体</li>
        <li><strong>p波配对：</strong>Sr<sub>2</sub>RuO<sub>4</sub></li>
        <li><strong>多带超导：</strong>铁基超导体</li>
        <li><strong>强耦合超导：</strong>A15化合物</li>
      </ul>
      
      <h3>其他系统</h3>
      <ul>
        <li><strong>超流体：</strong><sup>3</sup>He和冷原子气体</li>
        <li><strong>激子凝聚：</strong>半导体双分子层</li>
        <li><strong>色超导：</strong>夸克物质</li>
        <li><strong>中子星：</strong>致密物质的配对</li>
      </ul>
    </div>

    <div class="section">
      <h2>总结</h2>
      <p>
        平均场近似是BCS理论的核心，它通过引入序参量将复杂的多体问题转化为可解的单体问题。
        虽然存在一定的局限性，但平均场近似成功地解释了传统超导体的主要性质，
        并为理解各种配对现象提供了重要的理论框架。现代的理论发展在保持平均场近似优点的同时，
        也在不断完善对涨落效应和强关联效应的处理。
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chapter13_4_3'
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
  font-size: 2.2em;
}

h2 {
  color: #34495e;
  margin-top: 35px;
  margin-bottom: 20px;
  font-size: 1.6em;
  border-left: 4px solid #3498db;
  padding-left: 15px;
}

h3 {
  color: #2c3e50;
  margin-top: 25px;
  margin-bottom: 15px;
  font-size: 1.3em;
}

.section {
  margin-bottom: 35px;
  background: #f8f9fa;
  padding: 25px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.formula {
  background: #ffffff;
  border: 1px solid #e1e8ed;
  border-radius: 6px;
  padding: 15px;
  margin: 15px 0;
  font-family: 'Times New Roman', serif;
  font-size: 1.1em;
  text-align: center;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}

.formula table {
  margin: 0 auto;
  border-collapse: collapse;
}

.formula td {
  padding: 8px 12px;
  text-align: center;
  border: 1px solid #ddd;
}

ul {
  padding-left: 25px;
}

li {
  margin-bottom: 8px;
}

li strong {
  color: #2980b9;
}

p {
  text-align: justify;
  margin-bottom: 15px;
}

sub, sup {
  font-size: 0.8em;
}
</style>