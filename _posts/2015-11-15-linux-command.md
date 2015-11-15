---
layout: post
title: linux命令操作随记-不定时更新
category: 技术
tags: linux
description: linux命令随记
---

> 使用linux的时候常常有些命令记不住 所以开一篇随时记录

##### 1.如何添加path
1.修改/etc/profile

	vi /etc/profile
	//如果权限不够 请使用sudo
    
2.修改path的值

	PATH = "yourPathWantToBeSetted:$PATH"
	export PATH
    
3.保存退出 

4.重启终端生效，或者使用source命令使其生效

	source /etc/profile

5.验证

	echo $PATH //查看是否已经成功添加PATH

但是我在按照上面的方法完成后还是只能一次终端生效，在开新的还是无效，于是我就尝试修改了一下`.bashrc`,发现可以了。***注：我的系统是ubuntu-15.10***

	//方法大体相同啦，稍微记录一下
	//打开文件
	vi .bashrc
	//添加下面内容
	export PATH="yourPathWantToBeSetted:$PATH"
	//esc : wq enter
	//使其生效
	source .bashrc
	//验证
	echo $PATH

	//写一个shell放在目录下 就不会每次都add commit psuh了 一个命令同步博客 咩哈哈 爽~
	/**
	cd /home/jimbo/bornbeauty.github.io
	git add -A
	git commit -m "addOrchange"
	git push
	*/



