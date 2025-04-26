import type { GenerateUIWithBaseFn } from '../../type'

import { brighten, parseColor } from '../../util'

export const generateViewColor: GenerateUIWithBaseFn = (base, ui) => ({
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
    addedResourceForeground: base.green,
    untrackedResourceForeground: base.blue,
    conflictingResourceForeground: base.blue,
    deletedResourceForeground: base.red,
    modifiedResourceForeground: base.yellow,
  },
  minimap: {
    background: brighten(ui.background, 4),
    findMatchHighlight: parseColor(ui.secondary, 0.8),
    selectionHighlight: parseColor(ui.primary, 0.5),
    errorHighlight: parseColor(base.red, 0.6),
  },
  titleBar: {
    activeBackground: ui.background,
    activeForeground: ui.foreground,
    border: ui.borderNormal,
  },
  statusBar: {
    background: ui.background,
    foreground: ui.foreground,
    border: ui.borderNormal,
    debuggingForeground: ui.background,
    debuggingBackground: ui.secondary,
    debuggingBorder: ui.borderNormal,
    noFolderForeground: ui.foreground,
    noFolderBackground: ui.background,
    noFolderBorder: parseColor(ui.borderNormal, 0.8),
  },
  statusBarItem: {
    prominentBackground: ui.secondary,
    prominentForeground: ui.background,
    remoteBackground: ui.secondary,
    remoteForeground: ui.background,
    errorBackground: base.red,
    errorForeground: ui.background,
    warningBackground: base.yellow,
    warningForeground: ui.background,
  },
})
