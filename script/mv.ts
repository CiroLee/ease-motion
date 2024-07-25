import fs from 'node:fs';
import path from 'node:path';
import { rimrafSync } from 'rimraf'
const pwd = process.cwd();
const sourceDir = path.join(pwd, 'packages/lib/dist')
const targetDir = path.join(pwd, 'dist');

if (fs.existsSync(targetDir)) rimrafSync(targetDir)
fs.mkdirSync(targetDir)
fs.cpSync(sourceDir, targetDir, { recursive: true })