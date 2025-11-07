<template>
  <div class="chern-simons-page">
    <div class="page-header">
      <h1>1.4.30 Chern-Simons项 (Chern-Simons Term)</h1>
      <p class="subtitle">拓扑场论、分数量子霍尔效应与任意子统计</p>
    </div>

    <div class="content-container">
      <!-- 概述与历史背景 -->
      <section class="section">
        <h2>概述与历史背景</h2>
        <div class="content-grid">
          <div class="theory-card">
            <h3>基本概念</h3>
            <p>Chern-Simons项是一个拓扑项，它在三维时空中描述规范场的拓扑性质。该项在分数量子霍尔效应、任意子物理和拓扑量子计算中起着核心作用。</p>
            <div class="formula-box">
              <p><strong>Chern-Simons作用量：</strong></p>
              <p>S<sub>CS</sub> = (k/4π) ∫ d³x ε<sup>μνρ</sup> A<sub>μ</sub> ∂<sub>ν</sub> A<sub>ρ</sub></p>
              <p><strong>Abel形式：</strong></p>
              <p>L<sub>CS</sub> = (k/4π) ε<sup>μνρ</sup> A<sub>μ</sub> ∂<sub>ν</sub> A<sub>ρ</sub></p>
            </div>
          </div>
          <div class="theory-card">
            <h3>历史发展</h3>
            <ul>
              <li><strong>1974年：</strong>Chern和Simons引入拓扑不变量</li>
              <li><strong>1982年：</strong>Laughlin提出分数量子霍尔态波函数</li>
              <li><strong>1989年：</strong>Witten建立Chern-Simons理论与纽结不变量联系</li>
              <li><strong>1991年：</strong>Zhang-Hansson-Kivelson建立复合费米子理论</li>
              <li><strong>2000年代：</strong>拓扑量子计算的发展</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Chern-Simons理论基础 -->
      <section class="section">
        <h2>Chern-Simons理论基础</h2>
        <div class="content-grid">
          <div class="theory-card">
            <h3>拓扑性质</h3>
            <p>Chern-Simons项具有重要的拓扑性质：</p>
            <div class="formula-box">
              <p><strong>规范变换：</strong></p>
              <p>A<sub>μ</sub> → A<sub>μ</sub> + ∂<sub>μ</sub>λ</p>
              <p><strong>作用量变化：</strong></p>
              <p>δS<sub>CS</sub> = (k/4π) ∫ d³x ε<sup>μνρ</sup> ∂<sub>μ</sub>λ ∂<sub>ν</sub> A<sub>ρ</sub></p>
              <p><strong>拓扑不变性：</strong></p>
              <p>exp(iS<sub>CS</sub>) 在大规范变换下不变</p>
            </div>
          </div>
          <div class="theory-card">
            <h3>非Abel Chern-Simons理论</h3>
            <p>SU(N)规范群的Chern-Simons理论：</p>
            <div class="formula-box">
              <p><strong>非Abel作用量：</strong></p>
              <p>S<sub>CS</sub> = (k/4π) ∫ Tr[A ∧ dA + (2/3)A ∧ A ∧ A]</p>
              <p><strong>Wilson环：</strong></p>
              <p>W<sub>R</sub>(C) = Tr<sub>R</sub>[P exp(i∮<sub>C</sub> A)]</p>
            </div>
          </div>
        </div>
      </section>

      <!-- 分数量子霍尔效应 -->
      <section class="section">
        <h2>分数量子霍尔效应</h2>
        <div class="content-grid">
          <div class="theory-card">
            <h3>Laughlin波函数</h3>
            <p>分数量子霍尔态的精确基态：</p>
            <div class="formula-box">
              <p><strong>Laughlin波函数：</strong></p>
              <p>Ψ<sub>m</sub> = ∏<sub>i&lt;j</sub> (z<sub>i</sub> - z<sub>j</sub>)<sup>m</sup> e<sup>-¼∑|z<sub>i</sub>|²</sup></p>
              <p><strong>填充因子：</strong></p>
              <p>ν = 1/m (m为奇数)</p>
              <p><strong>能隙：</strong></p>
              <p>Δ ~ e²/(4πεl<sub>B</sub>)</p>
            </div>
          </div>
          <div class="theory-card">
            <h3>Chern-Simons有效理论</h3>
            <p>低能有效理论描述：</p>
            <div class="formula-box">
              <p><strong>有效拉格朗日量：</strong></p>
              <p>L = (1/4π) ε<sup>μνρ</sup> a<sub>μ</sub> ∂<sub>ν</sub> a<sub>ρ</sub> - (1/2π) ε<sup>μνρ</sup> A<sub>μ</sub> ∂<sub>ν</sub> a<sub>ρ</sub></p>
              <p><strong>电流：</strong></p>
              <p>j<sup>μ</sup> = (1/2π) ε<sup>μνρ</sup> ∂<sub>ν</sub> a<sub>ρ</sub></p>
            </div>
          </div>
        </div>
      </section>

      <!-- 复合费米子理论 -->
      <section class="section">
        <h2>复合费米子理论</h2>
        <div class="content-grid">
          <div class="theory-card">
            <h3>复合费米子构造</h3>
            <p>电子与磁通量子的复合：</p>
            <div class="formula-box">
              <p><strong>复合费米子：</strong></p>
              <p>电子 + 2p个磁通量子</p>
              <p><strong>变换：</strong></p>
              <p>ψ → ψ e<sup>i2pφ</sup></p>
              <p><strong>有效磁场：</strong></p>
              <p>B<sub>eff</sub> = B - 2pρφ<sub>0</sub></p>
            </div>
          </div>
          <div class="theory-card">
            <h3>分层结构</h3>
            <p>分数量子霍尔态的分层描述：</p>
            <ul>
              <li><strong>主序列：</strong>ν = 1/(2p+1)</li>
              <li><strong>次级序列：</strong>ν = n/(2pn+1)</li>
              <li><strong>分层波函数：</strong>Jain态</li>
              <li><strong>粒子-空穴对称性</strong></li>
            </ul>
          </div>
        </div>
      </section>

      <!-- 任意子统计 -->
      <section class="section">
        <h2>任意子统计</h2>
        <div class="content-grid">
          <div class="theory-card">
            <h3>Abel任意子</h3>
            <p>二维系统中的分数统计：</p>
            <div class="formula-box">
              <p><strong>交换相位：</strong></p>
              <p>ψ(r₁, r₂) = e<sup>iθ</sup> ψ(r₂, r₁)</p>
              <p><strong>统计参数：</strong></p>
              <p>θ = πα (α为分数)</p>
              <p><strong>Chern-Simons描述：</strong></p>
              <p>α = 1/(2m) (Laughlin态)</p>
            </div>
          </div>
          <div class="theory-card">
            <h3>非Abel任意子</h3>
            <p>更复杂的交换统计：</p>
            <ul>
              <li><strong>Fibonacci任意子：</strong>黄金比例融合规则</li>
              <li><strong>Ising任意子：</strong>Majorana费米子</li>
              <li><strong>SU(2)₂任意子：</strong>自旋-1/2表示</li>
              <li><strong>编织群表示</strong></li>
            </ul>
            <div class="formula-box">
              <p><strong>融合规则：</strong></p>
              <p>a × b = ∑<sub>c</sub> N<sub>ab</sub><sup>c</sup> c</p>
            </div>
          </div>
        </div>
      </section>

      <!-- 拓扑量子计算 -->
      <section class="section">
        <h2>拓扑量子计算</h2>
        <div class="content-grid">
          <div class="theory-card">
            <h3>拓扑保护</h3>
            <p>利用任意子的拓扑性质进行量子计算：</p>
            <ul>
              <li><strong>拓扑简并：</strong>基态子空间</li>
              <li><strong>编织操作：</strong>量子门实现</li>
              <li><strong>拓扑保护：</strong>对局域扰动免疫</li>
              <li><strong>容错阈值：</strong>指数抑制错误</li>
            </ul>
          </div>
          <div class="theory-card">
            <h3>实现方案</h3>
            <ul>
              <li><strong>ν = 5/2分数量子霍尔态</strong></li>
              <li><strong>p波超导体中的Majorana费米子</strong></li>
              <li><strong>Kitaev蜂窝模型</strong></li>
              <li><strong>人工拓扑超导体</strong></li>
            </ul>
          </div>
        </div>
      </section>

      <!-- 实验实现 -->
      <section class="section">
        <h2>实验实现</h2>
        <div class="content-grid">
          <div class="theory-card">
            <h3>分数量子霍尔系统</h3>
            <ul>
              <li><strong>GaAs/AlGaAs异质结：</strong>高迁移率二维电子气</li>
              <li><strong>石墨烯：</strong>相对论性载流子</li>
              <li><strong>双分子层系统：</strong>可调相互作用</li>
              <li><strong>宽量子阱：</strong>双分量系统</li>
            </ul>
          </div>
          <div class="theory-card">
            <h3>测量技术</h3>
            <ul>
              <li><strong>输运测量：</strong>霍尔电导平台</li>
              <li><strong>热容测量：</strong>能隙确定</li>
              <li><strong>光谱学：</strong>激发态研究</li>
              <li><strong>干涉实验：</strong>任意子统计验证</li>
              <li><strong>边缘态探测：</strong>手性拉廷格液体</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- 理论方法 -->
      <section class="section">
        <h2>理论方法</h2>
        <div class="content-grid">
          <div class="theory-card">
            <h3>解析方法</h3>
            <ul>
              <li><strong>共形场论：</strong>边缘态描述</li>
              <li><strong>Chern-Simons理论：</strong>拓扑场论</li>
              <li><strong>纽结理论：</strong>编织统计</li>
              <li><strong>量子群：</strong>对称性分析</li>
              <li><strong>模函数：</strong>拓扑纠缠熵</li>
            </ul>
          </div>
          <div class="theory-card">
            <h3>数值方法</h3>
            <ul>
              <li><strong>精确对角化：</strong>小系统基态</li>
              <li><strong>密度矩阵重整化群：</strong>一维边缘态</li>
              <li><strong>量子蒙特卡罗：</strong>有限温度性质</li>
              <li><strong>张量网络：</strong>拓扑序刻画</li>
              <li><strong>机器学习：</strong>相识别</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- 相关物理系统 -->
      <section class="section">
        <h2>相关物理系统</h2>
        <div class="content-grid">
          <div class="theory-card">
            <h3>量子自旋液体</h3>
            <p>具有拓扑序的量子磁性态：</p>
            <ul>
              <li><strong>Kitaev模型：</strong>精确可解的量子自旋液体</li>
              <li><strong>共振价键态：</strong>Anderson的RVB理论</li>
              <li><strong>Z₂量子自旋液体：</strong>拓扑纠缠熵</li>
              <li><strong>手性自旋液体：</strong>破时间反演对称</li>
            </ul>
          </div>
          <div class="theory-card">
            <h3>拓扑超导体</h3>
            <ul>
              <li><strong>p+ip超导体：</strong>手性边缘态</li>
              <li><strong>拓扑绝缘体/超导体异质结</strong></li>
              <li><strong>铁磁链/超导体系统</strong></li>
              <li><strong>Majorana费米子</strong></li>
            </ul>
          </div>
        </div>
      </section>

      <!-- 数学结构 -->
      <section class="section">
        <h2>数学结构</h2>
        <div class="content-grid">
          <div class="theory-card">
            <h3>拓扑量子场论</h3>
            <div class="formula-box">
              <p><strong>Witten-Reshetikhin-Turaev不变量：</strong></p>
              <p>Z(M) = ∫ DA e<sup>iS<sub>CS</sub>[A]</sup></p>
              <p><strong>Jones多项式：</strong></p>
              <p>V<sub>L</sub>(q) = ⟨W<sub>L</sub>⟩<sub>CS</sub></p>
            </div>
          </div>
          <div class="theory-card">
            <h3>模张量范畴</h3>
            <ul>
              <li><strong>融合规则：</strong>N<sub>ij</sub><sup>k</sup></li>
              <li><strong>F-符号：</strong>结合性约束</li>
              <li><strong>R-符号：</strong>编织统计</li>
              <li><strong>S-矩阵：</strong>模变换</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- 前沿发展 -->
      <section class="section">
        <h2>前沿发展</h2>
        <div class="content-grid">
          <div class="theory-card">
            <h3>新兴方向</h3>
            <ul>
              <li><strong>分数Chern绝缘体：</strong>无磁场的分数量子霍尔效应</li>
              <li><strong>三维分数拓扑绝缘体</strong></li>
              <li><strong>时间反演不变的分数拓扑态</strong></li>
              <li><strong>非Abel相的实验实现</strong></li>
              <li><strong>拓扑量子计算的工程实现</strong></li>
            </ul>
          </div>
          <div class="theory-card">
            <h3>跨学科应用</h3>
            <ul>
              <li><strong>高能物理：</strong>规范理论与弦理论</li>
              <li><strong>数学：</strong>纽结理论与代数拓扑</li>
              <li><strong>量子信息：</strong>拓扑量子纠错</li>
              <li><strong>凝聚态理论：</strong>强关联系统</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- 开放问题与未来方向 -->
      <section class="section">
        <h2>开放问题与未来方向</h2>
        <div class="content-grid">
          <div class="theory-card">
            <h3>理论挑战</h3>
            <ul>
              <li><strong>ν = 5/2态的本质：</strong>非Abel vs. Abel</li>
              <li><strong>分数Chern绝缘体的稳定性</strong></li>
              <li><strong>三维拓扑序的分类</strong></li>
              <li><strong>非平衡拓扑态</strong></li>
              <li><strong>机器学习在拓扑相识别中的应用</strong></li>
            </ul>
          </div>
          <div class="theory-card">
            <h3>实验前沿</h3>
            <ul>
              <li><strong>更高质量的分数量子霍尔样品</strong></li>
              <li><strong>任意子编织的直接观测</strong></li>
              <li><strong>拓扑量子比特的实现</strong></li>
              <li><strong>新材料平台的探索</strong></li>
              <li><strong>人工拓扑系统的设计</strong></li>
            </ul>
          </div>
        </div>
      </section>

      <!-- 总结 -->
      <section class="section">
        <h2>总结</h2>
        <div class="summary-card">
          <p>Chern-Simons理论作为拓扑场论的重要分支，为理解分数量子霍尔效应、任意子统计和拓扑量子计算提供了深刻的理论框架。从Laughlin的开创性工作到现代拓扑量子计算的发展，Chern-Simons项展现了拓扑概念在凝聚态物理中的强大威力。</p>
          
          <p>随着实验技术的进步和新材料的发现，特别是在分数Chern绝缘体、Majorana费米子和人工拓扑系统方面的突破，Chern-Simons理论将继续在基础物理研究和量子技术应用中发挥重要作用。未来的研究将进一步探索拓扑序的分类、非Abel任意子的实现，以及拓扑量子计算的实用化。</p>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChernSimons',
  mounted() {
    // 添加数学公式渲染
    if (window.MathJax) {
      window.MathJax.typesetPromise();
    }
  }
}
</script>

<style scoped>
.chern-simons-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: #333;
}

.page-header {
  text-align: center;
  margin-bottom: 40px;
  padding: 30px 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
}

.page-header h1 {
  font-size: 2.5em;
  margin-bottom: 10px;
  font-weight: 300;
}

.subtitle {
  font-size: 1.2em;
  opacity: 0.9;
  font-weight: 300;
}

.content-container {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.section {
  background: white;
  border-radius: 15px;
  padding: 30px;
  box-shadow: 0 5px 20px rgba(0,0,0,0.08);
  border: 1px solid #e1e8ed;
}

.section h2 {
  color: #2c3e50;
  font-size: 1.8em;
  margin-bottom: 25px;
  padding-bottom: 10px;
  border-bottom: 3px solid #3498db;
  font-weight: 400;
}

.content-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  gap: 25px;
  margin-top: 20px;
}

.theory-card {
  background: #f8f9fa;
  padding: 25px;
  border-radius: 12px;
  border-left: 4px solid #3498db;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.theory-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.1);
}

.theory-card h3 {
  color: #2c3e50;
  font-size: 1.3em;
  margin-bottom: 15px;
  font-weight: 500;
}

.theory-card p {
  margin-bottom: 15px;
  color: #555;
}

.theory-card ul {
  list-style-type: none;
  padding-left: 0;
}

.theory-card li {
  margin-bottom: 8px;
  padding-left: 20px;
  position: relative;
  color: #555;
}

.theory-card li:before {
  content: "▸";
  color: #3498db;
  position: absolute;
  left: 0;
  font-weight: bold;
}

.formula-box {
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  padding: 20px;
  border-radius: 10px;
  margin: 15px 0;
  border-left: 4px solid #e74c3c;
  font-family: 'Courier New', monospace;
}

.formula-box p {
  margin: 8px 0;
  color: #2c3e50;
}

.formula-box strong {
  color: #e74c3c;
}

.summary-card {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
}

.summary-card p {
  margin-bottom: 20px;
  font-size: 1.1em;
  line-height: 1.8;
}

@media (max-width: 768px) {
  .content-grid {
    grid-template-columns: 1fr;
  }
  
  .page-header h1 {
    font-size: 2em;
  }
  
  .theory-card {
    padding: 20px;
  }
}
</style>