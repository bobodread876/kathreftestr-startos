# Kathreftestr

Mirror a YouTube/Twitch livestream onto Nostr (NIP-53) with Lightning zaps.

1. Open the **Web Interface**.
2. Paste a YouTube or Twitch livestream URL and click **Mirror to Nostr**.
3. The stream is published as a NIP-53 live event; open it in any Nostr live
   client (zap.stream, Amethyst) via the npub shown.

**Zaps:** each stream gets a `<npub>@npub.cash` Lightning address. To claim the
sats, sign in to npub.cash with the stream's nsec (shown when you go live) and
withdraw. Copy the nsec; a fresh key is generated per stream.

**External playback:** for viewers outside your network, the published HLS URL
must be reachable. Set `HLS_BASE` to a public URL (reverse proxy / tunnel) for
this app; by default it points at localhost and is only playable on-box.
