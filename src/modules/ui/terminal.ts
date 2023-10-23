import type { GenerateUIWithBaseFn } from '../../type'
import { darken } from '../../util'

const black = '#181818'
const white = '#f4f4f5'
export const generateTerminalColor: GenerateUIWithBaseFn = (baseColor, ui, isDark) => {
  if (!isDark) {
    for (const [key, color] of Object.entries(baseColor)) {
      baseColor[key] = darken(color, 8)
    }
  }
  return {
    terminalCursor: {
      background: ui.backgroundEditor,
      foreground: ui.foreground,
    },
    terminal: {
      background: ui.backgroundEditor,
      foreground: ui.foreground,
      ansiBrightBlack: black,
      ansiBrightBlue: baseColor.blue,
      ansiBrightCyan: baseColor.cyan,
      ansiBrightGreen: baseColor.green,
      ansiBrightMagenta: baseColor.purple,
      ansiBrightRed: baseColor.red,
      ansiBrightWhite: white,
      ansiBrightYellow: baseColor.yellow,
      ansiBlack: black,
      ansiBlue: baseColor.blue,
      ansiCyan: baseColor.cyan,
      ansiGreen: baseColor.green,
      ansiMagenta: baseColor.purple,
      ansiRed: baseColor.red,
      ansiWhite: white,
      ansiYellow: baseColor.yellow,
    },
  }
}
