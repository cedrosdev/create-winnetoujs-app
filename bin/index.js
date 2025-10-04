#!/usr/bin/env node

const fs = require("fs-extra");
const path = require("path");
const { Command } = require("commander");

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
  const dest = path.resolve(__dirname, "..", targetDir);

  console.log(`Creating WinnetouJs app in ${dest}...`);
  await fs.copy(templateDir, dest);

  // Update package.json with the correct app name
  const packageJsonPath = path.join(dest, "package.json");
  if (await fs.pathExists(packageJsonPath)) {
    const packageJson = await fs.readJson(packageJsonPath);
    // Sanitize package name according to npm rules
    const sanitizedName = targetDir
      .toLowerCase() // Convert to lowercase
      .replace(/\s+/g, "-") // Replace spaces with hyphens
      .replace(/[^a-z0-9\-_.~]/g, "") // Remove invalid characters
      .replace(/^[._]/, "") // Remove leading dots or underscores
      .replace(/[._]$/, "") // Remove trailing dots or underscores
      .substring(0, 214); // Limit to 214 characters

    packageJson.name = sanitizedName;
    await fs.writeJson(packageJsonPath, packageJson, { spaces: 2 });
    console.log(`Updated package.json name to "${sanitizedName}"`);
  }

  console.log("Installing dependencies (npm i)...");
  // you can spawn child_process here if you want automatic install
  console.log("Done! Now run:");
  console.log(`  cd ${targetDir}`);
  console.log("  npm install");
  console.log("  npm start");
}

program.parse();
