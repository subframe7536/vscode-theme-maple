## Maple Dark Theme for VSCode

A colorful VSCode theme, support light or dark mode, with medium brightness and low saturation.

![](resources/dark.jpg)
![](resources/light.jpg)

- Font: [Maple Mono](https://github.com/subframe7536/maple-font)
- Icon: [Catppuccin Icons for VSCode](https://github.com/catppuccin/vscode-icons)
- UI: [Custom UI Style](https://github.com/subframe7536/vscode-custom-ui-style)
- Terminal: PowerShell + [Starship](https://starship.rs/)

### Features

- Underline style function parameters
- Italic style keywords
- Different color on types
- Alternative color for some keywords, like `export` / `null` / `!important`

#### JetBrains IDE Color Scheme

https://github.com/subframe7536/vscode-theme-maple/releases/tag/v0.7.0

### Italic Style On Keywords

If you just want the italic style on keywords like the theme do, just add this snippet into your `settings.json`

```jsonc
{
  // existing settings...
  "editor.semanticTokenColorCustomizations": {
    "rules": {
      "interface": {
        "italic": true
      },
      "selfParameter": {
        "italic": true
      },
      "keyword": {
        "italic": true
      },
      "*.static": {
        "italic": true
      }
    }
  },
  "editor.tokenColorCustomizations": {
    "textMateRules": [
      {
        "scope": [
          "constant.language.undefined",
          "constant.language.null",
          "constant.language.nullptr",
          "meta.type keyword.operator.expression.typeof",
          "meta.type keyword.operator.expression.keyof",
          "keyword.control",
          "keyword.function",
          "keyword.operator.borrow.and.rust",
          "storage.type",
          "storage.modifier",
          "variable.language.this",
          "markup.italic"
        ],
        "settings": {
          "fontStyle": "italic"
        }
      }
    ]
  }
}
```

## Credit

- Design inspiration: [moegi](https://github.com/moegi-design/vscode-theme)
- Project structure: [vitesse](https://github.com/antfu/vscode-theme-vitesse)
- Type check: [dracula](https://github.com/dracula/visual-studio-code)

## License
MIT
