import type { GenerateUIFn } from '../../type'
import { parseColor } from '../../util'

export const generateBaseColor: GenerateUIFn = ui => ({
  focusBorder: ui.borderActive,
  foreground: ui.foreground,
  // selection in workbench
  selection: {
    background: ui.selection,
  },
  widget: {
    border: ui.borderNormal,
    shadow: parseColor(ui.background, 0.8),
  },
  // draggable widge split line
  sash: {
    hoverBorder: ui.primary,
  },
})
