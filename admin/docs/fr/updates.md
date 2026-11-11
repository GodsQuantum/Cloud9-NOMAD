# Maintenir NOMAD à jour

Il est préférable de mettre NOMAD à jour lorsqu’une connexion Internet est disponible. Votre serveur disposera ainsi des dernières versions logicielles et des contenus récents lors de sa prochaine utilisation hors ligne. Cette page explique les différentes mises à jour, leur lancement manuel et leur automatisation.

---

## Les trois types de mises à jour

Trois catégories de mises à jour sont indépendantes :

1. **Logiciel (noyau)** — NOMAD lui-même : centre de contrôle, fonctionnalités, corrections de bogues et améliorations de sécurité.
2. **Applications** — les applications installées depuis le [Catalogue d’applications](/supply-depot) : Kiwix, assistant IA et autres services ajoutés.
3. **Contenus** — les ressources hors ligne : Wikipédia, bibliothèques Kiwix et régions cartographiques téléchargées.

Chacune peut être mise à jour à la demande ou automatiquement.

---

## Lancer une mise à jour manuelle

Pour rechercher et installer des mises à jour :

1. Ouvrez **[Paramètres → Rechercher les mises à jour](/settings/update)**.
2. Si une mise à jour du logiciel est disponible, lancez son installation. NOMAD la télécharge puis redémarre, généralement en deux à cinq minutes.
3. Pour mettre une application à jour, ouvrez sa fiche dans le [Catalogue d’applications](/supply-depot), puis choisissez **Gérer → Mettre à jour**.
4. Les contenus sont gérés dans **Paramètres → Gestionnaire de contenus** et **Explorateur de contenus**. Vous pouvez y télécharger les nouvelles versions des bibliothèques et des cartes.

Si une mise à jour échoue, NOMAD cherche à conserver la dernière version fonctionnelle afin que le serveur reste accessible.

---

## Mises à jour automatiques

NOMAD peut gérer ses mises à jour automatiquement. **Cette fonction est désactivée par défaut et doit être activée volontairement** : rien ne se met à jour seul avant votre autorisation. Les options se trouvent dans **Paramètres → Mises à jour**.

Principes communs aux trois catégories :

- **Vous définissez une plage horaire.** Les mises à jour automatiques n’ont lieu que pendant les heures choisies, pour éviter d’interrompre votre utilisation.
- **Les changements de version majeure sont toujours manuels.** Seules les mises à jour mineures et correctives peuvent être appliquées automatiquement.
- **Des vérifications de sécurité sont effectuées en premier.** NOMAD confirme notamment qu’il reste assez d’espace disque et qu’aucune installation, mise à jour ou téléchargement concurrent n’est en cours.
- **L’absence d’Internet ne provoque pas d’erreur bloquante.** Le contrôle est simplement reporté à la prochaine occasion.

### Mises à jour automatiques du logiciel

Activez-les dans **Paramètres → Mises à jour**. NOMAD recherchera les nouvelles versions du noyau appartenant à la même version majeure, pendant la plage choisie et après un **délai de stabilisation** configurable. Ce délai permet aux nouvelles versions de faire leurs preuves avant leur installation. La page affiche l’interrupteur, la plage horaire, le délai et l’état des opérations. En cas d’échecs répétés, NOMAD désactive cette fonction et vous en informe plutôt que de réessayer indéfiniment.

### Mises à jour automatiques des applications

Deux autorisations sont nécessaires : l’option générale dans **Paramètres → Mises à jour**, puis l’option propre à chaque application dans sa fiche du [Catalogue d’applications](/supply-depot). Les deux doivent être actives. Les mises à jour respectent la même plage horaire et le même délai de stabilisation que le logiciel, concernent uniquement les versions mineures et correctives, et sont suspendues automatiquement pour une application qui échoue à plusieurs reprises.

### Mises à jour automatiques des contenus

Les bibliothèques Wikipédia/ZIM et les régions cartographiques peuvent elles aussi être actualisées. Comme ces téléchargements peuvent représenter plusieurs gigaoctets, ils utilisent **leur propre plage horaire nocturne** et une **limitation de bande passante**, indépendantes de la programmation des applications et du logiciel. NOMAD vérifie directement les catalogues Kiwix et cartographiques disponibles. Lorsqu’une bibliothèque Wikipédia est remplacée par une version plus récente, la base de connaissances IA est automatiquement synchronisée.

---

## Canal d’accès anticipé

Vous souhaitez tester les nouvelles fonctionnalités avant leur publication stable ? Activez le **Canal d’accès anticipé** dans [Rechercher les mises à jour](/settings/update) pour recevoir les versions candidates. Ces versions peuvent encore présenter des défauts ; vous pouvez revenir au canal stable à tout moment.

---

## Avant de passer hors ligne

L’essentiel est simple : **faites les mises à jour pendant que vous avez encore Internet**. Que vous procédiez manuellement ou automatiquement, vérifiez que les logiciels et les contenus sont à jour avant de partir sans connexion. Une fois hors ligne, toutes les dernières versions synchronisées restent disponibles.

**[Vérifier les mises à jour →](/settings/update)** · **[Consulter les nouveautés de chaque version →](/docs/release-notes)**
