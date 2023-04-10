#!/usr/bin/env node
console.log("hello world");
import fs from "fs";
const fsp = fs.promises;
import os from "os";
import path from "path";
import { hideBin } from "yargs/helpers";
import yargs from "yargs";

const configDir = path.join(os.homedir(), ".cpt");
const configFile = path.join(configDir, "config.json");
let prompt;
if (!fs.existsSync(configDir)) {
  console.log("No config directory found, creating one in " + configDir);
  try {
    await fsp.mkdir(configDir).then(() => {
      cosole.log("Directory made");
    });
  } catch (err) {
    console.error("Could not make directory. Try again with more permissions");
    process.exit(1);
  }
}

while (true) {
  console.log("test");
}
// let apiKey = argv.key;

// if (!apiKey) {
//   try {
//     const configStr = await fs.readFile(configFile);
//     const config = JSON.parse(configStr);
//     apiKey = config.apiKey;
//   } catch (err) {
//     console.error('No API key found');
//     process.exit(1);
//   }
// }

// await fs.writeFile(configFile, JSON.stringify({ apiKey }));

// console.log(`API key set to "${apiKey}"`);
