import type { BaseColor, TokenColor, UI, UIColor } from './type'

import { writeFileSync } from 'node:fs'

import { publisher as author } from '../package.json'
import { colors } from './colors'
import { buildTheme } from './modules'
import { generateGhosttyTheme, generateWindowsTerminalScheme, replaceReadmeBlock } from './util'

export interface GenerateOption {
  name: string
  isDark?: boolean
  baseColor: BaseColor
  tokenColor: TokenColor
  uiColor: UIColor
}
function generateVSCodeTheme({
  name,
  isDark = true,
  baseColor,
  tokenColor,
  uiColor,
}: GenerateOption) {
  const theme = buildTheme(baseColor, tokenColor, uiColor, isDark)
  const themeJson = {
    name,
    author,
    base: isDark ? 'vs-dark' : 'vs',
    ...theme,
  }
  writeFileSync(
    `./themes/${name.replace(/\s/g, '-').toLowerCase()}-color-theme.json`,
    `${JSON.stringify(themeJson, null, 2)}\n`,
  )
  const term = Object.keys(theme.colors)
    .filter(k => k.startsWith('terminal.'))
    .map(k => [k.substring(9), theme.colors[k]] as const)

  return [isDark, Object.fromEntries(term) as NonNullable<UI['terminal']>] as const
}

function generaterTerminal(name: string, term: NonNullable<UI['terminal']>) {
  const windowsTerminal = generateWindowsTerminalScheme(name, term)
  replaceReadmeBlock('WT', JSON.stringify(windowsTerminal, null, 2), 'json')

  const ghostty = generateGhosttyTheme(term)
  replaceReadmeBlock('GTTY', ghostty.join('\n'))
}

function main() {
  try {
    for (const [name, value] of Object.entries(colors)) {
      const [isDark, term] = generateVSCodeTheme({ name, ...value })
      if (isDark) {
        generaterTerminal(name, term)
      }
      console.log('Theme updated')
    }
  } catch (error) {
    console.error(error)
  }
}

main()
