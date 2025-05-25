import type { BaseColor, TokenColor, UI, UIColor } from './type'

import { mkdirSync, writeFileSync } from 'node:fs'

import { colors } from './colors'
import { buildTheme } from './modules'
import { generateWindowsTermnialScheme, replaceReadmeBlock } from './util'

const author = 'subframe7536'

mkdirSync('./themes', { recursive: true })
export interface GenerateOption {
  name: string
  isDark?: boolean
  baseColor: BaseColor
  tokenColor: TokenColor
  uiColor: UIColor
}
async function generateTheme({
  name,
  isDark = true,
  baseColor,
  tokenColor,
  uiColor,
}: GenerateOption) {
  const theme = buildTheme(baseColor, tokenColor, uiColor, isDark)
  writeFileSync(
    `./themes/${name.replace(/\s/g, '-').toLowerCase()}-color-theme.json`,
    `${JSON.stringify({
      name,
      author,
      base: isDark ? 'vs-dark' : 'vs',
      ...theme,
    }, null, 2)}\n`,
  )
  const term = Object.keys(theme.colors)
    .filter(k => k.startsWith('terminal.'))
    .map(k => [k.substring(9), theme.colors[k]] as const)

  return [isDark, Object.fromEntries(term) as UI['terminal']] as const
}

async function main() {
  try {
    for (const [name, value] of Object.entries(colors)) {
      const [isDark, term] = await generateTheme({ name, ...value })
      if (isDark) {
        replaceReadmeBlock(
          'WT',
          JSON.stringify(
            generateWindowsTermnialScheme(name, term),
            null,
            2,
          ),
          'json',
        )
      }
      console.log('Theme updated')
    }
  } catch (error) {
    console.error(error)
  }
}

main()
