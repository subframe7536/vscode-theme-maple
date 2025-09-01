import type { GenerateUIFn } from '../../type'

import { brighten, getSchemeTextColor, parseColor } from '../../util'

export const generateElementColor: GenerateUIFn = (ui, isDark, changeColor) => ({
  textCodeBlock: {
    background: ui.background,
  },
  textLink: {
    foreground: ui.secondary,
    activeForeground: brighten(ui.secondary, 8),
  },
  textBlockQuote: {
    border: ui.borderNormal,
  },
  button: {
    background: ui.primary,
    foreground: getSchemeTextColor(ui.background),
    hoverBackground: parseColor(ui.primary, 0.9),
    secondaryBackground: parseColor(ui.secondary, isDark ? 0.7 : 0.5),
    secondaryForeground: getSchemeTextColor(ui.background),
    secondaryHoverBackground: parseColor(ui.secondary, 0.6),
  },
  input: {
    border: ui.borderNormal,
    background: ui.backgroundEditor,
    placeholderForeground: ui.foregroundAlt,
  },
  inputOption: {
    activeBackground: ui.backgroundEditorAlt,
    activeForeground: ui.foreground,
    activeBorder: ui.borderActive,
  },
  dropdown: {
    background: ui.backgroundEditor,
    foreground: ui.foreground,
    border: ui.borderNormal,
    listBackground: ui.backgroundEditor,
  },
  scrollbarSlider: {
    background: parseColor(ui.scrollbar, isDark ? 0.5 : 0.3),
    hoverBackground: parseColor(ui.scrollbar, isDark ? 0.6 : 0.5),
    activeBackground: parseColor(ui.scrollbar, isDark ? 0.8 : 0.6),
  },
  badge: {
    background: ui.secondary,
    foreground: ui.background,
  },
  progressBar: {
    background: ui.primary,
  },
  list: {
    activeSelectionBackground: ui.listItem,
    activeSelectionForeground: ui.foreground,
    dropBackground: ui.backgroundEditorAlt,
    focusBackground: changeColor(ui.listItem, 5), // include notification
    focusForeground: ui.foreground,
    focusOutline: parseColor(ui.borderActive, 0.8),
    focusHighlightForeground: ui.secondary,
    focusAndSelectionOutline: ui.borderActive,
    highlightForeground: ui.secondary,
    hoverBackground: changeColor(ui.listItem, 3),
    inactiveFocusOutline: ui.borderNormal,
    inactiveSelectionBackground: changeColor(ui.listItem, 6),
    filterMatchBackground: parseColor(ui.secondary, 0.7),
    filterMatchBorder: ui.secondary,
  },
  menu: {
    foreground: ui.foreground,
    background: ui.background,
    selectionBackground: ui.listItem,
    border: brighten(ui.borderNormal, 6),
    separatorBackground: brighten(ui.borderNormal, 4),
    selectionBorder: ui.borderActive,
  },
  menubar: {
    selectionBackground: ui.listItem,
  },
  tab: {
    activeBackground: ui.backgroundEditorAlt,
    activeBorder: ui.backgroundEditorAlt,
    activeBorderTop: ui.primary,
    hoverBackground: parseColor(ui.backgroundEditorAlt, 0.7),
    inactiveBackground: ui.background,
    unfocusedActiveBackground: parseColor(ui.backgroundEditorAlt, 0.5),
  },
  breadcrumb: {
    foreground: parseColor(ui.foreground, 0.7),
    background: ui.backgroundEditor,
  },
  breadcrumbPicker: {
    background: ui.backgroundEditor,
  },
  // quick picker colors
  pickerGroup: {
    foreground: ui.secondary,
  },
  quickInput: {
    background: ui.background,
  },
  quickInputList: {
    focusBackground: ui.listItem,
  },
  commandCenter: {
    foreground: ui.foreground,
    activeBackground: ui.listItem,
    activeBorder: ui.borderActive,
    border: ui.borderNormal,
  },
  keybindingLabel: {
    foreground: ui.foreground,
    background: parseColor(ui.listItem, 0.7),
    border: ui.borderActive,
  },
  notifications: {
    background: ui.background,
  },
  debugToolBar: {
    background: ui.backgroundEditorAlt,
    border: ui.borderNormal,
  },
  editorHoverWidget: {
    background: ui.backgroundEditorAlt,
    statusBarBackground: brighten(ui.backgroundEditor, 2),
  },
  editorWidget: {
    background: ui.backgroundEditorAlt,
    resizeBorder: ui.primary,
  },
  banner: {
    foreground: getSchemeTextColor(ui.primary),
    background: ui.primary,
  },
})
