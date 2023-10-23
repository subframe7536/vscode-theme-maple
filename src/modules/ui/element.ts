import type { GenerateUIFn } from '../../type'
import { brighten, getTextColor, parseColor } from '../../util'

export const generateElementColor: GenerateUIFn = ui => ({
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
  toolbar: {
    hoverBackground: ui.background,
  },
  button: {
    background: parseColor(ui.primary),
    foreground: getTextColor(ui.background),
    hoverBackground: parseColor(ui.primary, 0.85),
    secondaryBackground: parseColor(ui.primary, 0.7),
    secondaryForeground: getTextColor(ui.background),
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
    background: parseColor(ui.scrollbar, 0.2),
    hoverBackground: parseColor(ui.scrollbar, 0.3),
    activeBackground: parseColor(ui.scrollbar, 0.5),
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
    dropBackground: ui.backgroundEditorAlt,
    activeSelectionForeground: ui.foreground,
    focusBackground: parseColor(ui.listItem, 0.5), // include notification
    focusForeground: ui.foreground,
    focusOutline: parseColor(ui.borderActive, 0.8),
    focusHighlightForeground: ui.secondary,
    focusAndSelectionOutline: ui.borderActive,
    highlightForeground: ui.secondary,
    hoverBackground: parseColor(ui.listItem, 0.5),
    inactiveFocusOutline: ui.borderNormal,
    inactiveSelectionBackground: parseColor(ui.listItem, 0.6),
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
    background: ui.backgroundEditor,
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
    foreground: getTextColor(ui.primary),
    background: ui.primary,
  },
})
