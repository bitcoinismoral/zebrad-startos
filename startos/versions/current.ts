import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '7.0.0:1',
  releaseNotes: {
    en_US:
      'Rebuilt with the StartOS SDK 4.0, which fixes health checks using a little more memory every time they ran; long-running nodes no longer grow in memory. Requires StartOS 0.4.1 or later. Zebra and lightwalletd are unchanged.',
    es_ES:
      'Recompilado con el SDK 4.0 de StartOS, que corrige que las comprobaciones de estado usaran algo más de memoria cada vez que se ejecutaban; los nodos que llevan mucho tiempo en marcha ya no crecen en memoria. Requiere StartOS 0.4.1 o posterior. Zebra y lightwalletd no cambian.',
    de_DE:
      'Neu gebaut mit dem StartOS-SDK 4.0, das behebt, dass Statusprüfungen bei jedem Lauf etwas mehr Speicher belegten; lange laufende Knoten wachsen nicht mehr im Speicher. Erfordert StartOS 0.4.1 oder neuer. Zebra und lightwalletd sind unverändert.',
    pl_PL:
      'Przebudowano z SDK StartOS 4.0, które naprawia zużywanie przez kontrole stanu nieco więcej pamięci przy każdym uruchomieniu; długo działające węzły nie rosną już w pamięci. Wymaga StartOS 0.4.1 lub nowszego. Zebra i lightwalletd bez zmian.',
    fr_FR:
      "Recompilé avec le SDK StartOS 4.0, qui corrige les vérifications d'état utilisant un peu plus de mémoire à chaque exécution ; les nœuds en fonctionnement prolongé ne grossissent plus en mémoire. Nécessite StartOS 0.4.1 ou ultérieur. Zebra et lightwalletd sont inchangés.",
  },
  migrations: {
    up: async () => {},
    down: IMPOSSIBLE,
  },
})
