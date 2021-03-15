(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{582:function(s,t,a){"use strict";a.r(t);var n=a(6),r=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("blockquote",[a("p",[s._v("想要深入往往是要从概念开始的。")])]),s._v(" "),a("h2",{attrs:{id:"定义"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#定义"}},[s._v("#")]),s._v(" 定义")]),s._v(" "),a("p",[s._v("在计算机科学中，算法的"),a("strong",[s._v("时间复杂度")]),s._v("是一个函数，它定量描述了该算法的运行时间。这是一个代表算法输入值的字符串的长度的函数（f(n)）。时间复杂度常用大 O 符号表述，不包括这个函数的低阶项和首项系数。使用这种方式时，时间复杂度可被称为是"),a("strong",[s._v("渐近")]),s._v("的，亦即考察输入值大小趋近无穷时的情况。")]),s._v(" "),a("p",[s._v("例如，如果一个算法对于任何大小为 n （必须比 n"),a("sub",[s._v("0")]),s._v("大）的输入，它至多需要 5n"),a("sup",[s._v("3")]),s._v("+ 3n 的时间运行完毕，那么它的"),a("strong",[s._v("渐近时间复杂度")]),s._v("是 O(n"),a("sup",[s._v("3")]),s._v(")。")]),s._v(" "),a("h2",{attrs:{id:"描述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#描述"}},[s._v("#")]),s._v(" 描述")]),s._v(" "),a("p",[s._v("时间复杂度是指程序运行从开始到结束所需要的时间。")]),s._v(" "),a("p",[s._v("一个算法中的语句执行次数称为语句频度或时间频度。记为 T(n)。")]),s._v(" "),a("p",[s._v("只是时间复杂度，只有在程序真正执行或者测试的时候才能看到，所以通常的做法就是，从算法中选取一个"),a("strong",[s._v("基础操作")]),s._v("或者称为"),a("strong",[s._v("原操作")]),s._v("，以基础操作的"),a("strong",[s._v("重复执行次数")]),s._v("作为算法的时间度量。")]),s._v(" "),a("p",[s._v("算法的执行次数还要随输入集有关，此时要考虑所有可能输入数据的期望值，此时的算法时间复杂度叫"),a("strong",[s._v("平均时间复杂度")]),s._v("。")]),s._v(" "),a("p",[s._v("算法的基本操作重复执行的次数是模块 n 的某一个函数 f(n)，因此，算法的时间复杂度记做：T(n)=O(n）。随着模块 n 的增大，算法执行的时间的增长率和 f(n)的增长率成正比，所以 f(n)越小，算法的时间复杂度越低，算法的效率越高。")]),s._v(" "),a("p",[s._v("大多数情况下，基础操作是最深层循环内的语句中的操作。")]),s._v(" "),a("p",[s._v("按数量级递增排列，常见的时间复杂度有：\n常数阶 O(1), 对数阶 O(log"),a("sub",[s._v("2")]),s._v("n), 线性阶 O(n), 线性对数阶 O(nlog"),a("sub",[s._v("2")]),s._v("n), 平方阶 O(n"),a("sup",[s._v("2")]),s._v(")， 立方阶 O(n"),a("sup",[s._v("3")]),s._v("),...， k 次方阶 O(n"),a("sup",[s._v("k")]),s._v("), 指数阶 O(2"),a("sup",[s._v("n")]),s._v(") 。")]),s._v(" "),a("h2",{attrs:{id:"例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#例"}},[s._v("#")]),s._v(" 例")]),s._v(" "),a("h3",{attrs:{id:"常数阶"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常数阶"}},[s._v("#")]),s._v(" 常数阶")]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  n "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\na "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("算法的时间复杂度为 O(1)。这个算法的运行次数函数是 f(n) = 1+1+1 = 3, 把常数项改为 1，所以时间复杂度是 O(1)。")]),s._v(" "),a("h3",{attrs:{id:"线性阶"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#线性阶"}},[s._v("#")]),s._v(" 线性阶")]),s._v(" "),a("div",{staticClass:"language-JavaScript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" sum "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+=")]),s._v(" i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("sum"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("算法的时间复杂度是 O(n)。这个的算法的运行次数函数 f(n) = n+n = 2n , 把常数改为 1， 所以时间复杂度是 O(n)。")]),s._v(" "),a("h3",{attrs:{id:"平方阶"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#平方阶"}},[s._v("#")]),s._v(" 平方阶")]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" x "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" j "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" j "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<=")]),s._v(" i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" j"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),s._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("在上面这个双重 for 循环中，基础操作"),a("code",[s._v("++x")]),s._v("执行了"),a("code",[s._v("1+2+3+ ... +n-1")]),s._v("次，即 n*(n-1)/2 = （n"),a("sup",[s._v("2")]),s._v("-2n）/2，所以时间复杂度是 O(n"),a("sup",[s._v("2")]),s._v(")；")]),s._v(" "),a("h3",{attrs:{id:"对数阶"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#对数阶"}},[s._v("#")]),s._v(" 对数阶")]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" n "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("i "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  i "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("算法的时间复杂度是 O(log"),a("sub",[s._v("2")]),s._v("n)。当每次"),a("code",[s._v("i")]),s._v("乘以 2 之后，"),a("code",[s._v("i")]),s._v("的值渐进于 n，也就是说，有多少个 2 相乘之后会大于 n,就会退出循环。 2"),a("sup",[s._v("x")]),s._v(" = n, x 就是运行的次数， x = log"),a("sub",[s._v("2")]),s._v("n 。")]),s._v(" "),a("p",[s._v("更多的时间复杂度列表参见 维基百科-时间复杂度"),a("sup",[s._v("[2]")]),s._v("。")]),s._v(" "),a("h2",{attrs:{id:"参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[s._v("#")]),s._v(" 参考")]),s._v(" "),a("p",[s._v("[1]"),a("a",{attrs:{href:"http://baike.baidu.com/item/%E6%97%B6%E9%97%B4%E5%A4%8D%E6%9D%82%E5%BA%A6",target:"_blank",rel:"noopener noreferrer"}},[s._v("百度百科-时间复杂度"),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("[2]"),a("a",{attrs:{href:"https://zh.wikipedia.org/wiki/%E6%97%B6%E9%97%B4%E5%A4%8D%E6%9D%82%E5%BA%A6",target:"_blank",rel:"noopener noreferrer"}},[s._v("维基百科-时间复杂度"),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("[3]"),a("a",{attrs:{href:"http://blog.csdn.net/firefly_2002/article/details/8008987",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://blog.csdn.net/firefly_2002/article/details/8008987"),a("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=r.exports}}]);