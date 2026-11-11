# Applications du catalogue

Le catalogue d’applications est l'endroit où vous installez des applications supplémentaires sur votre NOMAD au-delà des outils intégrés. Chaque application fonctionne dans son propre conteneur sur votre NOMAD, entièrement hors ligne, et apparaît avec un **Ouvrir** bouton une fois qu'il a fini d'installer.

Cette page couvre ce que vous devez savoir pour vous mettre en marche avec chaque application *sur NOMAD spécifiquement*: si vous vous connectez, quelles sont les informations d'identification par défaut, où vos fichiers se retrouvent, et tout ce que vous devez avoir sous la main en premier. Il ne couvre pas comment utiliser les applications elles-mêmes. Chaque application est son propre projet open source avec sa propre documentation, et nous nous connectons à cela pour chacun.

Une note rapide sur les connexions: certaines de ces applications ont leurs propres comptes, séparés de votre connexion NOMAD. Lorsqu'une application vous demande de vous connecter, nous vous disons les informations d'identification de départ et si vous devez les modifier.

---

## Gérer vos applications

Chaque application que vous installez obtient un **Gérer** menu sur sa carte. De là, vous pouvez:

- **Documentation** — passez directement aux notes démarrées de NOMAD pour cette application (les mêmes sections par application que vous trouverez ci-dessous).
- **Modifier** — modifier les paramètres d'une application: les mappages de port, les liaisons de volume, les variables d'environnement et les limites mémoire/CPU. Cela fonctionne aussi pour les applications organisées, pas seulement les applications personnalisées. Vos modifications sont fusionnées dans la configuration existante de l'application, de sorte que les paramètres avancés (comme l'accès au GPU sur l'assistant d'IA) sont préservés, et une application modifiée cesse de se faire surécrire par les mises à jour du catalogue.
- **Journaux** et **Statistiques** — ouvrir une vue en direct de la sortie du journal d'une application ou de sa mémoire actuelle et de son utilisation du processeur, à portée de main lorsque quelque chose ne se comporte pas.
- **Mettre à jour** et **Retirer** — tirer la dernière version d'une application, ou la supprimer (en supprimant éventuellement son image aussi). Si le nouveau conteneur d'une mise à jour ne démarre pas, NOMAD retourne automatiquement à la version qui fonctionnait.

**Voir quelle version vous exécutez:** Chaque carte d'application affiche la version installée juste à côté du nom de l'application (par exemple, `Kiwix · 3.7.0`). Quand une version plus récente est disponible, une orange **Mise à jour disponible** La pilule apparaît sur la carte, il est donc facile à repérer en un coup d'œil.

**Liens personnalisés "Ouvrir":** Par défaut le **Ouvrir** boutons à l'application sur l'adresse de votre NOMAD. Si vous exécutez un proxy inversé ou un DNS local et préférez ouvrir une application à une adresse plus conviviale (par exemple `https://jellyfin.myhomelab.net`), utilisation **Gérer › Modifier** pour définir une URL de lancement personnalisée. NOMAD garde votre lien d'origine en toute sécurité sur le fichier, de sorte que vous pouvez toujours changer de nouveau, et les bâtons de remplacement à travers les mises à niveau.

**Maintenir les applications mises à jour automatiquement:** Les applications installées peuvent se mettre à jour les mains off. Il s'agit d'opt-in à deux niveaux - un commutateur principal dans **Paramètres → Mises à jour** et une bascule par application dans le dépôt d'approvisionnement - et seules les mises à jour mineures et de patch sont toujours appliquées automatiquement (les versions majeures restent toujours manuelles). Voir le [Guide de mises à jour](/docs/updates) pour l'histoire complète.

---

## Apporter votre propre application

Au-delà du catalogue organisé, le dépôt d'approvisionnement peut fonctionner **votre propre conteneur Docker** comme une application gérée à côté de tout le reste. Cliquez sur **Ajouter une application personnalisée** et dire à NOMAD:

- les **image** pour tirer (par exemple `ghcr.io/owner/app:1.2.3`),
- n'importe **Cartographies de port**, **volume se lie**, **variables d'environnement**, et **Limites de mémoire/CPU** Il a besoin.

Au fur et à mesure que vous le remplissez, NOMAD effectue une vérification en direct avant le vol et vous avertit des choses comme les conflits portuaires ou les paramètres à risque. Quelques avertissements (un registre non fiable, ou un `:latest` tag qui ne peut pas être version-tracked) sont avisés et vous pouvez choisir **Installez quand même**; les configurations vraiment dangereuses sont bloquées purement et simplement.

Une fois installée, une application personnalisée se comporte comme les autres: elle obtient la même chose **Gérer** menu (Edit, Logs, Statistiques, Mise à jour, Supprimer), affiche sa version sur la carte, et peut opter pour des mises à jour automatiques. NOMAD durcit les liens et les portées des journaux et des statistiques sur ses propres conteneurs gérés, de sorte qu'une application personnalisée ne peut pas atteindre en dehors de ce que vous lui donnez.

> Une application personnalisée est exactement cela – la vôtre. NOMAD l'exécute et s'écarte; il ne fournit pas de documents de configuration ou de support pour les logiciels en dehors du catalogue organisé. Vérifiez la documentation du projet pour savoir comment l'utiliser.

---

## Stirling PDF {% #stirling-pdf %}

Une boîte à outils complète pour travailler avec des PDF, le tout sur votre propre matériel. Fusionner et diviser des fichiers, convertir vers et depuis PDF, compresser, faire pivoter, ajouter ou supprimer des mots de passe, des documents numérisés OCR afin qu'ils soient consultables, signer, tamponner et expurger. Il y a plus de 50 outils ici, et parce qu'il fonctionne localement, aucun de vos documents ne quitte jamais votre NOMAD.

**Site officiel:** [stirlingpdf.com](https://stirlingpdf.com) · **Source:** [github.com/Stirling-Tools/Stirling-PDF](https://github.com/Stirling-Tools/Stirling-PDF)

**La première fois que vous l'ouvrez:** Il s'ouvre directement aux outils, aucune connexion requise. Nous avons configuré Stirling pour sauter son écran de connexion, car sur un NOMAD, c'est un outil personnel sur votre propre réseau et un mur de mot de passe se met en route. Vous verrez "Guest" dans le coin inférieur gauche, ce qui est normal.

**La tête haute, c'est un démarrage lent:** Stirling PDF est une grande application Java. Après l'avoir installé, donnez-le 30 à 60 secondes pour finir de démarrer avant qu'il ne charge proprement. Il veut aussi une bonne partie de la mémoire (autour d'un gigaoctet), donc il est plus heureux sur un NOMAD avec de la place à revendre.

**Vous voulez un mot de passe dessus?** Si vous préférez que Stirling nécessite une connexion (par exemple, quelques personnes partagent votre NOMAD et que vous voulez que cette application soit verrouillée), vous pouvez retourner sa connexion de NOMAD:

1. Sur la page Dépôt d'approvisionnement, trouvez Stirling PDF et cliquez sur **Gérer > Modifier**.
2. Sous **Variables d'environnement**, changez `SECURITY_ENABLELOGIN=false` to `SECURITY_ENABLELOGIN=true`.
3. Sauvez. NOMAD reconstruit l'application, et l'écran de connexion revient.

La première fois que vous vous connectez après cela, utilisez le nom d'utilisateur `admin` et mot de passe `stirling`. Stirling vous fera définir votre propre mot de passe immédiatement. Notez que c'est la seule façon de retourner la connexion: le menu des paramètres de Stirling est verrouillé derrière être connecté, donc une fois la connexion éteinte, vous l'activez à partir de l'écran Modifier de NOMAD, pas de l'intérieur de Stirling.

**Vos données:** Vos paramètres vivent dans le `storage/stirling-pdf` dossier sur votre NOMAD. Les PDF sur lesques vous travaillez sont téléchargés pour l'opération et téléchargés sur votre propre appareil. Stirling n'est pas une bibliothèque à long terme, donc il ne tient pas sur vos documents.

**D'où viennent vos PDF (et pourquoi vous ne voyez pas les fichiers de votre NOMAD):** Stirling fonctionne sur des fichiers à partir de n'importe quel appareil que vous utilisez, votre ordinateur portable, votre téléphone ou votre tablette. Vous cliquez sur "Ouvrir à partir de l'ordinateur", choisissez un PDF, travaillez dessus, puis téléchargez le résultat sur cet appareil. Stirling ne peut pas joindre les fichiers stockés ailleurs sur votre NOMAD, de sorte qu'il ne vous montrera pas votre dossier de livres, vos documents de base de connaissances ou quoi que ce soit dans le navigateur de fichiers. Si le PDF que vous voulez est déjà sur votre NOMAD, téléchargez-le de partout où il vit en premier (File Browser, par exemple), puis ouvrez cette copie dans Stirling. C'est une étape supplémentaire, mais c'est aussi la raison pour laquelle vos fichiers restent exactement où vous les mettez au lieu d'être entraînés dans une autre application.

**Fonctionne hors ligne:** Tous les outils PDF fonctionnent localement sur votre NOMAD, de sorte que la boîte à outils elle-même fonctionne entièrement hors ligne. Quelques fonctionnalités latérales s'adressent à Internet et ne feront rien lorsque vous êtes déconnecté: l'option d'importation "Google Drive" et les liens dans le pied de page (Survey, Discord, GitHub). Aucun de ceux-ci ne compte pour travailler réellement sur des PDF. La seule caractéristique principale avec une pièce en ligne est OCR, qui lit le texte hors des pages numérisées: il est livré avec l'anglais déjà installé, et l'ajout d'autres langues est la seule partie qui aurait besoin d'une connexion.

## Navigateur de fichiers {% #file-browser %}

Un gestionnaire de fichiers web pour votre NOMAD. Parcourir les dossiers, télécharger et télécharger des fichiers, créer des dossiers, renommer, déplacer et supprimer, tout de votre navigateur sans rien à installer sur votre ordinateur. C'est un moyen pratique de déplacer des fichiers sur et hors de l'appareil ou de ranger les choses sans tomber dans une ligne de commande.

**Site officiel:** [filebrowser.org](https://filebrowser.org) · **Source:** [github.com/filebrowser/filebrowser](https://github.com/filebrowser/filebrowser)

**La première fois que vous l'ouvrez:** Vous aurez un écran de connexion. Connectez-vous avec le nom d'utilisateur `admin` et mot de passe `nomad`. **Changez ce mot de passe tout de suite.** C'est le même défaut sur chaque NOMAD, donc jusqu'à ce que vous le changez, n'importe qui sur votre réseau qui sait qu'il pourrait entrer. Cliquez sur l'engrenage de paramètres, ouvrez les paramètres de votre profil et définissez un nouveau mot de passe.

Contrairement à la plupart des applications ici, le navigateur de fichiers conserve sa connexion à l'intention. Il peut renommer et supprimer des fichiers réels sur votre NOMAD, donc un mot de passe est le bon appel même sur votre propre réseau.

**Ce que vous pouvez voir:** Le navigateur de fichiers vous montre les dossiers de contenu de votre NOMAD en un seul endroit:

- **Livres** - livres électroniques, y compris tout ce que vous voulez Calibre-Web à lire
- **cartes** - données cartographiques téléchargées
- **médias** - vidéo, musique et photos, y compris tout ce que vous voulez que Jellyfin serve
- **zim** - contenu hors ligne téléchargé comme Wikipédia et d'autres bibliothèques de référence
- **kb_uploads** - documents que vous avez ajoutés à la Base de connaissances

Vous pouvez télécharger, renommer, déplacer et supprimer à l'intérieur de ceux-ci, et tout ce que vous déposez dans le niveau supérieur est également enregistré. Les dossiers en coulisses sur lesquels les applications s'exécutent réellement (c'est comme les modèles d'IA, l'index de recherche et le coffre-fort de mot de passe) sont délibérément tenus à l'extérieur du navigateur de fichiers, de sorte que vous ne pouvez pas les parcourir ou les supprimer par accident.

> **Un mot sur la suppression:** Ce que vous supprimez ici est vraiment parti, il n'y a pas de corbeille. Le contenu est principalement remplaçable (vous pouvez télécharger à nouveau une carte ou une bibliothèque Wikipédia), mais si vous supprimez un livre ou une vidéo que vous avez ajoutée vous-même, cette copie a disparu. Supprimer avec le même soin que vous le feriez sur votre propre ordinateur.

**Fonctionne hors ligne:** Entièrement hors ligne. Le navigateur de fichiers fonctionne entièrement sur votre NOMAD et ne contacte rien sur Internet, de sorte qu'il fonctionne exactement de la même manière connectée ou non.

## calibre-Web {% #calibre-web %}

Un lecteur Web et un gestionnaire de bibliothèque pour votre collection de livres électroniques. Lisez des livres directement dans votre navigateur, organisez-les par auteur, série et tags, et envoyez-les à un Kindle ou une autre liseuse. Il se combine avec le dossier de livres sur votre NOMAD, de sorte que toute votre bibliothèque vit sur l'appareil et va partout où il va.

**Site officiel:** [github.com/janeczku/calibre-web](https://github.com/janeczku/calibre-web)

**La première fois que vous l'ouvrez:** Calibre-Web a besoin d'une bibliothèque pour pointer, et NOMAD configure un vide pour vous lors de l'installation, de sorte que vous ne resterez pas coincé sur une erreur de configuration. Voici le flux unique:

1. Ouvrir Calibre-Web. Il atterrisse sur un **Configuration de base de données** écran.
2. Dans le **Localisation de la base de données Calibre** boîte, type `/books` et cliquez sur **Enregistrer**. Vous verrez "Paramètres de base de données mis à jour" et votre bibliothèque (vide) s'ouvre.
3. C'est pour la configuration. Votre bibliothèque est prête à remplir.

S'il vous demande de vous connecter à un moment donné, la connexion par défaut est `admin` / `admin123`. **Modifier ce mot de passe** une fois que vous êtes dans (cliquez `admin` en haut à droite, puis Edit). C'est le même défaut sur chaque NOMAD.

**Ajout de livres:** Le téléchargement sur la page Web est désactivé par défaut. Pour l'allumer, allez à **Admin** (en haut à droite) et modifiez la configuration de base pour autoriser les téléchargements, puis vous obtiendrez un bouton Upload. Vous pouvez également déposer des fichiers de livre électronique directement dans le dossier des livres à l'aide du navigateur de fichiers, puis utiliser la "scan" de Calibre-Web pour les récupérer.

**Vos données:** Votre bibliothèque vit dans le `books` dossier sur votre NOMAD (le même `books` vous voyez dans le navigateur de fichiers). Chaque livre que vous ajoutez y est stocké, alors sauvegardez qu'un dossier recule toute votre collection.

**Fonctionne hors ligne:** La lecture et la gestion de votre bibliothèque fonctionnent entièrement hors ligne. La seule fonctionnalité qui s'adresse à Internet est "fetch metadata", qui tire les couvertures de livres et les descriptions de sources en ligne. Cette partie ne fera rien quand vous êtes hors ligne, mais cela n'affecte pas la lecture ou l'organisation des livres que vous avez déjà.

## Outils informatiques {% #it-tools %}

Une collection de plus de 100 petits utilitaires que vous iriez chercher en ligne: générateurs de hachage, codeurs base64 et URL, formateurs JSON et SQL, générateurs UUID, un fabricant de code QR, convertisseurs de couleurs, et beaucoup plus. Tout fonctionne localement sur votre NOMAD, vous pouvez donc l'utiliser sans connexion Internet.

**Site officiel:** [it-tools.tech](https://it-tools.tech) · **Source:** [github.com/CorentinTh/it-tools](https://github.com/CorentinTh/it-tools)

**La première fois que vous l'ouvrez:** Il s'ouvre directement aux outils. Pas de login, pas de compte, pas de configuration. Choisissez un outil dans la barre latérale et utilisez-le.

**Vos données:** Il n'y a rien à gérer. IT Tools ne stocke rien sur votre NOMAD entre les sessions, il n'y a donc pas de fichiers, pas de bibliothèque à configurer et pas d'informations d'identification à suivre. C'est l'application la plus simple du catalogue d’applications.

**Fonctionne hors ligne:** Chaque outil fonctionne directement dans votre navigateur contre la copie sur votre NOMAD. Rien ici ne tend la main à Internet, donc tout cela continue de fonctionner lorsque vous êtes hors ligne.

## Excalidraw {% #excalidraw %}

Un tableau blanc virtuel pour des diagrammes et des croquis de style rapide et dessinés à la main. Dessinez des cases, des flèches et des formes à main levée, déposez du texte et des images, et déposez un organigramme, un diagramme de réseau ou une idée approximative en quelques secondes. Le tout a un look convivial et esquissé sur un serviette, et il fonctionne directement dans votre navigateur.

**Site officiel:** [excalidraw.com](https://excalidraw.com) · **Source:** [github.com/excalidraw/excalidraw](https://github.com/excalidraw/excalidraw)

**La première fois que vous l'ouvrez:** Il s'ouvre directement sur une toile vierge. Pas de login, pas de compte, pas de configuration. Choisissez une forme dans la barre d'outils et commencez à dessiner. Vous verrez une courte note de bienvenue vous rappelant que votre travail est enregistré dans votre navigateur, ce qui conduit à la seule chose qui vaille la peine d'être comprise à propos d'Excalidraw sur NOMAD.

**Où vivent vos dessins (lire cette partie):** Cette version d'Excalidraw n'a pas de stockage sur votre NOMAD. Votre dessin est enregistré dans le navigateur Web que vous utilisez, sur cet appareil. Quelques choses en découlent:

- Votre dessin est **non partagé entre les appareils**. Ce que vous dessinez sur votre ordinateur portable n'arrivera pas lorsque vous ouvrez Excalidraw sur votre téléphone, car chaque navigateur conserve sa propre copie.
- Si vous **Effacer les données de votre navigateur**, ou utiliser une fenêtre privée/incognito, le dessin a disparu. Il n'y a pas de copie sur le NOMAD sur lequel se rabattre.
- Donc **sauvegardez votre travail dans un fichier.** Utilisez le menu (en haut à gauche) pour **Enregistrer pour...** et `.excalidraw` fichier, et le mettre dans un endroit sûr, par exemple votre dossier de média ou de documents via le navigateur de fichiers. Pour le récupérer plus tard, utilisez **Ouvrir** et chargez ce fichier. C'est la seule façon de garder un dessin à long terme ou de le déplacer vers un autre appareil.

**Vos données:** Parce que tout reste dans votre navigateur, il n'y a pas de dossiers ou d'informations d'identification NOMAD à gérer pour Excalidraw. Les fichiers que vous enregistrez sont où vous choisissez de les mettre.

**Fonctionne hors ligne:** Le tableau blanc lui-même fonctionne hors ligne, vous pouvez dessiner, modifier et enregistrer des fichiers sans Internet. Trois choses à savoir:

- **La police dessinée à la main de la signature provient d'Internet.** Lorsque votre NOMAD est hors ligne, Excalidraw ne peut pas le récupérer et retomber à une police simple, de sorte que vos diagrammes semblent un peu moins sommaires. Vos dessins eux-mêmes ne sont pas affectés, seule la police à l'écran change.
- **Excalidraw envoie des analyses d'utilisation anonymes lorsque votre NOMAD est en ligne.** Les fabricants de l'application incluent un suivi de base de la page (via un service appelé Simple Analytics) qui enregistre l'ouverture de l'application. Il ne voit pas vos dessins, et il ne peut rien atteindre lorsque votre NOMAD est hors ligne, mais nous voulons que vous sachiez qu'il est là puisque NOMAD est autrement conçu pour se garder à lui-même.
- **Quelques boutons sont des fonctionnalités cloud qui ne fonctionnent pas sur NOMAD.** "Live collaboration", "S'inscrire" et "Excalidraw+" pointent tous vers le service en ligne payant des créateurs et ont besoin d'Internet. Ils ne font pas partie de votre tableau blanc hors ligne, vous pouvez donc les ignorer. Il en va de même pour la forme **Bibliothèque** navigateur, qui tire d'une galerie en ligne.

## Homebox {% #homebox %}

Un système d'inventaire de maison pour garder une trace de tout ce que vous possédez. Cataloguez vos affaires dans des lieux et des étiquettes, joignez des photos, enregistrez des numéros de série, des prix d'achat, des dates de garantie et des reçus, et trouvez n'importe quoi avec une recherche. C'est un outil vraiment utile pour les dossiers d'assurance, le suivi de la garantie, et savoir ce que vous avez et où il est.

**Site officiel:** [homebox.software](https://homebox.software) · **Source:** [github.com/sysadminsmedia/homebox](https://github.com/sysadminsmedia/homebox)

**La première fois que vous l'ouvrez:** Homebox atterrit sur un écran de connexion, mais vous n'avez pas encore de compte, donc vous en créez un. Cliquez sur **S'inscrire**, puis remplir:

- **votre email** (utilisé comme nom d'utilisateur pour se connecter),
- **Votre nom**,
- **un mot de passe** (Homebox affiche un compteur de force et ne vous laissera pas vous inscrire jusqu'à ce que le mot de passe soit assez fort, alors utilisez-en un réel).

Cliquez sur **S'inscrire**, puis connectez-vous avec cet email et ce mot de passe. Le premier compte que vous créez est le **propriétaire** de cette Homebox. Il n'y a pas d'informations d'identification par défaut à modifier, le compte est le vôtre dès le début.

**Partager son NOMAD avec les autres ?** Par défaut, Homebox permet à toute personne qui peut l'atteindre de créer son propre compte. C'est bien si c'est juste vous, ou si vous faites confiance à tout le monde sur votre réseau. Si vous préférez le verrouiller pour que personne d'autre ne puisse s'inscrire après avoir créé votre compte:

1. Créez d'abord votre compte propriétaire (ci-dessus).
2. Sur la page Dépôt d'approvisionnement, trouvez Homebox et cliquez sur **Gérer > Modifier**.
3. Sous **Variables d'environnement**, ajouter `HBOX_OPTIONS_ALLOW_REGISTRATION=false`.
4. Sauve. NOMAD reconstruit l'application, et le bouton Enregistrer cesse de créer de nouveaux comptes. Vous pouvez toujours vous connecter normalement.

**Vos données:** Tout ce que Homebox stocke vit dans un dossier sur votre NOMAD, `storage/homebox`, en tant que fichier de base de données unique (plus toutes les photos et reçus que vous joignez). Sauvent ce dossier sauvegarde l'ensemble de votre inventaire.

**Fonctionne hors ligne:** Entièrement hors ligne. Homebox fonctionne entièrement sur votre NOMAD, conserve toutes vos données localement et n'a pas de suivi d'utilisation, de sorte qu'il fonctionne exactement de la même manière que votre NOMAD soit connecté ou non. Les liens dans son en-tête (GitHub, Discord, le site Web du projet) ont besoin d'Internet, mais ce ne sont que des raccourcis vers les pages du projet et n'ont rien à voir avec votre inventaire.

## Vaultwarden {% #vaultwarden %}

Un gestionnaire de mots de passe privé qui fonctionne sur votre propre NOMAD. Il est compatible avec Bitwarden, de sorte que vous pouvez stocker des connexions, des notes sécurisées et des détails de carte dans un coffre-fort crypté, et utiliser les extensions de navigateur et les applications téléphoniques officielles de Bitwarden pour y accéder, tous pointés sur votre NOMAD au lieu du cloud de quelqu'un d'autre.

**Site officiel:** [bitwarden.com](https://bitwarden.com) (pour les applications et les extensions) · **Source:** [github.com/dani-garcia/vaultwarden](https://github.com/dani-garcia/vaultwarden)

**La première fois que vous l'ouvrez, vous verrez un avertissement de sécurité. C'est prévu, voici pourquoi:** Un gestionnaire de mots de passe ne s'exécutera que sur une connexion sécurisée (HTTPS), de sorte que NOMAD configure Vaultwarden avec HTTPS automatiquement. Parce que votre NOMAD est votre propre appareil privé et non un site Web public, il utilise un certificat de sécurité auto-signé, et les navigateurs montrent un avertissement la première fois qu'ils en voient un. Il semble alarmant, mais il est normal pour un appareil sur votre propre réseau. Pour le dépasser une fois:

1. Cliquez sur **Ouvrir** sur la carte Vaultwarden. Votre navigateur montre quelque chose comme *"Votre connexion n'est pas privée"* ou *"Pas sécurisé."*
2. Cliquez sur **Avancé**, alors **Procédez à (adresse de votre NOMAD)**. (Sur certains navigateurs, le bouton indique "Continuer" ou "Accepter le risque.")
3. Vous atterrirez sur le coffre de Vaultwarden. Votre navigateur mémorise ce choix, de sorte que vous ne verrez pas l'avertissement à nouveau sur cet appareil.

**Créer votre coffre:** Sur la page de connexion, cliquez **Créer un compte**, puis régler votre **email** et un **Mot de passe maître**.

> **Votre mot de passe principal ne peut pas être récupéré.** Vaultwarden n'a pas d'e-mail "mot de passe oublié" et pas de réinitialisation, par conception, car il ne voit jamais votre mot de passe. Si vous l'oubliez, la voûte et tout ce qu'il contient est verrouillé pour de bon. Choisissez quelque chose de fort que vous ne perdrez pas, et envisagez de l'écrire quelque part physiquement en sécurité.

**Partager son NOMAD avec les autres ?** Par défaut, toute personne qui peut atteindre Vaultwarden peut créer son propre compte (chaque compte est séparé et crypté). Si vous préférez que personne d'autre ne puisse s'inscrire après avoir configuré le vôtre:

1. Créez votre propre compte en premier.
2. Sur la page de dépôt d'approvisionnement, trouvez Vaultwarden et cliquez sur **Gérer > Modifier**.
3. Sous **Variables d'environnement**, ajouter `SIGNUPS_ALLOWED=false`.
4. Sauvre. NOMAD reconstruit l'application et les nouvelles inscriptions sont désactivées; les comptes existants continuent de fonctionner.

**Utilisation de celui-ci à partir de votre téléphone et de votre navigateur:** Installez l'application officielle Bitwarden ou l'extension de navigateur, et sur son écran de connexion, choisissez **auto-hébergé** (ou "URL du serveur") et entrez `https://(your NOMAD's address):8480`. Notez que certaines applications téléphoniques sont plus strictes à propos des certificats auto-signés et peuvent refuser de se connecter; le coffre-fort Web que vous ouvrez à partir de NOMAD fonctionne toujours.

**Vos données:** Votre coffre crypté vit dans le `storage/vaultwarden` dossier sur votre NOMAD. Sauvegarder ce dossier sauvegarde tout. (Le panneau d'administration intégré est désactivé, sauf si vous définissez un jeton d'administration, dont la plupart des gens n'ont pas besoin.)

**Fonctionne hors ligne:** Entièrement hors ligne et privé. Vaultwarden fonctionne entièrement sur votre NOMAD, stocke votre coffre-fort localement et ne répond à personne. Les applications et extensions Bitwarden conservent également une copie locale de votre coffre-fort, afin qu'elles puissent lire vos mots de passe même lorsque votre NOMAD ou votre téléphone est hors ligne.

## Jellyfin {% #jellyfin %}

Votre propre serveur multimédia. Point Jellyfin dans un dossier de films, émissions de télévision, musique et photos sur votre NOMAD, et il organise tout avec des illustrations et des détails et le diffuse sur un navigateur Web, un téléphone, une tablette, une télévision intelligente ou les applications Jellyfin. C'est une alternative privée et hors ligne aux grands services de streaming pour les médias que vous possédez déjà.

**Site officiel:** [jellyfin.org](https://jellyfin.org) · **Source:** [github.com/jellyfin/jellyfin](https://github.com/jellyfin/jellyfin)

**La première fois que vous l'ouvrez, vous passerez par un assistant d'installation.** Ce sont quelques écrans rapides:

1. **Langue** - choisissez votre langue d'affichage et cliquez sur Suivant.
2. **Créer votre compte administrateur** - entrez un nom d'utilisateur et un mot de passe. C'est le compte principal qui contrôle le serveur, alors donnez-lui un vrai mot de passe et gardez une trace de celui-ci. (Vous pouvez ajouter plus d'utilisateurs, y compris des utilisateurs limités pour les enfants, plus tard à partir du tableau de bord.)
3. **Ajoutez vos médias** - cliquez **Ajouter une médiathèque** et choisissez un type de contenu. Pour faciliter cela, NOMAD a déjà créé un dossier correspondant pour chaque type dans votre dossier multimédia, de sorte que vous pointez simplement chaque bibliothèque à celle qui correspond:

   - **Les films** Bibliothèque → le `Movies` Dossier
   - **Spectacles** Bibliothèque → le `TV Shows` Dossier
   - **Musique** Bibliothèque → le `Music` Dossier
   - **Photos** Bibliothèque → le `Photos` Dossier

   **Pointer chaque bibliothèque dans son propre dossier, pas dans l'ensemble `media` dossier.** Cela compte: si vous pointez une bibliothèque à `media` lui-même (qui contient tous les autres) et une autre bibliothèque à, disons, `Music` À l'intérieur, Jellyfin voit les mêmes fichiers réclamés deux fois, l'appelle un "chemin en double", et votre musique ne se présentera pas silencieusement. Un dossier par bibliothèque garde tout bien rangé et fonctionnant. Vous pouvez également sauter cette étape et ajouter des bibliothèques plus tard à partir du tableau de bord.
4. **Métadonnées, accès à distance, finition** - accepter les valeurs par défaut sur les écrans restants et terminer. Ensuite, connectez-vous avec le compte que vous venez de faire.

**Obtenir vos médias dans:** Mettez vos fichiers dans le sous-dossier correspondant de la **médias** dossier sur votre NOMAD (le même `media` dossier que vous voyez dans le navigateur de fichiers): films dans **Les films**, série en **Émissions de télévision**, la musique dans **Musique** (un dossier par album fonctionne très bien), les images en **Photos**. Le flux de travail le plus simple est de télécharger des fichiers avec le navigateur de fichiers (ou de les déposer comme vous le souhaitez), puis en clic de Jellyfin **Scan Bibliothèque** pour les ramasser. Jellyfin lit des sous-dossiers, donc tout un dossier d'album est tombé dans **Musique** Il entre comme un album. Il fonctionne également mieux lorsque les fichiers sont clairement nommés (par exemple `Movie Name (2020).mp4`), ce qui l'aide à faire correspondre les bonnes œuvres d'art et les détails.

**Vos données:** Vos médias vivent en `storage/media`. Les propres paramètres de Jellyfin, les comptes d'utilisateur et l'œuvre qu'il télécharge en direct `storage/jellyfin`. Vos fichiers multimédias ne sont jamais modifiés, Jellyfin les lit seulement.

**Fonctionne hors ligne:** Le streaming de vos propres médias fonctionne entièrement hors ligne, c'est tout l'intérêt. La seule pièce qui utilise Internet est **récupération de métadonnées**: lorsque Jellyfin ajoute un film ou une émission, il essaie de télécharger une image de couverture, une description et de diffuser des informations à partir de bases de données en ligne. Hors ligne, il ne peut pas faire cela, donc les objets apparaissent avec des noms simples et pas d'œuvres d'art, mais ils jouent toujours parfaitement. Une fois de retour en ligne, un scan de bibliothèque remplit l'illustration manquante.

> **Une note sur les performances de lecture:** Jellyfin lit la plupart des fichiers sans effort, mais si le format d'une vidéo n'est pas pris en charge par votre appareil, Jellyfin doit le convertir à la volée ("transcodage"), ce qui est un travail lourd pour le processeur. NOMAD ne met pas en place d'accélération de carte graphique pour cela par défaut, de sorte que les vidéos très grandes ou haute résolution peuvent se dégarder sur un NOMAD modeste. Lire des fichiers dans un format largement pris en charge (comme MP4/H.264) évite le transcodage et les lectures les plus fluides.

## Web Meshtastic {% #meshtastic-web %}

Un panneau de contrôle basé sur un navigateur pour [Meshtastic](https://meshtastic.org) appareils. Meshtastic est une messagerie radio hors réseau et à longue portée: de petites radios LoRa peu coûteuses qui forment leur propre réseau maillé et envoient des messages texte et des emplacements GPS sur des miles sans service cellulaire, sans Internet et sans frais. Cette application est la façon dont vous configurez ces radios et lisez et envoyez des messages à partir d'un écran pleine grandeur.

**Site officiel:** [meshtastic.org](https://meshtastic.org) · **Source:** [github.com/meshtastic/web](https://github.com/meshtastic/web)

**Vous avez besoin d'une radio Meshtastic pour l'utiliser.** Cette application est juste le panneau de contrôle. Il s'ouvre à lui-même à un écran "No devices connect", car le travail réel se produit sur un appareil physique Meshtastic (et le réseau d'autres radios à qui il parle). Si vous n'en avez pas encore, l'application ne fera pas grand-chose.

**La première fois que vous l'ouvrez:** Il s'ouvre directement, pas de connexion. Cliquez sur **Nouvelle connexion** et vous verrez trois façons de vous connecter à votre radio:

- **HTTP** - connectez-vous à une radio déjà jointe à votre Wi-Fi, en tapant son adresse IP. **C'est la méthode à utiliser sur NOMAD** (voir ci-dessous).
- **Bluetooth** - paire avec une radio à proximité sur Bluetooth.
- **Série** - se connecter à une radio branchée sur un port USB.

**La capture spécifique à NOMAD (Bluetooth et Serial ont besoin de HTTPS):** Les navigateurs permettent uniquement à un site Web d'utiliser Bluetooth ou USB lorsque la page est chargée sur une connexion sécurisée (HTTPS). NOMAD sert le Web meshtastic par HTTP ordinaire, donc sur NOMAD le **Les options Bluetooth et Série ne se connectent pas**, votre navigateur les bloque. Celui qui fonctionne est **HTTP**: mettez votre radio Meshtastic sur le même réseau Wi-Fi (les radios Meshtastic peuvent rejoindre le Wi-Fi), puis connectez-vous à elle ici par son adresse IP. Si vous avez spécifiquement besoin de coupler par-dessus USB ou Bluetooth, faites-le à partir de l'application téléphonique officielle Meshtastic ou du site Web Meshtastic à la place.

**Vos données:** Il n'y a rien à configurer ou à stocker sur votre NOMAD pour cette application. Les paramètres de votre radio sont en direct à la radio elle-même, et les préférences de cette application sont en direct dans votre navigateur. Il n'y a pas de dossier NOMAD à gérer.

**Fonctionne hors ligne:** Entièrement hors ligne, ce qui est tout le point de Meshtastic. L'application est servie à partir de votre NOMAD, et parler à vos radios se produit sur votre réseau local ou votre radio, jamais sur Internet. Les seuls bits en ligne sont les liens dans le pied de page (Vercel, légal), qui n'ont pas d'importance pour l'utilisation de votre maillage.

## Plateforme d'éducation (Kolibri) {% #kolibri %}

Une plateforme d’apprentissage hors ligne complète de Learning Equality. Kolibri rassemble des leçons vidéo, des exercices et des lectures dans des canaux structurés, les organise en cours et leçons, suit les progrès de l'apprenant et travaille entièrement sur votre NOMAD sans Internet. Il est construit pour les écoles et les apprenants dans des endroits avec peu ou pas de connectivité.

**Site officiel:** [learningequality.org/kolibri](https://learningequality.org/kolibri) · **Source:** [github.com/learningequality/kolibri](https://github.com/learningequality/kolibri)

**La première fois que vous l'ouvrez, vous passerez par un assistant de configuration rapide.** Choisissez votre type d'installation et créez le **compte administrateur** (c'est le super-utilisateur qui gère l'ensemble de l'appareil, alors donnez-lui un vrai mot de passe et gardez-le en garde une trace). Une fois que vous êtes dans, vous importez du contenu d'apprentissage comme **Chaînes**.

**Importer du contenu:** Le contenu de Kolibri est livré en tant que canaux que vous importez. Ouvert **Appareil → Canaux → Import**, et soit tirer des chaînes de Kolibri Studio (en ligne) ou importer à partir d'un lecteur local ou d'un autre périphérique Kolibri si vous avez déjà les fichiers de contenu. Il y a beaucoup de choses disponibles, alors importez juste les canaux dont vous avez besoin; ils peuvent être grands.

**Migration de contenu de la plate-forme d'éducation (Genèse 1):** Les versions antérieures de NOMAD ont expédié un Kolibri beaucoup plus ancien (le `treehouses/kolibri:0.12.8` image). La plateforme d'éducation "Gen 2" est un Kolibri plus récent et en amont et installe **frais** — vos anciens canaux et vos données d’apprenant sont **pas** reporté automatiquement, car les deux versions stockent les données trop différemment pour migrer en toute sécurité. Si vous exécutiez l'ancien et que vous voulez importer vos canaux existants dans le nouveau, voici le processus:

1. Installez "Education Platform (Gen 2)" du catalogue (il fonctionne à côté de l'ancien sur un port différent, donc rien n'est perturbé pendant que vous le configurez).
2. Lancez le nouveau, passez à travers l'assistant de configuration, puis à partir du menu de la barre latérale, accédez à **Appareil > Chaînes > Importer**. Choisissez l'option "Réseau local ou Internet", puis "Ajouter un nouvel appareil". Dans la boîte de dialogue qui apparaît, entrez l'adresse IP de votre NOMAD avec l'ancien port Education Platform (8300 par défaut, par exemple `http://192.0.2.12:8300`), donnez-lui un nom (tout ce que vous souhaitez), et cliquez sur "Ajouter", puis "Continuer".
3. Vous pouvez maintenant sélectionner des canaux individuels à partir de l'ancienne plate-forme d'éducation, ou choisir "Sélection de canaux entiers à la place" pour tout importer à la fois. Cliquez sur "Importer" lorsque prêt, et le transfert démarre.
4. Une fois que vous êtes satisfait de la nouvelle installation et que vous avez copié n'importe quel contenu, désinstallez l'ancienne plate-forme d'éducation de sa carte (il porte un **héritage** badge). Il est également recommandé de choisir de supprimer l'ancienne image et le volume de données lors de la désinstallation pour éviter la confusion et libérer de l'espace, mais si vous voulez le garder pendant un certain temps au cas où, c'est tout à fait bien aussi.

**Vos données:** Vos canaux, classes et progrès d'apprenant importés vivent dans le `storage/kolibri-gen2` dossier sur votre NOMAD. Sauvegarder ce dossier sauvegarde l'ensemble de votre Kolibri.

**Fonctionne hors ligne:** Entièrement hors ligne une fois que le contenu est importé, c'est à cela que sert Kolibri. La seule étape qui utilise Internet est d'importer des canaux de Kolibri Studio; tout après cela, les leçons de navigation, faire des exercices, suivre les progrès, fonctionne entièrement sur votre NOMAD.

## MeshCore Web {% #meshcore-web %}

Un client basé sur un navigateur pour [MeshCore](https://meshcore.io) radios. MeshCore est une autre prise sur la messagerie de maillage LoRa à longue portée, une fratrie à Meshtastic: de petites radios qui forment leur propre réseau et passent du texte et de l'emplacement sur des kilomètres sans service cellulaire, sans Internet, et sans frais. Cette application est la façon dont vous configurez une radio MeshCore et lisez et envoyez des messages à partir d'un écran pleine grandeur. Si vous n'utilisez pas déjà l'équipement MeshCore, le client Meshtastic ci-dessus est le point de départ le plus commun. Celui-ci est là pour les gens qui utilisent MeshCore.

**Site officiel:** [meshcore.io](https://meshcore.io) · **Source:** [github.com/aXistem-dev/meshcore-web](https://github.com/aXistem-dev/meshcore-web) (une construction emballée du client MeshCore de Liam Cottle)

**Vous avez besoin d'une radio MeshCore pour l'utiliser.** Comme le client Meshtastic, ce n'est que le panneau de contrôle. Sans radio connectée, il n'y a rien à quoi parler.

**La première fois que vous l'ouvrez, vous verrez un avertissement de sécurité. C'est prévu, voici pourquoi:** MeshCore se connecte à votre radio par USB ou Bluetooth, et les navigateurs ne permettent à une page Web d'utiliser USB ou Bluetooth que lorsque la page est chargée sur une connexion sécurisée (HTTPS). Donc, NOMAD sert cette application sur HTTPS, et parce que votre NOMAD est un appareil privé sans adresse Web publique, il utilise un certificat auto-signé que les navigateurs avertissent de la première fois qu'ils le voient. Pour le dépasser une fois:

1. Cliquez sur **Ouvrir** sur la carte Web MeshCore. Votre navigateur montre quelque chose comme *"Votre connexion n'est pas privée"* ou *"Pas sécurisé."*
2. Cliquez sur **Avancé**, alors **Procédez à (adresse de votre NOMAD)**. (Sur certains navigateurs, le bouton indique "Continuer" ou "Accepter le risque.")
3. Vous atterrirez dans le Web de MeshCore. Votre navigateur mémorise ce choix, de sorte que vous ne verrez pas l'avertissement à nouveau sur cet appareil.

**Connecter votre radio:** Utilisation **Chrome ou Edge**, qui ont le meilleur support pour le navigateur USB et Bluetooth. Branchez la radio sur l'ordinateur à partir de laquelle vous naviguez (USB), ou ayez-la à proximité (Bluetooth), puis connectez-vous à elle depuis l'intérieur de l'application. La radio se connecte à **l'ordinateur que vous utilisez**, pas au NOMAD lui-même, alors connectez-vous à partir d'un appareil qui a la radio branchée ou dans la portée Bluetooth. Certains téléphones sont plus stricts à propos des certificats auto-signés et peuvent refuser de se connecter; un Chrome ou un Edge de bureau est le plus fiable.

**Vos données:** Il n'y a rien à configurer ou à stocker sur votre NOMAD pour cette application. Les paramètres de votre radio sont en direct sur la radio elle-même, et les préférences de l'application sont en direct dans votre navigateur. Il n'y a pas de dossier NOMAD à gérer.

**Fonctionne hors ligne:** Entièrement hors ligne, ce qui est tout l'intérêt de MeshCore. L'application est servie à partir de votre NOMAD et parle à votre radio directement sur USB ou Bluetooth, jamais Internet.

## Bibliothèque Traduite {% #offline-translation %}

Lit la bibliothèque d'information dans une autre langue. Ouvrir un article et un **Traduire cette page** barre apparaît en haut avec un bouton pour chaque langue installée, plus **Original** pour revenir en arrière. Votre choix colle lorsque vous cliquez sur d'autres articles.

**Pourquoi cela au lieu de l'assistant d'IA:** l'assistant d'IA peut traduire, mais cela est environ 1.600 fois plus rapide sur la même machine, et il n'a pas besoin d'une carte graphique, donc il fonctionne sur chaque NOMAD. Il est également plus prudent avec les noms: demandé de traduire une page, l'assistant d'IA va volontiers traduire "Project NOMAD" dans une autre langue, et cela ne le fera pas.

**Choisir des langues:** Le français, l'espagnol et l'allemand sont configurés par défaut. Pour ajouter ou supprimer des langues:

1. Dans le **Catalogue d’applications**, ouvrez la bibliothèque traduite **Gérer** menu et choisir **Modifier**.
2. Sous **Variables d'environnement**, trouver `TRANSLATE_LANGS=fr,es,de`.
3. Modifier la liste des codes de langue, séparés par des virgules. Par exemple, `TRANSLATE_LANGS=fr,es,de,sv` Ajoute le suédois.
4. Cliquez sur **Enregistrer**. L'application redémarre, télécharge toutes les nouvelles langues et ajoute un bouton pour chacune d'elles à la **Traduire cette page** bar.

L'ajout d'une langue nécessite de connexion Internet, et chacun prend entre environ 45 Mo et 140 Mo de disque. Les langues que vous avez déjà continuent de travailler hors ligne. Supprimer un code de la liste ne supprime pas une langue que vous avez déjà téléchargée; il reste dans `storage/translate/models` et garde son bouton.

Ces 50 langues sont disponibles. Le chinois n'est pas encore disponible.

| Langue      | Code |
| ----------- | ---- |
| Afrikaans   | `af` |
| arabe       | `ar` |
| Basque      | `eu` |
| Bengali     | `bn` |
| Bosniaque   | `bs` |
| Bulgares    | `bg` |
| catalan     | `ca` |
| Croate      | `hr` |
| tchèque     | `cs` |
| danois      | `da` |
| néerlandais | `nl` |
| estonien    | `et` |
| Finlandais  | `fi` |
| Français    | `fr` |
| Galicien    | `gl` |
| allemand    | `de` |
| grec        | `el` |
| Gujarati    | `gu` |
| Hébreu      | `he` |
| Hindi       | `hi` |
| hongroises  | `hu` |
| Islandais   | `is` |
| Indonésien  | `id` |
| italien     | `it` |
| japonais    | `ja` |
| Kannada     | `kn` |
| Coréen      | `ko` |
| Letton      | `lv` |
| Lituanien   | `lt` |
| malais      | `ms` |
| Malayalam   | `ml` |
| Marathi     | `mr` |
| norvégien   | `nb` |
| Persan      | `fa` |
| polonais    | `pl` |
| Portugais   | `pt` |
| Roumain     | `ro` |
| russe       | `ru` |
| serbe       | `sr` |
| slovaque    | `sk` |
| Slovène     | `sl` |
| Espagnol    | `es` |
| suédois     | `sv` |
| Tamoul      | `ta` |
| Telugu      | `te` |
| thaïlandais | `th` |
| turc        | `tr` |
| ukrainien   | `uk` |
| Urdu        | `ur` |
| Vietnamien  | `vi` |

**Le premier départ a besoin d'Internet.** Les modèles de langage sont téléchargés lorsque l'application s'exécute pour la première fois, la même chose que l'installation de toute autre application. Après cela, il est entièrement hors ligne. Si vous installez cela pendant que vous êtes déconnecté, l'application démarre toujours et la bibliothèque fonctionne toujours, juste sans traduction jusqu'à ce qu'elle puisse récupérer les modèles.

**Ce qu'il ne traduit pas:** tableaux et infoboxes, le titre de la page dans l'onglet de votre navigateur et les propres résultats de recherche de Kiwix. La recherche correspond également à la langue originale, alors regardez les choses en anglais et traduisez l'article sur lequel vous atterrissez.

**Une note sur deux boutons de langue:** la barre d'outils de la bibliothèque a un globe qui change le *menus* autour de la page. La barre que cette application ajoute change la *article*. Ce sont des choses différentes et s’asseoir les uns des autres, ce qui est malheureux mais pas quelque chose que nous pouvons déplacer.

**Précision:** C'est de la traduction automatique, et c'est littéral. C’est très bon pour avoir le sens d’un article. Faites attention à compter sur elle pour un libellé médical ou de sécurité exact, où le terme correct dans une autre langue n'est souvent pas le texte littéral.

**Vos données:** Les modèles de langage vivent en `storage/translate/models`. Rien de ce que vous avez lu n'est stocké ou envoyé nulle part.

**Fonctionne hors ligne:** Oui, une fois les modèles téléchargés.
