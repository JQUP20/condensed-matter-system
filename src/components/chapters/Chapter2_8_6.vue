<template>
  <div class="chapter-content">
    <div class="chapter-header">
      <h1 class="chapter-title">2.8.6 多光子过程</h1>
      <div class="chapter-meta">
        <span class="chapter-tag">非线性光学</span>
        <span class="reading-time">预计阅读时间: 45分钟</span>
      </div>
    </div>

    <div class="chapter-body">
      <section class="introduction">
        <h2>多光子过程概述</h2>
        <p class="lead-text">
          多光子过程是指原子、分子或固体同时吸收或发射多个光子的非线性
          光学现象。这类过程在强激光场中变得显著，包括多光子吸收、
          多光子电离、高次谐波产生等。多光子过程不仅揭示了物质与强光场
          相互作用的基本规律，还在超快光谱学、激光加工、量子光学等
          领域具有重要应用价值。理解多光子过程对于发展新型光电器件
          和探索极端非线性光学现象具有重要意义。
        </p>
      </section>

      <section class="content-section">
        <h2>理论基础与量子力学描述</h2>
        <div class="concept-grid">
          <div class="concept-card">
            <div class="concept-icon">⚛️</div>
            <h3>微扰理论</h3>
            <p>多光子过程的量子力学处理</p>
            <div class="mathematical-content">
              <h4>n阶微扰：</h4>
              <div class="equation-block">
                <p>H = H₀ + λV(t)</p>
                <p>|ψ⟩ = |ψ₀⟩ + λ|ψ₁⟩ + λ²|ψ₂⟩ + ...</p>
                <p>时间演化算符</p>
                <p>U(t) = T exp(-i∫H(t')dt'/ℏ)</p>
              </div>
              
              <h4>跃迁概率：</h4>
              <div class="equation-block">
                <p>W_fi^(n) = |⟨f|V|i⟩^(n)|²</p>
                <p>n阶跃迁矩阵元</p>
                <p>虚拟中间态求和</p>
                <p>能量分母因子</p>
              </div>
              
              <h4>选择定则：</h4>
              <div class="equation-block">
                <p>角动量耦合</p>
                <p>宇称守恒</p>
                <p>时间反演对称</p>
                <p>群论分析</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🌊</div>
            <h3>强场理论</h3>
            <p>非微扰强场多光子过程</p>
            <div class="mathematical-content">
              <h4>Volkov态：</h4>
              <div class="equation-block">
                <p>|ψ_V⟩ = exp(iS_cl/ℏ)|p + A(t)⟩</p>
                <p>S_cl: 经典作用量</p>
                <p>A(t): 矢量势</p>
                <p>准能量态</p>
              </div>
              
              <h4>强场近似(SFA)：</h4>
              <div class="equation-block">
                <p>连续态近似</p>
                <p>库仑势忽略</p>
                <p>鞍点方法</p>
                <p>经典轨道</p>
              </div>
              
              <h4>ADK理论：</h4>
              <div class="equation-block">
                <p>W_ADK ∝ E^(-2n*/3)</p>
                <p>n*: 有效主量子数</p>
                <p>隧道电离率</p>
                <p>准静态近似</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🔬</div>
            <h3>密度矩阵方法</h3>
            <p>开放系统的多光子动力学</p>
            <div class="mathematical-content">
              <h4>主方程：</h4>
              <div class="equation-block">
                <p>dρ/dt = -i[H,ρ]/ℏ + L[ρ]</p>
                <p>L[ρ]: Lindblad算符</p>
                <p>退相干效应</p>
                <p>环境耦合</p>
              </div>
              
              <h4>Bloch方程：</h4>
              <div class="equation-block">
                <p>二能级系统</p>
                <p>Rabi振荡</p>
                <p>T₁, T₂弛豫时间</p>
                <p>光学Bloch方程</p>
              </div>
              
              <h4>多能级系统：</h4>
              <div class="equation-block">
                <p>Λ型系统</p>
                <p>V型系统</p>
                <p>梯型系统</p>
                <p>相干布居俘获</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>多光子吸收</h2>
        <div class="concept-grid">
          <div class="concept-card">
            <div class="concept-icon">⚡</div>
            <h3>双光子吸收</h3>
            <p>同时吸收两个光子的过程</p>
            <div class="mathematical-content">
              <h4>基本原理：</h4>
              <div class="equation-block">
                <p>ℏω₁ + ℏω₂ = E_g</p>
                <p>虚拟中间态</p>
                <p>同时吸收条件</p>
                <p>能量守恒</p>
              </div>
              
              <h4>吸收系数：</h4>
              <div class="equation-block">
                <p>α₂ = β₂I</p>
                <p>β₂: 双光子吸收系数</p>
                <p>I: 光强</p>
                <p>非线性吸收</p>
              </div>
              
              <h4>选择定则：</h4>
              <div class="equation-block">
                <p>宇称选择定则</p>
                <p>角动量守恒</p>
                <p>对称性要求</p>
                <p>禁戒跃迁允许</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🌊</div>
            <h3>三光子吸收</h3>
            <p>同时吸收三个光子的高阶过程</p>
            <div class="mathematical-content">
              <h4>过程特征：</h4>
              <div class="equation-block">
                <p>α₃ = β₃I²</p>
                <p>I²依赖性</p>
                <p>更高阶非线性</p>
                <p>阈值效应明显</p>
              </div>
              
              <h4>虚拟态路径：</h4>
              <div class="equation-block">
                <p>多个中间态</p>
                <p>量子干涉</p>
                <p>路径相干性</p>
                <p>相位匹配</p>
              </div>
              
              <h4>材料要求：</h4>
              <div class="equation-block">
                <p>大三阶非线性</p>
                <p>宽带隙材料</p>
                <p>低线性吸收</p>
                <p>高损伤阈值</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🔬</div>
            <h3>多光子电离</h3>
            <p>多光子导致的电离过程</p>
            <div class="mathematical-content">
              <h4>电离机制：</h4>
              <div class="equation-block">
                <p>nℏω ≥ I_p</p>
                <p>I_p: 电离势</p>
                <p>n: 光子数</p>
                <p>阈值电离</p>
              </div>
              
              <h4>电离率：</h4>
              <div class="equation-block">
                <p>W ∝ I^n</p>
                <p>强场电离</p>
                <p>隧道电离</p>
                <p>阈上电离</p>
              </div>
              
              <h4>电子能谱：</h4>
              <div class="equation-block">
                <p>ATI峰结构</p>
                <p>Ponderomotive能移</p>
                <p>Freeman共振</p>
                <p>通道关闭</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>高次谐波产生</h2>
        <div class="concept-grid">
          <div class="concept-card">
            <div class="concept-icon">🎯</div>
            <h3>HHG基本机制</h3>
            <p>高次谐波产生的三步模型</p>
            <div class="mathematical-content">
              <h4>三步过程：</h4>
              <div class="equation-block">
                <p>1. 隧道电离</p>
                <p>2. 电子加速</p>
                <p>3. 电子复合</p>
                <p>经典轨道模型</p>
              </div>
              
              <h4>截止频率：</h4>
              <div class="equation-block">
                <p>ω_max = I_p + 3.17U_p</p>
                <p>U_p: Ponderomotive势</p>
                <p>I_p: 电离势</p>
                <p>经典预测</p>
              </div>
              
              <h4>相位匹配：</h4>
              <div class="equation-block">
                <p>Δk = k_q - qk₁</p>
                <p>q: 谐波阶数</p>
                <p>色散补偿</p>
                <p>相干长度</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">⚙️</div>
            <h3>量子路径干涉</h3>
            <p>电子轨道的量子干涉效应</p>
            <div class="mathematical-content">
              <h4>轨道分类：</h4>
              <div class="equation-block">
                <p>短轨道(τ < T/2)</p>
                <p>长轨道(τ > T/2)</p>
                <p>T: 激光周期</p>
                <p>返回时间不同</p>
              </div>
              
              <h4>相位关系：</h4>
              <div class="equation-block">
                <p>φ_s = ∫S(t)dt</p>
                <p>S(t): 作用量</p>
                <p>经典相位</p>
                <p>量子修正</p>
              </div>
              
              <h4>干涉调制：</h4>
              <div class="equation-block">
                <p>强度调制</p>
                <p>光谱结构</p>
                <p>空间分布</p>
                <p>偏振特性</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🌈</div>
            <h3>阿秒脉冲产生</h3>
            <p>超短阿秒脉冲的产生机制</p>
            <div class="mathematical-content">
              <h4>时间结构：</h4>
              <div class="equation-block">
                <p>脉冲宽度: ~100 as</p>
                <p>1 as = 10⁻¹⁸ s</p>
                <p>电子运动时间尺度</p>
                <p>超快过程探测</p>
              </div>
              
              <h4>产生方法：</h4>
              <div class="equation-block">
                <p>门控技术</p>
                <p>偏振门控</p>
                <p>强度门控</p>
                <p>双色场控制</p>
              </div>
              
              <h4>应用领域：</h4>
              <div class="equation-block">
                <p>阿秒光谱学</p>
                <p>电子动力学</p>
                <p>分子成像</p>
                <p>量子控制</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>多光子光谱学</h2>
        <div class="concept-grid">
          <div class="concept-card">
            <div class="concept-icon">📊</div>
            <h3>双光子光谱</h3>
            <p>双光子激发光谱技术</p>
            <div class="mathematical-content">
              <h4>技术优势：</h4>
              <div class="equation-block">
                <p>选择定则不同</p>
                <p>禁戒跃迁可见</p>
                <p>空间分辨率高</p>
                <p>背景抑制</p>
              </div>
              
              <h4>实验配置：</h4>
              <div class="equation-block">
                <p>飞秒激光器</p>
                <p>聚焦光学系统</p>
                <p>荧光收集</p>
                <p>光谱分析</p>
              </div>
              
              <h4>应用实例：</h4>
              <div class="equation-block">
                <p>生物成像</p>
                <p>材料表征</p>
                <p>量子点研究</p>
                <p>单分子检测</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🔍</div>
            <h3>多光子显微镜</h3>
            <p>基于多光子激发的显微成像</p>
            <div class="mathematical-content">
              <h4>成像原理：</h4>
              <div class="equation-block">
                <p>非线性激发</p>
                <p>焦点限制</p>
                <p>深度分辨</p>
                <p>三维成像</p>
              </div>
              
              <h4>技术特点：</h4>
              <div class="equation-block">
                <p>深层穿透</p>
                <p>低光损伤</p>
                <p>高对比度</p>
                <p>实时成像</p>
              </div>
              
              <h4>生物应用：</h4>
              <div class="equation-block">
                <p>活体成像</p>
                <p>神经网络</p>
                <p>血管结构</p>
                <p>细胞动力学</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">⚡</div>
            <h3>超快泵浦-探测</h3>
            <p>多光子过程的时间分辨研究</p>
            <div class="mathematical-content">
              <h4>实验原理：</h4>
              <div class="equation-block">
                <p>泵浦激发</p>
                <p>延时探测</p>
                <p>时间分辨</p>
                <p>动力学测量</p>
              </div>
              
              <h4>时间分辨率：</h4>
              <div class="equation-block">
                <p>飞秒级分辨</p>
                <p>相干控制</p>
                <p>量子拍频</p>
                <p>相位信息</p>
              </div>
              
              <h4>研究对象：</h4>
              <div class="equation-block">
                <p>载流子动力学</p>
                <p>相干声子</p>
                <p>自旋动力学</p>
                <p>化学反应</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>强场物理现象</h2>
        <div class="concept-grid">
          <div class="concept-card">
            <div class="concept-icon">🌪️</div>
            <h3>强场电离</h3>
            <p>强激光场中的原子电离</p>
            <div class="mathematical-content">
              <h4>电离机制：</h4>
              <div class="equation-block">
                <p>多光子电离(MPI)</p>
                <p>隧道电离(TI)</p>
                <p>阈上电离(ATI)</p>
                <p>场电离</p>
              </div>
              
              <h4>Keldysh参数：</h4>
              <div class="equation-block">
                <p>γ = ω√(2mI_p)/eE₀</p>
                <p>γ >> 1: MPI区域</p>
                <p>γ << 1: TI区域</p>
                <p>γ ~ 1: 中间区域</p>
              </div>
              
              <h4>电子轨道：</h4>
              <div class="equation-block">
                <p>直接电离</p>
                <p>重散射</p>
                <p>非序列电离</p>
                <p>多电子效应</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">💫</div>
            <h3>分子解离</h3>
            <p>强场诱导的分子解离过程</p>
            <div class="mathematical-content">
              <h4>解离通道：</h4>
              <div class="equation-block">
                <p>库仑爆炸</p>
                <p>键断裂</p>
                <p>重排反应</p>
                <p>异构化</p>
              </div>
              
              <h4>动力学过程：</h4>
              <div class="equation-block">
                <p>电子激发</p>
                <p>核运动</p>
                <p>非绝热耦合</p>
                <p>势能面跳跃</p>
              </div>
              
              <h4>实验观测：</h4>
              <div class="equation-block">
                <p>离子质谱</p>
                <p>动能分布</p>
                <p>角分布</p>
                <p>符合测量</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🎭</div>
            <h3>相干控制</h3>
            <p>多光子过程的量子相干控制</p>
            <div class="mathematical-content">
              <h4>控制方法：</h4>
              <div class="equation-block">
                <p>相位控制</p>
                <p>偏振控制</p>
                <p>频率控制</p>
                <p>脉冲整形</p>
              </div>
              
              <h4>干涉效应：</h4>
              <div class="equation-block">
                <p>路径干涉</p>
                <p>Ramsey条纹</p>
                <p>Fano共振</p>
                <p>自动电离</p>
              </div>
              
              <h4>应用前景：</h4>
              <div class="equation-block">
                <p>选择性激发</p>
                <p>化学反应控制</p>
                <p>量子信息</p>
                <p>精密测量</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>先进实验技术与测量方法</h2>
        <div class="concept-grid">
          <div class="concept-card">
            <div class="concept-icon">⚡</div>
            <h3>超快激光技术</h3>
            <p>飞秒激光多光子实验</p>
            <div class="mathematical-content">
              <h4>脉冲参数：</h4>
              <div class="equation-block">
                <p>脉冲宽度: 10-100 fs</p>
                <p>峰值功率: 10¹²-10¹⁵ W</p>
                <p>重复频率: 1 kHz-100 MHz</p>
                <p>载波包络相位控制</p>
              </div>
              
              <h4>脉冲整形：</h4>
              <div class="equation-block">
                <p>啁啾补偿</p>
                <p>相位调制</p>
                <p>振幅整形</p>
                <p>自适应控制</p>
              </div>
              
              <h4>强度测量：</h4>
              <div class="equation-block">
                <p>FROG技术</p>
                <p>SPIDER方法</p>
                <p>自相关测量</p>
                <p>光谱相位干涉</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🎯</div>
            <h3>单分子多光子检测</h3>
            <p>超高灵敏度多光子测量</p>
            <div class="mathematical-content">
              <h4>检测技术：</h4>
              <div class="equation-block">
                <p>共聚焦显微镜</p>
                <p>单光子计数器</p>
                <p>时间相关单光子计数</p>
                <p>荧光寿命成像</p>
              </div>
              
              <h4>信噪比优化：</h4>
              <div class="equation-block">
                <p>背景抑制</p>
                <p>时间门控</p>
                <p>偏振选择</p>
                <p>光谱滤波</p>
              </div>
              
              <h4>统计分析：</h4>
              <div class="equation-block">
                <p>光子统计</p>
                <p>强度涨落</p>
                <p>相关函数</p>
                <p>量子效率校正</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🔍</div>
            <h3>阿秒时间分辨技术</h3>
            <p>超快电子动力学测量</p>
            <div class="mathematical-content">
              <h4>阿秒脉冲产生：</h4>
              <div class="equation-block">
                <p>高次谐波产生</p>
                <p>阿秒脉冲链</p>
                <p>孤立阿秒脉冲</p>
                <p>载波包络相位锁定</p>
              </div>
              
              <h4>阿秒条纹相机：</h4>
              <div class="equation-block">
                <p>RABBITT技术</p>
                <p>条纹相机成像</p>
                <p>时间分辨光电子谱</p>
                <p>相位重构算法</p>
              </div>
              
              <h4>应用领域：</h4>
              <div class="equation-block">
                <p>原子电离动力学</p>
                <p>分子解离过程</p>
                <p>固体电子动力学</p>
                <p>化学反应控制</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>新兴材料与器件</h2>
        <div class="concept-grid">
          <div class="concept-card">
            <div class="concept-icon">🧬</div>
            <h3>二维材料多光子效应</h3>
            <p>石墨烯及过渡金属硫化物</p>
            <div class="mathematical-content">
              <h4>石墨烯特性：</h4>
              <div class="equation-block">
                <p>线性色散关系</p>
                <p>零带隙半金属</p>
                <p>高载流子迁移率</p>
                <p>宽带光学响应</p>
              </div>
              
              <h4>TMDCs材料：</h4>
              <div class="equation-block">
                <p>MoS₂, WS₂, WSe₂</p>
                <p>直接带隙半导体</p>
                <p>强激子效应</p>
                <p>谷电子学</p>
              </div>
              
              <h4>多光子应用：</h4>
              <div class="equation-block">
                <p>饱和吸收体</p>
                <p>光学调制器</p>
                <p>非线性光学器件</p>
                <p>光电探测器</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🔮</div>
            <h3>超材料与等离激元</h3>
            <p>人工结构增强多光子效应</p>
            <div class="mathematical-content">
              <h4>超材料设计：</h4>
              <div class="equation-block">
                <p>负折射率材料</p>
                <p>零折射率材料</p>
                <p>手性超材料</p>
                <p>时变超材料</p>
              </div>
              
              <h4>等离激元增强：</h4>
              <div class="equation-block">
                <p>表面等离激元</p>
                <p>局域场增强</p>
                <p>热点效应</p>
                <p>Purcell效应</p>
              </div>
              
              <h4>器件应用：</h4>
              <div class="equation-block">
                <p>超分辨成像</p>
                <p>增强非线性</p>
                <p>光学天线</p>
                <p>隐身斗篷</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">💎</div>
            <h3>量子点与纳米结构</h3>
            <p>量子限域多光子过程</p>
            <div class="mathematical-content">
              <h4>量子限域效应：</h4>
              <div class="equation-block">
                <p>能级分立化</p>
                <p>激子束缚能增强</p>
                <p>振子强度调制</p>
                <p>选择定则修正</p>
              </div>
              
              <h4>材料系统：</h4>
              <div class="equation-block">
                <p>III-V族量子点</p>
                <p>钙钛矿量子点</p>
                <p>碳量子点</p>
                <p>核壳结构</p>
              </div>
              
              <h4>应用前景：</h4>
              <div class="equation-block">
                <p>单光子源</p>
                <p>量子发光二极管</p>
                <p>太阳能电池</p>
                <p>生物标记</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>前沿应用与发展趋势</h2>
        <div class="concept-grid">
          <div class="concept-card">
            <div class="concept-icon">🧠</div>
            <h3>神经形态光子学</h3>
            <p>光子神经网络与计算</p>
            <div class="mathematical-content">
              <h4>光子神经元：</h4>
              <div class="equation-block">
                <p>非线性激活函数</p>
                <p>光学权重矩阵</p>
                <p>并行处理能力</p>
                <p>低功耗运算</p>
              </div>
              
              <h4>学习算法：</h4>
              <div class="equation-block">
                <p>光学反向传播</p>
                <p>储备池计算</p>
                <p>强化学习</p>
                <p>无监督学习</p>
              </div>
              
              <h4>应用领域：</h4>
              <div class="equation-block">
                <p>模式识别</p>
                <p>信号处理</p>
                <p>优化问题</p>
                <p>人工智能</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🔐</div>
            <h3>量子密码学</h3>
            <p>多光子量子通信安全</p>
            <div class="mathematical-content">
              <h4>量子密钥分发：</h4>
              <div class="equation-block">
                <p>BB84协议</p>
                <p>诱骗态方法</p>
                <p>测量设备无关</p>
                <p>连续变量</p>
              </div>
              
              <h4>安全性分析：</h4>
              <div class="equation-block">
                <p>窃听检测</p>
                <p>信息论安全</p>
                <p>有限长度效应</p>
                <p>实际安全性</p>
              </div>
              
              <h4>技术挑战：</h4>
              <div class="equation-block">
                <p>传输距离</p>
                <p>密钥生成率</p>
                <p>系统稳定性</p>
                <p>成本控制</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🌐</div>
            <h3>全光网络</h3>
            <p>多光子全光信息处理</p>
            <div class="mathematical-content">
              <h4>全光开关：</h4>
              <div class="equation-block">
                <p>克尔效应开关</p>
                <p>多光子吸收开关</p>
                <p>交叉相位调制</p>
                <p>四波混频</p>
              </div>
              
              <h4>光学逻辑：</h4>
              <div class="equation-block">
                <p>AND/OR门</p>
                <p>XOR门</p>
                <p>光学存储器</p>
                <p>光学处理器</p>
              </div>
              
              <h4>网络架构：</h4>
              <div class="equation-block">
                <p>波分复用</p>
                <p>光分组交换</p>
                <p>光突发交换</p>
                <p>弹性光网络</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>技术应用与发展</h2>
        <div class="feature-grid">
          <div class="feature-card">
            <h3>🔬 激光加工</h3>
            <div class="feature-content">
              <h4>多光子加工：</h4>
              <ul>
                <li>三维微加工</li>
                <li>亚波长结构</li>
                <li>透明材料加工</li>
                <li>精密切割</li>
              </ul>
              
              <h4>技术优势：</h4>
              <ul>
                <li>高精度</li>
                <li>低热影响</li>
                <li>任意形状</li>
                <li>内部加工</li>
              </ul>
            </div>
          </div>

          <div class="feature-card">
            <h3>🌐 量子技术</h3>
            <div class="feature-content">
              <h4>量子光源：</h4>
              <ul>
                <li>纠缠光子对</li>
                <li>单光子源</li>
                <li>压缩光</li>
                <li>量子频率梳</li>
              </ul>
              
              <h4>量子信息：</h4>
              <ul>
                <li>量子密钥分发</li>
                <li>量子计算</li>
                <li>量子传感</li>
                <li>量子网络</li>
              </ul>
            </div>
          </div>

          <div class="feature-card">
            <h3>🔋 光电器件</h3>
            <div class="feature-content">
              <h4>非线性器件：</h4>
              <ul>
                <li>多光子探测器</li>
                <li>光限幅器</li>
                <li>全光开关</li>
                <li>频率转换器</li>
              </ul>
              
              <h4>新兴应用：</h4>
              <ul>
                <li>太赫兹产生</li>
                <li>中红外激光</li>
                <li>超连续谱</li>
                <li>光学频率梳</li>
              </ul>
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
              <p>微扰理论、强场理论和密度矩阵方法为多光子过程提供了完整的量子力学描述框架。</p>
            </div>
          </div>
          <div class="point-item">
            <span class="point-number">2</span>
            <div class="point-content">
              <h4>多光子过程</h4>
              <p>包括多光子吸收、电离、高次谐波产生等，展现了物质与强光场相互作用的丰富现象。</p>
            </div>
          </div>
          <div class="point-item">
            <span class="point-number">3</span>
            <div class="point-content">
              <h4>实验技术</h4>
              <p>超快激光技术、阿秒时间分辨和单分子检测方法推动了多光子科学的发展。</p>
            </div>
          </div>
          <div class="point-item">
            <span class="point-number">4</span>
            <div class="point-content">
              <h4>新兴材料</h4>
              <p>二维材料、超材料和量子点等新型材料系统为多光子器件提供了新的平台。</p>
            </div>
          </div>
          <div class="point-item">
            <span class="point-number">5</span>
            <div class="point-content">
              <h4>前沿应用</h4>
              <p>神经形态光子学、量子密码学和全光网络代表了多光子技术的未来发展方向。</p>
            </div>
          </div>
          <div class="point-item">
            <span class="point-number">6</span>
            <div class="point-content">
              <h4>发展趋势</h4>
              <p>量子技术集成、激光加工应用、生物医学成像和人工智能光学展现了广阔的发展前景。</p>
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
</style>

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
  color: #e8f8ff;
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