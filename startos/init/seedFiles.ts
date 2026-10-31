import { storeJson } from '../fileModels/store.json'
import { zebradToml } from '../fileModels/zebrad.toml'
import { sdk } from '../sdk'
import { defaultMainnetPeers } from '../utils'

// Creates both files on install and repairs them on every init: the schemas'
// .catch() defaults fill anything missing and reset any enforced literal.
export const seedFiles = sdk.setupOnInit(async (effects) => {
  await storeJson.merge(effects, {})
  await zebradToml.merge(effects, {})

  // A user-set peer list replaces Zebra's seeders, so keep it carrying the
  // current defaults (a Zebra upgrade can add seeders). No-op when unset.
  await zebradToml.update(effects, (conf) => {
    const peers = conf?.network.initial_mainnet_peers
    if (!conf || !peers) return null
    const missing = defaultMainnetPeers.filter((p) => !peers.includes(p))
    if (!missing.length) return null
    return {
      ...conf,
      network: {
        ...conf.network,
        initial_mainnet_peers: [
          ...defaultMainnetPeers,
          ...peers.filter((p) => !defaultMainnetPeers.includes(p)),
        ],
      },
    }
  })
})
