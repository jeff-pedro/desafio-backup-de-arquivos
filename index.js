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
        const fd = await fs.open(`${dir}/${name}.bak`, 'w');
        fd.close();
    });
}

const files = await getJsonFiles();
createBackup(files);
