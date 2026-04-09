# Prompt: Generate Next Issue Handoff

**SEQUENCE**: This prompt MUST be run AFTER `10p-post-implementation-review.md` is complete.

After the current issue is complete, prepare the next work item.

**Files**:
- Handoff files: `docs/handoff/HANDOFF-ISSUE-###.md` (optional for workshop; not all repos use)
- Completed specs: `specs/###-slug-name/`

**Your tasks**:
1. Review open issues and identify candidates for next work
2. Check for blocking dependencies (GitHub issue dependencies)
3. Check for file conflicts (already being modified in open PRs)
4. Confirm priority and milestone alignment
5. Document the selection rationale and next issue number
6. Ready to start `docs/contributing/AGENT-WORKFLOW.md` Phase 2 for the next issue
