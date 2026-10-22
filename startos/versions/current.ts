import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.1.2:0',
  releaseNotes: {
    en_US:
      'Rebuilt on Node 22.23.4 (October 2026 security release) and distrusts the compromised eMudhra certificate authority.',
    es_ES:
      'Reconstruido con Node 22.23.4 (release de seguridad de octubre 2026) y deja de confiar en la autoridad de certificación comprometida eMudhra.',
    de_DE:
      'Mit Node 22.23.4 neu gebaut (Sicherheitsrelease Oktober 2026) und vertraut der kompromittierten Zertifizierungsstelle eMudhra nicht mehr.',
    pl_PL:
      'Przebudowano na Node 22.23.4 (bezpieczne wydanie z października 2026) i przestano ufać skompromitowanemu urzędowi eMudhra.',
    fr_FR:
      'Reconstruit avec Node 22.23.4 (release de sécurité d’octobre 2026) et ne fait plus confiance à l’autorité compromise eMudhra.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
