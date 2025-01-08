import type { GenerateUIWithBaseFn } from '../../type'
import { brighten, darken, parseColor } from '../../util'

export const generateTerminalColor: GenerateUIWithBaseFn = (base, ui, isDark) => {
  const brightenDelta = isDark ? 10 : 0
  return {
    terminalCursor: {
      background: ui.backgroundEditor,
      foreground: ui.foreground,
    },
    terminal: {
      background: ui.backgroundEditor,
      foreground: ui.foreground,
      ansiBrightBlack: parseColor('hsl(0, 0%, 40%)'),
      ansiBrightBlue: brighten(isDark ? base.blue : darken(base.blue, 2), brightenDelta),
      ansiBrightCyan: brighten(base.cyan, brightenDelta),
      ansiBrightGreen: brighten(isDark ? base.greenLight : darken(base.greenLight, 8), brightenDelta),
      ansiBrightMagenta: brighten(base.purple, brightenDelta),
      ansiBrightRed: brighten(base.red, brightenDelta),
      ansiBrightWhite: parseColor('hsl(0, 0%, 100%)'),
      ansiBrightYellow: brighten(isDark ? base.yellow : darken(base.orange, 4), brightenDelta),
      ansiBlack: parseColor('hsl(0, 0%, 9%)'),
      ansiBlue: isDark ? base.blue : darken(base.blue, 2),
      ansiCyan: base.cyan,
      ansiGreen: isDark ? base.greenLight : darken(base.greenLight, 8),
      ansiMagenta: base.purple,
      ansiRed: base.red,
      ansiWhite: parseColor('hsl(0, 5%, 95%)'),
      ansiYellow: isDark ? base.yellow : darken(base.orange, 4),
    },
  }
}
