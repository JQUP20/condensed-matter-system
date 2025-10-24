<template>
  <div class="chapter-content">
    <div class="chapter-header">
      <h1 class="chapter-title">5.4 一级相变与电磁场涨落导引的一级相变</h1>
      <div class="chapter-meta">
        <span class="chapter-tag">一级相变</span>
        <span class="chapter-tag">电磁场涨落</span>
        <span class="chapter-tag">相变动力学</span>
        <span class="reading-time">阅读时间：40分钟</span>
      </div>
    </div>

    <div class="introduction">
      <h2>引言</h2>
      <p class="lead-text">
        一级相变是凝聚态物理中的重要现象，其特征是在相变点处存在潜热和密度的不连续跳跃。
        与二级相变不同，一级相变通常涉及相分离、成核与生长等复杂的动力学过程。
        电磁场涨落在某些情况下可以诱导一级相变，这在超导体、磁性材料和液晶等系统中都有重要应用。
        本章将深入探讨一级相变的基本理论、电磁场涨落的作用机制，以及相关的实验现象和理论模型。
      </p>
    </div>

    <div class="content-section">
      <h2>一级相变的基本特征</h2>
      
      <div class="phase-transition-basics">
        <div class="transition-types">
          <div class="transition-card first-order">
            <h3>🔄 一级相变特征</h3>
            <div class="transition-content">
              <div class="characteristics">
                <div class="char-item">
                  <h4>热力学特征</h4>
                  <div class="char-content">
                    <p><strong>自由能不连续性：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\frac{\partial G}{\partial T} \text{不连续}, \quad \frac{\partial G}{\partial P} \text{不连续}" :inline="false" />
                    </div>
                    
                    <p><strong>Clausius-Clapeyron方程：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\frac{dP}{dT} = \frac{L}{T\Delta V}" :inline="false" />
                    </div>
                  </div>
                </div>
                
                <div class="char-item">
                  <h4>密度跳跃</h4>
                  <div class="char-content">
                    <p><strong>密度不连续：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\Delta\rho = \rho_2 - \rho_1 \neq 0" :inline="false" />
                    </div>
                  </div>
                </div>
                
                <div class="char-item">
                  <h4>Landau理论描述</h4>
                  <div class="char-content">
                    <p><strong>自由能展开：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="F = F_0 + a\eta^2 + b\eta^4 + c\eta^6 + \ldots" :inline="false" />
                    </div>
                    
                    <p><strong>系数条件：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="a > 0, \quad b < 0, \quad c > 0" :inline="false" />
                    </div>
                    
                    <p><strong>平衡条件：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\frac{\partial F}{\partial \eta} = 0: \quad 2a\eta + 4b\eta^3 + 6c\eta^5 = 0" :inline="false" />
                    </div>
                    
                    <p><strong>相变点：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="T_c: \quad \eta = 0 \text{与} \eta \neq 0 \text{解共存}" :inline="false" />
                    </div>
                  </div>
                </div>
                
                <div class="char-item">
                  <h4>Maxwell构造</h4>
                  <div class="char-content">
                    <p><strong>等面积法则：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\int_{V_1}^{V_2} (P - P_{\text{coex}}) dV = 0" :inline="false" />
                    </div>
                    
                    <p><strong>化学势相等：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\mu_1(T, P_{\text{coex}}) = \mu_2(T, P_{\text{coex}})" :inline="false" />
                    </div>
                    
                    <p><strong>共存曲线：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="P_{\text{coex}}(T) \text{：相图中的共存曲线}" :inline="false" />
                    </div>
                    
                    <p><strong>临界点条件：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\frac{\partial P}{\partial V} = 0, \quad \frac{\partial^2 P}{\partial V^2} = 0" :inline="false" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>成核与生长理论</h2>
      
      <div class="nucleation-growth">
        <div class="nucleation-theory">
          <div class="theory-card nucleation">
            <h3>🌱 经典成核理论</h3>
            <div class="theory-content">
              <div class="nucleation-basics">
                <div class="basic-item">
                  <h4>自由能变化</h4>
                  <div class="basic-content">
                    <p><strong>总自由能变化：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\Delta G = -\frac{4\pi r^3}{3}\Delta g + 4\pi r^2 \sigma" :inline="false" />
                    </div>
                    
                    <p><strong>临界半径：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="r_c = \frac{2\sigma}{\Delta g}" :inline="false" />
                    </div>
                    
                    <p><strong>成核势垒：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\Delta G_c = \frac{16\pi\sigma^3}{3(\Delta g)^2}" :inline="false" />
                    </div>
                    
                    <p><strong>成核速率：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="J = J_0 \exp\left(-\frac{\Delta G_c}{k_B T}\right)" :inline="false" />
                    </div>
                  </div>
                </div>
                
                <div class="basic-item">
                  <h4>生长动力学</h4>
                  <div class="basic-content">
                    <p><strong>界面移动速度：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="v = M \frac{\Delta\mu}{k_B T}" :inline="false" />
                    </div>
                    
                    <p><strong>扩散控制生长：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="r(t) \propto \sqrt{Dt}" :inline="false" />
                    </div>
                    
                    <p><strong>界面控制生长：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="r(t) \propto t" :inline="false" />
                    </div>
                    
                    <p><strong>LSW理论（Ostwald熟化）：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\langle r \rangle^3 - \langle r_0 \rangle^3 = \frac{8\sigma V_m D c_\infty}{9RT} t" :inline="false" />
                    </div>
                  </div>
                </div>
                
                <div class="basic-item">
                  <h4>Cahn-Hilliard方程</h4>
                  <div class="basic-content">
                    <p><strong>扩散方程：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\frac{\partial c}{\partial t} = \nabla \cdot \left[ M \nabla \left( \frac{\delta F}{\delta c} \right) \right]" :inline="false" />
                    </div>
                    
                    <p><strong>化学势：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\frac{\partial c}{\partial t} = M \nabla^2 \left[ \frac{\partial^2 f}{\partial c^2} c - \kappa \nabla^2 c \right]" :inline="false" />
                    </div>
                    
                    <p><strong>特征长度演化：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="L(t) \propto t^{1/3} \quad \text{(后期阶段)}" :inline="false" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>电磁场涨落效应</h2>
      
      <div class="electromagnetic-fluctuations">
        <div class="fluctuation-theory">
          <div class="theory-card em-fluctuations">
            <h3>⚡ 量子电磁场涨落</h3>
            <div class="theory-content">
              <div class="em-basics">
                <div class="em-item">
                  <h4>量子场论基础</h4>
                  <div class="em-content">
                    <p><strong>正则对易关系：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="[\hat{A}_i(\vec{r}), \hat{\Pi}_j(\vec{r}')] = i\hbar \delta_{ij} \delta(\vec{r} - \vec{r}')" :inline="false" />
                    </div>
                    
                    <p><strong>场算符展开：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\hat{A}(\vec{r}) = \sum_{\vec{k},\lambda} \sqrt{\frac{\hbar}{2\epsilon_0 V \omega_k}} \left( a_{\vec{k}\lambda} e^{i\vec{k}\cdot\vec{r}} + a_{\vec{k}\lambda}^\dagger e^{-i\vec{k}\cdot\vec{r}} \right) \vec{e}_{\vec{k}\lambda}" :inline="false" />
                    </div>
                    
                    <p><strong>真空涨落：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\langle 0 | \hat{E}^2 | 0 \rangle = \sum_{\vec{k},\lambda} \frac{\hbar\omega_k}{2\epsilon_0 V}" :inline="false" />
                    </div>
                    
                    <p><strong>Casimir效应：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="F_{\text{Casimir}} = -\frac{\hbar c \pi^2}{240 a^4}" :inline="false" />
                    </div>
                  </div>
                </div>
                
                <div class="em-item">
                  <h4>介电响应</h4>
                  <div class="em-content">
                    <p><strong>介电函数：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\epsilon(\omega, \vec{k}) = 1 + \frac{\omega_p^2}{\omega_0^2 - \omega^2 - i\gamma\omega}" :inline="false" />
                    </div>
                    
                    <p><strong>色散关系：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\omega^2 = c^2 k^2 / \epsilon(\omega)" :inline="false" />
                    </div>
                    
                    <p><strong>等离子体频率：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\omega_p^2 = \frac{ne^2}{\epsilon_0 m}" :inline="false" />
                    </div>
                    
                    <p><strong>屏蔽效应：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="V(r) = \frac{e^2}{4\pi\epsilon_0 r} e^{-r/\lambda_D}" :inline="false" />
                    </div>
                  </div>
                </div>
                
                <div class="em-item">
                  <h4>涨落-耗散定理</h4>
                  <div class="em-content">
                    <p><strong>关联函数：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\langle A(t)B(0) \rangle = \frac{k_B T}{\omega} \text{Im}[\chi_{AB}(\omega)]" :inline="false" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import KatexElement from '../KatexElement.vue'

const router = useRouter()

const navigateToSubtopic = (subtopic) => {
  router.push(`/chapter/5.4/${subtopic}`)
}
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
  border-radius: 15px;
  color: white;
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
}

.chapter-title {
  font-size: 2.5em;
  margin-bottom: 20px;
  font-weight: 700;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
}

.chapter-meta {
  display: flex;
  justify-content: center;
  gap: 15px;
  flex-wrap: wrap;
  margin-top: 20px;
}

.chapter-tag {
  background: rgba(255,255,255,0.2);
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.9em;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255,255,255,0.3);
}

.reading-time {
  background: rgba(255,255,255,0.15);
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.9em;
  backdrop-filter: blur(10px);
}

.introduction {
  background: #f8f9fa;
  padding: 30px;
  border-radius: 15px;
  margin-bottom: 40px;
  border-left: 5px solid #667eea;
}

.lead-text {
  font-size: 1.1em;
  color: #555;
  margin: 0;
  text-align: justify;
}

.content-section {
  margin-bottom: 50px;
}

.content-section h2 {
  color: #2c3e50;
  font-size: 2em;
  margin-bottom: 30px;
  padding-bottom: 10px;
  border-bottom: 3px solid #667eea;
  position: relative;
}

.content-section h2::after {
  content: '';
  position: absolute;
  bottom: -3px;
  left: 0;
  width: 50px;
  height: 3px;
  background: #764ba2;
}

.phase-transition-basics,
.nucleation-growth,
.electromagnetic-fluctuations {
  display: grid;
  gap: 30px;
}

.transition-types,
.nucleation-theory,
.fluctuation-theory {
  display: grid;
  gap: 25px;
}

.transition-card,
.theory-card {
  background: white;
  border-radius: 15px;
  padding: 30px;
  box-shadow: 0 8px 25px rgba(0,0,0,0.1);
  border: 1px solid #e9ecef;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.transition-card:hover,
.theory-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 35px rgba(0,0,0,0.15);
}

.transition-card h3,
.theory-card h3 {
  color: #2c3e50;
  font-size: 1.5em;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.characteristics,
.nucleation-basics,
.em-basics {
  display: grid;
  gap: 25px;
}

.char-item,
.basic-item,
.em-item {
  background: #f8f9fa;
  padding: 20px;
  border-radius: 10px;
  border-left: 4px solid #667eea;
}

.char-item h4,
.basic-item h4,
.em-item h4 {
  color: #2c3e50;
  font-size: 1.2em;
  margin-bottom: 15px;
  font-weight: 600;
}

.char-content,
.basic-content,
.em-content {
  color: #555;
}

.char-content p,
.basic-content p,
.em-content p {
  margin-bottom: 10px;
  font-weight: 500;
}

.formula-block {
  background: white;
  padding: 15px;
  border-radius: 8px;
  margin: 10px 0;
  border: 1px solid #dee2e6;
  box-shadow: 0 2px 5px rgba(0,0,0,0.05);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .chapter-content {
    padding: 15px;
  }
  
  .chapter-title {
    font-size: 2em;
  }
  
  .chapter-meta {
    flex-direction: column;
    align-items: center;
  }
  
  .transition-card,
  .theory-card {
    padding: 20px;
  }
}
</style>