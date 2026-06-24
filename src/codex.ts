import type { GenerateOption } from './opencode'
import { brighten, darken, replaceReadmeBlock } from './util'

const fonts = {
  code: 'Maple Mono NF CN',
  ui: null,
}

function generateCodexTheme({ isDark = true, tokenColor, uiColor }: GenerateOption) {
  return `codex-theme-v1:${JSON.stringify({
    codeThemeId: 'codex',
    theme: {
      accent: darken(uiColor.primary, 10),
      contrast: 45,
      fonts,
      ink: brighten(uiColor.foreground, 5),
      opaqueWindows: false,
      semanticColors: {
        diffAdded: tokenColor.diff.inserted,
        diffRemoved: tokenColor.diff.deleted,
        skill: tokenColor.class.normal,
      },
      surface: uiColor.background,
    },
    variant: isDark ? 'dark' : 'light',
  })}`
}

export function generateCodexThemes(darkOpts: GenerateOption, lightOpts: GenerateOption) {
  replaceReadmeBlock('CODEX-DARK', generateCodexTheme(darkOpts), 'text')
  replaceReadmeBlock('CODEX-LIGHT', generateCodexTheme(lightOpts), 'text')
}
