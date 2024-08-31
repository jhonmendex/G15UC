//modulos de node
import { cpus, platform } from "node:os";
import { arch } from "node:process";

console.log(`This processor architecture is ${arch}`);
console.log(`This processor architecture is ${platform}`);
console.log(`This processor architecture is ${cpus}`);
