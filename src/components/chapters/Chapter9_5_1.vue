<template>
  <div class="chapter-content">
    <div class="chapter-header">
      <h1>9.5.1 单个S=1/2自旋</h1>
      <p class="chapter-subtitle">Single S=1/2 Spin</p>
    </div>

    <div class="content-section">
      <h2>量子自旋基础理论</h2>
      <div class="concept-box">
        <h3>S=1/2自旋系统的基本性质</h3>
        <p>S=1/2自旋是最简单的量子二能级系统，具有丰富的物理内容：</p>
        <ul>
          <li>二维希尔伯特空间</li>
          <li>Pauli矩阵表示</li>
          <li>量子叠加态</li>
          <li>量子纠缠的基本单元</li>
          <li>量子信息的基本载体</li>
        </ul>
      </div>

      <div class="formula-section">
        <h3>基本数学描述</h3>
        <p>S=1/2自旋的状态空间和算符：</p>
        <div class="formula-block">
          |ψ⟩ = α|↑⟩ + β|↓⟩, |α|² + |β|² = 1
        </div>
        <div class="formula-block">
          Ŝ = (ℏ/2)σ̂, σ̂ = (σₓ, σᵧ, σᵤ)
        </div>
        <p>其中σ是Pauli矩阵：</p>
        <div class="formula-block">
          σₓ = (0 1; 1 0), σᵧ = (0 -i; i 0), σᵤ = (1 0; 0 -1)
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>Pauli矩阵和自旋代数</h2>
      <div class="pauli-algebra">
        <div class="algebra-properties">
          <h3>Pauli矩阵的性质</h3>
          <div class="properties-grid">
            <div class="property-card">
              <h4>反对易关系</h4>
              <div class="formula-block">
                {σᵢ, σⱼ} = 2δᵢⱼI
              </div>
              <p>其中I是2×2单位矩阵</p>
            </div>

            <div class="property-card">
              <h4>对易关系</h4>
              <div class="formula-block">
                [σᵢ, σⱼ] = 2iεᵢⱼₖσₖ
              </div>
              <p>其中εᵢⱼₖ是Levi-Civita符号</p>
            </div>

            <div class="property-card">
              <h4>本征值和本征态</h4>
              <div class="formula-block">
                σᵤ|↑⟩ = |↑⟩, σᵤ|↓⟩ = -|↓⟩
              </div>
              <p>本征值为±1</p>
            </div>

            <div class="property-card">
              <h4>完备性关系</h4>
              <div class="formula-block">
                I = |↑⟩⟨↑| + |↓⟩⟨↓|
              </div>
              <p>基态的完备性</p>
            </div>
          </div>
        </div>

        <div class="spin-representations">
          <h3>不同表象中的自旋</h3>
          <div class="representation-grid">
            <div class="repr-card">
              <h4>z表象</h4>
              <div class="formula-block">
                |↑⟩ = (1; 0), |↓⟩ = (0; 1)
              </div>
              <ul>
                <li>σᵤ对角化</li>
                <li>标准基底</li>
                <li>测量基准</li>
              </ul>
            </div>

            <div class="repr-card">
              <h4>x表象</h4>
              <div class="formula-block">
                |+⟩ = (|↑⟩ + |↓⟩)/√2, |-⟩ = (|↑⟩ - |↓⟩)/√2
              </div>
              <ul>
                <li>σₓ对角化</li>
                <li>叠加态基底</li>
                <li>横向测量</li>
              </ul>
            </div>

            <div class="repr-card">
              <h4>y表象</h4>
              <div class="formula-block">
                |+i⟩ = (|↑⟩ + i|↓⟩)/√2, |-i⟩ = (|↑⟩ - i|↓⟩)/√2
              </div>
              <ul>
                <li>σᵧ对角化</li>
                <li>复叠加态</li>
                <li>相位测量</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>Bloch球表示</h2>
      <div class="bloch-sphere">
        <div class="concept-box">
          <h3>Bloch球的几何图像</h3>
          <p>任意S=1/2自旋态可以用Bloch球上的点表示：</p>
          <ul>
            <li>单位球面上的点对应纯态</li>
            <li>球内部的点对应混合态</li>
            <li>北极和南极对应|↑⟩和|↓⟩</li>
            <li>赤道对应叠加态</li>
          </ul>
        </div>

        <div class="bloch-parameterization">
          <h3>Bloch球参数化</h3>
          <div class="param-grid">
            <div class="param-card">
              <h4>球坐标表示</h4>
              <div class="formula-block">
                |ψ⟩ = cos(θ/2)|↑⟩ + e^{iφ}sin(θ/2)|↓⟩
              </div>
              <p>其中θ∈[0,π], φ∈[0,2π]</p>
            </div>

            <div class="param-card">
              <h4>Bloch矢量</h4>
              <div class="formula-block">
                r⃗ = (sin θ cos φ, sin θ sin φ, cos θ)
              </div>
              <p>单位矢量指向Bloch球上的点</p>
            </div>

            <div class="param-card">
              <h4>密度矩阵表示</h4>
              <div class="formula-block">
                ρ = (1/2)(I + r⃗·σ⃗)
              </div>
              <p>纯态对应|r⃗| = 1</p>
            </div>
          </div>
        </div>

        <div class="bloch-dynamics">
          <h3>Bloch球上的动力学</h3>
          <div class="dynamics-grid">
            <div class="dynamics-card">
              <h4>自由演化</h4>
              <p>在磁场中的Larmor进动：</p>
              <div class="formula-block">
                H = -γB⃗·Ŝ = -(γℏ/2)B⃗·σ⃗
              </div>
              <ul>
                <li>绕磁场轴旋转</li>
                <li>Larmor频率ωL = γB</li>
                <li>保持Bloch矢量长度</li>
              </ul>
            </div>

            <div class="dynamics-card">
              <h4>Rabi振荡</h4>
              <p>交变磁场驱动的振荡：</p>
              <div class="formula-block">
                H = -(ℏ/2)[ωzσz + Ω(σx cos ωt + σy sin ωt)]
              </div>
              <ul>
                <li>共振条件ω = ωz</li>
                <li>Rabi频率Ω</li>
                <li>Bloch球上的章动</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>自旋在磁场中的行为</h2>
      <div class="magnetic-field-effects">
        <div class="zeeman-effect">
          <h3>Zeeman效应</h3>
          <div class="zeeman-grid">
            <div class="zeeman-card">
              <h4>线性Zeeman效应</h4>
              <p>在均匀磁场中的能级分裂：</p>
              <div class="formula-block">
                H = -μ⃗·B⃗ = -γℏSzBz
              </div>
              <div class="formula-block">
                E± = ±(γℏBz)/2
              </div>
              <ul>
                <li>能级线性分裂</li>
                <li>磁偶极矩μ = γℏS/2</li>
                <li>g因子的测量</li>
              </ul>
            </div>

            <div class="zeeman-card">
              <h4>非线性Zeeman效应</h4>
              <p>强磁场下的高阶修正：</p>
              <div class="formula-block">
                H = -γℏS⃗·B⃗ + D(Sz)² + ...
              </div>
              <ul>
                <li>二次Zeeman效应</li>
                <li>零场分裂</li>
                <li>各向异性效应</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="magnetic-resonance">
          <h3>磁共振现象</h3>
          <div class="resonance-grid">
            <div class="resonance-card">
              <h4>电子自旋共振(ESR)</h4>
              <div class="formula-block">
                ℏω = gμBB
              </div>
              <ul>
                <li>微波频率</li>
                <li>g因子测量</li>
                <li>自旋-轨道耦合</li>
                <li>超精细结构</li>
              </ul>
            </div>

            <div class="resonance-card">
              <h4>核磁共振(NMR)</h4>
              <div class="formula-block">
                ℏω = γNℏB
              </div>
              <ul>
                <li>射频频率</li>
                <li>化学位移</li>
                <li>自旋-自旋耦合</li>
                <li>弛豫过程</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>量子测量和不确定性原理</h2>
      <div class="quantum-measurement">
        <div class="measurement-theory">
          <h3>自旋测量的量子理论</h3>
          <div class="measurement-grid">
            <div class="measurement-card">
              <h4>投影测量</h4>
              <p>沿任意方向n̂的自旋测量：</p>
              <div class="formula-block">
                P± = (I ± n̂·σ⃗)/2
              </div>
              <ul>
                <li>测量算符</li>
                <li>概率计算</li>
                <li>态坍缩</li>
                <li>Born规则</li>
              </ul>
            </div>

            <div class="measurement-card">
              <h4>连续测量</h4>
              <p>弱测量和量子非破坏测量：</p>
              <div class="formula-block">
                ⟨Ŝz⟩weak = Re⟨ψf|ψi⟩⟨ψf|Ŝz|ψi⟩/⟨ψf|ψi⟩
              </div>
              <ul>
                <li>弱值理论</li>
                <li>量子轨迹</li>
                <li>测量反作用</li>
                <li>信息获取</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="uncertainty-relations">
          <h3>自旋不确定性关系</h3>
          <div class="uncertainty-grid">
            <div class="uncertainty-card">
              <h4>Heisenberg不确定性</h4>
              <div class="formula-block">
                ΔSxΔSy ≥ (1/2)|⟨[Sx,Sy]⟩| = (ℏ/2)|⟨Sz⟩|
              </div>
              <ul>
                <li>非对易算符</li>
                <li>测量精度限制</li>
                <li>量子涨落</li>
              </ul>
            </div>

            <div class="uncertainty-card">
              <h4>自旋压缩态</h4>
              <div class="formula-block">
                ξ² = N(ΔS⊥)²min/|⟨S⟩| < 1
              </div>
              <ul>
                <li>减小量子噪声</li>
                <li>精密测量</li>
                <li>量子增强</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>自旋动力学和弛豫</h2>
      <div class="spin-dynamics">
        <div class="coherent-dynamics">
          <h3>相干动力学</h3>
          <div class="coherent-grid">
            <div class="coherent-card">
              <h4>Schrödinger演化</h4>
              <p>封闭系统中的幺正演化：</p>
              <div class="formula-block">
                |ψ(t)⟩ = e^{-iHt/ℏ}|ψ(0)⟩
              </div>
              <ul>
                <li>幺正算符</li>
                <li>概率守恒</li>
                <li>可逆演化</li>
                <li>相干叠加</li>
              </ul>
            </div>

            <div class="coherent-card">
              <h4>Bloch方程</h4>
              <p>Bloch矢量的运动方程：</p>
              <div class="formula-block">
                dr⃗/dt = γr⃗ × B⃗
              </div>
              <ul>
                <li>经典陀螺运动</li>
                <li>进动频率</li>
                <li>守恒量</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="decoherence-relaxation">
          <h3>退相干和弛豫</h3>
          <div class="relaxation-grid">
            <div class="relaxation-card">
              <h4>T₁弛豫(纵向)</h4>
              <p>能量弛豫过程：</p>
              <div class="formula-block">
                d⟨Sz⟩/dt = -(⟨Sz⟩ - ⟨Sz⟩eq)/T₁
              </div>
              <ul>
                <li>自发辐射</li>
                <li>声子散射</li>
                <li>热平衡</li>
                <li>能量耗散</li>
              </ul>
            </div>

            <div class="relaxation-card">
              <h4>T₂弛豫(横向)</h4>
              <p>相位弛豫过程：</p>
              <div class="formula-block">
                d⟨S±⟩/dt = -⟨S±⟩/T₂
              </div>
              <ul>
                <li>相位扩散</li>
                <li>非均匀展宽</li>
                <li>相干性丧失</li>
                <li>纯退相干</li>
              </ul>
            </div>

            <div class="relaxation-card">
              <h4>T₂*效应</h4>
              <p>非均匀展宽的影响：</p>
              <div class="formula-block">
                1/T₂* = 1/T₂ + 1/T₂'
              </div>
              <ul>
                <li>静态无序</li>
                <li>磁场不均匀</li>
                <li>回波技术</li>
                <li>动态去耦</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>实验实现和应用</h2>
      <div class="experimental-section">
        <div class="physical-systems">
          <h3>物理实现系统</h3>
          <div class="systems-grid">
            <div class="system-card">
              <h4>原子自旋</h4>
              <ul>
                <li>碱金属原子</li>
                <li>稀土离子</li>
                <li>过渡金属离子</li>
                <li>核自旋</li>
              </ul>
              <p>特点：长相干时间、精确控制</p>
            </div>

            <div class="system-card">
              <h4>固体中的自旋</h4>
              <ul>
                <li>NV色心</li>
                <li>量子点</li>
                <li>硅中的磷</li>
                <li>SiC缺陷</li>
              </ul>
              <p>特点：室温操作、集成化</p>
            </div>

            <div class="system-card">
              <h4>人工量子系统</h4>
              <ul>
                <li>超导量子比特</li>
                <li>离子阱</li>
                <li>光子偏振</li>
                <li>冷原子</li>
              </ul>
              <p>特点：高保真度、可扩展</p>
            </div>
          </div>
        </div>

        <div class="applications">
          <h3>应用领域</h3>
          <div class="application-grid">
            <div class="app-card">
              <h4>量子计算</h4>
              <ul>
                <li>量子比特</li>
                <li>量子门操作</li>
                <li>量子算法</li>
                <li>量子纠错</li>
              </ul>
            </div>

            <div class="app-card">
              <h4>量子传感</h4>
              <ul>
                <li>磁场测量</li>
                <li>陀螺仪</li>
                <li>原子钟</li>
                <li>重力仪</li>
              </ul>
            </div>

            <div class="app-card">
              <h4>量子通信</h4>
              <ul>
                <li>量子密钥分发</li>
                <li>量子隐形传态</li>
                <li>量子中继</li>
                <li>量子网络</li>
              </ul>
            </div>

            <div class="app-card">
              <h4>基础物理</h4>
              <ul>
                <li>Bell不等式检验</li>
                <li>量子基础理论</li>
                <li>相对论效应</li>
                <li>暗物质探测</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>量子信息观点</h2>
      <div class="quantum-information">
        <div class="qubit-operations">
          <h3>量子比特操作</h3>
          <div class="operations-grid">
            <div class="operation-card">
              <h4>单比特门</h4>
              <div class="formula-block">
                X = σx, Y = σy, Z = σz, H = (X + Z)/√2
              </div>
              <ul>
                <li>Pauli门</li>
                <li>Hadamard门</li>
                <li>相位门</li>
                <li>旋转门</li>
              </ul>
            </div>

            <div class="operation-card">
              <h4>量子态制备</h4>
              <div class="formula-block">
                |+⟩ = H|0⟩, |i⟩ = SH|0⟩
              </div>
              <ul>
                <li>基态制备</li>
                <li>叠加态制备</li>
                <li>任意态制备</li>
                <li>纯化过程</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="quantum-protocols">
          <h3>量子协议</h3>
          <div class="protocol-grid">
            <div class="protocol-card">
              <h4>量子隐形传态</h4>
              <ul>
                <li>Bell态测量</li>
                <li>经典通信</li>
                <li>幺正修正</li>
                <li>保真度分析</li>
              </ul>
            </div>

            <div class="protocol-card">
              <h4>量子密钥分发</h4>
              <ul>
                <li>BB84协议</li>
                <li>窃听检测</li>
                <li>隐私放大</li>
                <li>安全性证明</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="summary-section">
      <h2>本节总结</h2>
      <div class="summary-grid">
        <div class="summary-item">
          <h3>基础理论</h3>
          <ul>
            <li>Pauli矩阵代数</li>
            <li>Bloch球表示</li>
            <li>量子测量理论</li>
            <li>不确定性原理</li>
          </ul>
        </div>

        <div class="summary-item">
          <h3>物理现象</h3>
          <ul>
            <li>Zeeman效应</li>
            <li>磁共振</li>
            <li>Rabi振荡</li>
            <li>弛豫过程</li>
          </ul>
        </div>

        <div class="summary-item">
          <h3>实验技术</h3>
          <ul>
            <li>ESR/NMR</li>
            <li>光学操控</li>
            <li>微波技术</li>
            <li>量子控制</li>
          </ul>
        </div>

        <div class="summary-item">
          <h3>应用前景</h3>
          <ul>
            <li>量子计算</li>
            <li>量子传感</li>
            <li>量子通信</li>
            <li>基础研究</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
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

.chapter-header {
  text-align: center;
  margin-bottom: 40px;
  padding: 30px 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 15px;
}

.chapter-header h1 {
  font-size: 2.5em;
  margin-bottom: 10px;
  font-weight: 700;
}

.chapter-subtitle {
  font-size: 1.2em;
  opacity: 0.9;
  font-style: italic;
}

.content-section {
  margin-bottom: 40px;
  background: #f8f9fa;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.content-section h2 {
  color: #2c3e50;
  border-bottom: 3px solid #3498db;
  padding-bottom: 10px;
  margin-bottom: 25px;
  font-size: 1.8em;
}

.concept-box {
  background: #e8f4fd;
  border-left: 5px solid #3498db;
  padding: 20px;
  margin: 20px 0;
  border-radius: 5px;
}

.concept-box h3 {
  color: #2980b9;
  margin-bottom: 15px;
}

.concept-box ul {
  padding-left: 20px;
}

.concept-box li {
  margin: 8px 0;
}

.formula-section {
  margin: 25px 0;
  padding: 20px;
  background: white;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
}

.formula-section h3 {
  color: #8e44ad;
  margin-bottom: 15px;
  font-size: 1.3em;
}

.formula-block {
  background: #f8f9fa;
  border: 1px solid #dee2e6;
  border-radius: 5px;
  padding: 15px;
  margin: 15px 0;
  text-align: center;
  font-size: 1.1em;
  overflow-x: auto;
  font-family: 'Times New Roman', serif;
}

.properties-grid, .representation-grid, .param-grid, .dynamics-grid, .zeeman-grid, .resonance-grid, .measurement-grid, .uncertainty-grid, .coherent-grid, .relaxation-grid, .systems-grid, .application-grid, .operations-grid, .protocol-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin: 25px 0;
}

.property-card, .repr-card, .param-card, .dynamics-card, .zeeman-card, .resonance-card, .measurement-card, .uncertainty-card, .coherent-card, .relaxation-card, .system-card, .app-card, .operation-card, .protocol-card {
  background: white;
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  border-top: 4px solid #e74c3c;
  transition: transform 0.3s ease;
}

.property-card:hover, .repr-card:hover, .param-card:hover, .dynamics-card:hover, .zeeman-card:hover, .resonance-card:hover, .measurement-card:hover, .uncertainty-card:hover, .coherent-card:hover, .relaxation-card:hover, .system-card:hover, .app-card:hover, .operation-card:hover, .protocol-card:hover {
  transform: translateY(-5px);
}

.property-card h4, .repr-card h4, .param-card h4, .dynamics-card h4, .zeeman-card h4, .resonance-card h4, .measurement-card h4, .uncertainty-card h4, .coherent-card h4, .relaxation-card h4, .system-card h4, .app-card h4, .operation-card h4, .protocol-card h4 {
  color: #e74c3c;
  margin-bottom: 15px;
  font-size: 1.2em;
}

.summary-section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 40px;
  border-radius: 15px;
  margin-top: 40px;
}

.summary-section h2 {
  text-align: center;
  margin-bottom: 30px;
  font-size: 2em;
  border-bottom: 2px solid rgba(255,255,255,0.3);
  padding-bottom: 15px;
}

.summary-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 25px;
}

.summary-item {
  background: rgba(255,255,255,0.1);
  padding: 20px;
  border-radius: 10px;
  backdrop-filter: blur(10px);
}

.summary-item h3 {
  margin-bottom: 15px;
  font-size: 1.3em;
}

.summary-item ul {
  list-style: none;
  padding: 0;
}

.summary-item li {
  padding: 5px 0;
  padding-left: 20px;
  position: relative;
}

.summary-item li::before {
  content: "→";
  position: absolute;
  left: 0;
  color: #ffeaa7;
  font-weight: bold;
}

@media (max-width: 768px) {
  .chapter-content {
    padding: 15px;
  }
  
  .chapter-header h1 {
    font-size: 2em;
  }
  
  .properties-grid, .representation-grid, .param-grid, .dynamics-grid, .zeeman-grid, .resonance-grid, .measurement-grid, .uncertainty-grid, .coherent-grid, .relaxation-grid, .systems-grid, .application-grid, .operations-grid, .protocol-grid {
    grid-template-columns: 1fr;
  }
}
</style>