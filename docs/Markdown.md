---
article: false
title: markdown
icon: check
---

>参考：
https://www.bilibili.com/video/BV1JA411h7Gw
https://www.runoob.com/markdown/md-tutorial.html
https://unicode.org/emoji/charts/full-emoji-list.html#face-smiling
https://www.webfx.com/tools/emoji-cheat-sheet/

## 标题
# 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题

一级标题
===
二级标题
---
## 强调与引用
> 强调与引用

## 超链接
[点击跳转至百度](http://www.baidu.com"一个搜索引擎")

## 引用链接
[百度][id],[百度][id]

[id]:baidu.com"一个搜索引擎"

## 链接添加到标题
请参考[标题1](#一级标题)

## 直接使用url
http://www/baidu.com

### 图片
![图片](https://upload-images.jianshu.io/upload_images/703764-605e3cc2ecb664f6.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240 "图片")

## 无序标题
* 黄瓜
* 玉米
* 茄子

+ 黄瓜
+ 玉米
+ 茄子

- 黄瓜
- 玉米
- 茄子

## 有序标题
1. 黄瓜
2. 玉米
3. 茄子

如果在单一列表项中包含了多个段落，为了保证渲染正常，*与段落首字母之间必须保留四个空格

*    段落一

     小段一
*    段落二

     小段二

如果在列表中加入了区块引用，区域引用标记符也需要缩进4个空格

* 段落一
    > 区块标记一
* 段落二
    > 区块标记二

## 分割线
***
---

## 斜体与加粗
*这里是斜体*
_这里是斜体_

**这里是加粗**
__这里是加粗__

## 下划线
<u>下划线</u>

## 代码块
`
fun (x: Int, y: Int): Int {
  return x + y
}`
``fun (x: Int, y: Int): Int {
  return x + y
}``
```python
print('hello world')
```

## 表格
|表头|条目一|条目二|
:---:|:---:|:---:
项目|项目一|项目二
> 注：三个短斜杠左右的冒号用于控制对齐方式，只放置左边冒号表示文字居左，只放置右边冒号表示文字居右，如果两边都放置冒号表示文字居中。

## 特殊符号
\\   反斜线
\`   反引号
\*   星号
\_   底线
\{\}  花括号
\[\]  方括号
\(\)  括弧
\#   井字号
\+   加号
\-   减号
\.   英文句点
\!   惊叹号

## 表情 emoji
:smile:

##如何给文字上色
使用Markdown的同学最郁闷的地方恐怕就是不能给文字添加颜色了。事实上，Markdown的最初目标就是为纯写作而生的。因此，它并没有考虑文字颜色这一点。所以，单纯使用Markdown设置文字颜色已经做不到了。但你可以这样做：
先用Markdown编辑完成
导出为html，在需要上色的部分手动添加标签<font color='#9932CC'>颜色</font>保存即可。



## 数学公式（可用latex）
$$
y=ax_2+b^2
\mu=\alpha+\beta
$$

## 下标
H~2~O

## 上标
X^2^

## 高亮
==这里是高亮的内容==

## 脚注
知识图谱是一种知识库[^1]
[^1]：Google，things not strings

## 使用html可以实现markdown不支持的内容

## 视频

<iframe src="//player.bilibili.com/player.html?aid=327623069&bvid=BV1JA411h7Gw&cid=171385214&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>