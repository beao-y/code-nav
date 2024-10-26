# ECharts 基础


## ECharts Hook
```ts
// hooks/useECharts.ts

/**
 * useECharts
 * @param chartRef    DOM 元素
 * @param initOptions 初始化选项
 * @param theme       主题
 * @param opts        配置
 */

import * as echarts from 'echarts'
import {
  Ref,
  shallowRef,
  reactive,
  watch,
  onMounted,
  onUnmounted,
  onActivated,
  onDeactivated
} from 'vue'

export function useECharts(
  chartRef: Ref<HTMLElement | null>,
  initOptions: echarts.EChartsOption,
  theme?: string | object | null,
  opts?: echarts.EChartsInitOpts
) {
  const chartInstance = shallowRef<echarts.EChartsType | null>(null)

  const options = reactive<echarts.EChartsOption>(
    initOptions as echarts.EChartsOption
  )

  // 初始化图表
  const initChart = () => {
    if (chartRef.value && !chartInstance.value) {
      // 创建 ECharts 实例
      chartInstance.value = echarts.init(chartRef.value, theme, opts)
      // 设置图表的初始选项
      chartInstance.value.setOption(options)
    }
  }

  // 更新图表
  const updateChartOptions = (newOptions: echarts.EChartsOption) => {
    if (chartInstance.value) {
      // 使用新的选项更新图表，并优化性能
      chartInstance.value.setOption(newOptions, {
        notMerge: true,
        lazyUpdate: true
      })
    }
  }

  // 根据窗口自适应
  const handleResize = () => {
    chartInstance.value?.resize()
  }

  // 销毁图表
  const disposeChart = () => {
    chartInstance.value?.dispose()
    chartInstance.value = null
  }

  // 监听 options 的变化，并在其发生改变时更新图表
  watch(options as echarts.EChartsOption, updateChartOptions, { deep: true })

  // 组件挂载时监听窗口大小
  onMounted(() => {
    initChart()
    window.addEventListener('resize', handleResize)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
    disposeChart()
  })

  onActivated(() => {
    if (!chartInstance.value) {
      initChart()
    }
    window.addEventListener('resize', handleResize)
  })

  onDeactivated(() => {
    window.removeEventListener('resize', handleResize)
    disposeChart()
  })

  return {
    chartInstance,
    options,
    initChart,
    handleResize,
    disposeChart
  }
}

```

## ECharts 常规用法
```ts
// 项目中代码 demo
let chartInstances: any = []
let resizeObservers: any = null

const lineColors = [
  '#AA66EB',
  '#82C61E',
  '#66C999',
  '#DBAA77',
  '#638DEE',
  '#4ECBCC'
]

// 颜色算法
const hexToHexWithAlpha = (hex: string, alpha: number) => {
  // 去掉前面的 #
  hex = hex.replace('#', '')

  // 计算透明度的 2 位 HEX 值
  const a = Math.round(alpha * 255) // 将 alpha 转换为 0-255 范围
  const hexAlpha = a.toString(16).padStart(2, '0') // 转换为 HEX 并填充至 2 位

  // 返回 8 位 HEX 颜色值
  return `#${hex}${hexAlpha}`
}

const chartData = ref<any[]>([])

// 时间算法
const timeAlgorithm = (time: any) => {
  // 是否正数
  let positive = true
  if (time < 0) {
    time = -time
    positive = false
  }
  const minutes = Math.floor(time / 60)
  const seconds = +(time % 60).toFixed(0)
  if (positive) {
    return (
      (minutes >= 1 ? minutes + 'm' : '') +
      (seconds === 0 ? 0 + 's' : seconds + 's')
    )
  } else {
    return (
      '-' +
      (minutes >= 1 ? minutes + 'm' : '') +
      (seconds === 0 ? 0 + 's' : seconds + 's')
    )
  }
}

const initChart = (index: number) => {
  // if (chartInstances[index]) chartInstances[index].dispose()
  const chartInstance = echarts.init(chartRefs.value[index])
  const option = {
    tooltip: {
      trigger: 'axis'
    },
    xAxis: {
      type: 'category',
      axisLabel: {
        // 坐标轴刻度标签的相关设置。
        interval: 'auto',
        rotate: '45',
        showMinLabel: true,
        showMaxLabel: true,
        formatter: (value: any) => {
          return timeAlgorithm(value)
        }
      }
    },
    yAxis: {
      type: 'value',
      // y 轴数据区间自定义
      min: Math.floor(Math.min(...chartData.value[index].data) * 0.6),
      max: Math.ceil(Math.max(...chartData.value[index].data) * 1.3)
    },
    legend: {
      left: '',
      top: '-2px',
      orient: 'horizontal',
      icon: 'circle',
      itemWidth: 10,
      itemHeight: 10,
      textStyle: {
        color: chartData.value[index].color // 设置文字颜色为红色
      }
    },
    series: [
      {
        name: chartData.value[index].key,
        data: chartData.value[index].data,
        symbol: 'none',
        markLine: {
          data: [
            {
              yAxis: chartData.value[index].min, // 添加一条标记线
              label: { formatter: chartData.value[index].min },
              lineStyle: {
                type: 'dashed',
                color: '#fd230c', // 设置标记线颜色为红色
                width: 1
              }
            },
            {
              yAxis: chartData.value[index].max, // 添加一条标记线
              label: { formatter: chartData.value[index].max },
              lineStyle: {
                type: 'dashed',
                color: '#fd230c', // 设置标记线颜色为红色
                width: 1
              }
            },
            {
              yAxis: 10, // 添加一条标记线
              label: { formatter: 10 },
              lineStyle: {
                type: 'dashed',
                color: '#fc9b0c', // 设置标记线颜色为红色
                width: 1
              }
            }
          ]
        },
        type: 'line',
        smooth: true,
        itemStyle: { color: chartData.value[index].color },
        lineStyle: {
          color: chartData.value[index].color
        },
        areaStyle: {
          // 曲线渐变色块
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: hexToHexWithAlpha(chartData.value[index].color, 0.3)
            },
            {
              offset: 1,
              color: '#fff'
            }
          ])
        }
      }
    ],
    grid: {
      top: '30px',
      left: '10px',
      right: '20px',
      bottom: '0',
      containLabel: true
    }
  }
  // 配置你的图表
  chartInstance.setOption(option)

  return chartInstance
}


// 监听图表大小
const onObserver = () => {
  nextTick(() => {
    chartInstances = chartData.value.map((_, index) => initChart(index))
    // 使用 ResizeObserver 监听每个图表的宽度变化
    resizeObservers = chartRefs.value.map((ref, index) => {
      const observer = new ResizeObserver(() => resizeChart(index))
      observer.observe(ref)
      return observer
    })
  })
}

// 更新图表
const upDateChart = () => {
  if (!chartInstances.length) return
  // 更新数据
  chartInstances.forEach((chartInstance: any, index: number) => {
    chartInstance.setOption({
      series: [
        {
          data: chartData.value[index].data
        }
      ]
    })
  })
}

// 渲染图表
const renderChart = () => {
  let res: any = []

  checkItems.value.forEach((item: any) => {
    props.data.forEach((v: any) => {
      if (item.name == v.key && item.eqpId == v.eqpId) {
        res.push({
          ...v,
          ...item,
          key: [1, 2, 3].includes(v.eqpId) ? item.key + v.eqpId : item.key,
          color: lineColors[v.color]
        })
      }
    })
  })
  chartData.value = res

  onObserver()
}

// 展开折叠
const onChecked = () => {
  isVisible.value = false

  chartInstances.forEach((_: any, index: number) => {
    chartInstances[index].dispose()
  })

  renderChart()
}


// 监听数据改变，更新图表
watch(
  () => props.data,
  () => {
    upDateChart()
  },
  { deep: true, immediate: true }
)

// 窗口变化重置尺寸
const resizeChart = (index: number) => {
  if (chartInstances[index]) {
    chartInstances[index].resize()
  }
}

onMounted(async () => {
  renderChart()
})

// 清理函数
onBeforeUnmount(() => {
  resizeObservers.forEach((observer: any) => observer.disconnect())
})
```
