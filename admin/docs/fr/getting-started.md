# Débuter avec NOMAD

Ce guide vous aidera à tirer le meilleur parti de votre serveur NOMAD.

---

## Exigences du système

Si vous avez déjà NOMAD en cours d'exécution, vous pouvez sauter cette section. C'est ici pour quand vous planifiez un deuxième serveur, que vous passez à un matériel différent ou que vous aidez quelqu'un d'autre à se mettre en place.

### Système d'exploitation

NOMAD fonctionne sur Linux basé sur Debian.

| Niveau de soutien            | Système d'exploitation                    |
| ---------------------------- | ----------------------------------------- |
| **Recommandé**               | Ubuntu 26.04 LTS                          |
| **Également soutenu**        | Ubuntu 24.04 LTS, Debian 12               |
| **Soutien de la communauté** | Windows via WSL2, d'autres dérivés Debian |

Ubuntu 26.04 LTS est la version sur laquelle nous testons et celle que nous recommandons pour les nouvelles installations. Si vous exécutez déjà 24.04 LTS ou Debian 12, il n'est pas nécessaire de réinstaller, les deux sont toujours pris en charge.

Ubuntu Desktop est le choix le plus convivial si vous venez de Windows ou macOS. Ubuntu Server fonctionne tout aussi bien si vous êtes à l'aise au terminal, et NOMAD n'a pas besoin d'un environnement de bureau de toute façon puisque tout est accessible via un navigateur.

Les distributions macOS et non Debian comme Fedora ou Arch ne sont pas officiellement prises en charge.

### Hardware

NOMAD lui-même est léger. Ce qui motive vos exigences, ce sont le contenu et les outils que vous choisissez d’installer et si vous souhaitez exécuter l’IA localement.

**Minimum, sans IA locale:**

- Processeur double cœur 2 GHz
- 4 GB RAM
- 5 Go d'espace disque libre, plus de la place pour le contenu que vous téléchargez

**Recommandé, avec l'IA locale:**

- AMD Ryzen 7 ou Intel Core i7 ou mieux
- 32 Go de RAM
- NVIDIA RTX 3060 ou équivalent AMD, plus de VRAM vous permet d'exécuter des modèles plus grands
- 250 Go ou plus d'espace disque libre, de préférence un SSD

Une connexion Internet stable est nécessaire lors de l'installation seulement. Après cela, NOMAD est conçu pour fonctionner entièrement hors ligne.

### Une note sur les pilotes GPU

L'installateur configure Docker et la boîte à outils NVIDIA Container Toolkit pour vous, mais il le fait **pas** installer le pilote GPU lui-même. Vous en avez besoin sur l'hôte à l'avance.

Sur Ubuntu, le plus simple est de vérifier **"Installer des pilotes tiers pour les graphiques et le matériel Wi-Fi"** pendant la configuration. Si vous avez ignoré cela, ou si vous avez ajouté le GPU plus tard, installez le pilote d'abord, puis utilisez **Force Réinstaller** sur l'assistant d'IA dans le [Catalogue d’applications](/supply-depot) pour le ramasser.

Sans GPU, l'assistant d'IA fonctionne toujours. Il fonctionne simplement sur le processeur, ce qui est considérablement plus lent.

---

## Assistant de configuration facile

Si c'est la première fois que vous utilisez NOMAD, l'assistant Easy Setup vous aidera à tout configurer.

**[Lancement Easy Setup →](/easy-setup)**

![Easy Setup Wizard — Step 1: Choose your capabilities](/docs/easy-setup-step1.webp)

Le magicien vous guide à travers quatre étapes simples:

1. **Capacités** — Choisir ce qu'il faut activer: Bibliothèque d'information, Assistant d'IA, Plateforme d'éducation, Cartes, Outils de données et Notes
2. **Cartes** — Sélectionner des régions géographiques pour des cartes hors ligne
3. **Contenus** — Choisissez des collections de contenu organisées avec des niveaux essentiels, standard ou complets

![Content tiers — Essential, Standard, and Comprehensive](/docs/easy-setup-tiers.webp)
4\. **Récapitulatif** — Confirmez vos sélections et commencez à télécharger

Selon ce que vous avez sélectionné, les téléchargements peuvent prendre un certain temps. Vous pouvez suivre la progression dans la zone Paramètres, continuer à utiliser les fonctionnalités déjà installées ou laisser votre serveur fonctionner pendant la nuit pour les téléchargements importants.

---

## Comprendre vos outils

### Bibliothèque d'information — Connaissances hors ligne (Kiwix)

La bibliothèque d'information stocke des versions compressées de sites Web et de références qui fonctionnent sans Internet.

**Ce qui est inclus:**

- Wikipédia complète (en millions d'articles)
- Références médicales et guides de premiers soins
- Guides pratiques et information de survie
- Catégorie: Livre classique du projet Gutenberg

**Comment l'utiliser:**

1. Cliquez sur **Bibliothèque documentaire** à partir de l'écran d'accueil du centre de commandement ou du [Catalogue d’applications](/supply-depot)
2. Choisissez une collection (comme Wikipedia)
3. Rechercher ou naviguer comme le site Web régulier

---

### Plateforme d'éducation — Cours hors ligne (Kolibri)

La plate-forme d'éducation fournit des cours éducatifs complets qui fonctionnent hors ligne.

**Ce qui est inclus:**

- Cours vidéo de l'Académie Khan
- Maths, sciences, lecture, et plus
- Suivi des progrès pour les apprenants
- Fonctionne pour tous les âges

**Comment l'utiliser:**

1. Cliquez sur **Plateforme éducative** à partir de l'écran d'accueil du centre de commandement ou du [Catalogue d’applications](/supply-depot)
2. Connectez-vous ou créez un compte apprenant
3. Parcourir les cours et commencer à apprendre

**Conseil :** Kolibri prend en charge plusieurs utilisateurs. Créer des comptes pour chaque membre de la famille pour suivre les progrès individuels.

---

### Assistant AI — Chat intégré

![AI Chat interface](/docs/ai-chat.webp)

NOMAD inclut une interface de chat d'IA intégrée alimentée par Ollama. Il fonctionne entièrement sur votre serveur – pas d’Internet nécessaire, aucune donnée envoyée nulle part.

**Que peut-il faire:**

- Répondre aux questions sur n'importe quel sujet
- Expliquez simplement les concepts complexes
- Aide à l'écriture et à l'édition
- Référencez vos documents téléchargés via la Base de connaissances
- Brainstorming idées et aide à la résolution de problèmes

**Comment l'utiliser:**

1. Cliquez sur **Le chat AI** du centre de commandement ou aller à [Chat](/chat)
2. Tapez votre question ou votre demande
3. L’IA répond dans un style conversationnel

**Conseil :** Soyez précis dans vos questions. Au lieu de "me parler des plantes", essayez "quels légumes poussent bien à l'ombre?"

**Note:** L'assistant d'IA doit être installé en premier. Activez-le pendant Easy Setup ou installez-le à partir du [Catalogue d’applications](/supply-depot).

**Accélération du GPU:** Si votre serveur dispose d'un GPU NVIDIA, le programme d'installation de NOMAD met en place un support GPU pour vous (il installe le [Boîte à outils de conteneur NVIDIA](https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/latest/install-guide.html) et configure Docker automatiquement). Vous n'avez besoin que du pilote NVIDIA présent sur l'hôte, que vous obtenez sur Ubuntu en activant "Installer les pilotes tiers" lors de la configuration. Avec un GPU, les réponses à l'IA sont considérablement plus rapides (10-20x d'amélioration). Si vous ajoutez un GPU plus tard, allez à la [Catalogue d’applications](/supply-depot) et **Force Réinstaller** l'assistant AI pour l'activer.

---

### Base de connaissances — Document-Aware AI

![Knowledge Base upload interface](/docs/knowledge-base.webp)

La base de connaissances vous permet de télécharger des documents afin que l’IA puisse les référencer lorsque vous répondez à vos questions. Il utilise la recherche sémantique (RAG via Qdrant) pour trouver des informations pertinentes à partir de vos fichiers téléchargés.

**Types de fichiers pris en charge:**

- PDF, fichiers texte et autres formats de documents
- La documentation NOMAD est automatiquement chargée lorsque l'assistant d'IA est installé

**Comment l'utiliser:**

1. Allez à **[Base de connaissances →](/knowledge-base)**
2. Téléchargez vos documents (PDF, fichiers texte, etc.)
3. Les documents sont traités et indexés automatiquement
4. Posez des questions dans AI Chat — l'IA référencera vos documents téléchargés lorsque ce s'en verra
5. Supprimez les documents dont vous n'avez plus besoin - ils seront supprimés de l'index et du stockage local

**Cas d'utilisation:**

- Télécharger des plans d'urgence pour une référence rapide pendant une crise
- Chargez les manuels techniques et les SOP pour les sites de travail hors ligne
- Ajouter des guides de programme pour l'école à domicile
- Magasiner des documents de recherche pour le travail académique

---

### Cartes — Navigation hors ligne

![Offline maps viewer](/docs/maps.webp)

Voir les cartes sans internet. Téléchargez les régions dont vous avez besoin avant de vous déconnecter.

**Comment l'utiliser:**

1. Cliquez sur **Cartes** du Centre de commandement
2. Naviguer en faisant glisser et zoomer
3. Recherche d'emplacements en utilisant la barre de recherche

**Pour ajouter d'autres régions de carte:**

1. Allez à **Paramètres → Gestionnaire de cartes**
2. Sélectionnez les régions dont vous avez besoin
3. Cliquez sur Télécharger

**Conseil :** Téléchargez des cartes pour les zones où vous voyagez fréquemment, ainsi que les régions voisines au cas où.

**[Cartes ouvertes →](/maps)**

---

## Gérer Votre Serveur

### Ajouter plus de contenu

Au fur et à mesure que vos besoins changent, vous pouvez ajouter plus de contenu à tout moment:

- **Plus d'applications:** Paramètres → Dépôt d'approvisionnement
- **Plus de références:** Paramètres → Explorateur de contenu ou gestionnaire de contenu
- **Plus de régions cartographiques:** Paramètres → Gestionnaire de cartes
- **Plus de contenu éducatif:** Via le navigateur de contenu intégré de Kolibri

### Wikipédia Sélecteur

![Content Explorer — browse and download Wikipedia packages and curated collections](/docs/content-explorer.webp)

NOMAD inclut un outil de gestion de contenu Wikipédia dédié pour la navigation et le téléchargement de paquets Wikipédia.

**Comment l'utiliser:**

1. Allez à **[Élateur de contenu →](/settings/zim/remote-explorer)**
2. Parcourir les paquets Wikipedia disponibles par langue et taille
3. Sélectionnez et téléchargez les paquets que vous voulez

**Note:** La sélection d'un autre paquet Wikipédia remplace la version précédemment téléchargée. Une seule sélection de Wikipédia est active à la fois.

### Référence du système

![System Benchmark with NOMAD Score and Builder Tag](/docs/benchmark.webp)

Testez vos performances matérielles et voyez comment votre construction NOMAD s'accumule contre la communauté.

**Comment l'utiliser:**

1. Allez à **[Référence du système →](/settings/benchmark)**
2. Choisissez un type de référence: Plein, système uniquement ou IA seulement
3. Affichez votre score NOMAD (un composite pondéré des performances CPU, mémoire, disque et IA)
4. Créer une balise Builder (votre identité sur le thème NOMAD, comme "Tactical-Llama-1234")
5. Partagez vos résultats avec le [classement communautaire](https://benchmark.projectnomad.us)

**Note:** Seuls les benchmarks complets avec des données d'IA peuvent être partagés au classement communautaire.

### Tenir les choses à jour

Pendant que vous avez Internet, vérifiez périodiquement les mises à jour:

1. Allez à **Paramètres → Vérifier les mises à jour**
2. Si des mises à jour sont disponibles, cliquez sur pour installer
3. Attendez que la mise à jour soit terminée (votre serveur redémarre)

Les mises à jour de contenu (Wikipedia, maps, etc.) peuvent être gérées séparément des mises à jour logicielles.

**Mises à jour automatiques:** NOMAD peut également se maintenir à jour sans que vous ayez à vérifier. Le logiciel, les applications installées et le contenu peuvent chacun être configurés pour être mis à jour automatiquement sur une base d'opt-in, avec des vérifications de sécurité et une fenêtre de temps que vous contrôlez. Voir le **[Guide de mises à jour](/docs/updates)** pour l'image complète.

**Canal d'accès anticipé:** Vous voulez les dernières fonctionnalités avant qu'elles ne frappent stable? Activez le canal d'accès anticipé à partir de la page Vérifier les mises à jour pour recevoir les versions des candidats. Vous pouvez revenir à la stabilité à tout moment.

### Système de surveillance Santé

Vérifiez sur votre serveur à tout moment:

1. Allez à **Paramètres → Système**
2. Afficher l'utilisation du CPU, de la mémoire et du stockage
3. Vérifier la disponibilité et l'état du système

---

## Conseils pour les meilleurs résultats

### Avant De Passer Hors Ligne

- **Mettre à jour tout** — Effectuer des mises à jour logicielles et de contenu
- **Télécharger ce dont vous avez besoin** — Cartes, références, contenu éducatif
- **Testez-le** — Assurez-vous que les fonctionnalités fonctionnent tant que vous avez encore Internet à dépanner

### Gestion du stockage

Votre serveur a un stockage limité. Prioriser:

- Contenu que vous utiliserez réellement
- Références critiques (médicales, survie)
- Cartes pour votre région
- Contenu éducatif correspondant à vos besoins

Vérifiez l'utilisation du stockage dans **Paramètres → Système**.

### Obtenir de l'aide

- **Docs in-app:** Vous les lisez maintenant
- **Assistant d'IA:** Poser une question dans [Le chat AI](/chat)
- **Notes de sortie:** Voir les nouveautés de chaque version

---

## Prochaines étapes

Vous êtes prêt à utiliser NOMAD Voici quelques choses à essayer:

1. **Regarde quelque chose** — Rechercher un sujet dans la bibliothèque d'information
2. **Apprendre quelque chose** — Lancement d'un cours de Khan Academy sur la plateforme d'éducation
3. **Posez une question** — Discuter avec l’IA dans [Le chat AI](/chat)
4. **Explorer les cartes** — Trouvez votre quartier dans le visualiseur Maps
5. **Télécharger un document** — Ajouter un PDF à la [Base de connaissances](/knowledge-base) et demander l'IA à ce sujet

Profitez de votre serveur de connaissances hors ligne!
