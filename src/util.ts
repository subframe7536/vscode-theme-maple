import type { UI } from './type'

import tinycolor from 'tinycolor2'

/**
 * unify color string to hex string with alpha
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

/**
 * brighten the color string
 * @param colorString color string
 * @param amount brighten amount (0-100)
 */
export function darken(colorString: string, amount: number) {
  return tinycolor(colorString).darken(amount).toHexString()
}

export function getTextColor(bgColorString: string) {
  const parsedColor = tinycolor(bgColorString)
  return parsedColor.getBrightness() < 60 ? '#fafafa' : '#1d1d1d'
}

export function buildUI(themeDev: UI) {
  const theme: Record<string, any> = {}

  function flatten(obj: any, prefix = '') {
    for (const key in obj) {
      const value = obj[key]
      const newKey = prefix ? `${prefix}.${key}` : key

      if (value && typeof value === 'object') {
        flatten(value, newKey)
      } else {
        theme[newKey] = value
      }
    }
  }

  flatten(themeDev)
  return theme
}
