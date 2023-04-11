#!/usr/bin/env node
import fs from "fs";
const fsp = fs.promises;
import os from "os";
import path from "path";
import { Configuration, OpenAIApi } from "openai";
import { sleep, checkDirectory, getKey } from "./util.js";

const configDir = path.join(os.homedir(), ".cpt");
const configFile = path.join(configDir, "config.json");

await checkDirectory(configDir);

console.log("Reading key from config file");

const key = await getKey(configFile);

console.log("The key was succesfully imported :" + key);
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
const messages = [];
while (true) {
  await sleep();
  console.log("test");
}
