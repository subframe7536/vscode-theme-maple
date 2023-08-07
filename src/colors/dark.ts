import type { BaseColor, TokenColor, UIColor } from '../type'
import { brighten, parseColor } from '../util'
import type { Colors } from '.'

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

const baseColor: BaseColor = {
  gray: parseColor('hsl(0, 0%, 50%)'),
  red: parseColor('hsl(0, 100%, 76%)'),
  orange: parseColor('hsl(20, 80%, 72%)'),
  yellow: parseColor('hsl(36, 78%, 78%)'),
  yellowLight: parseColor('hsl(28, 32%, 84%)'),
  greenLight: parseColor('hsl(76, 72%, 70%)'),
  green: parseColor('hsl(130, 35%, 65%)'),
  cyan: parseColor('hsl(180, 52%, 75%)'),
  sky: parseColor('hsl(212, 85%, 87%)'),
  blue: parseColor('hsl(210, 100%, 72%)'),
  purple: parseColor('hsl(247, 100%, 82%)'),
  pink: parseColor('hsl(328, 70%, 78%)'),
}

const uiColor: UIColor = {
  foreground: blue[300],
  foregroundAlt: brighten(gray[600], 5),
  background: '#171718',
  backgroundEditor: '#1e1e1f',
  backgroundEditorAlt: parseColor('hsl(220, 24%, 18%)'),
  borderActive: blue[500],
  borderNormal: brighten(gray[800], 2),
  primary: parseColor('hsl(210, 28%, 52%)'),
  secondary: parseColor('hsl(100, 36%, 60%)'),
  red: baseColor.red,
  yellow: baseColor.yellow,
  green: baseColor.green,
  blue: baseColor.blue,
  selection: parseColor(blue[600], 0.8),
  scrollbar: brighten(gray[800], 1),
  listItem: blue[700],
  rangeBackground: parseColor(blue[800], 0.4),
  rangeBorder: blue[700],
}

export const tokenColor: TokenColor = {
  htmlTag: baseColor.red,
  comment: baseColor.gray,
  string: baseColor.green,
  keyword: baseColor.purple,
  keywordAlt: baseColor.pink,
  number: baseColor.greenLight,
  boolean: baseColor.purple,
  operator: baseColor.sky,
  function: baseColor.blue,
  property: {
    normal: baseColor.yellowLight,
    declaration: baseColor.yellowLight,
    defaultLib: baseColor.greenLight,
  },
  parameter: baseColor.yellow,
  variable: {
    local: baseColor.yellow,
    defaultLib: baseColor.pink,
  },
  constant: baseColor.orange,
  enum: baseColor.orange,
  class: baseColor.cyan,
  interface: {
    normal: baseColor.orange,
    defaultLib: baseColor.orange,
  },
  type: {
    normal: baseColor.orange,
    parameter: baseColor.yellow,
    primitive: baseColor.purple,
    defaultLib: baseColor.greenLight,
  },
  builtin: baseColor.purple,
  namespace: baseColor.pink,
  punctuation: baseColor.sky,
  error: baseColor.red,
  escape: baseColor.blue,
  link: baseColor.blue,
  regex: baseColor.green,
  js: {
    component: baseColor.cyan,
    templateExpression: baseColor.cyan,
  },
  css: {
    variable: baseColor.cyan,
    unit: baseColor.blue,
    function: baseColor.purple,
    pseudo: baseColor.blue,
  },
  java: {
    class: baseColor.orange,
    import: baseColor.yellow,
    annotation: baseColor.blue,
  },
  python: {
    fstring: baseColor.cyan,
  },
  markdown: {
    title: baseColor.purple,
    bold: baseColor.orange,
    italic: baseColor.orange,
    quotes: baseColor.cyan,
    code: baseColor.red,
  },
  diff: {
    deleted: baseColor.red,
    inserted: baseColor.green,
    changed: baseColor.yellow,
    header: baseColor.blue,
    range: baseColor.purple,
  },
}

const colors: Colors = {
  isDark: true,
  baseColor,
  tokenColor,
  uiColor,
}
export default colors