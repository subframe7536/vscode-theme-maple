import type { GenerateUIWithBaseFn, UI } from '../../type'
import { brighten } from '../../util'

const black = '#181818'
const white = '#f4f4f5'
export const generateTerminalColor: GenerateUIWithBaseFn = (baseColor, ui, isDark) => {
  const terminal: UI['terminal'] = isDark
    ? {
        background: ui.backgroundEditor,
        foreground: ui.foreground,
        ansiBrightBlack: brighten(black, 30),
        ansiBrightBlue: brighten(baseColor.blue, 20),
        ansiBrightCyan: brighten(baseColor.cyan, 20),
        ansiBrightGreen: brighten(baseColor.green, 20),
        ansiBrightMagenta: brighten(baseColor.purple, 20),
        ansiBrightRed: brighten(baseColor.red, 20),
        ansiBrightWhite: '#fff',
        ansiBrightYellow: brighten(baseColor.yellow, 20),
        ansiBlack: black,
        ansiBlue: baseColor.blue,
        ansiCyan: baseColor.cyan,
        ansiGreen: baseColor.green,
        ansiMagenta: baseColor.purple,
        ansiRed: baseColor.red,
        ansiWhite: white,
        ansiYellow: baseColor.yellow,
      }
    : {
        foreground: '#393a34',
        selectionBackground: '#22222215',
        ansiBrightBlack: '#aaaaaa',
        ansiBrightBlue: '#296aa3',
        ansiBrightCyan: '#10807c',
        ansiBrightGreen: '#1e754f',
        ansiBrightMagenta: '#a13865',
        ansiBrightRed: '#ab5959',
        ansiBrightWhite: '#dddddd',
        ansiBrightYellow: '#bda437',
        ansiBlack: '#121212',
        ansiBlue: '#296aa3',
        ansiCyan: '#10807c',
        ansiGreen: '#1e754f',
        ansiMagenta: '#a13865',
        ansiRed: '#ab5959',
        ansiWhite: '#dbd7caee',
        ansiYellow: '#bda437',
      }
  return {
    terminalCursor: {
      background: ui.backgroundEditor,
      foreground: ui.foreground,
    },
    terminal,
  }
}
