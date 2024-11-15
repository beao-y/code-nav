# CSS 常用理论知识点

## BFC 的理解
块格式化上下文（Block Formatting Context），它是一个独立的渲染区域，用于控制元素如何布局和如何与周围的元素交互。简单来说，BFC 是一种布局机制，它影响元素的排列和清除浮动等行为。

#### 如何创建一个 BFC
1. 设置 `display` 属性为 `inline-block`、`flex`、`grid`、`table` 等。
2. 设置 `float` 属性为`非 none` 值。
3. 设置 `position` 属性为 `absolute` 或 `fixed`。
4. 设置 `overflow` 属性为 `auto`、`hidden` 或 `scroll`。

#### BFC 使用场景
1. `解决margin的重叠问题`：将两个元素变为两个BFC，就解决了margin重叠的问题。
2. `解决高度塌陷的问题`：子元素设置浮动后，父元素会发生高度塌陷，常用的办法是给父元素设置 `overflow:hidden`。
3. `控制布局`：BFC 的隔离作用使得它可以帮助独立控制元素之间的布局行为，避免布局冲突。

## CSS 可以继承的属性
1. 字体系列属性：`font-family`、`font-weight`、`font-size`、`font-style`
2. 文本系列属性: `text-indent`、`text-align`、`line-height`、`word-spacing`、`letter-spacing`、`text-transform`、`color`
3. 元素可见性: `visibility`
4. 列表布局属性: `list-style`
5. 光标属性: `cursor`

## 隐藏元素的方法
1. `display: none`: 不占空间
2. `visibility: hidden`：占空间，不响应监听事件
3. `opacity: 0`：占空间，响应监听事件
4. `position: absolute`：定位将元素移除可视区域内，达到隐藏效果
5. `transform: scale(0,0)`：占空间，不响应监听事件
6. `z-index`：置底层，达到遮挡效果
7. `clip/clip-path`：占空间，不响应监听事件

## 重排（回流）和重绘

#### 重排/ref1ow
`ref1ow`的本质就是重新计算`layout`树。<br/>
当进行了会影响布局树的操作后，需要重新计算布局树，会引发`Layout`。<br/>
为了避免连续的多次操作导致布局树反复计算，浏览器会合并这些操作，当JS代码全部完成后再进行统一计算。所以改动属性造成的`reflow`是`异步`完成的。<br/>
也同样因为如此，当JS获取布局属性时，就可能造成近法获取到最新的布局信息。<br/>
浏览器在反复权衡下，最终决定获取属性立即`reflow`

#### 重绘/repaint
`repaint`的本质就是重新根据分层信息计算了绘制指令。<br/>
当改动了可见样式后，就需要重新计算，会引发`repaint` <br/>
由于元素的布局信息也属于可见样式，所以`reflow`一定会引起`repaint`

## 为什么transform效率高？
因为`transform`既不会影响布局也不会影响绘制指令，它影响的只是渲染流程的最后一个`draw`阶段<br/>
由于`draw`阶段在合成线程中，所以`transform`的变化几乎不会影响渲染主线程。反之，渲染主线程无论
如何忙碌，也不会影响`transform`的变化。

## 单行、多行文本溢出隐藏

#### 单行
```css
div{
  overflow: hidden;            // 溢出隐藏
  text-overflow: ellipsis;      // 溢出用省略号显示
  white-space: nowrap;         // 规定段落中的文本不进行换行
}
```

#### 多行
```css
div{
  overflow: hidden;            // 溢出隐藏
  text-overflow: ellipsis;     // 溢出用省略号显示
  display:-webkit-box;         // 作为弹性伸缩盒子模型显示。
  -webkit-box-orient:vertical; // 设置伸缩盒子的子元素排列方式：从上到下垂直排列
  -webkit-line-clamp:3;        // 显示的行数
}
```

## 特殊场景
#### 绘制三角形
```css
div {
    width: 0;
    height: 0;
    border-bottom: 50px solid red; // 定点在对面
    border-right: 50px solid transparent;
    border-left: 50px solid transparent;
}
```

#### 绘制扇形
```css
div{
    border: 100px solid transparent;
    width: 0;
    heigt: 0;
    border-radius: 100px;
    border-top-color: red;
}
```

#### 宽高自适应的正方形
```css
// 方法一
div {
  width: 10%;
  height: 10vw;
  background: red;
}

// 方法二
div {
  width: 20%;
  height: 0;
  padding-top: 20%;
  background: orange;
}
   
// 方法三
div {
  width: 30%;
  overflow: hidden;
  background: yellow;
}
div::after {
  content: '';
  display: block;
  margin-top: 100%;
}
```

## 绘制0.5px的线条
#### 缩放转换
```css
transform: scale(0.5,0.5);
```

#### 采用meta viewport的方式，针对移动端
```css
<meta name="viewport" content="width=device-width, initial-scale=0.5, minimum-scale=0.5, maximum-scale=0.5"/>

```
