<template>
  <div class="chapter-content">
    <!-- 页面头部 -->
    <div class="chapter-hero">
      <div class="hero-background">
        <div class="magnetic-pattern"></div>
        <div class="spin-waves"></div>
      </div>
      <div class="hero-content">
        <div class="chapter-badge">
          <span class="badge-icon">🧲</span>
          <span class="badge-text">量子磁学</span>
        </div>
        <h1 class="hero-title">液化的应用：反铁磁Heisenberg链</h1>
        <p class="hero-subtitle">探索一维量子反铁磁系统的液化现象与拓扑性质</p>
        <div class="hero-meta">
          <div class="meta-item">
            <span class="meta-icon">📖</span>
            <span>阅读时间: 40分钟</span>
          </div>
          <div class="meta-item">
            <span class="meta-icon">🎯</span>
            <span>难度: 高级</span>
          </div>
          <div class="meta-item">
            <span class="meta-icon">🔬</span>
            <span>理论与实验</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 核心概念概览 -->
    <section class="concept-overview">
      <div class="section-header">
        <h2>反铁磁Heisenberg链的核心概念</h2>
        <p>理解一维量子磁性系统的基本性质和液化现象</p>
      </div>
      
      <div class="concept-grid">
        <div class="concept-card primary">
          <div class="card-icon">🔗</div>
          <h3>Heisenberg模型</h3>
          <p>描述局域磁矩间相互作用的基本模型</p>
          <div class="concept-details">
            <div class="equation-display">
              H = J ∑ᵢ Sᵢ · Sᵢ₊₁
            </div>
            <ul>
              <li>反铁磁耦合 (J > 0)</li>
              <li>SU(2)对称性</li>
              <li>量子涨落效应</li>
            </ul>
          </div>
        </div>

        <div class="concept-card">
          <div class="card-icon">🌊</div>
          <h3>自旋液体态</h3>
          <p>无长程磁序的量子基态</p>
          <div class="concept-details">
            <ul>
              <li>短程关联</li>
              <li>能隙激发</li>
              <li>拓扑序参量</li>
              <li>分数化激发</li>
            </ul>
          </div>
        </div>

        <div class="concept-card">
          <div class="card-icon">⚡</div>
          <h3>自旋子激发</h3>
          <p>分数化的准粒子激发</p>
          <div class="concept-details">
            <ul>
              <li>S = 1/2 激发</li>
              <li>禁闭-解禁闭转变</li>
              <li>弦理论描述</li>
              <li>Bethe ansatz解</li>
            </ul>
          </div>
        </div>

        <div class="concept-card">
          <div class="card-icon">🎯</div>
          <h3>拓扑性质</h3>
          <p>受拓扑保护的量子态</p>
          <div class="concept-details">
            <ul>
              <li>Haldane能隙</li>
              <li>边界态</li>
              <li>拓扑不变量</li>
              <li>对称性保护</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- 理论框架 -->
    <section class="theoretical-framework">
      <div class="section-header">
        <h2>理论框架与数学描述</h2>
        <p>从经典到量子的完整理论体系</p>
      </div>

      <div class="framework-layout">
        <div class="framework-main">
          <!-- Bethe Ansatz方法 -->
          <div class="theory-block">
            <div class="theory-header">
              <h3>🧮 Bethe Ansatz精确解</h3>
              <span class="theory-tag">精确方法</span>
            </div>
            <div class="theory-content">
              <p>对于一维反铁磁Heisenberg链，Bethe ansatz提供了精确的量子多体解：</p>
              
              <div class="bethe-equations">
                <div class="equation-group">
                  <h4>Bethe方程组</h4>
                  <div class="equation-display">
                    <p>e^(ik_j L) = ∏_{l≠j} (sin(k_j/2) - sin(k_l/2) + ic/2) / (sin(k_j/2) - sin(k_l/2) - ic/2)</p>
                  </div>
                  <p>其中 c = 2 对应SU(2)对称情况</p>
                </div>

                <div class="equation-group">
                  <h4>能量本征值</h4>
                  <div class="equation-display">
                    <p>E = -J ∑_j cos(k_j)</p>
                  </div>
                </div>

                <div class="equation-group">
                  <h4>基态能量密度</h4>
                  <div class="equation-display">
                    <p>e₀ = J/4 - J ln(2) ≈ -0.443J</p>
                  </div>
                </div>
              </div>

              <div class="bethe-properties">
                <div class="property-card">
                  <h4>🎯 精确性质</h4>
                  <ul>
                    <li>无能隙激发谱</li>
                    <li>代数衰减关联函数</li>
                    <li>中心荷 c = 1</li>
                    <li>Luttinger液体行为</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <!-- 低能有效理论 -->
          <div class="theory-block">
            <div class="theory-header">
              <h3>🌊 低能有效理论</h3>
              <span class="theory-tag">连续化</span>
            </div>
            <div class="theory-content">
              <div class="effective-theory">
                <h4>非线性σ模型</h4>
                <div class="equation-display">
                  <p>S = (1/2g) ∫ d²x [∂_μ n⃗ · ∂_μ n⃗ + iθ ε_{μν} n⃗ · (∂_μ n⃗ × ∂_ν n⃗)]</p>
                </div>
                <p>其中 n⃗ 是单位矢量场，θ = π 对应拓扑项</p>

                <div class="sigma-model-features">
                  <div class="feature-item">
                    <span class="feature-icon">🔄</span>
                    <span>重整化群流</span>
                    <div class="feature-detail">β函数分析显示系统流向强耦合固定点</div>
                  </div>
                  <div class="feature-item">
                    <span class="feature-icon">⚡</span>
                    <span>动力学能隙</span>
                    <div class="feature-detail">Δ ~ Λ exp(-2π/g) 指数小的能隙</div>
                  </div>
                  <div class="feature-item">
                    <span class="feature-icon">🎭</span>
                    <span>拓扑激发</span>
                    <div class="feature-detail">瞬子和反瞬子对的量子隧穿</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 自旋液体相 -->
          <div class="theory-block highlight">
            <div class="theory-header">
              <h3>💧 自旋液体相的特征</h3>
              <span class="theory-tag">量子相</span>
            </div>
            <div class="theory-content">
              <div class="spin-liquid-properties">
                <div class="property-section">
                  <h4>🔍 关联函数行为</h4>
                  <div class="correlation-analysis">
                    <div class="correlation-item">
                      <h5>自旋-自旋关联</h5>
                      <div class="equation-display small">
                        <p>⟨S_i^z S_{i+r}^z⟩ ~ (-1)^r r^{-1} cos(π r/2)</p>
                      </div>
                      <p>代数衰减伴随振荡</p>
                    </div>
                    
                    <div class="correlation-item">
                      <h5>二聚化关联</h5>
                      <div class="equation-display small">
                        <p>⟨D_i D_{i+r}⟩ ~ (-1)^r r^{-2}</p>
                      </div>
                      <p>更快的幂律衰减</p>
                    </div>
                  </div>
                </div>

                <div class="property-section">
                  <h4>🌡️ 热力学性质</h4>
                  <div class="thermodynamic-grid">
                    <div class="thermo-item">
                      <h5>比热</h5>
                      <div class="equation-display small">
                        <p>C ~ T (低温线性)</p>
                      </div>
                    </div>
                    <div class="thermo-item">
                      <h5>磁化率</h5>
                      <div class="equation-display small">
                        <p>χ ~ ln(T) (对数发散)</p>
                      </div>
                    </div>
                    <div class="thermo-item">
                      <h5>熵</h5>
                      <div class="equation-display small">
                        <p>S(T→0) = ln(2)/2</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="framework-sidebar">
          <div class="key-insights">
            <h3>关键洞察</h3>
            
            <div class="insight-card">
              <div class="insight-icon">🎯</div>
              <h4>量子涨落主导</h4>
              <p>一维系统中量子涨落完全抑制了经典Néel序</p>
            </div>

            <div class="insight-card">
              <div class="insight-icon">🔄</div>
              <h4>共形不变性</h4>
              <p>临界点具有共形对称性，中心荷c=1</p>
            </div>

            <div class="insight-card">
              <div class="insight-icon">⚡</div>
              <h4>分数化激发</h4>
              <p>自旋激发分解为两个S=1/2的自旋子</p>
            </div>

            <div class="insight-card">
              <div class="insight-icon">🌊</div>
              <h4>Luttinger液体</h4>
              <p>低能物理由Luttinger液体理论描述</p>
            </div>
          </div>

          <div class="experimental-connections">
            <h3>实验联系</h3>
            <div class="experiment-list">
              <div class="experiment-item">
                <span class="experiment-icon">🧪</span>
                <div>
                  <h4>CuGeO₃</h4>
                  <p>自旋-Peierls转变</p>
                </div>
              </div>
              <div class="experiment-item">
                <span class="experiment-icon">🔬</span>
                <div>
                  <h4>Sr₂CuO₃</h4>
                  <p>准一维铜氧链</p>
                </div>
              </div>
              <div class="experiment-item">
                <span class="experiment-icon">⚗️</span>
                <div>
                  <h4>KCuF₃</h4>
                  <p>理想Heisenberg链</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 拓扑性质与边界效应 -->
    <section class="topological-properties">
      <div class="section-header">
        <h2>拓扑性质与边界效应</h2>
        <p>探索受拓扑保护的量子态和边界现象</p>
      </div>

      <div class="topology-layout">
        <div class="haldane-analysis">
          <h3>🎭 Haldane猜想与拓扑分类</h3>
          
          <div class="haldane-content">
            <div class="haldane-conjecture">
              <h4>Haldane猜想</h4>
              <p>整数自旋链具有能隙，半整数自旋链无能隙</p>
              
              <div class="spin-classification">
                <div class="spin-case">
                  <div class="spin-label">S = 1/2</div>
                  <div class="spin-property">无能隙，临界</div>
                  <div class="spin-description">Luttinger液体相</div>
                </div>
                <div class="spin-case">
                  <div class="spin-label">S = 1</div>
                  <div class="spin-property">有能隙，拓扑</div>
                  <div class="spin-description">Haldane相</div>
                </div>
                <div class="spin-case">
                  <div class="spin-label">S = 3/2</div>
                  <div class="spin-property">无能隙，临界</div>
                  <div class="spin-description">高自旋Luttinger液体</div>
                </div>
              </div>
            </div>

            <div class="topological-invariant">
              <h4>拓扑不变量</h4>
              <div class="equation-display">
                <p>ν = (1/2π) ∫₀^π dk ∂_k arg[⟨ψ_k|ψ_{k+dk}⟩]</p>
              </div>
              <p>Berry相位的量子化值区分不同拓扑相</p>
            </div>
          </div>
        </div>

        <div class="edge-states">
          <h3>🏔️ 边界态与端点效应</h3>
          
          <div class="edge-analysis">
            <div class="boundary-modes">
              <h4>边界自由自旋</h4>
              <p>开边界条件下，链端出现未配对的S=1/2自旋</p>
              
              <div class="edge-properties">
                <div class="edge-property">
                  <span class="property-icon">🎯</span>
                  <span>局域化长度 ξ ~ 1/Δ</span>
                </div>
                <div class="edge-property">
                  <span class="property-icon">🌡️</span>
                  <span>Curie型磁化率</span>
                </div>
                <div class="edge-property">
                  <span class="property-icon">⚡</span>
                  <span>低能Kondo效应</span>
                </div>
              </div>
            </div>

            <div class="kennedy-tasaki">
              <h4>Kennedy-Tasaki变换</h4>
              <p>通过幺正变换揭示隐藏的Z₂×Z₂对称性</p>
              <div class="equation-display">
                <p>U = ∏ᵢ exp(iπS_i^z ∑_{j&lt;i} S_j^z)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 实验实现与应用 -->
    <section class="experimental-applications">
      <div class="section-header">
        <h2>实验实现与技术应用</h2>
        <p>从理论到实验的桥梁，以及在量子技术中的应用前景</p>
      </div>

      <div class="applications-grid">
        <div class="application-category">
          <h3>🧪 实验平台</h3>
          <div class="platform-list">
            <div class="platform-item">
              <div class="platform-header">
                <h4>冷原子系统</h4>
                <span class="platform-tag">可控性强</span>
              </div>
              <div class="platform-content">
                <ul>
                  <li>光晶格中的超冷原子</li>
                  <li>可调节相互作用强度</li>
                  <li>实时动力学观测</li>
                  <li>人工规范场</li>
                </ul>
              </div>
            </div>

            <div class="platform-item">
              <div class="platform-header">
                <h4>量子磁体材料</h4>
                <span class="platform-tag">天然实现</span>
              </div>
              <div class="platform-content">
                <ul>
                  <li>准一维铜氧化物</li>
                  <li>有机自旋链化合物</li>
                  <li>稀土磁体</li>
                  <li>分子磁体</li>
                </ul>
              </div>
            </div>

            <div class="platform-item">
              <div class="platform-header">
                <h4>量子模拟器</h4>
                <span class="platform-tag">数字化</span>
              </div>
              <div class="platform-content">
                <ul>
                  <li>超导量子比特</li>
                  <li>离子阱系统</li>
                  <li>光子量子模拟</li>
                  <li>NV色心系统</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="application-category">
          <h3>🔬 测量技术</h3>
          <div class="measurement-techniques">
            <div class="technique-item">
              <div class="technique-icon">📡</div>
              <h4>中子散射</h4>
              <p>直接探测自旋关联函数和动力学结构因子</p>
            </div>
            <div class="technique-item">
              <div class="technique-icon">🌊</div>
              <h4>ESR/NMR</h4>
              <p>局域磁场和自旋动力学信息</p>
            </div>
            <div class="technique-item">
              <div class="technique-icon">🔍</div>
              <h4>μSR</h4>
              <p>内部磁场分布和自旋涨落</p>
            </div>
            <div class="technique-item">
              <div class="technique-icon">⚡</div>
              <h4>比热测量</h4>
              <p>热力学性质和相变行为</p>
            </div>
          </div>
        </div>

        <div class="application-category">
          <h3>🚀 技术应用</h3>
          <div class="tech-applications">
            <div class="tech-item">
              <div class="tech-header">
                <h4>量子计算</h4>
                <span class="tech-impact">高</span>
              </div>
              <div class="tech-content">
                <p>拓扑保护的量子比特和容错量子计算</p>
                <ul>
                  <li>拓扑量子比特</li>
                  <li>量子纠错码</li>
                  <li>绝热量子计算</li>
                </ul>
              </div>
            </div>

            <div class="tech-item">
              <div class="tech-header">
                <h4>量子传感</h4>
                <span class="tech-impact">中</span>
              </div>
              <div class="tech-content">
                <p>利用量子关联增强传感精度</p>
                <ul>
                  <li>磁场传感器</li>
                  <li>量子增强测量</li>
                  <li>纠缠传感网络</li>
                </ul>
              </div>
            </div>

            <div class="tech-item">
              <div class="tech-header">
                <h4>量子材料设计</h4>
                <span class="tech-impact">中</span>
              </div>
              <div class="tech-content">
                <p>设计具有特定量子性质的新材料</p>
                <ul>
                  <li>人工量子材料</li>
                  <li>拓扑绝缘体</li>
                  <li>量子自旋液体</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 总结与展望 -->
    <section class="summary-outlook">
      <div class="section-header">
        <h2>总结与未来展望</h2>
        <p>反铁磁Heisenberg链研究的现状与发展方向</p>
      </div>

      <div class="summary-content">
        <div class="key-achievements">
          <h3>🏆 主要成就</h3>
          <div class="achievement-list">
            <div class="achievement-item">
              <div class="achievement-icon">🧮</div>
              <div class="achievement-text">
                <h4>精确解的建立</h4>
                <p>Bethe ansatz方法为一维量子多体系统提供了完整的理论框架</p>
              </div>
            </div>
            <div class="achievement-item">
              <div class="achievement-icon">🎭</div>
              <div class="achievement-text">
                <h4>拓扑相的理解</h4>
                <p>Haldane猜想揭示了量子自旋系统的拓扑分类</p>
              </div>
            </div>
            <div class="achievement-item">
              <div class="achievement-icon">🔬</div>
              <div class="achievement-text">
                <h4>实验验证</h4>
                <p>多种实验平台成功实现和验证了理论预言</p>
              </div>
            </div>
          </div>
        </div>

        <div class="future-directions">
          <h3>🔮 未来方向</h3>
          <div class="direction-grid">
            <div class="direction-item">
              <h4>🌐 高维推广</h4>
              <p>探索二维和三维量子自旋液体的性质</p>
            </div>
            <div class="direction-item">
              <h4>🔄 非平衡动力学</h4>
              <p>研究量子淬火和驱动系统的动力学行为</p>
            </div>
            <div class="direction-item">
              <h4>🧬 机器学习应用</h4>
              <p>利用AI技术发现新的量子相和相变</p>
            </div>
            <div class="direction-item">
              <h4>🚀 量子技术</h4>
              <p>开发基于量子自旋系统的实用量子器件</p>
            </div>
          </div>
        </div>

        <div class="concluding-remarks">
          <div class="conclusion-box">
            <h3>🎯 核心要点</h3>
            <p>反铁磁Heisenberg链作为量子多体理论的典型例子，展现了一维量子系统的丰富物理内容。从Bethe ansatz的精确解到拓扑性质的深刻理解，这一模型不仅推动了理论物理的发展，也为量子技术的应用奠定了基础。随着实验技术的不断进步和理论方法的创新，我们对量子自旋液体的理解将更加深入，其在量子计算和量子材料中的应用前景也将更加广阔。</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.chapter-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: #333;
}

/* 页面头部样式 */
.chapter-hero {
  position: relative;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 20px;
  padding: 60px 40px;
  margin-bottom: 40px;
  overflow: hidden;
  color: white;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.1;
}

.magnetic-pattern {
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: 
    radial-gradient(circle at 25% 25%, #fff 2px, transparent 2px),
    radial-gradient(circle at 75% 75%, #fff 2px, transparent 2px);
  background-size: 50px 50px;
  animation: magneticFloat 20s ease-in-out infinite;
}

.spin-waves {
  position: absolute;
  width: 100%;
  height: 100%;
  background: repeating-linear-gradient(
    45deg,
    transparent,
    transparent 10px,
    rgba(255,255,255,0.05) 10px,
    rgba(255,255,255,0.05) 20px
  );
  animation: waveMove 15s linear infinite;
}

@keyframes magneticFloat {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-10px) rotate(180deg); }
}

@keyframes waveMove {
  0% { transform: translateX(-50px); }
  100% { transform: translateX(50px); }
}

.hero-content {
  position: relative;
  z-index: 2;
}

.chapter-badge {
  display: inline-flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.2);
  padding: 8px 16px;
  border-radius: 25px;
  margin-bottom: 20px;
  backdrop-filter: blur(10px);
}

.badge-icon {
  margin-right: 8px;
  font-size: 1.2em;
}

.hero-title {
  font-size: 3em;
  font-weight: 700;
  margin: 0 0 15px 0;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
}

.hero-subtitle {
  font-size: 1.3em;
  margin-bottom: 25px;
  opacity: 0.9;
}

.hero-meta {
  display: flex;
  gap: 25px;
  flex-wrap: wrap;
}

.meta-item {
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.15);
  padding: 8px 15px;
  border-radius: 20px;
  backdrop-filter: blur(5px);
}

.meta-icon {
  margin-right: 8px;
}

/* 概念概览样式 */
.concept-overview {
  margin-bottom: 50px;
}

.section-header {
  text-align: center;
  margin-bottom: 40px;
}

.section-header h2 {
  font-size: 2.5em;
  color: #2c3e50;
  margin-bottom: 10px;
}

.section-header p {
  font-size: 1.2em;
  color: #7f8c8d;
}

.concept-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 25px;
  margin-bottom: 30px;
}

.concept-card {
  background: white;
  border-radius: 15px;
  padding: 30px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.concept-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.15);
}

.concept-card.primary {
  border-color: #667eea;
  background: linear-gradient(135deg, #f8f9ff 0%, #e8edff 100%);
}

.card-icon {
  font-size: 2.5em;
  margin-bottom: 15px;
  display: block;
}

.concept-card h3 {
  color: #2c3e50;
  margin-bottom: 15px;
  font-size: 1.4em;
}

.concept-card p {
  color: #7f8c8d;
  margin-bottom: 20px;
}

.concept-details ul {
  list-style: none;
  padding: 0;
}

.concept-details li {
  padding: 5px 0;
  color: #5a6c7d;
  position: relative;
  padding-left: 20px;
}

.concept-details li:before {
  content: "▸";
  position: absolute;
  left: 0;
  color: #667eea;
  font-weight: bold;
}

.equation-display {
  background: #f8f9fa;
  border: 1px solid #e9ecef;
  border-radius: 8px;
  padding: 15px;
  margin: 15px 0;
  font-family: 'Courier New', monospace;
  font-size: 1.1em;
  text-align: center;
  color: #2c3e50;
}

/* 理论框架样式 */
.theoretical-framework {
  margin-bottom: 50px;
}

.framework-layout {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 40px;
}

.theory-block {
  background: white;
  border-radius: 15px;
  padding: 30px;
  margin-bottom: 30px;
  box-shadow: 0 5px 20px rgba(0,0,0,0.08);
  border-left: 5px solid #667eea;
}

.theory-block.highlight {
  background: linear-gradient(135deg, #fff5f5 0%, #ffe8e8 100%);
  border-left-color: #e74c3c;
}

.theory-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}

.theory-header h3 {
  color: #2c3e50;
  margin: 0;
  font-size: 1.5em;
}

.theory-tag {
  background: #667eea;
  color: white;
  padding: 4px 12px;
  border-radius: 15px;
  font-size: 0.8em;
  font-weight: 500;
}

.bethe-equations {
  margin: 20px 0;
}

.equation-group {
  margin-bottom: 25px;
}

.equation-group h4 {
  color: #34495e;
  margin-bottom: 10px;
  font-size: 1.2em;
}

.bethe-properties {
  margin-top: 25px;
}

.property-card {
  background: #f8f9ff;
  border-radius: 10px;
  padding: 20px;
  border-left: 4px solid #667eea;
}

.property-card h4 {
  color: #2c3e50;
  margin-bottom: 15px;
}

.effective-theory {
  margin: 20px 0;
}

.sigma-model-features {
  margin-top: 20px;
}

.feature-item {
  display: flex;
  align-items: flex-start;
  margin-bottom: 15px;
  padding: 15px;
  background: #f8f9fa;
  border-radius: 10px;
}

.feature-icon {
  margin-right: 12px;
  font-size: 1.2em;
  margin-top: 2px;
}

.feature-detail {
  font-size: 0.9em;
  color: #6c757d;
  margin-top: 5px;
}

.spin-liquid-properties {
  display: grid;
  gap: 25px;
}

.property-section h4 {
  color: #2c3e50;
  margin-bottom: 15px;
  font-size: 1.3em;
}

.correlation-analysis {
  display: grid;
  gap: 15px;
}

.correlation-item {
  background: #f8f9ff;
  padding: 15px;
  border-radius: 10px;
  border-left: 3px solid #667eea;
}

.correlation-item h5 {
  color: #34495e;
  margin-bottom: 8px;
}

.equation-display.small {
  font-size: 0.95em;
  padding: 10px;
  margin: 8px 0;
}

.thermodynamic-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 15px;
}

.thermo-item {
  background: #fff5f5;
  padding: 15px;
  border-radius: 10px;
  text-align: center;
  border: 2px solid #ffe8e8;
}

.thermo-item h5 {
  color: #e74c3c;
  margin-bottom: 10px;
}

/* 侧边栏样式 */
.framework-sidebar {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.key-insights, .experimental-connections {
  background: white;
  border-radius: 15px;
  padding: 25px;
  box-shadow: 0 5px 20px rgba(0,0,0,0.08);
}

.key-insights h3, .experimental-connections h3 {
  color: #2c3e50;
  margin-bottom: 20px;
  font-size: 1.3em;
}

.insight-card {
  display: flex;
  align-items: flex-start;
  margin-bottom: 20px;
  padding: 15px;
  background: #f8f9ff;
  border-radius: 10px;
  transition: all 0.3s ease;
}

.insight-card:hover {
  background: #e8edff;
  transform: translateX(5px);
}

.insight-icon {
  font-size: 1.5em;
  margin-right: 15px;
  margin-top: 2px;
}

.insight-card h4 {
  color: #2c3e50;
  margin-bottom: 5px;
  font-size: 1.1em;
}

.insight-card p {
  color: #7f8c8d;
  font-size: 0.9em;
  margin: 0;
}

.experiment-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.experiment-item {
  display: flex;
  align-items: center;
  padding: 12px;
  background: #f8f9fa;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.experiment-item:hover {
  background: #e9ecef;
}

.experiment-icon {
  font-size: 1.3em;
  margin-right: 12px;
}

.experiment-item h4 {
  color: #2c3e50;
  margin: 0 0 3px 0;
  font-size: 1em;
}

.experiment-item p {
  color: #6c757d;
  margin: 0;
  font-size: 0.85em;
}

/* 拓扑性质样式 */
.topological-properties {
  margin-bottom: 50px;
}

.topology-layout {
  display: grid;
  gap: 30px;
}

.haldane-analysis, .edge-states {
  background: white;
  border-radius: 15px;
  padding: 30px;
  box-shadow: 0 5px 20px rgba(0,0,0,0.08);
}

.haldane-analysis h3, .edge-states h3 {
  color: #2c3e50;
  margin-bottom: 25px;
  font-size: 1.6em;
}

.haldane-conjecture {
  margin-bottom: 30px;
}

.haldane-conjecture h4 {
  color: #34495e;
  margin-bottom: 15px;
}

.spin-classification {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
  margin: 20px 0;
}

.spin-case {
  background: #f8f9ff;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  border: 2px solid #e8edff;
  transition: all 0.3s ease;
}

.spin-case:hover {
  border-color: #667eea;
  transform: translateY(-3px);
}

.spin-label {
  font-size: 1.3em;
  font-weight: bold;
  color: #667eea;
  margin-bottom: 8px;
}

.spin-property {
  color: #2c3e50;
  font-weight: 500;
  margin-bottom: 5px;
}

.spin-description {
  color: #7f8c8d;
  font-size: 0.9em;
}

.topological-invariant {
  background: #fff5f5;
  padding: 20px;
  border-radius: 10px;
  border-left: 4px solid #e74c3c;
}

.topological-invariant h4 {
  color: #e74c3c;
  margin-bottom: 15px;
}

.edge-analysis {
  display: grid;
  gap: 25px;
}

.boundary-modes, .kennedy-tasaki {
  background: #f8f9fa;
  padding: 20px;
  border-radius: 10px;
}

.boundary-modes h4, .kennedy-tasaki h4 {
  color: #2c3e50;
  margin-bottom: 15px;
}

.edge-properties {
  margin-top: 15px;
}

.edge-property {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  padding: 8px;
  background: white;
  border-radius: 6px;
}

.property-icon {
  margin-right: 10px;
  font-size: 1.1em;
}

/* 实验应用样式 */
.experimental-applications {
  margin-bottom: 50px;
}

.applications-grid {
  display: grid;
  gap: 30px;
}

.application-category {
  background: white;
  border-radius: 15px;
  padding: 30px;
  box-shadow: 0 5px 20px rgba(0,0,0,0.08);
}

.application-category h3 {
  color: #2c3e50;
  margin-bottom: 25px;
  font-size: 1.5em;
}

.platform-list {
  display: grid;
  gap: 20px;
}

.platform-item {
  border: 2px solid #e9ecef;
  border-radius: 10px;
  padding: 20px;
  transition: all 0.3s ease;
}

.platform-item:hover {
  border-color: #667eea;
  background: #f8f9ff;
}

.platform-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

.platform-header h4 {
  color: #2c3e50;
  margin: 0;
}

.platform-tag {
  background: #667eea;
  color: white;
  padding: 3px 10px;
  border-radius: 12px;
  font-size: 0.8em;
}

.platform-content ul {
  list-style: none;
  padding: 0;
}

.platform-content li {
  padding: 5px 0;
  color: #5a6c7d;
  position: relative;
  padding-left: 20px;
}

.platform-content li:before {
  content: "•";
  position: absolute;
  left: 0;
  color: #667eea;
  font-weight: bold;
}

.measurement-techniques {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}

.technique-item {
  background: #f8f9fa;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  transition: all 0.3s ease;
}

.technique-item:hover {
  background: #e9ecef;
  transform: translateY(-3px);
}

.technique-icon {
  font-size: 2em;
  margin-bottom: 10px;
  display: block;
}

.technique-item h4 {
  color: #2c3e50;
  margin-bottom: 10px;
}

.technique-item p {
  color: #6c757d;
  font-size: 0.9em;
}

.tech-applications {
  display: grid;
  gap: 20px;
}

.tech-item {
  border: 2px solid #e9ecef;
  border-radius: 10px;
  padding: 20px;
  transition: all 0.3s ease;
}

.tech-item:hover {
  border-color: #28a745;
  background: #f8fff9;
}

.tech-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

.tech-header h4 {
  color: #2c3e50;
  margin: 0;
}

.tech-impact {
  padding: 3px 10px;
  border-radius: 12px;
  font-size: 0.8em;
  font-weight: 500;
}

.tech-impact {
  background: #28a745;
  color: white;
}

.tech-content p {
  color: #6c757d;
  margin-bottom: 15px;
}

.tech-content ul {
  list-style: none;
  padding: 0;
}

.tech-content li {
  padding: 3px 0;
  color: #5a6c7d;
  position: relative;
  padding-left: 20px;
}

.tech-content li:before {
  content: "→";
  position: absolute;
  left: 0;
  color: #28a745;
  font-weight: bold;
}

/* 总结样式 */
.summary-outlook {
  margin-bottom: 50px;
}

.summary-content {
  display: grid;
  gap: 30px;
}

.key-achievements, .future-directions {
  background: white;
  border-radius: 15px;
  padding: 30px;
  box-shadow: 0 5px 20px rgba(0,0,0,0.08);
}

.key-achievements h3, .future-directions h3 {
  color: #2c3e50;
  margin-bottom: 25px;
  font-size: 1.5em;
}

.achievement-list {
  display: grid;
  gap: 20px;
}

.achievement-item {
  display: flex;
  align-items: flex-start;
  padding: 20px;
  background: #f8f9ff;
  border-radius: 10px;
  border-left: 4px solid #667eea;
}

.achievement-icon {
  font-size: 2em;
  margin-right: 20px;
  margin-top: 5px;
}

.achievement-text h4 {
  color: #2c3e50;
  margin-bottom: 8px;
}

.achievement-text p {
  color: #7f8c8d;
  margin: 0;
}

.direction-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.direction-item {
  background: #f8f9fa;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  transition: all 0.3s ease;
}

.direction-item:hover {
  background: #e9ecef;
  transform: translateY(-3px);
}

.direction-item h4 {
  color: #2c3e50;
  margin-bottom: 10px;
}

.direction-item p {
  color: #6c757d;
  font-size: 0.9em;
}

.concluding-remarks {
  margin-top: 30px;
}

.conclusion-box {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 30px;
  border-radius: 15px;
  text-align: center;
}

.conclusion-box h3 {
  margin-bottom: 20px;
  font-size: 1.5em;
}

.conclusion-box p {
  font-size: 1.1em;
  line-height: 1.8;
  margin: 0;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .chapter-content {
    padding: 0 15px;
  }
  
  .hero-title {
    font-size: 2.2em;
  }
  
  .hero-subtitle {
    font-size: 1.1em;
  }
  
  .framework-layout {
    grid-template-columns: 1fr;
  }
  
  .concept-grid {
    grid-template-columns: 1fr;
  }
  
  .hero-meta {
    flex-direction: column;
    gap: 10px;
  }
  
  .spin-classification {
    grid-template-columns: 1fr;
  }
  
  .thermodynamic-grid {
    grid-template-columns: 1fr;
  }
  
  .direction-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .chapter-hero {
    padding: 40px 20px;
  }
  
  .hero-title {
    font-size: 1.8em;
  }
  
  .section-header h2 {
    font-size: 2em;
  }
  
  .theory-block, .concept-card, .application-category {
    padding: 20px;
  }
}
</style>