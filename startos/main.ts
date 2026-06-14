import { i18n } from './i18n'
import { sdk } from './sdk'
import { uiPort } from './utils'

export const main = sdk.setupMain(async ({ effects }) => {
  console.info(i18n('Starting Kathreftestr…'))

  return sdk.Daemons.of(effects).addDaemon('primary', {
    subcontainer: await sdk.SubContainer.of(
      effects,
      { imageId: 'kathreftestr' },
      sdk.Mounts.of().mountVolume({
        volumeId: 'main',
        subpath: null,
        mountpoint: '/data',
        readonly: false,
      }),
      'kathreftestr-sub',
    ),
    exec: {
      command: ['node', 'server.js'],
      cwd: '/app',
      env: {
        NODE_ENV: 'production',
        PORT: String(uiPort),
        // The URL the published Nostr event links to for HLS playback. Defaults
        // to this host; for viewers outside your network, set a publicly
        // reachable URL via the app config / a reverse proxy.
        HLS_BASE: `http://localhost:${uiPort}/live`,
        // Relays to broadcast to (the image has sane defaults when empty).
        NOSTR_RELAYS: '',
      },
    },
    ready: {
      display: i18n('Web Interface'),
      fn: () =>
        sdk.healthCheck.checkPortListening(effects, uiPort, {
          successMessage: i18n('Kathreftestr is ready'),
          errorMessage: i18n('Kathreftestr is not ready'),
        }),
    },
    requires: [],
  })
})
