import type { BaseColor, TokenColor, UIColor } from '../type'
import { buildUI } from '../util'
import { generateTokenColor } from './token'
import { generateBaseColor } from './ui/base'
import { generateEditorColor } from './ui/editor'
import { generateElementColor } from './ui/element'
import { generateTerminalColor } from './ui/terminal'
import { generateViewColor } from './ui/view'

export function buildTheme(base: BaseColor, token: TokenColor, ui: UIColor) {
  return {
    colors: buildUI({
      ...generateBaseColor(ui),
      ...generateEditorColor(base, ui),
      ...generateElementColor(ui),
      ...generateViewColor(base, ui),
      ...generateTerminalColor(base, ui),
    }),
    ...generateTokenColor(token, ui.foreground),
  }
}