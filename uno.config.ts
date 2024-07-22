import {
    defineConfig,
    presetAttributify,
    presetIcons,
    presetTypography,
    presetUno,
    presetWebFonts,
    transformerDirectives,
    transformerVariantGroup,
} from 'unocss'
import presetRemToPx from '@unocss/preset-rem-to-px'
import transformerAttributifyJsx from '@unocss/transformer-attributify-jsx'

export default defineConfig({
    // 组合
    shortcuts: [
        ['full', 'w-full h-full'],
        ['flex-center', 'flex  items-center justify-center'],
    ],
    presets: [
        // 将rem单位转换成px
        presetRemToPx(),
        // 默认预设
        presetUno(),
        // 支持attributify mode,简单说就是为了避免样式写太长难维护，能将py-2 px-2这种相关属性整合起来写成p="y-2 x-4"
        presetAttributify(),

        presetTypography(),
        presetWebFonts(),
    ],
    transformers: [
        transformerAttributifyJsx(),
        transformerDirectives(),
        transformerVariantGroup(),
    ],
})
