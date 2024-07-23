import type { DefaultTheme } from 'vitepress'
import { set_sidebar } from '../utils/autoSidebar'

export const sidebar: DefaultTheme.Config['sidebar'] = {
  '/front-end': set_sidebar('front-end'),
  '/daily': set_sidebar('daily')
}
