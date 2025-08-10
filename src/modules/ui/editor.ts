import type { GenerateUIWithBaseColor } from '../../type'

import { brighten, darken, getSchemeTextColor, parseColor } from '../../util'

export const generateEditorColor: GenerateUIWithBaseColor = (base, ui, isDark) => ({
  git: {
    blame: {
      editorDecorationForeground: parseColor(base.gray, isDark ? 0.8 : 0.9),
    },
  },
  editor: {
    foreground: ui.foreground,
    background: ui.backgroundEditor,

    // selection
    selectionBackground: parseColor(ui.selection, isDark ? 1 : 0.9),
    inactiveSelectionBackground: parseColor(ui.selection, isDark ? 0.7 : 0.5),
    selectionHighlightBackground: parseColor(ui.selection, 0.4),
    selectionHighlightBorder: ui.borderNormal,
    snippetTabstopHighlightBackground: parseColor(ui.selection, 0.6),
    snippetTabstopHighlightBorder: ui.borderNormal,

    // word auto highlight on cursor
    wordHighlightBackground: parseColor(ui.selection, 0.5),
    wordHighlightStrongBackground: parseColor(ui.selection, 0.5),
    wordHighlightTextBackground: parseColor(ui.selection, 0.5),

    // document search
    findMatchBackground: parseColor(ui.secondary, 0.3),
    findMatchBorder: ui.borderActive,
    findMatchHighlightBackground: parseColor(ui.secondary, 0.2),
    findRangeHighlightBackground: ui.rangeBackground,
    findRangeHighlightBorder: parseColor(ui.rangeBorder, 0.8),

    // hover panel matched text
    hoverHighlightBackground: parseColor(ui.selection, 0.3),

    // current line
    lineHighlightBackground: parseColor(ui.selection, 0.25),
    lineHighlightBorder: parseColor(ui.selection, 0.3),

    // range highlight
    rangeHighlightBackground: parseColor(ui.rangeBackground, 0.9),
    rangeHighlightBorder: parseColor(ui.rangeBorder, 0.9),
  },
  editorBracketHighlight: {
    foreground1: base.sky,
    foreground2: (isDark ? darken : brighten)(
      base.pink,
      10,
      c => isDark
        ? c.desaturate(30)
        : c.spin(5).saturate(15),
    ),
    foreground3: (isDark ? darken : brighten)(
      base.cyan,
      10,
      c => isDark
        ? c.desaturate(20)
        : c.spin(5).saturate(15),
    ),
    foreground4: (isDark ? darken : brighten)(
      base.orange,
      10,
      c => isDark
        ? c.desaturate(20)
        : c.spin(5).saturate(15),
    ),
  },
  editorLink: {
    activeForeground: ui.secondary,
  },
  editorGroupHeader: {
    tabsBackground: ui.background,
    tabsBorder: ui.backgroundEditorAlt,
  },
  editorLineNumber: {
    foreground: parseColor(base.gray, 0.7),
    activeForeground: getSchemeTextColor(ui.background),
  },
  editorCursor: {
    foreground: ui.cursor,
  },
  editorMultiCursor: {
    secondary: {
      foreground: parseColor(ui.cursor, 0.8),
    },
  },
  editorIndentGuide: {
    activeBackground1: parseColor(ui.foreground, 0.8),
    background1: parseColor(ui.foreground, 0.25),
  },
  editorInlayHint: {
    foreground: ui.inlineHint,
    background: ui.inlineHintBackground,
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
    foreground: base.red,
  },
  editorWarning: {
    foreground: base.yellow,
  },
  editorInfo: {
    foreground: base.blue,
  },
  editorGutter: {
    addedBackground: parseColor(base.green, 0.9),
    addedSecondaryBackground: parseColor(base.green, 0.7),
    deletedBackground: parseColor(base.red, 0.9),
    deletedSecondaryBackground: parseColor(base.red, 0.7),
    modifiedBackground: parseColor(base.blue, 0.9),
    modifiedSecondaryBackground: parseColor(base.blue, 0.7),
  },
  diffEditor: {
    insertedTextBackground: parseColor(base.green, 0.4),
    insertedLineBackground: parseColor(base.green, 0.2),
    removedTextBackground: parseColor(base.red, 0.4),
    removedLineBackground: parseColor(base.red, 0.2),
  },
})
