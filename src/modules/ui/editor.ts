import type { GenerateUIFn } from '../../type'
import { brighten, parseColor } from '../../util'

export const generateEditorColor: GenerateUIFn = ui => ({
  editor: {
    foreground: ui.foreground,
    background: ui.backgroundEditor,

    // selection
    selectionBackground: ui.selection,
    inactiveSelectionBackground: parseColor(ui.selection, 0.7),
    selectionHighlightBackground: parseColor(ui.selection, 0.4),
    selectionHighlightBorder: ui.borderNormal,
    // word auto highlight on cursor
    wordHighlightBackground: parseColor(ui.selection, 0.5),
    wordHighlightStrongBackground: parseColor(ui.selection, 0.5),
    wordHighlightTextBackground: parseColor(ui.selection, 0.5),
    // document search
    findMatchBackground: parseColor(ui.secondary, 0.3),
    findMatchBorder: ui.borderActive,
    findMatchHighlightBackground: parseColor(ui.secondary, 0.2),
    findRangeHighlightBackground: ui.rangeBackground,
    findRangeHighlightBorder: ui.rangeBorder,
    // hover panel matched text
    hoverHighlightBackground: parseColor(ui.selection, 0.3),
    // current line
    lineHighlightBackground: parseColor(ui.selection, 0.25),
    lineHighlightBorder: parseColor(ui.selection, 0.3),
    // range highlight
    rangeHighlightBackground: ui.rangeBackground,
    rangeHighlightBorder: ui.rangeBorder,
  },
  editorLink: {
    activeForeground: ui.primary,
  },
  editorGroupHeader: {
    tabsBackground: ui.background,
    tabsBorder: ui.backgroundEditorAlt,
  },
  editorLineNumber: {
    foreground: ui.foregroundAlt,
    activeForeground: ui.foreground,
  },
  editorCursor: {
    foreground: brighten(ui.primary, 8),
  },
  editorIndentGuide: {
    activeBackground: parseColor(ui.foregroundAlt, 0.8),
    background: parseColor(ui.foregroundAlt, 0.9),
  },
  editorInlayHint: {
    foreground: parseColor('hsl(33, 60%, 90%)'),
    background: parseColor('hsl(211, 36%, 36%)'),
  },
  peekView: {
    border: ui.borderNormal,
  },
  peekViewEditor: {
    background: parseColor(ui.backgroundEditorAlt, 0.5),
    matchHighlightBackground: parseColor(ui.secondary, 0.2),
    matchHighlightBorder: ui.secondary,
  },
  peekViewResult: {
    background: brighten(ui.background, 4),
    matchHighlightBackground: parseColor(ui.secondary, 0.2),
    selectionBackground: parseColor(ui.primary, 0.2),
  },
  peekViewTitle: {
    background: ui.backgroundEditorAlt,
  },
  editorError: {
    foreground: ui.red,
  },
  editorWarning: {
    foreground: ui.yellow,
  },
  editorInfo: {
    foreground: ui.blue,
  },
  editorGutter: {
    addedBackground: parseColor(ui.green, 0.8),
    deletedBackground: parseColor(ui.red, 0.8),
    modifiedBackground: parseColor(ui.blue, 0.8),
  },
  diffEditor: {
    insertedTextBackground: parseColor(ui.green, 0.4),
    insertedLineBackground: parseColor(ui.green, 0.2),
    removedTextBackground: parseColor(ui.red, 0.4),
    removedLineBackground: parseColor(ui.red, 0.2),
  },
})