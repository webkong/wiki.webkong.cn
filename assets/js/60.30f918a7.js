(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{603:function(s,n,a){"use strict";a.r(n);var e=a(6),t=Object(e.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h3",{attrs:{id:"环境依赖"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#环境依赖"}},[s._v("#")]),s._v(" 环境依赖")]),s._v(" "),a("h4",{attrs:{id:"基础依赖"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基础依赖"}},[s._v("#")]),s._v(" 基础依赖")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("Python 任意版本，3.x 没有 mysql 引擎")])]),s._v(" "),a("li",[a("p",[s._v("pip 8.x 及以上")])]),s._v(" "),a("li",[a("p",[s._v("virtualenv Python 虚拟环境，隔离本地项目")])])]),s._v(" "),a("blockquote",[a("p",[s._v("使用 virtualenv")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("\nmkdir mysite; cd mysite\n\nvirtualenv --no-site-package venv //创建一个虚拟环境\n\nsource venv/bin/activate //进入虚拟环境\n\ndeactivate //退出\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("blockquote",[a("p",[s._v("接下来就可以在环境中配置 Django 的各种依赖")])]),s._v(" "),a("h4",{attrs:{id:"django-依赖"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#django-依赖"}},[s._v("#")]),s._v(" Django 依赖")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("pip install Django")])]),s._v(" "),a("li",[a("p",[s._v("pip install MySQL-python")])]),s._v(" "),a("li",[a("p",[s._v("pip install Pillow")])])]),s._v(" "),a("blockquote",[a("p",[s._v("还有其他依赖")])]),s._v(" "),a("blockquote",[a("p",[s._v("django-suit")])]),s._v(" "),a("blockquote",[a("p",[s._v("fast-rest-fromwork")])]),s._v(" "),a("h4",{attrs:{id:"验证"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#验证"}},[s._v("#")]),s._v(" 验证")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("\nimport django\n\nprint(django.get_version())\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h3",{attrs:{id:"创建和使用-django"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建和使用-django"}},[s._v("#")]),s._v(" 创建和使用 Django")]),s._v(" "),a("h4",{attrs:{id:"创建项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建项目"}},[s._v("#")]),s._v(" 创建项目")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("\ndjango-admin startproject site\n\n\n\n//生成的目录结构\n\nmysite/\n\n    manage.py //django的命令行工具\n\n    mysite/\n\n        __init__.py\n\n        settings.py  //django的配置文件\n\n        urls.py //url调度\n\n        wsgi.py\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br")])]),a("p",[s._v("将应用配置进 settings,以激活应用")]),s._v(" "),a("h4",{attrs:{id:"数据库建立"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据库建立"}},[s._v("#")]),s._v(" 数据库建立")]),s._v(" "),a("h4",{attrs:{id:"配置数据库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置数据库"}},[s._v("#")]),s._v(" 配置数据库")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("\n//settings.py\n\nDATABASES = {\n\n    'default': {\n\n        'ENGINE': 'django.db.backends.mysql',\n\n        'NAME': 'django-test',\n\n        'USER': 'root',\n\n        'PASSWORD': '1234567890',\n\n        'HOST': '127.0.0.1',\n\n        'PORT': '3306',\n\n    }\n\n}\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br")])]),a("h4",{attrs:{id:"数据迁移-migrate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据迁移-migrate"}},[s._v("#")]),s._v(" 数据迁移（migrate）")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("\npython manage.py migrate\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h4",{attrs:{id:"启动服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动服务"}},[s._v("#")]),s._v(" 启动服务")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("\npython manage.py runserver\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h3",{attrs:{id:"创建应用-模型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建应用-模型"}},[s._v("#")]),s._v(" 创建应用（模型）")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("\npython manage.py startapp ad\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h4",{attrs:{id:"新建-models"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#新建-models"}},[s._v("#")]),s._v(" 新建 Models")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("\nclass AdInfo(models.Model):\n\n    id = models.CharField(primary_key=True, max_length=100)\n\n    name = models.CharField(unique=True, max_length=100)\n\n    description = models.CharField(max_length=1000, blank=True, null=True)\n\n    priority = models.IntegerField()\n\n    status = models.IntegerField()\n\n    start_time = models.DateTimeField(blank=True, null=True)\n\n    end_time = models.DateTimeField()\n\n    max_show_count = models.BigIntegerField()\n\n    max_day_show_count = models.BigIntegerField()\n\n    create_time = models.DateTimeField()\n\n    update_time = models.DateTimeField()\n\n\n\n    class Meta:\n\n        managed = True\n\n        db_table = 'ad_info'\n\n\n\n\n\nclass AdInfoPlacement(models.Model):\n\n    ad_placement = models.ForeignKey('AdPlacement', models.DO_NOTHING)\n\n    ad_info = models.ForeignKey(AdInfo, models.DO_NOTHING)\n\n    create_time = models.DateTimeField()\n\n\n\n    class Meta:\n\n        managed = True\n\n        db_table = 'ad_info_placement'\n\n        unique_together = (('ad_info', 'ad_placement'),)\n\n\n\n\n\nclass AdPlacement(models.Model):\n\n    id = models.CharField(primary_key=True, max_length=100)\n\n    name = models.CharField(max_length=100)\n\n    app_id = models.CharField(max_length=100)\n\n    status = models.IntegerField()\n\n    create_time = models.DateTimeField()\n\n\n\n    class Meta:\n\n        managed = True\n\n        db_table = 'ad_placement'\n\n        unique_together = (('app_id', 'name'),)\n\n\n\n\n\nclass AdProperties(models.Model):\n\n    ad_info_id = models.CharField(max_length=100)\n\n    property_key = models.CharField(max_length=100, blank=True, null=True)\n\n    property_value = models.CharField(max_length=2000, blank=True, null=True)\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br"),a("span",{staticClass:"line-number"},[s._v("58")]),a("br"),a("span",{staticClass:"line-number"},[s._v("59")]),a("br"),a("span",{staticClass:"line-number"},[s._v("60")]),a("br"),a("span",{staticClass:"line-number"},[s._v("61")]),a("br"),a("span",{staticClass:"line-number"},[s._v("62")]),a("br"),a("span",{staticClass:"line-number"},[s._v("63")]),a("br"),a("span",{staticClass:"line-number"},[s._v("64")]),a("br"),a("span",{staticClass:"line-number"},[s._v("65")]),a("br"),a("span",{staticClass:"line-number"},[s._v("66")]),a("br"),a("span",{staticClass:"line-number"},[s._v("67")]),a("br"),a("span",{staticClass:"line-number"},[s._v("68")]),a("br"),a("span",{staticClass:"line-number"},[s._v("69")]),a("br"),a("span",{staticClass:"line-number"},[s._v("70")]),a("br"),a("span",{staticClass:"line-number"},[s._v("71")]),a("br"),a("span",{staticClass:"line-number"},[s._v("72")]),a("br"),a("span",{staticClass:"line-number"},[s._v("73")]),a("br"),a("span",{staticClass:"line-number"},[s._v("74")]),a("br"),a("span",{staticClass:"line-number"},[s._v("75")]),a("br"),a("span",{staticClass:"line-number"},[s._v("76")]),a("br"),a("span",{staticClass:"line-number"},[s._v("77")]),a("br"),a("span",{staticClass:"line-number"},[s._v("78")]),a("br"),a("span",{staticClass:"line-number"},[s._v("79")]),a("br"),a("span",{staticClass:"line-number"},[s._v("80")]),a("br"),a("span",{staticClass:"line-number"},[s._v("81")]),a("br"),a("span",{staticClass:"line-number"},[s._v("82")]),a("br"),a("span",{staticClass:"line-number"},[s._v("83")]),a("br"),a("span",{staticClass:"line-number"},[s._v("84")]),a("br"),a("span",{staticClass:"line-number"},[s._v("85")]),a("br"),a("span",{staticClass:"line-number"},[s._v("86")]),a("br"),a("span",{staticClass:"line-number"},[s._v("87")]),a("br"),a("span",{staticClass:"line-number"},[s._v("88")]),a("br"),a("span",{staticClass:"line-number"},[s._v("89")]),a("br"),a("span",{staticClass:"line-number"},[s._v("90")]),a("br"),a("span",{staticClass:"line-number"},[s._v("91")]),a("br"),a("span",{staticClass:"line-number"},[s._v("92")]),a("br"),a("span",{staticClass:"line-number"},[s._v("93")]),a("br")])]),a("blockquote",[a("p",[s._v("django 不支持双主键或者多主键")])]),s._v(" "),a("p",[s._v("执行命令通知 django 修改 models")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("\npython manage.py makemigrations //创建迁移文件\n\npython manage.py migrate //更新到数据库\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("blockquote",[a("p",[s._v("python manage.py inspectdb > models.py //反向生成 model")])]),s._v(" "),a("h4",{attrs:{id:"创建管理员-admin-管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建管理员-admin-管理"}},[s._v("#")]),s._v(" 创建管理员，admin 管理")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("\npython manage.py createsuperuser\n\n根据提示一次输入用户名，邮箱和密码就OK了\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("启动服务看一下。")]),s._v(" "),a("p",[s._v("这样就成功启动了，根据自己定义的 Model 的 Django。在 host/admin/目录下可以登陆并看到相应的管理条目")]),s._v(" "),a("h4",{attrs:{id:"自定义管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自定义管理"}},[s._v("#")]),s._v(" 自定义管理")]),s._v(" "),a("p",[s._v("未完待续...")]),s._v(" "),a("h3",{attrs:{id:"其他链接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其他链接"}},[s._v("#")]),s._v(" 其他链接")]),s._v(" "),a("p",[a("a",{attrs:{href:"http://python.usyiyi.cn/documents/django_182/ref/contrib/admin/index.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("官方文档 options"),a("OutboundLink")],1)]),s._v(" "),a("p",[a("a",{attrs:{href:"http://python.usyiyi.cn/documents/django_182/ref/contrib/admin/actions.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("官方文档 actions"),a("OutboundLink")],1)]),s._v(" "),a("p",[a("a",{attrs:{href:"http://python.usyiyi.cn/documents/django_182/topics/settings.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("配置详情"),a("OutboundLink")],1),s._v(" "),a("a",{attrs:{href:"http://python.usyiyi.cn/documents/django_182/topics/http/urls.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("url 调度器"),a("OutboundLink")],1)])])}),[],!1,null,null,null);n.default=t.exports}}]);