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

const base: BaseColor = {
  gray: parseColor('hsl(0, 0%, 60%)'),
  red: parseColor('hsl(0, 45%, 54%)'),
  orange: parseColor('hsl(28, 68%, 50%)'),
  yellow: parseColor('hsl(44, 90%, 40%)'),
  yellowLight: parseColor('hsl(58, 30%, 45%)'),
  greenLight: parseColor('hsl(78, 90%, 36%)'),
  green: parseColor('hsl(110, 36%, 50%)'),
  cyan: parseColor('hsl(150, 48%, 50%)'),
  sky: parseColor('hsl(170, 40%, 60%)'),
  blue: parseColor('hsl(196, 70%, 50%)'),
  purple: parseColor('hsl(247, 24%, 52%)'),
  pink: parseColor('hsl(340, 36%, 52%)'),
}

const bg = parseColor('hsl(32, 56.5%, 95.5%)')
const primaryColor = parseColor('hsl(90, 16%, 85%)')
const secondaryColor = parseColor('hsl(100, 12%, 54%)')
const uiColor: UIColor = {
  foreground: blue[600],
  foregroundAlt: brighten(gray[600], 5),
  background: bg,
  backgroundEditor: brighten(bg, 2),
  backgroundEditorAlt: brighten(bg, 4),
  borderActive: blue[400],
  borderNormal: parseColor(brighten(blue[500], 12), 0.4),
  primary: primaryColor,
  secondary: secondaryColor,
  cursor: brighten(blue[500], 4),
  selection: brighten(primaryColor, 2),
  scrollbar: secondaryColor,
  listItem: brighten(primaryColor, 3),
  rangeBackground: parseColor(primaryColor, 0.4),
  rangeBorder: blue[400],
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
  isDark: false,
  baseColor: base,
  tokenColor,
  uiColor,
}
export default colors
