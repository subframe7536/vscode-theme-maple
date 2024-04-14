import type { GenerateUIWithBaseFn } from '../../type'
import { brighten } from '../../util'

export const generateTerminalColor: GenerateUIWithBaseFn = (baseColor, ui, isDark) => {
  const baseOffset = isDark ? 0 : 20
  const brightOffset = baseOffset + 10

  return {
    terminalCursor: {
      background: ui.backgroundEditor,
      foreground: ui.foreground,
    },
    terminal: {
      background: ui.backgroundEditor,
      foreground: ui.foreground,
      ansiBrightBlack: '#666666',
      ansiBrightBlue: brighten(baseColor.blue, brightOffset),
      ansiBrightCyan: brighten(baseColor.cyan, brightOffset),
      ansiBrightGreen: brighten(baseColor.green, brightOffset),
      ansiBrightMagenta: brighten(baseColor.purple, brightOffset),
      ansiBrightRed: brighten(baseColor.red, brightOffset),
      ansiBrightWhite: '#ffffff',
      ansiBrightYellow: brighten(baseColor.yellow, brightOffset),
      ansiBlack: '#181818',
      ansiBlue: brighten(baseColor.blue, baseOffset),
      ansiCyan: brighten(baseColor.cyan, baseOffset),
      ansiGreen: brighten(baseColor.green, baseOffset),
      ansiMagenta: brighten(baseColor.purple, baseOffset),
      ansiRed: brighten(baseColor.red, baseOffset),
      ansiWhite: '#f4f4f5',
      ansiYellow: brighten(baseColor.yellow, baseOffset),
    },
  }
}
