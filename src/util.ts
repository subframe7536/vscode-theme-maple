import tinycolor from 'tinycolor2'
import type { UI } from './type'

/**
 * unify color string to hex string
 * @param colorString color string
 * @param alpha color alpha value (0-1)
 */
export function parseColor(colorString: string, alpha?: number) {
  if (!alpha) {
    return tinycolor(colorString).toHexString()
  }
  alpha = Math.min(alpha, 1)
  return tinycolor(colorString).setAlpha(alpha)[alpha === 1 ? 'toHexString' : 'toHex8String']()
}

/**
 * brighten the color string
 * @param colorString color string
 * @param amount brighten amount (0-100)
 */
export function brighten(colorString: string, amount: number) {
  return tinycolor(colorString).brighten(amount).toHexString()
}

export function buildUI(themeDev: UI) {
  const theme = {}

  for (const key in themeDev) {
    const value = themeDev[key]

    if (typeof value === 'object') {
      for (const i in value) {
        const e = value[i]
        theme[`${key}.${i}`] = e
      }
    } else {
      theme[key] = value
    }
  }

  return theme
}