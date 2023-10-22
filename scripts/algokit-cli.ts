import { execSync } from "child_process";
import { globSync } from "glob";
import { readFileSync, writeFileSync, mkdirSync, copyFileSync } from "fs";
import path from "path";
import { toTitleCase } from "./common";

const output = execSync(
  "cd submodules/algokit-cli/ && \
rm -rf docs/cli && \
poetry install && \
poetry run poe docs_generate"
);

console.log(output.toString());

const allFiles = globSync("submodules/algokit-cli/docs/**/*.*");

allFiles.forEach((file) => {
  const newPath = file.replace(
    "submodules/algokit-cli/docs/",
    "docs/algokit-cli/"
  );

  if (file.endsWith("cli/index.md")) {
    const content = readFileSync(file, "utf-8");
    const newContent = content
      .split("\n")
      .map((line) => {
        return line
          .replace(/{/g, "&#123;")
          .replace(/}/g, "&#125;")
          .replace(/</g, "&#60;");
      })
      .join("\n");
    writeFileSync("docs/algokit-cli/index.md", newContent);
    return;
  }

  if (file.match(/(md|png|jpg)$/)) {
    mkdirSync(path.dirname(newPath), { recursive: true });
    copyFileSync(file, newPath);
  }
});

allFiles
  .filter((f) => f.endsWith(".jpg"))
  .forEach((file) => {
    const newPath = file.replace(
      "submodules/algokit-cli/docs/",
      "docs/algokit-cli/"
    );

    mkdirSync(path.dirname(newPath), { recursive: true });
    copyFileSync(file, newPath);
  });

const dirs = globSync("docs/algokit-cli/**/*/");
dirs.forEach((dir) => {
  if (dir.endsWith("sphinx")) return;
  const title = toTitleCase(path.basename(dir).replace(/-/g, " "));
  writeFileSync(path.join(dir, "_category_.yml"), `label: "${title}"`);
});

writeFileSync(
  path.join("docs/algokit-cli", "_category_.yml"),
  `label: "Algokit CLI"`
);
