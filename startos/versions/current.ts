import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.1.0:0',
  releaseNotes: {
    en_US:
      'First release. Mirror a YouTube/Twitch livestream to Nostr as a NIP-53 live event with Lightning zaps — yt-dlp → ffmpeg → MediaMTX, all in one image.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
