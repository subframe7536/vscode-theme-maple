import type { UI } from './type'

import { readFileSync, writeFileSync } from 'node:fs'

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

export function getSchemeTextColor(bgColorString: string) {
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

export function replaceReadmeBlock(
  blockName: string,
  newContent: string,
  lang: string = '',
) {
  const filePath = 'README.md'
  const tag = `<!-- ${blockName} -->`

  let content = readFileSync(filePath, 'utf-8')
  const regex = new RegExp(
    `${tag}[\\s\\S]*?${tag}`,
    'g',
  )
  const replacement = `${tag}\n\`\`\`${lang}\n${newContent}\n\`\`\`\n${tag}`
  content = content.replace(regex, replacement)

  writeFileSync(filePath, content, 'utf-8')
}

export function generateWindowsTermnialScheme(name: string, term: NonNullable<UI['terminal']>) {
  const basicColors = Object.entries(term)
    .map(([k, v]) => [
      k.startsWith('ansi')
        ? (k[4].toLowerCase() + k.substring(5))
            .replace('magenta', 'purple')
            .replace('Magenta', 'Purple')
        : k,
      v,
    ])
  return {
    schemes: [
      Object.fromEntries([
        ['name', name],
        ['selectionBackground', term.foreground],
        ['cursorColor', term.foreground],
        ...basicColors,
      ]),
    ],
  }
}

const terminalColorMap = {
  black: 0,
  red: 1,
  green: 2,
  yellow: 3,
  blue: 4,
  magenta: 5,
  cyan: 6,
  white: 7,
  brightBlack: 8,
  brightRed: 9,
  brightGreen: 10,
  brightYellow: 11,
  brightBlue: 12,
  brightMagenta: 13,
  brightCyan: 14,
  brightWhite: 15,
} as const

export function generateGhosttyTheme(term: NonNullable<UI['terminal']>) {
  const result = Object.entries(term)
    .map(([k, v]) => {
      if (k.startsWith('ansi')) {
        return `palette = ${terminalColorMap[k[4].toLowerCase() + k.substring(5)]}=${v}`
      }
      return `${k} = ${v}`
    })

  result.push(
    `cursor-color = ${term.foreground}`,
    `selection-background = ${term.foreground}`,
    `selection-foreground = ${term.background}`,
  )

  return result
}
