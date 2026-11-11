# Inférence et embeddings via une API compatible OpenAI

Pour utiliser une passerelle authentifiée comme OmniRoute, renseignez la variable `NOMAD_OPENAI_API_KEY` dans l’environnement du conteneur d’administration NOMAD. Cette variable est facultative : une installation Ollama locale fonctionne sans clé API.

## Variables d’environnement

- `NOMAD_OPENAI_API_KEY` — clé d’accès à une passerelle compatible OpenAI.
- `NOMAD_EMBEDDING_MODEL` — identifiant exact du modèle d’embeddings fourni par la passerelle. Lorsqu’il est défini, NOMAD ne télécharge pas de modèle d’embeddings de remplacement.
- `NOMAD_EMBEDDING_DIMENSION` — dimension des vecteurs générés (768 par défaut avec Nomic). Le modèle Qwen3-Embedding-0.6B produit des vecteurs de dimension 1 024.
- `NOMAD_EMBEDDING_DOCUMENT_PREFIX` — préfixe utilisé pour les documents (`search_document: ` par défaut). Une chaîne vide est possible pour les embeddings documentaires Qwen3.
- `NOMAD_EMBEDDING_QUERY_PREFIX` — préfixe utilisé pour les requêtes (`search_query: ` par défaut). Pour Qwen3, utilisez le format d’instruction de recherche adapté à la configuration du modèle servi.

## Configuration de la connexion

Après avoir renseigné les variables, redémarrez uniquement le conteneur d’administration NOMAD.

Dans l’interface, ouvrez **Paramètres → Modèles → Serveur distant**, puis saisissez l’URL de base de la passerelle, **sans** `/v1` (par exemple `http://192.0.2.11:20128`). NOMAD vérifie la connexion à l’aide du point d’accès `GET /v1/models`.

## Précautions pour la base de connaissances

**Ne modifiez jamais la dimension des vecteurs ni les préfixes d’embeddings d’une collection Qdrant déjà peuplée sans réindexer tous ses documents.** Vérifiez l’identifiant précis du modèle et la dimension des vecteurs à l’aide d’une véritable requête d’embeddings avant d’activer l’ingestion documentaire et le RAG.

Ce correctif ajoute la prise en charge d’une passerelle OpenAI authentifiée, mais **ne crée ni ne fournit de clé API OmniRoute**. Les clés doivent être configurées séparément, par un moyen sécurisé.
