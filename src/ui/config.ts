import { baseColor } from '../tokens/color'
import { brighten, parseColor } from '../util'
import type { UI } from './type'

// https://tailwindcss.com/docs/customizing-colors
// slate
const blue = {
  50: '#f8fafc',
  100: '#f1f5f9',
  200: '#e2e8f0',
  300: '#cbd5e1',
  400: '#94a3b8',
  500: '#64748b',
  600: '#475569',
  700: '#334155',
  800: '#1e293b',
  900: '#0f172a',
  950: '#020617',
}

const gray = {
  50: '#fafafa',
  100: '#f4f4f5',
  200: '#e4e4e7',
  300: '#d4d4d8',
  400: '#a1a1aa',
  500: '#71717a',
  600: '#52525b',
  700: '#3f3f46',
  800: '#27272a',
  900: '#181818',
  950: '#0f0f0f',
}

const colors = {
  foreground: blue[300],
  background: '#171718',
  backgroundEditor: '#1e1e1f',
  backgroundEditorAlt: parseColor('hsl(220, 24%, 18%)'),
  borderActive: blue[500],
  borderNormal: parseColor(blue[500], 0.25),
  primary: parseColor('hsl(210, 28%, 52%)'),
  secondary: parseColor('hsl(100, 36%, 60%)'),
  red: baseColor.red,
  yellow: baseColor.yellow,
  green: baseColor.green,
  blue: baseColor.blue,
  range: {
    background: parseColor(blue[800], 0.4),
    border: blue[700],
  },
  hover: {
    background: gray[800],
    foreground: gray[200],
  },
}

const terminal: UI = {
  terminalCursor: {
    background: colors.background,
    foreground: colors.foreground,
  },
  terminal: {
    background: colors.background,
    foreground: colors.foreground,
    ansiBrightBlack: blue[900],
    ansiBrightBlue: baseColor.blue,
    ansiBrightCyan: '#94dddd',
    ansiBrightGreen: baseColor.green,
    ansiBrightMagenta: baseColor.purple,
    ansiBrightRed: baseColor.red,
    ansiBrightWhite: blue[50],
    ansiBrightYellow: baseColor.yellow,
    ansiBlack: blue[950],
    ansiBlue: baseColor.blue,
    ansiCyan: '#94dddd',
    ansiGreen: baseColor.green,
    ansiMagenta: baseColor.purple,
    ansiRed: baseColor.red,
    ansiWhite: blue[50],
    ansiYellow: baseColor.yellow,
  },
}

const base: UI = {
  focusBorder: colors.borderActive,
  foreground: colors.foreground,
  // selection in workbench
  selection: {
    background: parseColor(blue[600], 0.8),
  },
  widget: {
    border: colors.borderNormal,
    shadow: '#000000aa',
  },
  // draggable widge split line
  sash: {
    hoverBorder: colors.primary,
  },
}

const editor: UI = {
  editor: {
    foreground: colors.foreground,
    background: colors.backgroundEditor,

    // selection
    selectionBackground: blue[700],
    inactiveSelectionBackground: parseColor(blue[700], 0.7),
    selectionHighlightBackground: gray[700],
    selectionHighlightBorder: blue[500],
    // word auto highlight on cursor
    wordHighlightBackground: parseColor(blue[600], 0.6),
    wordHighlightStrongBackground: parseColor(blue[600], 0.6),
    wordHighlightTextBorder: parseColor(blue[600], 0.6),
    // document search
    findMatchBackground: parseColor(colors.secondary, 0.3),
    findMatchBorder: colors.borderActive,
    findMatchHighlightBackground: parseColor(colors.secondary, 0.2),
    findRangeHighlightBackground: colors.range.background,
    findRangeHighlightBorder: colors.range.border,
    // hover panel matched text
    hoverHighlightBackground: blue[700],
    // current line
    lineHighlightBackground: parseColor(blue[600], 0.2),
    lineHighlightBorder: parseColor(colors.borderNormal, 0.1),
    // range highlight
    rangeHighlightBackground: colors.range.background,
    rangeHighlightBorder: colors.range.border,
  },
  editorLink: {
    activeForeground: colors.primary,
  },
  editorGroupHeader: {
    tabsBackground: colors.background,
    tabsBorder: colors.backgroundEditorAlt,
  },
  editorLineNumber: {
    foreground: brighten(gray[600], 5),
    activeForeground: blue[300],
  },
  editorCursor: {
    foreground: brighten(colors.primary, 8),
  },
  editorIndentGuide: {
    activeBackground: parseColor(gray[50], 0.3),
    background: parseColor(gray[50], 0.1),
  },
  editorInlayHint: {
    foreground: parseColor('hsl(33, 60%, 90%)'),
    background: parseColor('hsl(211, 36%, 36%)'),
  },
  peekView: {
    border: colors.borderNormal,
  },
  peekViewEditor: {
    background: colors.background,
    matchHighlightBackground: parseColor(colors.secondary, 0.2),
    matchHighlightBorder: colors.secondary,
  },
  peekViewResult: {
    background: brighten(colors.background, 4),
    matchHighlightBackground: parseColor(colors.secondary, 0.2),
    selectionBackground: parseColor(colors.primary, 0.2),
  },
  peekViewTitle: {
    background: blue[700],
  },
  editorError: {
    foreground: colors.red,
  },
  editorWarning: {
    foreground: colors.yellow,
  },
  editorInfo: {
    foreground: colors.blue,
  },
  editorGutter: {
    addedBackground: parseColor(colors.green, 0.8),
    deletedBackground: parseColor(colors.red, 0.8),
    modifiedBackground: parseColor(colors.blue, 0.8),
  },
  diffEditor: {
    insertedTextBackground: parseColor(colors.green, 0.3),
    insertedLineBackground: parseColor(colors.green, 0.1),
    removedTextBackground: parseColor(colors.red, 0.3),
    removedLineBackground: parseColor(colors.red, 0.1),
  },
}

const views: UI = {
  activityBar: {
    background: colors.background,
    border: colors.borderNormal,
    foreground: blue[300],
    activeBorder: colors.primary,
  },
  activityBarBadge: {
    foreground: blue[800],
    background: colors.secondary,
  },
  sideBar: {
    foreground: colors.foreground,
    background: colors.background,
    border: colors.borderNormal,
  },
  sideBarSectionHeader: {
    background: colors.background,
    border: colors.borderNormal,
  },
  gitDecoration: {
    addedResourceForeground: colors.green,
    untrackedResourceForeground: colors.blue,
    conflictingResourceForeground: colors.blue,
    deletedResourceForeground: colors.red,
    modifiedResourceForeground: colors.yellow,
  },
  minimap: {
    background: parseColor(colors.background, 0.8),
    findMatchHighlight: parseColor(colors.secondary, 0.8),
    selectionHighlight: parseColor(colors.secondary, 0.5),
    errorHighlight: parseColor(colors.red, 0.6),
  },
  titleBar: {
    activeBackground: colors.background,
    activeForeground: colors.foreground,
    border: colors.borderNormal,
  },
  statusBar: {
    background: brighten(colors.background, 6),
    foreground: parseColor(colors.foreground, 0.8),
    debuggingForeground: colors.background,
    debuggingBackground: colors.secondary,
    debuggingBorder: colors.borderNormal,
    noFolderForeground: parseColor(colors.foreground, 0.3),
    noFolderBackground: gray[900],
  },
  statusBarItem: {
    prominentBackground: colors.secondary,
    prominentForeground: colors.background,
    remoteBackground: colors.secondary,
    remoteForeground: colors.background,
    errorBackground: colors.red,
    errorForeground: colors.background,
    warningBackground: colors.yellow,
    warningForeground: colors.background,
  },
}

const element: UI = {
  textCodeBlock: {
    background: colors.background,
  },
  textLink: {
    foreground: brighten(colors.primary, 12),
    activeForeground: brighten(colors.primary, 20),
  },
  textBlockQuote: {
    border: colors.borderNormal,
  },
  toolbar: {
    hoverBackground: colors.background,
  },
  button: {
    background: parseColor(colors.primary, 0.8),
    foreground: blue[200],
    hoverBackground: colors.primary,
  },
  input: {
    border: colors.borderNormal,
    background: colors.backgroundEditor,
    placeholderForeground: gray[500],
  },
  inputOption: {
    activeBackground: colors.hover.background,
    activeForeground: colors.hover.foreground,
    activeBorder: colors.borderActive,
  },
  dropdown: {
    background: colors.backgroundEditor,
    foreground: colors.foreground,
    border: colors.borderNormal,
    listBackground: colors.backgroundEditor,
  },
  scrollbar: {
    shadow: gray[800],
  },
  scrollbarSlider: {
    background: parseColor(blue[700], 0.6),
    hoverBackground: blue[700],
    activeBackground: blue[600],
  },
  badge: {
    background: colors.secondary,
    foreground: colors.background,
  },
  progressBar: {
    background: colors.primary,
  },
  list: {
    activeSelectionBackground: blue[700],
    dropBackground: gray[700],
    focusBackground: parseColor(blue[800], 0.8), // include notification
    focusForeground: blue[200],
    focusOutline: parseColor(blue[600], 0.8),
    focusHighlightForeground: colors.secondary,
    focusAndSelectionOutline: blue[800],
    highlightForeground: colors.secondary,
    hoverBackground: colors.hover.background,
    inactiveFocusOutline: parseColor(blue[600], 0.7),
    inactiveSelectionBackground: parseColor(blue[700], 0.6),
    filterMatchBackground: parseColor(colors.secondary, 0.8),
    filterMatchBorder: colors.secondary,
  },
  menu: {
    foreground: blue[300],
    selectionBackground: blue[700],
    border: colors.borderNormal,
    separatorBackground: gray[700],
    selectionBorder: parseColor(blue[600], 0.8),
  },
  menubar: {
    selectionBackground: blue[700],
  },
  tab: {
    activeBackground: colors.backgroundEditorAlt,
    activeBorder: colors.backgroundEditorAlt,
    activeBorderTop: colors.primary,
    hoverBackground: parseColor(colors.backgroundEditorAlt, 0.7),
    inactiveBackground: colors.background,
    unfocusedActiveBackground: parseColor(blue[500], 0.2),
  },
  breadcrumb: {
    foreground: blue[400],
    background: colors.backgroundEditor,
  },
  breadcrumbPicker: {
    background: colors.backgroundEditor,
  },
  // quick picker colors
  pickerGroup: {
    foreground: colors.secondary,
  },
  quickInput: {
    background: colors.backgroundEditor,
  },
  quickInputList: {
    focusBackground: blue[700],
  },
  commandCenter: {
    foreground: blue[300],
    activeBackground: blue[700],
    activeBorder: colors.borderActive,
    border: colors.borderNormal,
  },
  keybindingLabel: {
    foreground: blue[300],
    background: parseColor(blue[700], 0.7),
    border: colors.borderActive,
  },
  notifications: {
    background: colors.background,
  },
  debugToolBar: {
    background: colors.backgroundEditor,
    border: colors.borderNormal,
  },
}

export const ui: UI = {
  ...base,
  ...views,
  ...element,
  ...editor,
  ...terminal,
}
