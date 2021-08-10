# 插件工作细节

## 问题诊断功能

程序编译过程中难免会有出错，插件会对编译器产生的信息进行处理，显示到VSCode中，源信息会在输出(output)中显示，处理后的信息会在问题(problems)中显示。同时在文中也会标记出来

由于插件目前并不会实时地更新信息，所以有可能会觉得错误信息有些碍眼，可以在命令面板中输入找到`清除MASM/TASM的所有问题信息`来清除本插件输出的**所有**问题信息

## 插件工作原理

由于DOSBox的文件系统比较弱，所以插件使用的策略是先复制当前文件到插件的安装目录（姑且称为工作文件夹workspace）下并重新命名（目前命名为T.asm），再运行DOSBox等在workspace中进行操作，所以插件生成的所有文件都可以在这个文件夹中找到，并且每次执行操作，插件都会清理workspace保证操作不冲突。

- 程序在这个我本来想尝试改vscode提供的globalstorage中，但是这样改变之后插件在使用msdos player来运行link的时候总是会失败。
- 这样做有一个问题就是，插件目前无法分析文件的依赖关系，所以只会复制一个文件，如果文件中使用了`include`指令来包含其他的文件，或者需要多模块汇编的时候，插件目前无法得到想要的结果，在 [dosbox here](#代码分布在多个文件中dosbox-here)中插件也提供了一个可能的解决方案。

## 语言语法支持

插件提供一个languageID为assembly，别名为assembly(DOS)汇编语言支持，但是汇编语言种类繁多，目前设定如下即为在languageID为assembly，tasm，masm时激活

```json
 "activationEvents": [
    "onCommand:masm-tasm.dosboxhere",
    "onLanguage:assembly",
    "onLanguage:tasm",
    "onLanguage:masm"
  ],
```

> assembly(DOS)中提供了一些悬浮提示，跳转，大纲功能，但是这些并不一定在所有汇编语言中都适用，我主要参照是我们的汇编原理书中的DOS汇编完整段定义部分，其中很大一部分代码来源于其他开源项目
> 假如是空白文件夹再新建ASM文件，可能插件不会激活，重启一下VSCode即可
