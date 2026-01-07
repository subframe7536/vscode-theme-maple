import type { BaseColor, TokenColor, UIColor } from './type'

import { writeFileSync } from 'node:fs'

export interface GenerateOption {
  name: string
  isDark?: boolean
  baseColor: BaseColor
  tokenColor: TokenColor
  uiColor: UIColor
}

export function generateOpenCodeTheme(darkOpts: GenerateOption, lightOpts: GenerateOption) {
  const { baseColor: darkBase, tokenColor: darkToken, uiColor: darkUi } = darkOpts
  const { baseColor: lightBase, tokenColor: lightToken, uiColor: lightUi } = lightOpts

  const opencodeTheme: Record<string, any> = {
    $schema: 'https://opencode.ai/theme.json',
    theme: {
      primary: { dark: darkUi.primary, light: lightUi.primary },
      secondary: { dark: darkUi.secondary, light: lightUi.secondary },
      accent: { dark: darkUi.primary, light: lightUi.primary },
      error: { dark: darkToken.error, light: lightToken.error },
      warning: { dark: darkToken.log.warn, light: lightToken.log.warn },
      success: { dark: darkToken.log.info, light: lightToken.log.info },
      info: { dark: darkUi.primary, light: lightUi.primary },
      text: { dark: darkUi.foreground, light: lightUi.foreground },
      textMuted: { dark: darkUi.foregroundAlt, light: lightUi.foregroundAlt },
      background: { dark: darkUi.background, light: lightUi.background },
      backgroundPanel: { dark: darkUi.backgroundEditor, light: lightUi.backgroundEditor },
      backgroundElement: { dark: darkUi.backgroundEditorAlt, light: lightUi.backgroundEditorAlt },
      border: { dark: darkUi.borderNormal, light: lightUi.borderNormal },
      borderActive: { dark: darkUi.borderActive, light: lightUi.borderActive },
      borderSubtle: { dark: darkUi.borderNormal, light: lightUi.borderNormal },
      diffAdded: { dark: darkToken.diff.inserted, light: lightToken.diff.inserted },
      diffRemoved: { dark: darkToken.diff.deleted, light: lightToken.diff.deleted },
      diffContext: { dark: darkBase.gray, light: lightBase.gray },
      diffHunkHeader: { dark: darkToken.diff.header, light: lightToken.diff.header },
      diffHighlightAdded: { dark: darkToken.diff.inserted, light: lightToken.diff.inserted },
      diffHighlightRemoved: { dark: darkToken.diff.deleted, light: lightToken.diff.deleted },
      diffAddedBg: { dark: darkUi.backgroundEditorAlt, light: lightUi.backgroundEditorAlt },
      diffRemovedBg: { dark: darkUi.backgroundEditorAlt, light: lightUi.backgroundEditorAlt },
      diffContextBg: { dark: darkUi.backgroundEditor, light: lightUi.backgroundEditor },
      diffLineNumber: { dark: darkUi.foregroundAlt, light: lightUi.foregroundAlt },
      diffAddedLineNumberBg: { dark: darkUi.backgroundEditorAlt, light: lightUi.backgroundEditorAlt },
      diffRemovedLineNumberBg: { dark: darkUi.backgroundEditorAlt, light: lightUi.backgroundEditorAlt },
      markdownText: { dark: darkUi.foreground, light: lightUi.foreground },
      markdownHeading: { dark: darkToken.markdown.title, light: lightToken.markdown.title },
      markdownLink: { dark: darkToken.link, light: lightToken.link },
      markdownLinkText: { dark: darkUi.primary, light: lightUi.primary },
      markdownCode: { dark: darkToken.markdown.code, light: lightToken.markdown.code },
      markdownBlockQuote: { dark: darkToken.markdown.quotes, light: lightToken.markdown.quotes },
      markdownEmph: { dark: darkToken.markdown.italic, light: lightToken.markdown.italic },
      markdownStrong: { dark: darkToken.markdown.bold, light: lightToken.markdown.bold },
      markdownHorizontalRule: { dark: darkUi.foregroundAlt, light: lightUi.foregroundAlt },
      markdownListItem: { dark: darkUi.primary, light: lightUi.primary },
      markdownListEnumeration: { dark: darkUi.primary, light: lightUi.primary },
      markdownImage: { dark: darkUi.primary, light: lightUi.primary },
      markdownImageText: { dark: darkUi.primary, light: lightUi.primary },
      markdownCodeBlock: { dark: darkUi.foreground, light: lightUi.foreground },
      syntaxComment: { dark: darkToken.comment, light: lightToken.comment },
      syntaxKeyword: { dark: darkToken.keyword.normal, light: lightToken.keyword.normal },
      syntaxFunction: { dark: darkToken.function, light: lightToken.function },
      syntaxVariable: { dark: darkToken.variable.local, light: lightToken.variable.local },
      syntaxString: { dark: darkToken.string, light: lightToken.string },
      syntaxNumber: { dark: darkToken.number, light: lightToken.number },
      syntaxType: { dark: darkToken.type.normal, light: lightToken.type.normal },
      syntaxOperator: { dark: darkToken.operator, light: lightToken.operator },
      syntaxPunctuation: { dark: darkToken.punctuation, light: lightToken.punctuation },
    },
  }

  writeFileSync(
    `./opencode/maple.json`,
    `${JSON.stringify(opencodeTheme, null, 2)}\n`,
  )
}
