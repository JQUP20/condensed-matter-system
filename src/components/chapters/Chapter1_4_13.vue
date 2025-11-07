<template>
  <div class="chapter-content">
    <h2>1.4.13 Coulomb电子气 (Coulomb Electron Gas)</h2>
    
    <div class="section">
      <h3>模型概述</h3>
      <p>
        Coulomb电子气模型是凝聚态物理中最基础的多体系统模型之一，描述了在均匀正电荷背景中相互作用的电子系统。
        这个模型为理解金属中的电子行为提供了重要的理论基础，也是现代多体理论发展的起点。
      </p>
      <p>
        该模型假设电子在一个均匀的正电荷背景（jellium模型）中运动，忽略了离子的具体结构，
        从而将问题简化为纯粹的电子-电子相互作用问题。这种简化使得我们能够专注于研究Coulomb相互作用的多体效应。
      </p>
    </div>

    <div class="section">
      <h3>哈密顿量与基本理论</h3>
      <p>Coulomb电子气的哈密顿量可以写为：</p>
      <KatexElement 
        formula="H = \sum_{i=1}^{N} \frac{p_i^2}{2m} + \frac{1}{2}\sum_{i \neq j} \frac{e^2}{4\pi\epsilon_0 |\mathbf{r}_i - \mathbf{r}_j|}"
        display-mode
      />
      <p>其中第一项是动能项，第二项是电子间的Coulomb相互作用。</p>
      
      <h4>二次量子化表示</h4>
      <p>在二次量子化形式下，哈密顿量可以写为：</p>
      <KatexElement 
        formula="H = \sum_{\mathbf{k},\sigma} \epsilon_{\mathbf{k}} c_{\mathbf{k}\sigma}^\dagger c_{\mathbf{k}\sigma} + \frac{1}{2V}\sum_{\mathbf{k},\mathbf{k}',\mathbf{q}} V_{\mathbf{q}} c_{\mathbf{k}+\mathbf{q}\sigma}^\dagger c_{\mathbf{k}'-\mathbf{q}\sigma'}^\dagger c_{\mathbf{k}'\sigma'} c_{\mathbf{k}\sigma}"
        display-mode
      />
      <p>其中 <KatexElement formula="V_{\mathbf{q}} = \frac{4\pi e^2}{\epsilon_0 q^2}" /> 是Coulomb相互作用的Fourier变换。</p>
    </div>

    <div class="section">
      <h3>重要参数与无量纲化</h3>
      <div class="parameter-list">
        <div class="parameter-item">
          <h4>Wigner-Seitz半径 (rs)</h4>
          <KatexElement formula="r_s = \left(\frac{3}{4\pi n}\right)^{1/3} \frac{1}{a_B}" />
          <p>其中 n 是电子密度，<KatexElement formula="a_B = \frac{\hbar^2}{me^2}" /> 是玻尔半径。rs 是系统的关键参数，决定了相互作用的强度。</p>
          <ul>
            <li><KatexElement formula="r_s \ll 1" />: 高密度极限，动能占主导</li>
            <li><KatexElement formula="r_s \gg 1" />: 低密度极限，相互作用占主导</li>
            <li><KatexElement formula="r_s \approx 37" />: Wigner晶体化临界点</li>
          </ul>
        </div>
        
        <div class="parameter-item">
          <h4>等离子体频率</h4>
          <KatexElement formula="\omega_p = \sqrt{\frac{ne^2}{m\epsilon_0}}" />
          <p>描述了电子密度涨落的特征频率，是系统的重要能量标度。</p>
        </div>

        <div class="parameter-item">
          <h4>Fermi能量与Fermi波矢</h4>
          <KatexElement formula="E_F = \frac{\hbar^2 k_F^2}{2m}, \quad k_F = (3\pi^2 n)^{1/3}" />
          <p>定义了零温下电子占据态的边界。</p>
        </div>

        <div class="parameter-item">
          <h4>耦合常数</h4>
          <KatexElement formula="\Gamma = \frac{e^2}{4\pi\epsilon_0 k_B T r_s a_B}" />
          <p>描述了Coulomb相互作用与热能的比值，决定了系统的量子/经典性质。</p>
        </div>
      </div>
    </div>

    <div class="section">
      <h3>理论方法与近似</h3>
      <div class="method-grid">
        <div class="method-card">
          <h4>Hartree-Fock近似</h4>
          <p>考虑电子交换相互作用的平均场理论：</p>
          <KatexElement formula="E_{HF} = E_{kin} + E_{Hartree} + E_{exchange}" />
          <p>交换能为：<KatexElement formula="E_x = -\frac{3}{4}\frac{e^2 k_F}{\pi\epsilon_0}" /></p>
          <p>给出了电子气的基态能量和准粒子激发谱。</p>
        </div>
        
        <div class="method-card">
          <h4>随机相位近似 (RPA)</h4>
          <p>处理电子密度涨落的重要方法：</p>
          <KatexElement formula="\chi_{RPA}(\mathbf{q},\omega) = \frac{\chi_0(\mathbf{q},\omega)}{1 - V_q \chi_0(\mathbf{q},\omega)}" />
          <p>其中 <KatexElement formula="\chi_0" /> 是Lindhard函数。能够描述等离子体激发和屏蔽效应。</p>
        </div>
        
        <div class="method-card">
          <h4>量子蒙特卡罗 (QMC)</h4>
          <p>数值精确求解电子气问题的重要工具：</p>
          <ul>
            <li><strong>变分蒙特卡罗 (VMC):</strong> 使用试探波函数</li>
            <li><strong>扩散蒙特卡罗 (DMC):</strong> 投影到基态</li>
            <li><strong>路径积分蒙特卡罗 (PIMC):</strong> 有限温度计算</li>
          </ul>
          <p>提供了基准结果，特别是在中等密度区域。</p>
        </div>

        <div class="method-card">
          <h4>密度泛函理论 (DFT)</h4>
          <p>基于电子密度的第一性原理方法：</p>
          <KatexElement formula="E[n] = T[n] + V_{ext}[n] + E_{Hartree}[n] + E_{xc}[n]" />
          <p>其中 <KatexElement formula="E_{xc}[n]" /> 是交换关联泛函，通常从电子气结果中提取。</p>
        </div>

        <div class="method-card">
          <h4>多体微扰理论</h4>
          <p>系统性处理电子关联效应：</p>
          <ul>
            <li><strong>GW近似:</strong> 准粒子自能计算</li>
            <li><strong>Bethe-Salpeter方程:</strong> 激子效应</li>
            <li><strong>顶点修正:</strong> 高阶关联效应</li>
          </ul>
        </div>

        <div class="method-card">
          <h4>重整化群方法</h4>
          <p>处理不同能量标度的系统方法：</p>
          <p>特别适用于研究Fermi液体不稳定性和相变。</p>
        </div>
      </div>
    </div>

    <div class="section">
      <h3>物理现象与相图</h3>
      <div class="phenomena-section">
        <h4>基态性质</h4>
        <ul class="phenomena-list">
          <li><strong>Fermi液体行为：</strong>低温下电子气表现出Fermi液体的性质，准粒子寿命 <KatexElement formula="\tau \propto T^{-2}" /></li>
          <li><strong>Wigner晶体：</strong>极低密度下(<KatexElement formula="r_s > 37" />)电子形成晶体结构</li>
          <li><strong>液-固相变：</strong>一级相变，伴随着对称性破缺</li>
        </ul>

        <h4>激发态与集体模式</h4>
        <ul class="phenomena-list">
          <li><strong>等离子体振荡：</strong>集体密度涨落模式，色散关系 <KatexElement formula="\omega(\mathbf{q}) = \omega_p + \frac{3}{5}\frac{v_F^2 q^2}{\omega_p}" /></li>
          <li><strong>零声模：</strong>长波长密度涨落，<KatexElement formula="\omega = s q" />，其中 s 是零声速度</li>
          <li><strong>单粒子激发：</strong>准粒子和准空穴激发</li>
        </ul>

        <h4>屏蔽效应</h4>
        <ul class="phenomena-list">
          <li><strong>Thomas-Fermi屏蔽：</strong>静态屏蔽，屏蔽长度 <KatexElement formula="\lambda_{TF} = \sqrt{\frac{\epsilon_0}{e^2 N(0)}}" /></li>
          <li><strong>Debye屏蔽：</strong>动态屏蔽效应</li>
          <li><strong>Friedel振荡：</strong>长程振荡屏蔽，<KatexElement formula="\propto \frac{\cos(2k_F r)}{r^3}" /></li>
        </ul>

        <h4>输运性质</h4>
        <ul class="phenomena-list">
          <li><strong>电导率：</strong>Drude模型修正，<KatexElement formula="\sigma = \frac{ne^2\tau}{m^*}" /></li>
          <li><strong>热导率：</strong>Wiedemann-Franz定律</li>
          <li><strong>磁化率：</strong>Pauli顺磁磁化率</li>
        </ul>
      </div>
    </div>

    <div class="section">
      <h3>数值计算方法</h3>
      <div class="numerical-methods">
        <h4>精确对角化</h4>
        <p>小系统的精确求解，用于验证近似方法和研究有限尺寸效应。</p>

        <h4>量子蒙特卡罗细节</h4>
        <div class="qmc-details">
          <p><strong>VMC试探波函数：</strong></p>
          <KatexElement formula="\Psi_T = \det[\phi_i(\mathbf{r}_j)] \times \prod_{i<j} f(r_{ij})" />
          <p>其中 <KatexElement formula="f(r_{ij})" /> 是Jastrow因子，描述电子关联。</p>
          
          <p><strong>DMC投影算符：</strong></p>
          <KatexElement formula="|\Psi_0\rangle = \lim_{\tau \to \infty} e^{-\tau(H-E_T)}|\Psi_T\rangle" />
        </div>

        <h4>密度矩阵重整化群 (DMRG)</h4>
        <p>一维系统的高精度数值方法，可以处理较大系统尺寸。</p>
      </div>
    </div>

    <div class="section">
      <h3>实验实现与材料</h3>
      <div class="experimental-section">
        <h4>二维电子气系统</h4>
        <ul>
          <li><strong>GaAs/AlGaAs异质结：</strong>高迁移率二维电子气</li>
          <li><strong>硅MOSFET：</strong>可调载流子密度</li>
          <li><strong>石墨烯：</strong>相对论性电子气</li>
          <li><strong>过渡金属硫化物：</strong>谷电子学应用</li>
        </ul>

        <h4>三维金属系统</h4>
        <ul>
          <li><strong>碱金属：</strong>接近自由电子气模型</li>
          <li><strong>贵金属：</strong>d电子的影响</li>
          <li><strong>拓扑金属：</strong>Weyl/Dirac电子气</li>
        </ul>

        <h4>人工量子系统</h4>
        <ul>
          <li><strong>冷原子气体：</strong>可调相互作用强度</li>
          <li><strong>量子点阵列：</strong>人工晶格中的电子气</li>
          <li><strong>光子晶体：</strong>光子类比系统</li>
        </ul>
      </div>
    </div>

    <div class="section">
      <h3>应用领域与前沿发展</h3>
      <div class="application-grid">
        <div class="app-card">
          <h4>金属物理</h4>
          <p>理解金属中传导电子的基本性质和输运行为</p>
          <ul>
            <li>电阻率的温度依赖性</li>
            <li>Hall效应和磁阻</li>
            <li>超导配对机制</li>
          </ul>
        </div>
        
        <div class="app-card">
          <h4>半导体物理</h4>
          <p>二维电子气系统，如量子阱和异质结构</p>
          <ul>
            <li>量子Hall效应</li>
            <li>分数量子Hall态</li>
            <li>Wigner晶体观测</li>
          </ul>
        </div>
        
        <div class="app-card">
          <h4>等离子体物理</h4>
          <p>高温等离子体中的集体激发和输运性质</p>
          <ul>
            <li>聚变等离子体</li>
            <li>天体物理等离子体</li>
            <li>激光等离子体相互作用</li>
          </ul>
        </div>

        <div class="app-card">
          <h4>量子材料</h4>
          <p>新型量子材料中的电子气行为</p>
          <ul>
            <li>拓扑绝缘体表面态</li>
            <li>Weyl半金属</li>
            <li>魔角石墨烯</li>
          </ul>
        </div>

        <div class="app-card">
          <h4>量子计算</h4>
          <p>基于电子气的量子信息处理</p>
          <ul>
            <li>量子点量子比特</li>
            <li>拓扑量子计算</li>
            <li>量子模拟</li>
          </ul>
        </div>

        <div class="app-card">
          <h4>能源应用</h4>
          <p>电子气理论在能源技术中的应用</p>
          <ul>
            <li>热电材料设计</li>
            <li>太阳能电池优化</li>
            <li>电池材料开发</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="section">
      <h3>理论发展历史</h3>
      <div class="history-timeline">
        <div class="timeline-item">
          <h4>1928年 - Sommerfeld理论</h4>
          <p>自由电子气模型，解释金属的电子比热</p>
        </div>
        <div class="timeline-item">
          <h4>1934年 - Wigner</h4>
          <p>预言低密度电子晶体化</p>
        </div>
        <div class="timeline-item">
          <h4>1957年 - Landau</h4>
          <p>Fermi液体理论建立</p>
        </div>
        <div class="timeline-item">
          <h4>1965年 - Hohenberg-Kohn</h4>
          <p>密度泛函理论奠基</p>
        </div>
        <div class="timeline-item">
          <h4>1980年代 - QMC发展</h4>
          <p>量子蒙特卡罗方法成熟</p>
        </div>
        <div class="timeline-item">
          <h4>2000年代至今</h4>
          <p>拓扑电子态、强关联效应研究</p>
        </div>
      </div>
    </div>

    <div class="section">
      <h3>相关概念与扩展</h3>
      <div class="concept-grid">
        <div class="concept-card">
          <h4>基础概念</h4>
          <div class="concept-tags">
            <span class="tag">Fermi面</span>
            <span class="tag">交换能</span>
            <span class="tag">关联能</span>
            <span class="tag">介电函数</span>
            <span class="tag">Lindhard函数</span>
          </div>
        </div>
        
        <div class="concept-card">
          <h4>高级概念</h4>
          <div class="concept-tags">
            <span class="tag">Wigner晶体</span>
            <span class="tag">等离子体振荡</span>
            <span class="tag">Friedel振荡</span>
            <span class="tag">准粒子</span>
            <span class="tag">Landau参数</span>
          </div>
        </div>

        <div class="concept-card">
          <h4>现代发展</h4>
          <div class="concept-tags">
            <span class="tag">拓扑电子态</span>
            <span class="tag">量子临界点</span>
            <span class="tag">非Fermi液体</span>
            <span class="tag">量子自旋液体</span>
            <span class="tag">机器学习方法</span>
          </div>
        </div>
      </div>
    </div>

    <div class="section">
      <h3>开放问题与未来方向</h3>
      <div class="future-directions">
        <ul>
          <li><strong>强关联区域：</strong>rs >> 1 区域的精确理论描述</li>
          <li><strong>有限温度性质：</strong>温度效应的系统理论</li>
          <li><strong>非平衡态：</strong>驱动系统中的电子气行为</li>
          <li><strong>拓扑相：</strong>拓扑电子气的分类和性质</li>
          <li><strong>机器学习：</strong>AI辅助的多体问题求解</li>
          <li><strong>量子模拟：</strong>人工量子系统中的电子气实现</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import KatexElement from '@/components/KatexElement.vue'

export default {
  name: 'Chapter1_4_13',
  components: {
    KatexElement
  }
}
</script>

<style scoped>
.chapter-content {
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
  line-height: 1.6;
}

.section {
  margin-bottom: 30px;
  padding: 20px;
  background: #f8f9fa;
  border-radius: 8px;
  border-left: 4px solid #007bff;
}

.section h3 {
  color: #2c3e50;
  margin-bottom: 15px;
  font-size: 1.3em;
}

.parameter-list {
  display: grid;
  gap: 20px;
}

.parameter-item {
  background: white;
  padding: 15px;
  border-radius: 6px;
  border: 1px solid #e9ecef;
}

.parameter-item h4 {
  color: #495057;
  margin-bottom: 10px;
}

.method-grid, .application-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  margin-top: 15px;
}

.method-card, .app-card {
  background: white;
  padding: 20px;
  border-radius: 8px;
  border: 1px solid #dee2e6;
  transition: transform 0.2s, box-shadow 0.2s;
}

.method-card:hover, .app-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.method-card h4, .app-card h4 {
  color: #007bff;
  margin-bottom: 10px;
}

.phenomena-list {
  background: white;
  padding: 20px;
  border-radius: 6px;
  border: 1px solid #e9ecef;
}

.phenomena-list li {
  margin-bottom: 10px;
  padding-left: 10px;
}

.concept-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 15px;
}

.tag {
  background: #007bff;
  color: white;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.9em;
  font-weight: 500;
}

h2 {
  color: #2c3e50;
  border-bottom: 3px solid #007bff;
  padding-bottom: 10px;
  margin-bottom: 30px;
}
</style>