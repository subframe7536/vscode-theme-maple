// reference from https://github.com/dracula/visual-studio-code/blob/master/scripts/lint.js
import { writeFile } from 'node:fs/promises'
import https from 'node:https'
import { pathSet } from 'object-standard-path'

const THEME_COLOR_REFERENCE_URL = 'https://code.visualstudio.com/api/references/theme-color'

const NOT_THEME_KEYS = [
  'workbench.colorCustomizations',
  'editor.tokenColorCustomizations',
]

function get(url: string): Promise<string> {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let body = ''
      res.setEncoding('utf8')
      res.on('data', data => (body += data))
      res.on('end', () => resolve(body))
      res.on('error', reject)
    })
  })
}

async function scrapeThemeAvailableKeys() {
  const data = await get(THEME_COLOR_REFERENCE_URL)

  const matches = data.match(/<code>.+?<\/code>/g)

  if (!matches) {
    throw new Error(
      'Couldn\'t find any matches with <code>...</code>, maybe docs have changed?',
    )
  }

  return [...matches]
    .map(key => key.replace('<code>', '').replace('</code>', ''))
    .filter(key => !/ /.test(key)) // Remove if contains spaces
    .filter(key => !/#.../.test(key)) // Remove if is a hex color
    .filter(key => !/&quot;/.test(key)) // Remove if contains quotes
    .filter(key => key.length > 4) // Remove if it's very small
    .filter(key => !NOT_THEME_KEYS.includes(key)) // Remove if its in the blacklist
    .sort()
}
async function parseKeys() {
  const keys = await scrapeThemeAvailableKeys()
  const ret = {}
  keys.forEach((s) => {
    pathSet(ret, s as any, 'string')
  })
  return JSON.stringify(ret, null, 2).replace(/"/g, '').replace(/:/g, '?:')
}

const types = `// auto generate by \`pnpm run update:key\`
export type UI = ${await parseKeys()}
`

writeFile('./src/type.d.ts', types, 'utf8')
