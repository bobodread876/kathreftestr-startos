export const short = {
  en_US: 'Mirror a livestream to Nostr (NIP-53), with Lightning zaps',
}

export const long = {
  en_US:
    'Kathreftestr re-broadcasts a YouTube or Twitch livestream onto Nostr. It pulls the feed with yt-dlp, transcodes through ffmpeg into a bundled MediaMTX server (RTMP → HLS), and publishes a NIP-53 live event any Nostr client can tune into. Each stream gets its own Lightning address for zaps. Self-hosted: your node, your keys. Kathreftis (καθρέφτης) is Greek for mirror.',
}
