# Questions fréquemment posées

## Questions générales

### Qu'est-ce que NOMAD?

NOMAD est un serveur personnel qui vous donne accès à la connaissance, à l'éducation et à l'assistance en matière d'IA sans nécessiter de connexion Internet. Il fonctionne sur votre propre matériel, gardant vos données privées et accessibles à tout moment.

### Ai-je besoin d'Internet pour utiliser NOMAD?

Non, c'est tout l'intérêt. Une fois votre contenu téléchargé, tout fonctionne hors ligne. Vous avez seulement besoin d'Internet pour:

- Télécharger du nouveau contenu
- Mettre à jour le logiciel
- Synchroniser les dernières versions de Wikipédia, les cartes, etc.

### De quel système d’exploitation NOMAD a-t-il besoin ?

Linux basé sur Debian. **Ubuntu 26.04 LTS est ce que nous recommandons et testons sur** pour les nouvelles installations.

Ubuntu 24.04 LTS et Debian 12 sont également pris en charge, il n'est donc pas nécessaire de réinstaller si vous êtes déjà sur l'un d'entre eux. Les utilisateurs de Windows peuvent suivre le [Guide WSL2](https://www.projectnomad.us/install/wsl2), qui est soutenue par la communauté.

Les distributions macOS et non Debian comme Fedora ou Arch ne sont pas officiellement prises en charge. NOMAD n'a pas besoin d'un environnement de bureau, donc Ubuntu Server est un bon choix si vous êtes à l'aise au terminal.

Pour une visite complète, y compris l'installation d'Ubuntu elle-même, voir le [Guide d'installation](https://www.projectnomad.us/install).

### De quel matériel ai-je besoin ?

NOMAD est conçu pour le matériel capable, surtout si vous voulez utiliser les fonctionnalités d'IA. Recommandé:

- Processeur multi-cœur moderne (AMD Ryzen 7 avec graphiques Radeon est le sweet spot communautaire)
- 16GB+ RAM (32Go+ pour les meilleures performances d'IA)
- Stockage SSD (la taille dépend du contenu — 500Go minimum, 1TB+ recommandé)
- GPU NVIDIA ou AMD recommandé pour des réponses d'IA plus rapides

**Pour des recommandations détaillées de construction à trois prix ($150–$1,000+), voir le [Guide du hardware](https://www.projectnomad.us/hardware).**

### De combien de RAM ai-je besoin ?

**Sans l'assistant AI, toute la pile est inférieure à 1Go.** Mesuré sur une course à pied
installation: le Centre de commande 241MB, MySQL 444MB, Redis 9MB, Kiwix 101MB, et le
Indice de base de connaissances 155MB. C’est pourquoi 4GB est un vrai minimum plutôt qu’un
Défensif un.

**L'IA est la variable, et c'est le modèle plutôt que NOMAD.** Ollama nuit à
environ 1.2GB, et un modèle a besoin de son résident de taille de téléchargement pendant qu'il répond,
Ainsi, un modèle 8B à \~4.6GB veut à peu près autant sur le dessus. **8GB est réalisable pour un petit modèle, 16GB est confortable, et 32GB est la recommandation si vous voulez exécuter des plus grands.**

D'où vient cette mémoire dépend de votre matériel. Avec un GPU discret le modèle
se charge dans VRAM et ne touche jamais la mémoire vive du système, donc VRAM est le nombre qui limite
modèles que vous pouvez exécuter. Avec un GPU intégré ou pas de GPU du tout, il sort du système
RAM, c'est pourquoi une boîte uniquement CPU a besoin d'en faire plus.

### De combien de stockage ai-je besoin ?

**Pour installer NOMAD lui-même: environ 5GB, alors laissez 10Go gratuit.** Cela couvre la
Command Center et sa base de données, avant tout contenu. Ajouter l'assistant d'IA
porte le total à environ 25Go, car Ollama et un modèle à usage général sont
les deux grands.

Après cela, cela dépend entièrement de ce que vous téléchargez:

- Wikipédia: \~95GB
- Cours de l'Académie Khan: \~50GB
- Références médicales: \~500MB
- Cartes d'état américain: \~2-3GB chacun
- Modèles d'IA: 10-40GB selon le modèle

Commencez avec l'essentiel et ajoutez-en plus au besoin.

---

## Questions de contenu

### Comment ajouter plus de contenu Wikipédia ?

1. Allez à **Paramètres** (manus du hamburger → Paramètres)
2. Cliquez sur **Explorateur de contenus**
3. Parcourir les paquets Wikipédia disponibles
4. Cliquez sur Télécharger sur les éléments que vous voulez

Vous pouvez également utiliser le **Explorateur de contenus** pour parcourir tous les contenus ZIM disponibles au-delà de Wikipédia.

### Comment ajouter plus de cours éducatifs ?

1. Ouvrir **Kolibri**
2. Se connecter en tant qu'administrateur
3. Allez à **Appareil → Canaux**
4. Parcourir et importer les canaux disponibles

### Quelle est la durée du contenu ?

Le contenu est aussi actuel que lorsqu'il a été téléchargé pour la dernière fois. Les snapshots de Wikipédia sont généralement mis à jour mensuellement. Vérifiez les noms de fichiers ou les descriptions pour les dates.

### Puis-je ajouter mes propres fichiers ?

Oui, avec la base de connaissances. Télécharger des PDF, des fichiers texte et d'autres documents sur le [Base de connaissances](/knowledge-base), et l'IA peut les référencer en répondant à vos questions. Cela utilise la recherche sémantique pour trouver des informations pertinentes à partir de vos fichiers téléchargés.

Pour le contenu Kiwix, NOMAD utilise des fichiers ZIM standard. Pour le contenu éducatif, Kolibri utilise son propre format de canal.

### Quels sont les niveaux de collection organisés?

Lors de la sélection du contenu dans l'assistant Easy Setup ou l'Explorateur de contenu, les collections sont organisées en trois niveaux:

- **essentiel** — Contenu de base pour la catégorie (plus petit téléchargement)
- **Norme** — Contenu indispensable plus supplémentaire
- **Complète** — Tout ce qui est disponible pour la catégorie (plus grand téléchargement)

Cela vous aide à équilibrer la couverture de contenu par rapport à l'utilisation du stockage.

---

## Questions d'IA

### Comment utiliser le chat AI ?

1. Allez à [Le chat AI](/chat) du Centre de commandement
2. Tapez votre question ou votre demande
3. L’IA répond dans un style conversationnel

L'IA doit d'abord être installée - activez-la pendant Easy Setup ou installez-la à partir de la [Catalogue d’applications](/supply-depot) page.

### Comment puis-je télécharger des documents sur la base de connaissances?

1. Allez à **[Base de connaissances →](/knowledge-base)**
2. Téléchargez vos documents (PDF, fichiers texte, etc.)
3. Les documents sont traités et indexés automatiquement
4. Posez des questions dans AI Chat — l'IA référencera vos documents téléchargés lorsque ce s'en verra

Vous pouvez également supprimer des documents de la Base de connaissances lorsqu'ils ne sont plus nécessaires.

La documentation NOMAD est automatiquement ajoutée à la base de connaissances lorsque l'assistant d'IA est installé.

### Qu'est-ce que le système de référence?

Le benchmark système teste les performances de votre matériel et génère un score NOMAD – un composite pondéré des performances du processeur, de la mémoire, du disque et de l’IA. Vous pouvez créer une balise Builder (une identité sur le thème de NOMAD comme "Tactical-Llama-1234") et partager vos résultats avec le [classement communautaire](https://benchmark.projectnomad.us).

Allez à **[Référence du système →](/settings/benchmark)** pour en courir un.

### Qu'est-ce que le canal d'accès anticipé?

Le canal d'accès anticipé vous permet de choisir de recevoir des builds de candidats de version avec les dernières fonctionnalités et améliorations avant qu'ils n'atteignent les versions stables. Vous pouvez l'activer ou le désactiver **Paramètres → Vérifier les mises à jour**. Les versions d'accès anticipé peuvent contenir des bugs - si vous préférez la stabilité, restez sur le canal stable.

---

## Dépannage

### Une fonctionnalité ne charge pas ou affiche une page blanche

**Essayez ces étapes:**

1. Attendez 30 secondes — certaines fonctionnalités prennent du temps pour commencer
2. Actualiser la page (Ctrl+R ou Cmd+R)
3. Retournez au centre de commandement et essayez à nouveau
4. Vérifiez Paramètres → Système pour voir si le service est en cours d'exécution
5. Essayez de redémarrer le service (Arrêtez, puis Démarrez dans le dépôt d'approvisionnement)

### Les cartes montrent une zone grise/blanche

La fonction Maps nécessite des données cartographiques téléchargées. Si vous voyez une zone vide:

1. Allez à **Paramètres → Gestionnaire de cartes**
2. Téléchargez des régions de carte pour votre région
3. Attendez que les téléchargements se terminent
4. Retour à Cartes et actualiser

### ERREUR: Échoué à charger le fichier de bibliothèque XML '/data/kiwix-library.xml'

Cela signifie généralement que le service de bibliothèque d'information a commencé avant que son index de bibliothèque Kiwix ne soit entièrement initialisé.

Essayez ce flux de récupération:

1. Allez à **[Catalogue d’applications](/supply-depot)**
2. Arrête **Bibliothèque d'information (Kiwix)**
3. Attendez 10-15 secondes, puis recommencez
4. Si l'erreur persiste, exécutez **Force Réinstaller** pour la bibliothèque d'information de la même page

Une fois le redémarrage/réinstallation terminé, actualisez la page Bibliothèque d'information.

### Les réponses à l'IA sont lentes

L’IA locale nécessite une puissance de calcul importante. Pour améliorer la vitesse:

- **Ajouter un GPU** — Un GPU NVIDIA avec la boîte à outils NVIDIA Container peut améliorer la vitesse de l'IA de 10-20x ou plus
- Fermer d'autres applications sur le serveur
- Assurer un refroidissement adéquat (la surchauffe provoque l'étranglement)
- Envisagez d'utiliser un modèle d'IA plus petit/plus rapide si disponible

### Comment puis-je activer l'accélération GPU pour l'IA?

NOMAD détecte automatiquement les GPU NVIDIA lorsque la boîte à outils NVIDIA Container est installée sur le système hôte. Pour mettre en place l'accélération GPU:

1. **Installer un GPU NVIDIA** sur votre serveur (s'il n'est pas déjà présent)
2. **Installez la boîte à outils NVIDIA Container Toolkit** sur l'hôte — suivez le [Guide officiel d'installation](https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/latest/install-guide.html)
3. **Réinstaller l'assistant d'IA** — Aller à [Catalogue d’applications](/supply-depot), trouvez AI Assistant, et cliquez **Force Réinstaller**

NOMAD détectera le GPU lors de l'installation et configurera l'IA pour l'utiliser automatiquement. Vous verrez "NVIDIA container runtime détecté" dans la progression de l'installation.

**Conseil :** Courir un [Référence du système](/settings/benchmark) avant et après pour voir la différence. Les systèmes accélérés par GPU voient généralement 100+ jetons par seconde vs 10-15 sur CPU seulement.

### J'ai ajouté/changé mon GPU mais l'IA est encore lente

Lorsque vous ajoutez ou échangez un GPU, NOMAD doit reconfigurer le conteneur d'IA pour l'utiliser:

1. Assurez-vous que le **Boîte à outils de conteneur NVIDIA** est installé sur l'hôte
2. Allez à **[Catalogue d’applications](/supply-depot)**
3. Trouver le **Assistant IA** et cliquez sur **Force Réinstaller**

Force Reinstall recrée le conteneur d'IA avec le support GPU activé. Sans cette étape, l'IA continue à fonctionner uniquement sur CPU.

### Je vois un avertissement "GPU passthrough non working"

NOMAD vérifie si votre GPU est réellement accessible à l'intérieur du conteneur d'IA. Si un GPU est détecté sur l'hôte mais ne fonctionne pas à l'intérieur du conteneur, vous verrez une bannière d'avertissement sur les pages Informations sur le système et Paramètres d'IA. Cliquez sur le **"Réparation: Réinstaller AI Assistant"** bouton pour recréer le conteneur avec un accès GPU approprié. Cela préserve vos modèles d'IA téléchargés.

### Le chat AI n'est pas disponible

La page de chat AI nécessite l'installation de l'assistant AI en premier:

1. Allez à **[Catalogue d’applications](/supply-depot)**
2. Installer le **Assistant IA**
3. Attendez que l'installation soit terminée
4. Le chat AI sera alors accessible depuis l'écran d'accueil ou [Chat](/chat)

### Base de connaissances upload bloqué

Si un téléchargement de document apparaît bloqué dans la base de connaissances:

1. Vérifiez que l'assistant d'IA est en cours d'exécution **Paramètres → Dépôt d'approvisionnement**
2. Les gros documents prennent du temps à traiter — attendez quelques minutes
3. Essayez de télécharger un document plus petit pour vérifier que le système fonctionne
4. Check **Paramètres → Système** pour tous les messages d'erreur

### Le benchmark ne se soumettra pas au classement

Partager les résultats avec le classement communautaire:

- Vous devez gérer un **Composante complète** (pas système seulement ou AI uniquement)
- Le benchmark doit inclure les résultats de l'IA (Assistant d'IA doit être installé et fonctionnel)
- Votre score doit être plus élevé que toute soumission précédente du même matériel

Si la soumission échoue, vérifiez le message d'erreur pour plus de détails.

### "Service indisponible" ou erreurs de connexion

Le service pourrait encore démarrer. Attendez 1-2 minutes et essayez à nouveau.

Si le problème persiste:

1. Allez à **Paramètres → Dépôt d'approvisionnement**
2. Trouvez le service problématique
3. Cliquez sur **Redémarrer**
4. Attendez 30 secondes, puis essayez à nouveau

### Les téléchargements sont bloqués ou défaillants

1. Vérifiez votre connexion internet
2. Allez à **Paramètres** et vérifier le stockage disponible
3. Si le stockage est complet, supprimez le contenu inutilisé
4. Annuler le téléchargement bloqué et réessayer

### Le serveur ne démarre pas

Si vous ne pouvez pas accéder au centre de commandement:

1. Vérifiez que le matériel du serveur est sous tension
2. Vérifier la connectivité réseau
3. Essayez d'accéder directement via l'adresse IP du serveur
4. Vérifiez les journaux du serveur si vous avez un accès à la console

### J'ai oublié mon mot de passe Kolibri

Les mots de passe Kolibri sont gérés séparément:

1. Si vous êtes un administrateur, vous pouvez réinitialiser les mots de passe des utilisateurs dans la gestion des utilisateurs de Kolibri
2. Si vous avez oublié le mot de passe administrateur, vous devrez peut-être le réinitialiser via la ligne de commande (contactez votre administrateur)

---

## Mises à jour et maintenance

### Comment mettre à jour NOMAD ?

1. Allez à **Paramètres → Vérifier les mises à jour**
2. Si une mise à jour est disponible, cliquez sur pour installer
3. Le système téléchargera automatiquement les mises à jour et redémarrera automatiquement
4. Cela prend généralement 2 à 5 minutes

### Dois-je mettre à jour régulièrement ?

Oui, pendant que vous avez accès à Internet. Les mises à jour comprennent:

- Corrections de bugs
- Nouvelles fonctionnalités
- Améliorations de sécurité
- Améliorations de performance

### NOMAD peut-il se mettre à jour automatiquement ?

Oui. NOMAD peut garder son logiciel, ses applications installées et son contenu à jour. Les mises à jour automatiques sont **opt-in et off par défaut** — vous vous allumez ce que vous voulez de **Paramètres → Mises à jour** (et, pour les applications, une bascule par application dans le dépôt d'approvisionnement). Ils ne s'exécutent qu'à l'intérieur d'une fenêtre temporelle que vous choisissez, après vérification de sécurité, et n'appliquent jamais automatiquement les sauts de version majeure. Voir le **[Guide de mises à jour](/docs/updates)** pour une promenade complète.

### Comment mettre à jour le contenu (Wikipedia, etc.) ?

Les mises à jour de contenu sont distinctes des mises à jour logicielles:

1. Allez à **Paramètres → Gestionnaire de contenu** ou **Explorateur de contenus**
2. Vérifiez les versions plus récentes de votre contenu installé
3. Télécharger les versions mises à jour au besoin

Vous pouvez également activer **Mises à jour automatiques de contenu** ainsi installé Wikipédia/ZIM bibliothèques et régions cartographiques rafraîchir par eux-mêmes pendant la nuit — voir le [Guide de mises à jour](/docs/updates).

Astuce: De nouveaux instantanés de Wikipédia sont publiés environ mensuellement.

### Que se passe-t-il si une mise à jour échoue ?

Le système est conçu pour récupérer avec grâce. Si une mise à jour échoue:

1. La version précédente devrait continuer à fonctionner
2. Essayez à nouveau la mise à jour plus tard
3. Vérifier les paramètres → Système pour les messages d'erreur

### Maintenance de ligne de commande

Pour un dépannage avancé ou lorsque vous ne pouvez pas accéder à l'interface Web, NOMAD inclut des scripts d'aide dans `/opt/project-nomad`:

**Démarrer tous les services:**

```bash
sudo bash /opt/project-nomad/start_nomad.sh
```

**Arrêter tous les services:**

```bash
sudo bash /opt/project-nomad/stop_nomad.sh
```

**Mettre à jour le centre de commande:**

```bash
sudo bash /opt/project-nomad/update_nomad.sh
```

*Remarque: Ceci met à jour le centre de commande seulement, pas les applications individuelles. Mettre à jour les applications via l'interface web.*

**Désinstaller NOMAD:**

```bash
curl -fsSL https://raw.githubusercontent.com/Crosstalk-Solutions/project-nomad/refs/heads/main/install/uninstall_nomad.sh -o uninstall_nomad.sh
sudo bash uninstall_nomad.sh
```

*Attention: Cela ne peut pas être annulé. Toutes les données seront effacées.*

---

## Confidentialité et sécurité

### Mes données sont-elles privées ?

Oui. NOMAD fonctionne entièrement sur votre matériel. Vos recherches, vos conversations d'IA et vos données d'utilisation ne quittent jamais votre serveur.

### Est-ce que d'autres peuvent accéder à mon serveur ?

Par défaut, NOMAD est accessible sur votre réseau local. Toute personne sur le même réseau peut y accéder. Pour les réseaux publics, envisagez des mesures de sécurité supplémentaires.

### L’IA envoie-t-elle des données quelque part ?

Non. L'IA fonctionne complètement localement. Vos conversations ne sont envoyées à aucun service externe. Le chat d'IA est intégré au centre de commande - il n'y a pas de service séparé à configurer.

---

## Obtenir plus d'aide

### L'IA peut aider

Essayez de poser une question dans [Le chat AI](/chat). L’IA locale peut répondre à des questions sur de nombreux sujets, y compris le dépannage technique. Si vous avez téléchargé la documentation NOMAD dans la base de connaissances, cela peut également aider avec les questions spécifiques à NOMAD.

### Vérifier la documentation

Vous êtes dans les docs maintenant. Utilisez le menu pour trouver des sujets précis.

### Rejoignez la communauté

Obtenez de l'aide d'autres utilisateurs de NOMAD sur **[Discorde](https://discord.com/invite/crosstalksolutions)**.

### Notes de version

Voir ce qui a changé dans chaque version: **[Notes de version](/docs/release-notes)**
