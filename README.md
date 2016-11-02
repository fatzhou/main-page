# 官网首页
这是官网首页，请按照以下的说明搭建并安装环境。

##开发环境搭建

###安装git
本项目使用git进行版本管理，代码托管到github。请访问[git官网](https://git-scm.com/downloads)下载对应操作系统的git客户端。此外，还需要访问[github首页](https://github.com)来注册github账户，以进行代码提交。

###下载代码
本项目github地址是[https://github.com/fatzhou/main-page](https://github.com/fatzhou/main-page),github项目首页是[https://fatzhou.github.io/main-page/index.html](https://fatzhou.github.io/main-page/index.html).

在git客户端中运行以下命令来下载代码：

	git clone git@github.com:fatzhou/main-page.git
	
git会在当前目录下创建main-page文件夹，并下载代码到本地。

###如何提交
当准备提交之前，先更新其他人的更改：

	git pull
	
然后查看本地文件状态是否正常：

	git status
	
确定要提交时，把新增改动从**工作目录**添加到**暂存区**：

	git add <filename>
	
或者添加所有改动：

	git add *
	
使用commit命令把改动提交到**HEAD区**：

	git commit -m "本次代码改动信息"
	
这样一来，本地git文件已记录你的最新改动，接下来需要推送到远程仓库：

	git push
	
如果要发布到项目主页，我们需要执行以下命令：

	npm run build
	git push subtree --prefix dist origin gh-pages
	
这里先通过webpack命令打包文件到dist目录，然后推送到gh-pages分支（默认分支是master分支）。然后可以访问项目主页看到改动效果了。

###webpack安装
本项目由于实现逻辑比较简单，没有用到更复杂的框架，仅仅使用webpack来进行包管理。
由于大多数的前端构建和打包工具都基于node，因此需要先安装node，直接从[node官网](https://nodejs.org/en/download/)下载对应系统的node版本并安装即可。

在项目文件夹下按住shift+右键，打开命令行终端，检查node是否安装成功：

	node --version
	
通过clone命令下载到的项目基本框架中包含了package.json以及webpack.config.js信息，主要是node配置项和webpack配置项，这里已经做了基本配置，只需要安装依赖包即可：

	npm install
	
npm会自动下载依赖包到node_modules文件夹下。此时可以启动webserver查看效果：

	npm start
	
在浏览器上输入"http://localhost:8080"，即可看到服务器已成功架设，直接修改src下js或者css信息，在浏览器上会即时刷新。关于webpack的进一步了解，可以参考[webpack github](http://webpack.github.io/).

##如何开发
项目样式采用less预处理语言，关于less的学习可以访问[http://lesscss.cn/](http://lesscss.cn/)。由于使用了webpack，无需使用seajs，requirejs类似的包管理工具，可直接用AMD，CommonJS等标准的形式引入依赖js和样式。

##调试和预览
修改源文件，可直接在浏览器下[http://localhost:8080](http://localhost:8080)上看到改动效果。多页形式可在后面添加相关的文件路径。

##发布
请参考[如何提交](#提交)