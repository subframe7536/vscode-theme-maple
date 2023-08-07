import type { GenerateUIFn } from '../../type'
import { brighten, parseColor } from '../../util'

export const generateViewColor: GenerateUIFn = ui => ({
  activityBar: {
    background: ui.background,
    border: ui.borderNormal,
    foreground: ui.foreground,
    activeBorder: ui.primary,
  },
  activityBarBadge: {
    foreground: ui.background,
    background: ui.secondary,
  },
  sideBar: {
    foreground: ui.foreground,
    background: ui.background,
    border: ui.borderNormal,
  },
  sideBarSectionHeader: {
    background: ui.background,
    border: ui.borderNormal,
  },
  gitDecoration: {
    addedResourceForeground: ui.green,
    untrackedResourceForeground: ui.blue,
    conflictingResourceForeground: ui.blue,
    deletedResourceForeground: ui.red,
    modifiedResourceForeground: ui.yellow,
  },
  minimap: {
    background: parseColor(ui.background, 0.8),
    findMatchHighlight: parseColor(ui.secondary, 0.8),
    selectionHighlight: parseColor(ui.primary, 0.5),
    errorHighlight: parseColor(ui.red, 0.6),
  },
  titleBar: {
    activeBackground: ui.background,
    activeForeground: ui.foreground,
    border: ui.borderNormal,
  },
  statusBar: {
    background: brighten(ui.background, 6),
    foreground: parseColor(ui.foreground, 0.8),
    debuggingForeground: ui.background,
    debuggingBackground: ui.secondary,
    debuggingBorder: ui.borderNormal,
    noFolderForeground: parseColor(ui.foreground, 0.3),
    noFolderBackground: ui.background,
  },
  statusBarItem: {
    prominentBackground: ui.secondary,
    prominentForeground: ui.background,
    remoteBackground: ui.secondary,
    remoteForeground: ui.background,
    errorBackground: ui.red,
    errorForeground: ui.background,
    warningBackground: ui.yellow,
    warningForeground: ui.background,
  },
})