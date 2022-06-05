import fs from 'fs/promises';
import path from 'path';
import url from 'url';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const oldFilePath = path.resolve(__dirname, './files/wrongFilename.txt');
const newFilePath = path.resolve(__dirname, './files/properFilename.md');;
const errorMessage = 'FS operation failed';

const isExist = async (path) => {
    try {
        await fs.access(path)
        return true;
    } catch (error) {
        return false;
    }
}

export const rename = async () => {
    try {
        if (await isExist(newFilePath)) {
            throw new Error();
        }

        await fs.rename(oldFilePath, newFilePath);
    } catch (error) {
        throw new Error(errorMessage);
    }
};

rename();