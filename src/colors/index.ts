import type { BaseColor, TokenColor, UIColor } from '../type'
import dark from './dark'

export type Colors = {
  isDark: boolean
  baseColor: BaseColor
  tokenColor: TokenColor
  uiColor: UIColor
}

type ColorMap = Record<string, Colors>

export const colors: ColorMap = {
  'Maple Dark': dark,
}