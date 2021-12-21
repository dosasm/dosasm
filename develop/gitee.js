//replace all dosasm.github.io to dosasm.gitee.io

const fs=require("fs");
const {resolve}=require("path");

const file=resolve(__dirname,"../docusaurus.config.js");
const text=fs.readFileSync(file,{encoding:"utf-8"});
fs.writeFileSync(file,text.replace(/dosasm\.github\.io/g,"dosasm.gitee.io"));