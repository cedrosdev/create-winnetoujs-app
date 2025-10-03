#!/usr/bin/env node
import fs from "fs-extra";
import path from "path";
import { fileURLToPath } from "url";
import { Command } from "commander";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const program = new Command();

program
  .name("create-winnetoujs-app")
  .description("Create a new WinnetouJs application")
  .version("1.0.0")
  .argument("[project-directory]", "directory to create the app in", "my-app")
  .option("-t, --template <template>", "template to use", "basic")
  .action((projectDirectory, options) => {
    const targetDir = projectDirectory;
    const templateDir = path.join(
      __dirname,
      "..",
      "templates",
      options.template
    );
    main(targetDir, templateDir);
  });

async function main(targetDir, templateDir) {
  const dest = path.resolve(process.cwd(), targetDir);

  console.log(`Creating WinnetouJs app in ${dest}...`);
  await fs.copy(templateDir, dest);

  console.log("Installing dependencies (npm i)...");
  // you can spawn child_process here if you want automatic install
  console.log("Done! Now run:");
  console.log(`  cd ${targetDir}`);
  console.log("  npm install");
  console.log("  npm start");
}

program.parse();
