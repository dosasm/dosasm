---
sidebar_position: 1
---

# x86汇编语言

可以参考[wikipedia](https://en.wikipedia.org/wiki/X86_assembly_language)，大部分内容来自相关网站，不敢妄译。

## MASM: Microsoft Macro Assembler

> The Microsoft Macro Assembler (MASM) is an x86 assembler that uses the Intel syntax[^syntax] for MS-DOS and Microsoft Windows. For a time, it competed with Borland Turbo Assembler. 
> IBM re-branded early versions under the name IBM Macro Assembler. 
> Later versions were bundled with [Microsoft Visual Studio](https://winworldpc.com/product/microsoft-visual-stu/97-5x)

- [masm32中提供的MASM发展历史](http://www.masm32.com/history.htm)
- download it on [winworldpc](https://winworldpc.com/product/macro-assembler/1x)

[^syntax]: 有Intel和AT&T两种风格(syntax),可以认为只是写法的不同，微软使用前者，gcc使用后者[wikipedia](https://en.wikipedia.org/wiki/X86_assembly_language#Syntax)

## TASM: Turbo Assembler

> Turbo Assembler is an x86 16-bit assembler from Borland. 
> It competed against, and was often cited as faster than Microsoft Macro Assembler.

- [Turbo Assembler wikipedia](https://en.wikipedia.org/wiki/Turbo_Assembler)
- download it on [winworldpc](https://winworldpc.com/product/turbo-assembler/1x)

## MASM32

由于6.x之后的版本包含在中`Microsoft Visual Studio`中，不在单独发布，[masm32](http://www.masm32.com/)项目从VS中提取了相关程序作为独立的软件开发包

> The MASM32 SDK is an independent project that is designed to ease the entry of experienced programmers into the field of assembler language programming. 
> It is a complex and demanding form of programming that requires high coding precision and a good understanding of both the Intel mnemonics and x86 processor architecture as it is utilised by the Windows operating system environment but for the effort, it offers flexibility and performance that is beyond the best of compilers when a high enough level of expertise is reached.

- 官网：http://www.masm32.com

## NASM: Netwide Assembler

An asssembler for the x86 CPU architecture portable to nearly every modern platform, and with code generation for many platforms old and new.

- 官网：https://nasm.us/

## 相关资料

- 微型计算机历史：[Timeline of Computer History www.computerhistory.org](https://www.computerhistory.org/timeline/computers/)
- DOS操作系统的历史：[dosbox-x/wiki](https://github.com/joncampbell123/dosbox-x/wiki/Guide%3ADOS-Installation-in-DOSBox%E2%80%90X#dos-version-highlights)
