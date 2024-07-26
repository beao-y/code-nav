import type { DefaultTheme } from 'vitepress'
import { set_sidebar } from '../utils/autoSidebar'

export const sidebar: DefaultTheme.Config['sidebar'] = {
  '/dict': set_sidebar('dict'),
  '/front-end': set_sidebar('front-end'),
  '/daily': set_sidebar('daily'),
  '/tools': set_sidebar('tools')
}
