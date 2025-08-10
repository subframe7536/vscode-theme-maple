import type { Colors } from '.'
import type { BaseColor, TokenColor, UIColor } from '../type'

import { brighten, parseColor } from '../util'
import { blue, gray } from './common'

const base: BaseColor = {
  gray: parseColor('hsl(0, 0%, 60%)'),
  red: parseColor('hsl(0, 64%, 80%)'),
  orange: parseColor('hsl(20, 70%, 80%)'),
  yellow: parseColor('hsl(36, 70%, 78%)'),
  yellowLight: parseColor('hsl(28, 18%, 84%)'),
  greenLight: parseColor('hsl(76, 80%, 74%)'),
  green: parseColor('hsl(130, 48%, 76%)'),
  cyan: parseColor('hsl(178, 60%, 77%)'),
  sky: parseColor('hsl(212, 85%, 85%)'),
  blue: parseColor('hsl(210, 100%, 78%)'),
  purple: parseColor('hsl(247, 100%, 90%)'),
  pink: parseColor('hsl(285, 45%, 86%)'),
}

const uiColor: UIColor = {
  foreground: blue[300],
  foregroundAlt: brighten(gray[600], 5),
  background: '#171718',
  backgroundEditor: '#1e1e1f',
  backgroundEditorAlt: parseColor('hsl(220, 24%, 18%)'),
  borderActive: blue[500],
  borderNormal: brighten(gray[700], 2),
  primary: parseColor('hsl(210, 28%, 52%)'),
  secondary: parseColor('hsl(100, 36%, 60%)'),
  cursor: brighten(blue[500], 16),
  selection: parseColor(blue[600], 0.8),
  scrollbar: brighten(blue[700], 4),
  listItem: blue[700],
  rangeBackground: parseColor(blue[800], 0.4),
  rangeBorder: blue[700],
  inlineHint: parseColor('hsl(33, 60%, 90%)'),
  inlineHintBackground: parseColor('hsl(211, 36%, 36%)'),
}

export const tokenColor: TokenColor = {
  htmlTag: base.red,
  comment: base.gray,
  string: base.green,
  keyword: {
    normal: base.purple,
    alt: base.pink,
  },
  number: base.greenLight,
  boolean: base.purple,
  operator: base.sky,
  function: base.blue,
  property: {
    normal: base.yellowLight,
    declaration: base.yellowLight,
    defaultLib: base.greenLight,
  },
  parameter: base.yellow,
  variable: {
    local: base.yellow,
    defaultLib: base.pink,
  },
  constant: base.orange,
  enum: {
    normal: base.cyan,
    defaultLib: base.greenLight,
  },
  class: {
    normal: base.orange,
    defaultLib: base.cyan,
  },
  interface: {
    normal: base.orange,
    defaultLib: base.cyan,
  },
  type: {
    normal: base.orange,
    parameter: base.yellow,
    primitive: base.purple,
    defaultLib: base.greenLight,
  },
  builtin: base.purple,
  namespace: base.pink,
  punctuation: base.sky,
  error: base.red,
  escape: base.blue,
  link: base.blue,
  regex: base.green,
  js: {
    component: base.cyan,
  },
  css: {
    variable: base.cyan,
    unit: base.blue,
    function: base.purple,
    pseudo: base.blue,
  },
  java: {
    class: base.orange,
    import: base.yellow,
    annotation: base.blue,
  },
  python: {
    fstring: base.cyan,
  },
  markdown: {
    title: base.purple,
    bold: base.orange,
    italic: base.orange,
    quotes: base.cyan,
    code: base.red,
  },
  diff: {
    deleted: base.red,
    inserted: base.green,
    changed: base.yellow,
    header: base.blue,
    range: base.purple,
  },
  log: {
    error: base.red,
    warn: base.yellow,
    info: base.green,
    debug: base.blue,
    trace: base.sky,
    date: base.gray,
  },
}

const colors: Colors = {
  isDark: true,
  baseColor: base,
  tokenColor,
  uiColor,
}
export default colors
