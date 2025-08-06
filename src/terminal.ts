import type { BaseColor } from './type'

import { brighten, darken, parseColor } from './util'

export function buildTerminalColor(
  base: BaseColor,
  isDark: boolean,
  buildKey: (type: string, isBright?: boolean) => string,
) {
  const brightenDelta = isDark ? 10 : 0
  return {
    [buildKey('black', true)]: parseColor('hsl(0, 0%, 40%)'),
    [buildKey('blue', true)]: brighten(isDark ? base.blue : darken(base.blue, 2), brightenDelta),
    [buildKey('cyan', true)]: brighten(base.cyan, brightenDelta),
    [buildKey('green', true)]: brighten(isDark ? base.green : darken(base.greenLight, 8), brightenDelta),
    [buildKey('magenta', true)]: brighten(base.purple, brightenDelta),
    [buildKey('red', true)]: brighten(base.red, brightenDelta),
    [buildKey('white', true)]: parseColor('hsl(0, 0%, 100%)'),
    [buildKey('yellow', true)]: brighten(isDark ? base.yellow : darken(base.orange, 4), brightenDelta),
    [buildKey('black')]: parseColor('hsl(0, 0%, 20%)'),
    [buildKey('blue')]: isDark ? base.blue : darken(base.blue, 2),
    [buildKey('cyan')]: base.cyan,
    [buildKey('green')]: isDark ? base.green : darken(base.greenLight, 8),
    [buildKey('magenta')]: base.purple,
    [buildKey('red')]: base.red,
    [buildKey('white')]: parseColor('hsl(0, 5%, 95%)'),
    [buildKey('yellow')]: isDark ? base.yellow : darken(base.orange, 4),
  }
}
