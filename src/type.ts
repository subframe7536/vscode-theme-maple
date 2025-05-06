import type { UI } from './type.d'

export type { UI }

export type BaseColor = {
  gray: string
  red: string
  orange: string
  yellow: string
  yellowLight: string
  greenLight: string
  green: string
  cyan: string
  sky: string
  blue: string
  purple: string
  pink: string
}

export type TokenColor = {
  htmlTag: string
  comment: string
  string: string
  keyword: {
    normal: string
    alt: string
  }
  number: string
  boolean: string
  operator: string
  function: string
  property: {
    normal: string
    declaration: string
    defaultLib: string
  }
  parameter: string
  variable: {
    local: string
    defaultLib: string
  }
  constant: string
  enum: string
  class: {
    normal: string
    defaultLib: string
  }
  interface: {
    normal: string
    defaultLib: string
  }
  type: {
    normal: string
    parameter: string
    primitive: string
    defaultLib: string
  }
  builtin: string
  namespace: string
  punctuation: string
  error: string
  escape: string
  link: string
  regex: string
  js: {
    component: string
  }
  css: {
    variable: string
    unit: string
    function: string
    pseudo: string
  }
  java: {
    class: string
    import: string
    annotation: string
  }
  python: {
    fstring: string
  }
  markdown: {
    title: string
    bold: string
    italic: string
    quotes: string
    code: string
  }
  diff: {
    deleted: string
    inserted: string
    changed: string
    header: string
    range: string
  }
}

export type UIColor = {
  foreground: string
  foregroundAlt: string
  background: string
  backgroundEditor: string
  backgroundEditorAlt: string
  borderActive: string
  borderNormal: string
  primary: string
  secondary: string
  cursor: string
  selection: string
  scrollbar: string
  listItem: string
  rangeBackground: string
  rangeBorder: string
}

/**
 * @param color base color
 * @param isDark whether it's dark
 * @param altParseColor make color darken when it's dark, brighten when it's light
 */
export type GenerateUIFn = (
  color: UIColor,
  isDark: boolean,
  altParseColor: (color: string, alpha?: number | [dark: number, light: number]) => string
) => UI
export type GenerateUIWithBaseFn = (base: BaseColor, color: UIColor, isDark: boolean) => UI
