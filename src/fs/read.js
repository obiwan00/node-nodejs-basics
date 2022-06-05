import fs from 'fs/promises';
import path from 'path';
import url from 'url';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const fileToReadPath = path.resolve(__dirname, './files/fileToRead.txt');
const errorMessage = 'FS operation failed';

export const read = async () => {
    try {
        console.log(await fs.readFile(fileToReadPath, { encoding: 'utf-8' }));
    } catch (error) {
        throw new Error(errorMessage);
    }
};

read();