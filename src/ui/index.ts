import { buildUI } from './type'
import { ui } from './config'

// https://code.visualstudio.com/api/references/theme-color
export default {
  colors: buildUI(ui),
}
