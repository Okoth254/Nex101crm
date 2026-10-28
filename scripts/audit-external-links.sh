#!/usr/bin/env bash
# Fails if upstream promotional links or branding creep back into user-facing code.
# Identifiers (NEXTCRM_TOKEN, @nextcrm/plugin-sdk, DB names, image names) are not matched.
set -euo pipefail
cd "$(dirname "$0")/.."

PATTERN='pdovhomilja|discord\.gg|discord\.com/invite|nextcrm\.(app|io|dev)|powered by|hosted by|vercel\.com|ui\.shadcn\.com|NextCRM'
PATHS=(app components emails locales apps/docs/app apps/docs/lib apps/docs/content/docs actions lib README.md CONTRIBUTING.md)
ALLOWLIST="scripts/audit-external-links.allowlist"

hits=$(git grep -nIE "$PATTERN" -- "${PATHS[@]}" || true)
if [ -f "$ALLOWLIST" ]; then
  # allowlist lines are fixed strings; any hit line containing one is accepted
  hits=$(printf '%s\n' "$hits" | grep -vFf <(grep -vE '^\s*(#|$)' "$ALLOWLIST") || true)
fi
hits=$(printf '%s\n' "$hits" | sed '/^$/d')

if [ -n "$hits" ]; then
  echo "Upstream branding or promotional links found:"
  echo "$hits"
  echo
  echo "Remove them, or add an intentional exception to $ALLOWLIST."
  exit 1
fi
echo "audit-external-links: clean"
