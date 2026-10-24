# kathreftestr-startos

StartOS (.s9pk) package for [Kathreftestr](https://github.com/bobodread876/kathreftestr): mirrors a livestream to Nostr (NIP-53), self-hosted. Wraps
`ghcr.io/bobodread876/kathreftestr`.

## Build

Requires `start-cli` (`curl -fsSL https://start9.com/start-cli/install.sh | sh`),
Docker, Node, and `jq`.

```bash
npm ci
make            # → kathreftestr.s9pk
```
