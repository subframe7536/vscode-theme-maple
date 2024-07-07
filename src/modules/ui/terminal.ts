import type { GenerateUIFn } from '../../type'
import { parseColor } from '../../util'

export const generateTerminalColor: GenerateUIFn = (ui, isDark) => {
  return {
    terminalCursor: {
      background: ui.backgroundEditor,
      foreground: ui.foreground,
    },
    terminal: {
      background: ui.backgroundEditor,
      foreground: ui.foreground,
      ...isDark
        ? {
            ansiBrightBlack: parseColor('hsl(0, 0%, 40%)'),
            ansiBrightBlue: parseColor('hsl(210, 100%, 80%)'),
            ansiBrightCyan: parseColor('hsl(180, 100%, 88%)'),
            ansiBrightGreen: parseColor('hsl(130, 100%, 82%)'),
            ansiBrightMagenta: parseColor('hsl(250, 100%, 92%)'),
            ansiBrightRed: parseColor('hsl(0, 100%, 85%)'),
            ansiBrightWhite: parseColor('hsl(0, 0%, 100%)'),
            ansiBrightYellow: parseColor('hsl(43, 100%, 85%)'),
            ansiBlack: parseColor('hsl(0, 0%, 9%)'),
            ansiBlue: parseColor('hsl(210, 90%, 75%)'),
            ansiCyan: parseColor('hsl(180, 90%, 83%)'),
            ansiGreen: parseColor('hsl(130, 90%, 77%)'),
            ansiMagenta: parseColor('hsl(250, 90%, 87%)'),
            ansiRed: parseColor('hsl(0, 90%, 80%)'),
            ansiWhite: parseColor('hsl(0, 5%, 95%)'),
            ansiYellow: parseColor('hsl(43, 90%, 80%)'),
          }
        : {
            ansiBrightBlack: parseColor('hsl(0, 0%, 70%)'),
            ansiBrightBlue: parseColor('hsl(210, 80%, 45%)'),
            ansiBrightCyan: parseColor('hsl(180, 60%, 32%)'),
            ansiBrightGreen: parseColor('hsl(130, 65%, 32%)'),
            ansiBrightMagenta: parseColor('hsl(250, 60%, 60%)'),
            ansiBrightRed: parseColor('hsl(0, 80%, 40%)'),
            ansiBrightWhite: parseColor('hsl(0, 0%, 90%)'),
            ansiBrightYellow: parseColor('hsl(43, 56%, 36%)'),
            ansiBlack: parseColor('hsl(0, 0%, 7%)'),
            ansiBlue: parseColor('hsl(210, 70%, 40%)'),
            ansiCyan: parseColor('hsl(180, 50%, 27%)'),
            ansiGreen: parseColor('hsl(130, 55%, 27%)'),
            ansiMagenta: parseColor('hsl(250, 50%, 55%)'),
            ansiRed: parseColor('hsl(0, 70%, 35%)'),
            ansiWhite: parseColor('hsl(0, 0%, 90%)'),
            ansiYellow: parseColor('hsl(43, 46%, 31%)'),
          },
    },
  }
}
