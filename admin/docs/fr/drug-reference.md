# Références pharmaceutiques

La référence médicamenteuse est une base de données hors ligne et consultable de **Étiquettes de médicaments FDA**, les informations officielles qui viennent avec les médicaments en vente libre et sur ordonnance. Une fois qu'il est installé, vous pouvez chercher un médicament par son nom, travailler à l'envers d'une situation aux médicaments qui le traitent, et mettre deux étiquettes côte à côte, le tout sans connexion Internet.

C'est un module complémentaire optionnel. Un NOMAD frais ne l'a pas jusqu'à ce que vous choisissiez de l'installer, car l'ensemble de données est grand.

> **C'est de l'information sur la santé, pas des conseils médicaux.** La référence médicamenteuse vous montre le texte de l'étiquette FDA du fabricant et correspond aux situations aux options en vente libre. Il ne peut pas remplacer un médecin, un pharmacien ou une infirmière. Suivez toujours les instructions sur le produit réel que vous avez, et dans une véritable urgence, obtenez une aide professionnelle si vous le pouvez.

La première fois que vous ouvrez la référence de médicament dans un navigateur, vous verrez cet avertissement comme une boîte de dialogue que vous devez reconnaître avant que la page ne se charge. Cette reconnaissance est mémorisée par navigateur, de sorte qu'un navigateur ou un appareil différent le montrera à nouveau.

---

## L'installer

Il y a deux façons d'obtenir les données, et elles se retrouvent au même endroit.

**De l'Explorateur de contenu**, dans le cadre d'une collection:

1. Depuis l'écran d'accueil, ouvrez **Explorateur de contenus**.
2. Choisissez le **Médecine** catégorie.
3. Sélectionnez le **Norme** niveau. Son contenu est indiqué sur la carte, et vous verrez **Référence du médicament de la FDA** parmi eux.
4. Confirmez le téléchargement.

**À partir de la page de référence du médicament elle-même.** Ouvrir **Références pharmaceutiques** de l'écran d'accueil. Si aucune donnée n'est installée, vous obtiendrez un panneau "Pas de données de médicament de la FDA encore" avec un **Télécharger les données de médicaments de la FDA** bouton, qui démarre le même processus.

De toute façon, il fonctionne en deux étapes en arrière-plan:

- **Télécharger** — NOMAD tire l'ensemble de données d'openFDA drug-label, à propos **1,7 Go** compressé, en plusieurs parties. Si votre connexion tombe, elle se détache là où elle s'est arrêtée.
- **Indexation** — NOMAD ingère ces étiquettes dans une base de données de recherche hors ligne rapide. C'est l'étape la plus longue, et les données s'étendent à peu près **8 à 10 Go** sur le disque.

Vous n'avez pas besoin de vous asseoir et de regarder. Laissez la page et elle continue, et la recherche s'allume toute seule une fois l'indexation terminée. La page affiche les progrès pour les deux étapes pendant qu'elles s'exécutent.

---

## Trouver votre chemin autour

Tout vit derrière un seul **Références pharmaceutiques** Tuile sur l'écran d'accueil. Une fois les données installées, la page comporte trois onglets.

### Rechercher un médicament

Tapez un nom de médicament, une marque ou un générique, et NOMAD montre les étiquettes correspondantes de la FDA: à quoi s'adresse le médicament, le dosage, les avertissements et les ingrédients, directement de l'étiquette officielle du fabricant.

Les résultats sont **groupé par ingrédient actif** plutôt que répertorié comme des centaines de produits quasi-identiques. Une recherche d'un analgésique commun renvoie un groupe par ingrédient au lieu de chaque marque de magasin séparément, de sorte que vous pouvez voir ce que vous choisissez réellement entre.

### Par situation

Partez du problème au lieu du produit. Choisissez une ou plusieurs situations, telles que la brûlure, la fièvre ou la diarrhée, et NOMAD répertorie les médicaments dont les étiquettes de la FDA les couvrent.

Choisir plus d’une situation recherche les médicaments qui couvrent **Tous** d'entre eux d'abord, puis retombent à montrer des résultats pour chaque situation par elle-même. Cela est utile lorsque vous avez affaire à plus d’un symptôme à la fois et que vous voulez un seul produit si l’on existe.

### Données de la FDA

Montre d'où viennent les données et son état actuel: s'il est téléchargé, indexé et combien d'étiquettes sont chargées. C'est également là que vous allez pour réexécuter un téléchargement ou redémarrer l'indexation si quelque chose nécessite de l'attention.

---

## Comparaison de deux médicaments

À partir de la page de détail d'un médicament, utiliser **Comparer les avertissements d'étiquettes** mettre deux étiquettes côte à côte et lire ce que chacun dit.

Cela place les deux sections d'avertissement des fabricants l'une à côté de l'autre. Il ne permet **pas** de calculer les interactions médicamenteuses, et il ne vous dira pas si une combinaison est sûre. Décider si deux médicaments peuvent être pris ensemble est exactement le type de question à poser à un pharmacien ou à un médecin.

---

## Le garder à jour

Les étiquettes de la FDA changent avec le temps. Si vous vous êtes allumé **Mises à jour automatiques de contenu** (Paramètres → Mises à jour), NOMAD vérifie périodiquement si openFDA a publié un ensemble de données plus récent et actualise la référence du médicament par lui-même, de la même manière qu'il gère votre autre contenu hors ligne.

Avec les mises à jour automatiques désactivées, les données restent exactement comme vous l'avez installé, ce qui est bien pour une utilisation hors ligne. Vous pouvez toujours réexécuter le téléchargement à partir du **Données de la FDA** Onglette pour tirer le dernier.

---

## Une note sur le stockage

La référence médicamenteuse est le plus grand élément de la collection de médicaments → Standard. Budget autour **8 à 10 Go** de disque pour elle après indexation, en plus du téléchargement de 1,7 Go.

Si le stockage est serré, l'Explorateur de contenu affiche la taille totale d'un niveau avant de vous engager, de sorte que vous pouvez voir ce que vous prenez.
