import fs from "fs";
const fsp = fs.promises;
import { questions } from "./constants.js";
export const isValidKey = (value) =>
  typeof value === "string" && value.length === 51;

export const sleep = async () =>
  new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });

export const checkDirectory = async (configDir) => {
  if (!fs.existsSync(configDir)) {
    console.log("No config directory found, creating one in " + configDir);
    try {
      await fsp.mkdir(configDir).then(() => {
        cosole.log("Directory made");
      });
    } catch (err) {
      console.error(
        "Could not make directory. Try again with more permissions"
      );
      process.exit(1);
    }
  }
};
export const getKey = async (configFile) => {
  let key = "";
  await fsp
    .readFile(configFile, "utf8")
    .then((data) => {
      if (!isValidKey(data)) throw new Error("Invalid");
      else {
        key = data;
      }
    })
    .catch(async (e) => {
      if (e.message === "Invalid")
        console.error("Saved key is invalid, requesting a new one");
      else console.error("No key found");
      await inquirer.prompt(questions).then(async (answers) => {
        key = answers.key;
        await fsp.writeFile(configFile, key).catch((e) => {
          console.log("Could not write key to disk, check permissions");
        });
      });
    });
  return key;
};
