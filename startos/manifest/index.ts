import { setupManifest } from '@start9labs/start-sdk'
import { long, short } from './i18n'

export const manifest = setupManifest({
  id: 'zebrad',
  title: 'Zcash',
  license: 'MIT',
  packageRepo: 'https://github.com/bitcoinismoral/zebrad-startos',
  upstreamRepo: 'https://github.com/ZcashFoundation/zebra',
  marketingUrl: 'https://zfnd.org/zebra/',
  donationUrl: null,
  description: { short, long },
  // startos: package-side state (store.json), mounted by no subcontainer.
  // zebra: zebrad.toml, the chain state, and the peer cache.
  // lightwalletd: the compact-block cache and the TLS pair lightwalletd serves.
  volumes: ['startos', 'zebra', 'lightwalletd'],
  images: {
    zebra: {
      source: { dockerTag: 'zfnd/zebra:7.0.0' },
      arch: ['x86_64'],
    },
    // electriccoinco/lightwalletd publishes amd64 only.
    lightwalletd: {
      source: { dockerTag: 'electriccoinco/lightwalletd:v0.6.1' },
      arch: ['x86_64'],
    },
  },
})
