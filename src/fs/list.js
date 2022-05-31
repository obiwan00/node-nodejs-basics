import fs from 'fs/promises';
import path from 'path';
import url from 'url';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const dirToReadPath = path.resolve(__dirname, './files');
const errorMessage = 'FS operation failed';

export const list = async () => {
    try {
        await (await fs.readdir(dirToReadPath)).forEach(dirItem => {
            console.log(dirItem);
        })
    } catch (error) {
        throw new Error(errorMessage);
    }
};

list();