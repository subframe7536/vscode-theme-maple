import { brighten, parseColor } from '../util'
import { blue, gray } from './common'
import type { Colors } from '.'
import type { BaseColor, TokenColor, UIColor } from '../type'

export const base: BaseColor = {
  gray: parseColor('hsl(0, 0%, 50%)'),
  red: parseColor('hsl(0, 80%, 78%)'),
  orange: parseColor('hsl(20, 80%, 78%)'),
  yellow: parseColor('hsl(36, 80%, 78%)'),
  yellowLight: parseColor('hsl(28, 32%, 84%)'),
  greenLight: parseColor('hsl(76, 80%, 78%)'),
  green: parseColor('hsl(130, 42%, 72%)'),
  cyan: parseColor('hsl(180, 70%, 80%)'),
  sky: parseColor('hsl(212, 85%, 87%)'),
  blue: parseColor('hsl(210, 100%, 76%)'),
  purple: parseColor('hsl(247, 82%, 86%)'),
  pink: parseColor('hsl(328, 50%, 84%)'),
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
  cursor: brighten(blue[500], 6),
  selection: parseColor(blue[600], 0.8),
  scrollbar: brighten(blue[700], 4),
  listItem: blue[700],
  rangeBackground: parseColor(blue[800], 0.4),
  rangeBorder: blue[700],
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
  enum: base.orange,
  class: base.cyan,
  interface: {
    normal: base.orange,
    defaultLib: base.orange,
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
    templateExpression: base.cyan,
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
}

const colors: Colors = {
  isDark: true,
  baseColor: base,
  tokenColor,
  uiColor,
}
export default colors
