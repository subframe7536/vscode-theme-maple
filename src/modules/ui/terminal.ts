import type { GenerateUIWithBaseFn } from '../../type'

const black = '#181818'
const white = '#f4f4f5'
export const generateTerminalColor: GenerateUIWithBaseFn = (baseColor, ui) => ({
  terminalCursor: {
    background: ui.background,
    foreground: ui.cursor,
  },
  terminal: {
    background: ui.background,
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
})