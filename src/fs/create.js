import fs from 'fs/promises';
import path from 'path';
import url from 'url';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const newFilePath = path.resolve(__dirname, './files/fresh.txt');
const newFileContent = 'I am fresh and young';
const errorMessage = 'FS operation failed';


export const create = async () => {
    try {
        await fs.writeFile(newFilePath, newFileContent, { flag: 'wx' });
    } catch (error) {
        throw new Error(errorMessage);
    }
};

create();