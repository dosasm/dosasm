---
sidebar_position: 4
---

# 常用MASM/TASM命令

## TIP

- dosbox中命令 文件名不区分大小写，所以如`dir`与`DIR`命令都是等效的
- dosbox中文件名的长度是有限制的，好像是不超过8个字节，并且不支持中文

## MASM操作示例

```DOS
MASM T.ASM;·    汇编生成.obj文件
LINK T.OBJ;     链接生成.exe文件
T.EXE           运行
DEBUG T.EXE     调试
```

## TASM操作示例

```DOS
TASM T.ASM      汇编生成.obj文件
TLINK T.OBJ     链接生成.exe文件，加\t生成.com文件
T.EXE           运行
```

tasm调试需要加上以下参数

```DOS
TASM/zi T.ASM   汇编生成.obj文件
TLINK/v/3 T.OBJ 链接生成.exe文件，加\t生成.com文件
TD T.EXE        调试
```

### MASM debug 命令

[Debug命令详解](https://www.cnblogs.com/tiger2soft/p/5094917.html)
