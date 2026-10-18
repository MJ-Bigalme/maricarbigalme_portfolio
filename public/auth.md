# Authentication Information for Maricar Joy Bigalme Portfolio

## Overview

This portfolio website provides **public, read-only access** to professional information. **No authentication is required** to access any resources.

## Access Model

| Resource | Authentication | Access Level |
|----------|---------------|-------------|
| `/portfolio.json` | None | Public |
| `/llms.txt` | None | Public |
| `/llms-full.txt` | None | Public |
| `/agent.json` | None | Public |
| `/openapi.json` | None | Public |
| `/.well-known/*` | None | Public |

## Agent Registration

No agent registration is required. All resources are freely accessible.

### For AI Agents

1. **No API keys needed** - Access all endpoints directly via HTTP GET
2. **No rate limiting** - Standard web access applies
3. **No OAuth/OIDC** - Public data, no authentication flow required

## Data Access

```http
GET https://itsmjb.sticklight.app/portfolio.json
Accept: application/json
```

No `Authorization` header required.

## Contact

For questions about data access:
- Email: maricarbigalmeeee@gmail.com
- LinkedIn: https://www.linkedin.com/in/maricar-bigalme-bba3332b0

## Usage Rights

- Attribution required when citing
- Professional use permitted
- Do not use for impersonation or spam
