# Canvas 基础


## Canvas 绘制篇
::: tip
项目背景：在一张3d的图片上 绘制异形的点击区域
:::

```html
 <canvas
    ref="canvasRef"
    width="1136"
    height="640"
    class="canvas canvas2"
    @click="handleClick"
    @mousemove="handleMouseMove"
  ></canvas>
```

```ts
// 多个区域的坐标位置, 通过索引去判断当前区域
const shapes = ref([
  [
    { x: 240, y: 90 },
    { x: 350, y: 150 },
    { x: 120, y: 290 },
    { x: 0, y: 220 }
  ],
  [
    { x: 350, y: 150 },
    { x: 460, y: 220 },
    { x: 230, y: 350 },
    { x: 120, y: 290 }
  ],
  [
    { x: 350, y: 20 },
    { x: 740, y: 220 },
    { x: 630, y: 290 },
    { x: 240, y: 90 }
  ],
  [
    { x: 480, y: 240 },
    { x: 610, y: 300 },
    { x: 380, y: 440 },
    { x: 250, y: 370 }
  ],
  [
    { x: 680, y: 320 },
    { x: 810, y: 390 },
    { x: 580, y: 540 },
    { x: 440, y: 460 }
  ],
  [
    { x: 800, y: 240 },
    { x: 1136, y: 390 },
    { x: 760, y: 640 },
    { x: 600, y: 540 },
    { x: 830, y: 390 },
    { x: 680, y: 310 }
  ]
])

const paint = () => {
  const canvas = canvasRef.value as any
  const ctx = canvas.getContext('2d')

  for (let i = 0; i < shapes.value.length; i++) {
    // 多边形的顶点
    const vertices = shapes.value[i]

    // 绘制多边形
    ctx.beginPath()
    ctx.moveTo(vertices[0].x, vertices[0].y)
    for (let i = 1; i < vertices.length; i++) {
      ctx.lineTo(vertices[i].x, vertices[i].y)
    }
    ctx.closePath()
    ctx.fillStyle = 'transparent'
    ctx.fill()
  }
}

const handleClick = (event: MouseEvent) => {
  const canvas = canvasRef.value as any
  const rect = canvas.getBoundingClientRect()
  const x = event.clientX - rect.left
  const y = event.clientY - rect.top

  // 检查点击是否在异形内
  const index = isPointInShape(x, y)
  if (index) {
    jump(index)
  }
}

const handleMouseMove = (event: MouseEvent) => {
  const canvas = canvasRef.value as any
  const rect = canvas.getBoundingClientRect()

  const x = event.clientX - rect.left
  const y = event.clientY - rect.top

  // 检查点击是否在异形内
  const index = isPointInShape(x, y)
  if (index) {
    hoverKey.value = index
  } else {
    hoverKey.value = 0
  }
}

const isPointInShape = (x: number, y: number) => {
  const pointInPolygon = (points: { x: number; y: number }[]): boolean => {
    let inside = false
    for (let i = 0, j = points.length - 1; i < points.length; j = i++) {
      const xi = points[i].x
      const yi = points[i].y
      const xj = points[j].x
      const yj = points[j].y

      const intersect =
        yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi
      if (intersect) inside = !inside
    }
    return inside
  }

  for (let i = 0; i < shapes.value.length; i++) {
    if (pointInPolygon(shapes.value[i])) {
      return i + 1 // 返回多边形的索引（从1开始）
    }
  }
  return 0 // 如果不在任何多边形内，返回0
}

onMounted(() => {
  paint()
})
```
