import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "I dropped the production database, deleted the only backup, and wrote a postmortem blaming a typo. The typo was me.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
