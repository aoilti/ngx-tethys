---
title: 布局规则
order: 10
---

协助进行页面级整体布局

## 尺寸

- 左侧一级导航宽度 60px，通知宽度 360px；
- 顶部一级导航高度 50px，二级导航高度 45px；
- 内容区域模块间距均为 10px

## 视觉

- 左侧一级导航作为父级导航，重要程度最高，用 #48525C 更加贴近于研发软件场景；
- 二级导航区域及内容区域底色为白色，在视觉需强化处字体「变色」或「加粗」显示；
- 「12px」「14px」 为导航标准字号，导航处标题为「16px」

## 交互

- 左侧一级导航 hover 时显示文字；
- 顶部一、二级导航 tab 切换过渡流畅自然，响应时间不应过长；
- 通知模态框z轴展开，减少占用空间，增大内容可视面积，增加用户的获取效率；

## 基本布局

### 侧边-顶部 响应式布局

侧边导航在页面布局上采用的是左右的结构，一般主导航放置于页面的左侧固定位置，辅助菜单放置于工作区顶部。内容根据浏览器终端进行自适应，能提高横向空间的使用率。侧边导航的模式层级扩展性强，一、二、三级导航项目可以更为顺畅且具关联性的被展示，同时侧边导航可以固定，使得用户在操作和浏览中可以快速的定位和切换当前位置，有很高的操作效率。


<div align=center>
<img src="assets/images/layout/sidebar.png" />
</div>

### 弹窗 响应式布局

弹窗的宽度目前为 3 种：
- 「660px」适用于字段较少的设置属性及反馈机制中；
- 「800px」使用于字段较多且交互较复杂的设置属性中，高度自适应，当达到一定高度时内部滚动，底部 button 固定；
- 「980px」为使用最多的详情页宽度，承载更多信息及更多的交互，

<div align=center>
<img src="assets/images/layout/dialog.png" />
</div>

