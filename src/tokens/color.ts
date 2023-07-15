import { parseColor } from '../util'

export const baseColor = {
  gray: parseColor('hsl(0, 0%, 50%)'),
  red: parseColor('hsl(0, 100%, 76%)'),
  orange: parseColor('hsl(20, 80%, 72%)'),
  yellow: parseColor('hsl(36, 78%, 78%)'),
  greenLight: parseColor('hsl(76, 72%, 70%)'),
  green: parseColor('hsl(130, 35%, 65%)'),
  cyan: parseColor('hsl(180, 40%, 78%)'),
  sky: parseColor('hsl(212, 85%, 87%)'),
  blue: parseColor('hsl(210, 100%, 72%)'),
  purple: parseColor('hsl(247, 100%, 82%)'),
  pink: parseColor('hsl(328, 70%, 78%)'),
  pinkLight: parseColor('hsl(356, 36%, 86%)'),
}

function getColors({
  blue,
  sky,
  cyan,
  gray,
  green,
  greenLight,
  orange,
  pink,
  purple,
  red,
  yellow,
  pinkLight,
}: typeof baseColor) {
  return {
    htmlTag: red,
    comment: gray,
    string: green,
    keyword: purple,
    keywordAlt: pink,
    number: greenLight,
    boolean: purple,
    operator: sky,
    function: blue,
    property: {
      normal: pinkLight,
      declaration: pinkLight,
      defaultLib: greenLight,
    },
    parameter: yellow,
    variable: {
      local: yellow,
      defaultLib: pink,
    },
    constant: orange,
    class: cyan,
    interface: {
      normal: orange,
      defaultLib: orange,
    },
    type: {
      normal: orange,
      parameter: yellow,
      primitive: purple,
      defaultLib: greenLight,
    },
    builtin: purple,
    namespace: pink,
    punctuation: sky,
    error: red,
    escape: blue,
    link: blue,
    regex: green,
    js: {
      component: cyan,
      templateExpression: cyan,
    },
    css: {
      variable: cyan,
      unit: blue,
      function: purple,
      pseudo: blue,
    },
    java: {
      class: orange,
      import: yellow,
      annotation: blue,
    },
    markdown: {
      title: purple,
      bold: orange,
      italic: orange,
      quotes: cyan,
      code: red,
    },
    diff: {
      deleted: red,
      inserted: green,
      changed: yellow,
      header: blue,
      range: purple,
    },
  }
}

export const colors = getColors(baseColor)