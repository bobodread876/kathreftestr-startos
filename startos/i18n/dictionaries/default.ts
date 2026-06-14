export const DEFAULT_LANG = 'en_US'

const dict = {
  // main.ts
  'Starting Kathreftestr…': 0,
  'Web Interface': 1,
  'Kathreftestr is ready': 2,
  'Kathreftestr is not ready': 3,

  // interfaces.ts
  'Web UI': 4,
  'Kathreftestr stream control UI': 5,
} as const

/**
 * Plumbing. DO NOT EDIT.
 */
export type I18nKey = keyof typeof dict
export type LangDict = Record<(typeof dict)[I18nKey], string>
export default dict
