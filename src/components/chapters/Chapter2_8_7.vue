<template>
  <div class="chapter-content">
    <div class="chapter-header">
      <h1 class="chapter-title">2.8.7 非线性响应的应用</h1>
      <div class="chapter-meta">
        <span class="chapter-tag">技术应用</span>
        <span class="reading-time">预计阅读时间: 50分钟</span>
      </div>
    </div>

    <div class="chapter-body">
      <section class="introduction">
        <h2>非线性响应应用概述</h2>
        <p class="lead-text">
          非线性响应理论不仅是理解物质光学性质的重要基础，更是现代
          光电子技术发展的核心驱动力。从激光技术的诞生到量子信息
          处理的兴起，非线性光学效应在通信、计算、传感、成像、
          材料加工等众多领域发挥着关键作用。本章将系统介绍非线性
          响应在各个技术领域的具体应用，展示其在推动科技进步中
          的重要价值，并探讨未来发展的新方向和挑战。
        </p>
      </section>

      <section class="content-section theoretical-foundations">
        <h2>理论基础与应用原理</h2>
        <div class="concept-grid">
          <div class="concept-card">
            <div class="concept-icon">🔬</div>
            <h3>非线性光学基础</h3>
            <p>非线性响应应用的物理基础</p>
            <div class="mathematical-content">
              <h4>极化响应：</h4>
              <div class="equation-block">
                <p>P = ε₀(χ⁽¹⁾E + χ⁽²⁾E² + χ⁽³⁾E³ + ...)</p>
                <p>χ⁽ⁿ⁾: n阶非线性极化率</p>
                <p>相位匹配条件</p>
                <p>能量守恒定律</p>
              </div>
              
              <h4>频率转换效率：</h4>
              <div class="equation-block">
                <p>η = (ω₃/ω₁)(d²eff L²/n₁n₂n₃)</p>
                <p>deff: 有效非线性系数</p>
                <p>L: 相互作用长度</p>
                <p>相位失配影响</p>
              </div>
              
              <h4>阈值条件：</h4>
              <div class="equation-block">
                <p>Ith = (λ²/8πn₂Leff)</p>
                <p>n₂: 非线性折射率</p>
                <p>Leff: 有效长度</p>
                <p>功率密度要求</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">⚡</div>
            <h3>器件设计原理</h3>
            <p>非线性光学器件的设计考虑</p>
            <div class="mathematical-content">
              <h4>相位匹配技术：</h4>
              <div class="equation-block">
                <p>Δk = k₃ - k₁ - k₂ = 0</p>
                <p>角度相位匹配</p>
                <p>温度相位匹配</p>
                <p>准相位匹配</p>
              </div>
              
              <h4>模式匹配：</h4>
              <div class="equation-block">
                <p>重叠积分优化</p>
                <p>光束聚焦参数</p>
                <p>波导模式匹配</p>
                <p>空间模式质量</p>
              </div>
              
              <h4>损耗机制：</h4>
              <div class="equation-block">
                <p>线性吸收损耗</p>
                <p>散射损耗</p>
                <p>多光子吸收</p>
                <p>热效应影响</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🎯</div>
            <h3>性能优化策略</h3>
            <p>提高非线性转换效率的方法</p>
            <div class="mathematical-content">
              <h4>材料选择：</h4>
              <div class="equation-block">
                <p>大非线性系数</p>
                <p>宽透明窗口</p>
                <p>高损伤阈值</p>
                <p>相位匹配能力</p>
              </div>
              
              <h4>结构优化：</h4>
              <div class="equation-block">
                <p>周期性极化结构</p>
                <p>波导几何优化</p>
                <p>谐振腔增强</p>
                <p>多通道设计</p>
              </div>
              
              <h4>工作条件：</h4>
              <div class="equation-block">
                <p>温度稳定控制</p>
                <p>功率密度优化</p>
                <p>脉冲参数调节</p>
                <p>环境因素控制</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>激光技术应用</h2>
        <div class="concept-grid">
          <div class="concept-card">
            <div class="concept-icon">🔴</div>
            <h3>激光频率转换</h3>
            <p>基于非线性效应的激光频率变换</p>
            <div class="mathematical-content">
              <h4>倍频技术：</h4>
              <div class="equation-block">
                <p>ω₂ = 2ω₁</p>
                <p>SHG过程</p>
                <p>相位匹配</p>
                <p>转换效率优化</p>
              </div>
              
              <h4>和频/差频：</h4>
              <div class="equation-block">
                <p>ω₃ = ω₁ ± ω₂</p>
                <p>可调谐激光</p>
                <p>宽谱覆盖</p>
                <p>中红外产生</p>
              </div>
              
              <h4>应用实例：</h4>
              <div class="equation-block">
                <p>绿光激光器(532nm)</p>
                <p>紫外激光器(266nm)</p>
                <p>太赫兹产生</p>
                <p>光学参量振荡器</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">⚡</div>
            <h3>超短脉冲产生</h3>
            <p>非线性效应在超快激光中的应用</p>
            <div class="mathematical-content">
              <h4>锁模技术：</h4>
              <div class="equation-block">
                <p>Kerr透镜锁模</p>
                <p>非线性偏振旋转</p>
                <p>饱和吸收体</p>
                <p>自启动锁模</p>
              </div>
              
              <h4>脉冲压缩：</h4>
              <div class="equation-block">
                <p>啁啾脉冲放大</p>
                <p>光纤压缩</p>
                <p>棱镜对补偿</p>
                <p>光栅对压缩</p>
              </div>
              
              <h4>性能指标：</h4>
              <div class="equation-block">
                <p>脉宽: 飞秒-阿秒</p>
                <p>峰值功率: TW级</p>
                <p>重复频率: MHz-GHz</p>
                <p>光谱宽度: 倍频程</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🌈</div>
            <h3>超连续谱产生</h3>
            <p>宽带白光激光的产生机制</p>
            <div class="mathematical-content">
              <h4>物理机制：</h4>
              <div class="equation-block">
                <p>自相位调制</p>
                <p>四波混频</p>
                <p>受激拉曼散射</p>
                <p>孤子分裂</p>
              </div>
              
              <h4>介质选择：</h4>
              <div class="equation-block">
                <p>光子晶体光纤</p>
                <p>锥形光纤</p>
                <p>块状介质</p>
                <p>波导结构</p>
              </div>
              
              <h4>应用领域：</h4>
              <div class="equation-block">
                <p>光学相干层析</p>
                <p>光谱学</p>
                <p>光学频率梳</p>
                <p>生物成像</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>光通信技术</h2>
        <div class="concept-grid">
          <div class="concept-card">
            <div class="concept-icon">📡</div>
            <h3>全光信号处理</h3>
            <p>基于非线性效应的光信号处理</p>
            <div class="mathematical-content">
              <h4>全光开关：</h4>
              <div class="equation-block">
                <p>Kerr开关</p>
                <p>交叉相位调制</p>
                <p>四波混频</p>
                <p>超快响应</p>
              </div>
              
              <h4>波长转换：</h4>
              <div class="equation-block">
                <p>FWM波长转换</p>
                <p>XGM/XPM转换</p>
                <p>差频产生</p>
                <p>透明转换</p>
              </div>
              
              <h4>信号再生：</h4>
              <div class="equation-block">
                <p>2R再生(重放大、重整形)</p>
                <p>3R再生(+重定时)</p>
                <p>噪声抑制</p>
                <p>色散补偿</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🔄</div>
            <h3>光纤非线性应用</h3>
            <p>光纤中非线性效应的利用</p>
            <div class="mathematical-content">
              <h4>拉曼放大：</h4>
              <div class="equation-block">
                <p>受激拉曼散射</p>
                <p>分布式放大</p>
                <p>噪声系数低</p>
                <p>带宽可调</p>
              </div>
              
              <h4>布里渊散射：</h4>
              <div class="equation-block">
                <p>布里渊激光器</p>
                <p>慢光效应</p>
                <p>光存储</p>
                <p>传感应用</p>
              </div>
              
              <h4>孤子传输：</h4>
              <div class="equation-block">
                <p>时间孤子</p>
                <p>空间孤子</p>
                <p>无色散传输</p>
                <p>长距离通信</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🌐</div>
            <h3>光学频率梳</h3>
            <p>精密频率标准与计量应用</p>
            <div class="mathematical-content">
              <h4>产生机制：</h4>
              <div class="equation-block">
                <p>锁模激光器</p>
                <p>微腔频率梳</p>
                <p>电光频率梳</p>
                <p>Kerr频率梳</p>
              </div>
              
              <h4>技术特点：</h4>
              <div class="equation-block">
                <p>等间距频率</p>
                <p>相位相干</p>
                <p>宽光谱覆盖</p>
                <p>高精度</p>
              </div>
              
              <h4>应用领域：</h4>
              <div class="equation-block">
                <p>光钟技术</p>
                <p>精密光谱</p>
                <p>距离测量</p>
                <p>天文学</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>生物医学应用</h2>
        <div class="concept-grid">
          <div class="concept-card">
            <div class="concept-icon">🔬</div>
            <h3>多光子显微镜</h3>
            <p>深层生物组织成像技术</p>
            <div class="mathematical-content">
              <h4>成像原理：</h4>
              <div class="equation-block">
                <p>双光子激发</p>
                <p>三光子激发</p>
                <p>非线性荧光</p>
                <p>深度分辨</p>
              </div>
              
              <h4>技术优势：</h4>
              <div class="equation-block">
                <p>深层穿透(>1mm)</p>
                <p>低光毒性</p>
                <p>高分辨率</p>
                <p>三维成像</p>
              </div>
              
              <h4>生物应用：</h4>
              <div class="equation-block">
                <p>神经成像</p>
                <p>血管成像</p>
                <p>活体成像</p>
                <p>发育生物学</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">⚕️</div>
            <h3>激光医疗</h3>
            <p>非线性激光在医疗中的应用</p>
            <div class="mathematical-content">
              <h4>激光手术：</h4>
              <div class="equation-block">
                <p>飞秒激光手术</p>
                <p>多光子切割</p>
                <p>精密手术</p>
                <p>微创治疗</p>
              </div>
              
              <h4>光动力治疗：</h4>
              <div class="equation-block">
                <p>双光子PDT</p>
                <p>深层治疗</p>
                <p>选择性激活</p>
                <p>肿瘤治疗</p>
              </div>
              
              <h4>诊断技术：</h4>
              <div class="equation-block">
                <p>SHG成像</p>
                <p>CARS显微镜</p>
                <p>组织诊断</p>
                <p>无标记成像</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🧬</div>
            <h3>光遗传学</h3>
            <p>光控制生物过程的新技术</p>
            <div class="mathematical-content">
              <h4>技术原理：</h4>
              <div class="equation-block">
                <p>光敏蛋白</p>
                <p>双光子激活</p>
                <p>时空精确控制</p>
                <p>可逆调控</p>
              </div>
              
              <h4>应用优势：</h4>
              <div class="equation-block">
                <p>高时间分辨</p>
                <p>高空间分辨</p>
                <p>非侵入性</p>
                <p>实时控制</p>
              </div>
              
              <h4>研究应用：</h4>
              <div class="equation-block">
                <p>神经科学</p>
                <p>心脏病学</p>
                <p>行为学研究</p>
                <p>基因表达调控</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>材料加工与制造</h2>
        <div class="concept-grid">
          <div class="concept-card">
            <div class="concept-icon">🔧</div>
            <h3>激光微加工</h3>
            <p>超精密激光加工技术</p>
            <div class="mathematical-content">
              <h4>加工机制：</h4>
              <div class="equation-block">
                <p>多光子吸收</p>
                <p>等离子体形成</p>
                <p>材料去除</p>
                <p>热影响最小</p>
              </div>
              
              <h4>技术特点：</h4>
              <div class="equation-block">
                <p>亚微米精度</p>
                <p>三维加工</p>
                <p>任意形状</p>
                <p>透明材料</p>
              </div>
              
              <h4>应用领域：</h4>
              <div class="equation-block">
                <p>微流控芯片</p>
                <p>光子器件</p>
                <p>MEMS器件</p>
                <p>生物支架</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">💎</div>
            <h3>材料改性</h3>
            <p>激光诱导的材料性质改变</p>
            <div class="mathematical-content">
              <h4>改性机制：</h4>
              <div class="equation-block">
                <p>折射率调制</p>
                <p>晶体结构变化</p>
                <p>化学键重排</p>
                <p>相变过程</p>
              </div>
              
              <h4>应用实例：</h4>
              <div class="equation-block">
                <p>光波导写入</p>
                <p>光栅制作</p>
                <p>表面纹理化</p>
                <p>功能化表面</p>
              </div>
              
              <h4>材料类型：</h4>
              <div class="equation-block">
                <p>玻璃材料</p>
                <p>聚合物</p>
                <p>半导体</p>
                <p>金属薄膜</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🏭</div>
            <h3>增材制造</h3>
            <p>基于非线性效应的3D打印</p>
            <div class="mathematical-content">
              <h4>技术原理：</h4>
              <div class="equation-block">
                <p>双光子聚合</p>
                <p>选择性固化</p>
                <p>逐层构建</p>
                <p>纳米精度</p>
              </div>
              
              <h4>材料体系：</h4>
              <div class="equation-block">
                <p>光敏树脂</p>
                <p>水凝胶</p>
                <p>生物材料</p>
                <p>复合材料</p>
              </div>
              
              <h4>应用前景：</h4>
              <div class="equation-block">
                <p>微纳器件</p>
                <p>生物打印</p>
                <p>光学元件</p>
                <p>功能结构</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>量子技术应用</h2>
        <div class="feature-grid">
          <div class="feature-card">
            <h3>🔐 量子密钥分发</h3>
            <div class="feature-content">
              <h4>非线性光源：</h4>
              <ul>
                <li>纠缠光子对产生</li>
                <li>单光子源</li>
                <li>压缩光产生</li>
                <li>量子随机数</li>
              </ul>
              
              <h4>技术优势：</h4>
              <ul>
                <li>信息论安全</li>
                <li>窃听检测</li>
                <li>长距离传输</li>
                <li>网络扩展</li>
              </ul>
            </div>
          </div>

          <div class="feature-card">
            <h3>💻 量子计算</h3>
            <div class="feature-content">
              <h4>光量子比特：</h4>
              <ul>
                <li>偏振编码</li>
                <li>路径编码</li>
                <li>时间编码</li>
                <li>频率编码</li>
              </ul>
              
              <h4>量子门操作：</h4>
              <ul>
                <li>线性光学门</li>
                <li>非线性相位门</li>
                <li>测量诱导门</li>
                <li>簇态计算</li>
              </ul>
            </div>
          </div>

          <div class="feature-card">
            <h3>📏 量子传感</h3>
            <div class="feature-content">
              <h4>传感原理：</h4>
              <ul>
                <li>量子干涉</li>
                <li>压缩态增强</li>
                <li>纠缠增强</li>
                <li>量子关联</li>
              </ul>
              
              <h4>应用领域：</h4>
              <ul>
                <li>重力波探测</li>
                <li>磁场测量</li>
                <li>时间标准</li>
                <li>导航定位</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>新兴应用与发展趋势</h2>
        <div class="feature-grid">
          <div class="feature-card">
            <h3>🤖 人工智能光学</h3>
            <div class="feature-content">
              <h4>光学神经网络：</h4>
              <ul>
                <li>全光计算</li>
                <li>并行处理</li>
                <li>低功耗</li>
                <li>高速度</li>
              </ul>
              
              <h4>技术挑战：</h4>
              <ul>
                <li>非线性激活</li>
                <li>权重调节</li>
                <li>训练算法</li>
                <li>集成度</li>
              </ul>
            </div>
          </div>

          <div class="feature-card">
            <h3>🌍 环境监测</h3>
            <div class="feature-content">
              <h4>激光雷达：</h4>
              <ul>
                <li>大气成分检测</li>
                <li>污染物监测</li>
                <li>气象观测</li>
                <li>海洋遥感</li>
              </ul>
              
              <h4>技术特点：</h4>
              <ul>
                <li>高灵敏度</li>
                <li>实时监测</li>
                <li>远程探测</li>
                <li>多参数测量</li>
              </ul>
            </div>
          </div>

          <div class="feature-card">
            <h3>🚀 空间技术</h3>
            <div class="feature-content">
              <h4>空间应用：</h4>
              <ul>
                <li>激光通信</li>
                <li>空间激光器</li>
                <li>引力波探测</li>
                <li>行星探测</li>
              </ul>
              
              <h4>技术要求：</h4>
              <ul>
                <li>高可靠性</li>
                <li>抗辐射</li>
                <li>低功耗</li>
                <li>小型化</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section advanced-techniques">
        <h2>先进技术与创新应用</h2>
        <div class="concept-grid">
          <div class="concept-card">
            <div class="concept-icon">🔬</div>
            <h3>超分辨成像技术</h3>
            <p>突破衍射极限的成像方法</p>
            <div class="mathematical-content">
              <h4>STED显微镜：</h4>
              <div class="equation-block">
                <p>受激发射损耗显微镜</p>
                <p>分辨率: λ/(2NA√(1+I/Isat))</p>
                <p>空间分辨率 < 50nm</p>
                <p>活体成像能力</p>
              </div>
              
              <h4>SIM技术：</h4>
              <div class="equation-block">
                <p>结构化照明显微镜</p>
                <p>分辨率提升2倍</p>
                <p>宽场成像</p>
                <p>快速成像速度</p>
              </div>
              
              <h4>应用领域：</h4>
              <div class="equation-block">
                <p>细胞生物学</p>
                <p>神经科学</p>
                <p>材料科学</p>
                <p>纳米技术</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">⚛️</div>
            <h3>量子增强技术</h3>
            <p>利用量子效应提升性能</p>
            <div class="mathematical-content">
              <h4>压缩光技术：</h4>
              <div class="equation-block">
                <p>噪声压缩: ΔX₁ < 1/2</p>
                <p>灵敏度提升</p>
                <p>引力波探测</p>
                <p>精密测量</p>
              </div>
              
              <h4>纠缠增强：</h4>
              <div class="equation-block">
                <p>纠缠态产生</p>
                <p>量子关联测量</p>
                <p>超越标准量子极限</p>
                <p>分布式传感</p>
              </div>
              
              <h4>技术优势：</h4>
              <div class="equation-block">
                <p>海森堡极限</p>
                <p>量子优势</p>
                <p>抗噪声能力</p>
                <p>并行处理</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🌐</div>
            <h3>集成光子学</h3>
            <p>片上非线性光学器件</p>
            <div class="mathematical-content">
              <h4>硅光子学：</h4>
              <div class="equation-block">
                <p>CMOS兼容工艺</p>
                <p>高集成度</p>
                <p>低成本制造</p>
                <p>大规模生产</p>
              </div>
              
              <h4>新材料平台：</h4>
              <div class="equation-block">
                <p>氮化硅波导</p>
                <p>铌酸锂薄膜</p>
                <p>III-V族化合物</p>
                <p>二维材料</p>
              </div>
              
              <h4>器件功能：</h4>
              <div class="equation-block">
                <p>频率转换</p>
                <p>光开关</p>
                <p>调制器</p>
                <p>探测器</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section emerging-materials">
        <h2>新兴材料与器件平台</h2>
        <div class="concept-grid">
          <div class="concept-card">
            <div class="concept-icon">🔷</div>
            <h3>超材料与等离激元</h3>
            <p>人工结构材料的非线性响应</p>
            <div class="mathematical-content">
              <h4>超材料设计：</h4>
              <div class="equation-block">
                <p>亚波长结构单元</p>
                <p>有效介质理论</p>
                <p>负折射率材料</p>
                <p>手性超材料</p>
              </div>
              
              <h4>等离激元增强：</h4>
              <div class="equation-block">
                <p>局域场增强: |E|²/|E₀|² > 10³</p>
                <p>表面等离激元</p>
                <p>热点效应</p>
                <p>非线性增强</p>
              </div>
              
              <h4>应用前景：</h4>
              <div class="equation-block">
                <p>超分辨成像</p>
                <p>传感器</p>
                <p>光学天线</p>
                <p>能量收集</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🧊</div>
            <h3>拓扑光子学</h3>
            <p>拓扑保护的光学现象</p>
            <div class="mathematical-content">
              <h4>拓扑性质：</h4>
              <div class="equation-block">
                <p>拓扑不变量</p>
                <p>边界态</p>
                <p>拓扑保护</p>
                <p>鲁棒传输</p>
              </div>
              
              <h4>实现平台：</h4>
              <div class="equation-block">
                <p>光子晶体</p>
                <p>超材料</p>
                <p>波导阵列</p>
                <p>谐振腔网络</p>
              </div>
              
              <h4>非线性效应：</h4>
              <div class="equation-block">
                <p>拓扑孤子</p>
                <p>非线性边界态</p>
                <p>拓扑激光</p>
                <p>量子非线性</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">⚗️</div>
            <h3>有机非线性材料</h3>
            <p>分子工程设计的非线性材料</p>
            <div class="mathematical-content">
              <h4>分子设计：</h4>
              <div class="equation-block">
                <p>共轭π电子体系</p>
                <p>推拉电子基团</p>
                <p>分子超极化率</p>
                <p>聚集态效应</p>
              </div>
              
              <h4>材料形态：</h4>
              <div class="equation-block">
                <p>聚合物薄膜</p>
                <p>分子晶体</p>
                <p>液晶材料</p>
                <p>纳米复合材料</p>
              </div>
              
              <h4>性能特点：</h4>
              <div class="equation-block">
                <p>大非线性系数</p>
                <p>快响应速度</p>
                <p>易加工性</p>
                <p>成本优势</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section frontier-applications">
        <h2>前沿应用与未来展望</h2>
        <div class="concept-grid">
          <div class="concept-card">
            <div class="concept-icon">🧠</div>
            <h3>神经形态光子学</h3>
            <p>模拟大脑功能的光学系统</p>
            <div class="mathematical-content">
              <h4>光学神经元：</h4>
              <div class="equation-block">
                <p>非线性激活函数</p>
                <p>光学突触</p>
                <p>可塑性机制</p>
                <p>学习算法</p>
              </div>
              
              <h4>网络架构：</h4>
              <div class="equation-block">
                <p>储备池计算</p>
                <p>脉冲神经网络</p>
                <p>深度学习</p>
                <p>强化学习</p>
              </div>
              
              <h4>应用前景：</h4>
              <div class="equation-block">
                <p>模式识别</p>
                <p>信号处理</p>
                <p>优化计算</p>
                <p>智能控制</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🌌</div>
            <h3>量子模拟</h3>
            <p>用光学系统模拟量子多体系统</p>
            <div class="mathematical-content">
              <h4>模拟平台：</h4>
              <div class="equation-block">
                <p>光子晶格</p>
                <p>耦合谐振腔</p>
                <p>波导阵列</p>
                <p>原子系综</p>
              </div>
              
              <h4>物理现象：</h4>
              <div class="equation-block">
                <p>量子相变</p>
                <p>多体局域化</p>
                <p>拓扑相</p>
                <p>量子临界性</p>
              </div>
              
              <h4>研究价值：</h4>
              <div class="equation-block">
                <p>凝聚态物理</p>
                <p>量子材料</p>
                <p>高能物理</p>
                <p>宇宙学</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🔮</div>
            <h3>全息技术</h3>
            <p>三维信息存储与显示</p>
            <div class="mathematical-content">
              <h4>存储机制：</h4>
              <div class="equation-block">
                <p>体全息存储</p>
                <p>多重复用</p>
                <p>高存储密度</p>
                <p>并行读写</p>
              </div>
              
              <h4>显示技术：</h4>
              <div class="equation-block">
                <p>实时全息显示</p>
                <p>计算全息</p>
                <p>数字全息</p>
                <p>动态全息</p>
              </div>
              
              <h4>应用领域：</h4>
              <div class="equation-block">
                <p>数据存储</p>
                <p>三维显示</p>
                <p>虚拟现实</p>
                <p>增强现实</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 本章要点总结 -->
      <section class="summary">
        <h2>本章要点总结</h2>
        <div class="key-points">
          <div class="point-item">
            <span class="point-number">1</span>
            <div class="point-content">
              <h4>理论基础</h4>
              <p>非线性极化响应、相位匹配、器件设计原理为各种应用提供了坚实的理论基础和技术指导。</p>
            </div>
          </div>
          <div class="point-item">
            <span class="point-number">2</span>
            <div class="point-content">
              <h4>激光技术</h4>
              <p>频率转换、超短脉冲产生、超连续谱等技术为激光器发展提供了重要手段，实现了从紫外到太赫兹的全光谱覆盖。</p>
            </div>
          </div>
          <div class="point-item">
            <span class="point-number">3</span>
            <div class="point-content">
              <h4>光通信</h4>
              <p>全光信号处理、光纤非线性应用、光学频率梳等技术推动了高速大容量光通信系统的发展。</p>
            </div>
          </div>
          <div class="point-item">
            <span class="point-number">4</span>
            <div class="point-content">
              <h4>生物医学</h4>
              <p>多光子显微镜、激光医疗、光遗传学等应用为生命科学研究和医疗诊治提供了强有力的工具。</p>
            </div>
          </div>
          <div class="point-item">
            <span class="point-number">5</span>
            <div class="point-content">
              <h4>材料加工</h4>
              <p>激光微加工、材料改性、增材制造等技术实现了超精密制造和功能材料的制备。</p>
            </div>
          </div>
          <div class="point-item">
            <span class="point-number">6</span>
            <div class="point-content">
              <h4>量子技术</h4>
              <p>量子密钥分发、量子计算、量子传感等应用展示了非线性光学在量子信息技术中的重要作用。</p>
            </div>
          </div>
          <div class="point-item">
            <span class="point-number">7</span>
            <div class="point-content">
              <h4>先进技术</h4>
              <p>超分辨成像、量子增强、集成光子学等技术推动了光学技术向更高精度和集成度发展。</p>
            </div>
          </div>
          <div class="point-item">
            <span class="point-number">8</span>
            <div class="point-content">
              <h4>新兴材料</h4>
              <p>超材料、拓扑光子学、有机非线性材料等为非线性光学应用提供了新的材料平台和物理机制。</p>
            </div>
          </div>
          <div class="point-item">
            <span class="point-number">9</span>
            <div class="point-content">
              <h4>前沿应用</h4>
              <p>神经形态光子学、量子模拟、全息技术等前沿应用展示了非线性光学的巨大潜力和发展前景。</p>
            </div>
          </div>
          <div class="point-item">
            <span class="point-number">10</span>
            <div class="point-content">
              <h4>发展趋势</h4>
              <p>人工智能光学、环境监测、空间技术等新兴应用领域为非线性光学技术的发展开辟了新的方向。</p>
            </div>
          </div>
        </div>
      </section>
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
  padding: 2rem;
  line-height: 1.6;
}

.chapter-header {
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid #e2e8f0;
}

.chapter-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #1a202c;
  margin-bottom: 1rem;
}

.chapter-meta {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.chapter-tag {
  background: #3182ce;
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.875rem;
  font-weight: 500;
}

.reading-time {
  color: #718096;
  font-size: 0.875rem;
}

.introduction {
  margin-bottom: 3rem;
}

.introduction h2 {
  font-size: 1.75rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #e2e8f0;
}

.lead-text {
  font-size: 1.125rem;
  color: #4a5568;
  margin-bottom: 1.5rem;
  font-weight: 400;
}

.content-section {
  margin-bottom: 3rem;
}

.content-section h2 {
  font-size: 1.75rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #e2e8f0;
}

.concept-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.concept-card {
  background: #f7fafc;
  border: 1px solid #e2e8f0;
  border-radius: 0.75rem;
  padding: 2rem;
  transition: transform 0.2s, box-shadow 0.2s;
}

.concept-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

.concept-icon {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.concept-card h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.concept-card > p {
  color: #4a5568;
  margin-bottom: 1.5rem;
}

.mathematical-content h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin: 1.5rem 0 0.5rem 0;
}

.equation-block {
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 0.5rem;
  padding: 1rem;
  margin-bottom: 1rem;
  font-family: 'Courier New', monospace;
}

.equation-block p {
  margin: 0.25rem 0;
  font-size: 0.9rem;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.feature-card {
  background: #f7fafc;
  border: 1px solid #e2e8f0;
  border-radius: 0.75rem;
  padding: 2rem;
}

.feature-card h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1.5rem;
}

.feature-content h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #4a5568;
  margin: 1rem 0 0.5rem 0;
}

.feature-content ul {
  list-style: none;
  padding: 0;
}

.feature-content li {
  padding: 0.25rem 0;
  color: #4a5568;
  position: relative;
  padding-left: 1rem;
}

.feature-content li:before {
  content: "•";
  color: #3182ce;
  font-weight: bold;
  position: absolute;
  left: 0;
}

.summary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 2rem;
  border-radius: 15px;
  margin-top: 3rem;
}

.summary h2 {
  color: white;
  border-bottom: 2px solid rgba(255, 255, 255, 0.3);
  padding-bottom: 1rem;
  margin-bottom: 2rem;
}

.key-points {
  display: grid;
  gap: 1rem;
}

.point-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}

.point-number {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  flex-shrink: 0;
}

.point-content h4 {
  margin: 0 0 0.5rem 0;
  font-weight: 600;
}

.point-content p {
  margin: 0;
  flex: 1;
}

@media (max-width: 768px) {
  .chapter-content {
    padding: 1rem;
  }
  
  .chapter-title {
    font-size: 2rem;
  }
  
  .concept-grid, .feature-grid {
    grid-template-columns: 1fr;
  }
  
  .chapter-meta {
    flex-direction: column;
    gap: 1rem;
  }
}

/* 新增部分的样式 */
.theoretical-foundations .concept-card {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.theoretical-foundations .concept-card h3 {
  color: #ffffff;
  text-shadow: 0 1px 2px rgba(0,0,0,0.3);
}

.theoretical-foundations .concept-card h4 {
  color: #e8f4fd;
  border-bottom: 1px solid rgba(255,255,255,0.3);
}

.theoretical-foundations .equation-block {
  background: rgba(255,255,255,0.1);
  border: 1px solid rgba(255,255,255,0.2);
  backdrop-filter: blur(10px);
}

.advanced-techniques .concept-card {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  color: white;
}

.advanced-techniques .concept-card h3 {
  color: #ffffff;
  text-shadow: 0 1px 2px rgba(0,0,0,0.3);
}

.advanced-techniques .concept-card h4 {
  color: #ffeef0;
  border-bottom: 1px solid rgba(255,255,255,0.3);
}

.advanced-techniques .equation-block {
  background: rgba(255,255,255,0.1);
  border: 1px solid rgba(255,255,255,0.2);
  backdrop-filter: blur(10px);
}

.emerging-materials .concept-card {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  color: white;
}

.emerging-materials .concept-card h3 {
  color: #ffffff;
  text-shadow: 0 1px 2px rgba(0,0,0,0.3);
}

.emerging-materials .concept-card h4 {
  color: #e0f7ff;
  border-bottom: 1px solid rgba(255,255,255,0.3);
}

.emerging-materials .equation-block {
  background: rgba(255,255,255,0.1);
  border: 1px solid rgba(255,255,255,0.2);
  backdrop-filter: blur(10px);
}

.frontier-applications .concept-card {
  background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
  color: white;
}

.frontier-applications .concept-card h3 {
  color: #ffffff;
  text-shadow: 0 1px 2px rgba(0,0,0,0.3);
}

.frontier-applications .concept-card h4 {
  color: #fff8e1;
  border-bottom: 1px solid rgba(255,255,255,0.3);
}

.frontier-applications .equation-block {
  background: rgba(255,255,255,0.1);
  border: 1px solid rgba(255,255,255,0.2);
  backdrop-filter: blur(10px);
}
</style>