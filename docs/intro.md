---
sidebar_position: 1
---

# DosAsm

DosAsm试图整合DOS环境下汇编语言开发的工具说明和参考资料，以下是主要项目

## DOSASM

[![in github](https://img.shields.io/badge/-dosasm%2Fdosasm-lightgrey?logo=github)](https://github.com/dosasm/dosasm)
[![in gitee](https://img.shields.io/badge/-dosasm%2Fdosasm-red?logo=gitee)](https://gitee.com/dosasm/dosasm)

该项目为本pages页的源码网站，使用[docusaurus](https://docusaurus.io/)构建。项目包括：

- DOSRUN等工具的文档
- [《微型计算机原理及接口技术》课程笔记](notes-njupt/00_总览.md)
- [关于DOS系统、汇编语言的一些参考](reference.md)

## DOSRUN

[![in market](https://img.shields.io/badge/-xsro.masm--tasm-blue?logo=visual-studio-code)](https://marketplace.visualstudio.com/items?itemName=xsro.masm-tasm)
[![dosrun playGround](https://img.shields.io/badge/-reactApp-blue?logo=react)](https://dosasm.github.io/dosrun)
[![in github](https://img.shields.io/badge/-dosasm%2Fdosrun-lightgrey?logo=github)](https://github.com/dosasm/dosrun)
[![in gitee](https://img.shields.io/badge/-dosasm%2Fdosrun-red?logo=gitee)](https://gitee.com/dosasm/dosrun)

**DOSRUN**提供一些在现代计算机中运行DOS模拟器实现汇编语言开发的简易解决方案，主要包括以下项目。

- [MASM/TASM](https://marketplace.visualstudio.com/items?itemName=xsro.masm-tasm): VSCode插件实现DOS环境模拟器的调用来开发汇编等语言
  - 插件受到[MASM-Code](https://marketplace.visualstudio.com/items?itemName=kaixa.masm-code)的启发，非常感谢原作者
  - 简易文档位于：[VSCode插件](tutorial-masm-tasm/vsce-basic.md)
  - 代码仓库：[github](https://github.com/dosasm/masm-tasm)、[gitee](https://gitee.com/dosasm/masm-tasm)
- [PlayGround](https://dosasm.github.io/dosrun): 使用react构建的在线编译运行调试汇编代码的在线webApp
  - 托管在github pages: <https://dosasm.github.io/dosrun>
  - 同时托管在gitee pages: <https://dosasm.gitee.io/dosrun>
  - 文档位于：[react应用](tutorial-playGround/playGround.md)
  - 代码位于：[dosrun的react-app文件夹](https://github.com/dosasm/dosrun/tree/main/react-app)

## 其他工具

- 汇编语言的一些代码
  - [![in gitee](https://img.shields.io/badge/-dosasm%2FCLTASM-red?logo=gitee)](https://gitee.com/dosasm/CLTASM)
- 通过VSCode的tasks来配置汇编开发环境的方法
  - [![in github](https://img.shields.io/badge/-xsro%2FVSC--ASMtasks-lightgrey?logo=github)](https://github.com/xsro/VSC-ASMtasks)
  - [![in gitee](https://img.shields.io/badge/-dosasm%2FVSC--ASMtasks-red?logo=gitee)](https://gitee.com/dosasm/VSC-ASMtasks)

## 来源与版权相关

内容可能很多整理自网络和课堂，如果涉及侵权，请联系删除。

## 维护

该组织目前主要由大四学生[陈留城下](https://gitee.com/xsro)([xsro](https://github.com/xsro))维护。
代码不精，欢迎反馈讹误，bug或者直接提PR。

邮箱: <xsro@foxmail.com>

## 感谢

开发过程中使用了很多组件，非常感谢开拓者们的贡献。如果觉得好用，可以考虑支持一下这些项目。

- Thanks to my teacher *Han*.
- inspired by [Woodykaixa](https://github.com/Woodykaixa)'s [masm-code](https://github.com/Woodykaixa/masm-code)
- Thanks to excellent DOS emulator: 
  - [dosbox](https://www.dosbox.com): an excellent x86 emulator with DOS
  - [dosbox-x](https://dosbox-x.com/): Cross-platform DOS emulation package with Complete, accurate emulation and more
  - [caiiiycuk](https://github.com/caiiiycuk)'s [js dos](https://js-dos.com/):The simpliest API to run DOS games in browser
  - [msdos player](http://takeda-toshiya.my.coocan.jp/msdos)
- Thanks for ASM language information
  - [Roncho](https://marketplace.visualstudio.com/publishers/Roncho) 's extension [Assembly (TASM)](https://marketplace.visualstudio.com/items?itemName=Roncho.assembly-8086)
  - [blindtiger](https://github.com/9176324)'s [masm](https://github.com/9176324/bltg-team.masm)

