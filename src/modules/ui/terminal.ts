import { buildTerminalColor } from '../../terminal'
import type { GenerateUIWithBaseColor } from '../../type'

function captialize(text: string) {
  return text[0]!.toUpperCase() + text.slice(1)
}

export const generateTerminalColor: GenerateUIWithBaseColor = (base, ui, isDark) => {
  return {
    terminalCursor: {
      background: ui.backgroundEditor,
      foreground: ui.foreground,
    },
    terminal: {
      background: ui.backgroundEditor,
      foreground: ui.foreground,
      ...buildTerminalColor(base, isDark, (type, isBright) =>
        isBright ? `ansiBright${captialize(type)}` : `ansi${captialize(type)}`,
      ),
    },
  }
}
