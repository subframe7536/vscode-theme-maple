import type { UI, UIColor } from '../../type'

export const generateTerminalColor: (ui: UIColor) => UI = (ui) => {
  return {
    terminalCursor: {
      background: ui.backgroundEditor,
      foreground: ui.foreground,
    },
    terminal: {
      background: ui.backgroundEditor,
      foreground: ui.foreground,
      ansiBrightBlack: '#666666',
      ansiBrightBlue: '#9edbff',
      ansiBrightCyan: '#c1ffff',
      ansiBrightGreen: '#b3efbd',
      ansiBrightMagenta: '#ded7ff',
      ansiBrightRed: '#ffb3b3',
      ansiBrightWhite: '#ffffff',
      ansiBrightYellow: '#ffe9b3',
      ansiBlack: '#181818',
      ansiBlue: '#85c2ff',
      ansiCyan: '#a8f0f0',
      ansiGreen: '#9ad6a4',
      ansiMagenta: '#c5bef9',
      ansiRed: '#f49a9a',
      ansiWhite: '#f4f4f5',
      ansiYellow: '#f4d09a',
    },
  }
}
