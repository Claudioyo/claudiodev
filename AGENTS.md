
# ClaudioDev Development Framework — CDF 1.0

## Project mission

ClaudioDev.com is a professional developer portfolio focused on:

- Web development and business applications.
- Python automation.
- REST APIs and integrations.
- Practical AI solutions.
- Interactive demonstrations of real capabilities.

The website must be professional, maintainable, accessible,
secure, and honest about implemented functionality.

## Developer workflow

1. Inspect the existing code before proposing changes.
2. Explain the objective and affected files.
3. Prefer small, incremental changes.
4. Preserve existing functionality unless changes are approved.
5. Run relevant checks after implementation.
6. Report what changed, what was tested, and what remains pending.
7. Document important architectural decisions.

## Approval and safety

- Do not delete files or rewrite major sections without approval.
- Do not install dependencies without explaining why.
- Do not modify secrets or environment files unnecessarily.
- Do not deploy or push changes without explicit authorization.
- Never claim that a mockup is a working feature.
- Never fabricate test results or successful integrations.

## Architecture

- `frontend/`: Next.js, React, TypeScript, Tailwind CSS.
- `backend/`: Reserved for future backend services.
- `docs/`: Architecture, decisions, and technical documentation.
- `.agents/skills/`: Reusable development procedures.

Do not create directories or services until needed.

## Frontend identity

The visual identity is Coffee Tech:

- Warm cream and coffee tones for professional sections.
- Dark developer-oriented styling for Labs.
- Clean typography and restrained microinteractions.
- Responsive layouts and accessible interfaces.

Preserve the existing design system.

## Next.js instructions

When modifying the frontend, read `frontend/AGENTS.md`
and follow the relevant installed Next.js documentation.

Do not modify generated Next.js agent rules.

## Development principles

- Favor clarity over unnecessary complexity.
- Reuse existing components when appropriate.
- Prefer TypeScript type safety.
- Keep business logic separate from presentation.
- Avoid unnecessary dependencies.
- Make changes understandable to a developer who is learning.

## Definition of done

A task is complete only when:

1. The requested behavior has been implemented.
2. Relevant checks have been performed.
3. Known limitations have been reported.
4. Documentation has been updated when necessary.
5. The developer can explain how to verify the result.
