# Chiller-site — Claude Code notes

Vite/React site + the `/go/<provider>` redirect page (Netlify, auto-deploys from `main`).
Project-wide rules and history live in the chiller-docs repo `CLAUDE.md`.

## Model split: Opus thinks, Sonnet executes (always)

The main session runs on Opus (`"model": "opus"` in `.claude/settings.json`). To save tokens,
**every task that changes files** follows the `opus-plan` skill (`.claude/skills/opus-plan/`):

1. **Opus (you) thinks:** read only the code needed, decide, write a self-contained plan.
2. **Sonnet executes:** hand the plan to the `sonnet-executor` subagent (model: sonnet) — it does
   the edits, test runs and fix loops.
3. **Opus reviews:** read its report + `git diff`, fix small issues, then commit/PR as usual.

Exceptions — do it yourself, no subagent: questions/explanations, research with no edits, and
tiny changes (1–2 obvious edits), where spawning costs more than it saves. Noam doesn't need to
ask for this each time; it's the default.
