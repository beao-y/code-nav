import type { DefaultTheme } from 'vitepress'
import {set_sidebar} from "../utils/autoSidebar";

export const nav: DefaultTheme.Config['nav'] = [
    { text: '编程导航', link: '/nav/index.md' },
    {text: '前端碎片',
        items: set_sidebar('front-end')
    },

]
