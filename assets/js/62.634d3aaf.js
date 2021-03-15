(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{607:function(s,a,e){"use strict";e.r(a);var n=e(6),t=Object(n.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("blockquote",[e("p",[s._v("罗列字典的常用操作，遵循艾宾浩斯记忆遗忘曲线，让知识固化，方便查询和使用。")])]),s._v(" "),e("h3",{attrs:{id:"创建-dict"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建-dict"}},[s._v("#")]),s._v(" 创建 dict")]),s._v(" "),e("h4",{attrs:{id:"dict-函数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dict-函数"}},[s._v("#")]),s._v(" dict 函数")]),s._v(" "),e("p",[s._v("dict 函数可以通过其他映射，比如字典或者"),e("code",[s._v("(key,value)")]),s._v("遮这样的序列对建立字典。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v(">>> items = [('name','webkong'),('age',18)]\n>>> d = dict(items)\n>>> d\n{'age': 18, 'name': 'webkong'}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("或者通过关键字参数来创建")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v(">>> d = dict(name='webkong',age=18)\n>>> d\n{'age': 18, 'name': 'webkong'}\n\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("如果不带参数，就会返回空字典. 和 list, tuple, str 函数一样。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v(">>> a = dict()\n>>> a\n{}\n\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("也可以直接用字面量")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v(">>> c = {'name':'webkong','age':19}\n>>> c\n{'age': 19, 'name': 'webkong'}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("h3",{attrs:{id:"基本字典操作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基本字典操作"}},[s._v("#")]),s._v(" 基本字典操作")]),s._v(" "),e("h4",{attrs:{id:"len"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#len"}},[s._v("#")]),s._v(" len()")]),s._v(" "),e("p",[s._v("返回键值对的数量")]),s._v(" "),e("h4",{attrs:{id:"del"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#del"}},[s._v("#")]),s._v(" del")]),s._v(" "),e("p",[s._v("del a['name'] #删除键为 name 的值")]),s._v(" "),e("h4",{attrs:{id:"in"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#in"}},[s._v("#")]),s._v(" in")]),s._v(" "),e("p",[s._v("'name' in a 返回 True 检查字典中是否含有键为 name 的项")]),s._v(" "),e("h4",{attrs:{id:"赋值"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#赋值"}},[s._v("#")]),s._v(" 赋值")]),s._v(" "),e("p",[s._v("a['name'] = 'wsw'")]),s._v(" "),e("blockquote",[e("p",[s._v("键的类型： 字典的键是不可变类型，有可能是整型、浮点型（实型）、字符串或元组。\n添加：键不存在，也可以赋值，这样字典就会建立新的项。")])]),s._v(" "),e("h3",{attrs:{id:"字典格式化字符串"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#字典格式化字符串"}},[s._v("#")]),s._v(" 字典格式化字符串")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v(">>> info\n{'age': 19, 'name': 'webkong'}\n>>> \"%(name)s's age is %(age)s.\" % info\n\"webkong's age is 19.\"\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("只要给出的键可以在字典中找到，就可以使用任意数量的转换说明符。在模板系统中非常有用。")]),s._v(" "),e("h3",{attrs:{id:"字典方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#字典方法"}},[s._v("#")]),s._v(" 字典方法")]),s._v(" "),e("h4",{attrs:{id:"clear"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#clear"}},[s._v("#")]),s._v(" clear")]),s._v(" "),e("p",[s._v("原地操作， 清除字典中的所有项， 无返回值（或者说返回 None）。")]),s._v(" "),e("h4",{attrs:{id:"copy"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#copy"}},[s._v("#")]),s._v(" copy")]),s._v(" "),e("p",[s._v("返回一个具有相同键值对的新字典。这种方法实现的是浅复制，因为值本身是相同的，而不是副本。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v(">>> info\n{'skills': ['html', 'css', 'js'], 'age': 19, 'name': 'webkong'}\n>>> a = info.copy()\n>>> a\n{'skills': ['html', 'css', 'js'], 'age': 19, 'name': 'webkong'}\n>>> a['name'] = 'webkong1'\n>>> a\n{'skills': ['html', 'css', 'js'], 'age': 19, 'name': 'webkong1'}\n>>> info\n{'skills': ['html', 'css', 'js'], 'age': 19, 'name': 'webkong'}\n>>> a['skills'].remove('html')\n>>> a\n{'skills': ['css', 'js'], 'age': 19, 'name': 'webkong1'}\n>>> info\n{'skills': ['css', 'js'], 'age': 19, 'name': 'webkong'}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br")])]),e("p",[s._v("在替换值得时候，原字典不受影响， 但是如果用原地操作修改了某个值，原字典也会改变。")]),s._v(" "),e("p",[s._v("避免这种问题的一种方式就是深复制(deep copy)")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v(">>> from copy import deepcopy\n>>> info\n{'skills': ['css', 'js'], 'age': 19, 'name': 'webkong'}\n>>> i = deepcopy(info)\n>>> f = info.copy()\n>>> f['skills'].append('js')\n>>> f\n{'skills': ['css', 'js', 'js'], 'age': 19, 'name': 'webkong'}\n>>> i\n{'skills': ['css', 'js'], 'age': 19, 'name': 'webkong'}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br")])]),e("h4",{attrs:{id:"fromkeys"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#fromkeys"}},[s._v("#")]),s._v(" fromkeys")]),s._v(" "),e("p",[s._v("使用给定的键建立新的字典，每一个键默认的值是 None.")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v(">>> a = {}.fromkeys(['name','age'])\n>>> a\n{'age': None, 'name': None}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("h4",{attrs:{id:"get"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#get"}},[s._v("#")]),s._v(" get")]),s._v(" "),e("p",[s._v("访问字典项的方法，在访问不存在的项时，返回 None。也可以自己定义“默认值”")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v(">>> a\n{'age': None, 'name': None}\n>>> a.get('kk','NNN')\n'NNN'\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("h4",{attrs:{id:"has-key"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#has-key"}},[s._v("#")]),s._v(" has_key")]),s._v(" "),e("p",[s._v("检查字典中是否又给出的键。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("a.has_key('name') 相当于 k in d\n\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("h4",{attrs:{id:"items-iteritems"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#items-iteritems"}},[s._v("#")]),s._v(" items & iteritems")]),s._v(" "),e("p",[s._v("items 方法将所有的字典项以列表的方式返回，list 中的每一个项来自(key, value)，返回时没有次序。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v(" info\n{'skills': ['css', 'js', 'js'], 'age': 19, 'name': 'webkong'}\n>>> info.items()\n[('skills', ['css', 'js', 'js']), ('age', 19), ('name', 'webkong')]\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("iteritems 方法和 items 大致相同，但是会返回一个迭代器对象。")]),s._v(" "),e("h4",{attrs:{id:"keys-iterkeys"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#keys-iterkeys"}},[s._v("#")]),s._v(" keys & iterkeys")]),s._v(" "),e("p",[s._v("keys 方法将字典中的键以列表的形式返回， iterkeys 返回迭代器对象。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v(">>> info\n{'skills': ['css', 'js', 'js'], 'age': 19, 'name': 'webkong'}\n>>> info.keys()\n['skills', 'age', 'name']\n\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("h4",{attrs:{id:"pop"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pop"}},[s._v("#")]),s._v(" pop")]),s._v(" "),e("p",[s._v("pop 方法用来获取对应键的值，然后将这个键值对从字典中移除。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v(">>> info\n{'skills': ['css', 'js', 'js'], 'age': 19, 'name': 'webkong'}\n>>> d = info.pop('name')\n>>> d\n'webkong'\n>>> info\n{'skills': ['css', 'js', 'js'], 'age': 19}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])]),e("h4",{attrs:{id:"popitem"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#popitem"}},[s._v("#")]),s._v(" popitem")]),s._v(" "),e("p",[s._v("popitem 类似于 list.pop，但不同的是，popitem 弹出的是随机项，因为字典没有最后项的概念。 若想一个接一个地移除并处理项，这个方法就很适合，不用首先获取键的列表。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("a.popitem()\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h4",{attrs:{id:"setdefault"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#setdefault"}},[s._v("#")]),s._v(" setdefault")]),s._v(" "),e("p",[s._v("setdefault 可以在字典不包含给定键值对的情况下设置相应的键值。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v(">>> b = {}\n>>> b.setdefault('name','N/A')\n'N/A'\n>>> b\n{'name': 'N/A'}\n>>> b['name'] = 'webkong'\n>>> b\n{'name': 'webkong'}\n>>> b.setdefault('name','N/A')\n'webkong'\n>>> b\n{'name': 'webkong'}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br")])]),e("h4",{attrs:{id:"update"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#update"}},[s._v("#")]),s._v(" update")]),s._v(" "),e("p",[s._v("update 方法可以利用一个字典项更新另外一个字典。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v(">>> a\n{'skills': ['css', 'js', 'js'], 'age': 19, 'name': 'webkong'}\n>>> x = {'age':18}\n>>> a.update(x)\n>>> a\n{'skills': ['css', 'js', 'js'], 'age': 18, 'name': 'webkong'}\n>>> y = {'kk':'kkkk'}\n>>> a.update(y)\n>>> a\n{'skills': ['css', 'js', 'js'], 'kk': 'kkkk', 'age': 18, 'name': 'webkong'}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br")])]),e("h4",{attrs:{id:"values-itervalues"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#values-itervalues"}},[s._v("#")]),s._v(" values & itervalues")]),s._v(" "),e("p",[s._v("values 方法以列表的形式返回字典的值， 返回的值可以包含重复的元素。 itervalues 返回一个迭代对象。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v(">>> a\n{'skills': ['css', 'js', 'js'], 'kk': 'kkkk', 'age': 18, 'name': 'webkong'}\n>>> a.values()\n[['css', 'js', 'js'], 'kkkk', 18, 'webkong']\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])])])}),[],!1,null,null,null);a.default=t.exports}}]);