<template>
  <div class="chapter-content">
    <h1>15.3.1 边缘费米液体的定义</h1>
    
    <div class="section">
      <h2>概述</h2>
      <p>
        边缘费米液体（Marginal Fermi Liquid, MFL）是介于
        费米液体和非费米液体之间的一种特殊量子态。
        这个概念最初由Varma等人提出，
        用来描述高温超导体正常态的异常性质。
        边缘费米液体的特征是其物理量表现出
        对数修正的标度行为，
        这种行为处于费米液体的幂律标度
        和非费米液体的更强异常行为之间。
        边缘费米液体的出现通常与系统处于
        某种临界维度或临界点附近有关，
        此时量子涨落的效应变得边缘重要。
        理解边缘费米液体对于认识强关联电子系统
        中的量子临界现象和非费米液体行为具有重要意义。
        本节将详细讨论边缘费米液体的定义、
        特征、理论起源以及实验观测。
      </p>
    </div>

    <div class="section">
      <h2>边缘费米液体的基本特征</h2>
      
      <h3>对数修正的标度行为</h3>
      <p>边缘费米液体的核心特征是对数修正：</p>
      <div class="formula">
        ρ(T) = ρ₀ + A T ln(T₀/T)
      </div>
      <div class="formula">
        C(T)/T = γ₀ + B ln(T₀/T)
      </div>
      <div class="formula">
        χ(T) = χ₀ + D T ln(T₀/T)
      </div>
      
      <p>其中：</p>
      <ul>
        <li><strong>ρ(T)：</strong>电阻率</li>
        <li><strong>C(T)：</strong>比热</li>
        <li><strong>χ(T)：</strong>磁化率</li>
        <li><strong>T₀：</strong>特征温度标度</li>
      </ul>
      
      <h3>自能的对数发散</h3>
      <p>单粒子自能的虚部：</p>
      <div class="formula">
        Im Σ(k_F, ω) = -λ ω ln(ω₀/|ω|)
      </div>
      
      <p>实部：</p>
      <div class="formula">
        Re Σ(k_F, ω) = λ ω [ln²(ω₀/|ω|) - π²/6]
      </div>
      
      <p>其中λ是无量纲耦合常数。</p>
      
      <h3>谱函数的特征</h3>
      <p>单粒子谱函数：</p>
      <div class="formula">
        A(k_F, ω) = (1/π) |Im Σ(k_F, ω)| / [ω - Re Σ(k_F, ω)]²
      </div>
      
      <p>在低频极限下表现出对数增强的散射率。</p>
    </div>

    <div class="section">
      <h2>理论起源</h2>
      
      <h3>临界维度效应</h3>
      <p>在临界维度d_c = 2处，相互作用变为边缘相关：</p>
      <div class="formula">
        β(g) = -ε g + b g² ln g + ...
      </div>
      
      <p>其中：</p>
      <ul>
        <li><strong>ε = d - d_c：</strong>维度偏离</li>
        <li><strong>g：</strong>相互作用强度</li>
        <li><strong>b：</strong>系数</li>
      </ul>
      
      <h3>量子临界点附近</h3>
      <p>在量子临界点附近，涨落的关联长度：</p>
      <div class="formula">
        ξ ∝ |δ|^{-ν}
      </div>
      
      <p>当ν → ∞时，系统表现出边缘行为。</p>
      
      <h3>嵌套费米面</h3>
      <p>在准二维系统中，费米面嵌套导致：</p>
      <div class="formula">
        χ₀(q) = ∫ dk f(ε_k) - f(ε_{k+q}) / (ε_k - ε_{k+q})
      </div>
      
      <p>在嵌套矢量q = Q处发散，产生边缘行为。</p>
    </div>

    <div class="section">
      <h2>Varma-Littlewood-Schmitt-Ruckenstein理论</h2>
      
      <h3>VLSR模型</h3>
      <p>VLSR理论的基本假设：</p>
      <ul>
        <li><strong>准二维系统：</strong>强各向异性</li>
        <li><strong>反铁磁涨落：</strong>Q = (π,π)处的涨落</li>
        <li><strong>热点模型：</strong>费米面上的特殊点</li>
        <li><strong>边缘相互作用：</strong>对数发散的修正</li>
      </ul>
      
      <h3>有效相互作用</h3>
      <p>电子-自旋涨落相互作用：</p>
      <div class="formula">
        H_{int} = g ∑_{k,k'} ψ†_k σ · S_{k-k'} ψ_{k'}
      </div>
      
      <p>其中S_q是自旋涨落场。</p>
      
      <h3>自旋涨落谱</h3>
      <p>反铁磁自旋涨落的谱函数：</p>
      <div class="formula">
        χ''(q,ω) = χ₀ Γ|ω| / [(q - Q)²ξ² + (Γ|ω|)^α]
      </div>
      
      <p>其中：</p>
      <ul>
        <li><strong>Γ：</strong>阻尼常数</li>
        <li><strong>ξ：</strong>关联长度</li>
        <li><strong>α：</strong>动力学指数</li>
      </ul>
    </div>

    <div class="section">
      <h2>输运性质</h2>
      
      <h3>电阻率</h3>
      <p>面内电阻率的温度依赖：</p>
      <div class="formula">
        ρ_{ab}(T) = ρ₀ + A T ln(T₀/T)
      </div>
      
      <p>c轴电阻率：</p>
      <div class="formula">
        ρ_c(T) = ρ₀ + B T²
      </div>
      
      <p>显示出强烈的各向异性。</p>
      
      <h3>霍尔效应</h3>
      <p>霍尔系数的温度依赖：</p>
      <div class="formula">
        R_H(T) = R₀[1 + α T ln(T₀/T)]
      </div>
      
      <h3>磁阻</h3>
      <p>磁阻的标度行为：</p>
      <div class="formula">
        Δρ/ρ₀ = f(H/T^β)
      </div>
      
      <p>其中β是特征指数。</p>
    </div>

    <div class="section">
      <h2>热力学性质</h2>
      
      <h3>比热</h3>
      <p>电子比热的对数修正：</p>
      <div class="formula">
        C_e(T)/T = γ₀[1 + λ ln(T₀/T)]
      </div>
      
      <p>其中γ₀是费米液体的比热系数。</p>
      
      <h3>磁化率</h3>
      <p>自旋磁化率：</p>
      <div class="formula">
        χ_s(T) = χ₀[1 + α ln(T₀/T)]
      </div>
      
      <p>轨道磁化率通常不受影响。</p>
      
      <h3>Wilson比</h3>
      <p>Wilson比的修正：</p>
      <div class="formula">
        R_W = (π²k_B²χ₀)/(3μ_B²γ₀) × [1 + δ ln(T₀/T)]
      </div>
      
      <p>偏离费米液体的普适值。</p>
    </div>

    <div class="section">
      <h2>光学性质</h2>
      
      <h3>光学电导率</h3>
      <p>红外光学电导率：</p>
      <div class="formula">
        σ₁(ω) = σ_dc + A ω ln(ω₀/ω)
      </div>
      
      <p>显示出对数频率依赖。</p>
      
      <h3>等离激元</h3>
      <p>等离激元频率的修正：</p>
      <div class="formula">
        ω_p²(T) = ω_{p0}²[1 + β ln(T₀/T)]
      </div>
      
      <h3>介电函数</h3>
      <p>介电函数的虚部：</p>
      <div class="formula">
        ε₂(ω) = (4πσ₁(ω))/ω
      </div>
      
      <p>反映了载流子的散射机制。</p>
    </div>

    <div class="section">
      <h2>谱学性质</h2>
      
      <h3>角分辨光电子能谱</h3>
      <p>ARPES谱函数的线宽：</p>
      <div class="formula">
        Γ(ω,T) = Γ₀ + α max(|ω|, k_B T) ln(Λ/max(|ω|, k_B T))
      </div>
      
      <p>其中Λ是高能截断。</p>
      
      <h3>隧穿谱学</h3>
      <p>隧穿电导的对数修正：</p>
      <div class="formula">
        G(V,T) = G₀[1 + λ ln(max(eV, k_B T)/Λ)]
      </div>
      
      <h3>拉曼散射</h3>
      <p>电子拉曼散射强度：</p>
      <div class="formula">
        I(ω,T) ∝ Im χ''(ω) [1 + n(ω)]
      </div>
      
      <p>其中χ''(ω)是电子响应函数。</p>
    </div>

    <div class="section">
      <h2>与其他非费米液体的区别</h2>
      
      <h3>与Luttinger液体的比较</h3>
      <p>主要区别：</p>
      <ul>
        <li><strong>维度：</strong>MFL通常在准二维系统</li>
        <li><strong>标度：</strong>对数vs幂律</li>
        <li><strong>起源：</strong>临界涨落vs维度效应</li>
        <li><strong>稳定性：</strong>MFL更不稳定</li>
      </ul>
      
      <h3>与奇异金属的关系</h3>
      <p>奇异金属的特征：</p>
      <ul>
        <li><strong>线性电阻率：</strong>ρ ∝ T</li>
        <li><strong>MFL修正：</strong>ρ ∝ T ln T</li>
        <li><strong>温度范围：</strong>不同的适用范围</li>
      </ul>
      
      <h3>与量子临界点的关系</h3>
      <p>量子临界行为：</p>
      <ul>
        <li><strong>临界指数：</strong>连续变化</li>
        <li><strong>标度塌缩：</strong>数据的标度塌缩</li>
        <li><strong>普适性：</strong>普适性类的边界</li>
      </ul>
    </div>

    <div class="section">
      <h2>实验观测</h2>
      
      <h3>高温超导体</h3>
      <p>铜氧化物超导体中的观测：</p>
      <ul>
        <li><strong>La₂₋ₓSrₓCuO₄：</strong>欠掺杂区域</li>
        <li><strong>YBa₂Cu₃O₇₋δ：</strong>正常态性质</li>
        <li><strong>Bi₂Sr₂CaCu₂O₈：</strong>ARPES测量</li>
      </ul>
      
      <h3>重费米子系统</h3>
      <p>某些重费米子化合物：</p>
      <ul>
        <li><strong>CeCu₆₋ₓAuₓ：</strong>量子临界点附近</li>
        <li><strong>YbRh₂Si₂：</strong>反铁磁量子临界点</li>
        <li><strong>CeCoIn₅：</strong>磁场调节的临界行为</li>
      </ul>
      
      <h3>有机导体</h3>
      <p>准二维有机导体：</p>
      <ul>
        <li><strong>(BEDT-TTF)₂X：</strong>Mott转变附近</li>
        <li><strong>κ-(ET)₂Cu[N(CN)₂]Br：</strong>量子自旋液体候选</li>
      </ul>
      
      <h3>铁基超导体</h3>
      <p>铁砷化合物中的边缘行为：</p>
      <ul>
        <li><strong>BaFe₂As₂：</strong>结构相变附近</li>
        <li><strong>FeSe：</strong>向列相附近</li>
      </ul>
    </div>

    <div class="section">
      <h2>理论挑战</h2>
      
      <h3>稳定性问题</h3>
      <p>边缘费米液体的稳定性：</p>
      <ul>
        <li><strong>红外发散：</strong>低能发散的处理</li>
        <li><strong>高阶修正：</strong>微扰论的有效性</li>
        <li><strong>非微扰效应：</strong>强耦合行为</li>
      </ul>
      
      <h3>截断依赖性</h3>
      <p>对数发散的截断：</p>
      <ul>
        <li><strong>紫外截断：</strong>高能物理的影响</li>
        <li><strong>红外截断：</strong>有限尺寸效应</li>
        <li><strong>物理截断：</strong>其他能量标度</li>
      </ul>
      
      <h3>维度交叉</h3>
      <p>准二维到三维的交叉：</p>
      <ul>
        <li><strong>层间耦合：</strong>三维性的恢复</li>
        <li><strong>交叉温度：</strong>T* ~ t_⊥²/t_∥</li>
        <li><strong>各向异性：</strong>输运的各向异性</li>
      </ul>
    </div>

    <div class="section">
      <h2>数值研究</h2>
      
      <h3>量子蒙特卡罗</h3>
      <p>QMC研究的挑战：</p>
      <ul>
        <li><strong>符号问题：</strong>费米子系统的困难</li>
        <li><strong>有限尺寸：</strong>对数行为的提取</li>
        <li><strong>温度范围：</strong>低温极限的困难</li>
      </ul>
      
      <h3>动力学平均场理论</h3>
      <p>DMFT的应用：</p>
      <ul>
        <li><strong>局域近似：</strong>空间涨落的忽略</li>
        <li><strong>自洽求解：</strong>自能的自洽计算</li>
        <li><strong>连续时间：</strong>CT-QMC求解器</li>
      </ul>
      
      <h3>函数重整化群</h3>
      <p>fRG方法：</p>
      <ul>
        <li><strong>流方程：</strong>能量标度的演化</li>
        <li><strong>顶点修正：</strong>多体顶点的计算</li>
        <li><strong>截断方案：</strong>近似的选择</li>
      </ul>
    </div>

    <div class="section">
      <h2>应用和意义</h2>
      
      <h3>高温超导机理</h3>
      <p>MFL与超导的关系：</p>
      <ul>
        <li><strong>正常态：</strong>超导态的前驱现象</li>
        <li><strong>配对机制：</strong>自旋涨落介导</li>
        <li><strong>赝能隙：</strong>预配对的可能性</li>
      </ul>
      
      <h3>量子临界现象</h3>
      <p>量子相变的理解：</p>
      <ul>
        <li><strong>临界指数：</strong>连续变化的指数</li>
        <li><strong>标度理论：</strong>修正的标度律</li>
        <li><strong>普适性：</strong>普适性类的边界</li>
      </ul>
      
      <h3>材料设计</h3>
      <p>新材料的设计原则：</p>
      <ul>
        <li><strong>维度控制：</strong>准二维结构</li>
        <li><strong>掺杂调节：</strong>载流子浓度</li>
        <li><strong>压力调节：</strong>晶格参数</li>
      </ul>
    </div>

    <div class="section">
      <h2>前沿发展</h2>
      
      <h3>机器学习应用</h3>
      <ul>
        <li><strong>相识别：</strong>MFL相的自动识别</li>
        <li><strong>参数提取：</strong>对数修正的拟合</li>
        <li><strong>预测模型：</strong>性质的预测</li>
      </ul>
      
      <h3>非平衡态</h3>
      <ul>
        <li><strong>泵浦-探测：</strong>超快光谱学</li>
        <li><strong>驱动系统：</strong>周期驱动的效应</li>
        <li><strong>量子淬火：</strong>参数的突然改变</li>
      </ul>
      
      <h3>拓扑效应</h3>
      <ul>
        <li><strong>拓扑边缘态：</strong>边缘态的MFL行为</li>
        <li><strong>Weyl半金属：</strong>线性色散的修正</li>
        <li><strong>拓扑超导：</strong>配对的拓扑性质</li>
      </ul>
      
      <h3>量子模拟</h3>
      <ul>
        <li><strong>冷原子系统：</strong>可控的量子模拟</li>
        <li><strong>光子系统：</strong>光子量子模拟器</li>
        <li><strong>超导量子比特：</strong>数字量子模拟</li>
      </ul>
    </div>

    <div class="section">
      <h2>总结</h2>
      <p>
        边缘费米液体代表了量子多体系统中
        一类重要的临界现象，
        它处于费米液体和非费米液体之间的边界。
        其特征的对数修正行为反映了
        系统在临界维度或临界点附近的特殊性质。
        边缘费米液体理论不仅为理解
        高温超导体等强关联系统提供了重要框架，
        也为探索量子临界现象开辟了新的途径。
        尽管在理论上仍面临稳定性和截断依赖等挑战，
        但实验上的广泛观测证实了这一概念的重要性。
        随着实验技术的进步和理论方法的发展，
        边缘费米液体的研究将继续推动
        我们对强关联电子系统和量子临界现象的理解，
        为发现新的量子物态和理解复杂量子多体系统
        的普适性质提供重要指导。
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chapter15_3_1'
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