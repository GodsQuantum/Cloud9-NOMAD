# OpenAI-compatible inference and embeddings

For an authenticated gateway like OmniRoute, set NOMAD_OPENAI_API_KEY on
the NOMAD admin container. This remains optional; local Ollama installs
without an API key continue to work.

Optional environment variables:
- NOMAD_OPENAI_API_KEY: scoped token for OpenAI-compatible gateway.
- NOMAD_EMBEDDING_MODEL: exact external model ID as returned by /v1/models.
  With this configured, NOMAD will not download an alternative embedding model.
- NOMAD_EMBEDDING_DIMENSION: output dimension (default 768 for Nomic).
  Qwen3-Embedding-0.6B uses 1024.
- NOMAD_EMBEDDING_DOCUMENT_PREFIX: task prefix, default 'search_document: '.
  Set to an empty string for Qwen3 document embeddings.
- NOMAD_EMBEDDING_QUERY_PREFIX: task prefix, default 'search_query: '.
  Use the applicable Qwen3 retrieval instruction format as required by
  the encoder serving the model.

After configuring variables, restart the NOMAD admin container. Use
the native Settings > Models > Remote URL field to configure a gateway
base URL without /v1 (for instance http://192.0.2.11:20128).
The URL is validated using GET /v1/models.

Never change vector dimensions or embedding prefixes on a populated
Qdrant collection without reindexing its points. Verify the exact model
identity and vector length with a real embeddings request before
enabling the knowledge-base ingestion and RAG features.

This change does not configure or provision OmniRoute API keys.
