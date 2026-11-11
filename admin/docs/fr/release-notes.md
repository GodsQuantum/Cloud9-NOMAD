# Notes de version

## Inédit

### Caractéristiques

### Corrections de bugs

- **IA**: sonder un modèle les rapports de liste sans vision avant de désactiver les pièces jointes d'image, donc `gemma3` Accepte à nouveau les images (#1409). Merci @chriscrosstalk pour la contribution!
- **Traduire**: redirections en amont avant au lieu de les suivre, de sorte que les livres ouverts sont coiffés et leurs liens d'article se résorbent (#1379). Merci @chriscrosstalk pour la contribution!
- **Traduire**: télécharger chaque langue publiée au lieu de planter sur les modèles de pré-version, et répertorier toutes les langues prises en charge dans les documents (#1405). Merci @chriscrosstalk pour la contribution!

### Améliorations

## Version 1.35.0 - 29 septembre 2026

### Caractéristiques

- **IA**: prend en charge les pièces jointes de vision locale dans le chat (#1288). Merci @gabegraves et @chriscrosstalk pour la contribution!
- **IA**: afficher le document source et la date comme citations sous RAG réponses (#1287). Merci @chriscrosstalk pour la contribution!
- **IA**: budget l'invite et définir la fenêtre contextuelle sur un chemin de discussion Ollama natif (#1253). Merci @jakeaturner pour la contribution!
- **IA**: donner un échantillonneur de chat avec quatre profils de style de réponse au lieu de backend par défaut (#1282). Merci @jakeaturner pour la contribution!
- **IA**: contraindre les appels de tâches structurés (titres, puces, réécriture de requête) au lieu de demander gentiment (#1259). Merci @jakeaturner pour la contribution!
- **IA**: laisser la récupération diminuer via un plancher de pertinence post-reclassement (#1281). Merci @jakeaturner pour la contribution!
- **IA**: ajouter une vérification de pertinence opt-in pour la récupération hors sujet (#1365). Merci @jakeaturner pour la contribution!
- **IA**: spécifier un modèle léger pour les tâches auxiliaires (#1244). Merci @jakeaturner pour la contribution!
- **IA**: rendre la récupération RAG optionnelle par chat (#1247). Merci @jakeaturner pour la contribution!
- **Tableau de bord**: les tuiles de liaison ajoutées par l'utilisateur pour les services NOMAD ne gère pas (#1293). Merci @chriscrosstalk pour la contribution!
- **KB**: par fichier actif bascule plus groupe de collection et bascule en vrac (#1286). Merci @just-jbc et @chriscrosstalk pour la contribution!
- **Bibliothèque Kiwix**: parcourir le catalogue éloigné de Kiwix dans n'importe quelle langue, pas seulement l'anglais (#1299). Merci @chriscrosstalk pour la contribution!
- **Cartes**: gestion complète des marqueurs (visibilité, recherche/tri, icône et couleur par marqueur, coordination de la navigation, confirmation de suppression) (#1291). Merci @kennethbrewer3 et @chriscrosstalk pour la contribution!
- **Traduire**: traduction automatique hors ligne pour la bibliothèque d'information, expédiée sous forme d'application Supply Depot (#1292). Merci @chriscrosstalk pour la contribution!

### Corrections de bugs

- **IA**: stop `<think>` une sortie qui s'infiltre dans les titres, les puces et la réécriture du RAG (#1254). Merci @jakeaturner pour la contribution!
- **IA**: rapporter un modèle Ollama raté comme un échec au lieu d'un succès (#1274). Merci @chriscrosstalk pour la contribution!
- **IA**: ne sondez pas le point d'extrémité d'intégration native sur un backend non-Ollama (#1284). Merci @chriscrosstalk pour la contribution!
- **IA**: ne classez pas le backend comme non-Ollama quand il est simplement inaccessible (#1357). Merci @chriscrosstalk pour la contribution!
- **IA**: bossez la broche Ollama à 0.33.3 pour fixer l'accroche de déconnexion (#1356). Merci @chriscrosstalk pour la contribution!
- **IA**: supprimer l'avertissement de modèle de réécriture par défaut long-mort (#1249). Merci @jakeaturner pour la contribution!
- **Tests de performance**: montrer le score v2 dans Benchmark History (#1210). Merci @chriscrosstalk pour la contribution!
- **Tests de performance**: stop WSL2 soumettant "Microsoft Basic Render Driver" comme modèle GPU (#1277). Merci @chriscrosstalk pour la contribution!
- **Chat**: avorter les flux de réponse abandonnés (#1220). Merci @NgoQuocViet2001 pour la contribution!
- **Chat**: arrêter les réponses de caps à 1024 jetons et la troncature de surface (#1360). Merci @jakeaturner pour la contribution!
- **Chat**: rendre le message de l'utilisateur avant de créer la session (#1301). Merci @chriscrosstalk pour la contribution!
- **Contenus**: re-télécharger les mises à jour de contenu après une tentative ratée (#1213). Merci @Osamaali313 pour la contribution!
- **Base de données**: permettre `dataset` en `installed_resources.resource_type` (#1243). Merci @rcorvus pour la contribution!
- **Téléchargements**: garder les emplois de mannequins orphelins (#1245). Merci @NgoQuocViet2001 pour la contribution!
- **GPU**: détecter le repli du processeur Ollama à partir de journaux afin d'incendies de remédiation automatique (#1109). Merci @fpolica91 pour la contribution!
- **GPU**: détecter le repli du processeur Ollama sur AMD et offrir le correctif droit (#1370). Merci @jakeaturner pour la contribution!
- **GPU**: arrêter un disparu `/dev/kfd` bloquer entièrement l'installation de l'assistant d'IA (#1276). Merci @chriscrosstalk pour la contribution!
- **GPU**: garder une override AMD HSA existante sur la réinstallation et la mise à jour (#1390). Merci @jakeaturner pour la contribution!
- **Installer**: temps sorti Redis saurs de préparation (#1347). Merci @dajiaohuang pour la contribution!
- **Installer**: correspond à la chaîne HawkPoint1 lspic pour la détection GPU gfx1103 (#1385). Merci @Yi-111-a pour la contribution!
- **KB**: arrêter de fuiter les vecteurs Qdrant lorsqu'un ZIM est supprimé ou remplacé (#1227). Merci @just-jbc pour la contribution!
- **KB**: arrêter le balayage orphelin purgeant une racine de balayage vide mais présente (#1393). Merci @jakeaturner pour la contribution!
- **KB**: persister la source active basculer quand aucune ligne d'état d'ingest n'existe (#1395). Merci @jakeaturner pour la contribution!
- **Cartes**: arrêter le stockage de basemap du monde en cours d'exécution de l'extrait de mptiles deux fois (#1394). Merci @jakeaturner pour la contribution!
- **File d'attente**: effacer les travaux du terminal avant la réexpédition afin que les téléchargements ne soient pas supprimés en silence (#1225). Merci @chriscrosstalk pour la contribution!
- **File d'attente**: stop cale-job recovery forking la chaîne d'intégration (#1270). Merci @chriscrosstalk pour la contribution!
- **RAG**: n'abandonnez pas un ZIM après un lot clairsemé (#1242). Merci @rcorvus pour la contribution!
- **Sécurité**: rejeter les URL personnalisées surdimensionnées (#1354). Merci @dajiaohuang pour la contribution!
- **Seeder**: garder le port hôte d'une application installée à travers la synchronisation du catalogue (#1300). Merci @johno10661 et @chriscrosstalk pour la contribution!
- **Système**: résoudre un nom de GPU d'ouverture de poche sur la page Système aussi (#1285). Merci @chriscrosstalk pour la contribution!
- **UI**: restaurer le contraste de texte en mode sombre (#1358). Merci @Tiancheng-Xu pour la contribution!
- **ZIM**: résoudre les ZIM aromatisés et non-anglais dans la vérification de mise à jour (#1298). Merci @chriscrosstalk pour la contribution!

### Améliorations

- **Marque**: remplacer le badge retraité N.O.M.A.D. par le nouveau logo (#1375). Merci @chriscrosstalk pour la contribution!
- **CI**: ajouter un déclencheur de planification hebdomadaire pour collecter la validation d'URL (#1217). Merci @cclavin pour la contribution!
- **Tableau de bord**: serrer la description de la tuile de référence du médicament (#1297). Merci @chriscrosstalk pour la contribution!
- **Documentation**: ajouter SECURITY.md et serrer .gitignore pour les fichiers d'identification (#1223). Merci @chriscrosstalk pour la contribution!
- **Documentation**: indiquer combien de disque NOMAD a besoin avant tout contenu (#1278). Merci @chriscrosstalk pour la contribution!
- **Eval**: harnais d'évaluation de la qualité RAG standardisé avec un corpus congelé et un ensemble de questions dorées (#1233). Merci @jakeaturner pour la contribution!
- **Installer**: ajouter la bannière Project NOMAD ASCII à l'installateur (#1310). Merci @chriscrosstalk pour la contribution!

## Version 1.34.0 - 4 août 2026

### Caractéristiques

- **IA**: nomad.md pour les instructions personnalisées (#1127). Merci @jakeaturner pour la contribution!
- **IA**: la pensée par modèle bascule avec défaut global (off) (#1079). Merci @chriscrosstalk pour la contribution!
- **API Documentation**: Docs OpenAPI à générer automatiquement avec interface utilisateur Scalar (#1128). Merci @jakeaturner pour la contribution!
- **Tests de performance**: sysbench multi-arcs officiel, résumé digest, métadonnées de la plate-forme (#1158). Merci @chriscrosstalk pour la contribution!
- **Tests de performance**: verrouillage Score v2 référence AI à 13,2 (mesuré, était espace réservé) (#1097). Merci @chriscrosstalk pour la contribution!
- **Tests de performance**: bannière de réexécution de tableau de bord invitant un Score v2 à réexécuter (#1096). Merci @chriscrosstalk pour la contribution!
- **Tests de performance**: Score v2 app client — bruts, score non plafonné, v2 load + UI. Merci @chriscrosstalk pour la contribution!
- **Tests de performance**: harnais durcissant — échouer bruyamment + broche sysbench + provenance record (#1089). Merci @chriscrosstalk pour la contribution!
- **Tests de performance**: résultat de la note de fin de course + NVIDIA GPU-util superposition (#1087). Merci @chriscrosstalk pour la contribution!
- **Tests de performance**: numéros de banc d'essai faisant autorité + bande de résultats (#1085). Merci @chriscrosstalk pour la contribution!
- **Tests de performance**: télémétrie en direct pendant les séries de référence (#1082) (#1084). Merci @chriscrosstalk pour la contribution!
- **Collections**: support des téléchargements fermés pour le contenu organisé auto-hébergé (#1172). Merci @chriscrosstalk pour la contribution!
- **Collections de créateurs**: Packs vidéo par créateur fermés, hors ligne via Kiwix (#1106). Merci @chriscrosstalk pour la contribution!
- **Tableau de bord**: ajouter la bannière "What's new" rejetable pour v1.34 (#1112). Merci @chriscrosstalk pour la contribution!
- **Tableau de bord**: compléter le v1.34 Quoi de neuf (#1197). Merci @chriscrosstalk pour la contribution!
- **Informations de diagnostic**: ajouter le stockage, le docker, la santé du GPU et les diagnostics de mise à jour automatique (#1102). Merci @chriscrosstalk pour la contribution!
- **Références pharmaceutiques**: Ajouter hors ligne FDA référence médicamenteuse (étiquettes, vue d'interaction, conditions, remèdes) (#1040). Merci @caweis pour la contribution!
- **Bibliothèque Kiwix**: Lignes expansibles dans le navigateur Kiwix Library (#1060). Merci @jarvisxyz pour la contribution!
- **Cartes**: ajouter l'entrée de notes à map pin placement popup (#926). Merci @chriscrosstalk pour la contribution!
- **RAG**: ajouter l'organisation sujet/collection à la base de connaissances (#1063). Merci @just-jbc pour la contribution!

### Corrections de bugs

- **IA**: streaming thinking from /v1 raisoning field + avorter sur la déconnexion du client (#1078). Merci @chriscrosstalk pour la contribution!
- **IA**: stop forçant HSA_OVERRIDE=11.0.0 sur des iGPU AMD pris en charge par le natif (#1076). Merci @chriscrosstalk pour la contribution!
- **IA**: set OLLAMA_IGPU_ENABLE sur le provisionnement AMD afin que les iGPU soient utilisés (#1074). Merci @chriscrosstalk pour la contribution!
- **IA**: coerce gfx1103 (780M) à HSA_OVERRIDE 11.0.0 donc il reste sur GPU (#1134). Merci @jakeaturner pour la contribution!
- **Tests de performance**: corriger diverses erreurs de script. Merci @jakeaturner pour la contribution!
- **Tests de performance**: les courses partielles ne sont pas le NOMAD Score (réétiqueter + renormaliser) (#1088). Merci @chriscrosstalk pour la contribution!
- **Tests de performance**: supprimer le jeu de progression obsolète (#1136). Merci @NgoQuocViet2001 pour la contribution!
- **Tests de performance**: faire surface une raison claire lorsque la soumission du classement échoue (#1138). Merci @chriscrosstalk pour la contribution!
- **Tests de performance**: réchauffer le modèle d'IA avant les courses chronométrées pour des scores reproductibles (#1140). Merci @chriscrosstalk pour la contribution!
- **Tests de performance**: bloquer la soumission du classement lorsque l'IA fonctionne sur un hôte distant (#1157). Merci @chriscrosstalk pour la contribution!
- **Tests de performance**: ne bloquez pas la soumission lorsque l'hôte d'IA est cette machine (#1166). Merci @chriscrosstalk pour la contribution!
- **Chat**: rendre la mise en page de conversation réactive (#1090). Merci @Bortlesboat pour la contribution!
- **Chat**: ouvrir le chat complet en place au lieu d'une nouvelle fenêtre (#1181). Merci @chriscrosstalk pour la contribution!
- **Contenus**: résoudre l'URL ZIM actuelle avant le téléchargement (#1091). Merci @NgoQuocViet2001 pour la contribution!
- **Contenus**: actualiser les ZIM installés lorsqu'un téléchargement est terminé pour tailler les entrées fantômes (#1099). Merci @chriscrosstalk pour la contribution!
- **Collections de créateurs**: ajouter les actifs de bannière Modern Rogue manquants (#1147). Merci @chriscrosstalk pour la contribution!
- **Téléchargements**: envoyer un User-Agent descriptif pour que les miroirs Wikimédia ne soient pas 403 (#1114). Merci @chriscrosstalk pour la contribution!
- **Téléchargements**: ajouter le bouton de réessayer et le lien de téléchargement de ressources pour les téléchargements échoués (#1059). Merci @jarvisxyz pour la contribution!
- **Téléchargements**: ne pas 500 emplois de point de terminaison sur un emploi BullMQ orphelin (#1191). Merci @chriscrosstalk pour la contribution!
- **Téléchargements**: ne pas réessayer un droit refusé pendant quatre heures (#1205). Merci @chriscrosstalk pour la contribution!
- **Téléchargements**: laisser les téléchargements de contenu interrompus reprendre (#1202). Merci @chriscrosstalk pour la contribution!
- **Configuration guidée**: rationaliser l'assistant + recommandations de modèle robustes (#1110). Merci @chriscrosstalk pour la contribution!
- **Installer**: définir les couleurs en-tête_red + manquantes dans les scripts de désinstallation/mise à jour (#1098). Merci @chriscrosstalk pour la contribution!
- **KB**: empêcher le menu déroulant de la collection d'être coupé, élargir le modal (#1198). Merci @chriscrosstalk pour la contribution!
- **KB**: conserver la collection lorsqu'un fichier est indexé après l'affectation (#1200). Merci @chriscrosstalk pour la contribution!
- **KVStore**: corriger la clé app.homebox manquante. Merci @jakeaturner pour la contribution!
- **Cartes**: avertir quand le monde map manquant au lieu de carte grise silencieuse (#1104). Merci @not-knope pour la contribution!
- **RAG**: ajouter l'extraction de texte .docx appropriée via mammoth (#1100). Merci @just-jbc pour la contribution!
- **RAG**: arrêter de re-créer des index de charge utile sur chaque document intégré (#1135). Merci @bragaus pour la contribution!
- **Contenus**: respecter la politique d'ingestion lorsqu'un ZIM est téléchargé localement (#1184). Merci @chriscrosstalk pour la contribution!
- **Catalogue d’applications**: générer du poivre à clé Homebox API afin qu'il arrête le crash-looping (#1077). Merci @chriscrosstalk pour la contribution!
- **UI**: ajouter le lien de référence API à la barre latérale Paramètres. Merci @jakeaturner pour la contribution!
- **Mise à jour**: prunez les images remplacées après la mise à jour pour récupérer le disque (#1101). Merci @chriscrosstalk pour la contribution!

### Améliorations

- **Marque**: ajouter TM au mot-symbre Project NOMAD sur des surfaces proéminentes. Merci @chriscrosstalk pour la contribution!
- **Marque**: standardiser le nom de marque au Projet NOMAD, backronym de retraite. Merci @chriscrosstalk pour la contribution!
- **Construire**: exécuter l'étape de codegen de référence de médicament (#1132). Merci @jakeaturner pour la contribution!
- **Catalogue d’applications**: coucher de soleil abandonné Meshtastic Daemon carte (#1049). Merci @chriscrosstalk pour la contribution!
- **Catalogue**: ajouter le pack de créateurs Modern Rogue (dev) (#1146). Merci @chriscrosstalk pour la contribution!
- **CI**: Correction de la validation de l'URL de collecte. Merci @jakeaturner pour la contribution!
- **Collections**: mise à jour des URL obsolètes (#1148). Merci @jakeaturner pour la contribution!
- **Collections**: corriger quatre URL de téléchargement de Wikipédia morts (#1189). Merci @chriscrosstalk pour la contribution!
- **Gestionnaire de contenus**: filter non-contenu sections + tables de rendu dans l'extraction ZIM (#1044). Merci @chriscrosstalk pour la contribution!
- **Dépendances**: bosse de goudron, vite et dockerode dans admin. Merci @jakeaturner pour la contribution!
- **Dépendances**: axios de bossage et information système dans admin. Merci @jakeaturner pour la contribution!
- **Documentation**: rendre les directives de stockage-relocalisation précises et cohérentes (#1103). Merci @chriscrosstalk pour la contribution!
- **Documentation**: ajouter la section de cohérence de l'interface utilisateur (#1080). Merci @chriscrosstalk pour la contribution!
- **Documentation**: recommander Ubuntu 26.04 LTS comme base par défaut (#1141). Merci @chriscrosstalk pour la contribution!
- **Documentation**: point MeshCore Web vers le site officiel meshcore.io (#1142). Merci @chriscrosstalk pour la contribution!
- **Références pharmaceutiques**: faire des collections JSON la source unique pour les données organisées (#1130). Merci @caweis pour la contribution!
- **Références pharmaceutiques**: remaniation par tabulation avec recherche groupée, situations multi-sélections et une porte de disclaimer (#1137). Merci @chriscrosstalk pour la contribution!

## Version 1.33.0 - 23 juin 2026

### Caractéristiques

- **Dépôt d'approvisionnement — Applications personnalisées**: Le catalogue d’applications est la nouvelle maison de NOMAD pour les applications installables, et il vous permet maintenant d'exécuter votre *propre* conteneurs Docker personnalisés — pas seulement le catalogue organisé. Spécifiez une image, des mappages de port, des liaisons de volume, des variables d'environnement et des limites mémoire/CPU, et NOMAD le fait tourner en tant que conteneur de frères et sœurs géré. Une vérification avant vol en direct et débonnée avertit des conflits portuaires et des limites de ressources lorsque vous tapez et bloque les configurations dangereuses, avec une dérogation «installer de toute façon» pour les cas d'avertissement seulement (par exemple un registre non fiable ou un `:latest` tag). Les applications personnalisées installées peuvent être modifiées, mises à jour (ré-tirer plus tard + recréer avec un retour en arrière sécurisé si le nouveau conteneur échoue), et supprimées (supprimant éventuellement l'image), et chaque application installée - organisée ou personnalisée - obtient par conteneur **Journaux** et **Statistiques** modaux. Les liaisons Host-path sont durcies contre les échappements et les logs/stats sont étendus aux conteneurs gérés par NOMAD uniquement. Merci @jakeaturner pour la contribution!
- **Supply Depot — Application organisée Onboarding & Fixes**: Chaque application organisée est maintenant livrée avec des documents de démarrage spécifiques à NOMAD (première exécution, connexions par défaut, où les données vivent, ce qui fonctionne et ne fonctionne pas hors ligne), liés en profondeur à partir d'un **Gérer › Docs** l'article sur la carte. Parallèlement, il s'agit d'une série de correctifs d'installation, de sorte que les neuf applications documentées - Stirling PDF, Browser de fichiers, Calibre-Web, IT Tools, Excalidraw, Homebox, Vaultwarden, Jellyfin, Meshtastic Web - fonctionnent hors de la boîte: logins ensemencés au lieu de mots de passe aléatoires enterrés dans des journaux, une bibliothèque de calibre groupée, HTTPS-by-default où l'application nécessite un contexte sécurisé (Vaultwarden)et un échange vers une image maintenue (Homebox). Vous pouvez maintenant aussi **modifier les applications organisées**, pas seulement les personnalisés — les modifications sont fusionnées dans la configuration existante de l'application (préservant les paramètres avancés comme les requêtes de l'appareil GPU) et signalent l'application afin que le semeur cesse de l'écraser, tandis que les applications intactes reçoivent toujours des mises à jour du catalogue. Merci @chriscrosstalk pour la contribution!
- **Mises à jour automatiques de base**: La propre image d'administrateur/cœur de NOMAD peut maintenant se mettre à jour, fermée par des contrôles de sécurité en couches. Il est opt-in et off par défaut, ne s'exécute qu'à l'intérieur d'une fenêtre de temps configurée par l'utilisateur, et n'applique que les versions GA (manuel de suspension de bosses majeures) configurables au-delà d'un refroidissement configurable - derrière les vérifications avant vol pour le sidecar de mise à jour, pas de mises à jour/téléchargements/installations en vol et disque hôte suffisant. Il désactive automatiquement après de véritables défaillances répétées, tandis que les recherches transitoires hors ligne sont traitées comme des sauts inoffensifs. Paramètres → Les mises à jour exposent la bascule, la fenêtre, le rafraîchissement et le statut en direct. C'est la première étape de la trilogie de mise à jour automatique. Merci @jakeaturner pour la contribution!
- **Mises à jour automatiques de l'application**: Les applications installées (les conteneurs frères et sœurs "Supply Depot") peuvent maintenant se tenir au courant des mises à jour d'opt-in, mises à jour mineures/patch, en miroir de la fonctionnalité de mise à jour automatique de base. Les mises à jour sont grillées derrière un opt-in à deux niveaux — un commutateur maître global dans Paramètres → Mises à jour **et** une bascule par application dans le dépôt d'approvisionnement — et respectez la fenêtre de mise à jour partagée, la période de refroidissement, les vérifications de prévol sur disque/en cours d'avancement et le retour d'échec par application. Les versions principales ne sont jamais auto-appliquées. Merci @jakeaturner pour la contribution!
- **Mises à jour automatiques de contenu**: La mise à jour automatique de la trilogie, les fichiers Kiwix ZIM installés et les cartes PMTiles peuvent désormais se mettre à jour sur une base d'opt-in. Les mises à jour de contenu s'exécutent sur leur propre fenêtre de nuit dédiée et le plafond de bande passante (séparés de l'application / du tableau de base, puisque les téléchargements de contenu sont multi-Go), vérifiez directement les catalogues Kiwix et PMTiles en amont (pas plus de dépendance à l'API externe Project NOMAD) et gardez la base de connaissances AI synchronisée lorsqu'un ZIM est remplacé. Merci @jakeaturner pour la contribution!
- **Dépôt d'approvisionnement — URL de lancement personnalisées**: Vous pouvez maintenant remplacer le lien "Open" d'une application avec une adresse de proxy inverse ou de DNS local (par ex. `https://jellyfin.myhomelab.net`). L'outrage est stocké séparément afin que le lien par défaut soit toujours récupérable, survit aux reseeds/upgrades et soit validé à la fois sur le client et le serveur. Merci @jakeaturner pour la contribution!
- **Supply Depot — Version et mise à jour de la visibilité**: Les cartes d'application affichent maintenant la version installée à côté du nom de l'application (par ex. `Kiwix · 3.7.0`), et la pilule "Mise à jour disponible" se distingue maintenant avec un remplissage solide désert-orange, donc les mises à jour disponibles attirent réellement l'œil. Merci @chriscrosstalk pour la contribution!
- **Cartes — Vue Persistante**: La page Maps se souvient maintenant de votre position et zoome à travers les rafraîchissements au lieu de se réinitialiser à la vue par défaut à l'échelle américaine. La vue enregistrée est contrôlée par bornes, de sorte qu'une valeur corrompue retompe en toute sécurité à la valeur par défaut. Merci @chriscrosstalk pour la contribution!
- **Gestionnaire de contenu — Rescan Library**: Un nouveau bouton "Rescan Library" reconstruit l'index Kiwix à partir des fichiers ZIM actuellement sur le disque, donc des fichiers **sideloadé** en dehors du flux de téléchargement de NOMAD (USB stick, SSH, partage réseau) peut être servi sans tomber sur un terminal. Il rapporte combien de nouveaux livres ont été trouvés et, en mode bibliothèque, des recharges à chaud sans redémarrage de conteneur. Merci @chriscrosstalk pour la contribution!
- **Configuration — Redis sélection de base de données**: Ajouté un `REDIS_DB` variable d'environnement afin que les opérateurs puissent choisir une base de données logique Redis (0-15) pour la file d'attente de travail et le transport à jour en direct. Cela empêche les collisions clés lorsqu'une seule instance Redis est partagée sur plusieurs piles (commun dans les homelabs). Par défaut à db 0, préservant le comportement existant. Merci @johno10661 pour la contribution!
- **Paramètres avancés — URL de test Internet**: Ajout d'une nouvelle page Paramètres avancés avec une option pour remplacer l'URL de test Internet "beacon" par défaut (plus de paramètres avancés à venir). Auparavant, remplacer cette URL nécessitait un changement de variable ENV et un redémarrage de conteneur. La variable ENV héritée est toujours respectée si vous l'avez définie. Merci @jakeaturner pour la contribution!
- **RAG**: L'intégration des emplois peut maintenant être annulée, permettant aux utilisateurs d'effacer les tâches bloquées qui n'ont pas explicitement échoué. Merci @jakeaturner pour la contribution!

### Corrections de bugs

- **Stockage**: Lorsque le volume de stockage d'administrateur est déplacé vers un autre disque, les applications pour enfants (Kiwix, Ollama, Qdrant, Flatnotes, Kolibri) suivent maintenant automatiquement vers le nouvel emplacement au lieu de monter l'ancien chemin vide. La racine de stockage de l'hôte est maintenant dérivée de la monture réelle de l'administrateur, avec un explicite `NOMAD_STORAGE_PATH` passer outre et plus clair composer des commentaires. Merci @chriscrosstalk pour le correctif!
- **Système**: Une mise à jour de service échouée revient maintenant au conteneur précédent si le nouveau ne démarre pas, de sorte que le service reste sur l'ancienne version au lieu d'être laissé en panne. S'efface également tout reste de conteneur, de sorte qu'une nouvelle série ne peut pas se coincer indéfiniment. Merci @chriscrosstalk pour le correctif!
- **Système**: Les pannes d'installation de service causées par un conflit de port hôte (communément une installation native d'Ollama déjà sur le port 11434) affichent maintenant un message clair et exploitable avec les commandes exactes pour le résoudre, au lieu d'une erreur Docker brute. Merci @chriscrosstalk pour le correctif!
- **Système**: Le bouton de mise à jour par service est maintenant désactivé et affiche "Mise à jour..." pendant qu'une mise à jour est en vol, empêchant les double-clics qui ont précédemment couru dans les erreurs Docker. L'état en cours est durable, de sorte qu'il survit à un rechargement de page pendant une traction multi-Go. Merci @chriscrosstalk pour le correctif!
- **Mises à jour du système**: Mise à jour vérifie le fait de ne plus planter pour les images avec plus de 1.000 tags (par exemple Ollama). Les URL de pagination de registre sont maintenant résolues correctement, de sorte que les versions de retours de flux "Check for Updates" au lieu d'échouer silencieusement - corrigeant Ollama apparaissant épinglé sur une ancienne version. Merci @chriscrosstalk pour le correctif!
- **Système**: Les vérifications d'état d'Internet ne signalent plus "Pas de connexion Internet" sur les réseaux qui bloquent ou détournent le 1.1.1.1 de Cloudflare. La vérification sonde maintenant les hôtes supplémentaires de l'application déjà des contacts (GitHub et l'API Project NOMAD) en parallèle et accepte toute réponse HTTP comme "en ligne". Merci @akashsalan pour le correctif!
- **Assistant IA**: Les morceaux d'intégration surdimensionnés sont maintenant tronqués et rejugés au lieu d'être laissés tomber silencieusement, mettant fin à la tempête de réessai qui pourrait pier le GPU et inonder les journaux (le problème "api/embarqué pendant des semaines"). Le chemin de repli compatible OpenAI passe désormais également par contexte et réglages. Merci @chriscrosstalk pour le correctif!
- **Assistant IA**: Les suggestions de chat utilisent maintenant votre modèle sélectionné (retombé sur le *Le plus petit* modèle installé) au lieu du plus grand. Cela empêche un modèle phare qui dépasse la VRAM disponible d'accrocher la page de chat et de renvoyer une erreur de 500. Merci @johno10661 pour le correctif!
- **Assistant IA**: L'assistant ne décline plus "Désolé, je n'ai pas pu trouver de contexte spécifique concernant X..." quand le matériel pertinent a été réellement récupéré. L'invite RAG traite maintenant le contexte récupéré comme la source faisant autorité et retombe à la connaissance générale en silence, les scores de pertinence visibles par modèle qui ont amorcé des modèles plus petits pour se méfier du contexte correct ont été remplacés par des étiquettes neutres de titre de source, et un boost de correspondance de cap conservateur améliore le classement des morceaux déjà récupérés. Merci @jakeaturner pour le correctif!
- **Base de connaissances**: Le nombre de morceaux incorporés pour l'ingestion ZIM par lots est maintenant persisté avec précision entre les lots de continuation, au lieu de ne déclarer que le nombre de lots finals. Merci @Metbcy pour le correctif!
- **Base de connaissances**: L'"ingestion peut avoir bloqué" (partiel-étal) avertissement ne tire plus faussement sur les ZIM lourds de lien ou de PDF qui ont légitimement peu de texte intégrable. Merci @chriscrosstalk pour le correctif!
- **Base de connaissances**: ZIM ingestion progress ne se fige plus à 99% sur les archives multi-pages (par exemple iFixit). Les progrès se glissent maintenant en avant de manière monotone et ne rapportent que 100% sur le lot véritablement final. Merci @chriscrosstalk pour le correctif!
- **Contenus**: L'installation d'une version plus récente d'une carte organisée ou ZIM supprime maintenant le fichier remplacé du disque, empêchant l'accumulation silencieuse de contenu orphelin (potentiellement des centaines de Go). La suppression est fermée derrière des rails de sécurité stricts – seuls les fichiers suivis, authentiquement remplacés et strictement plus récents dans la boutique de contenu sont jamais supprimés; les fichiers chargés latéraux ne sont jamais touchés. Merci @chriscrosstalk pour le correctif!
- **Contenus**: ZIM sur le thème de Wikipédia (p. ex. `wikipedia_en_medicine_maxi` de Medicine → Comprehensive) ne sont plus effacés au redémarrage. La réconciliation ne sait maintenant que le fichier unique réellement géré par le sélecteur Wikipedia, assorti d'un nom de fichier exact. Merci @chriscrosstalk pour le correctif!
- **Cartes**: Avoir à la fois une copie ancienne et nouvelle de la même région de carte sur le disque n'efface plus toute la carte. Les sources de cartes sont maintenant dédupliquées dans le fichier le plus récent par région, et les installations déjà cassées récupèrent automatiquement sur le chargement de la page suivante. Merci @chriscrosstalk pour le correctif!
- **Bibliothèque d'information (Kiwix)**: Kiwix auto-guérit maintenant un fichier de bibliothèque manquant ou corrompu au démarrage en le reconstruisant à partir des fichiers ZIM sur le disque, au lieu de trouver une bibliothèque vide et aucun chemin vers la récupération. Merci @chriscrosstalk pour le correctif!
- **Docker**: Les tractions d'image échouées (connexion larguée/mométrique, mauvais manifeste, disque plein milieu de traction) sont maintenant correctement traitées comme des défaillances sur tous les chemins de traction, au lieu de procéder à la création d'un conteneur à partir d'une image manquante ou partielle et de faire surface à une erreur en aval confuse. Merci @chriscrosstalk pour le correctif!
- **Sécurité**: Durci la garde privée-URL/SSRF en remplaçant la liste de blocage regex par une classification IP-range appropriée (`ipaddr.js`) et normaliser l'hôte en premier. Cela bloque les codages IP alternatifs et les contournements de point de fuite (par ex. `localhost.`) tout en ne surbloquant plus les adresses publiques légitimes. Les gammes RFC1918 et les noms d'hôtes LAN nus restent autorisés pour les appareils locaux. Merci @chriscrosstalk pour le correctif!
- **Installer**: Durci le script d'installation — l'étape GPG de la boîte à outils NVIDIA fonctionne maintenant de manière non interactive afin qu'elle ne saute pas silencieusement sur les installations non-TY, et les téléchargements de scripts d'aide réessayent maintenant de réduire les défaillances transitoires d'installation partielle. Merci @Gujiassh pour le correctif!

### Améliorations

- **Licence & Docs**: Correction des métadonnées de licence de paquet à `Apache-2.0` (le projet est Apache-2.0 depuis un certain temps), a ajouté une description de projet réelle et a corrigé un lien de dépannage mort plus plusieurs typos README. Merci @aqilaziz pour la contribution!
- **Documentation**: Correction de quelques typos et ponctuation dans le README. Merci @teccdev pour la contribution!
- **Dépendances**: Bumped React et React DOM. Merci @jakeaturner pour la contribution!
- **Dépendances**: Autopréfixeur bossé. Merci @jakeaturner pour la contribution!
- **Dépendances**: BullMQ a bousculé à 5.77.6 et mis à jour les appels d'emploi affectés à la forme des nouveaux arguments. Merci @jakeaturner pour la contribution!
- **Catalogue d’applications**: Épinglé toutes les versions d'image organisées pour assurer des déploiements de base cohérents. Merci @jakeaturner pour la contribution!
- **Catalogue d’applications**: A fait tomber les versions par défaut de CyberChef à 10.24.0 et Ollama à 0.24.0. Merci @jakeaturner pour la contribution!

## Version 1.32.1 - 27 mai 2026

### Caractéristiques

### Corrections de bugs

- fix(logging): écrire également des journaux de production à stdout pour la visibilité docker (#870). Merci @chriscrosstalk pour la contribution!
- Correction(KB): curseur sur les boutons de stratégie d'ingestage Always/Manual (#927). Merci @chriscrosstalk pour la contribution!

### Améliorations

- perf(KB): swap Qdrant full-scroll pour facette sur l'énumération source (#928). Merci @chriscrosstalk pour la contribution!
- corvée (dès): bosser diverses dépendances. Merci @jakeaturner pour la contribution!

## Version 1.32.0 - 20 mai 2026

### Caractéristiques

- **IA:** accélération améliorée du GPU AMD pour Ollama via ROCm + HSA override (#804)
- **chat:** confirmer-sur-interrupteur + one-chat-model-à-p.-à-temps d'exécution (#ffa70a5)
- **Content-manager:** Ajouter colonne de taille de fichier triable (#698), ferme #685
- **mises à jour de contenu:** montrer la taille, les téléchargements de surface dans Active Downloads (#299b767)
- **Contenu:** sources de bibliothèque ZIM personnalisées avec miroirs pré-ensemencés (#593) (#62e75fd), ferme #576
- **easy-setup:** diviser l'IA en sa propre étape conditionnelle (question #905) (#0617d54), ferme #907
- **GPU:** auto-remediate nomad_ollama passe-through loss sur le démarrage d'administration (#755) (#2997637), ferme #208 #804
- **KB:** Toujours/Manaule ingest policy toggle (RFC #883 §1/§4) (#894) (#8eb8809), ferme #880 #886 #886 #886 #888 #888 #888 #888 #888 #888 #888 #888
- **KB:** Avertissements conditionnels A + B sur Fichiers stockés (RFC #883 §6) (#563f86a), ferme #891 #891 #890 #881
- **KB:** L'invite JIT de premier chat pour la politique d'ingestion (RFC #883 Phase 3 task 12) (#fd153b4), ferme #894 #894 #894
- **KB:** groupe admin docs en une seule ligne dans Fichiers stockés (RFC #883 §9) (#c64ec97)
- **KB:** garde-corps modal à 50Go / 10%-free seuils (RFC #883 §7) (#cf3a924), ferme #897 #897 #894 #899
- **KB:** par-file ingest action + indicateur d'état sur les fichiers stockés (RFC #883 §5) (#d850cb9), ferme #907 #907 #907 #908 #908
- **KB:** machine d'état d'ingest par fichier (phase 1 de RFC #883) (#888) (#743549c), ferme #880 #886 #886 #886
- **KB:** Registre de ratio pour les estimations de disque + temps (phase 1B de la RFC #883) (#159d57b)
- **KB:** pilule d'état + horodatage de dernière activité sur la file d'attente de traitement (RFC #883 §5/§10) (#43ca584)
- **KB:** estimation de l'intégration de surface-disque dans le modal à changement de niveau (RFC #883 §1) (#e68c753), ferme #891 #891
- **KB:** L'étape de la politique d'IA de l'assistant (RFC #883 Phase 3 task 13) (#7a681d0), ferme #899 #894 #894 #899
- **Cartes:** téléchargements de carte régionale via l'extrait de go-pmtiles (#780) (#94059b0)
- **cartes:** montrer les coordonnées de la carte sur le mouvement de la souris (#786) (#08838b1)

### Corrections de bugs

- **IA:** Ajouter truncation DEBUG log (#e3b758f)
- **IA:** améliorer la validation url Ollama à distance pour prévenir la vulnérabilité SSRF (#989a401)
- **IA:** pré-cap embarquer entrée + log fallback raison (#881) (#2dec5bf), ferme #369 #670
- **IA:** conserver la balise de sumver dans DB sur les mises à jour AMD Ollama (#019a5a4)
- **IA:** réécrire la requête RAG sur le premier suivi (off-by-one dans le seuil de saut-réécriture) (#43645e4)
- **IA:** AMD HSA override + benchmark discrete-GPU détection (#a2e2f7f), ferme #804 #804 #810
- **API:** accepter les notes, le type de marqueur et la position sur les points de terminaison des marqueurs (#770) (#132ec9c), ferme #768
- **API:** Sauter la compression pour les événements envoyés par serveur (#798) (#4b21ea6)
- **contenu:** afficher le niveau sélectionné sur les cartes pendant que les téléchargements sont en vol (#059cf2a), ferme #36b6d8e
- **DockerService:** améliorer la logique de volume et la documentation en forceRéinstall (#501860a)
- **Téléchargements:** traiter le contenu-type manquant comme octet-stream (#848) (#3abf338)
- **Installation:** avertir bruyamment sur les architectures non-x86_64 avant de tirer des images (#797) (#cb129d2), ferme #419
- **KB:** Ajouter ré-embed et reset & reconstruct opte pour réparer les embeddings cassés (#886) (#4c21196)
- **KB:** aligner le type de colonne chunks_per_mb avec le contrat TS (#4d6b140)
- **KB:** écran vierge sur panneau ouvert + infobulles sur les boutons d'action en vrac (#633a3c3), ferme #892 #895 #post-#892
- **KB:** pontage du garde-corps pendant la charge d'estimation + fratère de transition (PR #901 review) (#7e768f3)
- **KB:** Supprimer le bouton de rafraîchissement redondant de Processing Queue (#4e8cadd), ferme #893
- **KB:** respect Politique d'ingestation manuelle sur l'envoi post-téléchargement (#a5fe52f), ferme #909
- **KB:** erreur peut-être plus tard silencieuse + réfétches à état d'invite redondantes (PR #899 avis) (#9a684a5)
- **KB:** défaillances de calcul d'avertissement de fichier de surface au lieu de masquer comme sain (PR #895 review) (#a0047c1)
- **KB:** TierSelectionModal ordre de crochet + registre IconLibrary (#6e5284e), ferme #915
- **KB:** Union Stored Files list avec les chemins de fichiers de la machine d'état (#898) (#8ed0bdf), ferme #886 #888 #888
- **Cartes:** render notes dans le balmard popup lorsqu'il est rempli (#f41027c), ferme #770
- **Cartes:** envoyer un nom de fichier au lieu d'un chemin complet pour supprimer le point de terminaison (#6a68bac)
- **modèles:** correct inverted appartientA-clés sur ChatMessage.session (#921) (#82f67de)
- **file d'attente:** singleton QueueService pour arrêter la fuite de connexion ioredis (#ba53702), ferme #872
- **RAG:** ajouter le bouton de démarrage dans kb modal et assurez-vous que la stratégie de redémarrage existe (#700) (#2d8a02f)
- **RAG:** ancrer continuation-lot premier progrès vers le cadre global de fichier (#889) (#f304d80)
- **RAG:** Les lots de continuation de pas lors de l'intégration sont CPU-seulement (#a22c640)
- **RAG:** passer num_ctx et tronquer à Ollama intégrer l'appel (#763) (#7bebedc), ferme #756 #369 #670
- **RAG:** rapport ZIM progrès de l'ingestion dans l'ensemble du cadre de fichier (#d28eb9b)
- **RAG:** ingestion ZIM multi-lots unbreak (jobId dedupe) (#74cef75)
- **sécurité:** canonicaliser les noms d'hôtes pour bloquer le contournement IPv6 IMDS mappé IPv4 (#736c9bd)
- **sécurité:** correspondent aux modèles IPv6 SSRF contre les noms d'hôtes non marqués (#b3dac9b)
- **Système:** correct AMD VRAM dans la carte graphique + sonde de journal de durcissement (#d2f2172), ferme #835 #850 #208
- **Système:** correct NVIDIA VRAM dans la carte graphique (#835) (#6c799dd), ferme #804
- **Système:** Mise à jour de l'auto-guérison de l'histoireDrapeau disponible après la mise à jour pilotée par sidecar (#825) (#318276c)
- **Système:** Valid StartedAt avec repli à la queue:500 (examen PR) (#662a6c4)
- **UI:** Country Picker UX polish + fichiers stockés automatiquement (#817) (#8c06b5b), ferme #780
- **UI:** quatre correctifs pour la page Mise à jour du système (#827) (#3a2e92a)
- **UI:** améliorer la logique d'affichage de bannière de carte globale (#702) (#5517e82)
- **UI:** fichier de carte de fil supprimer la confirmation à API (#732) (#e561ce8)
- **ZIM:** préserver les corpus de Wikipédia coexistants sur le nettoyage (#884) (#5e2c599)

### Améliorations

## Version 1.31.1 - 21 avril 2026

### Caractéristiques

- feat(content): sources de bibliothèque ZIM personnalisées avec des miroirs pré-ensemencés (#593). Merci @chriscrosstalk !
- feat(content-manager): ajouter la colonne de taille de fichier triable (#698). Merci @chriscrosstalk !
- feat(ai-chat): autoriser l'annulation des téléchargements de modèles en cours (#701). Merci @chriscrosstalk !
- feat(content-updates): afficher la taille, les téléchargements de surface dans Active Downloads (#773). Merci @chriscrosstalk !
- feat(maps): téléchargements de cartes régionales via l'extrait de go-pmptiles (#780). Merci @bgauger !
- feat(maps): afficher les coordonnées de la carte sur le mouvement de la souris (#786). Merci @kennethbrewer3!
- feat(AI): réactiver l'accélération AMD GPU pour Ollama via ROCm + HSA override (#804). Merci @chriscrosstalk !
- feat(GPU): perte de passe de nomad_ollama automatique sur le démarrage d'administration (#878). Merci @chriscrosstalk !
- feat(KB): machine d'état d'ingest par fichier (phase 1 de la RFC #883) (#888). Merci @chriscrosstalk !
- feat(KB): registre de ratio pour le disque + estimations de temps (phase 1B de RFC #883) (#891). Merci @chriscrosstalk !
- feat(KB): groupe admin docs en une seule ligne dans Fichiers stockés (§9) (#892). Merci @chriscrosstalk !
- feat(KB): pilule d'état + dernière activité sur Processing File d'attente (§5/§10) (#893). Merci @chriscrosstalk !
- feat(KB): Always/Manual ingest policy toggle (§1/§4) (#894). Merci @chriscrosstalk !
- feat(KB): avertissements conditionnels A + B sur les fichiers stockés (§6) (#895). Merci @chriscrosstalk !
- feat(KB): estimation de l'encastrement de surface-disque dans le modèle à changement de niveau organisé (§1) (#897). Merci @chriscrosstalk !
- feat(KB): première invitation JIT à chat pour la politique d'ingest (phase 3 tâche 12) (#899). Merci @chriscrosstalk !
- feat(KB): étape de la politique d'IA de l'assistant (phase 3 de la tâche 13) (#900). Merci @chriscrosstalk !
- feat(KB): garde-corps modal à 50Go / 10%-free seuils (§7) (#901). Merci @chriscrosstalk !
- feat(easy-setup): diviser l'IA en sa propre étape conditionnelle (#908). Merci @chriscrosstalk !
- feat(KB): action d'ingest par fichier + indicateur d'état sur les fichiers stockés (§5) (#909). Merci @chriscrosstalk !
- feat(chat): confirmer-sur-interrupteur + one-chat-model-at-a-time application (#916). Merci @chriscrosstalk !

### Corrections de bugs

- Correction(téléchargements): téléchargements de scène sur .tmp pour empêcher Kiwix de charger des fichiers partiels (#448). Merci @artbird309!
- fix(security): fermer les éléments d'audit de sécurité 3 et 4 restants (CWE-918, CWE-209) (#552). Merci @LuisMIguelFurlanettoSousa!
- fix(ai-chat): ajouter la vérification nulle au nom du modèle (#645). Merci @hestela !
- fix(ai-chat): qwen2.5 chargement sur chaque message de chat (#649). Merci @hestela !
- fix(disk-collector): Correction de la déclaration de stockage pour les montures NFS (#686). Merci @bgauger !
- Correction(rag): ajouter le bouton de démarrage dans kb modal et s'assurer que la stratégie de redémarrage existe (#700). Merci @hestela !
- Correction(admin): ne masquez la bannière de carte globale qu'après le téléchargement (#702). Merci @Gujiassh!
- Correction(maps): fil supprimer la confirmation à API (#732). Merci @cuyua9 !
- Correction: empêcher ZIM corrompu de planter de fichier et dédupliquer les journaux de téléchargement Ollama (#741). Merci @jakeaturner !
- fix(ai): arrêter le nomad_ollama local lorsque la télécommande Ollama est configurée (#744). Merci @chriscrosstalk !
- fix(rag): réparation ZIM pipeline d'intégration (filtre de synchronisation, porte de lot, marche DOM) (#745). Merci @chriscrosstalk !
- fix(zim): accumuler sur les pages Kiwix pour empêcher l'Explorateur de contenu vide (#746). Merci @chriscrosstalk !
- fix(qdrant): désactiver la télémétrie anonyme par défaut (#747). Merci @chriscrosstalk !
- Correction (affichage de disque): gate NAS Étiquette de stockage sur le type de système de fichiers réseau (#749). Merci @bgauger !
- fix(docker): écrire /app/version.json à partir de la version build-arg (#754). Merci @chriscrosstalk !
- fix(rag): passer num_ctx et tronquer à Ollama intégrer l'appel (#763). Merci @chriscrosstalk !
- fix(api): accepter les notes, marquer_type et position sur les points de terminaison des marqueurs (#770). Merci @jrsphoto!
- Correction(install): avertissez bruyamment sur les architectures non-x86_64 avant de tirer des images (#797). Merci @chriscrosstalk !
- fix(stream): sauter la compression pour les événements envoyés par serveur (#798). Merci @chriscrosstalk !
- Correction(maps): Country Picker UX polish + fichiers stockés automatiquement (#817). Merci @chriscrosstalk !
- Correction (Système): mise à jour auto-guérison de la vicionDrapeau disponible après la mise à jour pilotée par sidecar (#825). Merci @jakeaturner !
- Correction(paramètres/mise à jour): quatre correctifs UI/UX pour la page Mise à jour du système (#827). Merci @chriscrosstalk !
- Correction (Cartes): envoyer le nom de fichier au lieu du chemin complet pour supprimer le point de terminaison (#829). Merci @bgauger !
- Correction (cartes): rendre les notes dans le balmard popup lorsqu'il est rempli (#830). Merci @chriscrosstalk !
- fix(AI): fournisseur-conscient AMD HSA override + benchmark discret-GPU détection (#832). Merci @chriscrosstalk !
- Correction (Système): corriger NVIDIA VRAM dans la carte graphique (#850). Merci @bgauger !
- Correction(Téléchargements): traiter le contenu-type manquant comme octet-stream (#859). Merci @bgauger !
- fix(AI): préserver l'étiquette de sumver dans DB sur les mises à jour AMD Ollama (#868). Merci @chriscrosstalk !
- fix(AI): réécrire la requête RAG lors du premier suivi de chat (#869). Merci @chriscrosstalk !
- Correction(RAG): unbreak multi-lot ZIM ingestion (jobId dedupe) (#872). Merci @chriscrosstalk !
- fix(RAG): pace continuation batchs lors de l'intégration est CPU-only (#873). Merci @chriscrosstalk !
- Correction(queue): singleton QueueService pour arrêter la fuite de connexion ioredis (#877). Merci @chriscrosstalk !
- Correction (Système): corriger AMD VRAM dans la carte graphique + la sonde de journal de durcisseur (#879). Merci @chriscrosstalk !
- fix(RAG): rapport ZIM ingestion progress dans le cadre global du fichier (#880). Merci @chriscrosstalk !
- fix(KB): ajouter des options de réintégration et de réinitialisation et de reconstruction pour corriger les encastrements cassés (#886). Merci @jakeaturner !
- fix(ZIM): préserver les corpus de Wikipédia coexistants sur le nettoyage (#887). Merci @chriscrosstalk !
- fix(RAG): ancrage continuation-batch progression initiale au cadre global-fichier (#889). Merci @chriscrosstalk !
- fix(AI): pré-cap intégré entrée + log fallback raison (#890). Merci @chriscrosstalk !
- fix(KB): supprimer le bouton de rafraîchissement redondant de Processing File d'attente (#896). Merci @chriscrosstalk !
- fix(KB): union Liste de fichiers stockés avec chemins d'accès de fichier de machine d'état (#898). Merci @chriscrosstalk !
- Correction (KB): écran vierge sur panneau ouvert + infobulles sur les boutons d'action en bloc (#907). Merci @chriscrosstalk !
- Correction(KB): TierSelectionModal ordre de crochet + registre IconLibrary (#917). Merci @chriscrosstalk !
- Correction(contenu): afficher le niveau sélectionné sur les cartes pendant que les téléchargements sont en vol (#918). Merci @chriscrosstalk !
- fix(KB): respect Politique d'ingest manuel sur l'envoi post-téléchargement (#919). Merci @chriscrosstalk !
- Correction (AI): améliorer la validation à distance d'Ollama url pour empêcher SSRF vuln (#920). Merci @jakeaturner !
- fix(modeles): correct inverted appartientA-t-t-t-t-il des clés sur ChatMessage.session (#921). Merci @jakeaturner !

### Améliorations

- docs: ajouter la page d'extensions de communauté avec les manuels de champ + W3Schools packs (#753). Merci @chriscrosstalk !
- docs: ajouter la référence API de marqueur de carte (#783). Merci @kennethbrewer3!
- docs: nécessitent un problème lié pour les relations publiques non triviales (#799). Merci @chriscrosstalk !
- docs(map): notes mises à jour sur la carte pin api (#803). Merci @kennethbrewer3!
- docs: lien vers le nouveau guide d'installation WSL2 de README et FAQ (#811). Merci @chriscrosstalk !
- build(deps): bump picomatch dans /admin (#544). Merci @dependabot\[bot]!
- build (dapps): bump lodash de 4.17.23 à 4.18.1 in /admin (#643). Merci @dependabot\[bot]!
- build(deps-dev): bump vite de 6.4.1 à 6.4.2 in /admin (#677). Merci @dependabot\[bot]!
- build(deps): axios de bossage de 1.13.5 à 1.15.0 in /admin (#708). Merci @dependabot\[bot]!
- build(deps): bump @adonisjs/http-server de 7.8.0 à 7.8.1 dans /admin (#724). Merci @dependabot\[bot]!
- build(deps): bump follow-redirects de 1.15.11 à 1.16.0 in /admin (#729). Merci @dependabot\[bot]!
- build(deps): bump protocol-buffers-schema de 3.6.0 à 3.6.1 in /admin (#736). Merci @dependabot\[bot]!
- build(deps): bump protobufjs de 7.5.4 à 7.5.5 in /admin (#737). Merci @dependabot\[bot]!

## Version 1.31.1 - 21 avril 2026

### Caractéristiques

- **Assistant IA**: Ajout d'une meilleure prise en charge de l'accélération du GPU AMD pour Ollama via ROCm + HSA override. Merci @chriscrosstalk pour la contribution!
- **Explorateur de contenus**: Ajout d'un support pour les sources de bibliothèque ZIM personnalisées et les miroirs de bibliothèque ZIM pré-ensemencés en plus de la bibliothèque Kiwix par défaut. Merci @chriscrosstalk pour la contribution!
- **Gestionnaire de contenus**: Les tailles et les téléchargements de mise à jour de contenu sont maintenant correctement affichés dans les téléchargements actifs avec des barres de progression et des noms amicaux. Merci @chriscrosstalk pour la contribution!
- **Cartes**: Les régions de carte peuvent maintenant être extraites et téléchargées localement à partir de PMTiles pour éviter la nécessité d'un téléchargement de carte global complet pour les utilisateurs qui ne veulent que des régions spécifiques. Merci @bgauger pour la contribution!

### Corrections de bugs

- **API**: La compression est maintenant ignorée pour les réponses Server-Sent Events (SSE) pour prévenir les problèmes avec les points de terminaison en streaming. Merci @chriscrosstalk pour le correctif!
- **Cartes**: Correction de problèmes de logique avec l'affichage global de la bannière de carte. Merci @Gujiassh pour le correctif!
- **Cartes**: Le fichier de carte sélectionné est maintenant correctement supprimé après confirmation de l'action dans l'interface utilisateur. Merci @cuyua9 pour le correctif!
- **Système**: Correction d'un problème où la mise à jour en attente pouvait encore être indiquée dans l'interface utilisateur même après la mise à jour du système avec succès. Merci @jakeaturner pour le correctif!

### Améliorations

- **Construire**: L'image du Centre de commande utilise maintenant la version de construction de la version pour écrire `app/version.json` avec la version actuelle pour le suivi et le débogage améliorés de la version, même dans les environnements RC. Merci @chriscrosstalk pour la contribution!
- **Gestionnaire de contenus**: Ajout d'une colonne de taille de fichier triable à la table de fichiers ZIM dans le Gestionnaire de contenu pour une gestion plus facile de l'espace de stockage. Merci @chriscrosstalk pour la contribution!
- **Dépendances**: Toutes les dépendances package.json ont été épinglées à des versions spécifiques pour assurer la stabilité et réduire le risque de changements de rupture inattendus / compromis de chaîne d'approvisionnement des paquets en amont. Merci @jakeaturner pour la contribution!
- **Dépendances**: Mise à jour de diverses dépendances pour combler les failles de sécurité et améliorer la stabilité
- **Documentation**: Mettre à jour CONTIRBUTING.md pour exiger l'ouverture d'un problème avant de soumettre un RP pour les changements non triviaux afin d'assurer une discussion et un examen appropriés des changements proposés. Merci @chriscrosstalk pour la contribution!
- **Documentation**: Ajout des points de terminaison des marqueurs de carte à la documentation de référence API. Merci @kennethbrewer3 pour la contribution!
- **Documentation**: Ajout d'un lien vers le nouveau guide d'installation WSL2 dans le README et la FAQ. Merci @chriscrosstalk pour la contribution!
- **Installer**: Le script d'installation avertit maintenant bruyamment si l'utilisateur tente de s'installer sur une plate-forme non x86_64/amd64 pour empêcher les installations non prises en charge et les problèmes potentiels. Merci @chriscrosstalk pour la contribution!
- **Cartes**: Les points de terminaison API de cartes acceptent et valident désormais correctement les notes, le type de marqueur et les données de position pour les marqueurs de carte et les persistent dans la base de données pour la récupération dans l'interface utilisateur. Merci @jrsphoto pour la contribution!
- **Cartes**: Les coordonnées actuelles du pointeur de souris peuvent maintenant être affichées dans la visionneuse de la carte pour faciliter la navigation et l'exploration. Merci @kennethbrewer3 pour la contribution!
- **RAG**: NOMAD maintenant correctement passé `num_ctx` et la troncation vers le point d'extrémité d'intégration d'Ollama pour s'assurer que la fenêtre contextuelle du modèle est mieux utilisée pour les intégrations. Merci @chriscrosstalk pour la contribution!
- **RAG**: Ajout d'un bouton de démarrage manuel pour Qdrant et d'un mécanisme d'auto-guérison pour la politique de redémarrage de Qdrant afin de s'assurer que la base de données vectorielle fonctionne correctement pour les tâches d'intégration et de récupération. Merci @hestela pour la contribution!

## Version 1.31.1 - 21 avril 2026

### Caractéristiques

### Corrections de bugs

- **Assistant IA**: Les téléchargements de modèles en cours peuvent maintenant être annulés correctement et l'interface utilisateur de progression correspond maintenant à celle des téléchargements de fichiers. Merci @chriscrosstalk pour la contribution!
- **Assistant IA**: Correction d'un problème où la page de paramètres d'assistant d'IA pouvait se bloquer si un objet modèle n'avait pas de propriété de détails. Merci @hestela pour le correctif!
- **Assistant IA**: Correction d'un problème avec des fichiers non-embarquables faisant l'objet d'une file d'attente pour l'intégration et l'inondation des journaux avec des erreurs. Merci @sbruschke pour le rapport de bug et @chriscrosstalk pour le correctif!
- **Assistant IA**: Correction d'un problème avec l'intégration de lots ZIM en utilisant le mauvais nombre de lots et provoquant le saut des lots restants. Merci @sbruschke pour le rapport de bug et @chriscrosstalk pour le correctif!
- **Assistant IA**: Correction d'un problème avec l'extraction de contenu ZIM n'extrayant que les enfants de premier niveau du corps de l'article et manquant ainsi beaucoup de contenu. Merci @sbruschke pour le rapport de bug et @chriscrosstalk pour le correctif!
- **Collecteur de disque**: Amélioration du reporting pour les statistiques de montage NFS et l'affichage dans l'interface utilisateur. Merci @bgauger et @bravosierra99 pour la contribution!
- **Téléchargements**: Les téléchargements sont maintenant mis en scène dans des fichiers .tmp et renommés atomiquement à l'achèvement pour éviter les problèmes avec les fichiers incomplets / corrompus. Merci @artbird309 pour la contribution!
- **Téléchargements**: Suppression d'un auditeur d'erreur en double et amélioration de la stabilité lors de la gestion des requêtes Range pour les téléchargements de fichiers. Merci @jakeaturner pour la contribution!
- **Téléchargements**: Ajout d'une gestion améliorée pour les téléchargements de fichiers ZIM corrompus et supprimé les journaux de téléchargement en double Ollama. Merci @aegisman pour la contribution!
- **Sécurité**: Fermé une vulnérabilité SSRF potentielle dans la fonctionnalité de téléchargement de fichier de carte en implémentant une validation d'URL plus stricte et en bloquant les plages IP privées. Merci @LuisMIguelFurlanettoSousa pour la solution!
- **Sécurité**: Messages d'erreur désinfectés du backend pour empêcher la divulgation potentielle d'informations. Merci @LuisMIguelFurlanettoSousa pour la solution!
- **UI**: Correction d'un problème de pagination brisée pour l'Explorateur de contenu qui pouvait amener certains utilisateurs à voir un message "Sans enregistrements trouvés" indéfiniment. Merci @johno10661 pour le rapport de bug et @chriscrosstalk pour le correctif!
- **UI**: Correction d'un problème où tous les périphériques de stockage pouvaient signaler comme "NAS Storage" quel que soit le type réel. Merci @bgauger pour le correctif!

### Améliorations

- **Assistant IA**: Utilise maintenant le modèle actuellement chargé pour la réécriture de requêtes et la génération de titre de chat pour améliorer les performances et la cohérence. Merci @hestela pour la contribution!
- **Assistant IA**Lorsque une URL Ollama distante est configurée, le Centre de commande va maintenant essayer d'arrêter le conteneur local Ollama de NOMAD pour libérer des ressources et éviter la confusion. Merci @chriscrosstalk pour la contribution!
- **Dépendances**: Mise à jour de diverses dépendances pour combler les failles de sécurité et améliorer la stabilité
- **Documentation**: Ajout d'une page "Community Add-Ons" à la documentation pour mettre en évidence certaines des contributions communautaires étonnantes qui ont été faites depuis le lancement. Merci @chriscrosstalk pour la contribution!
- **La vie privée**: Ajout de la variable d'environnement appropriée pour désactiver la télémétrie pour le conteneur Qdrant. Notez que cela ne prendra effet que sur les nouvelles installations de si le conteneur Qdrant est réinstallé sous force sur les installations existantes. Merci @berkdamerc pour la trouvaille et @chriscrosstalk pour la contribution!

## Version 1.31.0 - 3 avril 2026

### Caractéristiques

- **Assistant IA**: Ajout d'une prise en charge pour les hôtes compatibles OpenAI distants (par ex. Ollama, LM Studio, etc.) pour prendre en charge les modèles en cours d'exécution sur le matériel séparé de l'hôte du centre de commande. Merci @hestela pour la contribution!
- **Assistant IA**: Support Ollama Cloud handicapé (non compatible avec l'architecture de NOMAD) et support supplémentaire pour flash_attn pour améliorer les performances des modèles compatibles. Merci @hestela pour la contribution!
- **Bibliothèque d'information (Kiwix)**: Le conteneur Kiwix utilise maintenant une approche de fichier de bibliothèque XML au lieu d'une approche basée sur le globe pour informer le conteneur Kiwix des fichiers ZIM disponibles. Cela permet une gestion beaucoup plus robuste des fichiers ZIM et évite les problèmes avec le conteneur qui ne démarre pas en raison de la présence de fichiers ZIM incomplets/corrompus dans le répertoire de stockage. Merci @jakeaturner pour la contribution!
- **RAG**: Ajout du support pour l'intégration de fichiers EPUB dans la base de connaissances. Merci @arn6694 pour la contribution!
- **RAG**: Ajout de la prise en charge de plusieurs téléchargements de fichiers (<=5, 100mb chacun) à la Base de connaissances. Merci @jakeaturner pour la contribution!
- **Cartes**: Ajout du support pour les marqueurs de localisation personnalisables sur la carte avec la persistance de la base de données. Merci @chriscrosstalk pour la contribution!
- **Cartes**: Le fichier cartographique global peut maintenant être téléchargé directement à partir de PMTiles pour les utilisateurs qui veulent à la carte complète et / ou les régions en dehors des États-Unis qui n'ont pas encore été ajoutés aux collections organisées. Merci @bgauger pour la contribution!
- **Cartes**: Ajout d'une barre d'échelle à la visionneuse de la carte avec des options impériales et métriques. Merci @chriscrosstalk pour la contribution!
- **Téléchargements**: Ajout du support/améliorations pour des progrès riches, des noms amicaux, des mises à jour d'annulation et de statut en direct pour les téléchargements actifs dans l'interface utilisateur. Merci @chriscrosstalk pour la contribution!
- **UI**: Converti tous les PNG en WEBP pour une taille d'image réduite et des performances améliorées. Merci @hestela pour la contribution!
- **UI**: Ajout d'une section Modèles installés aux paramètres de l'assistant d'IA. Merci @chriscrosstalk pour la contribution!

### Corrections de bugs

- **Cartes**: Les points de terminaison de l'API de cartes vérifient maintenant correctement "X-Forwarded-Proto" pour prendre en charge les scénarios où le Centre de commande est derrière un proxy inverse qui met fin à TLS. Merci @davidgross pour le correctif!
- **Cartes**: Correction d'un problème où les points de terminaison API de carte pouvaient échouer avec une erreur interne si un nom d'hôte était utilisé pour accéder au Centre de commande au lieu d'une adresse IP ou d'un hôte local. Merci @jakeaturner pour le correctif!
- **File d'attente**: Augmentation de la serrure BullMQ Durée pour empêcher les emplois d'être tués prématurément sur des systèmes plus lents. Merci @bgauger pour la contribution!
- **File d'attente**: Ajout d'une meilleure gestion pour les téléchargements très importants et les annulations initées par l'utilisateur. Merci @bgauger pour la contribution!
- **Installer**: Le script d'installation vérifie maintenant la présence de gpg (requis pour l'installation de la boîte à outils NVIDIA) et tente automatiquement de l'installer s'il est manquant. Merci @chriscrosstalk pour le correctif!
- **Sécurité**: Ajout de la validation de la clé aux paramètres read API endpoint. Merci @LuisMIguelFurlanettoSousa pour la solution!
- **Sécurité**: Amélioration de la logique de validation des URL pour les téléchargements ZIM pour éviter les vulnérabilités SSRF. Merci @sebastiondev pour le correctif!
- **UI**: Correction de la hauteur d'alimentation de l'activité dans Easy Setup et ajout du défilement automatique au dernier message lors de l'installation. Merci @chriscrosstalk pour la contribution!

### Améliorations

- **Dépendances**: Mise à jour de diverses dépendances pour combler les failles de sécurité et améliorer la stabilité
- **Docker**: NOMAD ajoute désormais 'com.docker.compose.project': 'project-nomad-managed' et 'io.project-nomad.managed': 'true' labels à tous les conteneurs installés via le Centre de commande pour améliorer la compatibilité avec d'autres outils de gestion Docker et faciliter l'identification et la gestion des conteneurs NOMAD. Merci @techyogi pour la contribution!
- **Documentation**: Ajout d'une référence API simple pour les utilisateurs et les développeurs de puissance. Merci @hestela pour la contribution!
- **Documentation**: Reformaté la commande Quick Install en plusieurs lignes pour une meilleure lisibilité dans le README. Merci @samsara-02 pour la contribution!
- **Documentation**: Mise à jour des guides CONTRIBUTION et FAQ avec les dernières informations et clarifié certaines questions courantes. Merci @jakeaturner pour la contribution!
- **Ops**: Bossé GitHub Actions à leurs dernières versions. Merci @salmanmkc pour la contribution!
- **Performances**: Réduisez la taille du paquet de l'interface utilisateur du centre de commande de manière significative en optimisant les dépendances et les arbres, ce qui entraîne des temps de chargement plus rapides et une expérience utilisateur plus rapide. Merci @jakeaturner pour la contribution!
- **Performances**: Mise en œuvre de la compression gzip par défaut pour toutes les routes enregistrées HTTP à partir du backend du Centre de commande pour améliorer encore les performances, en particulier sur les connexions plus lentes. La variable d'environnement DISABLE_COMPRESSION peut être utilisée pour désactiver cette fonctionnalité si nécessaire. Merci @jakeaturner pour la contribution!
- **Performances**: Ajout d'une mise en cache lumineuse de certaines interactions de socket Docker et d'une résolution de nom personnalisée d'AI Assistant pour améliorer les performances et réduire les appels redondants vers l'API Docker. Merci @jakeaturner pour la contribution!
- **Performances**: Passé aux appels de navigation du routeur Inertia, le cas échéant, pour tirer parti des optimisations intégrées de mise en cache et de performance d'Inertia pour une expérience utilisateur plus fluide. Merci @jakeaturner pour la contribution!

## Version 1.30.3 - 25 mars 2026

### Caractéristiques

### Corrections de bugs

- **Tests de performance**: Correction d'un problème où les scores CPU et Disk Write pouvaient être affichés comme 0 si les valeurs mesurées étaient inférieures à la moitié du repère. Merci @bortlesboat pour le correctif!
- **Gestionnaire de contenus**: Correction d'une méthode client API manquante qui faisait échouer les suppressions de fichiers ZIM. Merci @LuisMIguelFurlanettoSousa pour la solution!
- **Installer**: Correction d'un problème où le script d'installation pouvait signaler incorrectement l'exécution de Docker NVIDIA comme manquant. Merci @brenex pour le correctif!
- **Soutenir le projet**: Correction d'un lien cassé vers Rogue Support. Merci @chriscrosstalk pour le correctif!

### Améliorations

- **Assistant IA**: Amélioration du rapport d'erreur et de la gestion pour les téléchargements de modèles. Merci @chriscrosstalk pour la contribution!
- **Assistant IA**: A encastré la version par défaut d'Ollama installée sur v0.18.1 pour tirer parti des dernières améliorations de performance et corrections de bugs.
- **Applications**: Amélioration de la déclaration et de la gestion des erreurs pour les pannes d'installation de service. Merci @trek-e pour la contribution!
- **Collections**: Mise à jour de divers liens de collection organisés vers leurs dernières versions. Merci @builder555 pour la contribution!
- **Cyberchef**: A bousculé la version par défaut de CyberChef installée sur v10.22.1 pour tirer parti des dernières fonctionnalités et corrections de bugs.
- **Documentation**: Ajout d'un lien vers le guide d'installation étape par étape et le tutoriel vidéo. Merci @chriscrosstalk pour la contribution!
- **Installer**: Augmentation de la limite des tentatives pour le service MySQL dans Docker Compose pour améliorer la stabilité lors de l'installation sur les systèmes avec des performances plus lentes. Merci @dx4956 pour la contribution!
- **Installer**: Correction d'un problème où les données obsolètes pouvaient causer une inadéquation des informations d'identification dans MySQL lors de la réinstallation. Merci @chriscrosstalk pour le correctif!

## Version 1.30.0 - 20 mars 2026

### Caractéristiques

- **Ops de nuit**: Ajout de notre fonctionnalité la plus demandée — un thème en mode sombre pour l'interface du Centre de commande! Activez-le depuis le pied de page et profitez du nouveau look élégant lors de vos missions de fin de soirée. Merci @chriscrosstalk pour la contribution!
- **Informations de diagnostic**: Ajout d'un nouveau modal "Debug Info" accessible depuis le pied de page qui fournit des informations détaillées sur le système et l'application pour le dépannage et le support. Merci @chriscrosstalk pour la contribution!
- **Soutenir le projet**: Ajout d'une nouvelle page "Supporter le projet" dans des paramètres avec des liens vers les ressources communautaires, les options de don et les moyens de contribuer.
- **Installer**: L'image principale NOMAD est maintenant entièrement autonome et directement utilisable avec Docker Compose, permettant des installations plus flexibles et personnalisables sans s'appuyer sur des scripts externes. L'image reste entièrement rétrocompatible avec les installations existantes, et le script d'installation a été mis à jour pour refléter le processus de déploiement plus simple.

### Corrections de bugs

- **Paramètres**: L'affichage d'utilisation de stockage préfère maintenant les périphériques de bloc réel plutôt que les tempfs. Merci @Bortlesboat pour le correctif!
- **Paramètres**: Correction d'un problème où la correspondance du périphérique et la logique de déduplication d'entrée de montage pouvaient causer des rapports d'utilisation de stockage incorrects et des périphériques manquants dans les affichages de stockage.
- **Cartes**: La page Maps respecte désormais le protocole de requête (http vs https) pour assurer le chargement correct des tuiles de la carte. Merci @davidgross pour le rapport de bug!
- **Base de connaissances**: Correction d'un problème où les travaux d'intégration de fichiers pouvaient provoquer une tempête de réessayer si le service Ollama n'était pas disponible. Merci @skyam25 pour le rapport de bug!
- **Collections organisées**: Correction de quelques liens cassés dans les définitions de collections organisées (maps et fichiers ZIM) qui faisaient que certaines ressources ne parvenaient pas à télécharger.
- **Configuration guidée**: Correction d'un problème où le badge "Start Here" persistait même après avoir visité l'Assistant Easy Setup pour la première fois. Merci @chriscrosstalk pour le correctif!
- **UI**: Correction d'un problème où le spinner de chargement pouvait sembler étrange dans certains cas d'utilisation.
- **Mises à jour du système**: Correction d'un problème où la bannière de mise à jour persistait même après la mise à jour du système avec succès. Merci @chriscrosstalk pour le correctif!
- **Performances**: Divers petits correctifs de fuite de mémoire et améliorations de performance à travers l'interface utilisateur pour assurer une expérience plus fluide.

### Améliorations

- **Ollama**: Amélioration de la logique de détection de GPU pour s'assurer que la dernière configuration GPU est toujours passée au conteneur Ollama lors de la mise à jour
- **Ollama**: Le type GPU détecté est maintenant persistant dans la base de données pour une configuration et un dépannage plus fiables à travers les mises à jour et les redémarrages. Merci @chriscrosstalk pour la contribution!
- **Téléchargements**: Les utilisateurs peuvent désormais rejeter les notifications de téléchargement échouées pour réduire l'encombrement dans l'interface utilisateur. Merci @chriscrosstalk pour la contribution!
- **Journal**: Modification du niveau de journal par défaut en "info" pour réduire le bruit et se concentrer sur les messages importants. Merci @traxeon pour la suggestion!
- **Journal**: L'enregistreur interne de NOMAD crée maintenant son propre répertoire de journaux au démarrage s'il n'existe pas déjà pour éviter les erreurs sur les installations fraîches où le répertoire de journaux n'a pas encore été créé.
- **Dozzle**: L'accès shell Dozzle et les actions de conteneur sont désormais désactivées par défaut. Merci @traxeon pour la recommandation!
- **MySQL et Redis**: Suppression de l'exposition de port à l'hôte par défaut pour une sécurité améliorée. Les ports peuvent toujours être exposés manuellement si nécessaire. Merci @traxeon pour la recommandation!
- **Dépendances**: Diverses mises à jour de dépendance pour combler les failles de sécurité et améliorer la stabilité
- **Scripts d'utilité**: Ajout d'une vérification pour la version Docker Compose (v2) attendue dans tous les scripts utilitaires pour fournir des messages d'erreur et des conseils plus clairs si l'environnement n'est pas configuré correctement.
- **Scripts d'utilité**: Ajout d'un avertissement supplémentaire au script d'installation pour informer sur l'écrasement potentiel des configurations personnalisées existantes et l'importance de la sartisation des données avant d'exécuter à nouveau le script d'installation.
- **Documentation**: Instructions d'installation mises à jour pour refléter la nouvelle option de déploiement manuel via Docker Compose sans le script d'installation.

## Version 1.29.0 - 11 mars 2026

### Caractéristiques

- **Assistant IA**: Ajout d'un meilleur guide de l'utilisateur pour résoudre les problèmes de transmission de GPU
- **Assistant IA**: Le dernier modèle utilisé est maintenant automatiquement sélectionné lorsqu'un nouveau chat est démarré
- **Paramètres**: NOMAD effectue désormais automatiquement des vérifications nocturnes pour les mises à jour d'application disponibles, et les utilisateurs peuvent sélectionner et appliquer des mises à jour à partir de la page Applications dans Paramètres

### Corrections de bugs

- **Paramètres**: Correction d'un problème où la page de paramètres de l'assistant d'IA serait affichée dans la navigation, même si l'assistant d'IA n'était pas installé, causant ainsi 404 erreurs lorsqu'il était cliqué
- **Sécurité**: Interruption de chemin et atténuations SSRF
- **Assistant IA**: Correction d'un problème qui causait des échecs intermittents enregistrant les titres de session de chat

### Améliorations

- **Assistant IA**: Améliorations étendues des performances et amélioration de l'intelligence/utilisation du contexte RAG

## Version 1.28.0 - 5 mars 2026

### Caractéristiques

- **RAG**: Ajout d'une prise en charge pour visualiser les tâches d'intégration active dans la file d'attente de traitement et d'améliorer le suivi de la progression des tâches avec des mises à jour d'état plus granulaires
- **RAG**: Ajout d'un support pour la suppression des documents de la base de connaissances (suppression de Qdrant et stockage local)

### Corrections de bugs

- **Installer**: Correction du script d'installation de l'url cassée et mis à jour pour inviter à l'acceptation de la licence Apache 2.0
- **Documentation**: Mise à jour des mentions légales pour refléter la licence Apache 2.0 et l'attribution de Qdrant ajoutée
- **Dépendances**: Diverses mises à jour de dépendance mineures pour fermer les failles de sécurité

### Améliorations

- **Licence**: Ajout du fichier de licence Apache 2.0 au dépôt pour plus de clarté et de conformité légale

## Version 1.27.0 - 4 mars 2026

### Caractéristiques

- **Paramètres**: Ajout du support de la pagination pour la liste de modèles d'Ollama
- **Canal d'accès anticipé**: Permet aux utilisateurs de choisir de recevoir des builds d'accès anticipé avec les dernières fonctionnalités et améliorations avant qu'ils n'atteignent les versions stables

### Corrections de bugs

### Améliorations

- **Assistant IA**: Amélioration des performances de chat en optimisant la réécriture de requête et la logique de streaming de réponse
- **CI/CD**: Mise à jour des workflows de version pour prendre en charge les versions candidates
- **magasin KV**: Amélioration de la sécurité de type dans la mise en œuvre du magasin KV

## Version 1.26.0 - 19 février 2026

### Caractéristiques

- **Assistant IA**: Ajout d'assistance pour afficher le flux de raisonnement pour les modèles avec des capacités de réflexion
- **Assistant IA**: Ajout d'une assistance pour le streaming de réponse pour l'amélioration de l'UX

### Corrections de bugs

### Améliorations

## Version 1.25.2 - 18 février 2026

### Caractéristiques

### Corrections de bugs

- **Assistant IA**: Correction d'une erreur de suggestions de chat lorsqu'aucun modèle Ollama n'est installé
- **Assistant IA**: Amélioration de la logique de détection discrète de GPU
- **UI**: Liens hérités vers /docs et /knowledge-base maintenant gracieusement rediriger vers les pages correctes au lieu d'afficher 404 erreurs

### Améliorations

- **Assistant IA**: Les suggestions de chat sont maintenant désactivées par défaut pour éviter d'écraser les configurations matérielles plus petites

## Version 1.25.1 - 12 février 2026

### Caractéristiques

### Corrections de bugs

- **Paramètres**: Correction d'un problème de cache obsolète potentiel lors de la vérification des mises à jour du système
- **Paramètres**: Améliorer les conseils de l'utilisateur lors des mises à jour du système

### Améliorations

## Version 1.25.0 - 12 février 2026

### Caractéristiques

- **Collections**: Réforme complète de la gestion de la collection avec des manifestes dynamiques, le suivi de base de données des ressources installées et l'interface utilisateur améliorée pour la gestion des fichiers ZIM et des ressources cartographiques
- **Collections**: Ajout d'un support pour vérifier si des versions plus récentes de ressources installées sont disponibles sur la base de données manifestes

### Corrections de bugs

- **Tests de performance**: Amélioration de la gestion des erreurs et de la propagation du code d'état pour un meilleur retour d'utilisateur sur les pannes de soumission
- **Tests de performance**: Correction d'une condition de course dans la gestion du conteneur sysbench qui pourrait conduire à des échecs de test de référence

### Améliorations

---

## Version 1.24.0 - 10 février 2026

### 🚀 Caractéristiques

- **Assistant IA**: Réécriture de requête pour une récupération de contexte améliorée
- **Assistant IA**: Permettre l'analyse manuelle et la resynce de la base de connaissances
- **Assistant IA**: Interface utilisateur intégrée de la base de connaissances dans la page Assistant d'IA
- **Assistant IA**: Contenu ZIM intégré dans la Base de connaissances
- **Téléchargements**: Modèle d'affichage téléchargement progress
- **Système**: Cron job pour les vérifications automatiques de mise à jour
- **Documentation**: Rendu de documentation poli avec des composants sur le thème du désert

### 🐛 Corrections de bugs

- **Assistant IA**: Améliorations de performance de la suggestion de chat
- **Assistant IA**: Rendu de code en ligne
- **GPU**: Détecter les GPU NVIDIA via l’API Docker au lieu de lspic
- **Installer**: Améliorer la configuration du GPU Docker
- **Système**: Calcul correct du pourcentage d'utilisation de la mémoire
- **Système**: Afficher l'hôte OS, le nom d'hôte et le GPU au lieu des informations de conteneur
- **Collections**: Corriger les noms de fichiers ZIM devdocs dans l'informatique et la technologie
- **Téléchargements**: Trier les téléchargements actifs par progression descendante
- **Documentation**: Correction de plusieurs liens internes cassés et références d'itinéraire

### ✨ Améliorations

- **Documentation**: Documentation intégrée révisée avec commande de barre latérale
- **Documentation**: Mise à jour de README avec vue d'ensemble des fonctionnalités
- **GPU**: Utilitaire réutilisable pour l'exécution de nvidia-smi

---

## Version 1.23.0 - 5 février 2026

### 🚀 Caractéristiques

- **Cartes**: Maps utilise désormais la pleine page par défaut
- **Navigation**: Ajout du lien "Retour à la maison" sur les pages d'en-tête standard
- **IA**: Recherche floue pour la liste des modèles d'IA
- **UI**: Amélioration du rapport d'erreur global avec les notifications des utilisateurs

### 🐛 Corrections de bugs

- **Kiwix**: Évitez de redémarrer le conteneur Kiwix pendant que les tâches de téléchargement sont en cours d'exécution
- **Docker**: Assurez-vous que les conteneurs sont complètement retirés lors de l'installation de service en panne
- **IA**: Filtrer les modèles cloud à partir de la liste des modèles de réponse et de repli API
- **Collections organisées**: Empêcher les ressources en double lors de la récupération des dernières collections
- **Niveaux de contenu**: Retravailler le système de niveau pour déterminer dynamiquement l'état d'installation du côté du serveur

### ✨ Améliorations

- **Documentation**: Ajout d'un joli rendu pour les tables de marquage dans les pages de documentation

---

## Version 1.22.0 - 4 février 2026

### 🚀 Caractéristiques

- **Gestionnaire de contenus**: Afficher les noms amicaux (Titre et Résumé) au lieu de noms de fichiers bruts pour les fichiers ZIM
- **Base de connaissances de l'IA**: Ajouter automatiquement la documentation NOMAD à la Base de connaissances AI sur l'installation

### 🐛 Corrections de bugs

- **Cartes**: Assurez-vous que les URL des ressources de la carte se résolvent correctement lorsque vous accédez via le nom d'hôte
- **Wikipédia**: Empêcher le chargement de la superposition de spinner pendant le téléchargement
- **Configuration guidée**: Faites défiler vers le haut lorsque vous naviguez entre les étapes de l'assistant
- **Le chat AI**: Masquer le bouton et la page de chat à moins que AI Assistant ne soit réellement installé
- **Paramètres**: Renommer la colonne "Port" confuse en "Localisation" dans les paramètres des applications

### ✨ Améliorations

- **Ollama**: Modèle de nettoyage logique de téléchargement et amélioration du suivi des progrès

---

## Version 1.21.0 - 2 février 2026

### 🚀 Caractéristiques

- **Assistant IA**: Interface de chat IA intégrée — plus d'application WebUI ouverte séparée
- **Base de connaissances**: Téléchargement de documents avec OCR, recherche sémantique (RAG) et réponses contextuelles de l'IA via Qdrant
- **Wikipédia Sélecteur**: Gestion de contenu Wikipedia dédiée avec une sélection de paquets intelligent
- **Soutien du GPU**: NVIDIA et AMD GPU passthrough pour Ollama (inférence d'IA plus rapide)

### 🐛 Corrections de bugs

- **Tests de performance**: Détecter Intel Arc Graphics sur les processeurs Core Ultra
- **Configuration guidée**: Supprimer le benchmark système intégré de l'assistant (maintenant dans Paramètres)
- **Icônes**: Passez à Tabler Icônes pour la cohérence, supprimez les bibliothèques d'icônes inutilisées
- **Docker**: Évitez de ré-tirer les images existantes pendant l'installation

### ✨ Améliorations

- **Ollama**: Liste de retombées des modèles recommandés si api.projectnomad.us est en panne
- **Ollama/Qdrant**: Les images Docker épinglées à des versions spécifiques pour la stabilité
- **README**: Ajout de liens de site web et de communauté
- Suppression de l'interface Web ouverte en tant qu'application installable séparée (remplacée par le chat IA intégré)

---

## Version 1.20.0 - 28 janvier 2026

### 🚀 Caractéristiques

- **Collections**: Catégories élargies avec plus de contenu et amélioration de la sélection de niveau modal UX
- **Légal**: Avis juridiques étendus et déplacés vers le bas de la barre latérale Paramètres

### 🐛 Corrections de bugs

- **Installer**: Gérer la dépendance à la boucle manquante sur les installations fraîches d'Ubuntu
- **Migrations**: Correction de l'ordre d'horodatage pour la migration builder_tag

---

## Version 1.19.0 - 28 janvier 2026

### 🚀 Caractéristiques

- **Tests de performance**: Builder Tag system — revendique des points de classement avec des étiquettes sur le thème NOMAD (par exemple, "Tactical-Llama-1234")
- **Tests de performance**: Référence complète avec l'IA maintenant requise pour le partage communautaire; soumissions signées par le HMAC
- **Notes de version**: Abonnez-vous pour publier des notes par email
- **Cartes**: Téléchargez automatiquement les ressources de la carte de base si manquante

### 🐛 Corrections de bugs

- **Système Info**: Retombé sur fsSize lorsque le tableau de disques est vide (répertoire "Aucun périphérique de stockage détecté")

---

## Version 1.18.0 - 24 janvier 2026

### 🚀 Caractéristiques

- **Collections**: Amélioration des collections organisées UX avec sélection de niveau persistant et flux de travail soumis à confirmer

### 🐛 Corrections de bugs

- **Tests de performance**: Correction de la connectivité de référence de l'IA (le conteneur Docker ne pouvait pas atteindre Ollama sur l'hôte)
- **Ouvrir WebUI**: Correction de l'indicateur d'état d'installation

### ✨ Améliorations

- **Docker**: Utilitaire de résolution d'URL de conteneur et améliorations de réseau

---

## Version 1.17.0 - 23 janvier 2026

### 🚀 Caractéristiques

- **Référence du système**: Notation matérielle avec NOMAD Score, jauges circulaires et soumission de classement communautaire
- **Tableau de bord**: Noms d'applications conviviaux avec "Powered by" attribution open source
- **Paramètres**: Mise à jour de la nomenclature et des collections de contenu échelonné ajoutées aux pages Paramètres
- **Files d'attente**: Supporter le fonctionnement de toutes les files d'attente avec une seule commande

### 🐛 Corrections de bugs

- **Configuration guidée**: Sélectionnez disque primaire valide pour barre de projection de stockage
- **Documentation**: Supprimer les liens de service cassés qui pointaient vers des itinéraires invalides
- **Notifications**: Amélioration du style
- **UI**: Supprimer l'écran d'éclaboussure
- **Cartes**: Correction de la résolution de chemin statique

---

## Version 1.16.0 - 20 janvier 2026

### 🚀 Caractéristiques

- **Applications**: Option de réinstallation de force pour les applications installées
- **Ouvrir WebUI**: Gérer les modèles Ollama directement depuis le Centre de Commande
- **Configuration guidée**: Afficher la taille du modèle d'IA sélectionné dans la barre de projection de stockage

### ✨ Améliorations

- **Catégories Organisées**: Amélioration de la récupération de GitHub
- **Construire**: Ajout du fichier dockerignore

---

## Version 1.15.0 - 19 janvier 2026

### 🚀 Caractéristiques

- **Assistant de configuration facile**: Repensé Étape 1 avec des cartes de capacité conviviales au lieu de noms d'application
- **Collections à plusieurs niveaux**: Collections de contenu de catégorie avec des niveaux essentiels, standard et complets
- **Barre de projection de stockage**: Indicateur d'utilisation du disque visuel montrant les ajouts projetés lors de l'installation facile
- **Support Windows**: Support Docker Desktop pour le développement local avec détection de plate-forme et NOMAD_STORAGE_PATH env var
- **Documentation**: Documentation complète dans l'application (accueil, démarrage, FAQ, cas d'utilisation)

### ✨ Améliorations

- **Configuration guidée**: Renommé l'étiquette de l'étape 3 de "ZIM Files" à "Contenu"
- **Notifications**: Correction du rejet automatique ne fonctionnant pas en raison d'une fermeture en vite
- Ajout de la survie et de la préparation et de l'éducation et catégories de contenu de référence

---

## Version 1.14.0 - 16 janvier 2026

### 🚀 Caractéristiques

- **Collections**: Auto-fetch dernières collections organisées de GitHub

### 🐛 Corrections de bugs

- **Docker**: Amélioration de la gestion de l'état des conteneurs

---

## Version 1.13.0 - 15 janvier 2026

### 🚀 Caractéristiques

- **Assistant de configuration facile**: Mise en œuvre initiale de l'expérience de configuration guidée pour la première fois
- **Cartes**: Amélioration des avertissements d'actifs manquants
- **Applications**: Amélioration des cartes d'application avec des icônes personnalisées

### 🐛 Corrections de bugs

- **Collections organisées**: J'ai modifié
- **Installer**: Modification du conteneur d'administration pull_policy pour toujours

---

## Version 1.12.0 - 1.12.3 - 24 décembre 2025 - 13 janvier 2026

### 🚀 Caractéristiques

- **Système**: Vérifiez l'état d'Internet sur backend avec le support d'URL de test personnalisé

### 🐛 Corrections de bugs

- **Admin**: Amélioration de la gestion de l'état d'installation de service
- **Admin**: Amélioration de la gestion des demandes d'installation en double
- **Admin**: Ressources de carte de base fixes télécharger l'URL
- **Admin**: Liaison de port fixe pour Open WebUI
- **Admin**: Amélioration des indicateurs d'utilisation de la mémoire
- **Admin**: Ajout de favicons
- **Admin**: Récipient fixe healthcheck
- **Admin**: Correction de la méthode cliente ZIM de téléchargement ZIM manquante
- **Installer**: Correction du montage et de la stabilité du fichier d'information de disque
- **Installer**: Assurez-vous que le script de mise à jour tire toujours les dernières images
- **Installer**: Utilisez la commande moderne docker composer dans le script de mise à jour
- **Installer**: Assurez-vous que le script de mise à jour est exécutable
- **Scripts**: Supprimer le fichier d'information de disque sur la désinstallation

---

## Version 1.11.0 - 1.11.1 - 24 décembre 2025

### 🚀 Caractéristiques

- **Cartes**: Collections de régions de cartes
- **Collections**: Définitions de la collection de la région de carte

### 🐛 Corrections de bugs

- **Cartes**: Correction des téléchargements de fichiers de fichiers de mtiles personnalisés
- **Documentation**: Corrections de documentateur

---

## Version 1.10.1 - 5 décembre 2025

### ✨ Améliorations

- **Kiwix**: Améliorations du chemin de stockage ZIM

---

## Version 1.10.0 - 5 décembre 2025

### 🚀 Caractéristiques

- Surveillance de l'info disque

### ✨ Améliorations

- **Installer**: Ajouter des variables Redis env pour composer un fichier
- **Kiwix**: Téléchargement et configuration initials

---

## Version 1.9.0 - 5 décembre 2025

### 🚀 Caractéristiques

- Gestion de l'emploi de fond avec BullMQ

### ✨ Améliorations

- **Installer**: Caractère s'échappant dans les variables env
- **Installer**: Host env variable

---

## Version 1.8.0 - 5 décembre 2025

### 🚀 Caractéristiques

- Réaménagement des styles d'alerte et de bouton
- Réaménagement de la page d'information du système
- **Collections**: Collections ZIM en cours avec slug, icon et support de langue
- Téléchargements de fichiers personnalisés et ZIM (WIP)
- Nouveau système de cartes (WIP)

### ✨ Améliorations

- **DockerService**: Nettoyer les vieux trucs d'OSM
- **Installer**: Standardize composer les noms de fichiers

---

## Version 1.7.0 - 5 décembre 2025

### 🚀 Caractéristiques

- Réaménagement des styles d'alerte et de bouton
- Réaménagement de la page d'information du système
- **Collections**: Collections ZIM Organisées
- Téléchargements de fichiers personnalisés et ZIM (WIP)
- Nouveau système de cartes (WIP)

### ✨ Améliorations

- **DockerService**: Nettoyer les vieux trucs d'OSM
- **Installer**: Standardize composer les noms de fichiers

---

## Version 1.6.0 - 18 novembre 2025

### 🚀 Caractéristiques

- Ajout de Kolibri à la bibliothèque d'applications standard

### ✨ Améliorations

- Standardiser les noms de conteneurs dans management-compose

---

## Version 1.5.0 - 18 novembre 2025

### 🚀 Caractéristiques

- Pied de page de version et correctif CI version de gestion

---

## Version 1.4.0 - 18 novembre 2025

### 🚀 Caractéristiques

- **Services**: Noms et descriptions sympathiques

### ✨ Améliorations

- **Scripts**: Améliorations de création d'annuaires de journaux
- **Scripts**: Correction de la faute de frappe dans le chemin de fichier management-compose

---

## Version 1.3.0 - 9 octobre 2025

### 🚀 Nouvelles Fonctionnalités

- Désinstaller le script supprime désormais les conteneurs d'applications NOMAD non-management

### ✨ Améliorations

- **OpenStreetMap**: Appliquer les correctifs d'autorisation dir plus robustes

---

## Version 1.2.0 - 7 octobre 2025

### 🚀 Nouvelles Fonctionnalités

- Ajout de CyberChef à la bibliothèque d'applications standard
- Ajout de la dozzle aux conteneurs de base pour les journaux et métriques améliorés
- Ajout de FlatNotes à la bibliothèque d'applications standard
- Désinstaller le script d'aide disponible

### ✨ Améliorations

- **OpenStreetMap**:
  - Correction de chemins d'annuaire et de problèmes d'accès
  - Amélioration de la gestion des erreurs
  - Correction des autorisations de fichier de rendu
  - Correction d'un problème de chemin d'hôte absolu
- **Gestionnaire ZIM**:
  - Le téléchargement ZIM initial est maintenant hébergé dans le projet NOMAD GitHub repo pour une meilleure disponibilité

---

## Version 1.1.0 - 20 août 2025

### 🚀 Nouvelles Fonctionnalités

**Installation d'OpenStreetMap**

- Ajout d'OpenStreetMap à des applications installables
- Télécharge et importe automatiquement la région du Pacifique américain pendant l’installation.
- Prise en charge de la mise en cache de carreaux rendue pour une performance améliorée.

### ✨ Améliorations

- **Applications**: Ajout de contrôles de démarrage/arrêt/redémarrage pour chaque conteneur d'application dans les paramètres
- **Gestionnaire ZIM**: Gestion des erreurs/téléchargements resumables + interface utilisateur améliorée
- **Système**: Vous pouvez maintenant afficher les informations du système telles que les statistiques CPU, RAM et disque dans les paramètres
- **Légal**: Ajout de mentions légales dans les paramètres
- **UI**: Ajout d'améliorations générales de l'interface utilisateur telles que les alertes et les dialogues d'erreur
- Nom de conteneur standardisé pour réduire les conflits potentiels avec les conteneurs existants sur le système hôte

### ⚠️ Briser Les Changements

- **Nom de conteneur**: En raison de la dénomination de conteneur standardisée, il est recommandé de faire une nouvelle installation de Project NOMAD et de toutes les applications pour éviter les conflits potentiels / duplication de conteneurs

### 📚 Documentation

- Ajout de la page des notes de libération

---

## Version 1.0.1 - 11 juillet 2025

### 🐛 Corrections de bugs

- **Documentation**: Rendu de document fixe
- **Installer**: Correction des URL de script d'installation
- **OpenWebUI**: Connexion fixe Ollama

---

## Version 1.0.0 - 11 juillet 2025

### 🚀 Nouvelles Fonctionnalités

- Initiale de version alpha pour l'installation et la documentation de l'application
- OpenWebUI, Ollama, installation de Kiwix
- ZIM téléchargements et gestion

---

## Soutien

- **Discord:** [Rejoignez la communauté](https://discord.com/invite/crosstalksolutions) — Obtenez de l'aide, partagez vos builds et connectez-vous avec d'autres utilisateurs NOMAD
- **Rapports de bugs:** [GitHub Problèmes](https://github.com/Crosstalk-Solutions/project-nomad/issues)
- **Site web:** [www.projectnomad.us](https://www.projectnomad.us)

---

*Pour le changelog complet, voir notre [GitHub dévoile](https://github.com/Crosstalk-Solutions/project-nomad/releases).*
