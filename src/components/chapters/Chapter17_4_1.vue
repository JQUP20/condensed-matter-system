<template>
  <div class="chapter-content">
    <div class="content-header">
      <h1>17.4.1 全息对偶</h1>
      <p class="subtitle">SYK模型与AdS₂/CFT₁对偶关系</p>
    </div>

    <div class="content-body">
      <!-- 核心概念 -->
      <section class="concept-section">
        <h2>🎯 全息对偶的基本概念</h2>
        <div class="concept-card">
          <h3>什么是全息对偶？</h3>
          <p>全息对偶是理论物理中的一个深刻概念：</p>
          <ul>
            <li><strong>维度对应</strong>：d维边界理论 ↔ (d+1)维体理论</li>
            <li><strong>强弱对偶</strong>：强耦合边界 ↔ 弱耦合重力</li>
            <li><strong>信息等价</strong>：两个理论包含相同的物理信息</li>
            <li><strong>计算工具</strong>：可以用重力计算强关联问题</li>
          </ul>
        </div>

        <div class="concept-card">
          <h3>AdS/CFT对偶的历史</h3>
          <div class="history-content">
            <h4>Maldacena猜想 (1997)</h4>
            <p>AdS₅×S⁵上的IIB弦理论 ↔ 4维N=4超对称Yang-Mills理论</p>
            
            <h4>发展历程</h4>
            <ul>
              <li><strong>1998-1999</strong>：Witten, Gubser等建立字典</li>
              <li><strong>2000s</strong>：应用到凝聚态物理</li>
              <li><strong>2010s</strong>：SYK模型的发现</li>
              <li><strong>现在</strong>：量子信息与全息的结合</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- SYK与AdS₂对偶 -->
      <section class="syk-ads-section">
        <h2>🌌 SYK模型与AdS₂重力</h2>
        
        <div class="ads-card">
          <h3>对偶关系的建立</h3>
          <div class="duality-content">
            <h4>边界理论：SYK模型</h4>
            <div class="formula">
              $$H = \sum_{1 \leq i < j < k < l \leq N} J_{ijkl} \chi_i \chi_j \chi_k \chi_l$$
            </div>
            
            <h4>体理论：AdS₂重力</h4>
            <div class="formula">
              $$S = \frac{1}{16\pi G} \int d^2x \sqrt{-g} (R - 2\Lambda)$$
            </div>
            <p>其中$\Lambda = -1/L^2$，$L$是AdS半径。</p>
            
            <h4>对偶字典</h4>
            <table class="duality-table">
              <tr>
                <th>SYK模型</th>
                <th>AdS₂重力</th>
              </tr>
              <tr>
                <td>费米子算符 $\chi_i$</td>
                <td>标量场 $\phi$</td>
              </tr>
              <tr>
                <td>格林函数 $G(\tau)$</td>
                <td>边界-体传播子</td>
              </tr>
              <tr>
                <td>配分函数 $Z$</td>
                <td>重力路径积分</td>
              </tr>
              <tr>
                <td>能量本征态</td>
                <td>AdS₂中的几何</td>
              </tr>
            </table>
          </div>
        </div>

        <div class="ads-card">
          <h3>AdS₂几何</h3>
          <div class="geometry-content">
            <h4>度规</h4>
            <div class="formula">
              $$ds^2 = L^2 \frac{-dt^2 + dr^2}{r^2}$$
            </div>
            
            <h4>Poincaré坐标</h4>
            <div class="formula">
              $$ds^2 = L^2 \frac{-dt^2 + dz^2}{z^2}$$
            </div>
            <p>边界位于$z = 0$，SYK模型"生活"在这个边界上。</p>
            
            <h4>全局坐标</h4>
            <div class="formula">
              $$ds^2 = L^2 (-\cosh^2 \rho \, dt^2 + d\rho^2)$$
            </div>
            
            <h4>几何性质</h4>
            <ul>
              <li>负常曲率：$R = -2/L^2$</li>
              <li>双曲几何</li>
              <li>共形边界</li>
              <li>时间平移不变性</li>
            </ul>
          </div>
        </div>

        <div class="ads-card">
          <h3>黑洞解</h3>
          <div class="blackhole-content">
            <h4>AdS₂黑洞度规</h4>
            <div class="formula">
              $$ds^2 = -f(r) dt^2 + \frac{dr^2}{f(r)}$$
            </div>
            <p>其中$f(r) = r^2/L^2 - M$，$M$是黑洞质量。</p>
            
            <h4>Hawking温度</h4>
            <div class="formula">
              $$T_H = \frac{r_h}{2\pi L^2} = \frac{\sqrt{M}}{2\pi L}$$
            </div>
            
            <h4>与SYK的对应</h4>
            <ul>
              <li>黑洞温度 ↔ SYK模型温度</li>
              <li>黑洞熵 ↔ SYK模型熵</li>
              <li>Hawking辐射 ↔ 热涨落</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- 全息字典 -->
      <section class="dictionary-section">
        <h2>📖 全息字典</h2>
        
        <div class="dictionary-card">
          <h3>算符对应</h3>
          <div class="operator-correspondence">
            <h4>边界算符</h4>
            <p>SYK模型中的费米子双线性算符：</p>
            <div class="formula">
              $$O_{\Delta}(t) = \sum_i \chi_i(t) \partial_t^{\Delta-1/2} \chi_i(t)$$
            </div>
            
            <h4>体场</h4>
            <p>AdS₂中质量为$m$的标量场：</p>
            <div class="formula">
              $$m^2 L^2 = \Delta(\Delta - 1)$$
            </div>
            
            <h4>边界条件</h4>
            <div class="formula">
              $$\phi(z, t) \sim z^{\Delta} O_{\Delta}(t) + z^{1-\Delta} \langle O_{\Delta}(t) \rangle$$
            </div>
          </div>
        </div>

        <div class="dictionary-card">
          <h3>关联函数对应</h3>
          <div class="correlation-correspondence">
            <h4>两点函数</h4>
            <p>SYK模型的格林函数：</p>
            <div class="formula">
              $$G(t_1, t_2) = \langle T \chi_i(t_1) \chi_i(t_2) \rangle$$
            </div>
            
            <p>对应AdS₂中的边界-边界传播子：</p>
            <div class="formula">
              $$G(t_1, t_2) = \int_{\text{AdS}_2} d^2x \sqrt{g} \, G_{\text{bulk}}(x; t_1) G_{\text{bulk}}(x; t_2)$$
            </div>
            
            <h4>高阶关联函数</h4>
            <p>通过Witten图计算：</p>
            <ul>
              <li>树图 → 经典重力</li>
              <li>圈图 → 量子重力修正</li>
              <li>1/N展开 → 重力耦合常数展开</li>
            </ul>
          </div>
        </div>

        <div class="dictionary-card">
          <h3>热力学对应</h3>
          <div class="thermodynamic-correspondence">
            <h4>配分函数</h4>
            <div class="formula">
              $$Z_{\text{SYK}} = Z_{\text{AdS}_2 \text{ gravity}}$$
            </div>
            
            <h4>自由能</h4>
            <div class="formula">
              $$F = -T \ln Z = S_{\text{on-shell}}$$
            </div>
            
            <h4>熵的计算</h4>
            <ul>
              <li><strong>SYK侧</strong>：统计力学计算</li>
              <li><strong>重力侧</strong>：Bekenstein-Hawking公式</li>
              <li><strong>结果</strong>：完美匹配</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- 量子信息视角 -->
      <section class="quantum-info-section">
        <h2>🔬 量子信息视角</h2>
        
        <div class="info-card">
          <h3>纠缠熵</h3>
          <div class="entanglement-content">
            <h4>Ryu-Takayanagi公式</h4>
            <p>边界区域A的纠缠熵等于体中极小曲面的面积：</p>
            <div class="formula">
              $$S_A = \frac{\text{Area}(\gamma_A)}{4G}$$
            </div>
            
            <h4>在AdS₂中的应用</h4>
            <p>由于AdS₂的特殊性，需要考虑：</p>
            <ul>
              <li>边界是一维的</li>
              <li>"面积"变成长度</li>
              <li>需要正规化处理</li>
            </ul>
            
            <h4>SYK模型的纠缠</h4>
            <div class="formula">
              $$S_A = c \ln |A| + \text{const}$$
            </div>
            <p>其中$c$是中心荷。</p>
          </div>
        </div>

        <div class="info-card">
          <h3>量子纠错</h3>
          <div class="error-correction">
            <h4>全息纠错码</h4>
            <p>AdS/CFT对偶天然实现了量子纠错：</p>
            <ul>
              <li>边界信息冗余编码</li>
              <li>体中的局域扰动可以恢复</li>
              <li>纠错阈值与相变对应</li>
            </ul>
            
            <h4>SYK模型中的应用</h4>
            <ul>
              <li>信息的快速扰乱</li>
              <li>量子纠错的极限</li>
              <li>黑洞信息悖论的新视角</li>
            </ul>
          </div>
        </div>

        <div class="info-card">
          <h3>虫洞与量子隐形传态</h3>
          <div class="wormhole-content">
            <h4>ER=EPR猜想</h4>
            <p>Einstein-Rosen桥 = Einstein-Podolsky-Rosen纠缠</p>
            
            <h4>可穿越虫洞</h4>
            <p>通过负能量使虫洞可穿越：</p>
            <div class="formula">
              $$\langle T_{\mu\nu} \rangle < 0$$
            </div>
            
            <h4>SYK模型的实现</h4>
            <ul>
              <li>两个SYK模型的纠缠</li>
              <li>虫洞几何的涌现</li>
              <li>信息传输的全息描述</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- 计算技巧 -->
      <section class="calculation-section">
        <h2>⚙️ 计算技巧</h2>
        
        <div class="calculation-card">
          <h3>Witten图</h3>
          <div class="witten-diagram">
            <h4>基本思想</h4>
            <p>在AdS空间中计算费曼图：</p>
            <ul>
              <li>顶点在体中</li>
              <li>外腿连接到边界</li>
              <li>积分覆盖整个AdS空间</li>
            </ul>
            
            <h4>传播子</h4>
            <div class="formula">
              $$G_{\Delta}(z_1, t_1; z_2, t_2) = \frac{C_{\Delta}}{(z_1 z_2)^{\Delta}} \frac{1}{|t_{12}|^{2\Delta}}$$
            </div>
            
            <h4>边界-体传播子</h4>
            <div class="formula">
              $$K_{\Delta}(z, t; t') = \frac{C_{\Delta}}{z^{\Delta}} \frac{1}{|t - t'|^{2\Delta}}$$
            </div>
          </div>
        </div>

        <div class="calculation-card">
          <h3>鞍点方法</h3>
          <div class="saddle-point">
            <h4>重力路径积分</h4>
            <div class="formula">
              $$Z = \int \mathcal{D}g \, e^{-S[g]}$$
            </div>
            
            <h4>鞍点近似</h4>
            <p>在大N极限下，主导贡献来自经典解：</p>
            <div class="formula">
              $$Z \approx e^{-S_{\text{classical}}}$$
            </div>
            
            <h4>量子修正</h4>
            <p>1/N修正对应重力的量子修正：</p>
            <ul>
              <li>一圈修正 → $1/N$修正</li>
              <li>高阶圈 → 高阶$1/N$修正</li>
            </ul>
          </div>
        </div>

        <div class="calculation-card">
          <h3>共形对称性</h3>
          <div class="conformal-symmetry">
            <h4>SL(2,R)对称性</h4>
            <p>SYK模型在低能极限具有共形对称性：</p>
            <div class="formula">
              $$t \to \frac{at + b}{ct + d}, \quad ad - bc = 1$$
            </div>
            
            <h4>AdS₂的等距群</h4>
            <p>AdS₂的等距群也是SL(2,R)：</p>
            <ul>
              <li>时间平移</li>
              <li>标度变换</li>
              <li>特殊共形变换</li>
            </ul>
            
            <h4>Ward恒等式</h4>
            <p>共形对称性导致关联函数的约束：</p>
            <div class="formula">
              $$\langle O(t_1) O(t_2) \rangle \sim |t_1 - t_2|^{-2\Delta}$$
            </div>
          </div>
        </div>
      </section>

      <!-- 应用与推广 -->
      <section class="applications-section">
        <h2>🌟 应用与推广</h2>
        
        <div class="application-card">
          <h3>高维推广</h3>
          <div class="higher-dim">
            <h4>AdS₃/CFT₂</h4>
            <ul>
              <li>二维共形场论</li>
              <li>Virasoro代数</li>
              <li>中心荷的计算</li>
            </ul>
            
            <h4>AdS₄/CFT₃</h4>
            <ul>
              <li>三维强关联系统</li>
              <li>量子相变</li>
              <li>奇异金属</li>
            </ul>
            
            <h4>AdS₅/CFT₄</h4>
            <ul>
              <li>四维规范理论</li>
              <li>夸克禁闭</li>
              <li>QCD的全息模型</li>
            </ul>
          </div>
        </div>

        <div class="application-card">
          <h3>凝聚态应用</h3>
          <div class="condensed-matter">
            <h4>奇异金属</h4>
            <p>高温超导体正常态的性质：</p>
            <ul>
              <li>线性电阻率</li>
              <li>非费米液体行为</li>
              <li>全息模型的解释</li>
            </ul>
            
            <h4>量子临界点</h4>
            <p>连续相变的全息描述：</p>
            <ul>
              <li>标度行为</li>
              <li>临界指数</li>
              <li>普适性类</li>
            </ul>
          </div>
        </div>

        <div class="application-card">
          <h3>黑洞物理</h3>
          <div class="black-hole-physics">
            <h4>信息悖论</h4>
            <ul>
              <li>信息的保存与丢失</li>
              <li>Page曲线</li>
              <li>岛屿公式</li>
            </ul>
            
            <h4>黑洞内部</h4>
            <ul>
              <li>防火墙悖论</li>
              <li>互补性原理</li>
              <li>全息描述</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- 未来展望 -->
      <section class="future-section">
        <h2>🔮 未来展望</h2>
        
        <div class="future-card">
          <h3>理论发展</h3>
          <ul>
            <li><strong>量子引力</strong>：更深入理解时空的量子性质</li>
            <li><strong>全息原理</strong>：推广到更一般的时空</li>
            <li><strong>量子信息</strong>：纠缠与几何的深层联系</li>
            <li><strong>机器学习</strong>：AI辅助的全息计算</li>
          </ul>
        </div>

        <div class="future-card">
          <h3>实验验证</h3>
          <ul>
            <li><strong>冷原子</strong>：实现SYK模型的量子模拟</li>
            <li><strong>量子计算</strong>：验证全息对偶的预言</li>
            <li><strong>凝聚态</strong>：寻找全息材料</li>
            <li><strong>天体物理</strong>：黑洞的观测验证</li>
          </ul>
        </div>

        <div class="future-card">
          <h3>技术应用</h3>
          <ul>
            <li><strong>量子计算</strong>：全息纠错码</li>
            <li><strong>材料设计</strong>：强关联材料的理论指导</li>
            <li><strong>信息处理</strong>：量子信息的新范式</li>
          </ul>
        </div>
      </section>

      <!-- 总结 -->
      <section class="summary-section">
        <h2>📝 总结</h2>
        <div class="summary-card">
          <p>SYK模型与AdS₂重力的全息对偶关系代表了理论物理的重大突破：</p>
          <ul>
            <li><strong>理论意义</strong>：提供了量子引力的可控理论实验室</li>
            <li><strong>计算工具</strong>：将强关联问题转化为几何问题</li>
            <li><strong>概念创新</strong>：深化了对时空、信息和纠缠的理解</li>
            <li><strong>应用前景</strong>：从黑洞物理到凝聚态物理的广泛应用</li>
          </ul>
          <p>这一对偶关系不仅解决了具体的物理问题，更重要的是为我们提供了一个全新的视角来理解自然界的基本规律。通过SYK模型，我们能够以前所未有的精度研究量子引力、黑洞物理和强关联系统，为未来的理论发展和实验验证奠定了坚实的基础。</p>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chapter17_4_1',
  mounted() {
    this.$nextTick(() => {
      if (window.renderMathInElement) {
        window.renderMathInElement(this.$el, {
          delimiters: [
            {left: '$$', right: '$$', display: true},
            {left: '$', right: '$', display: false}
          ],
          throwOnError: false
        });
      }
    });
  },
  updated() {
    this.$nextTick(() => {
      if (window.renderMathInElement) {
        window.renderMathInElement(this.$el, {
          delimiters: [
            {left: '$$', right: '$$', display: true},
            {left: '$', right: '$', display: false}
          ],
          throwOnError: false
        });
      }
    });
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

.content-header {
  text-align: center;
  margin-bottom: 30px;
  padding: 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 10px;
}

.content-header h1 {
  margin: 0 0 10px 0;
  font-size: 2.5em;
  font-weight: bold;
}

.subtitle {
  font-size: 1.2em;
  opacity: 0.9;
  margin: 0;
}

.content-body {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

section {
  background: white;
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  border-left: 4px solid #667eea;
}

section h2 {
  color: #667eea;
  margin-bottom: 20px;
  font-size: 1.5em;
  display: flex;
  align-items: center;
  gap: 10px;
}

.concept-card, .ads-card, .dictionary-card, .info-card, 
.calculation-card, .application-card, .future-card, .summary-card {
  background: #f8f9fa;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 15px;
  border-left: 3px solid #28a745;
}

.concept-card h3, .ads-card h3, .dictionary-card h3, 
.info-card h3, .calculation-card h3, .application-card h3, 
.future-card h3, .summary-card h3 {
  color: #495057;
  margin-bottom: 15px;
  font-size: 1.2em;
}

.formula {
  background: white;
  padding: 15px;
  border-radius: 5px;
  margin: 10px 0;
  text-align: center;
  border: 1px solid #dee2e6;
  font-size: 1.1em;
}

.duality-table {
  width: 100%;
  border-collapse: collapse;
  margin: 15px 0;
  background: white;
  border-radius: 5px;
  overflow: hidden;
}

.duality-table th, .duality-table td {
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid #dee2e6;
}

.duality-table th {
  background: #f8f9fa;
  font-weight: 600;
  color: #495057;
}

.history-content h4, .duality-content h4, .geometry-content h4,
.blackhole-content h4, .operator-correspondence h4, .correlation-correspondence h4,
.thermodynamic-correspondence h4, .entanglement-content h4, .error-correction h4,
.wormhole-content h4, .witten-diagram h4, .saddle-point h4,
.conformal-symmetry h4, .higher-dim h4, .condensed-matter h4,
.black-hole-physics h4 {
  color: #6c757d;
  margin-top: 15px;
  margin-bottom: 8px;
}

ul {
  padding-left: 20px;
}

li {
  margin-bottom: 8px;
}

strong {
  color: #495057;
  font-weight: 600;
}

.syk-ads-section {
  border-left-color: #dc3545;
}

.dictionary-section {
  border-left-color: #fd7e14;
}

.quantum-info-section {
  border-left-color: #6f42c1;
}

.calculation-section {
  border-left-color: #e83e8c;
}

.applications-section {
  border-left-color: #20c997;
}

.future-section {
  border-left-color: #ffc107;
}

.ads-card {
  border-left-color: #dc3545;
}

.dictionary-card {
  border-left-color: #fd7e14;
}

.info-card {
  border-left-color: #6f42c1;
}

.calculation-card {
  border-left-color: #e83e8c;
}

.application-card {
  border-left-color: #20c997;
}

.future-card {
  border-left-color: #ffc107;
}

.summary-card {
  border-left-color: #17a2b8;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
}

@media (max-width: 768px) {
  .chapter-content {
    padding: 15px;
  }
  
  .content-header h1 {
    font-size: 2em;
  }
  
  section {
    padding: 20px;
  }
  
  .duality-table {
    font-size: 0.9em;
  }
}
</style>