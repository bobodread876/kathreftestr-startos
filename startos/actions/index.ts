import { sdk } from '../sdk'

// Kathreftestr has no node-level secret to surface (stream nsecs are shown in
// the web UI when a stream goes live), so there are no custom actions.
export const actions = sdk.Actions.of()
