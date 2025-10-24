<template>
  <div class="chapter-content">
    <div class="chapter-header">
      <h1 class="chapter-title">1.8 附录</h1>
      <p class="chapter-subtitle">重要公式、常数和补充材料</p>
    </div>

    <div class="appendix-sections">
      <div class="appendix-section">
        <h2>A. 重要物理常数</h2>
        <div class="constants-grid">
          <div class="constant-category">
            <h3>基本物理常数</h3>
            <div class="constants-table">
              <div class="constant-row">
                <span class="constant-name">普朗克常数</span>
                <span class="constant-symbol">h</span>
                <span class="constant-value">6.626 × 10⁻³⁴ J·s</span>
              </div>
              <div class="constant-row">
                <span class="constant-name">约化普朗克常数</span>
                <span class="constant-symbol">ℏ = h/2π</span>
                <span class="constant-value">1.055 × 10⁻³⁴ J·s</span>
              </div>
              <div class="constant-row">
                <span class="constant-name">电子电荷</span>
                <span class="constant-symbol">e</span>
                <span class="constant-value">1.602 × 10⁻¹⁹ C</span>
              </div>
              <div class="constant-row">
                <span class="constant-name">电子质量</span>
                <span class="constant-symbol">mₑ</span>
                <span class="constant-value">9.109 × 10⁻³¹ kg</span>
              </div>
              <div class="constant-row">
                <span class="constant-name">质子质量</span>
                <span class="constant-symbol">mₚ</span>
                <span class="constant-value">1.673 × 10⁻²⁷ kg</span>
              </div>
              <div class="constant-row">
                <span class="constant-name">玻尔兹曼常数</span>
                <span class="constant-symbol">kB</span>
                <span class="constant-value">1.381 × 10⁻²³ J/K</span>
              </div>
              <div class="constant-row">
                <span class="constant-name">阿伏伽德罗常数</span>
                <span class="constant-symbol">NA</span>
                <span class="constant-value">6.022 × 10²³ mol⁻¹</span>
              </div>
            </div>
          </div>

          <div class="constant-category">
            <h3>原子单位制</h3>
            <div class="constants-table">
              <div class="constant-row">
                <span class="constant-name">玻尔半径</span>
                <span class="constant-symbol">a₀</span>
                <span class="constant-value">0.529 × 10⁻¹⁰ m</span>
              </div>
              <div class="constant-row">
                <span class="constant-name">哈特里能量</span>
                <span class="constant-symbol">Eh</span>
                <span class="constant-value">27.21 eV</span>
              </div>
              <div class="constant-row">
                <span class="constant-name">里德伯常数</span>
                <span class="constant-symbol">Ry</span>
                <span class="constant-value">13.61 eV</span>
              </div>
              <div class="constant-row">
                <span class="constant-name">精细结构常数</span>
                <span class="constant-symbol">α</span>
                <span class="constant-value">1/137.04</span>
              </div>
            </div>
          </div>

          <div class="constant-category">
            <h3>凝聚态物理相关</h3>
            <div class="constants-table">
              <div class="constant-row">
                <span class="constant-name">玻尔磁子</span>
                <span class="constant-symbol">μB</span>
                <span class="constant-value">9.274 × 10⁻²⁴ J/T</span>
              </div>
              <div class="constant-row">
                <span class="constant-name">核磁子</span>
                <span class="constant-symbol">μN</span>
                <span class="constant-value">5.051 × 10⁻²⁷ J/T</span>
              </div>
              <div class="constant-row">
                <span class="constant-name">真空磁导率</span>
                <span class="constant-symbol">μ₀</span>
                <span class="constant-value">4π × 10⁻⁷ H/m</span>
              </div>
              <div class="constant-row">
                <span class="constant-name">真空介电常数</span>
                <span class="constant-symbol">ε₀</span>
                <span class="constant-value">8.854 × 10⁻¹² F/m</span>
              </div>
              <div class="constant-row">
                <span class="constant-name">光速</span>
                <span class="constant-symbol">c</span>
                <span class="constant-value">2.998 × 10⁸ m/s</span>
              </div>
              <div class="constant-row">
                <span class="constant-name">气体常数</span>
                <span class="constant-symbol">R</span>
                <span class="constant-value">8.314 J/(mol·K)</span>
              </div>
            </div>
          </div>

          <div class="constant-category">
            <h3>典型能量尺度</h3>
            <div class="constants-table">
              <div class="constant-row">
                <span class="constant-name">室温热能</span>
                <span class="constant-symbol">kBT (300K)</span>
                <span class="constant-value">25.9 meV</span>
              </div>
              <div class="constant-row">
                <span class="constant-name">液氦温度</span>
                <span class="constant-symbol">kBT (4.2K)</span>
                <span class="constant-value">0.36 meV</span>
              </div>
              <div class="constant-row">
                <span class="constant-name">液氮温度</span>
                <span class="constant-symbol">kBT (77K)</span>
                <span class="constant-value">6.6 meV</span>
              </div>
              <div class="constant-row">
                <span class="constant-name">德拜温度(典型)</span>
                <span class="constant-symbol">kBΘD</span>
                <span class="constant-value">10-50 meV</span>
              </div>
              <div class="constant-row">
                <span class="constant-name">费米能级(金属)</span>
                <span class="constant-symbol">EF</span>
                <span class="constant-value">1-10 eV</span>
              </div>
              <div class="constant-row">
                <span class="constant-name">带隙(半导体)</span>
                <span class="constant-symbol">Eg</span>
                <span class="constant-value">0.1-3 eV</span>
              </div>
            </div>
          </div>

          <div class="constant-category">
            <h3>典型长度尺度</h3>
            <div class="constants-table">
              <div class="constant-row">
                <span class="constant-name">原子间距</span>
                <span class="constant-symbol">a</span>
                <span class="constant-value">2-5 Å</span>
              </div>
              <div class="constant-row">
                <span class="constant-name">德布罗意波长(室温)</span>
                <span class="constant-symbol">λdB</span>
                <span class="constant-value">~1 Å</span>
              </div>
              <div class="constant-row">
                <span class="constant-name">托马斯-费米屏蔽长度</span>
                <span class="constant-symbol">λTF</span>
                <span class="constant-value">0.5-2 Å</span>
              </div>
              <div class="constant-row">
                <span class="constant-name">相干长度(超导)</span>
                <span class="constant-symbol">ξ</span>
                <span class="constant-value">10-1000 nm</span>
              </div>
              <div class="constant-row">
                <span class="constant-name">磁穿透深度</span>
                <span class="constant-symbol">λL</span>
                <span class="constant-value">50-500 nm</span>
              </div>
              <div class="constant-row">
                <span class="constant-name">平均自由程</span>
                <span class="constant-symbol">l</span>
                <span class="constant-value">1-100 nm</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="appendix-section">
        <h2>B. 重要公式汇总</h2>
        <div class="formulas-grid">
          <div class="formula-category">
            <h3>量子力学基础</h3>
            <div class="formula-list">
              <div class="formula-item">
                <div class="formula-name">薛定谔方程（时间相关）</div>
                <div class="formula-expression">iℏ ∂ψ/∂t = Ĥψ</div>
              </div>
              <div class="formula-item">
                <div class="formula-name">薛定谔方程（时间无关）</div>
                <div class="formula-expression">Ĥψ = Eψ</div>
              </div>
              <div class="formula-item">
                <div class="formula-name">海森堡不确定性原理</div>
                <div class="formula-expression">ΔxΔp ≥ ℏ/2</div>
              </div>
              <div class="formula-item">
                <div class="formula-name">德布罗意关系</div>
                <div class="formula-expression">λ = h/p</div>
              </div>
            </div>
          </div>

          <div class="formula-category">
            <h3>统计力学</h3>
            <div class="formula-list">
              <div class="formula-item">
                <div class="formula-name">费米-狄拉克分布</div>
                <div class="formula-expression">f(E) = 1/(e^((E-μ)/kBT) + 1)</div>
              </div>
              <div class="formula-item">
                <div class="formula-name">玻色-爱因斯坦分布</div>
                <div class="formula-expression">n(E) = 1/(e^((E-μ)/kBT) - 1)</div>
              </div>
              <div class="formula-item">
                <div class="formula-name">麦克斯韦-玻尔兹曼分布</div>
                <div class="formula-expression">f(E) = e^(-(E-μ)/kBT)</div>
              </div>
              <div class="formula-item">
                <div class="formula-name">配分函数</div>
                <div class="formula-expression">Z = Σᵢ e^(-Eᵢ/kBT)</div>
              </div>
            </div>
          </div>

          <div class="formula-category">
            <h3>晶体结构</h3>
            <div class="formula-list">
              <div class="formula-item">
                <div class="formula-name">布拉格衍射条件</div>
                <div class="formula-expression">2d sinθ = nλ</div>
              </div>
              <div class="formula-item">
                <div class="formula-name">倒格矢</div>
                <div class="formula-expression">G = h₁b₁ + h₂b₂ + h₃b₃</div>
              </div>
              <div class="formula-item">
                <div class="formula-name">结构因子</div>
                <div class="formula-expression">S(G) = Σⱼ fⱼ e^(iG·rⱼ)</div>
              </div>
              <div class="formula-item">
                <div class="formula-name">态密度</div>
                <div class="formula-expression">g(E) = V/(2π)³ ∫ δ(E - E(k)) dk</div>
              </div>
            </div>
          </div>

          <div class="formula-category">
            <h3>输运性质</h3>
            <div class="formula-list">
              <div class="formula-item">
                <div class="formula-name">欧姆定律</div>
                <div class="formula-expression">J = σE</div>
              </div>
              <div class="formula-item">
                <div class="formula-name">德鲁德电导率</div>
                <div class="formula-expression">σ = ne²τ/m</div>
              </div>
              <div class="formula-item">
                <div class="formula-name">霍尔系数</div>
                <div class="formula-expression">RH = 1/(nec)</div>
              </div>
              <div class="formula-item">
                <div class="formula-name">热导率</div>
                <div class="formula-expression">κ = (1/3)CvvΛ</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="appendix-section">
        <h2>C. 数学工具</h2>
        <div class="math-tools">
          <div class="tool-category">
            <h3>傅里叶变换</h3>
            <div class="tool-content">
              <div class="transform-pair">
                <div class="transform-item">
                  <div class="transform-name">傅里叶变换</div>
                  <div class="transform-formula">F(k) = ∫ f(r) e^(-ik·r) dr</div>
                </div>
                <div class="transform-item">
                  <div class="transform-name">逆傅里叶变换</div>
                  <div class="transform-formula">f(r) = (1/(2π)³) ∫ F(k) e^(ik·r) dk</div>
                </div>
              </div>
              <div class="properties">
                <h4>重要性质</h4>
                <ul>
                  <li>线性性：F[af + bg] = aF[f] + bF[g]</li>
                  <li>位移性：F[f(r-a)] = e^(-ik·a)F[f]</li>
                  <li>卷积定理：F[f*g] = F[f]·F[g]</li>
                  <li>帕塞瓦尔定理：∫|f(r)|²dr = (1/(2π)³)∫|F(k)|²dk</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="tool-category">
            <h3>格林函数</h3>
            <div class="tool-content">
              <div class="green-function-def">
                <div class="definition">
                  <h4>定义</h4>
                  <p>格林函数G(r,r')满足：(∇² + k²)G(r,r') = δ(r-r')</p>
                </div>
                <div class="solutions">
                  <h4>常见解</h4>
                  <div class="solution-item">
                    <span class="solution-name">三维自由空间：</span>
                    <span class="solution-formula">G(r,r') = -e^(ik|r-r'|)/(4π|r-r'|)</span>
                  </div>
                  <div class="solution-item">
                    <span class="solution-name">一维：</span>
                    <span class="solution-formula">G(x,x') = (i/2k)e^(ik|x-x'|)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="tool-category">
            <h3>特殊函数</h3>
            <div class="tool-content">
              <div class="special-functions">
                <div class="function-item">
                  <h4>贝塞尔函数</h4>
                  <p>微分方程：x²y'' + xy' + (x² - n²)y = 0</p>
                  <p>解：Jₙ(x), Yₙ(x)</p>
                </div>
                <div class="function-item">
                  <h4>勒让德多项式</h4>
                  <p>微分方程：(1-x²)y'' - 2xy' + l(l+1)y = 0</p>
                  <p>解：Pₗ(x)</p>
                </div>
                <div class="function-item">
                  <h4>球谐函数</h4>
                  <p>Yₗᵐ(θ,φ) = √[(2l+1)(l-m)!/(4π(l+m)!)] Pₗᵐ(cosθ)e^(imφ)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="appendix-section">
        <h2>D. 单位换算</h2>
        <div class="conversion-tables">
          <div class="conversion-category">
            <h3>能量单位</h3>
            <div class="conversion-table">
              <div class="table-header">
                <span>单位</span>
                <span>焦耳 (J)</span>
                <span>电子伏特 (eV)</span>
                <span>开尔文 (K)</span>
              </div>
              <div class="table-row">
                <span>1 J</span>
                <span>1</span>
                <span>6.242 × 10¹⁸</span>
                <span>7.243 × 10²²</span>
              </div>
              <div class="table-row">
                <span>1 eV</span>
                <span>1.602 × 10⁻¹⁹</span>
                <span>1</span>
                <span>1.160 × 10⁴</span>
              </div>
              <div class="table-row">
                <span>1 kBT (300K)</span>
                <span>4.142 × 10⁻²¹</span>
                <span>0.0259</span>
                <span>300</span>
              </div>
            </div>
          </div>

          <div class="conversion-category">
            <h3>长度单位</h3>
            <div class="conversion-table">
              <div class="table-header">
                <span>单位</span>
                <span>米 (m)</span>
                <span>埃 (Å)</span>
                <span>玻尔半径 (a₀)</span>
              </div>
              <div class="table-row">
                <span>1 m</span>
                <span>1</span>
                <span>10¹⁰</span>
                <span>1.890 × 10¹⁰</span>
              </div>
              <div class="table-row">
                <span>1 Å</span>
                <span>10⁻¹⁰</span>
                <span>1</span>
                <span>1.890</span>
              </div>
              <div class="table-row">
                <span>1 a₀</span>
                <span>5.292 × 10⁻¹¹</span>
                <span>0.529</span>
                <span>1</span>
              </div>
            </div>
          </div>

          <div class="conversion-category">
            <h3>磁场单位</h3>
            <div class="conversion-table">
              <div class="table-header">
                <span>单位</span>
                <span>特斯拉 (T)</span>
                <span>高斯 (G)</span>
                <span>奥斯特 (Oe)</span>
              </div>
              <div class="table-row">
                <span>1 T</span>
                <span>1</span>
                <span>10⁴</span>
                <span>7.958 × 10³</span>
              </div>
              <div class="table-row">
                <span>1 G</span>
                <span>10⁻⁴</span>
                <span>1</span>
                <span>0.796</span>
              </div>
              <div class="table-row">
                <span>1 Oe</span>
                <span>1.257 × 10⁻⁴</span>
                <span>1.257</span>
                <span>1</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="appendix-section">
        <h2>E. 常见晶体结构数据</h2>
        <div class="crystal-data">
          <div class="structure-category">
            <h3>立方晶系</h3>
            <div class="structure-table">
              <div class="structure-header">
                <span>结构</span>
                <span>晶格常数</span>
                <span>配位数</span>
                <span>堆积因子</span>
                <span>典型材料</span>
              </div>
              <div class="structure-row">
                <span>简单立方 (SC)</span>
                <span>a</span>
                <span>6</span>
                <span>0.524</span>
                <span>Po</span>
              </div>
              <div class="structure-row">
                <span>体心立方 (BCC)</span>
                <span>a</span>
                <span>8</span>
                <span>0.680</span>
                <span>Fe, Cr, W</span>
              </div>
              <div class="structure-row">
                <span>面心立方 (FCC)</span>
                <span>a</span>
                <span>12</span>
                <span>0.740</span>
                <span>Al, Cu, Au</span>
              </div>
              <div class="structure-row">
                <span>金刚石</span>
                <span>a</span>
                <span>4</span>
                <span>0.340</span>
                <span>C, Si, Ge</span>
              </div>
            </div>
          </div>

          <div class="structure-category">
            <h3>六方晶系</h3>
            <div class="structure-table">
              <div class="structure-header">
                <span>结构</span>
                <span>晶格常数</span>
                <span>配位数</span>
                <span>堆积因子</span>
                <span>典型材料</span>
              </div>
              <div class="structure-row">
                <span>六方密堆积 (HCP)</span>
                <span>a, c = 1.633a</span>
                <span>12</span>
                <span>0.740</span>
                <span>Zn, Mg, Ti</span>
              </div>
              <div class="structure-row">
                <span>纤锌矿</span>
                <span>a, c = 1.633a</span>
                <span>4</span>
                <span>0.340</span>
                <span>ZnS, GaN</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="appendix-section">
        <h2>F. 有用的积分公式</h2>
        <div class="integral-formulas">
          <div class="integral-category">
            <h3>高斯积分</h3>
            <div class="integral-list">
              <div class="integral-item">
                <span class="integral-expression">∫₋∞^∞ e^(-ax²) dx = √(π/a)</span>
                <span class="integral-condition">(a > 0)</span>
              </div>
              <div class="integral-item">
                <span class="integral-expression">∫₋∞^∞ x²e^(-ax²) dx = (1/2)√(π/a³)</span>
                <span class="integral-condition">(a > 0)</span>
              </div>
              <div class="integral-item">
                <span class="integral-expression">∫₋∞^∞ e^(-ax²+bx) dx = √(π/a)e^(b²/4a)</span>
                <span class="integral-condition">(a > 0)</span>
              </div>
            </div>
          </div>

          <div class="integral-category">
            <h3>费米积分</h3>
            <div class="integral-list">
              <div class="integral-item">
                <span class="integral-expression">Fₙ(η) = ∫₀^∞ xⁿ/(e^(x-η) + 1) dx</span>
                <span class="integral-condition">费米积分</span>
              </div>
              <div class="integral-item">
                <span class="integral-expression">F₁/₂(0) = π²/12</span>
                <span class="integral-condition">T = 0时</span>
              </div>
              <div class="integral-item">
                <span class="integral-expression">F₃/₂(0) = π⁴/60</span>
                <span class="integral-condition">T = 0时</span>
              </div>
            </div>
          </div>

          <div class="integral-category">
            <h3>球坐标积分</h3>
            <div class="integral-list">
              <div class="integral-item">
                <span class="integral-expression">∫₀^π sinθ dθ = 2</span>
                <span class="integral-condition">极角积分</span>
              </div>
              <div class="integral-item">
                <span class="integral-expression">∫₀^2π dφ = 2π</span>
                <span class="integral-condition">方位角积分</span>
              </div>
              <div class="integral-item">
                <span class="integral-expression">∫ d³k = ∫₀^∞ k²dk ∫₀^π sinθ dθ ∫₀^2π dφ = 4π∫₀^∞ k²dk</span>
                <span class="integral-condition">三维k空间</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="appendix-footer">
      <div class="footer-content">
        <h3>使用说明</h3>
        <p>
          本附录收集了凝聚态物理学习和研究中最常用的公式、常数和数学工具。
          建议将这些内容作为快速参考，在解决具体问题时查阅。
          所有数值均采用国际单位制(SI)，特殊情况会另行标注。
        </p>
        
        <div class="reference-note">
          <p><strong>数据来源：</strong></p>
          <ul>
            <li>NIST物理常数数据库 (2018 CODATA值)</li>
            <li>CRC物理化学手册</li>
            <li>Ashcroft & Mermin, Solid State Physics</li>
            <li>Kittel, Introduction to Solid State Physics</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// 组件逻辑
</script>

<style scoped>
.chapter-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: #2d3748;
}

.chapter-header {
  text-align: center;
  margin-bottom: 3rem;
  padding: 2rem 0;
  background: linear-gradient(135deg, #4a5568 0%, #2d3748 100%);
  border-radius: 1rem;
  color: white;
}

.chapter-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.chapter-subtitle {
  font-size: 1.25rem;
  opacity: 0.9;
  font-weight: 300;
}

.appendix-sections {
  display: flex;
  flex-direction: column;
  gap: 4rem;
}

.appendix-section {
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.appendix-section h2 {
  font-size: 1.75rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 2rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #4299e1;
}

.constants-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.constant-category {
  background: #f7fafc;
  border-radius: 0.75rem;
  padding: 1.5rem;
}

.constant-category h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1.5rem;
  text-align: center;
}

.constants-table {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.constant-row {
  display: grid;
  grid-template-columns: 2fr 1fr 1.5fr;
  gap: 1rem;
  padding: 0.75rem;
  background: white;
  border-radius: 0.5rem;
  align-items: center;
}

.constant-name {
  font-weight: 500;
  color: #2d3748;
}

.constant-symbol {
  font-family: 'Times New Roman', serif;
  font-style: italic;
  font-weight: 600;
  color: #4299e1;
  text-align: center;
}

.constant-value {
  font-family: 'Courier New', monospace;
  color: #4a5568;
  text-align: right;
}

.formulas-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
}

.formula-category {
  background: #f0fff4;
  border: 1px solid #9ae6b4;
  border-radius: 0.75rem;
  padding: 1.5rem;
}

.formula-category h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2f855a;
  margin-bottom: 1.5rem;
  text-align: center;
}

.formula-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.formula-item {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
}

.formula-name {
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.formula-expression {
  font-family: 'Times New Roman', serif;
  font-size: 1.1rem;
  color: #4a5568;
  background: #f7fafc;
  padding: 0.5rem;
  border-radius: 0.25rem;
  text-align: center;
}

.math-tools {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.tool-category {
  background: #ebf8ff;
  border: 1px solid #bee3f8;
  border-radius: 0.75rem;
  padding: 1.5rem;
}

.tool-category h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2c5282;
  margin-bottom: 1.5rem;
}

.tool-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.transform-pair {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.transform-item {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
}

.transform-name {
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.transform-formula {
  font-family: 'Times New Roman', serif;
  font-size: 1rem;
  color: #4a5568;
  text-align: center;
}

.properties {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
}

.properties h4 {
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.properties ul {
  list-style: none;
  padding: 0;
}

.properties li {
  padding: 0.25rem 0;
  color: #4a5568;
  position: relative;
  padding-left: 1rem;
}

.properties li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: #4299e1;
  font-weight: bold;
}

.green-function-def {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.definition,
.solutions {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
}

.definition h4,
.solutions h4 {
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.definition p {
  font-family: 'Times New Roman', serif;
  color: #4a5568;
  text-align: center;
}

.solution-item {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.solution-name {
  font-weight: 600;
  color: #2d3748;
}

.solution-formula {
  font-family: 'Times New Roman', serif;
  color: #4a5568;
  background: #f7fafc;
  padding: 0.5rem;
  border-radius: 0.25rem;
}

.special-functions {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
}

.function-item {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
}

.function-item h4 {
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.function-item p {
  font-family: 'Times New Roman', serif;
  color: #4a5568;
  margin-bottom: 0.5rem;
}

.conversion-tables {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.conversion-category {
  background: #fffaf0;
  border: 1px solid #fbd38d;
  border-radius: 0.75rem;
  padding: 1.5rem;
}

.conversion-category h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #c05621;
  margin-bottom: 1.5rem;
  text-align: center;
}

.conversion-table {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.table-header {
  display: grid;
  grid-template-columns: 1.5fr repeat(3, 1fr);
  gap: 1rem;
  padding: 0.75rem;
  background: #fed7d7;
  border-radius: 0.5rem;
  font-weight: 600;
  color: #2d3748;
}

.table-row {
  display: grid;
  grid-template-columns: 1.5fr repeat(3, 1fr);
  gap: 1rem;
  padding: 0.75rem;
  background: white;
  border-radius: 0.5rem;
  align-items: center;
}

.table-row span:first-child {
  font-weight: 500;
  color: #2d3748;
}

.table-row span:not(:first-child) {
  font-family: 'Courier New', monospace;
  color: #4a5568;
  text-align: center;
}

.crystal-data {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.structure-category {
  background: #f0f4f8;
  border: 1px solid #cbd5e0;
  border-radius: 0.75rem;
  padding: 1.5rem;
}

.structure-category h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1.5rem;
  text-align: center;
}

.structure-table {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.structure-header {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1fr 1.5fr;
  gap: 1rem;
  padding: 0.75rem;
  background: #4299e1;
  color: white;
  border-radius: 0.5rem;
  font-weight: 600;
}

.structure-row {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1fr 1.5fr;
  gap: 1rem;
  padding: 0.75rem;
  background: white;
  border-radius: 0.5rem;
  align-items: center;
}

.structure-row span:first-child {
  font-weight: 500;
  color: #2d3748;
}

.structure-row span:not(:first-child) {
  color: #4a5568;
  text-align: center;
}

.integral-formulas {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.integral-category {
  background: #f7fafc;
  border: 1px solid #e2e8f0;
  border-radius: 0.75rem;
  padding: 1.5rem;
}

.integral-category h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1.5rem;
  text-align: center;
}

.integral-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.integral-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: white;
  border-radius: 0.5rem;
}

.integral-expression {
  font-family: 'Times New Roman', serif;
  font-size: 1.1rem;
  color: #2d3748;
}

.integral-condition {
  font-size: 0.9rem;
  color: #718096;
  font-style: italic;
}

.appendix-footer {
  margin-top: 4rem;
  background: #2d3748;
  color: white;
  border-radius: 1rem;
  padding: 2rem;
}

.footer-content h3 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.footer-content p {
  margin-bottom: 1.5rem;
  opacity: 0.9;
}

.reference-note p {
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.reference-note ul {
  list-style: none;
  padding: 0;
}

.reference-note li {
  padding: 0.25rem 0;
  position: relative;
  padding-left: 1rem;
  opacity: 0.8;
}

.reference-note li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: #4299e1;
  font-weight: bold;
}

@media (max-width: 768px) {
  .chapter-content {
    padding: 1rem;
  }
  
  .chapter-title {
    font-size: 2rem;
  }
  
  .constants-grid,
  .formulas-grid {
    grid-template-columns: 1fr;
  }
  
  .constant-row {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 0.5rem;
  }
  
  .transform-pair,
  .green-function-def,
  .special-functions {
    grid-template-columns: 1fr;
  }
  
  .table-header,
  .table-row,
  .structure-header,
  .structure-row {
    grid-template-columns: 1fr;
    text-align: center;
  }
  
  .integral-item {
    flex-direction: column;
    gap: 0.5rem;
    text-align: center;
  }
}
</style>