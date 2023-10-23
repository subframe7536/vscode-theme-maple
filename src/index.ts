import { mkdir, writeFile } from 'node:fs/promises'
import { buildTheme } from './modules'
import type { BaseColor, TokenColor, UIColor } from './type'
import { colors } from './colors'

const author = 'subframe7536'

await mkdir('./themes', { recursive: true })
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
  await writeFile(
    `./themes/${name.replace(/\s/g, '-').toLowerCase()}-color-theme.json`,
  `${JSON.stringify({
    name,
    author,
    base: isDark ? 'vs-dark' : 'vs',
    ...buildTheme(baseColor, tokenColor, uiColor, isDark),
  }, null, 2)}\n`,
  )
}

const tasks = Object.entries(colors).map(([name, value]) => generateTheme({ name, ...value }))
Promise.all(tasks).catch(console.error)
