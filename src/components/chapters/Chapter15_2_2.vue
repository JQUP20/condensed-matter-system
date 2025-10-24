<template>
  <div class="chapter-content">
    <h1>15.2.2 Luttinger液体参数</h1>
    
    <div class="section">
      <h2>概述</h2>
      <p>
        Luttinger液体参数是描述一维相互作用费米子系统
        最重要的物理量之一。
        这些参数完全确定了系统的低能物理性质，
        包括关联函数的幂律指数、输运性质、
        以及对各种微扰的响应。
        与高维费米液体不同，一维系统的性质
        不能简单地用费米速度和有效质量来描述，
        而需要引入一组新的参数来刻画
        自旋和电荷激发的集体行为。
        理解Luttinger参数的物理意义、
        计算方法以及与实验观测的关系，
        对于掌握一维强关联系统的本质至关重要。
        本节将详细讨论各种Luttinger参数的定义、
        物理意义、计算方法以及实验测定。
      </p>
    </div>

    <div class="section">
      <h2>基本Luttinger参数</h2>
      
      <h3>速度参数</h3>
      <p>Luttinger液体中的速度参数：</p>
      <div class="formula">
        v_c = v_F √(1 + g₄/πv_F)
      </div>
      <div class="formula">
        v_s = v_F √(1 + g₂/πv_F)
      </div>
      
      <p>其中：</p>
      <ul>
        <li><strong>v_c：</strong>电荷激发速度</li>
        <li><strong>v_s：</strong>自旋激发速度</li>
        <li><strong>v_F：</strong>费米速度</li>
        <li><strong>g₂, g₄：</strong>相互作用参数</li>
      </ul>
      
      <h3>Luttinger参数K</h3>
      <p>无量纲Luttinger参数：</p>
      <div class="formula">
        K_c = √((πv_F + g₄)/(πv_F + g₂))
      </div>
      <div class="formula">
        K_s = √((πv_F - g₂)/(πv_F + g₂))
      </div>
      
      <p>参数的物理意义：</p>
      <ul>
        <li><strong>K > 1：</strong>吸引相互作用占主导</li>
        <li><strong>K < 1：</strong>排斥相互作用占主导</li>
        <li><strong>K = 1：</strong>自由费米子极限</li>
        <li><strong>K → 0：</strong>强排斥极限</li>
        <li><strong>K → ∞：</strong>强吸引极限</li>
      </ul>
      
      <h3>相互作用参数g</h3>
      <p>前向和后向散射参数：</p>
      <div class="formula">
        g₁ = ∫ dk V(2k_F + k)
      </div>
      <div class="formula">
        g₂ = ∫ dk V(k)
      </div>
      <div class="formula">
        g₄ = ∫ dk V(2k_F - k)
      </div>
      
      <p>其中V(k)是相互作用势的傅里叶变换。</p>
    </div>

    <div class="section">
      <h2>参数的物理意义</h2>
      
      <h3>电荷刚度和自旋刚度</h3>
      <p>刚度的定义：</p>
      <div class="formula">
        ρ_c = (n²/2m*_c) = (πn²v_c)/(2K_c)
      </div>
      <div class="formula">
        ρ_s = (n²/2m*_s) = (πn²v_s)/(2K_s)
      </div>
      
      <p>其中：</p>
      <ul>
        <li><strong>ρ_c：</strong>电荷刚度</li>
        <li><strong>ρ_s：</strong>自旋刚度</li>
        <li><strong>m*_c, m*_s：</strong>有效质量</li>
        <li><strong>n：</strong>粒子密度</li>
      </ul>
      
      <h3>压缩率</h3>
      <p>等温压缩率：</p>
      <div class="formula">
        κ = -(1/V)(∂V/∂P)_T = (1/n²)(∂n/∂μ)_T
      </div>
      
      <p>与Luttinger参数的关系：</p>
      <div class="formula">
        κ = (π)/(n²v_c K_c)
      </div>
      
      <h3>磁化率</h3>
      <p>自旋磁化率：</p>
      <div class="formula">
        χ_s = (μ_B²/π)(K_s/v_s)
      </div>
      
      <p>轨道磁化率：</p>
      <div class="formula">
        χ_{orb} = -(e²/12πm)(1/v_c K_c)
      </div>
    </div>

    <div class="section">
      <h2>关联函数中的指数</h2>
      
      <h3>单粒子格林函数</h3>
      <p>费米子格林函数的幂律指数：</p>
      <div class="formula">
        G(x,t) ∝ (x - v_F t)^{-α}
      </div>
      
      <p>其中指数为：</p>
      <div class="formula">
        α = (1/4)(K_c + K_c^{-1} + K_s + K_s^{-1})
      </div>
      
      <h3>密度-密度关联函数</h3>
      <p>电荷密度关联函数：</p>
      <div class="formula">
        ⟨ρ_c(x,t) ρ_c(0,0)⟩ ∝ (x - v_c t)^{-2}
      </div>
      
      <p>自旋密度关联函数：</p>
      <div class="formula">
        ⟨ρ_s(x,t) ρ_s(0,0)⟩ ∝ (x - v_s t)^{-2}
      </div>
      
      <h3>配对关联函数</h3>
      <p>超导配对关联函数：</p>
      <div class="formula">
        ⟨Δ_s(x,t) Δ_s†(0,0)⟩ ∝ (x - v_c t)^{-K_c}
      </div>
      
      <p>三重态配对：</p>
      <div class="formula">
        ⟨Δ_t(x,t) Δ_t†(0,0)⟩ ∝ (x - v_s t)^{-K_s}
      </div>
      
      <h3>电荷密度波关联函数</h3>
      <p>2k_F电荷密度波：</p>
      <div class="formula">
        ⟨O_{2k_F}(x,t) O_{2k_F}†(0,0)⟩ ∝ (x - v_c t)^{-K_c^{-1}}
      </div>
      
      <p>自旋密度波：</p>
      <div class="formula">
        ⟨O_{SDW}(x,t) O_{SDW}†(0,0)⟩ ∝ (x - v_s t)^{-K_s^{-1}}
      </div>
    </div>

    <div class="section">
      <h2>输运性质</h2>
      
      <h3>电导率</h3>
      <p>直流电导率的温度依赖：</p>
      <div class="formula">
        σ(T) = σ₀ + AT^{α}
      </div>
      
      <p>其中指数：</p>
      <div class="formula">
        α = K_c + K_c^{-1} - 2
      </div>
      
      <p>不同情况下的行为：</p>
      <ul>
        <li><strong>K_c = 1：</strong>α = 0，常数电导</li>
        <li><strong>K_c > 1：</strong>α > 0，电导随温度增加</li>
        <li><strong>K_c < 1：</strong>α < 0，电导随温度减少</li>
      </ul>
      
      <h3>热导率</h3>
      <p>热导率的表达式：</p>
      <div class="formula">
        κ(T) = (π²k_B²T/3)(1/v_c + 1/v_s)
      </div>
      
      <h3>Wiedemann-Franz定律的违反</h3>
      <p>Lorenz数的修正：</p>
      <div class="formula">
        L = (κρ/T) = L₀(v_c + v_s)/(2v_c)
      </div>
      
      <p>其中L₀ = π²k_B²/(3e²)是标准Lorenz数。</p>
    </div>

    <div class="section">
      <h2>隧穿和接触</h2>
      
      <h3>隧穿电导</h3>
      <p>点接触隧穿电导：</p>
      <div class="formula">
        G(V,T) ∝ (eV)^{α} + (k_B T)^{α}
      </div>
      
      <p>其中隧穿指数：</p>
      <div class="formula">
        α = (K_c + K_c^{-1})/4 - 1/2
      </div>
      
      <h3>端点隧穿</h3>
      <p>开放边界的隧穿：</p>
      <div class="formula">
        G_{end}(V,T) ∝ (eV)^{α_{end}} + (k_B T)^{α_{end}}
      </div>
      
      <p>端点隧穿指数：</p>
      <div class="formula">
        α_{end} = (K_c^{-1} - 1)/2
      </div>
      
      <h3>杂质散射</h3>
      <p>单个杂质的散射：</p>
      <div class="formula">
        T(E) ∝ E^{2(K_c^{-1} - 1)}
      </div>
      
      <p>其中T(E)是透射系数。</p>
    </div>

    <div class="section">
      <h2>参数的计算方法</h2>
      
      <h3>微扰论方法</h3>
      <p>弱相互作用极限下的计算：</p>
      <div class="formula">
        K_c ≈ 1 - (g₂ + g₄)/(2πv_F) + O(g²)
      </div>
      <div class="formula">
        K_s ≈ 1 - g₂/(2πv_F) + O(g²)
      </div>
      
      <h3>Bethe ansatz方法</h3>
      <p>可积模型的精确解：</p>
      <p>对于Lieb-Liniger模型：</p>
      <div class="formula">
        K = π/(2 arccos(-c/2))
      </div>
      
      <p>其中c是相互作用强度。</p>
      
      <h3>重整化群方法</h3>
      <p>RG流方程：</p>
      <div class="formula">
        dg₂/dl = -g₂²/(2πv_F)
      </div>
      <div class="formula">
        dg₄/dl = -g₄²/(2πv_F)
      </div>
      
      <p>其中l是RG流参数。</p>
      
      <h3>数值方法</h3>
      <p>密度矩阵重整化群(DMRG)：</p>
      <ul>
        <li><strong>基态能量：</strong>通过能量计算参数</li>
        <li><strong>关联函数：</strong>拟合幂律行为</li>
        <li><strong>激发谱：</strong>能隙和速度的提取</li>
        <li><strong>有限尺寸标度：</strong>热力学极限外推</li>
      </ul>
    </div>

    <div class="section">
      <h2>实验测定</h2>
      
      <h3>隧穿谱学</h3>
      <p>通过隧穿实验测定参数：</p>
      <ul>
        <li><strong>I-V特性：</strong>幂律拟合提取指数</li>
        <li><strong>温度依赖：</strong>不同温度下的测量</li>
        <li><strong>磁场效应：</strong>自旋相关的修正</li>
        <li><strong>几何效应：</strong>不同接触几何</li>
      </ul>
      
      <h3>输运测量</h3>
      <p>电阻率和热导率测量：</p>
      <div class="formula">
        ρ(T) = ρ₀[1 + (T/T₀)^α]
      </div>
      
      <p>通过拟合确定α，进而得到K参数。</p>
      
      <h3>光谱学方法</h3>
      <p>角分辨光电子能谱(ARPES)：</p>
      <ul>
        <li><strong>谱函数：</strong>单粒子谱的幂律行为</li>
        <li><strong>色散关系：</strong>速度参数的测定</li>
        <li><strong>谱权重：</strong>准粒子权重的压制</li>
      </ul>
      
      <h3>核磁共振</h3>
      <p>NMR测量的信息：</p>
      <ul>
        <li><strong>Knight位移：</strong>自旋磁化率</li>
        <li><strong>弛豫时间：</strong>动力学性质</li>
        <li><strong>谱线形状：</strong>局域环境的信息</li>
      </ul>
    </div>

    <div class="section">
      <h2>特殊情况和极限</h2>
      
      <h3>自由费米子极限</h3>
      <p>K_c = K_s = 1的情况：</p>
      <ul>
        <li><strong>线性色散：</strong>ω = v_F|k|</li>
        <li><strong>费米液体行为：</strong>准粒子图像有效</li>
        <li><strong>无相互作用：</strong>g₂ = g₄ = 0</li>
      </ul>
      
      <h3>强相互作用极限</h3>
      <p>K → 0或K → ∞的极限：</p>
      <ul>
        <li><strong>Wigner晶体：</strong>K_c → 0</li>
        <li><strong>超导不稳定：</strong>K_c → ∞</li>
        <li><strong>自旋能隙：</strong>K_s → 0</li>
      </ul>
      
      <h3>SU(2)对称情况</h3>
      <p>自旋旋转对称时：</p>
      <div class="formula">
        K_s = 1, v_s = v_F
      </div>
      
      <p>只有电荷部分受相互作用影响。</p>
      
      <h3>Luther-Emery液体</h3>
      <p>自旋能隙相：</p>
      <ul>
        <li><strong>自旋激发：</strong>有限能隙</li>
        <li><strong>电荷激发：</strong>无能隙</li>
        <li><strong>超导关联：</strong>幂律衰减</li>
      </ul>
    </div>

    <div class="section">
      <h2>多组分系统</h2>
      
      <h3>多轨道系统</h3>
      <p>N轨道费米子系统：</p>
      <div class="formula">
        K_{αβ} = δ_{αβ} + (g_{αβ})/(πv_F)
      </div>
      
      <p>其中α, β是轨道指标。</p>
      
      <h3>自旋梯子</h3>
      <p>两腿自旋梯子的参数：</p>
      <ul>
        <li><strong>对称相：</strong>C₁s + C₁a模式</li>
        <li><strong>反对称相：</strong>C₁s - C₁a模式</li>
        <li><strong>自旋能隙：</strong>梯子耦合的效应</li>
      </ul>
      
      <h3>碳纳米管</h3>
      <p>四重简并的碳纳米管：</p>
      <div class="formula">
        K_c = K_s = √(1 + U/(πv_F))
      </div>
      
      <p>其中U是库仑相互作用强度。</p>
    </div>

    <div class="section">
      <h2>温度和频率依赖</h2>
      
      <h3>有限温度修正</h3>
      <p>热激发对参数的影响：</p>
      <div class="formula">
        K_{eff}(T) = K₀[1 + δK(T)]
      </div>
      
      <p>其中δK(T)是温度修正。</p>
      
      <h3>频率依赖的响应</h3>
      <p>动态响应函数：</p>
      <div class="formula">
        χ(ω) = χ₀/(1 - iωτ)^α
      </div>
      
      <p>其中α由Luttinger参数决定。</p>
      
      <h3>交叉行为</h3>
      <p>不同能量标度的交叉：</p>
      <ul>
        <li><strong>高温极限：</strong>经典行为</li>
        <li><strong>低温极限：</strong>量子行为</li>
        <li><strong>交叉温度：</strong>T* ~ v/L</li>
      </ul>
    </div>

    <div class="section">
      <h2>应用实例</h2>
      
      <h3>量子线</h3>
      <p>半导体量子线中的参数：</p>
      <ul>
        <li><strong>GaAs量子线：</strong>K ≈ 0.7</li>
        <li><strong>库仑相互作用：</strong>长程相互作用的效应</li>
        <li><strong>介电屏蔽：</strong>环境的影响</li>
      </ul>
      
      <h3>碳纳米管</h3>
      <p>单壁碳纳米管的参数：</p>
      <ul>
        <li><strong>金属性管：</strong>K ≈ 0.2-0.3</li>
        <li><strong>直径依赖：</strong>曲率效应</li>
        <li><strong>环境效应：</strong>基底和包覆的影响</li>
      </ul>
      
      <h3>有机导体</h3>
      <p>准一维有机盐：</p>
      <ul>
        <li><strong>(TMTSF)₂X：</strong>K ≈ 0.2-0.5</li>
        <li><strong>维度交叉：</strong>三维耦合的效应</li>
        <li><strong>压力调节：</strong>参数的可调性</li>
      </ul>
      
      <h3>冷原子系统</h3>
      <p>光晶格中的冷原子：</p>
      <ul>
        <li><strong>可调相互作用：</strong>Feshbach共振</li>
        <li><strong>精确控制：</strong>参数的精确调节</li>
        <li><strong>实时测量：</strong>动力学的观测</li>
      </ul>
    </div>

    <div class="section">
      <h2>前沿发展</h2>
      
      <h3>非平衡态</h3>
      <ul>
        <li><strong>驱动系统：</strong>周期驱动的效应</li>
        <li><strong>量子淬火：</strong>参数的突然改变</li>
        <li><strong>稳态：</strong>非平衡稳态的性质</li>
      </ul>
      
      <h3>拓扑效应</h3>
      <ul>
        <li><strong>拓扑边缘态：</strong>边缘态的Luttinger参数</li>
        <li><strong>分数化激发：</strong>分数统计的效应</li>
        <li><strong>Majorana模式：</strong>拓扑超导的边缘态</li>
      </ul>
      
      <h3>机器学习应用</h3>
      <ul>
        <li><strong>参数提取：</strong>自动化的参数确定</li>
        <li><strong>相图构建：</strong>AI辅助的相图</li>
        <li><strong>预测模型：</strong>性质的预测</li>
      </ul>
    </div>

    <div class="section">
      <h2>总结</h2>
      <p>
        Luttinger液体参数是描述一维相互作用费米子系统
        的核心物理量，它们完全确定了系统的低能性质。
        这些参数不仅具有深刻的物理意义，
        也为实验观测和理论计算提供了重要的桥梁。
        通过精确测定和计算Luttinger参数，
        我们可以深入理解一维系统中相互作用的本质，
        预测各种物理性质，并指导新材料的设计。
        随着实验技术的进步和理论方法的发展，
        Luttinger参数的研究将继续推动
        一维量子多体物理的发展，
        为量子器件和量子信息技术的应用
        提供重要的理论基础。
        特别是在可调控的人工量子系统中，
        Luttinger参数的精确控制将为
        探索新的量子现象和应用开辟新的道路。
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chapter15_2_2'
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