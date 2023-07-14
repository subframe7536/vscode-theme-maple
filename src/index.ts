import { mkdir, writeFile } from 'node:fs/promises'
import ui from './ui'
import tokens from './tokens'

await mkdir('./themes', { recursive: true })
await writeFile(
  './themes/maple-dark-color-theme.json',
  `${JSON.stringify({
    name: 'Maple Dark',
    author: 'subframe7536',
    type: 'dark',
    ...ui,
    ...tokens,
  }, null, 2)}\n`,
)
