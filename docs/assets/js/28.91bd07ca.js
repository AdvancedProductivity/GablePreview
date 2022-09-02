(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{459:function(t,e,a){"use strict";a.r(e);var s=a(62),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"起步"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#起步"}},[t._v("#")]),t._v(" 起步")]),t._v(" "),a("p",[t._v("在程序启动之前，需要先准备一下环境。")]),t._v(" "),a("p",[a("code",[t._v("Gable")]),t._v(" 对所运行的机器没有太多要求，只需要安装一个 JDK8 的环境即可。")]),t._v(" "),a("p",[t._v("如果您下载 JDK 有困难，可以在这里找到CDN版本: "),a("a",{attrs:{href:"https://www.injdk.cn/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.injdk.cn/"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"运行代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#运行代码"}},[t._v("#")]),t._v(" 运行代码")]),t._v(" "),a("p",[t._v("可以直接从 "),a("code",[t._v("Github")]),t._v(" 克隆代码，控制台执行命令:")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# https 链接")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/AdvancedProductivity/Gable.git\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ssh 链接")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone git@github.com:AdvancedProductivity/Gable.git\n\n")])])]),a("h2",{attrs:{id:"代码仓库目录结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码仓库目录结构"}},[t._v("#")]),t._v(" 代码仓库目录结构")]),t._v(" "),a("div",{staticClass:"language-md extra-class"},[a("pre",{pre:!0,attrs:{class:"language-md"}},[a("code",[t._v("├── assets (Github readme.md 中引用的资源)\n├── document (基于VuePress的项目文档) \n├── server (基于 SpringBoot 的后台服务，提供协同服务和api执行代理服务)\n├── client (前端客户端的代码,包含Electron客户端和Web端两套)\n│   ├── app (Electron后端的程序代码)\n│   ├── e2e (e2e测试,当前并没有充实e2e测试用例，手动保证测试)\n│   ├── src (web端的代码实现，Electron也会加载这里的代码)\n│   │   └──  app (前端组件都在这里实现的)\n│   │   └── assets (资源文件)\n│   │   └── environments (环境配置)\n│   └── package.json\n│ \n└── README.md\n")])])]),a("h2",{attrs:{id:"启动项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动项目"}},[t._v("#")]),t._v(" 启动项目")]),t._v(" "),a("p",[a("code",[t._v("Gable")]),t._v("本身是一个普通的 Angular 项目，只需要下载依赖然后启动就好了，但是因为使用\n"),a("a",{attrs:{href:"https://github.com/maximegris/angular-electron",target:"_blank",rel:"noopener noreferrer"}},[t._v("Angular-Electron"),a("OutboundLink")],1),t._v("\n的模板，这个模板在下载依赖库时会向"),a("code",[t._v("Github")]),t._v("下载Electron相关依赖，\n这个下载比较要求用户的网络环境，如果出现了下载失败的情况，多下载几次就好了。")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" client\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run start\n")])])]),a("p",[t._v("成功启动之后，它会启动浏览器并打开 "),a("a",{attrs:{href:"http://localhost:4200",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://localhost:4200"),a("OutboundLink")],1),t._v("，同时启动"),a("code",[t._v("Electron")]),t._v("的客户端，在开发模式下，"),a("code",[t._v("Electron")]),t._v("端通过"),a("code",[t._v("WebView")]),t._v("加载的 "),a("code",[t._v("http://localhost:4200")])]),t._v(" "),a("h2",{attrs:{id:"启动后台服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动后台服务"}},[t._v("#")]),t._v(" 启动后台服务")]),t._v(" "),a("p",[a("code",[t._v("Gable")]),t._v(" 是为用户提供协作服务的，处于用户体验的角度考虑，用户可以不连接"),a("code",[t._v("Gable")]),t._v("后台服务当做单机版本用。")]),t._v(" "),a("p",[t._v("但是当遇到协作的场景时，只需要在 设置中连接 "),a("code",[t._v("Gable")]),t._v(" 的后台即可轻松开启协作。")]),t._v(" "),a("p",[a("code",[t._v("Gable")]),t._v(" 的后台代码是写在 "),a("code",[t._v("server")]),t._v(" 目录下的，它目前而言还仅仅是一个非常简单非常普通的 "),a("code",[t._v("SpringBoot")]),t._v(" 的项目。")]),t._v(" "),a("p",[t._v("如果你有 "),a("code",[t._v("java")]),t._v(" 的开发经验，应该非常简单就能启动该服务。")]),t._v(" "),a("p",[t._v("该服务会默认占用机器的 "),a("code",[t._v("2208")]),t._v(" 端口，"),a("code",[t._v("2208")]),t._v("是指的2022年8月，是 "),a("code",[t._v("Gable")]),t._v(" 项目启动的月份。")]),t._v(" "),a("h2",{attrs:{id:"数据库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据库"}},[t._v("#")]),t._v(" 数据库")]),t._v(" "),a("p",[a("code",[t._v("Gable")]),t._v(" 在最初的设计是使用的 "),a("code",[t._v("Postgresql")]),t._v(" 来存储数据，但是很快我们就遇到了两个问题：")]),t._v(" "),a("ul",[a("li",[t._v("用户可能没有 "),a("code",[t._v("Postgresql")]),t._v(" 实例，想使用 "),a("code",[t._v("Gable")]),t._v(" 还得现安装，给人体验不好")]),t._v(" "),a("li",[t._v("如果要使用 "),a("code",[t._v("Github Actions")]),t._v(" 做单元测试，还需要拉取一个带有 "),a("code",[t._v("Postgresql")]),t._v(" 的镜像。")])]),t._v(" "),a("p",[t._v("基于以上两点考虑，我们使用 "),a("code",[t._v("flyway")]),t._v("，使得 "),a("code",[t._v("Gable")]),t._v(" 可以集成两套数据库："),a("code",[t._v("H2")]),t._v(" 和 "),a("code",[t._v("Postgresql")]),t._v("。")]),t._v(" "),a("p",[t._v("为什么选择 "),a("code",[t._v("H2")]),t._v(" 数据库呢，因为它可以在程序启动时，自动创建数据库文件，不需要单独安装一个数据库进程。")]),t._v(" "),a("p",[t._v("这样用户就可以一个 "),a("code",[t._v("java -jar server.jar")]),t._v(" 的命令，直接启动后台服务，这是基于提升用户体验的决策。")]),t._v(" "),a("p",[a("code",[t._v("Gable")]),t._v(" 默认是基于当下比较火爆的 "),a("code",[t._v("Postgresql")]),t._v(" 开发，所以在运行程序之前，需要先准备一下数据库相关的环境。")]),t._v(" "),a("h2",{attrs:{id:"对于-h2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#对于-h2"}},[t._v("#")]),t._v(" 对于 "),a("code",[t._v("H2")])]),t._v(" "),a("p",[t._v("程序启动时，会在用户目录下的 "),a("code",[t._v(".gable")]),t._v(" 文件夹里生成一个 "),a("code",[t._v("gable-server.db")]),t._v(" 的文件，属于全部都存放在这里。")]),t._v(" "),a("h2",{attrs:{id:"对于-postgresql"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#对于-postgresql"}},[t._v("#")]),t._v(" 对于 "),a("code",[t._v("Postgresql")])]),t._v(" "),a("p",[t._v("用户可能需要先初始化一个数据库。")]),t._v(" "),a("p",[t._v("执行以下 "),a("code",[t._v("sql")]),t._v(":")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- 创建数据库 名为 gable")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("create")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("database")]),t._v(" gable "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("with")]),t._v(" owner postgres"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- 创建连接数据库的账号 app 密码 123456 (和代码中的配置对应)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("create")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("user")]),t._v(" app "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("with")]),t._v(" password "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'12345678'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- 分配访问权限")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("grant")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("connect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("create")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("temporary")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("on")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("database")]),t._v(" gable "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("to")]),t._v(" app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),a("p",[t._v("至于其它的数据库表以及索引等，会在程序启动时自动创建。")]),t._v(" "),a("h2",{attrs:{id:"关于测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关于测试"}},[t._v("#")]),t._v(" 关于测试")]),t._v(" "),a("p",[t._v("如果你需要运行单元测试的代码，需要额外创建一个数据库 "),a("code",[t._v("gable_test")]),t._v(" 来初始化单元测试的数据。")]),t._v(" "),a("h4",{attrs:{id:"初始化测试数据库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#初始化测试数据库"}},[t._v("#")]),t._v(" 初始化测试数据库")]),t._v(" "),a("p",[t._v("执行以下 "),a("code",[t._v("sql")]),t._v(":")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- 创建数据库 名为 gable_test")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("create")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("database")]),t._v(" gable_test "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("with")]),t._v(" owner postgres"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- 分配访问权限")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("grant")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("connect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("create")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("temporary")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("on")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("database")]),t._v(" gable_test "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("to")]),t._v(" app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),a("p",[t._v("正式环境中,"),a("code",[t._v("Gable")]),t._v(" 使用 "),a("code",[t._v("Flyway")]),t._v(" 管理不同版本之间的数据库迁移，而测试环境中禁用了 "),a("code",[t._v("Flyway")]),t._v(",启用了"),a("code",[t._v("spring.sql.init.mode=always")])]),t._v(" "),a("p",[t._v("在测试目录下的 "),a("code",[t._v("data.sql")]),t._v(" 和 "),a("code",[t._v("schema.sql")]),t._v(" 定义了测试数据库中所需要的数据。\n每次启动都会初始化数据库，如果后续因为测试的需要，只需要更改  "),a("code",[t._v("data.sql")]),t._v(" 和 "),a("code",[t._v("schema.sql")]),t._v("  的数据即可。")]),t._v(" "),a("h1",{attrs:{id:"测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#测试"}},[t._v("#")]),t._v(" 测试")]),t._v(" "),a("p",[t._v("在项目刚开始的阶段，还写过几个测试用例，甚至还做过测试覆盖率。")]),t._v(" "),a("p",[t._v("但是进入高强度迭代之后，测试用例实在拖慢了进度，故而没有推进，后续会不断完善测试用例。")]),t._v(" "),a("h4",{attrs:{id:"命令执行测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#命令执行测试"}},[t._v("#")]),t._v(" 命令执行测试")]),t._v(" "),a("p",[t._v("普通测试")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("mvn "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("test")]),t._v("\n")])])]),a("p",[t._v("覆盖率测试")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("mvn "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("test")]),t._v(" jacoco:repor\n")])])]),a("p",[t._v("该测试会生成代码覆盖率以及分支的检测，报告位置见: "),a("code",[t._v("target/site/jacoco/index.html")])]),t._v(" "),a("p",[t._v("关于测试，这里有其它帮助文档：")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://www.baeldung.com/jacoco",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.baeldung.com/jacoco"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.baeldung.com/jacoco-report-exclude",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.baeldung.com/jacoco-report-exclude"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=r.exports}}]);