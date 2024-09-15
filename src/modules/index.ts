import { brighten, buildUI, darken } from '../util'
import { generateTokenColor } from './token'
import { generateBaseColor } from './ui/base'
import { generateEditorColor } from './ui/editor'
import { generateElementColor } from './ui/element'
import { generateTerminalColor } from './ui/terminal'
import { generateViewColor } from './ui/view'
import type { BaseColor, TokenColor, UIColor } from '../type'

export function buildTheme(
  base: BaseColor,
  token: TokenColor,
  ui: UIColor,
  isDark: boolean,
) {
  const altParseColor = (color: string, alpha: number | [dark: number, light: number]) => {
    const data = typeof alpha === 'number' ? alpha : alpha[isDark ? 0 : 1]
    return (isDark ? darken : brighten)(color, data)
  }
  return {
    colors: buildUI({
      ...generateBaseColor(ui, isDark, altParseColor),
      ...generateEditorColor(base, ui, isDark),
      ...generateElementColor(ui, isDark, altParseColor),
      ...generateViewColor(base, ui, isDark),
      ...generateTerminalColor(base, ui, isDark),
    }),
    ...generateTokenColor(token, ui.foreground),
  }
}
