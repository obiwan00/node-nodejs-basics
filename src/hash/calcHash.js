import crypto from 'crypto';
import { readFile } from 'fs/promises';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const contentPath = path.resolve(__dirname, './files/fileToCalculateHashFor.txt');

export const calculateHash = async () => {

    const content = await readFile(contentPath, { encoding: 'utf-8' });
    console.log(content);

    const hash = crypto.createHash('md5')
        .update(content)
        .digest('hex');

    console.log(hash);
}

calculateHash();