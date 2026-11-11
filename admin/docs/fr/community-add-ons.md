# Extensions communautaires

Project NOMAD comprend une sélection d’outils et de contenus intégrés. La communauté développe également des extensions qui ajoutent des collections spécialisées consultables hors ligne. Il s’agit de projets tiers, non maintenus par l’équipe NOMAD. Installez-les en connaissance de cause et signalez les problèmes ou demandes de fonctionnalités directement dans leur dépôt.

Vous avez créé une extension pour NOMAD ? Ouvrez un ticket sur le [dépôt GitHub de Project NOMAD](https://github.com/Crosstalk-Solutions/project-nomad/issues/new) ou contactez l’équipe via le [formulaire de projectnomad.us](https://www.projectnomad.us/contact). Votre proposition pourra être examinée pour figurer sur cette page.

---

## Collections de contenus ZIM

Les collections ZIM ajoutent des ressources documentaires hors ligne à votre bibliothèque Kiwix existante. Elles comprennent généralement un script `install.sh` qui télécharge les documents sources, construit une archive ZIM avec `zimwriterfs`, puis l’enregistre auprès du conteneur Kiwix actif.

### Manuels militaires de terrain américains

**Dépôt :** [github.com/jrsphoto/ZIM-military-field-manuals](https://github.com/jrsphoto/ZIM-military-field-manuals)

Environ 180 manuels militaires américains du domaine public consacrés notamment à la médecine de terrain, à la survie, aux premiers secours en situation de combat et à la lecture de cartes. Ils sont regroupés dans une archive ZIM interrogeable et intégrable à votre bibliothèque Kiwix.

L’archive finale occupe environ 2 Go. Sa construction nécessite de télécharger environ 2 Go de PDF depuis archive.org.

### Archive des cours W3Schools

**Dépôt :** [github.com/kennethbrewer3/ZIM-w3schools-offline](https://github.com/kennethbrewer3/ZIM-w3schools-offline)

Une copie hors ligne complète des tutoriels de programmation W3Schools : HTML, CSS, JavaScript, Python, SQL, etc. Elle permet d’apprendre à programmer, de consulter une syntaxe ou d’enseigner sans accès à Internet.

L’archive ZIM finale représente environ 700 Mo. Sa construction télécharge environ 6 Go de sources depuis un miroir GitHub.

---

## Installer une extension communautaire

Chaque extension dispose de ses propres instructions. La plupart des collections ZIM suivent toutefois les mêmes étapes :

1. Cloner le dépôt de l’extension sur le serveur NOMAD via SSH.
2. Consulter le README pour connaître les dépendances de construction. La plupart nécessitent `git`, `python3`, `unzip` et `zim-tools`.
3. Exécuter le script `install.sh` fourni avec l’option `--deploy`, en indiquant le chemin de la bibliothèque Kiwix (`/opt/project-nomad/storage/zim`) et le nom du conteneur Kiwix (`nomad_kiwix_server`).
4. Le script génère l’archive ZIM, la copie dans la bibliothèque, l’enregistre auprès de Kiwix, puis redémarre le conteneur Kiwix.

Une fois le script terminé, le nouveau contenu apparaît dans la bibliothèque documentaire lors de son prochain chargement.

Selon la taille de la collection et les performances du processeur, la construction initiale peut prendre de quelques minutes à plus d’une heure.

---

## Assistance et maintenance

Ces extensions sont créées et maintenues par la communauté. Si un script d’installation ou le contenu d’une archive ZIM présente un problème, ouvrez un ticket dans le dépôt de l’extension concernée, et non celui de Project NOMAD. L’équipe NOMAD peut intervenir lorsqu’un dysfonctionnement provient de NOMAD lui-même, par exemple si Kiwix ne détecte pas une nouvelle archive ZIM, mais elle ne peut pas assurer la maintenance des contenus tiers.
