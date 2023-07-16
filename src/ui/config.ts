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

export const UIColors = {
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
    background: UIColors.background,
    foreground: UIColors.foreground,
  },
  terminal: {
    background: UIColors.background,
    foreground: UIColors.foreground,
    ansiBrightBlack: blue[900],
    ansiBrightBlue: baseColor.blue,
    ansiBrightCyan: baseColor.cyan,
    ansiBrightGreen: baseColor.green,
    ansiBrightMagenta: baseColor.purple,
    ansiBrightRed: baseColor.red,
    ansiBrightWhite: blue[50],
    ansiBrightYellow: baseColor.yellow,
    ansiBlack: blue[950],
    ansiBlue: baseColor.blue,
    ansiCyan: baseColor.cyan,
    ansiGreen: baseColor.green,
    ansiMagenta: baseColor.purple,
    ansiRed: baseColor.red,
    ansiWhite: blue[50],
    ansiYellow: baseColor.yellow,
  },
}

const base: UI = {
  focusBorder: UIColors.borderActive,
  foreground: UIColors.foreground,
  // selection in workbench
  selection: {
    background: parseColor(blue[600], 0.8),
  },
  widget: {
    border: UIColors.borderNormal,
    shadow: '#000000aa',
  },
  // draggable widge split line
  sash: {
    hoverBorder: UIColors.primary,
  },
}

const editor: UI = {
  editor: {
    foreground: UIColors.foreground,
    background: UIColors.backgroundEditor,

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
    findMatchBackground: parseColor(UIColors.secondary, 0.3),
    findMatchBorder: UIColors.borderActive,
    findMatchHighlightBackground: parseColor(UIColors.secondary, 0.2),
    findRangeHighlightBackground: UIColors.range.background,
    findRangeHighlightBorder: UIColors.range.border,
    // hover panel matched text
    hoverHighlightBackground: blue[700],
    // current line
    lineHighlightBackground: parseColor(blue[600], 0.2),
    lineHighlightBorder: parseColor(UIColors.borderNormal, 0.1),
    // range highlight
    rangeHighlightBackground: UIColors.range.background,
    rangeHighlightBorder: UIColors.range.border,
  },
  editorLink: {
    activeForeground: UIColors.primary,
  },
  editorGroupHeader: {
    tabsBackground: UIColors.background,
    tabsBorder: UIColors.backgroundEditorAlt,
  },
  editorLineNumber: {
    foreground: brighten(gray[600], 5),
    activeForeground: blue[300],
  },
  editorCursor: {
    foreground: brighten(UIColors.primary, 8),
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
    border: UIColors.borderNormal,
  },
  peekViewEditor: {
    background: UIColors.background,
    matchHighlightBackground: parseColor(UIColors.secondary, 0.2),
    matchHighlightBorder: UIColors.secondary,
  },
  peekViewResult: {
    background: brighten(UIColors.background, 4),
    matchHighlightBackground: parseColor(UIColors.secondary, 0.2),
    selectionBackground: parseColor(UIColors.primary, 0.2),
  },
  peekViewTitle: {
    background: blue[700],
  },
  editorError: {
    foreground: UIColors.red,
  },
  editorWarning: {
    foreground: UIColors.yellow,
  },
  editorInfo: {
    foreground: UIColors.blue,
  },
  editorGutter: {
    addedBackground: parseColor(UIColors.green, 0.8),
    deletedBackground: parseColor(UIColors.red, 0.8),
    modifiedBackground: parseColor(UIColors.blue, 0.8),
  },
  diffEditor: {
    insertedTextBackground: parseColor(UIColors.green, 0.3),
    insertedLineBackground: parseColor(UIColors.green, 0.1),
    removedTextBackground: parseColor(UIColors.red, 0.3),
    removedLineBackground: parseColor(UIColors.red, 0.1),
  },
}

const views: UI = {
  activityBar: {
    background: UIColors.background,
    border: UIColors.borderNormal,
    foreground: blue[300],
    activeBorder: UIColors.primary,
  },
  activityBarBadge: {
    foreground: blue[800],
    background: UIColors.secondary,
  },
  sideBar: {
    foreground: UIColors.foreground,
    background: UIColors.background,
    border: UIColors.borderNormal,
  },
  sideBarSectionHeader: {
    background: UIColors.background,
    border: UIColors.borderNormal,
  },
  gitDecoration: {
    addedResourceForeground: UIColors.green,
    untrackedResourceForeground: UIColors.blue,
    conflictingResourceForeground: UIColors.blue,
    deletedResourceForeground: UIColors.red,
    modifiedResourceForeground: UIColors.yellow,
  },
  minimap: {
    background: parseColor(UIColors.background, 0.8),
    findMatchHighlight: parseColor(UIColors.secondary, 0.8),
    selectionHighlight: parseColor(UIColors.secondary, 0.5),
    errorHighlight: parseColor(UIColors.red, 0.6),
  },
  titleBar: {
    activeBackground: UIColors.background,
    activeForeground: UIColors.foreground,
    border: UIColors.borderNormal,
  },
  statusBar: {
    background: brighten(UIColors.background, 6),
    foreground: parseColor(UIColors.foreground, 0.8),
    debuggingForeground: UIColors.background,
    debuggingBackground: UIColors.secondary,
    debuggingBorder: UIColors.borderNormal,
    noFolderForeground: parseColor(UIColors.foreground, 0.3),
    noFolderBackground: gray[900],
  },
  statusBarItem: {
    prominentBackground: UIColors.secondary,
    prominentForeground: UIColors.background,
    remoteBackground: UIColors.secondary,
    remoteForeground: UIColors.background,
    errorBackground: UIColors.red,
    errorForeground: UIColors.background,
    warningBackground: UIColors.yellow,
    warningForeground: UIColors.background,
  },
}

const element: UI = {
  textCodeBlock: {
    background: UIColors.background,
  },
  textLink: {
    foreground: brighten(UIColors.primary, 12),
    activeForeground: brighten(UIColors.primary, 20),
  },
  textBlockQuote: {
    border: UIColors.borderNormal,
  },
  toolbar: {
    hoverBackground: UIColors.background,
  },
  button: {
    background: parseColor(UIColors.primary, 0.8),
    foreground: blue[200],
    hoverBackground: UIColors.primary,
  },
  input: {
    border: UIColors.borderNormal,
    background: UIColors.backgroundEditor,
    placeholderForeground: gray[500],
  },
  inputOption: {
    activeBackground: UIColors.hover.background,
    activeForeground: UIColors.hover.foreground,
    activeBorder: UIColors.borderActive,
  },
  dropdown: {
    background: UIColors.backgroundEditor,
    foreground: UIColors.foreground,
    border: UIColors.borderNormal,
    listBackground: UIColors.backgroundEditor,
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
    background: UIColors.secondary,
    foreground: UIColors.background,
  },
  progressBar: {
    background: UIColors.primary,
  },
  list: {
    activeSelectionBackground: blue[700],
    dropBackground: gray[700],
    focusBackground: parseColor(blue[800], 0.8), // include notification
    focusForeground: blue[200],
    focusOutline: parseColor(blue[600], 0.8),
    focusHighlightForeground: UIColors.secondary,
    focusAndSelectionOutline: blue[800],
    highlightForeground: UIColors.secondary,
    hoverBackground: UIColors.hover.background,
    inactiveFocusOutline: parseColor(blue[600], 0.7),
    inactiveSelectionBackground: parseColor(blue[700], 0.6),
    filterMatchBackground: parseColor(UIColors.secondary, 0.8),
    filterMatchBorder: UIColors.secondary,
  },
  menu: {
    foreground: blue[300],
    selectionBackground: blue[700],
    border: UIColors.borderNormal,
    separatorBackground: gray[700],
    selectionBorder: parseColor(blue[600], 0.8),
  },
  menubar: {
    selectionBackground: blue[700],
  },
  tab: {
    activeBackground: UIColors.backgroundEditorAlt,
    activeBorder: UIColors.backgroundEditorAlt,
    activeBorderTop: UIColors.primary,
    hoverBackground: parseColor(UIColors.backgroundEditorAlt, 0.7),
    inactiveBackground: UIColors.background,
    unfocusedActiveBackground: parseColor(blue[500], 0.2),
  },
  breadcrumb: {
    foreground: blue[400],
    background: UIColors.backgroundEditor,
  },
  breadcrumbPicker: {
    background: UIColors.backgroundEditor,
  },
  // quick picker colors
  pickerGroup: {
    foreground: UIColors.secondary,
  },
  quickInput: {
    background: UIColors.backgroundEditor,
  },
  quickInputList: {
    focusBackground: blue[700],
  },
  commandCenter: {
    foreground: blue[300],
    activeBackground: blue[700],
    activeBorder: UIColors.borderActive,
    border: UIColors.borderNormal,
  },
  keybindingLabel: {
    foreground: blue[300],
    background: parseColor(blue[700], 0.7),
    border: UIColors.borderActive,
  },
  notifications: {
    background: UIColors.background,
  },
  debugToolBar: {
    background: UIColors.backgroundEditor,
    border: UIColors.borderNormal,
  },
}

export const ui: UI = {
  ...base,
  ...views,
  ...element,
  ...editor,
  ...terminal,
}
