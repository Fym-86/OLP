# 在线学习平台共创空间
index.html为网站首页

css文件夹保存有格式文件

images文件夹保存有图片文件

## 下面是git使用相关操作

第一步，初始化本地仓库

第二步，把本地仓库的master分支改名成main，要与远程仓库的main分支同名

第三步，添加远程仓库

第四步，拉取远程仓库内容

第五步，添加上游，实时更新

```
git init
git branch -m master main
git remote add main git@github.com:fym1011/OLP.git
git pull git@github.com:fym1011/OLP.git main
git remote add upstream git@github.com:fym1011/OLP.git
```

上面的五步直接复制粘贴即可

后面的一步一步走

把所有修改加入缓冲区

```
git add .
```

提交缓冲区的内容到本地仓库

```
git commit -m "说下自己干了什么东西"
```

将本地仓库的修改推送到远程仓库

```
git push git@github.com:fym1011/OLP.git main
```

上面三步三合一，修改双引号内容即可

```
git add .
git commit -m "说下自己干了什么东西，此处提交时修改下"
git push git@github.com:fym1011/OLP.git main
```

更新同步远程仓库

```
git fetch upstream
git merge upstream/main
```

git add .
git commit -m "添加参考案例"
git push git@github.com:fym1011/OLP.git main