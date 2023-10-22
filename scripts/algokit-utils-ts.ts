import { globSync } from "glob";
import { readFileSync, writeFileSync, mkdirSync, copyFileSync } from "fs";
import path from "path";
import { toTitleCase } from "./common";

const allFiles = globSync("submodules/algokit-utils-ts/docs/**/*.*");

allFiles
  .filter((f) => !f.endsWith(".md"))
  .forEach((file) => {
    const newPath = file.replace(
      "submodules/algokit-utils-ts/docs/",
      "docs/algokit-utils-ts/"
    );

    mkdirSync(path.dirname(newPath), { recursive: true });
    copyFileSync(file, newPath);
  });

const dirs = globSync("docs/algokit-utils-ts/**/*/");
dirs.forEach((dir) => {
  const title = toTitleCase(path.basename(dir).replace(/-/g, " "));
  writeFileSync(path.join(dir, "_category_.yml"), `label: "${title}"`);
});

writeFileSync(
  path.join("docs/algokit-utils-ts", "_category_.yml"),
  `label: "TypeScript Utils"`
);
