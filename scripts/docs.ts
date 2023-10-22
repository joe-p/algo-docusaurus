import { globSync } from "glob";
import { readFileSync, writeFileSync, mkdirSync } from "fs";
import path from "path";

function toTitleCase(str) {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

const mdFiles = globSync("submodules/docs/docs/**/*.md");

mdFiles.forEach((file) => {
  // TODO: Get rest-apis/ and generate_keys.md working
  // I think it's just a metter of escaping "<"
  if (file.includes("rest-apis/")) return;
  if (file.includes("generate_keys.md")) return;

  const content = readFileSync(file, "utf-8");
  const newLines: string[] = [];

  if (content.match(/^===/m)) {
    newLines.push(`import Tabs from '@theme/Tabs';`);
    newLines.push(`import TabItem from '@theme/TabItem';`);
    newLines.push("");
  }

  let inTab = false;
  let inCodeBlock = false;
  content.split("\n").forEach((line) => {
    if (line.trim().startsWith("<!--")) return;

    // TODO: Get images working
    if (line.includes(".png") || line.includes(".jpg")) return;

    // TODO: convert metadata to frontmatter
    if (line.startsWith("[comment]:")) return;
    if (line.toLowerCase().startsWith("title:")) {
      newLines.unshift("");
      newLines.unshift(`---`);
      newLines.unshift(`title: ${line.replace(/(T|t)itle:/, "").trim()}`);
      newLines.unshift(`---`);
      return;
    }
    if (line.trim() === "---") return;

    // TODO: Fix styles working
    if (line.includes('style="') || line.includes("{:")) return;

    if (line.trim().startsWith("```")) {
      inCodeBlock = !inCodeBlock;
    }

    if (line.startsWith("===")) {
      if (!inTab) {
        newLines.push(`<Tabs>`);
        inTab = true;
      } else {
        newLines.push(`</TabItem>`);
      }

      const name = line.split('"')[1];
      newLines.push(`<TabItem value="${name.toLowerCase()}" label="${name}">`);
      newLines.push("");
    } else if (inTab && line.length > 0 && !line.match(/^\s/)) {
      inTab = false;
      newLines.push(`</TabItem>`);
      newLines.push(`</Tabs>`);
      newLines.push("");
      newLines.push(line);
    } else if (inTab) {
      newLines.push(line.trim());
    } else if (file.includes("cli-reference.md")) {
      newLines.push(line.replace(/</g, '{"<"}'));
    } else {
      if (line.startsWith("```")) {
        newLines.push("");
      }

      // TODO: Fix styles
      newLines.push(
        line
          // TODO: Fix href=#storage-state-schema
          .replace(/href=#storage-state-schema/g, "")
          // TODO: Figure out what <LINK> is. Perhaps just placeholders that never got updated?
          .replace(/<LINK>/g, "")
          .replace("length <= 4kb.", 'length {"<"}= 4kb.')
      );
    }
  });

  if (inTab) {
    newLines.push(`</TabItem>`);
    newLines.push(`</Tabs>`);
    newLines.push("");
  }

  const newPath = file.replace("submodules/docs/docs/", "docs/core/");
  mkdirSync(path.dirname(newPath), { recursive: true });

  writeFileSync(newPath, newLines.join("\n"));
});

const dirs = globSync("docs/core/**/*/");
dirs.forEach((dir) => {
  const title = toTitleCase(path.basename(dir).replace(/-/g, " "));
  console.log(dir, title);
  writeFileSync(path.join(dir, "_category_.yml"), `label: "${title}"`);
});
