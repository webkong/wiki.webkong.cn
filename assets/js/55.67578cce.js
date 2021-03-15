(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{599:function(e,a,n){"use strict";n.r(a);var t=n(6),s=Object(t.a)({},(function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("p",[e._v("从 Lua 5.1 语言添加了对模块和包的支持。一个 Lua 模块的数据结构是用一个 Lua 值（通常是一个 Lua 表或者 Lua 函数）。一个 Lua 模块代码就是一个会返回这个 Lua 值的代码块。 可以使用内建函数 require() 来加载和缓存模块。简单的说，一个代码模块就是一个程序库，可以通过 require 来加载。模块加载后的结果通过是一个 Lua table，这个表就像是一个命名空间，其内容就是模块中导出的所有东西，比如函数和变量。require 函数会返回 Lua 模块加载后的结果，即用于表示该 Lua 模块的 Lua 值。")]),e._v(" "),n("h3",{attrs:{id:"require-函数"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#require-函数"}},[e._v("#")]),e._v(" require 函数")]),e._v(" "),n("p",[e._v('Lua 提供了一个名为 require 的函数用来加载模块。要加载一个模块，只需要简单地调用 require "file"就可以了，file 指模块所在的文件名。这个调用会返回一个由模块函数组成的 table ，并且还会定义一个包含该 table 的全局变量。\n在 Lua 中创建一个模块最简单的方法是：创建一个 table ，并将所有需要导出的函数放入其中，最后返回这个 table 就可以了。相当于将导出的函数作为 table 的一个字段，在 Lua 中函数是第一类值，提供了天然的优势。')]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('local foo={}\n\nlocal function getname()\n    return "Lucy"\nend\n\nfunction foo.greeting()\n    print("hello " .. getname())\nend\n\nreturn foo\n\n')])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br"),n("span",{staticClass:"line-number"},[e._v("9")]),n("br"),n("span",{staticClass:"line-number"},[e._v("10")]),n("br"),n("span",{staticClass:"line-number"},[e._v("11")]),n("br"),n("span",{staticClass:"line-number"},[e._v("12")]),n("br")])]),n("p",[e._v("调用")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('local fp = require("my")\nfp.greeting()     --\x3eoutput: hello Lucy\n')])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br")])]),n("p",[e._v("注：对于需要导出给外部使用的公共模块，处于安全考虑，是要避免全局变量的出现。我们可以使用 lua-releng 工具完成全局变量的检测，具体参考 lua 的 局部变量 章节。")]),e._v(" "),n("h4",{attrs:{id:"原文"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#原文"}},[e._v("#")]),e._v(" 原文")]),e._v(" "),n("p",[n("a",{attrs:{href:"https://moonbingbing.gitbooks.io/openresty-best-practices/content/lua/module.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://moonbingbing.gitbooks.io/openresty-best-practices/content/lua/module.html"),n("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=s.exports}}]);