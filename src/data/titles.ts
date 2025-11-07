﻿export interface ChapterNode {
  id: string;
  title: string;
  level: number;
  content: string;
  children?: ChapterNode[];
}

export const chaptersData: ChapterNode[] = [
  {
    id: "1",
    title: "1 序章:多就是不同",
    level: 1,
    content: "凝聚态物理学的入门介绍，探讨多体系统的基本概念和理论框架。",
    children: [
      {
        id: "1.1",
        title: "1.1 凝聚态物理学",
        level: 2,
        content: "凝聚态物理学的基本概念和研究范围。"
      },
      {
        id: "1.2",
        title: "1.2 凝聚态物理学之父",
        level: 2,
        content: "介绍凝聚态物理学发展史上的重要人物。"
      },
      {
        id: "1.3",
        title: "1.3 凝聚态理论",
        level: 2,
        content: "凝聚态物理的理论基础和方法论。"
      },
      {
        id: "1.4",
        title: "1.4 凝聚态物理的基本方程",
        level: 2,
        content: "描述凝聚态系统的基本物理方程。",
        children: [
          {
            id: "1.4.1",
            title: "1.4.1 什么是电子关联?",
            level: 3,
            content: "电子关联效应的基本概念。"
          },
          {
            id: "1.4.2",
            title: "1.4.2 我们会学到什么?",
            level: 3,
            content: "课程内容概览。"
          },
          {
            id: "1.4.3",
            title: "1.4.3 自由电子近似",
            level: 3,
            content: "不考虑电子之间相互作用以及与晶格的相互作用。"
          },
          {
            id: "1.4.4",
            title: "1.4.4 独立电子近似",
            level: 3,
            content: "不考虑电子之间的相互作用但仍感受到晶格势的作用。"
          },
          {
            id: "1.4.5",
            title: "1.4.5 Hartree-Fock近似",
            level: 3,
            content: "考虑电子相互作用的直接交换与间接交换的效果。"
          },
          {
            id: "1.4.6",
            title: "1.4.6 无规相近似(RPA)",
            level: 3,
            content: "是超越HF近似中最常用且最简单的方法。"
          },
          {
            id: "1.4.7",
            title: "1.4.7 局域密度近似(LDA)",
            level: 3,
            content: "密度泛函理论实际计算采用的主要近似方法。"
          },
          {
            id: "1.4.8",
            title: "1.4.8 Gutzwiller近似",
            level: 3,
            content: "广泛应用于关联电子模型的定性计算。"
          },
          {
            id: "1.4.9",
            title: "1.4.9 动力学平均场理论(DMFT)",
            level: 3,
            content: "把晶格模型映射到杂质模型。"
          },
          {
            id: "1.4.10",
            title: "1.4.10 密度矩阵重整化群(DMRG)",
            level: 3,
            content: "是实空间重整化群理论的重要改进。"
          },
          {
            id: "1.4.11",
            title: "1.4.11 张量网络",
            level: 3,
            content: "把系统的波函数数据按张量乘积形式。"
          },
          {
            id: "1.4.12",
            title: "1.4.12 后续凝聚态会学到的主要内容",
            level: 3,
            content: "系统介绍三个核心模型：Coulomb电子气量子Ising模型、Hubbard模型和Heisenberg模型的对比分析。"
          },
          {
            id: "1.4.13",
            title: "1.4.13 Coulomb电子气",
            level: 3,
            content: "详细介绍Coulomb电子气模型，包括其哈密顿量、重要参数、理论方法和物理现象。"
          },
          {
            id: "1.4.14",
            title: "1.4.14 量子Ising模型",
            level: 3,
            content: "深入探讨量子Ising模型的相图、量子相变、求解方法和实验实现。"
          },
          {
            id: "1.4.15",
            title: "1.4.15 Kitaev模型",
            level: 3,
            content: "介绍Kitaev模型的精确解、拓扑性质、非阿贝尔任意子和量子计算应用。"
          },
          {
            id: "1.4.16",
            title: "1.4.16 Hubbard模型",
            level: 3,
            content: "全面分析Hubbard模型的相图、Mott相变、高温超导和各种求解方法。"
          },
          {
            id: "1.4.17",
            title: "1.4.17 Bose-Hubbard模型",
            level: 3,
            content: "探讨Bose-Hubbard模型的量子相变、超流-Mott绝缘体相变和冷原子实现。"
          },
          {
            id: "1.4.18",
            title: "1.4.18 Kondo晶格",
            level: 3,
            content: "详细介绍Kondo晶格模型、重费米子现象、RKKY相互作用和量子临界点。"
          },
          {
            id: "1.4.19",
            title: "1.4.19 Heisenberg模型",
            level: 3,
            content: "深入分析Heisenberg模型的磁序、自旋波理论、量子相变和实验实现。"
          },
          {
            id: "1.4.20",
            title: "1.4.20 BCS模型",
            level: 3,
            content: "全面介绍BCS理论、Cooper对形成、超导能隙、准粒子激发和实验验证。"
          },
          {
            id: "1.4.21",
            title: "1.4.21 SYK模型",
            level: 3,
            content: "探讨SYK模型的量子混沌性质、全息对偶、共形不变性和理论意义。"
          },
          {
            id: "1.4.22",
            title: "1.4.22 变分蒙特卡罗",
            level: 3,
            content: "详细介绍变分蒙特卡罗方法的基本原理、变分波函数设计、优化算法和在量子多体系统中的应用。"
          },
          {
            id: "1.4.23",
            title: "1.4.23 扩散蒙特卡罗",
            level: 3,
            content: "深入探讨扩散蒙特卡罗方法的理论基础、算法实现、符号问题处理和在基态计算中的应用。"
          },
          {
            id: "1.4.24",
            title: "1.4.24 路径积分蒙特卡罗",
            level: 3,
            content: "全面分析路径积分蒙特卡罗方法的数学原理、Trotter分解、有限温度计算和量子相变研究。"
          },
          {
            id: "1.4.25",
            title: "1.4.25 辅助场量子蒙特卡罗",
            level: 3,
            content: "介绍辅助场量子蒙特卡罗方法的Hubbard-Stratonovich变换、符号问题、算法优化和强关联系统应用。"
          },
          {
            id: "1.4.26",
            title: "1.4.26 连续时间量子蒙特卡罗",
            level: 3,
            content: "探讨连续时间量子蒙特卡罗方法的理论框架、蠕虫算法、相互作用展开和杂质模型求解。"
          },
          {
            id: "1.4.27",
            title: "1.4.27 确定性量子退火",
            level: 3,
            content: "详细介绍确定性量子退火算法的基本原理、绝热演化、量子隧穿效应和优化问题求解。"
          },
          {
            id: "1.4.28",
            title: "1.4.28 机器学习",
            level: 3,
            content: "全面分析机器学习在凝聚态物理中的应用，包括神经网络量子态、相识别、参数优化和数据分析。"
          },
          {
            id: "1.4.29",
            title: "1.4.29 神经网络量子态",
            level: 3,
            content: "深入探讨神经网络量子态的理论基础、网络架构设计、变分优化和在量子多体问题中的应用。"
          },
          {
            id: "1.4.30",
            title: "1.4.30 量子近似优化算法",
            level: 3,
            content: "介绍量子近似优化算法的基本原理、参数化量子电路、经典-量子混合优化和组合优化问题求解。"
          },
          {
            id: "1.4.31",
            title: "1.4.31 Jordan-Wigner变换",
            level: 3,
            content: "详细讲解Jordan-Wigner变换的数学原理、自旋-费米子映射、一维系统应用和拓扑性质研究。"
          },
          {
            id: "1.4.32",
            title: "1.4.32 对偶变换",
            level: 3,
            content: "全面介绍对偶变换理论，包括Kramers-Wannier对偶、电磁对偶、全息对偶和在相变研究中的应用。"
          },
          {
            id: "1.4.33",
            title: "1.4.33 Z₂隶自旋",
            level: 3,
            content: "深入分析Z₂隶自旋方法的理论框架、规范场理论、量子自旋液体和拓扑序的描述。"
          },
          {
            id: "1.4.34",
            title: "1.4.34 Holstein-Primakoff变换",
            level: 3,
            content: "详细介绍Holstein-Primakoff变换的数学推导、磁子理论、自旋波近似和磁性系统的量子涨落。"
          },
          {
            id: "1.4.35",
            title: "1.4.35 相干态",
            level: 3,
            content: "全面探讨相干态的基本性质、路径积分表示、变分方法和在量子多体系统中的应用。"
          },
          {
            id: "1.4.36",
            title: "1.4.36 键算符",
            level: 3,
            content: "深入介绍键算符方法的理论基础、二聚化系统、量子相变和三重态激发的描述。"
          },
          {
            id: "1.4.37",
            title: "1.4.37 Bogoliubov变换",
            level: 3,
            content: "详细分析Bogoliubov变换在BCS超导理论、玻色系统、准粒子激发和配对现象中的应用。"
          },
          {
            id: "1.4.38",
            title: "1.4.38 隶转子",
            level: 3,
            content: "全面介绍隶转子方法的理论框架、电荷-自旋分离、Mott相变和强关联电子系统的研究。"
          },
          {
            id: "1.4.39",
            title: "1.4.39 无序平均",
            level: 3,
            content: "深入探讨无序平均方法的统计理论、Anderson局域化、自旋玻璃和随机系统的普适性质。"
          },
          {
            id: "1.4.40",
            title: "1.4.40 平均场理论",
            level: 3,
            content: "详细介绍平均场理论的基本原理、自洽场方程、相变理论和在磁性系统、超导体中的应用。"
          },
          {
            id: "1.4.41",
            title: "1.4.41 玻色化理论",
            level: 3,
            content: "深入探讨玻色化方法的数学框架、费米子-玻色子映射、Luttinger液体理论和一维强关联系统的研究。"
          },
          {
            id: "1.4.42",
            title: "1.4.42 高斯近似",
            level: 3,
            content: "全面分析高斯近似的理论基础、涨落修正、有效作用量和在量子场论中的应用。"
          },
          {
            id: "1.4.43",
            title: "1.4.43 Feynman图微扰论",
            level: 3,
            content: "详细讲解Feynman图技术的基本原理、图形规则、微扰展开和在多体系统中的计算方法。"
          },
          {
            id: "1.4.44",
            title: "1.4.44 微扰重整化",
            level: 3,
            content: "深入介绍微扰重整化群理论、β函数、临界指数计算和在相变研究中的应用。"
          },
          {
            id: "1.4.45",
            title: "1.4.45 鞍点近似",
            level: 3,
            content: "全面探讨鞍点方法的数学原理、最速下降法、大N展开和在统计力学中的应用。"
          },
          {
            id: "1.4.46",
            title: "1.4.46 RPA随机相近似",
            level: 3,
            content: "详细分析随机相近似的理论框架、屏蔽效应、介电函数和在电子气体系统中的应用。"
          },
          {
            id: "1.4.47",
            title: "1.4.47 高温展开",
            level: 3,
            content: "深入介绍高温级数展开的数学方法、收敛性分析、临界温度估计和在磁性系统中的应用。"
          },
          {
            id: "1.4.48",
            title: "1.4.48 动力学平均场理论",
            level: 3,
            content: "全面讲解动力学平均场理论的基本概念、自能函数、杂质求解器和在强关联电子系统中的应用。"
          }
        ]
      },
      {
        id: "1.5",
        title: "1.5 主要参考书与网络视频资源",
        level: 2,
        content: "学习资源推荐。",
        children: [
          {
            id: "1.5.1",
            title: "1.5.1 主要参考书",
            level: 3,
            content: "推荐的教材和参考书籍。"
          },
          {
            id: "1.5.2",
            title: "1.5.2 网络视频资源",
            level: 3,
            content: "在线学习资源。"
          }
        ]
      },
      {
        id: "1.6",
        title: "1.6 固体物理简要回顾",
        level: 2,
        content: "固体物理基础知识回顾。"
      },
      {
        id: "1.7",
        title: "1.7 本章小结和进一步阅读",
        level: 2,
        content: "章节总结和延伸阅读。"
      },
      {
        id: "1.8",
        title: "1.8 附录",
        level: 2,
        content: "相关附录材料。",
        children: [
          {
            id: "1.8.1",
            title: "1.8.1 常用能量单位与换算",
            level: 3,
            content: "物理单位换算表。"
          },
          {
            id: "1.8.2",
            title: "1.8.2 半经典方程的证明",
            level: 3,
            content: "半经典近似的数学推导。"
          },
          {
            id: "1.8.3",
            title: "1.8.3 电子隧穿",
            level: 3,
            content: "量子隧穿效应。"
          },
          {
            id: "1.8.4",
            title: "1.8.4 高斯单位制与国际单位制",
            level: 3,
            content: "不同单位制的比较。"
          }
        ]
      },
      {
        id: "1.9",
        title: "1.9 序章习题",
        level: 2,
        content: "章节练习题。",
        children: [
          {
            id: "1.9.1",
            title: "1.9.1 习题1:一些概念",
            level: 3,
            content: "基本概念练习。"
          },
          {
            id: "1.9.2",
            title: "1.9.2 习题2:Drude电导率",
            level: 3,
            content: "Drude模型相关计算。"
          },
          {
            id: "1.9.3",
            title: "1.9.3 习题3:Wiedemann-Franz律",
            level: 3,
            content: "热电效应相关问题。"
          }
        ]
      }
    ]
  },
  {
    id: "6",
    title: "6 重整化群与标度理论:Wilson的革命",
    level: 1,
    content: "重整化群理论是现代凝聚态物理的核心工具，它揭示了临界现象的普适性和标度行为。",
    children: [
      {
        id: "6.1",
        title: "6.1 标度理论基础",
        level: 2,
        content: "理解标度不变性和临界现象的基本概念。",
        children: [
          {
            id: "6.1.1",
            title: "6.1.1 什么是标度不变性?",
            level: 3,
            content: "标度变换和标度不变性的数学定义与物理意义。"
          },
          {
            id: "6.1.2",
            title: "6.1.2 临界现象与幂律行为",
            level: 3,
            content: "相变附近的幂律标度和临界指数。"
          },
          {
            id: "6.1.3",
            title: "6.1.3 关联长度与标度假设",
            level: 3,
            content: "关联长度发散和Widom标度假设。"
          }
        ]
      },
      {
        id: "6.2",
        title: "6.2 重整化群的物理图像",
        level: 2,
        content: "从物理直觉理解重整化群变换的本质。",
        children: [
          {
            id: "6.2.1",
            title: "6.2.1 粗粒化与有效理论",
            level: 3,
            content: "从微观到宏观的粗粒化过程。"
          },
          {
            id: "6.2.2",
            title: "6.2.2 固定点与临界行为",
            level: 3,
            content: "重整化群固定点的物理意义。"
          },
          {
            id: "6.2.3",
            title: "6.2.3 普适性类的概念",
            level: 3,
            content: "为什么不同系统有相同的临界指数。"
          }
        ]
      },
      {
        id: "6.3",
        title: "6.3 实空间重整化",
        level: 2,
        content: "通过具体例子学习重整化群的实际操作。",
        children: [
          {
            id: "6.3.1",
            title: "6.3.1 一维Ising模型",
            level: 3,
            content: "最简单的重整化群例子。"
          },
          {
            id: "6.3.2",
            title: "6.3.2 二维Ising模型的近似处理",
            level: 3,
            content: "Migdal-Kadanoff近似方法。"
          },
          {
            id: "6.3.3",
            title: "6.3.3 重整化群流与相图",
            level: 3,
            content: "参数空间中的重整化群流。"
          }
        ]
      },
      {
        id: "6.4",
        title: "6.4 Wilson动量空间重整化",
        level: 2,
        content: "Wilson的革命性方法：动量空间重整化。",
        children: [
          {
            id: "6.4.1",
            title: "6.4.1 动量壳积分",
            level: 3,
            content: "逐步积分高动量模式。"
          },
          {
            id: "6.4.2",
            title: "6.4.2 β函数与临界指数",
            level: 3,
            content: "重整化群β函数的计算。"
          },
          {
            id: "6.4.3",
            title: "6.4.3 ε展开方法",
            level: 3,
            content: "4-d维度展开的威力。"
          }
        ]
      },
      {
        id: "6.5",
        title: "6.5 重整化群的现代应用",
        level: 2,
        content: "重整化群在凝聚态物理中的广泛应用。",
        children: [
          {
            id: "6.5.1",
            title: "6.5.1 量子相变",
            level: 3,
            content: "零温相变的重整化群分析。"
          },
          {
            id: "6.5.2",
            title: "6.5.2 Anderson局域化",
            level: 3,
            content: "无序系统的标度理论。"
          },
          {
            id: "6.5.3",
            title: "6.5.3 近藤问题",
            level: 3,
            content: "穷人标度理论的经典应用。"
          }
        ]
      }
    ]
  },
  {
    id: "2",
    title: "2 二次量子化:冒险开始",
    level: 1,
    content: "介绍二次量子化方法，这是处理多体系统的重要工具。",
    children: [
      {
        id: "2.1",
        title: "2.1 一次与二次量子化:谁更高级?",
        level: 2,
        content: "比较一次量子化和二次量子化方法。",
        children: [
          {
            id: "2.1.1",
            title: "2.1.1 一次量子化的困难",
            level: 3,
            content: "一次量子化在处理多体系统时的局限性。"
          },
          {
            id: "2.1.2",
            title: "2.1.2 一次量子化形式中的多体波函数",
            level: 3,
            content: "详细介绍一次量子化中多体波函数的数学形式、对称性质和构造方法。"
          },
          {
            id: "2.1.3",
            title: "2.1.3 一次量子化的简单应用",
            level: 3,
            content: "探讨一次量子化在原子物理、分子物理和固体物理中的具体应用实例。"
          },
          {
            id: "2.1.4",
            title: "2.1.4 另一个例子：密度泛函理论",
            level: 3,
            content: "介绍密度泛函理论的基本原理、Kohn-Sham方程和实际应用。"
          },
          {
            id: "2.1.5",
            title: "2.1.5 Hartree-Fock近似",
            level: 3,
            content: "详细讲解Hartree-Fock近似的理论基础、自洽场方法和后Hartree-Fock方法。"
          }
        ]
      },
      {
        id: "2.2",
        title: "2.2 二次量子化形式中的多体波函数:告别排列有体的困扰",
        level: 2,
        content: "多体波函数和算符在二次量子化中的表示方法。",
        children: [
          {
            id: "2.2.1",
            title: "2.2.1 一次量子化的困难",
            level: 3,
            content: "一次量子化在处理多体系统时的局限性。"
          }
        ]
      },
      {
        id: "2.3",
        title: "2.3 二次量子化形式:告别一次量子化",
        level: 2,
        content: "一次量子化在二次量子化表示下的对应关系。",
        children: [
          {
            id: "2.3.1",
            title: "2.3.1 谁拯救了升降算符表示",
            level: 3,
            content: "升降算符在二次量子化中的重要作用。"
          },
          {
            id: "2.3.2",
            title: "2.3.2 占据数表示",
            level: 3,
            content: "占据数表示的基本概念和应用。",
            children: [
              {
                id: "2.3.2.1",
                title: "2.3.2.1 生灭算符的基矢变换",
                level: 4,
                content: "详细讲解生灭算符在不同基矢下的变换关系，包括产生算符和湮灭算符的对易关系、基矢变换的数学推导以及在实际物理问题中的应用。"
              },
              {
                id: "2.3.2.2",
                title: "2.3.2.2 场算符",
                level: 4,
                content: "深入分析场算符的定义和性质，包括场算符与生灭算符的关系、场算符的对易关系、以及场算符在二次量子化中的重要作用。"
              }
            ]
          },
          {
            id: "2.3.3",
            title: "2.3.3 多体密度矩阵的二次量子化形式",
            level: 3,
            content: "密度矩阵在二次量子化中的表示。"
          },
          {
            id: "2.3.4",
            title: "2.3.4 论证中的二次量子化与Noether定理",
            level: 3,
            content: "二次量子化与对称性、守恒定律的关系。",
            children: [
              {
                id: "2.3.4.1",
                title: "2.3.4.1 经典力学的Noether定理",
                level: 4,
                content: "经典拉格朗日力学中的对称性与守恒定律，包括Noether定理的经典表述、守恒量与对称性的对应关系以及能量、动量、角动量守恒的具体例子。"
              },
              {
                id: "2.3.4.2",
                title: "2.3.4.2 场论中的Noether定理",
                level: 4,
                content: "场论中的连续对称性与守恒流的构造，包括Klein-Gordon场的具体应用、时空对称性与内部对称性的区别以及守恒流密度的物理意义。"
              },
              {
                id: "2.3.4.3",
                title: "2.3.4.3 场的正则量子化",
                level: 4,
                content: "场的正则量子化程序，包括场算符的对易关系、模式展开与粒子解释、真空态与激发态的构造以及量子场论中的基本概念。"
              },
              {
                id: "2.3.4.4",
                title: "2.3.4.4 复标量场",
                level: 4,
                content: "复标量场的拉格朗日量与U(1)规范对称性，包括粒子数守恒、带电粒子的描述、复场的量子化以及粒子-反粒子对称性。"
              }
            ]
          }
        ]
      },
      {
        id: "2.4",
        title: "2.4 Coulomb电子气:多体物理的新手教程",
        level: 2,
        content: "库仑相互作用多体系统的哈密顿算符表示。",
        children: [
          {
            id: "2.4.1",
            title: "2.4.1 微扰理论计算",
            level: 3,
            content: "微扰理论在Coulomb电子气中的应用。"
          },
          {
            id: "2.4.2",
            title: "2.4.2 发散与重新求和",
            level: 3,
            content: "处理发散问题的重新求和技术。"
          },
          {
            id: "2.4.3",
            title: "2.4.3 Hartree-Fock(平均场)近似",
            level: 3,
            content: "Hartree-Fock近似方法的基本原理。"
          },
          {
            id: "2.4.4",
            title: "2.4.4 屏蔽长程Coulomb相互作用",
            level: 3,
            content: "长程库仑相互作用的屏蔽效应。"
          },
          {
            id: "2.4.5",
            title: "2.4.5 Lindhard介电函数(无物理近似/RPA)",
            level: 3,
            content: "Lindhard介电函数的推导和物理意义。"
          }
        ]
      },
      {
        id: "2.5",
        title: "2.5 Green函数与线性响应:联系物理与真实",
        level: 2,
        content: "格林函数和传播子的物理意义及计算方法。",
        children: [
          {
            id: "2.5.1",
            title: "2.5.1 推迟Green函数与运动方程",
            level: 3,
            content: "推迟格林函数的定义和运动方程。"
          }
        ]
      },
      {
        id: "2.6",
        title: "2.6 线性响应理论:什么才是物理?",
        level: 2,
        content: "线性响应理论的适用性条件和物理意义。",
        children: [
          {
            id: "2.6.1",
            title: "2.6.1 线性响应与电导率",
            level: 3,
            content: "线性响应理论在电导率计算中的应用。"
          },
          {
            id: "2.6.2",
            title: "2.6.2 虚时Green函数与关联函数",
            level: 3,
            content: "虚时格林函数的定义和性质。"
          },
          {
            id: "2.6.3",
            title: "2.6.3 虚时Green函数的微扰计算",
            level: 3,
            content: "虚时格林函数的微扰展开。"
          },
          {
            id: "2.6.4",
            title: "2.6.4 电荷极化率",
            level: 3,
            content: "电荷极化率的计算和物理意义。"
          },
          {
            id: "2.6.5",
            title: "2.6.5 自能极化率",
            level: 3,
            content: "自能极化率的概念和计算。"
          }
        ]
      },
      {
        id: "2.7",
        title: "2.7 本章小结和进一步阅读",
        level: 2,
        content: "第二章内容总结和延伸阅读。"
      },
      {
        id: "2.8",
        title: "2.8 非线性光学响应",
        level: 2,
        content: "非线性光学效应的理论基础和实验应用。",
        children: [
          {
            id: "2.8.1",
            title: "2.8.1 非线性光学基础",
            level: 3,
            content: "非线性光学的基本概念、物理机制和理论框架。"
          },
          {
            id: "2.8.2",
            title: "2.8.2 二次谐波产生",
            level: 3,
            content: "二次谐波产生的物理机制、理论基础和实验技术。"
          },
          {
            id: "2.8.3",
            title: "2.8.3 三次谐波与Kerr效应",
            level: 3,
            content: "三阶非线性光学效应，包括三次谐波产生和光学Kerr效应。"
          },
          {
            id: "2.8.4",
            title: "2.8.4 电光效应",
            level: 3,
            content: "Pockels效应和Kerr效应等电光效应的原理和应用。"
          },
          {
            id: "2.8.5",
            title: "2.8.5 非线性磁光效应",
            level: 3,
            content: "磁场调制的非线性光学效应及其在磁性材料中的应用。"
          },
          {
            id: "2.8.6",
            title: "2.8.6 多光子过程",
            level: 3,
            content: "多光子吸收、高次谐波产生等多光子非线性过程。"
          },
          {
            id: "2.8.7",
            title: "2.8.7 非线性响应的应用",
            level: 3,
            content: "非线性光学在激光技术、通信、生物医学等领域的应用。"
          }
        ]
      },
      {
        id: "2.9",
        title: "2.9 输运理论",
        level: 2,
        content: "载流子输运现象的理论描述和实验研究。",
        children: [
          {
            id: "2.9.1",
            title: "2.9.1 输运理论概述",
            level: 3,
            content: "输运现象的基本概念、理论框架和研究方法。"
          },
          {
            id: "2.9.2",
            title: "2.9.2 Boltzmann输运方程",
            level: 3,
            content: "Boltzmann输运方程的基本形式、解法和应用。"
          },
          {
            id: "2.9.3",
            title: "2.9.3 散射机制",
            level: 3,
            content: "载流子散射的各种机制及其对输运性质的影响。"
          },
          {
            id: "2.9.4",
            title: "2.9.4 霍尔效应",
            level: 3,
            content: "经典和量子霍尔效应的理论和实验研究。"
          },
          {
            id: "2.9.5",
            title: "2.9.5 热电效应",
            level: 3,
            content: "Seebeck效应、Peltier效应等热电现象的理论和应用。"
          },
          {
            id: "2.9.6",
            title: "2.9.6 量子输运",
            level: 3,
            content: "量子尺度下的输运现象，包括量子干涉和局域化效应。"
          }
        ]
      }
    ]
  },
  {
    id: "3",
    title: "3 晶格费米子:直面凶猛的电子关联",
    level: 1,
    content: "研究晶格上的强关联电子系统，包括Hubbard模型和磁性。",
    children: [
      {
        id: "3.1",
        title: "3.1 Hubbard模型:多体物理的'Ising'模型",
        level: 2,
        content: "Hubbard模型的基本概念和应用。",
        children: [
          {
            id: "3.1.1",
            title: "3.1.1 Hubbard模型的导出",
            level: 3,
            content: "从第一性原理导出Hubbard模型。"
          },
          {
            id: "3.1.2",
            title: "3.1.2 两格点Hubbard模型",
            level: 3,
            content: "最简单的Hubbard模型求解。"
          },
          {
            id: "3.1.3",
            title: "3.1.3 t - J模型和隐藏费米液体",
            level: 3,
            content: "t-J模型的物理图像。"
          }
        ]
      },
      {
        id: "3.2",
        title: "3.2 Heisenberg模型与自旋波激发:量子磁性来临",
        level: 2,
        content: "海森堡模型和量子磁性理论。",
        children: [
          {
            id: "3.2.1",
            title: "3.2.1 离子磁性与电子结构",
            level: 3,
            content: "磁性的微观起源。"
          },
          {
            id: "3.2.2",
            title: "3.2.2 铁磁Heisenberg模型",
            level: 3,
            content: "铁磁海森堡模型的研究。"
          },
          {
            id: "3.2.3",
            title: "3.2.3 反铁磁Heisenberg模型",
            level: 3,
            content: "反铁磁海森堡模型的性质。"
          }
        ]
      },
      {
        id: "3.3",
        title: "3.3 一维晶格费米子:一维空间就是不同",
        level: 2,
        content: "一维系统的特殊性质和玻色化方法。",
        children: [
          {
            id: "3.3.1",
            title: "3.3.1 一维量子XY模型与Jordan-Wigner变换",
            level: 3,
            content: "Jordan-Wigner变换的应用。"
          },
          {
            id: "3.3.2",
            title: "3.3.2 一维相互作用费米子系统:玻色化与Tomonaga模型",
            level: 3,
            content: "玻色化方法的基本思想。"
          },
          {
            id: "3.3.3",
            title: "3.3.3 无自旋费米子的Tomonaga模型",
            level: 3,
            content: "Tomonaga-Luttinger液体理论。"
          },
          {
            id: "3.3.4",
            title: "3.3.4 玻色化的实际形式*",
            level: 3,
            content: "玻色化的具体实现。"
          },
          {
            id: "3.3.5",
            title: "3.3.5 玻色化的应用:XY模型的自旋关联*",
            level: 3,
            content: "XY模型的关联函数计算。"
          },
          {
            id: "3.3.6",
            title: "3.3.6 玻色化的应用:反铁磁Heisenberg链*",
            level: 3,
            content: "反铁磁链的玻色化处理。"
          },
          {
            id: "3.3.7",
            title: "3.3.7 玻色化的应用:一维Hubbard模型*",
            level: 3,
            content: "一维Hubbard模型的精确解。"
          }
        ]
      },
      {
        id: "3.4",
        title: "3.4 磁性杂质与近藤问题:最干净的多体问题*",
        level: 2,
        content: "近藤效应和磁性杂质问题。",
        children: [
          {
            id: "3.4.1",
            title: "3.4.1 从Anderson到Kondo模型*",
            level: 3,
            content: "Anderson模型到Kondo模型的映射。"
          },
          {
            id: "3.4.2",
            title: "3.4.2 近藤的电阻极小*",
            level: 3,
            content: "近藤效应的实验现象。"
          },
          {
            id: "3.4.3",
            title: "3.4.3 近藤问题*",
            level: 3,
            content: "近藤问题的理论解决。"
          }
        ]
      }
    ]
  },
  {
    id: "4",
    title: "4 费米液体:Landau的探险",
    level: 1,
    content: "Landau费米液体理论，描述金属中准粒子的行为。",
    children: [
      {
        id: "4.1",
        title: "4.1 Landau与费米液体:Landau十诫之一",
        level: 2,
        content: "费米液体理论的基本思想。",
        children: [
          {
            id: "4.1.1",
            title: "4.1.1 理论物理教程与其他",
            level: 3,
            content: "Landau的理论物理贡献。"
          },
          {
            id: "4.1.2",
            title: "4.1.2 动机:He-3流体",
            level: 3,
            content: "液氦-3作为费米液体的例子。"
          },
          {
            id: "4.1.3",
            title: "4.1.3 费米液体的精髓",
            level: 3,
            content: "费米液体理论的核心概念。"
          }
        ]
      },
      {
        id: "4.2",
        title: "4.2 绝热性:电子总归是电子",
        level: 2,
        content: "绝热连续性和准粒子概念。",
        children: [
          {
            id: "4.2.1",
            title: "4.2.1 Landau能量泛函",
            level: 3,
            content: "Landau能量泛函的构造。"
          },
          {
            id: "4.2.2",
            title: "4.2.2 费米液体的热力学熵和自由能",
            level: 3,
            content: "费米液体的热力学性质。"
          },
          {
            id: "4.2.3",
            title: "4.2.3 Landau参数",
            level: 3,
            content: "Landau参数的物理意义。"
          },
          {
            id: "4.2.4",
            title: "4.2.4 准粒子相互作用对磁化率和有效质量的修正",
            level: 3,
            content: "相互作用对物理量的修正。"
          }
        ]
      },
      {
        id: "4.3",
        title: "4.3 费米液体的集体模式与Boltzmann方程:面对非平衡",
        level: 2,
        content: "费米液体的动力学性质。",
        children: [
          {
            id: "4.3.1",
            title: "4.3.1 碰撞项",
            level: 3,
            content: "Boltzmann方程中的碰撞项。"
          },
          {
            id: "4.3.2",
            title: "4.3.2 无碰撞Boltzmann方程与零声",
            level: 3,
            content: "零声模式的理论。"
          }
        ]
      },
      {
        id: "4.4",
        title: "4.4 费米液体准粒子的散射率:黄金规则定乾坤",
        level: 2,
        content: "准粒子的散射和寿命。",
        children: [
          {
            id: "4.4.1",
            title: "4.4.1 准粒子概念的推广*",
            level: 3,
            content: "准粒子概念的一般化。"
          },
          {
            id: "4.4.2",
            title: "4.4.2 费米液体准粒子的散射率、黄金定则和测定表征*",
            level: 3,
            content: "准粒子散射率的理论和实验测定。"
          }
        ]
      },
      {
        id: "4.5",
        title: "4.5 费米液体的微观基础:场论方法初显神威*",
        level: 2,
        content: "费米液体理论的微观基础。",
        children: [
          {
            id: "4.5.1",
            title: "4.5.1 Luttinger定理*",
            level: 3,
            content: "Luttinger定理的证明和意义。"
          },
          {
            id: "4.5.2",
            title: "4.5.2 费米液体的序参量*",
            level: 3,
            content: "费米液体的序参量描述。"
          }
        ]
      }
    ]
  },
  {
    id: "5",
    title: "5 相变和对称破缺:Landau的再一次探险",
    level: 1,
    content: "相变理论和对称破缺的基本概念，Landau相变理论。",
    children: [
      {
        id: "5.1",
        title: "5.1 相变和对称破缺:不对称的世界",
        level: 2,
        content: "相变和对称破缺的基本概念。"
      },
      {
        id: "5.2",
        title: "5.2 Landau平均场理论:临界点的故事",
        level: 2,
        content: "Landau平均场理论的基本框架。",
        children: [
          {
            id: "5.2.1",
            title: "5.2.1 Landau平均场理论的可观测测量",
            level: 3,
            content: "平均场理论的实验验证。"
          },
          {
            id: "5.2.2",
            title: "5.2.2 临界指数与标度律",
            level: 3,
            content: "临界现象的标度行为。"
          },
          {
            id: "5.2.3",
            title: "5.2.3 Ginzburg-Landau理论:非均匀序参量",
            level: 3,
            content: "空间非均匀的序参量理论。"
          },
          {
            id: "5.2.4",
            title: "5.2.4 Landau平均场理论的正确性",
            level: 3,
            content: "平均场理论的适用范围。"
          },
          {
            id: "5.2.5",
            title: "5.2.5 平均场上的涨落效应I",
            level: 3,
            content: "涨落对平均场理论的修正。"
          },
          {
            id: "5.2.6",
            title: "5.2.6 平均场上的涨落效应II",
            level: 3,
            content: "高阶涨落效应。"
          }
        ]
      },
      {
        id: "5.3",
        title: "5.3 多分量情况:越多越好",
        level: 2,
        content: "多分量序参量的相变理论。",
        children: [
          {
            id: "5.3.1",
            title: "5.3.1 O(2)模型中的相位模式",
            level: 3,
            content: "O(2)对称性和Goldstone模式。"
          },
          {
            id: "5.3.2",
            title: "5.3.2 Anderson-Higgs机制",
            level: 3,
            content: "规范场中的对称破缺。"
          }
        ]
      },
      {
        id: "5.4",
        title: "5.4 一级相变与电磁场涨落诱导的一级相变:避开临界点*",
        level: 2,
        content: "一级相变的理论描述。",
        children: [
          {
            id: "5.4.1",
            title: "5.4.1 电磁场涨落诱导的一级相变*",
            level: 3,
            content: "电磁涨落对相变的影响。"
          },
          {
            id: "5.4.2",
            title: "5.4.2 一级相变的其他例子*",
            level: 3,
            content: "一级相变的实例分析。"
          }
        ]
      }
    ]
  },
  {
    id: "7",
    title: "7 KT相变:拓扑的崛起",
    level: 1,
    content: "Kosterlitz-Thouless相变和拓扑相变的概念。",
    children: [
      {
        id: "7.1",
        title: "7.1 KT相变:师徒合力破难题",
        level: 2,
        content: "KT相变的发现和基本理论。"
      },
      {
        id: "7.2",
        title: "7.2 XY模型:涡旋快来",
        level: 2,
        content: "XY模型和涡旋激发。",
        children: [
          {
            id: "7.2.1",
            title: "7.2.1 高温展开",
            level: 3,
            content: "XY模型的高温展开。"
          },
          {
            id: "7.2.2",
            title: "7.2.2 涡旋",
            level: 3,
            content: "涡旋激发的基本性质。"
          },
          {
            id: "7.2.3",
            title: "7.2.3 Sine-Gordon模型",
            level: 3,
            content: "Sine-Gordon模型的引入。"
          },
          {
            id: "7.2.4",
            title: "7.2.4 Sine-Gordon模型的重整化群结果",
            level: 3,
            content: "Sine-Gordon模型的重整化群分析。"
          }
        ]
      },
      {
        id: "7.3",
        title: "7.3 KT理论的预言与实验证实:理论的力量",
        level: 2,
        content: "KT相变的实验验证。"
      }
    ]
  },
  {
    id: "8",
    title: "8 量子相变:聆听量子海洋的涨落",
    level: 1,
    content: "量子相变理论，零温下的相变现象。",
    children: [
      {
        id: "8.1",
        title: "8.1 量子相变:量子力学压倒热运动",
        level: 2,
        content: "量子相变的基本概念。",
        children: [
          {
            id: "8.1.1",
            title: "8.1.1 经典Ising模型",
            level: 3,
            content: "经典Ising模型回顾。"
          }
        ]
      },
      {
        id: "8.2",
        title: "8.2 一维量子横场Ising模型:看我们的十八般兵器",
        level: 2,
        content: "量子Ising模型的多种求解方法。",
        children: [
          {
            id: "8.2.1",
            title: "8.2.1 一维量子Ising模型",
            level: 3,
            content: "模型的基本设定。"
          },
          {
            id: "8.2.2",
            title: "8.2.2 微扰理论计算",
            level: 3,
            content: "微扰论方法的应用。"
          },
          {
            id: "8.2.3",
            title: "8.2.3 平均场理论",
            level: 3,
            content: "平均场近似的结果。"
          },
          {
            id: "8.2.4",
            title: "8.2.4 一维量子Ising模型的对偶变换与自对偶*",
            level: 3,
            content: "对偶变换的应用。"
          }
        ]
      },
      {
        id: "8.3",
        title: "8.3 量子Ising模型的精确解:旅行中最美的珍珠",
        level: 2,
        content: "量子Ising模型的精确求解。",
        children: [
          {
            id: "8.3.1",
            title: "8.3.1 Jordan-Wigner变换",
            level: 3,
            content: "Jordan-Wigner变换的具体应用。"
          },
          {
            id: "8.3.2",
            title: "8.3.2 与Kitaev超导链模型的等价*",
            level: 3,
            content: "与Kitaev模型的联系。"
          },
          {
            id: "8.3.3",
            title: "8.3.3 模型的对角化",
            level: 3,
            content: "哈密顿量的对角化过程。"
          },
          {
            id: "8.3.4",
            title: "8.3.4 精确解的物理性质",
            level: 3,
            content: "精确解给出的物理图像。"
          },
          {
            id: "8.3.5",
            title: "8.3.5 自由能密度与临界指数",
            level: 3,
            content: "热力学量和临界行为。"
          },
          {
            id: "8.3.6",
            title: "8.3.6 与实验的比较*",
            level: 3,
            content: "理论与实验的对比。"
          }
        ]
      },
      {
        id: "8.4",
        title: "8.4 量子模型与经典统计模型的对应:总归是经典的好",
        level: 2,
        content: "量子模型与经典模型的对应关系。",
        children: [
          {
            id: "8.4.1",
            title: "8.4.1 物理量的统计平均计算",
            level: 3,
            content: "统计平均的计算方法。"
          },
          {
            id: "8.4.2",
            title: "8.4.2 一般情况的对应",
            level: 3,
            content: "量子-经典对应的一般规律。"
          },
          {
            id: "8.4.3",
            title: "8.4.3 一维Ising模型的转移矩阵解与对应*",
            level: 3,
            content: "转移矩阵方法的应用。"
          }
        ]
      },
      {
        id: "8.5",
        title: "8.5 拓扑量子相变:当拓扑遇见量子涨落*",
        level: 2,
        content: "拓扑量子相变的理论。",
        children: [
          {
            id: "8.5.1",
            title: "8.5.1 自由费米子的Lifshitz相变*",
            level: 3,
            content: "Lifshitz相变的基本概念。"
          },
          {
            id: "8.5.2",
            title: "8.5.2 Lifshitz相变的一个例子:磁场下的一维量子XY模型*",
            level: 3,
            content: "具体的Lifshitz相变例子。"
          },
          {
            id: "8.5.3",
            title: "8.5.3 拓扑量子相变:Su-Schrieffer-Heeger模型及其量子相变*",
            level: 3,
            content: "SSH模型的拓扑相变。"
          },
          {
            id: "8.5.4",
            title: "8.5.4 一维量子横场Ising模型中的拓扑物态与Majorana费米子*",
            level: 3,
            content: "Majorana费米子的出现。"
          },
          {
            id: "8.5.5",
            title: "8.5.5 一维量子横场Ising模型的共形场论描述*",
            level: 3,
            content: "共形场论的应用。"
          }
        ]
      }
    ]
  },
  {
    id: "9",
    title: "9 路径积分:多体物理的新宠",
    level: 1,
    content: "路径积分方法在多体物理中的应用。",
    children: [
      {
        id: "9.1",
        title: "9.1 路径积分:对历史求和",
        level: 2,
        content: "路径积分的基本概念。",
        children: [
          {
            id: "9.1.1",
            title: "9.1.1 单粒子的路径积分",
            level: 3,
            content: "单粒子系统的路径积分表示。"
          }
        ]
      },
      {
        id: "9.2",
        title: "9.2 量子场的路径积分:我们都用相干态",
        level: 2,
        content: "量子场论的路径积分形式。",
        children: [
          {
            id: "9.2.1",
            title: "9.2.1 玻色场",
            level: 3,
            content: "玻色场的路径积分。"
          },
          {
            id: "9.2.2",
            title: "9.2.2 费米场",
            level: 3,
            content: "费米场的路径积分。"
          }
        ]
      },
      {
        id: "9.3",
        title: "9.3 路径积分的简单例子:三人行比四人强",
        level: 2,
        content: "路径积分方法的具体应用。",
        children: [
          {
            id: "9.3.1",
            title: "9.3.1 自由费米子",
            level: 3,
            content: "自由费米子的路径积分处理。"
          },
          {
            id: "9.3.2",
            title: "9.3.2 Coulomb电子气",
            level: 3,
            content: "库仑电子气的路径积分方法。"
          },
          {
            id: "9.3.3",
            title: "9.3.3 巡游电子的量子相变:Hertz理论*",
            level: 3,
            content: "Hertz理论的路径积分形式。"
          }
        ]
      },
      {
        id: "9.4",
        title: "9.4 相互作用费米子体系的重整化*",
        level: 2,
        content: "相互作用费米子的重整化群分析。",
        children: [
          {
            id: "9.4.1",
            title: "9.4.1 一维无自旋费米子的重整化*",
            level: 3,
            content: "一维费米子系统的重整化。"
          },
          {
            id: "9.4.2",
            title: "9.4.2 二维无自旋费米子体系的重整化:手性费米子形式*",
            level: 3,
            content: "手性费米子的重整化。"
          },
          {
            id: "9.4.3",
            title: "9.4.3 二维无自旋费米子体系的重整化:patch形式*",
            level: 3,
            content: "patch方法的重整化。"
          },
          {
            id: "9.4.4",
            title: "9.4.4 二维无自旋费米子体系:临界玻色型涨落和非费米液体*",
            level: 3,
            content: "非费米液体行为的出现。"
          }
        ]
      },
      {
        id: "9.5",
        title: "9.5 量子自旋的路径积分形式:逃脱算符的枷锁",
        level: 2,
        content: "自旋系统的路径积分表示。",
        children: [
          {
            id: "9.5.1",
            title: "9.5.1 单个S=1/2自旋",
            level: 3,
            content: "单个自旋的路径积分。"
          },
          {
            id: "9.5.2",
            title: "9.5.2 一维量子反铁磁Heisenberg反铁磁链模型",
            level: 3,
            content: "反铁磁链的路径积分处理。"
          },
          {
            id: "9.5.3",
            title: "9.5.3 高维Heisenberg反铁磁体:非线性sigma模型场论*",
            level: 3,
            content: "高维反铁磁体的场论描述。"
          }
        ]
      }
    ]
  },
  {
    id: "10",
    title: "10 拓扑物态:万物皆拓扑",
    level: 1,
    content: "拓扑物态的基本概念和量子霍尔效应。",
    children: [
      {
        id: "10.1",
        title: "10.1 拓扑物态:看谁谁没有拓扑",
        level: 2,
        content: "拓扑物态的基本概念。"
      },
      {
        id: "10.2",
        title: "10.2 量子Hall效应:强磁场的礼物",
        level: 2,
        content: "量子霍尔效应的理论描述。",
        children: [
          {
            id: "10.2.1",
            title: "10.2.1 Laughlin的规范讨论",
            level: 3,
            content: "Laughlin的规范论证。"
          },
          {
            id: "10.2.2",
            title: "10.2.2 Landau量子化",
            level: 3,
            content: "磁场中的Landau能级。"
          },
          {
            id: "10.2.3",
            title: "10.2.3 量子振荡",
            level: 3,
            content: "量子振荡现象。"
          },
          {
            id: "10.2.4",
            title: "10.2.4 量子霍尔电导的计算",
            level: 3,
            content: "霍尔电导的理论计算。"
          },
          {
            id: "10.2.5",
            title: "10.2.5 圆柱几何下的Laughlin规范讨论",
            level: 3,
            content: "不同几何下的规范论证。"
          },
          {
            id: "10.2.6",
            title: "10.2.6 边缘态",
            level: 3,
            content: "量子霍尔态的边缘态。"
          }
        ]
      },
      {
        id: "10.3",
        title: "10.3 Hofstadter模型与Hofstadter butterfly:让人迷恋的蝴蝶",
        level: 2,
        content: "Hofstadter模型和分形能谱。",
        children: [
          {
            id: "10.3.1",
            title: "10.3.1 Peierls代换",
            level: 3,
            content: "磁场的Peierls代换。"
          },
          {
            id: "10.3.2",
            title: "10.3.2 金属环中的持续电流",
            level: 3,
            content: "持续电流的量子效应。"
          },
          {
            id: "10.3.3",
            title: "10.3.3 Hofstadter模型",
            level: 3,
            content: "Hofstadter模型的求解。"
          }
        ]
      },
      {
        id: "10.4",
        title: "10.4 六角晶格上的紧束缚模型系统:新世纪的交响乐",
        level: 2,
        content: "石墨烯和拓扑绝缘体模型。",
        children: [
          {
            id: "10.4.1",
            title: "10.4.1 石墨烯的紧束缚模型",
            level: 3,
            content: "石墨烯的能带结构。"
          },
          {
            id: "10.4.2",
            title: "10.4.2 Haldane模型与Chern绝缘体",
            level: 3,
            content: "Chern绝缘体的理论模型。"
          },
          {
            id: "10.4.3",
            title: "10.4.3 Kane-Mele模型与量子自旋霍尔绝缘体",
            level: 3,
            content: "量子自旋霍尔效应。"
          },
          {
            id: "10.4.4",
            title: "10.4.4 Z₂拓扑不变量与拓扑绝缘体",
            level: 3,
            content: "Z₂拓扑不变量的计算。"
          }
        ]
      },
      {
        id: "10.5",
        title: "10.5 Kitaev超导链模型:玩具也好用*",
        level: 2,
        content: "Kitaev超导链和Majorana费米子。",
        children: [
          {
            id: "10.5.1",
            title: "10.5.1 相变*",
            level: 3,
            content: "拓扑相变的分析。"
          },
          {
            id: "10.5.2",
            title: "10.5.2 动量空间哈密顿量*",
            level: 3,
            content: "动量空间的描述。"
          },
          {
            id: "10.5.3",
            title: "10.5.3 动量空间粒子空穴变换的效果*",
            level: 3,
            content: "粒子空穴对称性。"
          },
          {
            id: "10.5.4",
            title: "10.5.4 动量空间的能谱和拓扑不变量*",
            level: 3,
            content: "拓扑不变量的计算。"
          },
          {
            id: "10.5.5",
            title: "10.5.5 Kitaev超导模型的物理实现/对应*",
            level: 3,
            content: "实验实现的可能性。"
          }
        ]
      }
    ]
  },
  {
    id: "11",
    title: "11 超流Mott相变:玻色子成为囚徒",
    level: 1,
    content: "玻色子系统的超流-Mott绝缘体相变。",
    children: [
      {
        id: "11.1",
        title: "11.1 玻色凝聚与超流:低温物理的奇遇",
        level: 2,
        content: "玻色-爱因斯坦凝聚和超流现象。",
        children: [
          {
            id: "11.1.1",
            title: "11.1.1 基本模型",
            level: 3,
            content: "玻色子系统的基本模型。"
          },
          {
            id: "11.1.2",
            title: "11.1.2 短程相互作用下的模型",
            level: 3,
            content: "短程相互作用的处理。"
          }
        ]
      },
      {
        id: "11.2",
        title: "11.2 玻色-爱因斯坦凝聚与超流:到底谁才是主人",
        level: 2,
        content: "BEC和超流的关系。",
        children: [
          {
            id: "11.2.1",
            title: "11.2.1 自由空间的玻色-爱因斯坦凝聚",
            level: 3,
            content: "自由玻色气体的BEC。"
          },
          {
            id: "11.2.2",
            title: "11.2.2 简谐势阱中的玻色-爱因斯坦凝聚",
            level: 3,
            content: "势阱中的BEC。"
          },
          {
            id: "11.2.3",
            title: "11.2.3 弱相互作用的玻色子体系:液氦-4的超流理论",
            level: 3,
            content: "液氦-4的超流性质。"
          },
          {
            id: "11.2.4",
            title: "11.2.4 液氦-4的Feynman理论*",
            level: 3,
            content: "Feynman的超流理论。"
          },
          {
            id: "11.2.5",
            title: "11.2.5 序参量和规范对称破缺*",
            level: 3,
            content: "超流的序参量描述。"
          },
          {
            id: "11.2.6",
            title: "11.2.6 非对角长程序*",
            level: 3,
            content: "非对角长程序的概念。"
          }
        ]
      },
      {
        id: "11.3",
        title: "11.3 晶格中的玻色子:Bose-Hubbard模型初探",
        level: 2,
        content: "Bose-Hubbard模型和超流-Mott相变。",
        children: [
          {
            id: "11.3.1",
            title: "11.3.1 几个极限分析",
            level: 3,
            content: "模型的极限情况分析。"
          },
          {
            id: "11.3.2",
            title: "11.3.2 超流-Mott相变的平均场理论",
            level: 3,
            content: "相变的平均场处理。"
          },
          {
            id: "11.3.3",
            title: "11.3.3 超越平均场理论*",
            level: 3,
            content: "涨落效应的考虑。"
          },
          {
            id: "11.3.4",
            title: "11.3.4 无穷大U极限:变换至自旋模型",
            level: 3,
            content: "强相互作用极限的处理。"
          }
        ]
      }
    ]
  },
  {
    id: "12",
    title: "12 声子和光子:量子场的集体舞蹈",
    level: 1,
    content: "声子和光子的量子场论描述。",
    children: [
      {
        id: "12.1",
        title: "12.1 晶格振动与声子:电子无处不在的伙伴",
        level: 2,
        content: "晶格振动的量子化和声子概念。",
        children: [
          {
            id: "12.1.1",
            title: "12.1.1 一维原子链的经典描述",
            level: 3,
            content: "一维原子链的经典力学。"
          },
          {
            id: "12.1.2",
            title: "12.1.2 一维原子链的量子描述",
            level: 3,
            content: "原子链的量子力学处理。"
          },
          {
            id: "12.1.3",
            title: "12.1.3 零模与总动量",
            level: 3,
            content: "零模和动量守恒。"
          },
          {
            id: "12.1.4",
            title: "12.1.4 原子链的量子化",
            level: 3,
            content: "声子的产生湮灭算符。"
          },
          {
            id: "12.1.5",
            title: "12.1.5 声子Green函数",
            level: 3,
            content: "声子的格林函数。"
          },
          {
            id: "12.1.6",
            title: "12.1.6 声子气体的热容",
            level: 3,
            content: "声子对热容的贡献。"
          },
          {
            id: "12.1.7",
            title: "12.1.7 一维固体的电子-声子相互作用",
            level: 3,
            content: "电子-声子耦合。"
          },
          {
            id: "12.1.8",
            title: "12.1.8 层展的标准量(量子)场*",
            level: 3,
            content: "标量场的基本性质。"
          },
          {
            id: "12.1.9",
            title: "12.1.9 标量场的拓扑解:扭结*",
            level: 3,
            content: "标量场的拓扑孤子。"
          }
        ]
      },
      {
        id: "12.2",
        title: "12.2 电磁场与光子:重新理解光*",
        level: 2,
        content: "电磁场的量子化和光子。",
        children: [
          {
            id: "12.2.1",
            title: "12.2.1 Maxwell方程与规范条件*",
            level: 3,
            content: "Maxwell方程和规范选择。"
          },
          {
            id: "12.2.2",
            title: "12.2.2 修改Maxwell方程:Dirac磁单极*",
            level: 3,
            content: "磁单极的理论。"
          },
          {
            id: "12.2.3",
            title: "12.2.3 电磁场的量子哈密顿量*",
            level: 3,
            content: "电磁场的量子化。"
          },
          {
            id: "12.2.4",
            title: "12.2.4 电磁场的路径积分形式*",
            level: 3,
            content: "电磁场的路径积分。"
          },
          {
            id: "12.2.5",
            title: "12.2.5 拓扑场论与轴子电动力学*",
            level: 3,
            content: "拓扑项和轴子场。"
          }
        ]
      },
      {
        id: "12.3",
        title: "12.3 电磁场与物质的相互作用:量子电动力学速成班*",
        level: 2,
        content: "QED的基本概念。",
        children: [
          {
            id: "12.3.1",
            title: "12.3.1 Dirac费米子",
            level: 3,
            content: "Dirac方程和费米子。"
          },
          {
            id: "12.3.2",
            title: "12.3.2 Dirac费米子的关联函数*",
            level: 3,
            content: "费米子的格林函数。"
          },
          {
            id: "12.3.3",
            title: "12.3.3 量子电动力学*",
            level: 3,
            content: "QED的基本理论。"
          }
        ]
      },
      {
        id: "12.4",
        title: "12.4 推广的电动力学:走马观花Yang-Mills非阿贝尔规范场*",
        level: 2,
        content: "非阿贝尔规范理论简介。",
        children: [
          {
            id: "12.4.1",
            title: "12.4.1 SU(N)规范理论*",
            level: 3,
            content: "SU(N)规范场理论。"
          },
          {
            id: "12.4.2",
            title: "12.4.2 渐进自由与禁闭*",
            level: 3,
            content: "QCD的基本性质。"
          },
          {
            id: "12.4.3",
            title: "12.4.3 对称破缺与质量产生*",
            level: 3,
            content: "Higgs机制。"
          },
          {
            id: "12.4.4",
            title: "12.4.4 磁单极与瞬子*",
            level: 3,
            content: "拓扑孤子解。"
          }
        ]
      }
    ]
  },
  {
    id: "13",
    title: "13 超导:拥有BCS理论的幸运?",
    level: 1,
    content: "超导现象和BCS理论。",
    children: [
      {
        id: "13.1",
        title: "13.1 超导:神秘的宏观量子现象",
        level: 2,
        content: "超导现象的基本特征。",
        children: [
          {
             id: "13.1.1",
             title: "13.1.1 超导的发现与基本现象",
             level: 3,
             content: "超导现象的历史发现和基本特征。"
           },
           {
             id: "13.1.2",
             title: "13.1.2 完全抗磁性:Meissner效应",
             level: 3,
             content: "Meissner效应的物理机制。"
           },
           {
             id: "13.1.3",
             title: "13.1.3 零电阻与临界电流",
             level: 3,
             content: "超导体的零电阻特性。"
           }
         ]
       },
       {
         id: "13.2",
         title: "13.2 London理论:唯象的成功",
         level: 2,
         content: "London理论对超导现象的唯象描述。",
         children: [
           {
             id: "13.2.1",
             title: "13.2.1 London方程",
             level: 3,
             content: "London方程的推导和意义。"
           },
           {
             id: "13.2.2",
             title: "13.2.2 穿透深度",
             level: 3,
             content: "磁场穿透深度的计算。"
           },
           {
             id: "13.2.3",
             title: "13.2.3 第一类与第二类超导体",
             level: 3,
             content: "超导体的分类和性质。"
           }
         ]
       },
       {
         id: "13.3",
         title: "13.3 Ginzburg-Landau理论:序参量的胜利",
         level: 2,
         content: "Ginzburg-Landau理论的基本框架。",
         children: [
           {
             id: "13.3.1",
             title: "13.3.1 GL自由能泛函",
             level: 3,
             content: "Ginzburg-Landau自由能的构造。"
           },
           {
             id: "13.3.2",
             title: "13.3.2 GL方程",
             level: 3,
             content: "Ginzburg-Landau方程的推导。"
           },
           {
             id: "13.3.3",
             title: "13.3.3 相干长度与GL参数",
             level: 3,
             content: "特征长度尺度的定义。"
           },
           {
             id: "13.3.4",
             title: "13.3.4 涡旋解",
             level: 3,
             content: "超导涡旋的理论描述。"
           }
         ]
       },
       {
         id: "13.4",
         title: "13.4 BCS理论:微观机制的揭示",
         level: 2,
         content: "BCS理论对超导微观机制的解释。",
         children: [
           {
             id: "13.4.1",
             title: "13.4.1 Cooper对的形成",
             level: 3,
             content: "Cooper对的物理机制。"
           },
           {
             id: "13.4.2",
             title: "13.4.2 BCS哈密顿量",
             level: 3,
             content: "BCS模型的哈密顿量。"
           },
           {
             id: "13.4.3",
             title: "13.4.3 平均场近似",
             level: 3,
             content: "BCS理论的平均场处理。"
           },
           {
             id: "13.4.4",
             title: "13.4.4 能隙方程",
             level: 3,
             content: "超导能隙的自洽方程。"
           },
           {
             id: "13.4.5",
             title: "13.4.5 热力学性质",
             level: 3,
             content: "BCS理论预言的热力学性质。"
           }
         ]
       },
       {
         id: "13.5",
         title: "13.5 Josephson效应:宏观量子相干",
         level: 2,
         content: "Josephson效应和宏观量子现象。",
         children: [
           {
             id: "13.5.1",
             title: "13.5.1 直流Josephson效应",
             level: 3,
             content: "直流Josephson效应的理论。"
           },
           {
             id: "13.5.2",
             title: "13.5.2 交流Josephson效应",
             level: 3,
             content: "交流Josephson效应的物理。"
           },
           {
             id: "13.5.3",
             title: "13.5.3 SQUID器件",
             level: 3,
             content: "超导量子干涉器件。"
           }
         ]
       },
       {
         id: "13.6",
         title: "13.6 非常规超导:超越BCS*",
         level: 2,
         content: "非常规超导体的理论和实验。",
         children: [
           {
             id: "13.6.1",
             title: "13.6.1 高温超导体*",
             level: 3,
             content: "铜氧化物高温超导体。"
           },
           {
             id: "13.6.2",
             title: "13.6.2 重费米子超导体*",
             level: 3,
             content: "重费米子化合物中的超导。"
           },
           {
             id: "13.6.3",
             title: "13.6.3 拓扑超导体*",
             level: 3,
             content: "拓扑超导态的理论。"
           }
         ]
       }
     ]
   },
   {
    id: "14",
    title: "14 费米子的相变:金属走向何方?",
    level: 1,
    content: "费米子系统中的各种相变现象和理论描述。",
     children: [
       {
         id: "14.1",
         title: "14.1 自旋液体的概念:逃脱磁序的束缚",
         level: 2,
         content: "量子自旋液体的基本概念。",
         children: [
           {
             id: "14.1.1",
             title: "14.1.1 磁阻挫与几何阻挫",
             level: 3,
             content: "阻挫磁性系统的基本概念。"
           },
           {
             id: "14.1.2",
             title: "14.1.2 量子涨落的作用",
             level: 3,
             content: "量子涨落对磁序的破坏。"
           }
         ]
       },
       {
         id: "14.2",
         title: "14.2 RVB理论:Anderson的洞察",
         level: 2,
         content: "共振价键理论的基本思想。",
         children: [
           {
             id: "14.2.1",
             title: "14.2.1 价键态的概念",
             level: 3,
             content: "价键态的量子力学描述。"
           },
           {
             id: "14.2.2",
             title: "14.2.2 RVB波函数",
             level: 3,
             content: "共振价键波函数的构造。"
           },
           {
             id: "14.2.3",
             title: "14.2.3 自旋液体的特征",
             level: 3,
             content: "自旋液体态的基本特征。"
           }
         ]
       },
       {
         id: "14.3",
         title: "14.3 分数化激发:自旋子的世界",
         level: 2,
         content: "自旋液体中的分数化激发。",
         children: [
           {
             id: "14.3.1",
             title: "14.3.1 自旋子激发",
             level: 3,
             content: "自旋的分数化激发。"
           },
           {
             id: "14.3.2",
             title: "14.3.2 规范场理论",
             level: 3,
             content: "自旋液体的规范场描述。"
           },
           {
             id: "14.3.3",
             title: "14.3.3 拓扑序",
             level: 3,
             content: "自旋液体中的拓扑序。"
           }
         ]
       },
       {
         id: "14.4",
         title: "14.4 实验候选材料:寻找自旋液体",
         level: 2,
         content: "量子自旋液体的候选材料。",
         children: [
           {
             id: "14.4.1",
             title: "14.4.1 有机自旋液体",
             level: 3,
             content: "有机化合物中的自旋液体。"
           },
           {
             id: "14.4.2",
             title: "14.4.2 Kagome晶格材料",
             level: 3,
             content: "Kagome晶格上的自旋液体。"
           },
           {
             id: "14.4.3",
             title: "14.4.3 Kitaev材料",
             level: 3,
             content: "Kitaev自旋液体的实现。"
           }
         ]
       }
     ]
   },
   {
     id: "15",
     title: "15 晶格规范理论:从Wegner到Kitaev",
     level: 1,
     content: "晶格规范理论的发展历程和现代应用。",
     children: [
       {
         id: "15.1",
         title: "15.1 非费米液体的特征:告别准粒子",
         level: 2,
         content: "非费米液体态的基本特征。",
         children: [
           {
             id: "15.1.1",
             title: "15.1.1 准粒子图像的失效",
             level: 3,
             content: "费米液体理论的局限性。"
           },
           {
             id: "15.1.2",
             title: "15.1.2 异常的标度行为",
             level: 3,
             content: "非费米液体的异常性质。"
           }
         ]
       },
       {
         id: "15.2",
         title: "15.2 Luttinger液体:一维的特殊性",
         level: 2,
         content: "一维系统中的Luttinger液体。",
         children: [
           {
             id: "15.2.1",
             title: "15.2.1 一维费米子的玻色化",
             level: 3,
             content: "一维费米子的玻色化描述。"
           },
           {
             id: "15.2.2",
             title: "15.2.2 Luttinger液体参数",
             level: 3,
             content: "Luttinger液体的特征参数。"
           },
           {
             id: "15.2.3",
             title: "15.2.3 关联函数的幂律衰减",
             level: 3,
             content: "Luttinger液体的关联函数。"
           }
         ]
       },
       {
         id: "15.3",
         title: "15.3 边缘费米液体:临界的边缘",
         level: 2,
         content: "边缘费米液体理论。",
         children: [
           {
             id: "15.3.1",
             title: "15.3.1 边缘费米液体的定义",
             level: 3,
             content: "边缘费米液体的基本概念。"
           },
           {
             id: "15.3.2",
             title: "15.3.2 对数修正",
             level: 3,
             content: "边缘费米液体的对数修正。"
           }
         ]
       },
       {
         id: "15.4",
         title: "15.4 奇异金属:高温超导的正常态",
         level: 2,
         content: "奇异金属态的性质。",
         children: [
           {
             id: "15.4.1",
             title: "15.4.1 线性电阻率",
             level: 3,
             content: "奇异金属的线性电阻率。"
           },
           {
             id: "15.4.2",
             title: "15.4.2 量子临界性",
             level: 3,
             content: "量子临界点附近的行为。"
           }
         ]
       }
     ]
   },
   {
     id: "8",
     title: "8 量子模型与经典统计模型的对应：总归是经典的好",
     level: 1,
     content: "探讨量子模型与经典统计模型之间的对应关系，以及拓扑量子相变的基本理论。",
     children: [
       {
         id: "8.4",
         title: "8.4 量子模型与经典统计模型的对应：总归是经典的好",
         level: 2,
         content: "量子模型与经典统计模型的对应关系研究。",
         children: [
           {
             id: "8.4.1",
             title: "8.4.1 物理量的统计平均计算",
             level: 3,
             content: "Chapter8_4_1"
           },
           {
             id: "8.4.2",
             title: "8.4.2 一般情况的对应",
             level: 3,
             content: "Chapter8_4_2"
           },
           {
             id: "8.4.3",
             title: "8.4.3 一维Ising模型的转移距阵解与对应",
             level: 3,
             content: "Chapter8_4_3"
           }
         ]
       },
       {
         id: "8.5",
         title: "8.5 拓扑量子相变：当拓扑遇见量子涨落",
         level: 2,
         content: "拓扑量子相变的理论基础和具体例子。",
         children: [
           {
             id: "8.5.1",
             title: "8.5.1 自由费米子的Lifshitz相变",
             level: 3,
             content: "Chapter8_5_1"
           },
           {
             id: "8.5.2",
             title: "8.5.2 Lifshitz相变的一个例子-磁场下的一维量子XY模型",
             level: 3,
             content: "Chapter8_5_2"
           },
           {
             id: "8.5.3",
             title: "8.5.3 拓扑量子相变-Su-Schrieffer-Heeger模型及其量子相变",
             level: 3,
             content: "Chapter8_5_3"
           },
           {
             id: "8.5.4",
             title: "8.5.4 一维量子横场Ising模型中的拓扑物态与Majorana费米子",
             level: 3,
             content: "Chapter8_5_4"
           },
           {
             id: "8.5.5",
             title: "8.5.5 一维量子横场Ising模型的共形场论描述",
             level: 3,
             content: "Chapter8_5_5"
           }
         ]
       }
     ]
   },
   {
     id: "16",
     title: "16 隶粒子与规范理论:劈裂电子不可避免",
     level: 1,
     content: "隶粒子方法和规范理论在强关联系统中的应用。",
     children: [
       {
         id: "16.1",
         title: "16.1 隶粒子方法:分解电子",
         level: 2,
         content: "隶粒子表示的基本思想。",
         children: [
           {
             id: "16.1.1",
             title: "16.1.1 电子的分解",
             level: 3,
             content: "电子算符的隶粒子分解。"
           },
           {
             id: "16.1.2",
             title: "16.1.2 约束条件",
             level: 3,
             content: "隶粒子表示中的约束。"
           }
         ]
       },
       {
         id: "16.2",
         title: "16.2 规范理论:约束的代价",
         level: 2,
         content: "凝聚态中的规范理论。",
         children: [
           {
             id: "16.2.1",
             title: "16.2.1 规范场的引入",
             level: 3,
             content: "规范场的物理意义。"
           },
           {
             id: "16.2.2",
             title: "16.2.2 规范不变性",
             level: 3,
             content: "规范对称性的重要性。"
           }
         ]
       },
       {
         id: "16.3",
         title: "16.3 应用实例:从Hubbard到t-J模型",
         level: 2,
         content: "隶粒子方法的具体应用。",
         children: [
           {
             id: "16.3.1",
             title: "16.3.1 t-J模型的隶粒子表示",
             level: 3,
             content: "t-J模型的隶粒子处理。"
           },
           {
             id: "16.3.2",
             title: "16.3.2 平均场理论",
             level: 3,
             content: "隶粒子平均场理论。"
           }
         ]
       }
     ]
   },
   {
     id: "17",
     title: "17 分数量子霍尔效应:Laughlin联姻Chern-Simons",
     level: 1,
     content: "分数量子霍尔效应的理论描述和拓扑性质。",
     children: [
       {
         id: "17.1",
         title: "17.1 SYK模型的定义:随机相互作用",
         level: 2,
         content: "Sachdev-Ye-Kitaev模型的基本定义。",
         children: [
           {
             id: "17.1.1",
             title: "17.1.1 模型的构造",
             level: 3,
             content: "SYK模型的哈密顿量。"
           },
           {
             id: "17.1.2",
             title: "17.1.2 随机性的作用",
             level: 3,
             content: "随机相互作用的物理意义。"
           }
         ]
       },
       {
         id: "17.2",
         title: "17.2 大N极限:可解的强关联系统",
         level: 2,
         content: "SYK模型在大N极限下的求解。",
         children: [
           {
             id: "17.2.1",
             title: "17.2.1 鞍点方程",
             level: 3,
             content: "大N极限下的鞍点近似。"
           },
           {
             id: "17.2.2",
             title: "17.2.2 自能的计算",
             level: 3,
             content: "SYK模型的自能函数。"
           }
         ]
       },
       {
         id: "17.3",
         title: "17.3 混沌性质:量子蝴蝶效应",
         level: 2,
         content: "SYK模型的量子混沌性质。",
         children: [
           {
             id: "17.3.1",
             title: "17.3.1 无序平均",
             level: 3,
             content: "随机系统的无序平均。"
           },
           {
             id: "17.3.2",
             title: "17.3.2 量子混沌指标",
             level: 3,
             content: "量子混沌的判据。"
           }
         ]
       },
       {
         id: "17.4",
         title: "17.4 AdS/CFT对应:引力的全息*",
         level: 2,
         content: "SYK模型与引力理论的对应关系。",
         children: [
           {
             id: "17.4.1",
             title: "17.4.1 全息对偶*",
             level: 3,
             content: "AdS/CFT对应的基本概念。"
           },
           {
             id: "17.4.2",
             title: "17.4.2 黑洞物理*",
             level: 3,
             content: "SYK模型与黑洞的联系。"
           }
         ]
       }
     ]
   },
   {
     id: "18",
     title: "18 SYK模型与非费米液体:Kitaev传说的延续",
     level: 1,
     content: "SYK模型展现的量子多体混沌和非费米液体性质。",
     children: [
       {
         id: "18.1",
         title: "18.1 神经网络量子态:用AI表示量子态",
         level: 2,
         content: "用神经网络表示量子多体态。",
         children: [
           {
             id: "18.1.1",
             title: "18.1.1 受限玻尔兹曼机",
             level: 3,
             content: "RBM在量子态表示中的应用。"
           },
           {
             id: "18.1.2",
             title: "18.1.2 卷积神经网络",
             level: 3,
             content: "CNN在量子多体系统中的应用。"
           }
         ]
       },
       {
         id: "18.2",
         title: "18.2 变分蒙特卡罗:AI优化波函数",
         level: 2,
         content: "基于神经网络的变分蒙特卡罗方法。",
         children: [
           {
             id: "18.2.1",
             title: "18.2.1 变分原理",
             level: 3,
             content: "变分方法的基本原理。"
           },
           {
             id: "18.2.2",
             title: "18.2.2 梯度优化",
             level: 3,
             content: "神经网络参数的优化。"
           }
         ]
       },
       {
         id: "18.3",
         title: "18.3 相变识别:AI识别物质相",
         level: 2,
         content: "机器学习在相变识别中的应用。",
         children: [
           {
             id: "18.3.1",
             title: "18.3.1 监督学习",
             level: 3,
             content: "有监督的相变识别。"
           },
           {
             id: "18.3.2",
             title: "18.3.2 无监督学习",
             level: 3,
             content: "无监督的相变检测。"
           }
         ]
       },
       {
         id: "18.4",
         title: "18.4 材料设计:AI加速发现",
         level: 2,
         content: "机器学习辅助的材料设计。",
         children: [
           {
             id: "18.4.1",
             title: "18.4.1 高通量计算",
             level: 3,
             content: "大规模材料筛选。"
           },
           {
             id: "18.4.2",
             title: "18.4.2 性质预测",
             level: 3,
             content: "材料性质的机器学习预测。"
           }
         ]
       }
     ]
   },
   {
     id: "19",
     title: "19 展望:路在何方?",
     level: 1,
     content: "凝聚态物理未来发展的展望和挑战。",
     children: [
       {
         id: "19.1",
         title: "19.1 未解决的问题:挑战依然存在",
         level: 2,
         content: "凝聚态物理中的重大未解决问题。",
         children: [
           {
             id: "19.1.1",
             title: "19.1.1 高温超导机制",
             level: 3,
             content: "高温超导的微观机制。"
           },
           {
             id: "19.1.2",
             title: "19.1.2 量子自旋液体的实现",
             level: 3,
             content: "寻找真正的量子自旋液体。"
           },
           {
             id: "19.1.3",
             title: "19.1.3 多体局域化",
             level: 3,
             content: "相互作用系统中的局域化。"
           }
         ]
       },
       {
         id: "19.2",
         title: "19.2 新兴方向:前沿探索",
         level: 2,
         content: "凝聚态物理的新兴研究方向。",
         children: [
           {
             id: "19.2.1",
             title: "19.2.1 拓扑量子计算",
             level: 3,
             content: "基于拓扑的量子计算。"
           },
           {
             id: "19.2.2",
             title: "19.2.2 摩尔纹物理",
             level: 3,
             content: "扭转双分子层的新物理。"
           },
           {
             id: "19.2.3",
             title: "19.2.3 非平衡量子多体系统",
             level: 3,
             content: "远离平衡的量子系统。"
           }
         ]
       },
       {
         id: "19.3",
         title: "19.3 技术应用:从基础到应用",
         level: 2,
         content: "凝聚态物理在技术中的应用前景。",
         children: [
           {
             id: "19.3.1",
             title: "19.3.1 量子技术",
             level: 3,
             content: "量子计算和量子通信。"
           },
           {
             id: "19.3.2",
             title: "19.3.2 新能源材料",
             level: 3,
             content: "能源存储和转换材料。"
           },
           {
             id: "19.3.3",
             title: "19.3.3 自旋电子学",
             level: 3,
             content: "基于自旋的电子器件。"
           }
         ]
       },
       {
         id: "19.4",
         title: "19.4 跨学科交叉:融合创新",
         level: 2,
         content: "凝聚态物理与其他学科的交叉。",
         children: [
           {
             id: "19.4.1",
             title: "19.4.1 量子信息科学",
             level: 3,
             content: "凝聚态与量子信息的结合。"
           },
           {
             id: "19.4.2",
             title: "19.4.2 生物物理",
             level: 3,
             content: "物理方法在生物学中的应用。"
           },
           {
             id: "19.4.3",
             title: "19.4.3 机器学习",
             level: 3,
             content: "AI与物理的深度融合。"
           }
         ]
       },
       {
         id: "19.5",
         title: "19.5 结语:多就是不同的永恒魅力",
         level: 2,
         content: "对凝聚态物理未来的思考。",
         children: [
           {
             id: "19.5.1",
             title: "19.5.1 理论与实验的结合",
             level: 3,
             content: "理论和实验的协同发展。"
           },
           {
             id: "19.5.2",
             title: "19.5.2 基础研究的重要性",
             level: 3,
             content: "基础科学研究的价值。"
           },
           {
             id: "19.5.3",
             title: "19.5.3 未来的挑战与机遇",
             level: 3,
             content: "凝聚态物理的未来展望。"
           }
         ]
       }
     ]
   }
 ]