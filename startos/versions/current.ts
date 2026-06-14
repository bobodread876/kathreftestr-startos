import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.1.1:0',
  releaseNotes: {
    en_US:
      '0.1.1 — proper source attribution (real YouTube title + channel name), masked secret key with reveal, a fixed HLS proxy so streams actually play in NIP-53 clients, and public-playback guidance. Set HLS_BASE to a public HTTPS URL (e.g. a cloudflared tunnel) for off-network viewers.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
