import type { GenerateUIWithBaseFn } from '../../type'
import { brighten, parseColor } from '../../util'

export const generateTerminalColor: GenerateUIWithBaseFn = (base, ui) => {
  return {
    terminalCursor: {
      background: ui.backgroundEditor,
      foreground: ui.foreground,
    },
    terminal: {
      background: ui.backgroundEditor,
      foreground: ui.foreground,
      ansiBrightBlack: parseColor('hsl(0, 0%, 40%)'),
      ansiBrightBlue: brighten(base.blue, 10),
      ansiBrightCyan: brighten(base.cyan, 10),
      ansiBrightGreen: brighten(base.green, 10),
      ansiBrightMagenta: brighten(base.purple, 10),
      ansiBrightRed: brighten(base.red, 10),
      ansiBrightWhite: parseColor('hsl(0, 0%, 100%)'),
      ansiBrightYellow: brighten(base.yellow, 10),
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
