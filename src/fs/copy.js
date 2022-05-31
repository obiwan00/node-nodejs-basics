import fs from 'fs/promises';
import path from 'path';
import url from 'url';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const recursiveCopy = async (sourceFolderPath, destinationFolderPath) => {
    await fs.mkdir(destinationFolderPath);

    await (await fs.readdir(sourceFolderPath)).forEach(async (itemForCopy) => {
        const sourceCopyItemPath = path.resolve(sourceFolderPath, itemForCopy)
        const destinationCopyItemPath = path.resolve(destinationFolderPath, itemForCopy)

        const isCopyItemDirectory = (await fs.stat(sourceCopyItemPath)).isDirectory()
        if (isCopyItemDirectory) {
            await recursiveCopy(sourceCopyItemPath, destinationCopyItemPath)
            return;
        }

        await fs.copyFile(sourceCopyItemPath, destinationCopyItemPath);
    });
}

const copySourcePath = path.resolve(__dirname, './files');
const copyDestinationPath = path.resolve(__dirname, './files_copy');
const errorMessage = 'FS operation failed';

export const copy = async () => {
    try {
        await recursiveCopy(copySourcePath, copyDestinationPath);
    } catch (error) {
        throw new Error(errorMessage);
    }
};


copy();