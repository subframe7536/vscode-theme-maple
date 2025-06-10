import type { BaseColor, TokenColor, UIColor } from '../type'

import { brighten, buildUI, darken } from '../util'
import { generateTokenColor } from './token'
import { generateBaseColor } from './ui/base'
import { generateEditorColor } from './ui/editor'
import { generateElementColor } from './ui/element'
import { generateTerminalColor } from './ui/terminal'
import { generateViewColor } from './ui/view'

export function buildTheme(
  base: BaseColor,
  token: TokenColor,
  ui: UIColor,
  isDark: boolean,
) {
  const changeColor = (color: string, amount: number | [dark: number, light: number]) => {
    const data = typeof amount === 'number' ? amount : amount[isDark ? 0 : 1]
    return (isDark ? darken : brighten)(color, data)
  }
  return {
    colors: buildUI({
      ...generateBaseColor(ui, isDark, changeColor),
      ...generateEditorColor(base, ui, isDark),
      ...generateElementColor(ui, isDark, changeColor),
      ...generateViewColor(base, ui, isDark),
      ...generateTerminalColor(base, ui, isDark),
    }),
    ...generateTokenColor(token, ui.foreground),
  }
}
