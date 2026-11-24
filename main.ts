import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One-line confession, 1-200 chars: own the outage in the postmortem — the typo you blamed is you.
const line =
  "I dropped the production database, deleted the only backup, then blamed a typo in the postmortem. The typo was me.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
