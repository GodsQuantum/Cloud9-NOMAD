# Cloud9-NOMAD — source delta

This repository is a public community fork of [Crosstalk-Solutions/project-nomad](https://github.com/Crosstalk-Solutions/project-nomad), based on official `v1.35.1`. It is not the private Cloud9 deployment repository.

| Area | Project NOMAD upstream | Cloud9-NOMAD |
| --- | --- | --- |
| Home | Default landing dashboard | Responsive command center, app category search, favorites and availability cues |
| UI | Original administration layout | Low-power resilience shell and responsive navigation |
| Language | Original English UI | English / French UI toggle (remaining French-only home labels), Chinese-language docs only; Chinese UI not yet implemented |
| Education | Native installed applications | Easier discovery and contextual links to installed local resources |
| AI | Standard local integrations | Configurable remote OpenAI-compatible gateway, auth-aware preflight and explicit embedding model |
| Privacy | Upstream defaults | Documentation-only IPs; runtime user-specific values are configured and never committed |

**Reusability contract:** no real private IP, host, API key, mounted user path or user account. The installed NOMAD instance remains responsible for configuring links and selecting the knowledge resources it actually has. Generic features must never silently assume the host is named Cloud9.

**Building:** follow original upstream build and deployment guidance. Before releasing, run type checking, unit tests and translations QA. The optional `Dockerfile.cloud9` illustrates building from an official image and transplanting compiled generic assets; do not copy any private data.

The Apache-2.0 license and original authors remain credited. Reusable feature changes are squashed and scrubbed; private deployment commit metadata is not published.
