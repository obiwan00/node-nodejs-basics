import fs from 'fs/promises';
import path from 'path';
import url from 'url';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const fileToDeletePath = path.resolve(__dirname, './files/fileToRemove.txt');
const errorMessage = 'FS operation failed';

export const remove = async () => {
    try {
        await fs.rm(fileToDeletePath);
    } catch (error) {
        throw new Error(errorMessage);
    }
};

remove();