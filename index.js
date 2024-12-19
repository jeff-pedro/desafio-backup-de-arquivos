import fs from "fs/promises";
import path from "path";
import { glob } from 'glob';

async function getJsonFiles() {
    return glob('**/*.json', { 
        ignore: [
            'node_modules/**',
            'package*.json'
        ] 
    });
}

async function createBackup(filesList) {
    filesList.forEach(async (file) => {
        const { dir, name } = path.parse(file);
        await fs.copyFile(file, `${dir}/${name}.bak`)
    });
}

const files = await getJsonFiles();
createBackup(files);
