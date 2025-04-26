import type { BaseColor, TokenColor, UIColor } from '../type'

import dark from './dark'
import light from './light'

export type Colors = {
  isDark: boolean
  baseColor: BaseColor
  tokenColor: TokenColor
  uiColor: UIColor
}

type ColorMap = Record<string, Colors>

export const colors: ColorMap = {
  'Maple Dark': dark,
  'Maple Light': light,
}
