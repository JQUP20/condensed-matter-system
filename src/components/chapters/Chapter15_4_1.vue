<template>
  <div class="chapter-content">
    <h1>15.4.1 线性电阻率</h1>
    
    <div class="section">
      <h2>概述</h2>
      <p>
        线性电阻率是指电阻率与温度呈线性关系的现象，
        即ρ(T) ∝ T，这是许多强关联电子系统中
        观察到的一种异常输运行为。
        在传统的费米液体理论中，
        电阻率在低温下应该表现为T²的依赖关系，
        这是由于电子-电子散射的相空间限制。
        然而，在高温超导体、重费米子系统、
        铁基超导体等材料中，
        人们观察到了显著偏离费米液体预期的
        线性温度依赖的电阻率。
        这种线性电阻率被认为是
        "奇异金属"（strange metal）行为的标志之一，
        反映了系统中强关联效应和量子临界涨落的重要性。
        理解线性电阻率的微观机制
        对于揭示强关联电子系统的本质具有重要意义。
      </p>
    </div>

    <div class="section">
      <h2>费米液体理论的预期</h2>
      
      <h3>Landau费米液体理论</h3>
      <p>在费米液体理论中，电阻率的温度依赖：</p>
      <div class="formula">
        ρ(T) = ρ₀ + A T²
      </div>
      
      <p>其中：</p>
      <ul>
        <li><strong>ρ₀：</strong>剩余电阻率（杂质散射）</li>
        <li><strong>A：</strong>T²系数</li>
      </ul>
      
      <h3>电子-电子散射</h3>
      <p>准粒子散射率：</p>
      <div class="formula">
        1/τ ∝ (k_B T)² / E_F
      </div>
      
      <p>相空间限制导致T²行为。</p>
      
      <h3>Kadowaki-Woods关系</h3>
      <p>费米液体中的普适关系：</p>
      <div class="formula">
        A/γ² = 1.0 × 10⁻⁵ μΩcm(mol K/mJ)²
      </div>
      
      <p>其中γ是电子比热系数。</p>
    </div>

    <div class="section">
      <h2>线性电阻率的观测</h2>
      
      <h3>高温超导体</h3>
      <p>铜氧化物超导体中的线性电阻率：</p>
      <div class="formula">
        ρ_{ab}(T) = ρ₀ + α T
      </div>
      
      <p>典型材料和参数：</p>
      <ul>
        <li><strong>La₂₋ₓSrₓCuO₄：</strong>α ≈ 0.5-2.0 μΩcm/K</li>
        <li><strong>YBa₂Cu₃O₇₋δ：</strong>α ≈ 0.3-1.0 μΩcm/K</li>
        <li><strong>Bi₂Sr₂CaCu₂O₈：</strong>α ≈ 1.0-3.0 μΩcm/K</li>
      </ul>
      
      <h3>温度范围</h3>
      <p>线性行为的温度窗口：</p>
      <ul>
        <li><strong>下限：</strong>T_c < T < T*（赝能隙温度）</li>
        <li><strong>上限：</strong>T < T_coh（相干温度）</li>
        <li><strong>典型范围：</strong>50K < T < 300K</li>
      </ul>
      
      <h3>各向异性</h3>
      <p>c轴电阻率通常表现不同：</p>
      <div class="formula">
        ρ_c(T) = ρ_{c0} + β T^n
      </div>
      
      <p>其中n可能不等于1。</p>
    </div>

    <div class="section">
      <h2>理论机制</h2>
      
      <h3>边缘费米液体理论</h3>
      <p>Varma等人的理论预测：</p>
      <div class="formula">
        ρ(T) = ρ₀ + A T ln(T₀/T)
      </div>
      
      <p>在某些条件下可近似为线性。</p>
      
      <h3>量子临界散射</h3>
      <p>量子临界点附近的散射率：</p>
      <div class="formula">
        1/τ ∝ T^{2-2/z}
      </div>
      
      <p>其中z是动力学临界指数。</p>
      <p>当z = 1时，得到线性电阻率。</p>
      
      <h3>Planckian散射</h3>
      <p>散射率的量子极限：</p>
      <div class="formula">
        1/τ = α k_B T / ℏ
      </div>
      
      <p>其中α是数值因子（通常α ∼ 1）。</p>
      
      <p>这给出：</p>
      <div class="formula">
        ρ(T) = (m α k_B / ne²ℏ) T
      </div>
    </div>

    <div class="section">
      <h2>微观散射机制</h2>
      
      <h3>自旋涨落散射</h3>
      <p>反铁磁自旋涨落的贡献：</p>
      <div class="formula">
        1/τ_{sf} = (2π/ℏ) ∫ dω dq |g(q)|² Im χ(q,ω) n_F(ω)[1-n_F(ω)]
      </div>
      
      <p>其中：</p>
      <ul>
        <li><strong>g(q)：</strong>电子-自旋涨落耦合</li>
        <li><strong>χ(q,ω)：</strong>动力学磁化率</li>
        <li><strong>n_F(ω)：</strong>费米分布函数</li>
      </ul>
      
      <h3>声子散射</h3>
      <p>高温下的声子散射：</p>
      <div class="formula">
        1/τ_{ph} = (2π/ℏ) ∑_q |M_q|² N_q δ(ε_k - ε_{k+q} ± ω_q)
      </div>
      
      <p>其中N_q是声子占据数。</p>
      
      <h3>电荷涨落散射</h3>
      <p>电荷密度涨落的贡献：</p>
      <div class="formula">
        1/τ_{cf} ∝ ∫ dω dq |V(q)|² Im χ_{nn}(q,ω) [n_F(ω) - n_F(ω+Ω)]
      </div>
      
      <p>其中χ_{nn}是电荷响应函数。</p>
    </div>

    <div class="section">
      <h2>热点模型</h2>
      
      <h3>费米面上的热点</h3>
      <p>费米面上与反铁磁波矢连接的特殊点：</p>
      <div class="formula">
        k_{hot} = k_F ± Q/2
      </div>
      
      <p>其中Q = (π,π)是反铁磁波矢。</p>
      
      <h3>热点处的散射</h3>
      <p>热点处的自能：</p>
      <div class="formula">
        Im Σ(k_{hot}, ω) = -λ ω
      </div>
      
      <p>导致线性频率依赖。</p>
      
      <h3>输运积分</h3>
      <p>电导率的计算：</p>
      <div class="formula">
        σ = e² ∫ dk v_k² τ_k δ(ε_k)
      </div>
      
      <p>热点的贡献主导输运性质。</p>
    </div>

    <div class="section">
      <h2>量子临界理论</h2>
      
      <h3>量子临界点</h3>
      <p>在量子临界点附近：</p>
      <div class="formula">
        χ(q,ω) = χ₀ / [(q-Q)²ξ² + (ω/ω_sf)^{2/z}]
      </div>
      
      <p>其中：</p>
      <ul>
        <li><strong>ξ：</strong>关联长度</li>
        <li><strong>ω_sf：</strong>自旋涨落特征频率</li>
        <li><strong>z：</strong>动力学指数</li>
      </ul>
      
      <h3>标度理论</h3>
      <p>电阻率的标度形式：</p>
      <div class="formula">
        ρ(T,δ) = ρ₀ + T f(δ/T^{1/νz})
      </div>
      
      <p>其中：</p>
      <ul>
        <li><strong>δ：</strong>调节参数</li>
        <li><strong>ν：</strong>关联长度指数</li>
        <li><strong>f(x)：</strong>标度函数</li>
      </ul>
      
      <h3>临界指数</h3>
      <p>不同量子临界点的指数：</p>
      <ul>
        <li><strong>反铁磁QCP：</strong>z = 2, ν = 1/2</li>
        <li><strong>铁磁QCP：</strong>z = 3, ν = 1</li>
        <li><strong>向列QCP：</strong>z = 2, ν = 1</li>
      </ul>
    </div>

    <div class="section">
      <h2>SYK模型和全息对偶</h2>
      
      <h3>Sachdev-Ye-Kitaev模型</h3>
      <p>SYK模型的哈密顿量：</p>
      <div class="formula">
        H = ∑_{i&lt;j&lt;k&lt;l} J_{ijkl} χᵢ χⱼ χₖ χₗ
      </div>
      
      <p>其中χᵢ是Majorana费米子。</p>
      
      <h3>自能的解</h3>
      <p>SYK模型的自能：</p>
      <div class="formula">
        Σ(iω_n) = J² ∫ dτ e^{iω_n τ} G(τ)³
      </div>
      
      <p>在低频下：</p>
      <div class="formula">
        Σ(ω) ∝ -i sgn(ω) |ω|^{1/2}
      </div>
      
      <h3>输运性质</h3>
      <p>SYK模型预测的电阻率：</p>
      <div class="formula">
        ρ(T) ∝ T
      </div>
      
      <p>与实验观测一致。</p>
    </div>

    <div class="section">
      <h2>实验技术和测量</h2>
      
      <h3>四探针法</h3>
      <p>标准的电阻率测量：</p>
      <div class="formula">
        ρ = (V/I) × (A/l)
      </div>
      
      <p>其中：</p>
      <ul>
        <li><strong>V：</strong>电压</li>
        <li><strong>I：</strong>电流</li>
        <li><strong>A：</strong>截面积</li>
        <li><strong>l：</strong>长度</li>
      </ul>
      
      <h3>范德堡方法</h3>
      <p>任意形状样品的电阻率：</p>
      <div class="formula">
        ρ = (π t / ln 2) × (R_A + R_B)/2 × f
      </div>
      
      <p>其中f是几何修正因子。</p>
      
      <h3>温度控制</h3>
      <p>精确的温度测量要求：</p>
      <ul>
        <li><strong>温度稳定性：</strong>±0.1K</li>
        <li><strong>温度梯度：</strong><0.1K/cm</li>
        <li><strong>热平衡时间：</strong>足够的等待时间</li>
      </ul>
    </div>

    <div class="section">
      <h2>材料系统中的线性电阻率</h2>
      
      <h3>铜氧化物超导体</h3>
      <p>不同掺杂水平的行为：</p>
      <ul>
        <li><strong>欠掺杂：</strong>赝能隙区域的线性行为</li>
        <li><strong>最优掺杂：</strong>最宽的线性温度范围</li>
        <li><strong>过掺杂：</strong>向费米液体行为的交叉</li>
      </ul>
      
      <h3>铁基超导体</h3>
      <p>铁砷化合物中的观测：</p>
      <ul>
        <li><strong>BaFe₂As₂：</strong>结构相变上方</li>
        <li><strong>FeSe：</strong>向列相中的线性行为</li>
        <li><strong>LiFeAs：</strong>化学计量比样品</li>
      </ul>
      
      <h3>重费米子系统</h3>
      <p>量子临界点附近：</p>
      <ul>
        <li><strong>CeCu₆₋ₓAuₓ：</strong>x ≈ 0.1附近</li>
        <li><strong>YbRh₂Si₂：</strong>磁场调节的临界点</li>
        <li><strong>CeCoIn₅：</strong>压力下的线性行为</li>
      </ul>
      
      <h3>有机导体</h3>
      <p>准二维有机导体：</p>
      <ul>
        <li><strong>κ-(BEDT-TTF)₂Cu[N(CN)₂]Br：</strong>Mott转变附近</li>
        <li><strong>(TMTSF)₂PF₆：</strong>压力下的金属相</li>
      </ul>
    </div>

    <div class="section">
      <h2>线性电阻率的普适性</h2>
      
      <h3>Planckian金属</h3>
      <p>散射率的量子极限：</p>
      <div class="formula">
        ℏ/τ ≤ k_B T
      </div>
      
      <p>这个不等式的饱和给出线性电阻率。</p>
      
      <h3>普适常数</h3>
      <p>不同材料中的相似行为：</p>
      <div class="formula">
        ρ(T) = ρ₀ + α (k_B/e²) (T/E_F)
      </div>
      
      <p>其中α是接近1的普适常数。</p>
      
      <h3>量子相干的破坏</h3>
      <p>相干长度：</p>
      <div class="formula">
        l_{coh} = v_F τ = v_F ℏ/(k_B T)
      </div>
      
      <p>当l_{coh}接近晶格常数时出现线性行为。</p>
    </div>

    <div class="section">
      <h2>与其他物理量的关联</h2>
      
      <h3>霍尔效应</h3>
      <p>霍尔角的正切：</p>
      <div class="formula">
        tan θ_H = ω_c τ_H
      </div>
      
      <p>在线性电阻率区域：</p>
      <div class="formula">
        cot θ_H ∝ T²
      </div>
      
      <h3>热电效应</h3>
      <p>塞贝克系数：</p>
      <div class="formula">
        S = -(π²k_B²T)/(3e E_F) [1 + λ ln(T₀/T)]
      </div>
      
      <p>显示对数修正。</p>
      
      <h3>热导率</h3>
      <p>电子热导率：</p>
      <div class="formula">
        κ_e = L₀ σ T [1 + δ ln(T₀/T)]
      </div>
      
      <p>其中L₀是洛伦兹数。</p>
    </div>

    <div class="section">
      <h2>理论挑战和争议</h2>
      
      <h3>微观机制的争议</h3>
      <p>不同理论的预测：</p>
      <ul>
        <li><strong>自旋涨落理论：</strong>强调磁性涨落</li>
        <li><strong>量子临界理论：</strong>临界涨落的作用</li>
        <li><strong>无序效应：</strong>杂质散射的增强</li>
        <li><strong>多体局域化：</strong>量子相干的破坏</li>
      </ul>
      
      <h3>温度范围的限制</h3>
      <p>线性行为的边界：</p>
      <ul>
        <li><strong>低温截断：</strong>超导转变或其他相变</li>
        <li><strong>高温截断：</strong>带宽效应或相干性丧失</li>
        <li><strong>中间能标：</strong>其他能量标度的竞争</li>
      </ul>
      
      <h3>维度效应</h3>
      <p>不同维度的行为：</p>
      <ul>
        <li><strong>一维：</strong>Luttinger液体行为</li>
        <li><strong>二维：</strong>对数修正</li>
        <li><strong>三维：</strong>费米液体恢复</li>
      </ul>
    </div>

    <div class="section">
      <h2>数值研究</h2>
      
      <h3>量子蒙特卡罗</h3>
      <p>QMC研究的挑战：</p>
      <ul>
        <li><strong>符号问题：</strong>费米子系统的困难</li>
        <li><strong>有限尺寸：</strong>输运性质的计算</li>
        <li><strong>解析延拓：</strong>实频轴的性质</li>
      </ul>
      
      <h3>动力学平均场理论</h3>
      <p>DMFT的应用：</p>
      <ul>
        <li><strong>Hubbard模型：</strong>强关联的处理</li>
        <li><strong>输运积分：</strong>光学电导率的计算</li>
        <li><strong>温度依赖：</strong>有限温度的性质</li>
      </ul>
      
      <h3>密度泛函理论</h3>
      <p>DFT+DMFT方法：</p>
      <ul>
        <li><strong>材料特异性：</strong>真实材料的计算</li>
        <li><strong>电子结构：</strong>能带结构的影响</li>
        <li><strong>相关效应：</strong>局域相关的处理</li>
      </ul>
    </div>

    <div class="section">
      <h2>实验技术的发展</h2>
      
      <h3>高精度测量</h3>
      <ul>
        <li><strong>低噪声电子学：</strong>nV级别的电压测量</li>
        <li><strong>温度控制：</strong>mK级别的稳定性</li>
        <li><strong>磁场环境：</strong>屏蔽和补偿</li>
      </ul>
      
      <h3>原位测量</h3>
      <ul>
        <li><strong>压力下测量：</strong>连续调节参数</li>
        <li><strong>磁场下测量：</strong>量子振荡的观测</li>
        <li><strong>光照下测量：</strong>非平衡态的研究</li>
      </ul>
      
      <h3>微观探针</h3>
      <ul>
        <li><strong>扫描探针：</strong>局域输运性质</li>
        <li><strong>聚焦离子束：</strong>微结构的制备</li>
        <li><strong>电子束光刻：</strong>精密器件的制作</li>
      </ul>
    </div>

    <div class="section">
      <h2>应用前景</h2>
      
      <h3>热电材料</h3>
      <p>线性电阻率的优势：</p>
      <ul>
        <li><strong>功率因子：</strong>S²σ的优化</li>
        <li><strong>温度稳定性：</strong>宽温度范围的性能</li>
        <li><strong>材料设计：</strong>强关联系统的利用</li>
      </ul>
      
      <h3>量子器件</h3>
      <p>量子相干的控制：</p>
      <ul>
        <li><strong>退相干时间：</strong>τ_φ ∝ 1/T</li>
        <li><strong>量子比特：</strong>相干性的保持</li>
        <li><strong>量子传感：</strong>温度敏感性的利用</li>
      </ul>
      
      <h3>新材料探索</h3>
      <p>设计原则：</p>
      <ul>
        <li><strong>强关联：</strong>U/t比值的优化</li>
        <li><strong>维度控制：</strong>准二维结构</li>
        <li><strong>掺杂调节：</strong>载流子浓度的精确控制</li>
      </ul>
    </div>

    <div class="section">
      <h2>前沿发展</h2>
      
      <h3>机器学习应用</h3>
      <ul>
        <li><strong>模式识别：</strong>线性行为的自动识别</li>
        <li><strong>参数提取：</strong>拟合算法的优化</li>
        <li><strong>材料预测：</strong>新材料性质的预测</li>
      </ul>
      
      <h3>非平衡态研究</h3>
      <ul>
        <li><strong>泵浦-探测：</strong>超快输运测量</li>
        <li><strong>驱动系统：</strong>周期驱动下的输运</li>
        <li><strong>量子淬火：</strong>参数突变的响应</li>
      </ul>
      
      <h3>拓扑材料</h3>
      <ul>
        <li><strong>Weyl半金属：</strong>线性色散的影响</li>
        <li><strong>拓扑绝缘体：</strong>表面态的输运</li>
        <li><strong>拓扑超导：</strong>边缘态的性质</li>
      </ul>
      
      <h3>量子模拟</h3>
      <ul>
        <li><strong>冷原子系统：</strong>可控的强关联模拟</li>
        <li><strong>光子系统：</strong>有效模型的实现</li>
        <li><strong>超导电路：</strong>人工量子系统</li>
      </ul>
    </div>

    <div class="section">
      <h2>总结</h2>
      <p>
        线性电阻率是强关联电子系统中
        一种重要而普遍的非费米液体现象，
        它反映了系统中量子涨落和强关联效应的重要性。
        从高温超导体到重费米子系统，
        从量子临界点到奇异金属，
        线性电阻率的观测为理解这些复杂系统
        提供了重要的实验线索。
        尽管其微观机制仍存在争议，
        但无论是自旋涨落理论、量子临界理论，
        还是Planckian散射的概念，
        都为理解这一现象提供了有价值的理论框架。
        线性电阻率不仅在基础物理研究中具有重要意义，
        也在热电材料、量子器件等应用领域
        展现出潜在的价值。
        随着实验技术的进步和理论方法的发展，
        线性电阻率的研究将继续推动
        我们对强关联电子系统和量子多体物理的理解，
        为发现新的量子物态和开发新型功能材料
        提供重要指导。
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chapter15_4_1'
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