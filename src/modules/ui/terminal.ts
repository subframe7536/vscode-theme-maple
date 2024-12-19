import type { GenerateUIWithBaseFn } from '../../type'
import { brighten, parseColor } from '../../util'

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
      ansiBrightGreen: brighten(base.green, brightenDelta),
      ansiBrightMagenta: brighten(base.purple, brightenDelta),
      ansiBrightRed: brighten(base.red, brightenDelta),
      ansiBrightWhite: parseColor('hsl(0, 0%, 100%)'),
      ansiBrightYellow: brighten(base.yellow, brightenDelta),
      ansiBlack: parseColor('hsl(0, 0%, 9%)'),
      ansiBlue: base.blue,
      ansiCyan: base.cyan,
      ansiGreen: base.green,
      ansiMagenta: base.purple,
      ansiRed: base.red,
      ansiWhite: parseColor('hsl(0, 5%, 95%)'),
      ansiYellow: base.yellow,
    },
  }
}
