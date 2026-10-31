import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '7.0.0:0',
  releaseNotes: {
    en_US:
      'Zebra 7.0.0, required for the NU7 network upgrade (Mainnet block 3,543,405, around November 5): nodes still on Zebra 6 stop following the chain at activation. On first start Zebra converts its database to the new format in place, with no resync; afterwards this update cannot be rolled back. Also lightwalletd 0.6.1 (security fixes) and the StartOS 0.4.1 SDK.',
    es_ES:
      'Zebra 7.0.0, necesario para la actualización de red NU7 (bloque 3.543.405 de Mainnet, hacia el 5 de noviembre): los nodos que sigan en Zebra 6 dejarán de seguir la cadena en la activación. En el primer arranque Zebra convierte su base de datos al nuevo formato sin resincronizar; después esta actualización no puede revertirse. También lightwalletd 0.6.1 (correcciones de seguridad) y el SDK de StartOS 0.4.1.',
    de_DE:
      'Zebra 7.0.0, erforderlich für das Netzwerk-Upgrade NU7 (Mainnet-Block 3.543.405, etwa am 5. November): Knoten mit Zebra 6 folgen der Chain ab der Aktivierung nicht mehr. Beim ersten Start wandelt Zebra seine Datenbank ohne Neusynchronisierung ins neue Format um; danach kann dieses Update nicht rückgängig gemacht werden. Außerdem lightwalletd 0.6.1 (Sicherheitskorrekturen) und das SDK von StartOS 0.4.1.',
    pl_PL:
      'Zebra 7.0.0, wymagana do aktualizacji sieci NU7 (blok Mainnet 3 543 405, około 5 listopada): węzły z Zebrą 6 przestaną śledzić łańcuch w momencie aktywacji. Przy pierwszym uruchomieniu Zebra konwertuje bazę danych do nowego formatu bez ponownej synchronizacji; potem tej aktualizacji nie można cofnąć. Także lightwalletd 0.6.1 (poprawki bezpieczeństwa) i SDK StartOS 0.4.1.',
    fr_FR:
      "Zebra 7.0.0, nécessaire pour la mise à niveau réseau NU7 (bloc Mainnet 3 543 405, vers le 5 novembre) : les nœuds restés sur Zebra 6 cessent de suivre la chaîne à l'activation. Au premier démarrage, Zebra convertit sa base de données au nouveau format sans resynchronisation ; ensuite, cette mise à jour ne peut plus être annulée. Également lightwalletd 0.6.1 (correctifs de sécurité) et le SDK de StartOS 0.4.1.",
  },
  migrations: {
    up: async () => {},
    down: IMPOSSIBLE,
  },
})
