# Référence de l’API

NOMAD expose une API REST pour l’ensemble de ses opérations. Tous les points d’accès sont regroupés sous `/api/` et renvoient des réponses JSON.

---

## Documentation interactive

La documentation complète des points d’accès est générée directement à partir des routes et des validateurs de l’application. Elle reste à jour et s’affiche dans une interface interactive [Scalar](https://scalar.com) :

- **[/reference](/reference)** — consulter les points d’accès, les schémas des requêtes et réponses, et tester directement les appels ;
- **[/api/openapi.json](/api/openapi.json)** — obtenir le document OpenAPI 3.1 brut, importable dans Postman, Insomnia ou un générateur de code.

Cette documentation est construite à partir des mêmes validateurs VineJS que ceux utilisés par l’API. Elle reflète donc le fonctionnement réel de l’application. Privilégiez-la à toute liste de points d’accès rédigée manuellement.

---

## Conventions

**URL de base :** `http://<your-server>/api`

**Réponses :**

- Une réponse réussie contient `{ "success": true }` et un code HTTP 2xx.
- Une réponse d’erreur renvoie un code HTTP adapté (400, 404, 409 ou 500), accompagné d’un message explicatif.
- Les opérations longues (téléchargements, tests de performance et calcul d’embeddings) renvoient un code 201 ou 202 et un identifiant de tâche ou de test permettant de suivre leur progression.

**Opérations asynchrones :** soumettre une tâche → recevoir son identifiant → interroger le point d’accès de suivi jusqu’à son achèvement.
