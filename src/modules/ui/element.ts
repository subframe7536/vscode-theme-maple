import type { GenerateUIFn } from '../../type'
import { brighten, parseColor } from '../../util'

export const generateElementColor: GenerateUIFn = ui => ({
  textCodeBlock: {
    background: ui.background,
  },
  textLink: {
    foreground: brighten(ui.primary, 12),
    activeForeground: brighten(ui.primary, 20),
  },
  textBlockQuote: {
    border: ui.borderNormal,
  },
  toolbar: {
    hoverBackground: ui.background,
  },
  button: {
    background: parseColor(ui.primary, 0.8),
    foreground: ui.foreground,
    hoverBackground: ui.primary,
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
    background: ui.scrollbar,
    hoverBackground: brighten(ui.scrollbar, 5),
    activeBackground: brighten(ui.scrollbar, 10),
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
    focusBackground: parseColor(ui.listItem, 0.7), // include notification
    focusForeground: ui.foreground,
    focusOutline: parseColor(ui.borderActive, 0.8),
    focusHighlightForeground: ui.secondary,
    focusAndSelectionOutline: ui.borderActive,
    highlightForeground: ui.secondary,
    hoverBackground: parseColor(ui.listItem, 0.5),
    inactiveFocusOutline: ui.borderNormal,
    inactiveSelectionBackground: parseColor(ui.listItem, 0.6),
    filterMatchBackground: parseColor(ui.secondary, 0.8),
    filterMatchBorder: ui.secondary,
  },
  menu: {
    foreground: ui.foreground,
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
    foreground: ui.foregroundAlt,
    background: parseColor(ui.listItem, 0.7),
    border: ui.borderActive,
  },
  notifications: {
    background: ui.background,
  },
  debugToolBar: {
    background: ui.backgroundEditor,
    border: ui.borderNormal,
  },
})