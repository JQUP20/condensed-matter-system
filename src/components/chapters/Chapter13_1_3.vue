<template>
  <div class="chapter-content">
    <h1>13.1.3 零电阻与临界电流</h1>
    
    <section class="zero-resistance">
      <h2>零电阻现象</h2>
      
      <div class="resistance-measurement">
        <h3>电阻的消失</h3>
        <p>超导态下，材料的直流电阻完全消失：</p>
        <katex-element :expression="`\\rho_{dc} = 0 \\quad (T < T_c)`"></katex-element>
        
        <div class="measurement-precision">
          <h4>测量精度</h4>
          <p>现代实验表明，超导体的电阻率上限为：</p>
          <katex-element :expression="`\\rho < 10^{-23} \\Omega \\cdot \\text{cm}`"></katex-element>
          <p>这比最好的正常导体小约<katex-element :expression="`10^{17}`"></katex-element>倍！</p>
        </div>
      </div>
      
      <div class="persistent-currents">
        <h3>持续电流</h3>
        <p>超导环中的电流可以无损耗地持续流动：</p>
        
        <div class="current-decay">
          <h4>电流衰减时间</h4>
          <p>如果存在微小电阻<katex-element :expression="`R`"></katex-element>，电流衰减为：</p>
          <katex-element :expression="`I(t) = I_0 e^{-t/\\tau}`"></katex-element>
          <p>其中时间常数：</p>
          <katex-element :expression="`\\tau = \\frac{L}{R}`"></katex-element>
          
          <div class="experimental-results">
            <p><strong>实验结果：</strong>观察到的衰减时间超过<katex-element :expression="`10^5`"></katex-element>年！</p>
          </div>
        </div>
      </div>
    </section>

    <section class="critical-current">
      <h2>临界电流</h2>
      
      <div class="current-limit">
        <h3>临界电流密度</h3>
        <p>超导体能够承载的最大电流密度有限：</p>
        <katex-element :expression="`J_c = \\text{临界电流密度}`"></katex-element>
        
        <div class="depairing-current">
          <h4>去配对电流</h4>
          <p>理论上的最大电流密度（去配对电流）：</p>
          <katex-element :expression="`J_{dp} = \\frac{2eN(0)\\Delta^2}{3\\hbar v_F}`"></katex-element>
          
          <div class="parameter-explanation">
            <ul>
              <li><katex-element :expression="`N(0)`"></katex-element>：费米面态密度</li>
              <li><katex-element :expression="`\\Delta`"></katex-element>：超导能隙</li>
              <li><katex-element :expression="`v_F`"></katex-element>：费米速度</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div class="current-mechanisms">
        <h3>临界电流的物理机制</h3>
        
        <div class="mechanism-grid">
          <div class="mechanism-card">
            <h4>Cooper对破坏</h4>
            <p>当电流过大时，Cooper对被破坏：</p>
            <ul>
              <li>动能增加超过配对能</li>
              <li>超导态变为不稳定</li>
              <li>转变为正常态</li>
            </ul>
          </div>
          
          <div class="mechanism-card">
            <h4>磁场效应</h4>
            <p>电流产生的磁场达到临界值：</p>
            <katex-element :expression="`H = \\frac{2\\pi I}{c} \\cdot \\frac{1}{\\text{周长}}`"></katex-element>
            <p>当<katex-element :expression="`H \\geq H_c`"></katex-element>时，超导被破坏。</p>
          </div>
        </div>
      </div>
    </section>

    <section class="silsbee-rule">
      <h2>Silsbee规则</h2>
      
      <div class="rule-statement">
        <h3>规则表述</h3>
        <p>当载流导体表面的磁场达到临界磁场时，超导态被破坏：</p>
        <katex-element :expression="`H_{\\text{surface}} = H_c`"></katex-element>
        
        <div class="cylindrical-wire">
          <h4>圆柱形导线</h4>
          <p>对于半径为<katex-element :expression="`a`"></katex-element>的圆柱形导线：</p>
          <katex-element :expression="`H_{\\text{surface}} = \\frac{2I}{ca} \\quad (\\text{CGS})`"></katex-element>
          <katex-element :expression="`H_{\\text{surface}} = \\frac{I}{2\\pi a} \\quad (\\text{SI})`"></katex-element>
          
          <p>临界电流为：</p>
          <katex-element :expression="`I_c = \\frac{caH_c}{2} \\quad (\\text{CGS})`"></katex-element>
          <katex-element :expression="`I_c = 2\\pi a H_c \\quad (\\text{SI})`"></katex-element>
        </div>
      </div>
      
      <div class="rule-limitations">
        <h3>规则的局限性</h3>
        <div class="limitation-list">
          <ul>
            <li>仅适用于第一类超导体</li>
            <li>忽略了表面效应和穿透深度</li>
            <li>假设均匀电流分布</li>
            <li>不考虑热效应</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="current-distribution">
      <h2>电流分布</h2>
      
      <div class="london-current">
        <h3>London电流分布</h3>
        <p>在超导体中，电流主要集中在表面附近：</p>
        <katex-element :expression="`J(x) = J_0 e^{-x/\\lambda_L}`"></katex-element>
        
        <div class="current-profile">
          <h4>电流密度剖面</h4>
          <p>电流在穿透深度内指数衰减：</p>
          <ul>
            <li>表面电流密度最大</li>
            <li>在<katex-element :expression="`x = \\lambda_L`"></katex-element>处降至<katex-element :expression="`1/e`"></katex-element></li>
            <li>内部电流密度趋于零</li>
          </ul>
        </div>
      </div>
      
      <div class="thin-film-limit">
        <h3>薄膜极限</h3>
        <p>当薄膜厚度<katex-element :expression="`d < \\lambda_L`"></katex-element>时：</p>
        <katex-element :expression="`J(x) \\approx \\text{常数}`"></katex-element>
        
        <div class="sheet-resistance">
          <h4>面电阻</h4>
          <p>薄膜的面电阻为：</p>
          <katex-element :expression="`R_\\square = \\frac{\\rho}{d}`"></katex-element>
          <p>在超导态下，<katex-element :expression="`R_\\square = 0`"></katex-element>。</p>
        </div>
      </div>
    </section>

    <section class="ac-properties">
      <h2>交流性质</h2>
      
      <div class="complex-conductivity">
        <h3>复数电导率</h3>
        <p>超导体的交流响应由复数电导率描述：</p>
        <katex-element :expression="`\\sigma(\\omega) = \\sigma_1(\\omega) - i\\sigma_2(\\omega)`"></katex-element>
        
        <div class="conductivity-components">
          <h4>电导率分量</h4>
          <ul>
            <li><katex-element :expression="`\\sigma_1`"></katex-element>：实部，与损耗相关</li>
            <li><katex-element :expression="`\\sigma_2`"></katex-element>：虚部，与感抗相关</li>
          </ul>
          
          <p>在低频极限下：</p>
          <katex-element :expression="`\\sigma_1(\\omega) \\propto \\omega^2`"></katex-element>
          <katex-element :expression="`\\sigma_2(\\omega) \\propto \\frac{1}{\\omega}`"></katex-element>
        </div>
      </div>
      
      <div class="surface-impedance">
        <h3>表面阻抗</h3>
        <p>超导体的表面阻抗：</p>
        <katex-element :expression="`Z_s = R_s + iX_s`"></katex-element>
        
        <div class="impedance-behavior">
          <h4>频率依赖性</h4>
          <p>在不同频率范围内：</p>
          <ul>
            <li><strong>低频：</strong><katex-element :expression="`R_s \\ll X_s`"></katex-element>，主要是感性</li>
            <li><strong>高频：</strong><katex-element :expression="`R_s \\approx X_s`"></katex-element>，接近正常金属</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="applications">
      <h2>零电阻的应用</h2>
      
      <div class="applications-grid">
        <div class="application-card">
          <h3>超导磁体</h3>
          <ul>
            <li>MRI医疗设备</li>
            <li>粒子加速器</li>
            <li>核聚变装置</li>
          </ul>
          <div class="advantage">
            <p><strong>优势：</strong>无电阻损耗，强磁场</p>
          </div>
        </div>
        
        <div class="application-card">
          <h3>电力传输</h3>
          <ul>
            <li>超导电缆</li>
            <li>电力储存</li>
            <li>变压器</li>
          </ul>
          <div class="advantage">
            <p><strong>优势：</strong>零损耗传输，高效率</p>
          </div>
        </div>
        
        <div class="application-card">
          <h3>量子器件</h3>
          <ul>
            <li>约瑟夫森结</li>
            <li>SQUID</li>
            <li>量子比特</li>
          </ul>
          <div class="advantage">
            <p><strong>优势：</strong>量子相干性，高灵敏度</p>
          </div>
        </div>
      </div>
    </section>

    <section class="summary">
      <h2>本节小结</h2>
      
      <div class="summary-points">
        <ul>
          <li>超导体的直流电阻完全消失，电阻率小于10^{-23} Ω·cm</li>
          <li>持续电流可以在超导环中流动数万年而不衰减</li>
          <li>存在临界电流密度J_c，超过时超导态被破坏</li>
          <li>Silsbee规则描述了临界电流与临界磁场的关系</li>
          <li>电流主要分布在穿透深度λ_L内的表面区域</li>
          <li>交流性质表现为复数电导率和表面阻抗</li>
          <li>零电阻特性在磁体、电力传输、量子器件中有重要应用</li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Chapter13_1_3',
  mounted() {
    if (window.MathJax) {
      window.MathJax.typesetPromise();
    }
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

h1 {
  color: #2c3e50;
  border-bottom: 3px solid #f39c12;
  padding-bottom: 10px;
  margin-bottom: 30px;
}

h2 {
  color: #34495e;
  margin-top: 30px;
  margin-bottom: 20px;
  border-left: 4px solid #f39c12;
  padding-left: 15px;
}

h3 {
  color: #2c3e50;
  margin-top: 25px;
  margin-bottom: 15px;
}

.resistance-measurement {
  background: linear-gradient(135deg, #ffeaa7 0%, #fab1a0 100%);
  padding: 20px;
  border-radius: 10px;
  margin: 20px 0;
}

.measurement-precision {
  background: white;
  padding: 15px;
  border-radius: 8px;
  margin-top: 15px;
  border-left: 4px solid #e67e22;
}

.persistent-currents {
  background: #f8f9fa;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #e9ecef;
  margin: 20px 0;
}

.current-decay {
  background: white;
  padding: 15px;
  border-radius: 8px;
  margin-top: 15px;
  border-left: 4px solid #3498db;
}

.experimental-results {
  background: #e8f4f8;
  padding: 10px;
  border-radius: 5px;
  margin-top: 10px;
}

.current-limit {
  background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
  padding: 20px;
  border-radius: 10px;
  margin: 20px 0;
}

.depairing-current {
  background: rgba(255,255,255,0.8);
  padding: 15px;
  border-radius: 8px;
  margin-top: 15px;
}

.parameter-explanation {
  background: #f1f3f4;
  padding: 10px;
  border-radius: 5px;
  margin-top: 10px;
}

.mechanism-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 20px;
  margin: 20px 0;
}

.mechanism-card {
  background: #f8f9fa;
  padding: 20px;
  border-radius: 10px;
  border-left: 4px solid #9b59b6;
}

.rule-statement {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 20px;
  border-radius: 10px;
  margin: 20px 0;
}

.cylindrical-wire {
  background: rgba(255,255,255,0.1);
  padding: 15px;
  border-radius: 8px;
  margin-top: 15px;
}

.rule-limitations {
  background: #fff5f5;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #fed7d7;
  margin: 20px 0;
}

.limitation-list {
  background: white;
  padding: 15px;
  border-radius: 8px;
  border-left: 4px solid #e53e3e;
}

.london-current {
  background: #e8f5e8;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #c3e6c3;
  margin: 20px 0;
}

.current-profile {
  background: white;
  padding: 15px;
  border-radius: 8px;
  margin-top: 15px;
  border-left: 4px solid #28a745;
}

.thin-film-limit {
  background: #f1f3f4;
  padding: 20px;
  border-radius: 10px;
  margin: 20px 0;
}

.sheet-resistance {
  background: white;
  padding: 15px;
  border-radius: 8px;
  margin-top: 15px;
  border-left: 4px solid #6c757d;
}

.complex-conductivity {
  background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);
  padding: 20px;
  border-radius: 10px;
  margin: 20px 0;
}

.conductivity-components {
  background: rgba(255,255,255,0.8);
  padding: 15px;
  border-radius: 8px;
  margin-top: 15px;
}

.surface-impedance {
  background: #f8f9fa;
  padding: 20px;
  border-radius: 10px;
  border-left: 4px solid #ff6b6b;
  margin: 20px 0;
}

.impedance-behavior {
  background: white;
  padding: 15px;
  border-radius: 8px;
  margin-top: 15px;
}

.applications-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin: 20px 0;
}

.application-card {
  background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
  padding: 20px;
  border-radius: 10px;
  text-align: center;
}

.advantage {
  background: rgba(255,255,255,0.8);
  padding: 10px;
  border-radius: 5px;
  margin-top: 15px;
  font-style: italic;
}

.summary {
  background: #f8f9fa;
  padding: 25px;
  border-radius: 10px;
  border: 2px solid #f39c12;
  margin-top: 30px;
}

.summary-points ul {
  list-style-type: none;
  padding: 0;
}

.summary-points li {
  background: white;
  margin: 10px 0;
  padding: 15px;
  border-radius: 8px;
  border-left: 4px solid #f39c12;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

ul {
  padding-left: 20px;
}

li {
  margin: 8px 0;
}

@media (max-width: 768px) {
  .mechanism-grid,
  .applications-grid {
    grid-template-columns: 1fr;
  }
  
  .chapter-content {
    padding: 15px;
  }
}
</style>