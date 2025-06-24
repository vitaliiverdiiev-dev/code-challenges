import { mkdirSync, writeFileSync } from "fs";
import { spawnSync } from "child_process";

const rawName = process.argv[2];

if (!rawName) {
  console.error("❌ Please provide a challenge name");
  process.exit(1);
}

const kebab = rawName.toLowerCase().replace(/\s+/g, "-");
const camelCase = rawName
  .toLowerCase()
  .replace(/[^a-zA-Z0-9 ]+/g, "") // remove punctuation
  .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) =>
    index === 0 ? word.toLowerCase() : word.toUpperCase()
  )
  .replace(/\s+/g, "");

const dir = `challenges/${kebab}`;

mkdirSync(dir, { recursive: true });

writeFileSync(
  `${dir}/index.ts`,
  `export function ${camelCase}(): void {\n  // TODO: Implement\n}\n`
);

writeFileSync(
  `${dir}/index.test.ts`,
  `import { ${camelCase} } from './index'\n\ndescribe('${camelCase}', () => {\n  it('should work', () => {\n    expect(true).toBe(true)\n  })\n})\n`
);

console.log(`✅ Created challenge: ${kebab} → function: ${camelCase}()`);

spawnSync("code", [`${dir}/index.ts`], { stdio: "inherit", shell: true });
