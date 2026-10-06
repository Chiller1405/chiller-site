---
name: opus-plan
description: Saves tokens on implementation work — the main session (Opus) does the thinking (reads the code, decides, writes a precise plan), then hands the hands-on execution (edits, test runs, fix loops) to the `sonnet-executor` subagent running on Sonnet, and finally reviews the result. Use when Noam runs /opus-plan <task>, or asks to "think with Opus and execute with Sonnet" / "תחשוב עם אופוס ותבצע עם סונט".
disable-model-invocation: true
argument-hint: <המשימה>
---

# /opus-plan — think with Opus, execute with Sonnet

The expensive tokens in an implementation task are rarely the thinking — they're the execution:
reading files over and over, editing, running tests, reading long test output, retrying. This
skill keeps the thinking in the main (Opus) session and sends the execution to a Sonnet subagent.

Task: $ARGUMENTS

## 1. Think (Opus, here)

- Understand the task. If a real decision belongs to Noam (risky change, policy, OpenAI model,
  DB/schema, links & monetization, deleting data — see CLAUDE.md), ask **before** planning.
- Read only the code needed to decide. Use targeted Grep/Read, not whole-repo sweeps.
- Decide the approach. No option surveys — one recommendation.

## 2. Write the plan

The executor starts with **zero context** — it never saw this conversation. The plan must stand
alone. Include:

- **Goal** — one or two sentences.
- **Files and exact changes** — path + function/line area + what to change. For anything subtle,
  give the exact code (snippet or before → after). Vague steps ("improve error handling") cost
  more tokens than they save, because Sonnet will explore to fill the gap.
- **Order** of the steps, if it matters.
- **Verification** — the exact commands (e.g. `cd chiller-bot && npm test`) and what "passing" means.
- **Out of scope** — what not to touch.
- **Commit?** — say explicitly whether to commit (and which files) or leave it uncommitted.
  Default: leave uncommitted; you commit after review.

If the whole task is tiny (one or two obvious edits), skip the subagent and just do it — spawning
costs more than it saves.

## 3. Execute (Sonnet)

Spawn the executor with the plan as its whole prompt:

```
Agent(subagent_type: "sonnet-executor", description: "<3-5 words>", prompt: <the plan>,
      run_in_background: false)
```

For big tasks with independent parts (e.g. bot change + site change), split into separate plans
and run several executors in parallel — but never two executors editing the same file.

## 4. Review (Opus, here — keep it cheap)

- Read the executor's report.
- Look at `git diff --stat`, then `git diff` only on the files that matter. Don't re-read the
  whole codebase.
- If something is wrong: small fix → do it yourself; larger → send a short follow-up plan to a
  new executor (or `SendMessage` to the same one).
- Then continue the normal flow from CLAUDE.md: commit only these files, PR for bot changes,
  `/verify-live` after any push that changes behavior.

## 5. Report to Noam (in Hebrew)

Short: what was done, what was checked, anything that's still open.
