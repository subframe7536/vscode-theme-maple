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
      ansiBrightBlue: brighten(base.blue, brightenDelta),
      ansiBrightCyan: brighten(base.cyan, brightenDelta),
      ansiBrightGreen: brighten(isDark ? base.green : darken(base.greenLight, 2), brightenDelta),
      ansiBrightMagenta: brighten(base.purple, brightenDelta),
      ansiBrightRed: brighten(base.red, brightenDelta),
      ansiBrightWhite: parseColor('hsl(0, 0%, 100%)'),
      ansiBrightYellow: brighten(isDark ? base.yellow : darken(base.orange, 4), brightenDelta),
      ansiBlack: parseColor('hsl(0, 0%, 9%)'),
      ansiBlue: base.blue,
      ansiCyan: base.cyan,
      ansiGreen: isDark ? base.green : darken(base.greenLight, 2),
      ansiMagenta: base.purple,
      ansiRed: base.red,
      ansiWhite: parseColor('hsl(0, 5%, 95%)'),
      ansiYellow: isDark ? base.yellow : darken(base.orange, 4),
    },
  }
}
