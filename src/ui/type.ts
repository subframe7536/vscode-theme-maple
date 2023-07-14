import type { UIDev } from './type.d'

type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends Array<infer U>
    ? Array<DeepPartial<U>>
    : T[K] extends object
      ? DeepPartial<T[K]>
      : T[K];
}

export type UI = DeepPartial<UIDev>

export function buildUI(themeDev: UI) {
  const theme = {}

  for (const key in themeDev) {
    const value = themeDev[key]

    if (typeof value === 'object') {
      for (const i in value) {
        const e = value[i]
        theme[`${key}.${i}`] = e
      }
    } else {
      theme[key] = value
    }
  }

  return theme
}
